import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../slices/users';
import { RootState } from '../../store';

type UserItemProps = {
    name: string
    uid: number
}


function UserItem({name, uid}:UserItemProps) {
    const userList = useSelector((state:RootState) => state.userList)

    const userName = name
    const userUid = uid

    const dispatch = useDispatch()

    const sliceUser = (id:number) => {
        dispatch(deleteUser(id))
        console.log(userList)
    }

    const deleteGo = () => {
        sliceUser(userUid)
    }

    return (
        <div>
            <p> ID : {userUid} </p>
            <p> 이름: {userName} </p>
            <button onClick={deleteGo}>삭제</button>
        </div>
    );
}

export default React.memo(UserItem);