import React from 'react';

import UserItem from './UserItem';

import { UserType } from './Users';


type UserProps = {
    userList : UserType["userList"]
}

function UserList({ userList } : UserProps) {
    const users = userList

    return (
        <div>
            {users.map(user => <UserItem key={user.id} name={user.name} uid={user.id}/>)}
        </div>
    );
}

export default React.memo(UserList);