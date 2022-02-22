import s from './NotContacts.module.css';

const NotContacts = ({ text }) => {
  return <div className={s.not}>{text}</div>;
};

export default NotContacts;
