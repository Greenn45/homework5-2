import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction} from "../redux/actions";

const MainPage = () => {
    const dispatch = useDispatch();
    const {title} = useSelector(state => state.titleReducer);

    const changeTitle = () => {
        dispatch(changeTitleAction())
    }

    const changeTitleWithParams = () => {
        dispatch({
            type: "WITH PARAMS",
            payload: 'WITH PARAMS TITLE'
        })
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={changeTitleWithParams}>with params</button>
        </div>
    );
};

export default MainPage;