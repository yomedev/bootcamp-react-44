import React, { useEffect, useMemo, useReducer, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { UsersList } from "./components/UsersList";
import { NotFound } from "../NotFound/NotFound";
import { SkillsFilter } from "./components/SkillsFilter";
import { AvailabilityFilter } from "./components/AvailabilityFilter";
import { SearchInput } from "./components/SearchInput";
import { NewUserForm } from "./components/NewUserForm";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_AVAILABILITY,
  CHANGE_SEARCH,
  CHANGE_SKILLS,
  CREATE_NEW_USER,
  DELETE_USER,
  RESET_SEARCH,
  TOGGLE_MODAL,
} from "../../redux/users/usersTypes";
import { deleteUserAction, toggleModal } from "../../redux/users/usersActions";
import { createNewUser, deleteUser, toggleModalAction } from "../../redux/users/usersSlice";
import { createNewUserAction } from "../../redux/users/usersSlice";

const ALL_SKILL_VALUE = "all";

export const Users = () => {
  const {
    data: users,
    isModalOpen,
    filter
  } = useSelector((state) => state.users);
  const {isAvailableChecked, skills, search} = filter
  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    // dispatch({ type: DELETE_USER, payload: userId });
    // dispatch(deleteUserAction(userId))
    dispatch(deleteUser(userId))
  };

  const handleCreateNewUser = (user) => {
    // dispatch({ type: CREATE_NEW_USER, payload: { ...user, id: Date.now() } });
    // dispatch(createNewUserAction(user))
    // dispatch({ type: TOGGLE_MODAL });
    dispatch(createNewUser(user))
    dispatch(toggleModalAction())
  };

  const toggleModal = () => {
    dispatch(toggleModalAction())
  };

  const handleChangeAvailability = () => {
    dispatch({ type: CHANGE_AVAILABILITY });
  };

  const handleChangeSkills = (event) => {
    const { value } = event.target;
    dispatch({ type: CHANGE_SKILLS, payload: value})
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    dispatch({type: CHANGE_SEARCH, payload: value})
  };

  const handleResetSearch = () => {
    dispatch({type: RESET_SEARCH})
  };

  const filteredUsers = useMemo(() => {
    console.log("filter");
    let filteredUsers = users;
    if (isAvailableChecked) {
      filteredUsers = filteredUsers.filter(
        (user) => user.isOpenToWork === isAvailableChecked
      );
    }
    if (skills !== ALL_SKILL_VALUE) {
      filteredUsers = filteredUsers.filter((user) =>
        user.skills.includes(skills)
      );
    }
    if (search) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredUsers;
  }, [users, isAvailableChecked, skills, search]);

  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilter
          value={isAvailableChecked}
          onChangeAvailability={handleChangeAvailability}
        />

        <SkillsFilter skillValue={skills} onChangeSkills={handleChangeSkills} />

        <button
          type="button"
          className="btn btn-primary btn-lg ms-auto"
          onClick={toggleModal}
        >
          <FiPlus />
        </button>
      </div>

      <SearchInput
        value={search}
        onResetSearch={handleResetSearch}
        onChangeSearch={handleChangeSearch}
      />

      {isModalOpen && (
        <Modal onModalClose={toggleModal}>
          <NewUserForm
            onSubmit={handleCreateNewUser}
            onModalClose={toggleModal}
          />
        </Modal>
      )}

      {filteredUsers.length ? (
        <UsersList users={filteredUsers} onDeleteUser={handleDeleteUser} />
      ) : (
        <NotFound />
      )}
    </>
  );
};
