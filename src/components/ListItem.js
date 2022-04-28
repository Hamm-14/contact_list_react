import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  handleEdit = () => {
    this.setState({
      editMode: true,
    });
  };
  render() {
    const { name, contact, handleDelete, id } = this.props;
    const { editMode } = this.state;
    return (
      <li>
        <p>{name}</p>
        <p>{contact}</p>
        <p>
          {editMode ? (
            <img
              className="list-btn"
              src="https://cdn-icons-png.flaticon.com/512/2681/2681062.png"
              alt="submit-edit"
            />
          ) : (
            <img
              className="list-btn"
              onClick={this.handleEdit}
              src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
              alt="edit-btn"
            />
          )}
          <img
            className="list-btn"
            onClick={() => handleDelete(id)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete-btn"
          />
        </p>
      </li>
    );
  }
}

export default ListItem;
