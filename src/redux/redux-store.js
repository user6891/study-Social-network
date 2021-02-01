import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { navbarReducer } from "./navbar-reducer";
import { profileReducer } from "./profile-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";
import thunk from "redux-thunk";


const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})

let store = createStore(redusers, applyMiddleware(thunk));
window.store =store.getState();
export default store;