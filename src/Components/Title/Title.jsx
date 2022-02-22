import s from './Title.module.css';

const Title = ({ text }) => {
  return <div className={s.title}>{text}</div>;
};
export default Title;
