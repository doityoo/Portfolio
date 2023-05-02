# 프론트엔드 유인태

### “함께” 만드는 과정을 중요하게 생각합니다.

📞  **PHONE:** 010-5540-1981

📧  **EMAIL:** honesty407@gmail.com

✍🏻  **BLOG:** [do-youit.tistory.com](https://do-youit.tistory.com/)

💻  **GITHUB:** [github.com/doityoo](https://github.com/doityoo)

📋  **RESUME:** [https://url.kr/7jxw4e](https://url.kr/7jxw4e)

![01자산 1-8.png](%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%83%E1%85%B3%20%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A2%2051e25b258710443fafe7543dc52f8d4c/01%25E1%2584%258C%25E1%2585%25A1%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB_1-8.png)

## 01. Skills

---

💻 **Programming Language**

- Javascript
- TypeScript
- HTML
- CSS

📋 **FrameWork & Library**

- React
- Next.js
- Redux-toolkit
- styled-components
- module-css

🛠️ **Tools**

- Git
- Postman
- Notion
- Figma
- Adobe illustrator, Photoshop, Lightroom
- AWS
- Firebase(extensions)

## 02. Projects

---

2023.01

**See you Letter(개인 프로젝트)**

타임캡슐처럼 ‘나’ 혹은 ‘누군가’에게 편지를 쓰고 설정된 기간(1년/6개월/3개월)에 맞춰 편지 형식으로 수신자 이메일로 전송됩니다.

 [`**Github`](https://github.com/codestates-seb/seb39_main_061)** | **`[Deploy](https://seeyouletter-735f3.web.app)`**

**👉🏻 프로젝트에 대한 자세한 내용은 [블로그](https://do-youit.tistory.com/45)에서 확인하실 수 있습니다**

Stack: react, redux-toolkit, styled-components, firebase, firestore, TriggerEmail extensions

---

- **로그인 / 회원가입 (이메일)**
    - firebase를 서버로 사용하여 로그인/회원가입 기능 만듦.
- **LetterForm 페이지(메인)**
    - 편지 내용, 발신자명, 수신자 이메일 데이터를 Redux로 상태관리하여 FireStore에 저장.
    - 이메일 형식의 유효성검사와 편지 데이터 Firestore에 전송의 순서를 동기 async로 동기 처리.
- **TriggerEmail extensions(Firebase)**
    - Firestore에서 전송된 이메일을 받을 컬렉션과 형색 포맷을 맞출 컬렉션을 설정 후 LetterForm.jsx에서 데이터 전송 포맷을 동일하게 맞춰 작업 진행.
    컬렉션 형식과 실제 데이터 전송 형식이 일치해야 메일이 전송 됨. 메일 안의 데이터 치환을 위해 핸들바 문법을 사용.

2022.09 - 10

**Qiuck Book (코드스테이츠 파이널 프로젝트 / 4인)**

우리 매장의 예약/대기를 QR 코드로 관리하고 기간별 예약 현황을 한눈에!
(매장 어드민 / 고객 사이트 각각 개발)

[`**Github**`](https://github.com/codestates-seb/seb39_main_061) |  **[`Deploy`](https://quick-book.ml/)** (AWS 과금으로 배포 중단)

**👉🏻 프로젝트에 대한 자세한 내용은 [노션 문서](https://www.notion.so/Quick-book-FE-64f8df768bef456e82e01e260d5a52a6)에서 확인하실 수 있습니다**

Stack: react, redux-toolkit, axios, apexChart, css-module

---

**👇🏻 나의 역할**

- **프로필 페이지: 프로필 Create, Read, Update**
    - local의 이미지를 브라우저에 불러오고, 서버에 요청하기 위해 formData를 사용해서 이미지(파일) 처리.
- **대시보드: Bar차트, Pie차트, 캘린더, QR코드(read) 4가지 컴포넌트 분리**
    - 서버에서 응답받은 데이터를 가공하여 각 차트에 렌더링하고, 렌더링된 데이터들을 사용자가 csv파일로 다운받을 수 있도록 ApexCharts 라이브러리를 사용.
    - react-calendar 라이브러리로 캘린더 컴포넌트 생성 후, 오늘 이전의 특정 날짜를 클릭했을 경우 Pie차트에 해당 날짜의 시간별 데이터를 %로 보여지도록 처리.
- **QR코드 페이지: QR코드 Create, Read, Update, Delete**
    - React-cr-code 라이브러리로 qr코드를 생성하고, 생성된 QR코드 이미지에 url 삽입 후 formData로 서버 요청 처리.
- **ETC**
    - Header, Sidebar 컴포넌트 개발
    - git branch로 협업 및 관리 했으며, github에서 main < dev < feat/각자 작업명으로 브랜치를 만들고, 브랜치의 병합이 필요시 충돌 수정 후 merge 진행
    - main page(로그인 전) 제작
    - 화면정의서(figma) 제작 & 디자인 총괄 & 로고 디자인

## 03. Education

---

2022.04 - 2022.10

**코드스테이츠 (Code States)** 

소프트웨어 엔지니어링 프론트엔드 과정 

- Javascript / React 과정 학습
- HTTP/네트워크 및 Express로 서버 구축 환경 학습
- Linux/Git 학습
- Backend 인증/보안 학습
- CS/CICD/AWS/TDD 학습
- 20주 동안 과제 수행 및 페어 프로그래밍과 코드 리뷰 진행
- 협업 프로젝트 2회 진행(프리 프로젝트, 파이널 프로젝트)

2012.03 - 2016.03

**인천대학교**

- 조형예술학부 서양화 전공

## 04. Work Experience

---

2016.10 - 2021.01

**(주)마지코리아 / mazi untitled 가방 브랜드** 

**미니멀한 디자인과 실용적인 패션 가방 브랜드 런칭하며 피봇**

- [홈페이지 웹](https://www.maziuntitled.com/) 관리 운영 및 기획
- 이미지 비쥬얼 디렉터 / 포토그래퍼
- 5년만에 연 매출 0원에서 10억원까지 성장

2013.01 - 2016.10

**Mazi / Art Bag 가방 브랜드**

**미대생, 신진 작가들의 캔버스 습작으로 단 하나의 오리지널 Art Bag 브랜드 공동창업**

- 웹 관리 및 디자인 / 포토그래퍼 / 기획
- 2015 대구패션페어 잡화부분 대상
- 2014 창업경진대회 수상

## 04. Introduction

---

. 

**JavaScript**를 기반으로 **React** 프레임워크를 사용합니다. React의 장점인 컴포넌트 기반으로 코드의 재사용성 중요하게 생각하며, 팀 프로젝트를 진행하며 **REST API** 경험을 했고, 맡은 기능을 위해 charts, QR-code 등 다양한 리액트 **라이브러리**를 활용했습니다. 전역 상태관리를 위해 **Redux**를, 서버 요청은 **axios**를 사용했습니다. 개인 프로젝트를 진행하며 **Firebase**로 로그인/회원가입을 연결했고, Firestore에 필요한 데이터를 담았으며, firebase에서 제공하는 TriggerEmail extensions를 사용하여 메일 전송 기능을 만들었습니다. 현재 정적 타입을 지정하여 에러 핸들링과 디버깅을 통해 효율적인 코드 작업을 위해 **TypeScript**와 SSR을 위한 **Next.js**를 공부하고 있습니다. 

.

어떤 분야든 **만들어가는 과정**(making)를 중요하게 생각하며 흥미를 갖습니다. 미술을 전공하며 작품을 만들고, 브랜드를 운영하며 제품을 만들고, 목공을 하며 가구를 만들었습니다. 이제는 프로그래밍으로 서비스, 웹 페이지를 만들고 있습니다. ‘**처음**’과 ‘**변화**’에 익숙하며 필요한 기능은 찾아보고 알아내어 내 것으로 만드는 개발자 입니다.

. 

지난 8년간 패션 브랜드를 공동 창업하고, 운영하면서 무엇보다 협업과 **커뮤니케이션**이 중요하다는 것을 경험했습니다. 개발 또한  혼자하는 것이 아니라 함께하는 것입니다. 전체적인 방향성과 팀원들의 진행 상황을 고려하며, 때로는 리딩하고, 때로는 뒤에서 서포트하며 프로젝트를 진행합니다. 제가 이해하고 있는 것이 정확한지 팀원들과 더블체크하며 오버 커뮤니케이션하는 것을 지향합니다.  어떤 일이든지, 함께 지켜야할 가이드가 필요하며, 가이드를 기준으로 우선순위를 정하여 커뮤니케이션하는 것을 중요하게 생각합니다.

. 

[협업한 팀원들의 피드백](https://www.notion.so/1511388d788e41788d4341eaa2b7fce2)