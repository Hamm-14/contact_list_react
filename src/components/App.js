import React from "react";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      users: data,
    });

    console.log("current state", this.state);
  }

  handleDeleteContact = async (id) => {
    let { users } = this.state;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    await fetch(url, {
      method: "DELETE",
    });

    let updatedUsers = users.filter((user) => user.id !== id);

    this.setState({
      users: updatedUsers,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250592.png"
            alt="contact-icon"
          ></img>
          <h1>My Contacts List</h1>
        </header>
        <ul>
          {users.length === 0 ? (
            <h1>Loading....</h1>
          ) : (
            users.map((user) => {
              return (
                <ListItem
                  name={user.name}
                  contact={user.phone}
                  key={user.id}
                  id={user.id}
                  handleDelete={this.handleDeleteContact}
                />
              );
            })
          )}
        </ul>
      </div>
    );
  }
}

export default App;
