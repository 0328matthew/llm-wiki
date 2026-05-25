# Presentations

과학·기술 발표용 슬라이드를 코드(pptxgenjs)로 생성하는 작업 공간.

## 폴더 규칙

```
Presentations/
├─ README.md            # 이 문서 — 워크플로우
├─ STYLE-GUIDE.md       # 발표 디자인 하우스 스타일(재사용)
└─ <발표이름>/
   ├─ build.js          # 슬라이드 생성 스크립트
   ├─ script.md         # 발표 대본 + 타이밍
   ├─ images/           # 다운로드한 이미지(공개 도메인)
   └─ <발표이름>.pptx    # 결과물
```

## 만드는 법

1. 대본을 `script.md`에 정리한다(슬라이드당 ~30초 기준).
2. 이미지를 Wikimedia Commons API로 받는다(아래). NASA 자료는 대부분 퍼블릭 도메인.
3. `build.js`에서 [STYLE-GUIDE](STYLE-GUIDE.md)를 따라 슬라이드를 구성한다.
4. 빌드: 전역 npm 모듈을 쓰므로 `NODE_PATH`를 지정한다.
   ```powershell
   $env:NODE_PATH = "$env:APPDATA\npm\node_modules"
   node build.js
   ```
5. 검수(렌더 → PNG): LibreOffice가 없으면 설치된 PowerPoint를 COM으로 호출해 내보낸다.
   ```powershell
   $ppt = New-Object -ComObject PowerPoint.Application
   $pres = $ppt.Presentations.Open($pptx, $true, $false, $false)
   $pres.Export($renderDir, 'PNG', 1920, 1080); $pres.Close(); $ppt.Quit()
   ```
   PNG를 눈으로 확인해 오버플로/겹침/대비를 잡는다.

## 필요 도구 (1회 설치)

```powershell
npm install -g pptxgenjs react-icons react react-dom sharp
```

- `pptxgenjs` — 슬라이드 생성
- `react-icons` + `react` + `react-dom` + `sharp` — 아이콘을 PNG로 래스터화
- 렌더 검수용: PowerPoint(COM) 또는 LibreOffice `soffice`

## 이미지 받기 (Wikimedia Commons)

API에 `User-Agent`를 꼭 넣는다(없으면 429). 검색:

```powershell
$ua = 'llm-wiki-ppt-builder/1.0 (이메일)'
$q  = [uri]::EscapeDataString('검색어')
$url = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=$q&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size&iiurlwidth=1600&format=json"
Invoke-RestMethod $url -Headers @{ 'User-Agent' = $ua }
```

> 주의: 검색 결과에 라벨/격자/흰 배경이 있는 "도표"가 섞인다. 받기 전에 한 장씩 눈으로 확인할 것. 다크 테마에는 깔끔한 사진만.
