import React from "react";
import styles from "./ContactsListItems.module.css";
import { connect } from "react-redux";
import operations from "../../redux/operations/operations";

function ContactsListItems({ contact, onRemoveContact }) {
  const deleteItem = e => {
    onRemoveContact(e.target.id);
  };

  return (
    <li className={styles.contactsListItem}>
      {contact.name}: {contact.number}
      <button type="button" id={contact.id} onClick={deleteItem} className={styles.buttonDel}>
        &#215;
      </button>
    </li>
  );
}

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(operations.onRemoveContact(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ContactsListItems);
