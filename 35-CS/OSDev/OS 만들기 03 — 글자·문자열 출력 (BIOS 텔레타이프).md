---
title: "OS 만들기 03 — 글자·문자열 출력 (BIOS 텔레타이프)"
tags: [note, cs, osdev, bios, nasm, assembly, bootsector]
domain: CS
subject: OSDev
source: "OSDev Wiki — BIOS interrupt 0x10, Real Mode"
created: 2026-05-27
---

⬅︎ [[OS 만들기 02 — 첫 부팅 (부트섹터 Hello World)]] · [[CS-MOC]] · 다음 → (예정) [[OS 만들기 04 — 보호 모드 진입]]

## 한 줄 요약
부트섹터에서 **BIOS 영상 인터럽트 `int 0x10` (AH=0x0E, 텔레타이프)**을 써서 글자 하나 → 문자열 전체를 출력. 이 단계의 핵심 깨달음 = "어셈블리에는 함수 호출 문법이 없고, **레지스터에 인자를 채워두고 `int`로 호출**한다"는 저수준 호출 규약.

> 진행 기록: 과제1(빈 부팅) → 과제2('A' 한 글자) → 과제3-1(naive 반복) → 과제3-2(메모리+루프)

---

## 핵심 개념: 어셈블리의 "함수 호출"

C/C++의 `putchar('A')`는 **인자를 괄호 안에 넣어** 호출해요. 어셈블리에는 그 문법이 없어요. 대신:

```c
// C로 친다면 ↓
ah = 0x0E;          // "글자 찍기 기능"
al = 'A';           // 찍을 글자
bios_video_call();  // int 0x10
```

= **"약속된 레지스터에 인자를 채운 뒤, `int 번호`로 호출"** = BIOS 호출 규약.

| 어셈블리 | C로 치면 | 역할 |
|---------|---------|------|
| `int 0x10` | 영상부서 함수 호출 | 화면 관련 BIOS 서비스 진입 (16번 부서) |
| `mov ah, 0x0E` | 함수 안의 "어떤 기능"인지 번호로 지정 | 0x0E = 텔레타이프 글자 출력 |
| `mov al, 'A'` | 인자(데이터) | 출력할 문자 |

> 비유: 영상부에 **전화(`int 0x10`)** → "**14번 업무**(AH=0x0E) 부탁", "**글자는 A**(AL)" 라고 주문서를 미리 적어두면 부서가 그 종이를 읽고 처리.

## `AH` / `AL` — 한 레지스터의 두 칸
`AX`는 16비트지만, 상하 8비트씩 따로 쓸 수 있어요.
```
        AX  (16-bit)
   ┌──────────┬──────────┐
   │    AH    │    AL    │   ← 각 8-bit
   └──────────┴──────────┘
```
C로 비유:
```c
union { uint16_t ax; struct { uint8_t al, ah; }; };
```
`AL`은 **1바이트** → 글자 한 개(ASCII 코드 하나)만 들어감. 그래서 `mov al, "Hello"`는 불가능.

## 과제 2 — 글자 하나 찍기 (`'A'`)
```asm
bits 16
org 0x7c00

start:
    mov ah, 0x0e        ; AH ← 텔레타이프 기능
    mov al, 'A'         ; AL ← 찍을 글자
    int 0x10            ; BIOS 호출 → 화면에 'A'

hang:
    jmp hang

times 510-($-$$) db 0
dw 0xaa55
```
- `mov 받을곳, 값` → C의 대입 `dest = value`와 같음
- **순서가 중요**: `int 0x10`을 부르기 전에 AH·AL이 채워져 있어야 함 (BIOS는 호출되는 순간 레지스터를 읽음)

## 과제 3-1 — 문자열을 무식하게 (불편함 체험용)
```asm
mov ah, 0x0e
mov al, 'H'  | int 0x10
mov al, 'e'  | int 0x10
mov al, 'l'  | int 0x10
mov al, 'l'  | int 0x10
mov al, 'o'  | int 0x10
```
> 글자 100개면 200줄 → **반복문이 필요한 이유를 몸으로 느끼는 단계**.

## 과제 3-2 — 메모리 + 반복문

목표: 아래 C 코드를 어셈블리로 푼다.
```c
const char *msg = "Hello";
while (*msg != '\0') {
    putchar(*msg);
    msg++;
}
```

### 새 조각 4개

| 어셈블리 | C로 치면 | 의미 |
|---------|---------|------|
| `msg db "Hello", 0` | `char msg[] = "Hello";` (널 종료 자동) | 메모리에 바이트들을 박고 라벨 `msg`로 그 시작 주소를 가리킴 |
| `mov si, msg` | `char *si = msg;` | 포인터 레지스터 `SI`에 시작 주소 |
| `lodsb` | `al = *si; si++;` | "load string byte" — 한 명령으로 역참조 + 포인터 증가 |
| `or al, al` / `jz .done` | `if (al == 0) break;` | 널 종료 검사 + 조건 점프 |

> `db "Hello", 0`의 **`, 0`이 C 문자열의 `'\0'`**과 정확히 같은 역할 ([[SA Ch10 문자열]]의 널 종료 개념).
> `SI` 레지스터 = **C의 `char*` 포인터**, `lodsb` = **`*ptr++`** 1:1 대응.

### 완성 코드
```asm
bits 16
org 0x7c00

start:
    mov si, msg
    mov ah, 0x0e

.next:
    lodsb               ; AL ← *SI, SI++
    or al, al           ; AL == 0 ?
    jz .done            ; 끝이면 탈출
    int 0x10            ; 아니면 출력
    jmp .next           ; 다시 루프

.done:
    jmp .done           ; 무한 멈춤 (기존 hang)

msg db "Hello", 0       ; ← 코드 뒤, times 앞

times 510-($-$$) db 0
dw 0xaa55
```

### 왜 `org 0x7c00`이 여기서 진가를 발휘하나
`mov si, msg`에서 NASM이 `msg`의 실제 메모리 주소를 계산해야 함.
- BIOS가 부트섹터를 **0x7C00에 적재**하므로, `msg`도 실제 실행 시에는 `0x7C00 + (msg의 오프셋)` 위치에 있음.
- `org 0x7c00`이 없으면 NASM은 0번지 기준으로 계산 → SI에 잘못된 주소가 들어가 엉뚱한 메모리를 읽음.

C로 치면 — 링커가 심볼 주소를 잘못 매겨서 포인터가 쓰레기 가리키는 상황.

---

## 흔한 실수 (실제로 겪은 것들)
1. **라벨 이름 불일치**: `jz .done`인데 라벨은 `hang:` → "symbol not defined" 에러. **점프 대상과 라벨 이름은 똑같아야** 함 (C의 `goto label` 처럼).
2. **`msg` 정의 누락**: `mov si, msg`만 쓰고 `msg db ...`을 안 적음 → 미정의 심볼 에러. C에서 변수 선언 빠뜨린 거랑 같음.
3. **데이터 위치**: `msg db ...`을 코드 *앞에* 두면, CPU가 데이터 바이트를 명령으로 잘못 실행. **데이터는 실행 코드 뒤, `times` 앞**.
4. **`int 0x10` 전 레지스터 안 채움**: BIOS가 쓰레기 값 읽고 이상한 짓 함. 항상 **채우기 → 호출** 순서.

## 디버깅 팁
- `nasm -f bin boot.asm -o boot.bin` 의 **에러 메시지를 읽기**. 라인 번호와 심볼 이름을 친절히 알려줌.
- 빌드 성공해도 화면이 이상하면 → QEMU 메뉴 **View → Show Tabs**로 시리얼/모니터를 보거나, `qemu-system-i386 ... -d int` 로 인터럽트 추적.

## 관련 개념
- [[OS 만들기 00 — 저수준 기초 개념]] — 레지스터·인터럽트·세그먼트
- [[OS 만들기 02 — 첫 부팅 (부트섹터 Hello World)]] — 부트섹터 기본 구조
- [[SA Ch09 포인터]] · [[SA Ch10 문자열]] — `char*`, 널 종료 (어셈블리와 동일 원리)
- [[CS-MOC]]

## 참고
- OSDev Wiki — "BIOS", "Real Mode", "Boot Sector"
- Ralf Brown's Interrupt List — `int 0x10`/AH=0x0E 정의
