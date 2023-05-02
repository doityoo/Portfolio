// import ProjectGrid from '../projects/project-grid';
import classes from './resume.module.css'
import ReactMarkdown from 'react-markdown';


const Resume = (props) => {
  const resume = props.resume[2];
  return (
    <section className={classes.latest} >
      <h3>RESUME</h3>
      {/* <ProjectGrid
        projects={props.projects}
      /> */}
      <ReactMarkdown
        // components={customRenderers}
      >
        {resume.content}
      </ReactMarkdown>
      <iframe src="./../../projects/resume.html" width="100%" height="2000px" />

    </section>
  );
};

export default Resume;



{/* <article id="51e25b25-8710-443f-afe7-543dc52f8d4c" className="page sans">
  <header>
    <h1 className="page-title">프론트엔드 유인태</h1>
  </header>
  <div className="page-body">
    <div id="cccf25d5-ef14-4af8-896d-0065aa4e7505" className="column-list">
      <div id="2303efad-5856-48a3-91c1-7dbfa300b05f" style={{ width: "62.5%" }} className="column">
        <h3 id="24a2383c-0cb2-41d6-b172-ae3330f06382" className="">“함께” 만드는 과정을 중요하게 생각합니다.</h3>
        <p id="e667c537-cd96-4af2-9bbe-0d926bf0f318" className="">
        </p>
        <p id="065618f5-7b1f-43b1-a996-d2c14c380708" className="">📞  <mark
          className="highlight-brown"><strong>PHONE:</strong></mark> 010-5540-1981</p>
        <p id="67f4528d-3034-41e8-bd10-d2d289b6b93b" className="">📧  <mark
          className="highlight-purple"><strong>EMAIL:</strong></mark> honesty407@gmail.com</p>
        <p id="4d18837c-9a3a-4c2a-a50f-cf15c80f9158" className="">✍🏻 <strong><mark className="highlight-orange">BLOG:
        </mark></strong><a href="https://do-youit.tistory.com/">do-youit.tistory.com</a></p>
        <p id="ef1c9634-c9f9-4e4c-b7c2-0061ff3ae3e6" className="">💻 <strong><mark className="highlight-teal">GITHUB:
        </mark></strong><a href="https://github.com/doityoo">github.com/doityoo</a></p>
        <p id="a4e14aac-c2e9-4fd5-a98d-5740a9ce8262" className="">📋  <mark
          className="highlight-yellow"><strong>RESUME</strong></mark><mark className="highlight-teal"><strong>:
          </strong></mark><a href="https://url.kr/7jxw4e">https://url.kr/7jxw4e</a></p>
        <p id="c9b79a43-a8b0-4aaa-8657-d2f21ec3f974" className="">
        </p>
      </div>
      <div id="227621c2-6713-4bee-9bd6-76f9d12ab6ea" style={{ width: "37.49999999999999%" }} className="column">
        <figure id="2ea49050-ad35-4df1-ad28-3b45a4e6ca4f" className="image" style={{ textAlign: "right" }}><a
          href="%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%83%E1%85%B3%20%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A2%2051e25b258710443fafe7543dc52f8d4c/01%25E1%2584%258C%25E1%2585%25A1%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB_1-8.png"><img
            style={{ width: "192px" }}
            src="%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A6%E1%86%AB%E1%84%83%E1%85%B3%20%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%90%E1%85%A2%2051e25b258710443fafe7543dc52f8d4c/01%25E1%2584%258C%25E1%2585%25A1%25E1%2584%2589%25E1%2585%25A1%25E1%2586%25AB_1-8.png" /></a>
        </figure>
      </div>
    </div>
    <h2 id="18fb6379-4bdf-4ed8-81ae-66b179076b7b" className=""><mark className="highlight-red">01.</mark> Skills</h2>
    <hr id="ea61a2f6-aad9-47ce-b070-f191df00831d" />
    <div id="cc44959a-23de-43bf-9fd8-01b76ac56120" className="column-list">
      <div id="0d22637b-a3eb-4023-90ee-936bae4d15cc" style={{ width: "33.333333333333336%" }} className="column">
        <p id="b62995f1-9648-44cb-9089-0bd8ef304067" className="">💻 <strong>Programming Language</strong></p>
        <ul id="aca54bff-78b4-4da6-a8e8-58b27d28b0e9" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>Javascript</li>
        </ul>
        <ul id="ec449bab-8dc8-49cd-8bfc-84a15f3b5c91" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>TypeScript</li>
        </ul>
        <ul id="29c0f25b-6cc8-4a58-91ff-6586e4ec52fb" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>HTML</li>
        </ul>
        <ul id="a97ecf5b-562f-4a9a-83c6-f2f6f11b1567" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>CSS</li>
        </ul>
        <p id="caa8088a-854b-450e-af53-aad360adc974" className="">
        </p>
      </div>
      <div id="65c4d370-6c7e-49d0-9cd5-cbee0a5f7fe0" style={{ width: "33.333333333333336%" }} className="column">
        <p id="ebe4b742-8cad-4a29-8e34-14f36911703d" className="">📋 <strong>FrameWork &amp; Library</strong></p>
        <ul id="8ea251cf-14c4-4ed5-b180-b4e0cb6df451" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>React</li>
        </ul>
        <ul id="710d9365-d448-4d4d-950a-1738173a0bb8" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}>Next.js</li>
        </ul>
        <ul id="cc990c45-1f0e-44cd-9e8d-8a3c65273785" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Redux-toolkit</li>
        </ul>
        <ul id="a7eedae6-5b53-4940-af10-cee445fcc321" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>styled-components</li>
        </ul>
        <ul id="41dd4908-6114-4537-87c2-30be78177fb7" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>module-css</li>
        </ul>
      </div>
      <div id="7f2f1dc0-04ac-4167-852e-29d923c8fa4a" style={{ width: "33.33333333333333%" }} className="column">
        <p id="b7015752-1b92-4cbd-bbcc-9cab959a011f" className="">🛠️ <strong>Tools</strong></p>
        <ul id="6f794dbd-00d1-4dec-92f9-d71d426042f6" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Git</li>
        </ul>
        <ul id="61f520a1-45fd-4579-9446-7bd6134ceacb" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Postman</li>
        </ul>
        <ul id="a6eaeb91-09f7-4eb2-96c6-0eaa43c2b8cc" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Notion</li>
        </ul>
        <ul id="0e8ce437-051c-4a10-b1e2-7750410cfff6" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Figma</li>
        </ul>
        <ul id="8f35ef3e-d4d0-4870-8936-dc1e4c2ae515" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Adobe illustrator, Photoshop, Lightroom</li>
        </ul>
        <ul id="6e7a5a01-65ad-4bcd-bd51-8818a205d1bf" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}><mark className="highlight-gray">AWS</mark></li>
        </ul>
        <ul id="9d9517e4-ba79-4df1-b13b-d319cdc9fdf3" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Firebase(extensions)</li>
        </ul>
      </div>
    </div>
    <h2 id="62dfe595-4f09-4f1b-a8eb-f8a8fd599de8" className=""><mark className="highlight-red">02.</mark> Projects</h2>
    <hr id="296c3458-3d29-44c2-bf2a-08f58234977d" />
    <div id="219065b4-b6ee-444e-858a-9746649359f1" className="column-list">
      <div id="1edd5fe0-258f-486c-980c-d863741c5219" style={{ width: "18.75%" }} className="column">
        <p id="c64fa9c0-1cb2-4505-ae3d-e44d5ed9d40a" className="">2023.01</p>
      </div>
      <div id="e432b67c-68bb-4252-83fe-d046aac94ac0" style={{ width: "81.25%" }} className="column">
        <p id="b7f4bab5-d657-47ac-9b1d-3a79a5e71e89" className="block-color-gray_background"><strong>See you Letter(개인
          프로젝트)</strong></p>
        <p id="c44004e7-2bb0-455a-9c99-e93c4700f2e0" className="">타임캡슐처럼 ‘나’ 혹은 ‘누군가’에게 편지를 쓰고 설정된 기간(1년/6개월/3개월)에 맞춰 편지
          형식으로 수신자 이메일로 전송됩니다.</p>
        <p id="d7c0cadb-1727-4021-bb37-a464d43e4967" className="">
          <strong><code><a href="https://github.com/codestates-seb/seb39_main_061">Github</a></code></strong><strong>
          </strong>| <a href="https://seeyouletter-735f3.web.app"><code><strong>Deploy</strong></code></a></p>
        <p id="b38f229e-b5f7-4fe1-94d4-639e28ad62aa" className=""><strong><mark className="highlight-blue"><span
          style={{ borderBottom: '0.05em solid' }}>👉🏻 프로젝트에 대한 자세한 내용은 </span></mark></strong><a
            href="https://do-youit.tistory.com/45"><strong><mark className="highlight-red"><span
              style={{ borderBottom: '0.05em solid' }}>블로그</span></mark></strong></a><strong><mark
                className="highlight-blue"><span style={{ borderBottom: '0.05em solid' }}>에서 확인하실 수 있습니다</span></mark></strong>
        </p>
        <p id="aa5a3789-4ffa-458d-b99c-9e4336939fac" className="">Stack: <mark className="highlight-gray">react,
          redux-toolkit, styled-components, firebase, firestore, TriggerEmail extensions</mark></p>
        <hr id="12c418ce-f927-4183-9172-b9f88900132e" />
        <ul id="804528d5-7f85-4a6a-afd7-bde455038752" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>로그인 / 회원가입 (이메일)</strong>
            <ul id="ef5e9178-ec10-42ee-9a1e-0cfe5a5d17d0" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "circle" }}>firebase를 서버로 사용하여 로그인/회원가입 기능 만듦.</li>
            </ul>
          </li>
        </ul>
        <ul id="e149f5ae-43b1-49f3-95bc-94c3359f4a38" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>LetterForm 페이지(메인)</strong>
            <ul id="531d5834-adef-4a52-a541-a8d616951787" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>편지 내용, 발신자명, 수신자 이메일 데이터를 Redux로 상태관리하여 FireStore에 저장.</li>
            </ul>
            <ul id="ff9e9c34-30fc-497b-bb5a-22c08c4bbd16" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>이메일 형식의 유효성검사와 편지 데이터 Firestore에 전송의 순서를 동기 async로 동기 처리.</li>
            </ul>
          </li>
        </ul>
        <ul id="f28ba9f0-d81d-43c1-8e27-8414144b98e6" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>TriggerEmail extensions(Firebase)</strong>
            <ul id="b977acaa-4aff-473b-8aa6-b6aded9d219b" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>Firestore에서 전송된 이메일을 받을 컬렉션과 형색 포맷을 맞출 컬렉션을 설정 후 LetterForm.jsx에서 데이터
                전송 포맷을 동일하게 맞춰 작업 진행.
                컬렉션 형식과 실제 데이터 전송 형식이 일치해야 메일이 전송 됨. 메일 안의 데이터 치환을 위해 핸들바 문법을 사용.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div id="fcf80fc5-1e7a-469f-9fb5-360edbdf12aa" className="column-list">
      <div id="a1cbacfb-1624-4420-a728-7e6f419c4247" style={{ width: "18.75%" }} className="column">
        <p id="561f4c67-ff10-4131-9cf4-cf741c84f09c" className="">2022.09 - 10</p>
      </div>
      <div id="d844631e-633c-409a-85ee-35430f4676c6" style={{ width: "81.25%" }} className="column">
        <p id="a0d8c28a-78dc-4ac3-807d-01ef3b3585f6" className="block-color-gray_background"><strong>Qiuck Book (코드스테이츠
          파이널 프로젝트 / 4인)</strong></p>
        <p id="ead75522-ff98-4fa6-8edd-3374ebeba506" className="">우리 매장의 예약/대기를 QR 코드로 관리하고 기간별 예약 현황을 한눈에!
          (매장 어드민 / 고객 사이트 각각 개발)</p>
        <p id="f46a8e20-182e-489c-b34e-a882023993da" className="">
          <strong><code><a href="https://github.com/codestates-seb/seb39_main_061">Github</a></code></strong> |
          <strong> </strong><code><strong><a href="https://quick-book.ml/">Deploy</a></strong></code> <mark
            className="highlight-gray">(AWS 과금으로 배포 중단)</mark></p>
        <p id="2893fa94-e9da-426d-b90b-07d1ed2ec038" className=""><strong><mark className="highlight-blue"><span
          style={{ borderBottom: '0.05em solid' }}>👉🏻 프로젝트에 대한 자세한 내용은 </span></mark></strong><strong><mark
            className="highlight-red"><span style={{ borderBottom: '0.05em solid' }}><a
              href="https://www.notion.so/Quick-book-FE-64f8df768bef456e82e01e260d5a52a6">노션
              문서</a></span></mark></strong><strong><mark className="highlight-blue"><span
                style={{ borderBottom: '0.05em solid' }}>에서 확인하실 수 있습니다</span></mark></strong></p>
        <p id="1885c61e-cf64-4ef2-96f6-810ddd6b6ab3" className="">Stack: <mark className="highlight-gray">react,
          redux-toolkit, axios, apexChart, css-module</mark></p>
        <hr id="91b15777-dcf2-4f00-997b-5fae5c3cb94f" />
        <p id="5b1cd3f9-1e34-4836-899f-e8fb28cc6ffb" className=""><mark className="highlight-orange"><strong>👇🏻 나의
          역할</strong></mark></p>
        <ul id="a0acd47e-59a1-4c1c-8e21-08de8dcb3c8b" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>프로필 페이지: 프로필 Create, Read, Update</strong>
            <ul id="b1378e48-73d8-4801-8c2b-ea0a7805eef9" className="bulleted-list">
              <li style={{ listStyleType: "disc" }}><mark className="highlight-gray">local의 이미지를 브라우저에 불러오고, 서버에 요청하기 위해
                formData를 사용해서 이미지(파일) 처리.</mark></li>
            </ul>
          </li>
        </ul>
        <ul id="3b1e6c5c-35d3-4829-9a35-72da7fc686f7" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>대시보드: Bar차트, Pie차트, 캘린더, QR코드(read) 4가지 컴포넌트 분리</strong>
            <ul id="b730f6fe-e3ac-4864-a135-a580a578d1a2" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>서버에서 응답받은 데이터를 가공하여 각 차트에 렌더링하고, 렌더링된 데이터들을 사용자가 csv파일로 다운받을 수 있도록
                ApexCharts 라이브러리를 사용.</li>
            </ul>
            <ul id="fc5c92fb-4012-4464-8124-03449accb44a" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>react-calendar 라이브러리로 캘린더 컴포넌트 생성 후, 오늘 이전의 특정 날짜를 클릭했을 경우 Pie차트에 해당
                날짜의 시간별 데이터를 %로 보여지도록 처리.</li>
            </ul>
          </li>
        </ul>
        <ul id="c89d4054-bde3-4aa7-b29a-1bf0068199a2" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>QR코드 페이지: QR코드 Create, Read, Update, Delete</strong>
            <ul id="933fb0f6-e461-4cc0-a5db-b96759166eb3" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>React-cr-code 라이브러리로 qr코드를 생성하고, 생성된 QR코드 이미지에 url 삽입 후 formData로 서버
                요청 처리.</li>
            </ul>
          </li>
        </ul>
        <ul id="7bb7f36b-950f-4ead-a159-e6d281241c70" className="bulleted-list">
          <li style={{ listStyleType: "disc" }}><strong>ETC</strong>
            <ul id="beb292a3-acde-467d-83f5-3ba6be0edf76" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>Header, Sidebar 컴포넌트 개발</li>
            </ul>
            <ul id="59ace637-b254-4aab-9354-ed77a91a9846" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>git branch로 협업 및 관리 했으며, github에서 main &lt; dev &lt; feat/각자 작업명으로
                브랜치를 만들고, 브랜치의 병합이 필요시 충돌 수정 후 merge 진행</li>
            </ul>
            <ul id="6f0e424f-ee2d-4039-a07b-02743e0ada8b" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>main page(로그인 전) 제작</li>
            </ul>
            <ul id="43d16582-cf6d-4a75-bfc1-c0c26497afa2" className="block-color-gray bulleted-list">
              <li style={{ listStyleType: "disc" }}>화면정의서(figma) 제작 &amp; 디자인 총괄 &amp; 로고 디자인</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <h2 id="15e25ce5-e133-4285-b94b-d0bc99606cca" className=""><mark className="highlight-red">03.</mark> Education</h2>
    <hr id="7b2ddc2f-cb0d-41d0-8bb0-c93ae559b0d5" />
    <div id="fc00b513-0efc-4089-9354-53d74483c18b" className="column-list">
      <div id="0a89aa0f-fbcb-4076-a29c-0bbe3129358d" style={{ width: "18.749999999999996%" }} className="column">
        <p id="8eef1a10-3db1-4505-995d-748d568c00a1" className="">2022.04 - 2022.10</p>
      </div>
      <div id="af98ce9f-f846-42ce-b396-374c099190e9" style={{ width: "81.25%" }} className="column">
        <p id="006124e7-0c8f-43a1-b994-0a67aaa1d709" className="block-color-gray_background"><strong>코드스테이츠 (Code States)
        </strong></p>
        <p id="aa28773b-2987-49bf-91f2-57af68274345" className="">소프트웨어 엔지니어링 프론트엔드 과정 </p>
        <ul id="9865ada2-eaeb-4945-b8e6-6e8b98826455" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Javascript / React 과정 학습</li>
        </ul>
        <ul id="da3036cc-75aa-4f02-9936-67153cd5f232" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>HTTP/네트워크 및 Express로 서버 구축 환경 학습</li>
        </ul>
        <ul id="f42a7083-12e3-4628-91f1-aec4ed58d8a9" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Linux/Git 학습</li>
        </ul>
        <ul id="df2ea344-3ddc-44bb-9e19-a486eda432bf" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>Backend 인증/보안 학습</li>
        </ul>
        <ul id="d0729b02-501e-4ed4-b6af-26d98c936fe6" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>CS/CICD/AWS/TDD 학습</li>
        </ul>
        <ul id="62ea6f60-8073-4b7c-ab3f-86f4b3c72537" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>20주 동안 과제 수행 및 페어 프로그래밍과 코드 리뷰 진행</li>
        </ul>
        <ul id="b6538ad8-e76c-4fb7-87ca-36ddf4534690" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>협업 프로젝트 2회 진행(프리 프로젝트, 파이널 프로젝트)</li>
        </ul>
      </div>
    </div>
    <div id="0a67f524-3cfb-4276-8231-4d9c47a4da0e" className="column-list">
      <div id="a3e32005-5fca-4bee-9b78-a242e08e4987" style={{ width: "18.75%" }} className="column">
        <p id="ac2e26e0-44e3-4134-8160-24429351fe78" className="">2012.03 - 2016.03</p>
      </div>
      <div id="dd3d6683-5279-4cbf-822e-cbf49b1b88f0" style={{ width: "81.25%" }} className="column">
        <p id="2024207c-fc6a-4443-84ee-2699e1921bb4" className="block-color-gray_background"><strong>인천대학교</strong></p>
        <ul id="27906ee3-0035-46bc-9530-567b81514d8c" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>조형예술학부 서양화 전공</li>
        </ul>
      </div>
    </div>
    <h2 id="cfbad5e8-9565-41da-ac2f-fce4c6bc1cf7" className=""><mark className="highlight-red">04.</mark> Work Experience</h2>
    <hr id="114cda13-38f4-43b3-9884-b2bb9ebf5b52" />
    <div id="64975a22-5286-4944-9879-8a327aebeee7" className="column-list">
      <div id="57415b9a-b8de-4605-af80-083e92d283ba" style={{ width: "18.75%" }} className="column">
        <p id="9498acb6-0614-4878-a859-da2b7fd30455" className="">2016.10 - 2021.01</p>
        <p id="2871c1b1-ecc7-44e3-a39e-a205ad4d013f" className="">
        </p>
      </div>
      <div id="7d1c0f4f-d07e-4a03-9a6b-514da4a1239c" style={{ width: "81.25%" }} className="column">
        <p id="4c9b2c95-9a09-46cd-98c0-7b13edec8886" className="block-color-gray_background"><strong>(주)마지코리아 / mazi
          untitled 가방 브랜드 </strong></p>
        <p id="d58d2e83-496e-4569-8b3b-aef3bd46604c" className=""><strong>미니멀한 디자인과 실용적인 패션 가방 브랜드 런칭하며 피봇</strong></p>
        <ul id="3d4adb68-053f-4769-b0ca-754e6a370a88" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}><a href="https://www.maziuntitled.com/">홈페이지 웹</a> 관리 운영 및 기획</li>
        </ul>
        <ul id="b2cb250b-9db4-4522-b767-57a3b8287322" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>이미지 비쥬얼 디렉터 / 포토그래퍼 </li>
        </ul>
        <ul id="de390896-2e35-428b-889a-52796c23b2fd" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>5년만에 연 매출 0원에서 10억원까지 성장</li>
        </ul>
      </div>
    </div>
    <div id="9a343629-d334-4f61-80c1-d8ff1f42b45d" className="column-list">
      <div id="d6545e27-7508-455c-89d0-13bd661622e3" style={{ width: "18.75%" }} className="column">
        <p id="acf42d63-a490-4386-8cee-66405d570688" className="">2013.01 - 2016.10</p>
        <p id="ebcec98b-6efd-4ae6-a012-4204c5366cc6" className="block-color-gray">
        </p>
      </div>
      <div id="4f246323-7e1d-41fb-9aa1-15fe6670b925" style={{ width: "81.25%" }} className="column">
        <p id="1264edcc-3b76-4bdf-b1cd-d0a74f193fad" className="block-color-gray_background"><strong>Mazi / Art Bag 가방
          브랜드</strong></p>
        <p id="0fa53039-3a5b-41c9-a24f-5bdd63c394bc" className=""><strong>미대생, 신진 작가들의 캔버스 습작으로 단 하나의 오리지널 Art Bag 브랜드
          공동창업</strong></p>
        <ul id="2b89226a-8a66-49c7-a415-e2fcd50bb717" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>웹 관리 및 디자인 / 포토그래퍼 / 기획</li>
        </ul>
        <ul id="cb9b1c1e-0f51-480a-b421-877c0bb18347" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>2015 대구패션페어 잡화부분 대상</li>
        </ul>
        <ul id="ed6dc22c-86b4-41c1-9c38-1f88f0dcf2e1" className="block-color-gray bulleted-list">
          <li style={{ listStyleType: "disc" }}>2014 창업경진대회 수상</li>
        </ul>
      </div>
    </div>
    <h2 id="8f660772-6625-46fe-be69-6cb3ea3bda8b" className=""><mark className="highlight-red">04.</mark> Introduction</h2>
    <hr id="39b53fdc-ac04-4774-8d05-abf1b9439f11" />
    <p id="3bca36cf-e407-45e8-945a-7efb033cc2e3" className="">. </p>
    <p id="f5d7b2ca-88bb-4dbc-ab9b-feeda0fb43d1" className=""><mark
      className="highlight-gray"><strong>JavaScript</strong></mark><mark className="highlight-gray">를 기반으로 </mark><mark
        className="highlight-gray"><strong>React</strong></mark><mark className="highlight-gray"> 프레임워크를 사용합니다. React의 장점인
          컴포넌트 기반으로 코드의 재사용성 중요하게 생각하며, 팀 프로젝트를 진행하며 </mark><mark className="highlight-gray"><strong>REST
            API</strong></mark><mark className="highlight-gray"> 경험을 했고, 맡은 기능을 위해 charts, QR-code 등 다양한 리액트 </mark><mark
              className="highlight-gray"><strong>라이브러리</strong></mark><mark className="highlight-gray">를 활용했습니다. 전역 상태관리를 위해
      </mark><mark className="highlight-gray"><strong>Redux</strong></mark><mark className="highlight-gray">를, 서버 요청은
      </mark><mark className="highlight-gray"><strong>axios</strong></mark><mark className="highlight-gray">를 사용했습니다. 개인 프로젝트를
        진행하며 </mark><mark className="highlight-gray"><strong>Firebase</strong></mark><mark className="highlight-gray">로
          로그인/회원가입을 연결했고, Firestore에 필요한 데이터를 담았으며, firebase에서 제공하는 TriggerEmail extensions를 사용하여 메일 전송 기능을 만들었습니다. 현재
          정적 타입을 지정하여 에러 핸들링과 디버깅을 통해 효율적인 코드 작업을 위해 </mark><mark
            className="highlight-gray"><strong>TypeScript</strong></mark><mark className="highlight-gray">와 SSR을 위한 </mark><mark
              className="highlight-gray"><strong>Next.js</strong></mark><mark className="highlight-gray">를 공부하고 있습니다. </mark></p>
    <p id="e9a01d5e-85a4-44f0-a158-4cc90243147a" className="">.</p>
    <p id="0d564a0a-c685-4488-b1f2-e5d929b88d4d" className="">어떤 분야든 <strong>만들어가는 과정</strong>(making)를 중요하게 생각하며 흥미를
      갖습니다. 미술을 전공하며 작품을 만들고, 브랜드를 운영하며 제품을 만들고, 목공을 하며 가구를 만들었습니다. 이제는 프로그래밍으로 서비스, 웹 페이지를 만들고 있습니다.
      ‘<strong>처음</strong>’과 ‘<strong>변화</strong>’에 익숙하며 필요한 기능은 찾아보고 알아내어 내 것으로 만드는 개발자 입니다.</p>
    <p id="347a5298-27e6-434a-b470-8d890c1d81ad" className="">. </p>
    <p id="b692ca61-217a-4a65-bd44-f7ee62540396" className="">지난 8년간 패션 브랜드를 공동 창업하고, 운영하면서 무엇보다 협업과
      <strong>커뮤니케이션</strong>이 중요하다는 것을 경험했습니다. 개발 또한 혼자하는 것이 아니라 함께하는 것입니다. 전체적인 방향성과 팀원들의 진행 상황을 고려하며, 때로는 리딩하고, 때로는
      뒤에서 서포트하며 프로젝트를 진행합니다. 제가 이해하고 있는 것이 정확한지 팀원들과 더블체크하며 오버 커뮤니케이션하는 것을 지향합니다. 어떤 일이든지, 함께 지켜야할 가이드가 필요하며, 가이드를
      기준으로 우선순위를 정하여 커뮤니케이션하는 것을 중요하게 생각합니다.</p>
    <p id="18a04e54-e8fc-4cbe-9605-d9d657df5020" className="">. </p>
    <figure id="1511388d-788e-4178-8d43-41eaa2b7fce2" className="link-to-page"><a
      href="https://www.notion.so/1511388d788e41788d4341eaa2b7fce2"><span className="icon">🤝</span>협업한 팀원들의 피드백</a>
    </figure>
  </div>
</article> */}