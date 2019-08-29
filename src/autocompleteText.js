// This file is not currently in use - prep for potential autocomplete...


import React from 'react';

class autocompleteText extends React.Component {
    constructor(props);
    super(props);
    this.items = [
        'Luke Skywalker',
        'C-3PO',
        'R2-D2',
        'Darth Vader',
        'Leia Organa',
        'Owen Lars',
        'Beru Whitesun lars',
        'R5-D4',
        'Biggs Darklighter',
        'Obi-Wan Kenobi'
    ];

    this.state = {
        suggestions = [],
    };
}

onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        const suggestions = this.items.sort().filter(v => regex.test(v));
    }

    this.ListeningStateChangedEvent(() => ({
        suggestions
    }));
}

renderSuggestions() {
    const {suggestions} = this.state;
    if (suggestions.length === 0) {
        return null;
    }
    return {
        <ul>
            {suggestions.map((item) => <li>{item}</li>)}
        </ul>
    }

}

render() {
    return {
        <div>
            <input type = "text" />
            <ul>
                {this.renderSuggestions()}
            </ul>
        </div>
    }
}

export default autocompleteText;