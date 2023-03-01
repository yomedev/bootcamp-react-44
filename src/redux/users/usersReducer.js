import { combineReducers } from "redux";
import { usersInitialState } from "./usersInitialState";
import {
  CHANGE_AVAILABILITY,
  CHANGE_SEARCH,
  CHANGE_SKILLS,
  CREATE_NEW_USER,
  DELETE_USER,
  RESET_SEARCH,
  TOGGLE_MODAL,
} from "./usersTypes";

// export const usersReducer = (state = usersInitialState, action) => {
//   switch (action.type) {
//     case TOGGLE_MODAL:
//       return { ...state, isModalOpen: !state.isModalOpen };
//     case DELETE_USER:
//       return {
//         ...state,
//         data: state.data.filter((user) => user.id !== action.payload),
//       };
//     case CREATE_NEW_USER:
//       return {
//         ...state,
//         data: [action.payload, ...state.data],
//       };
//     case CHANGE_SEARCH:
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case RESET_SEARCH:
//       return {
//         ...state,
//         search: "",
//       };
//     case CHANGE_SKILLS:
//       return {
//         ...state,
//         skills: action.payload,
//       };
//     case CHANGE_AVAILABILITY:
//       return {
//         ...state,
//         isAvailableChecked: !state.isAvailableChecked,
//       };
//     default:
//       return state;
//   }
// };

const usersDataReducer = (state = usersInitialState.data, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    case CREATE_NEW_USER:
      return [action.payload, ...state];
    default:
      return state;
  }
};

const usersModalReducer = (state = usersInitialState.isModalOpen, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

const usersFilterReducer = (state = usersInitialState.filter, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case RESET_SEARCH:
      return {
        ...state,
        search: "",
      };
    case CHANGE_SKILLS:
      return {
        ...state,
        skills: action.payload,
      };
    case CHANGE_AVAILABILITY:
      return {
        ...state,
        isAvailableChecked: !state.isAvailableChecked,
      };
    default:
      return state;
  }
}


export const usersReducer = combineReducers({
  data: usersDataReducer,
  isModalOpen: usersModalReducer,
  filter: usersFilterReducer
})