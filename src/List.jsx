import React from 'react';
import CharInfo from './CharInfo';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    render() {
        const people = this.props.people; // Remember: 'people' is an array
        return (

            <div className="App">
                <input type="text" />
                {
                    people.map((p) => { // 4. Here we're mapping over all of the 'people' array items, then returning the character name; a property inside the array. Then we pass that item to 'CharInfo' so we can use it independently, taking info from each character in the CharInfo.jsx file.
                        console.log(p);
                        return (
                            <div key={p.url}>
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