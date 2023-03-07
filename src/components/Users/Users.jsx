import React, { useMemo, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { UsersList } from "./components/UsersList";
import { NotFound } from "../NotFound/NotFound";
import { SearchInput } from "./components/SearchInput";
import { NewUserForm } from "./components/NewUserForm";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSearchAction,
  createNewUser,
  deleteUser,
  toggleModalAction,
} from "../../redux/users/usersSlice";
import {
  selectFilteredUsers,
  selectOpenToWorkTotal,
  selectUsersIsModalOpen,
  selectUsersSearch,
} from "../../redux/users/usersSelector";

export const Users = () => {
  const filteredUsers = useSelector(selectFilteredUsers);
  const isModalOpen = useSelector(selectUsersIsModalOpen);
  const search = useSelector(selectUsersSearch);
  const openToWorkTotal = useSelector(selectOpenToWorkTotal)

  const dispatch = useDispatch();

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleCreateNewUser = (user) => {
    dispatch(createNewUser(user));
    dispatch(toggleModalAction());
  };

  const toggleModal = () => {
    dispatch(toggleModalAction());
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    dispatch(changeSearchAction(value));
  };

  const handleResetSearch = () => {
    dispatch(changeSearchAction(""));
  };

  return (
    <>
      <div className="d-flex align-items-center mb-5">

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

      <p>
        Open to work: <strong>{openToWorkTotal}</strong>
      </p>

      {filteredUsers.length ? (
        <UsersList users={filteredUsers} onDeleteUser={handleDeleteUser} />
      ) : (
        <NotFound />
      )}
    </>
  );
};
