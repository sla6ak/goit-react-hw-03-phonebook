import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Title from './Title/Title';
import s from './App.module.css';
import ContactList from './ContactList/ContactList';
import NotContacts from './NotContacts/NotContacts';

class App extends React.Component {
  state = {
    filter: '',
    contacts: [
      { id: '4564', name: 'Vasya Pupkin', numberTel: '098564372' },
      { id: 'id-1', name: 'Rosie Simpson', numberTel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', numberTel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', numberTel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', numberTel: '227-91-26' },
    ],
  };
  //генерируем необходимые ключи
  idGenerator = () => nanoid();
  // добавляет новые контакты
  formSubmitApp = data => {
    if (
      this.state.contacts.find(
        el => el.name.toLowerCase().trim() === data.name.toLowerCase().trim()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.idGenerator(),
            name: data.name,
            numberTel: data.number,
          },
        ],
      };
    });
  };
  // тут я работаю с жизнеными циклами и проверяю локалку при рендере страницы
  componentDidMount() {
    const lCont = localStorage.getItem('contacts');
    if (lCont) {
      const cont = JSON.parse(lCont);
      this.setState({ contacts: cont });
    }
  }

  // объязательно принять аргументы в этом порядке
  componentDidUpdate(prevProps, prevState) {
    let st = this.state;
    // при каждом обновлении списка контактов в стейте я пересохраняю локалку
    // цикл срабатывает на весь стейт поэтому через ифы следим за нужными изменениями
    if (prevState.contacts !== st.contacts) {
      localStorage.setItem('contacts', JSON.stringify(st.contacts));
    }
  }

  // это обновляет стейт новым массивом
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  // метод просто обновляет состояние при вводе текста
  onSaveFinde = event => {
    this.setState({ filter: event.currentTarget.value.trim() });
  };

  //при изменении стейта метод находит контакты подходящие поиску
  findeByName = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  render() {
    this.findeByName();
    const { contacts, filter } = this.state;
    return (
      <div className={s.conteiner}>
        <Title text={'Phonebook'} />
        <Form chengeSabmit={this.formSubmitApp} />
        <Title text={'Contacts'} />

        {contacts.length < 1 ? (
          <NotContacts text={'The contact list is currently empty'} />
        ) : (
          <ContactList
            filter={filter}
            onFinde={this.onSaveFinde}
            deleteEl={this.deleteContact}
            contacts={this.findeByName}
          />
        )}
      </div>
    );
  }
}

export default App;
