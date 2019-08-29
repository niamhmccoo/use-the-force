import React from 'react';

class CharInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    // 5. Information is being passed down from the App component in List.jsx, to char-name in that component, and then to its child CharInfo in this file.

    open() {
        this.setState({ expanded: !this.state.expanded })
    }

    close() {
        this.setState({ closed: !this.state.expanded })
    }

    render() {
        const info = this.props.charInfo;

        if (!this.state.expanded) {
            return <button className="btn" onClick={this.open}>Show info</button>
        } else return (
            <div>
                <button className="btn" onClick={this.close}>Hide info</button>
                <ul>
                    <li>Gender: {info.gender}</li>
                    <li>Birth date: {info.birth_year}</li>
                    <li>Hair color: {info.hair_color}</li>
                    <li>Eyes: {info.eye_color}</li>
                </ul>
            </div>
        )
    }
}

export default CharInfo;