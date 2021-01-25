import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { navbarReducer } from "./navbar-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";


const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
})

let store = createStore(redusers);

export default store;