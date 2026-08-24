---
title: "OS 만들기 02 — 첫 부팅 (부트섹터 Hello World)"
tags: [note, cs, osdev, bootsector, nasm, qemu]
domain: CS
subject: OSDev
source: "OSDev Wiki — Boot Sector, BIOS interrupt 0x10"
created: 2026-05-27
---

⬅︎ [[OS 만들기 01 — 개발 환경 구축]] · [[CS-MOC]] · 다음 → [[OS 만들기 03 — 글자·문자열 출력 (BIOS 텔레타이프)]]

## 한 줄 요약
크로스 컴파일러 없이 **NASM만으로 512바이트 부트섹터**를 만들어, BIOS 텔레타이프(`int 0x10`)로 화면에 "Hello, my OS!"를 찍고 QEMU로 부팅 확인. OS 개발 환경이 끝부터 끝까지(편집→어셈블→부팅→화면출력) 도는지 검증하는 첫 성공.

> 2026-05-27 실제 부팅 성공 (QEMU 8.2.2 / Ubuntu 24.04 / WSL2). 화면 출력: `Hello, my OS!`

![[osdev-02-first-boot.png]]

---

## 전체 코드 (`~/myos/boot.asm`)
```asm
bits 16                 ; BIOS는 CPU를 16비트 리얼 모드로 시작
org 0x7c00              ; BIOS는 부트섹터를 메모리 0x7C00에 적재

start:
    cli                 ; 인터럽트 잠시 끔
    xor ax, ax
    mov ds, ax          ; 세그먼트 레지스터 0으로 초기화
    mov es, ax
    mov ss, ax
    mov sp, 0x7c00      ; 스택 설정
    sti

    mov si, msg         ; SI = 메시지 주소
.print:
    lodsb               ; AL = [SI], SI 증가
    or al, al           ; 문자열 끝(0)인가?
    jz .hang
    mov ah, 0x0e        ; BIOS 텔레타이프 출력 기능
    mov bh, 0
    int 0x10            ; BIOS 영상 인터럽트 → 화면에 한 글자
    jmp .print

.hang:
    hlt
    jmp .hang

msg db "Hello, my OS!", 0

times 510-($-$$) db 0   ; 510바이트까지 0으로 채움
dw 0xaa55               ; 부팅 가능 표식 (필수)
```

## 줄별 핵심
| 코드 | 의미 |
|------|------|
| `bits 16` | CPU가 켜질 때 모드 = 16비트 리얼 모드 ([[OS 만들기 00 — 저수준 기초 개념]] 참조) |
| `org 0x7c00` | BIOS가 부트섹터를 올려놓는 약속된 주소 |
| 세그먼트/스택 초기화 | DS·ES·SS=0, SP=0x7C00 — 안전한 시작 상태 |
| `lodsb` + `int 0x10`(AH=0x0E) | 문자열을 한 글자씩 BIOS로 화면 출력 |
| `times 510-($-$$) db 0` | 코드 뒤를 0으로 채워 510바이트 맞춤 |
| `dw 0xaa55` | 511~512번째 바이트 = 부팅 표식. **없으면 BIOS가 부팅 안 함** |

## 빌드 & 실행
```bash
cd ~/myos
nasm -f bin boot.asm -o boot.bin      # 평평한 바이너리로 어셈블 (정확히 512바이트)
wc -c boot.bin                        # 512 확인

# GUI로 실행
qemu-system-i386 -drive format=raw,file=boot.bin

# 헤드리스 + 화면 캡처 (run.sh)
#   모니터에 시간차 명령 주입: 부팅 대기 → screendump → quit
#   screendump 결과는 PPM이므로 pnmtopng로 PNG 변환
```

`run.sh` 요지:
```bash
{ sleep 2; echo "screendump /tmp/os.png"; sleep 1; echo "quit"; } \
  | qemu-system-i386 -drive format=raw,file=boot.bin -display none -monitor stdio
pnmtopng /tmp/os.png > screenshot.png   # PPM → PNG
```

## 잘 헷갈리는 점
- **`-f bin`이 핵심**: ELF가 아니라 *평평한 바이너리*여야 부트섹터로 직접 쓸 수 있다.
- **0xAA55 빠뜨리면** BIOS가 "부팅 불가 디스크"로 보고 넘어간다.
- QEMU `screendump`는 확장자가 `.png`여도 **PPM**으로 저장됨 → `pnmtopng`(netpbm)로 변환 필요.
- 이 단계는 아직 **BIOS 도움(int 0x10)**을 받는다. 다음 단계(C 커널)는 BIOS 없이 VGA 메모리(`0xB8000`)에 직접 쓴다.
- Windows에서 파일을 만들면 CRLF가 섞일 수 있음 → `sed -i 's/\r$//'`로 정리.

## 관련 개념
- [[OS 만들기 00 — 저수준 기초 개념]] — 부팅 과정·0x7c00·int·레지스터
- [[OS 만들기 01 — 개발 환경 구축]] — NASM·QEMU 설치
- [[CS-MOC]]

## 참고
- OSDev Wiki — "Boot Sector", "Real Mode", "BIOS"
- Ralf Brown's Interrupt List — `int 0x10` 기능표
