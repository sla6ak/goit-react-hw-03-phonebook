import s from './Contact.module.css';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

const Contact = ({ elem, deleteEl }) => {
  return (
    <li className={s.li}>
      {elem.name}: {elem.numberTel}
      <button onClick={() => deleteEl(elem.id)}>
        <FiX className={s.svgFix} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  deleteEl: propTypes.func,
  elem: propTypes.object,
};

export default Contact;
