import { CREATE_NEW_USER, DELETE_USER } from "./usersTypes";

export const deleteUserAction = (userId) => ({type: DELETE_USER, payload: userId})
export const createNewUserAction = (user) => ({type: CREATE_NEW_USER, payload: {...user, id: Date.now()}})