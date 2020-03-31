import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './actions';

import { BugSort, BugStats, BugEdit, BugList } from './views';

class BugTracker extends Component {
    render() {
        const { bugs, addNew, remove, toggle, removeClosed, applyFilter, load } = this.props;
        return (
            <Fragment>
                <h3>Bug Tracker</h3>
                <hr />
                <input type="button" value="LOAD BUGS" onClick={load} />
                <div>
                    <label>Apply Filter : </label>
                    <input type="checkbox" onInput={ evt => applyFilter(evt.target.checked)} />
                </div>
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
    if (appState.bugsFilterData){
        const bugs = appState.bugsData.filter(bug => bug.id % 2 === appState.spinnerData % 2);
        return { bugs : bugs };
    } else {
        return {bugs : appState.bugsData};
    }
}

//converting the dispatch to action dispatchers for the component
function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

//Container Component / Smart Component
export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);