import { createSelector } from "reselect";

export const selectUsersData = (state) => {
  // console.log('get users');
  return state.users.data;
};

export const selectUsersIsModalOpen = (state) => state.users.isModalOpen;

export const selectUsersSearch = (state) => state.users.search;

// export const selectFilteredUsers = (state) => {
//   console.log('filter');
//   const users = selectUsersData(state);
//   const search = selectUsersSearch(state);
//   return users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );
// };

export const selectFilteredUsers = createSelector(
  [selectUsersData, selectUsersSearch],
  (users, search) => {
    console.log("filter");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);

export const selectOpenToWorkTotal = createSelector(
  selectFilteredUsers,
  (users) => {
    console.log("reduce");
    return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
  }
);

// export const selectOpenToWorkTotal = (state) => {
//   console.log("reduce");
//   const users = selectFilteredUsers(state);
//   return users.reduce((acc, user) => (user.isOpenToWork ? acc + 1 : acc), 0);
// };
