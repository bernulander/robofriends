import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots,
      searchField: ''
    }
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { robots } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App
