import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, User } from "../../slices/users";
import { RootState } from '../../store';

function AddUser() {
    const userList = useSelector((state:RootState) => state.userList)

    const dispatch = useDispatch()
    const plusUser = (user:User) => 
    dispatch(addUser(user))
    
    const [userData, setUserData] = useState<User>({
        id: userList.length,
        name: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData(() => {
            return {
                ...userData,
                name: e.target.value
            }
        });
    }

    const userSubmit = (e: FormEvent) => {
        e.preventDefault()
        plusUser(userData)
        setUserData(() => {
            return {
                ...userData,
                id: userData.id+1,
                name:""
            }
        })
        
    }

    return (
        <div>
            <form onSubmit={userSubmit}>
                <input 
                onChange={onChange}
                placeholder="이름을 입력해주세요"
                />
                <button type="submit">등록</button>
            </form>        
        </div>
    );
}

export default AddUser;