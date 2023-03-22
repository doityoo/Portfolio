import Image from "next/image";
import classes from './ourselves.module.css'

const Ourselves = () => {
  return (
    <section className={classes.ourselves}>
      {/* Image 컴포넌트 사용에 있어서 src를 절대 경로로 설정하면 안됨. 자동으로 public을 루트로 설정함 */}
      <Image
        src='/images/site/profileImg.jpg'
        alt="프로필 이미지"
        width={300}
        height={300}
        className={classes.image}
      />
      <h1>안녕하세요. 프론트엔드 willy입니다. </h1>
      <p>포트폴리오 WEB을 제작 중이며, Portfolio와 resume, contact페이지가 들어갈 예정입니다.</p>
    </section>
  );
};

export default Ourselves;