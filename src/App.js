import React, {useReducer, createContext, useContext, useEffect} from 'react';

const store = {
    user: null,
    books: null,
    movies: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setUser":
            return {...state, user: action.user};
        case "setBooks":
            return {...state, books: action.books};
        case "setMovies":
            return {...state, movies: action.movies};
        default:
            throw new Error('There is no such type');
    }
};

const Context = createContext(null);

const App = () => {
    const [state, dispatch] = useReducer(reducer, store);

    return (
        <Context.Provider value={{state, dispatch}}>
            <User/>
            <hr/>
            <Books/>
            <Movies/>
        </Context.Provider>
    );
};

const User = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/user").then(
            user => {
                dispatch({type: "setUser", user: user});
            }
        );
    }, []);
    return (
        <div>
            <h1>个人信息</h1>
            <div>name: {state.user ? state.user.name : "加载中..."}</div>
        </div>
    );
}

const Books = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/books").then(
            books => {
                dispatch({type: "setBooks", books: books});
            }
        );
    }, []);
    return (
        <div>
            <h1>我的书籍</h1>
            <div>books: {state.books ? state.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                );
            }) : "加载中..."}</div>
        </div>
    );
}

const Movies = () => {
    const {state, dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/movies").then(
            movies => {
                dispatch({type: "setMovies", movies: movies});
            }
        );
    });
    return (
        <div>
            <h1>我的电影</h1>
            <div>movies: {state.movies ? state.movies.map(
                movie => {
                    return (
                        <li key={movie.id}>{movie.name}</li>
                    );
                }
            ) : "加载中..."}</div>
        </div>
    );
}

const ajax = (path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === '/user') {
                resolve({
                    id: 1,
                    name: "Andy"
                });
                reject(new Error("no such path"));
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript高级程序设计"
                    },
                    {
                        id: 2,
                        name: "算法"
                    }
                ]);
            } else if (path === "/movies") {
                resolve([
                    {
                        id: 1,
                        name: "肖生克的救赎"
                    },
                    {
                        id: 2,
                        name: "声之形"
                    }
                ]);
            }
        }, 2000);
    });
}

export default App;