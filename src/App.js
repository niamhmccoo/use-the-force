import React from 'react';
import List from './List';
import axios from 'axios';
import './App.css';

//  1. Started off by building our App component & giving it an empty array:
class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        people: [],
      }
      this.getPeople = this.getPeople.bind(this); // can do this with an arrow function too - note: why do it here?
  }

  // 2. Once we make an API request we use that info to change the component's state & populate the people property in the App class above, with whatever came back from the API request, i.e. 'people: response.data.results' below:
  
  getPeople(){
    return axios.get("https://swapi.co/api/people/", { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}}) // Trying to fix the html split-second hard-reloading problem by passing axios an object that sets the headers to the appropriate format:
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results } )
    })
    .catch((error) => {
      console.error(error);
    })
  }

  componentDidMount() {
    this.getPeople()
  }

  //  3. We then passed that 'people' data to the list component below - heading over to List.jsx - through the prop called people:
  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <List people={people}></List> 
      </div>
    );
  }
}

export default App;