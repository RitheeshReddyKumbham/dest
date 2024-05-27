// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

const {destinationsList} = this.props

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destnationsList} = this.props
    const searchResults = destnationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main">
        <h1 className="head">Destination Search</h1>
        <input
          type="search"
          className="searchIp"
          value={searchInput}
          placeholder="search"
          onChange={this.onChangeSearchInput}
        />
        <ul>
          {searchResults.map(eachDestination => (
            <DestinationItem 
            destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
