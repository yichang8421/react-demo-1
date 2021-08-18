import React, {useReducer} from 'react';
import Context from "./Context";
import User from "./components/User";
import Books from "./components/Books";
import Movies from "./components/Movies";
import userReducer from "./reducers/user_reducers";
import booksReducer from "./reducers/books_reducers";
import moviesReducer from "./reducers/movies_reducers";

const store = {
    user: null,
    books: null,
    movies: null
};

const obj = {
    ...userReducer,
    ...booksReducer,
    ...moviesReducer
};

const reducer = (state, action) => {
    const fn = obj[action.type];
    if (fn) {
        return fn(state, action);
    } else {
        throw new Error('There is no such type');
    }
};


const App = () => {
    const [state, dispatch] = useReducer(reducer, store);

    const api = {state, dispatch};

    return (
        <Context.Provider value={api}>
            <User/>
            <hr/>
            <Books/>
            <Movies/>
        </Context.Provider>
    );
};


export default App;