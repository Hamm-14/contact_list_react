function App() {
  return (
    <div className="App">
      <header>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1250/1250592.png"
          alt="contact-icon"
        ></img>
        <h1>My Contacts List</h1>
      </header>
      <ul id="contacts-container">
        <li>
          <p>Hammad</p>
          <p>9045637028</p>
          <img
            className="list-btn"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete-btn"
          />
          <img
            className="list-btn"
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt="edit-btn"
          />
        </li>
      </ul>
    </div>
  );
}

export default App;
