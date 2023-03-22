import Image from "next/image";
import classes from './ourselves.module.css'

const Ourselves = () => {
  return (
    <section className={classes.ourselves}>
      {/* Image 컴포넌트 사용에 있어서 src를 절대 경로로 설정하면 안됨. 자동으로 public을 루트로 설정함 */}
      {/* <Image
        src='/images/site/profileImg.jpg'
        alt="프로필 이미지"
        width={300}
        height={300}
        className={classes.image}
      /> */}
      <h1>프론트엔드 개발자, <br />
        유인태입니다.</h1>
      <h2>개발자로서 어떻게 일 하는가?</h2>
      <div><strong>‘const’</strong> 처럼 지속적이고 일관적인 태도를 지향하며,</div>
      <div><strong>‘let’</strong> 처럼 다양하고 유연하게 생각합니다.</div>
    </section>
  );
};

export default Ourselves;