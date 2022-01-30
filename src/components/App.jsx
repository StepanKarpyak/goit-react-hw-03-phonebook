import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';
import { Page } from './App.styled';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContactInfo = personData => {
    const { name, number } = personData;
    const normalizedNameContact = name.toLowerCase();
    const person = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.findContactName(normalizedNameContact)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, person],
        }));
  };
  
  findContactName = newNameData => {
    const { contacts } = this.state;
    return contacts.find(({ name }) => name.toLowerCase() === newNameData);
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('обновили поле contacts');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    

    return (
      <Page>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactInfo} />

        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
        
            <ContactFilter value={filter} onChange={this.changeFilter} />

            
            <ContactList visibleContacts={this.getVisibleContacts()}
              onDeleteContact={this.deleteContact} />
          </>
        )}
      </Page>
    );
  }
}



export default App;
