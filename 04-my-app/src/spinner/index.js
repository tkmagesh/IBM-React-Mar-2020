import React, { Component } from 'react';

export class Spinner extends Component {
    state = {
        delta: 0
    };
    render() {
        const { value, up, down } = this.props,
            { delta } = this.state;
        return (
            <div>
                <h3>Spinner</h3>
                <hr />
                <label>Delta : </label>
                <input type="number" onInput={evt => this.setState({ delta: evt.target.valueAsNumber || 0 })} />
                <br />
                <input type="button" value="DOWN" onClick={() => down(delta)} />
                <span> [ {value} ] </span>
                <input type="button" value="UP" onClick={() => up(delta)} />
            </div>
        )
    }
}