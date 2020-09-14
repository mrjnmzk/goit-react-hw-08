import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/contacts/contactsActions";
import operations from "../../redux/operations/operations";
import Filter from "../filter/Filter";
import ContactsList from "../contactsList/ContactsList";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    console.log("!!", this.props);

    if (
      this.props.items.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.props.onChangeAlert();
      setTimeout(() => this.props.onChangeAlert(), 1500);
      return;
    }

    this.props.onAddContact({ ...this.state });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Ім'я
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <label>
            Номер
            <input
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Добавити
          </button>
        </form>

        {this.props.items.length > 1 && <Filter />}
        {!this.props.error && <ContactsList />}
        {this.props.error && <h2>От Халепа ...</h2>}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
    alert: state.contacts.alert,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(operations.onAddContact(contact)),
  onChangeAlert: () => dispatch(actions.showAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
