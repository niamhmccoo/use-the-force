import React from 'react';
import CharInfo from './CharInfo';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '' // Object setting a default state for our search
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        const people = this.props.people.filter(
            (people) => {
                return people.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        ); // Remember: 'people' is an array

        return (
            <div className="App">
                <nav>
                    <h1>💫 Use the force 💫</h1>
                    <h3>Start typing to find your Star Wars buddies...</h3>
                </nav>
                    <input type="text" 
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)} />
                {
                    people.map((p) => { // 4. Here we're mapping over all of the 'people' array items, then returning the character name; a property inside the array. Then we pass that item to 'CharInfo' so we can use it independently, taking info from each character in the CharInfo.jsx file.
                        console.log(p);
                        return (
                            <div className="results">
                                <h1 className="char-name">{p.name}</h1>
                                <CharInfo charInfo={p} />
                            </div>
                            
                        )
                    })
                }
            </div>


        )
    }
}

export default List;