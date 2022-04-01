import s from './ContactList.module.css';
import React from 'react';
import NotContacts from 'Components/NotContacts/NotContacts';
import propTypes from 'prop-types';
import Filter from '../Filter/Filter';
import Contact from '../Contact/Contact';

const ContactList = ({ onFinde, filter, deleteEl, contacts }) => {
  const listCont = contacts();
  return (
    <>
      <Filter filter={filter} onFinde={onFinde} />
      {listCont.length > 0 ? (
        <ul className={s.list}>
          {listCont.map(el => (
            <Contact key={el.id} elem={el} deleteEl={deleteEl} />
          ))}
        </ul>
      ) : (
        <NotContacts text={'Nothing found for your request'} />
      )}
    </>
  );
};
ContactList.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
  deleteEl: propTypes.func,
  contacts: propTypes.func,
};
export default ContactList;
