import {useContext, useEffect} from 'react';
import Context from "../Context";
import ajax from "../ajax";

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

export default Movies;
