import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { spinnerActionCreators } from './actions';

class Spinner extends Component {
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

function mapStateToProps(appState){
    const value = appState.spinnerData;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
