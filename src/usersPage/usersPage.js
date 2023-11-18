import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInputAction, changeTitleAction, clearInputAction, deleteAllAction} from "../redux/actions";
import {addReducerAction} from "../redux/usersReducer";
import Users from "../components/Users";

const UsersPage = () => {
    const dispatch = useDispatch();
    const { inputValue, users} = useSelector(state => state.usersReducer);

    const changeInput = (e) => {
        dispatch(changeInputAction(e.target.value));
    }

    const addUser = () => {
            dispatch(addReducerAction(inputValue));
    }

    const deleteAll = () => {
        dispatch(deleteAllAction());
        dispatch(clearInputAction());
    }

    return (
        <div>
            {/*<h1>{inputValue}</h1>*/}
            <input type="text" placeholder="name" value={inputValue} onChange={changeInput}/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteAll}>Delete all</button>

            {users.map((users, idx) =>
                <Users key={idx} userName={users} />
                )}
        </div>
    );
};

export default UsersPage;