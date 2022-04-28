import React, { Component } from "react";

class AddContacts extends Component {
  render() {
    return (
      <div id="add-contacts-container">
        <h1>Add Contact</h1>
        <form action="/create-contact" method="post">
          <input type="text" name="name" placeholder="Enter Name" required />
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone"
            required
          />
          <br />
          <button type="submit">Add Contacts</button>
        </form>
      </div>
    );
  }
}

export default AddContacts;
