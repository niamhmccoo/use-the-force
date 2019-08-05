import React from 'react';

class CharInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { // NB: This state is the state only of the little open/close component - has nothing to do with the App's wider state.
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    // 5. Information is being passed from the App component in List.jsx, to char-name in that component, and then to its child CharInfo in this file - passing info DOWN. Redux can help here if you need to keep passing data down & down, but it's not necessary here.

    open() {
        this.setState({ expanded: !this.state.expanded })
    }

    close() {
        this.setState({ closed: !this.state.expanded })
    }

    render() {
        const info = this.props.charInfo; // 6. We're setting an info variable here so we don't have to type charInfo every time, then displaying that info in the return method below. Remember: this info is coming from the props of the parent component!

        if (!this.state.expanded) {
            return <p className="btn btn-info onClick={this.open}">Show info</p> // Triggering the open event
        }

        return (
            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide info</p>
                <ul>
                    <li>Gender: {info.gender}</li>
                    <li>Birth date: {info.birth_year}</li>
                    <li>Hair color: {info.genderhair_color}</li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;