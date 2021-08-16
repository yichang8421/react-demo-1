import React, {useReducer} from 'react';

const initial = {
    name: "",
    age: 18,
    nationality: "汉族"
};

const reducer = (state, action) => {
    switch (action.type) {
        case "patch":
            return {...state, ...action.formData};
        case "reset":
            return initial;
        default:
            throw new Error("no such type");
    }
};

const App = () => {
    const [formData, dispatch] = useReducer(reducer, initial);

    const submit = () => {
    };
    const reset = () => {
        dispatch({type: "reset"});
    };

    return (
        <form onSubmit={submit} onReset={reset}>
            <div>
                <label>
                    姓名
                </label>
                <input value={formData.name}
                       onChange={e => {
                           dispatch({
                               type: "patch",
                               formData: {
                                   name: e.target.value
                               }
                           })
                       }}/>
            </div>

            <div>
                <label>
                    年龄
                </label>
                <input value={formData.age}
                       onChange={e => {
                           dispatch({
                               type: "patch",
                               formData: {
                                   age: e.target.value
                               }
                           })
                       }}/>
            </div>

            <div>
                <label>
                    民族
                </label>
                <input value={formData.nationality}
                       onChange={e => {
                           dispatch({
                               type: "patch",
                               formData: {
                                   nationality: e.target.value
                               }
                           })
                       }}/>
            </div>

            <button type='submit'>提交</button>
            <button type='reset'>重置</button>
            <hr/>
            {JSON.stringify(formData)}
        </form>
    );
};

export default App;