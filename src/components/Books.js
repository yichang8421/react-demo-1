import {useContext, useEffect} from "react";
import Context from "../Context";
import ajax from "../ajax";

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

export default Books;
