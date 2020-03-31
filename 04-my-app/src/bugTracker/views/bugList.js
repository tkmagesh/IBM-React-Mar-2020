import React from 'react';
import { BugItem } from './bugItem';

export const BugList = ({ bugs, remove, toggle, removeClosed }) => {
    const bugsList = bugs.map(bug => (<BugItem key={bug.id} {...{ bug, toggle, remove }} />));
    return (
        <section className="list">
            <ol>
                {bugsList}
            </ol>
            <input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)} />
        </section>
    )
};