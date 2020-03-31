import React from 'react';

export const BugItem = ({ bug, toggle, remove }) => {
    const bugClassNames = 'bugname ' + (bug.isClosed ? 'closed' : '');
    return (
        <li>
            <pre>[{bug.id}]</pre>
            <span className={bugClassNames} onClick={() => toggle(bug)}>
                {bug.name}
            </span>
            <div className="datetime">{bug.createdAt.toString()}</div>
            <input type="button" value="Remove" onClick={() => remove(bug)} />
        </li>
    )
};