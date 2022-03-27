import s from './ContactList.module.css';
import React from 'react';
import NotContacts from 'Components/NotContacts/NotContacts';
import { FiX } from 'react-icons/fi';
import propTypes from 'prop-types';

class ContactList extends React.Component {
  state = {};

  render() {
    const list = this.props.contacts();
    return (
      <>
        <input
          className={s.inputFinde}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.onFinde}
        />
        {list.length > 0 ? (
          <ul className={s.list}>
            {list.map(el => (
              <li className={s.li} key={el.id}>
                {el.name}: {el.numberTel}
                <button onClick={() => this.props.deleteEl(el.id)}>
                  <FiX className={s.svgFix} />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <NotContacts text={'Nothing found for your request'} />
        )}
      </>
    );
  }
}
ContactList.propTypes = {
  filter: propTypes.string,
  onFinde: propTypes.func,
  deleteEl: propTypes.func,
  contacts: propTypes.func,
};
export default ContactList;
