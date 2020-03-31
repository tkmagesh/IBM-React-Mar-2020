import React, { Component, Fragment } from 'react';
import { BugSort, BugStats, BugEdit, BugList } from './views';

export class BugTracker extends Component {
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