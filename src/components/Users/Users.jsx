import React, { useEffect, useMemo, useReducer, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { UsersList } from "./components/UsersList";
import usersJson from "../../data/users.json";
import { NotFound } from "../NotFound/NotFound";
import { SkillsFilter } from "./components/SkillsFilter";
import { AvailabilityFilter } from "./components/AvailabilityFilter";
import { SearchInput } from "./components/SearchInput";
import { NewUserForm } from "./components/NewUserForm";
import { Modal } from "../Modal/Modal";

const ALL_SKILL_VALUE = "all";

const LOCAL_STORAGE_USERS_KEY = "users";

const getLocalData = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
};

const usersReducer = (state, action) => {
  switch (action.type) {
    case "toggleModal":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "deleteUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "createNewUser":
      return { ...state, users: [action.payload, ...state.users] };
    default:
      throw new Error("Action doesn't exist");
  }
};

const initialState = {
  users: getLocalData() ?? usersJson,
  isModalOpen: false,
  isAvailableChecked: false,
  skills: ALL_SKILL_VALUE,
  search: "",
};

export const Users = () => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  const { users, isModalOpen } = state;

  console.log(state);

  // const [users, setUsers] = useState(() => getLocalData() ?? usersJson);
  const [isAvailableChecked, setIsAvailableChecked] = useState(false);
  const [skills, setSkills] = useState(ALL_SKILL_VALUE);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
  }, [users]);

  const handleDeleteUser = (userId) => {
    // setUsers((prev) => prev.filter((user) => user.id !== userId));
    dispatch({ type: "deleteUser", payload: userId });
  };

  const handleCreateNewUser = (user) => {
    // setUsers((prev) => [{ ...user, id: Date.now() }, ...prev]);
    dispatch({ type: "createNewUser", payload: { ...user, id: Date.now() } });
    dispatch({ type: "toggleModal" });
  };

  const toggleModal = () => {
    dispatch({ type: "toggleModal" });
  };

  const handleChangeAvailability = () => {
    setIsAvailableChecked((prev) => !prev);
  };

  const handleChangeSkills = (event) => {
    const { value } = event.target;
    setSkills(value);
  };

  const handleChangeSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleResetSearch = () => {
    setSearch("");
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
