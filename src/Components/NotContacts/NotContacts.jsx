import s from './NotContacts.module.css';
import propTypes from 'prop-types';

const NotContacts = ({ text }) => {
  return <div className={s.not}>{text}</div>;
};

NotContacts.propTypes = {
  text: propTypes.string,
};
export default NotContacts;
