import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../slices/users';
import { RootState } from '../../store';

import UserList from './UserList';
import AddUser from './AddUser';

export interface UserType {
    userList: User[]
}

function Users() {
    const userList = useSelector((state:RootState) => state.userList)

    return (
        <div>
            <div>
              <AddUser />
            </div>
            <div>
              <UserList
              userList={userList}
              />
            </div>
        </div>
    );
}

export default React.memo(Users);