import {connect} from "react-redux";
import {ActionsType, StateType, User} from "../../redux/store";
import {Users} from "./users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: User[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)