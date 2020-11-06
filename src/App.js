import React, { Component } from "react";
import CardList from "./Components/card-list/card-list.jsx";
import SearchBox from "./Components/search-box/search-box.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ monsters: data });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterElement = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filterElement}></CardList>
      </div>
    );
  }
}

export default App;
