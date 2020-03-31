import axios from 'axios';

function getLocalBugs(){
    return [
        {
            "id": 1,
            "name": "Local bug - 1",
            "isClosed": false,
            "createdAt": "2020-03-26T11:53:43.744Z",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquam id pariatur ipsa expedita nesciunt doloribus facilis architecto quisquam totam veniam odio, minima, labore deleniti, neque nam quia amet eveniet."
        },
        {
            "id": 2,
            "name": "Local bug - 2",
            "isClosed": false,
            "createdAt": "2020-03-26T11:53:58.989Z",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aliquam id pariatur ipsa expedita nesciunt doloribus facilis architecto quisquam totam veniam odio, minima, labore deleniti, neque nam quia amet eveniet."
        }
    ]
}

function getServerBugs(){
    return axios
        .get('http://localhost:3030/bugs')
        .then(response => response.data);
}

export function load(){
    //sync
    /* const action = { type: 'LOAD_BUGS', payload: getLocalBugs() };
    return action; */

    //this will be handled by the async middleware
    /* return function(dispatch){
        getServerBugs()
            .then(bugs => {
                const action = { type : 'LOAD_BUGS', payload : bugs};
                dispatch(action);
            });
    } */

    //this will be handled by the promise middleware
    return getServerBugs()
        .then(bugs => {
            const action = { type: 'LOAD_BUGS', payload: bugs };
            return action;
        });
}