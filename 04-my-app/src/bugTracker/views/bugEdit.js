import React, { Component } from 'react';

export class BugEdit extends React.Component {
    state = {
        newBugName: ''
    };
    render() {
        const { addNew } = this.props,
            { newBugName } = this.state;
        return (
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onInput={evt => this.setState({ newBugName: evt.target.value })} />
                <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
            </section>
        )
    }
}