import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './actions';

import { BugSort, BugStats, BugEdit, BugList } from './views';

class BugTracker extends Component {
    render() {
        const { bugs, addNew, remove, toggle, removeClosed } = this.props;
        return (
            <Fragment>
                <h3>Bug Tracker</h3>
                <hr />
                <BugStats bugs={bugs} />
                <BugSort />
                <BugEdit addNew={addNew} />
                <BugList {...{ bugs, toggle, remove, removeClosed }} />
            </Fragment>
        )
    }
}

//extracting data for the component from the store state
function mapStateToProps(appState){
    const bugs = appState.bugsData;
    return { bugs : bugs };
}

//converting the dispatch to action dispatchers for the component
function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

//Container Component / Smart Component
export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);