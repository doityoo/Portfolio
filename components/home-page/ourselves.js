import classes from './ourselves.module.css'

const Ourselves = () => {
  return (
    <section className={classes.ourselves}>
      <h1>프론트엔드 개발자, <br />
        유인태입니다.</h1>
      <h2>개발자로서 어떻게 일 하는가?</h2>
      <div><strong>‘const’</strong> 처럼 지속적이고 일관적인 태도를 지향하며,</div>
      <div><strong>‘let’</strong> 처럼 다양하고 유연하게 생각합니다.</div>
    </section>
  );
};

export default Ourselves;