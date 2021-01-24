import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { navbarReducer } from "./navbar-reducer";
import { profileReducer } from "./profile-reducer";


const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
})

let store = createStore(redusers);

export default store;