import React, { useEffect, useMemo, useState } from "react";
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

export const Users = () => {
  const [users, setUsers] = useState(() => getLocalData() ?? usersJson);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAvailableChecked, setIsAvailableChecked] = useState(false);
  const [skills, setSkills] = useState(ALL_SKILL_VALUE);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(users));
  }, [users]);

  const handleDeleteUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const handleCreateNewUser = (user) => {
    setUsers((prev) => [{ ...user, id: Date.now() }, ...prev]);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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

// export class Users extends Component {
//   state = {
//     users: usersJson,
//     isModalOpen: false,
//     isAvailableChacked: false,
//     skills: ALL_SKILL_VALUE,
//     search: "",
//   };

//   componentDidMount() {
//     const localUsersData = JSON.parse(
//       localStorage.getItem(LOCAL_STORAGE_USERS_KEY)
//     );

//     if (localUsersData && localUsersData.length) {
//       this.setState({ users: localUsersData });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.users !== prevState.users) {
//       localStorage.setItem(
//         LOCAL_STORAGE_USERS_KEY,
//         JSON.stringify(this.state.users)
//       );
//     }
//   }

//   handleDeleteUser = (userId) => {
//     this.setState((prevState) => ({
//       users: prevState.users.filter((user) => user.id !== userId),
//     }));
//   };

//   handleCreateNewUser = (user) => {
//     this.setState((prevState) => ({
//       users: [{ ...user, id: Date.now() }, ...prevState.users],
//       isModalOpen: false,
//     }));
//   };

//   toggleModal = () => {
//     this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
//   };

//   handleChangeAvailability = () => {
//     this.setState((prevState) => ({
//       isAvailableChacked: !prevState.isAvailableChacked,
//     }));
//   };

//   handleChangeSkills = (event) => {
//     const { value } = event.target;
//     this.setState({
//       skills: value,
//     });
//   };

//   handleChangeSearch = (event) => {
//     const { value } = event.target;
//     this.setState({
//       search: value,
//     });
//   };

//   handleResetSearch = () => {
//     this.setState({
//       search: "",
//     });
//   };

//   applyFilters = () => {
//     const { isAvailableChacked, skills, search } = this.state;
//     let filteredUsers = this.state.users;
//     if (isAvailableChacked) {
//       filteredUsers = filteredUsers.filter(
//         (user) => user.isOpenToWork === isAvailableChacked
//       );
//     }
//     if (skills !== ALL_SKILL_VALUE) {
//       filteredUsers = filteredUsers.filter((user) =>
//         user.skills.includes(skills)
//       );
//     }
//     if (search) {
//       filteredUsers = filteredUsers.filter((user) =>
//         user.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     return filteredUsers;
//   };

//   render() {
//     const { isAvailableChacked, skills, search, isModalOpen } = this.state;
//     const filteredUsers = this.applyFilters();
//     return (
//       <>
//         <div className="d-flex align-items-center mb-5">
//           <AvailabilityFilter
//             value={isAvailableChacked}
//             onChangeAvailability={this.handleChangeAvailability}
//           />

//           <SkillsFilter
//             skillValue={skills}
//             onChangeSkills={this.handleChangeSkills}
//           />

//           <button
//             type="button"
//             className="btn btn-primary btn-lg ms-auto"
//             onClick={this.toggleModal}
//           >
//             <FiPlus />
//           </button>
//         </div>

//         <SearchInput
//           value={search}
//           onResetSearch={this.handleResetSearch}
//           onChangeSearch={this.handleChangeSearch}
//         />

//         {isModalOpen && (
//           <Modal onModalClose={this.toggleModal}>
//             <NewUserForm
//               onSubmit={this.handleCreateNewUser}
//               onModalClose={this.toggleModal}
//             />
//           </Modal>
//         )}

//         {filteredUsers.length ? (
//           <UsersList
//             users={filteredUsers}
//             onDeleteUser={this.handleDeleteUser}
//           />
//         ) : (
//           <NotFound />
//         )}
//       </>
//     );
//   }
// }
