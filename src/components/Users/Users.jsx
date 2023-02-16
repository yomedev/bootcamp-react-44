import React, { Component } from "react";
import { UsersFilters } from "./UsersFilters/UsersFilters";
import { UsersList } from "./UsersList";
import usersJson from "../../data/users.json";
import { NotFound } from "./NotFound/NotFound";


export class Users extends Component {
  state = {
    users: usersJson,
    filters: {
      isAvailableChacked: false,
      skills: "",
      search: "",
    },
  };

  handleDeleteUser = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  handleChangeAvailability = () => {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        isAvailableChacked: !prevState.filters.isAvailableChacked,
      },
    }));
  };

  handleChangeSkills = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        skills: value,
      },
    }));
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        search: value,
      },
    }));
  };

  handleResetSearch = () => {
    this.setState((prevState) => ({
      filters: {
        ...prevState.filters,
        search: "",
      },
    }));
  };

  applyFilters = () => {
    const { isAvailableChacked, skills, search } = this.state.filters;
    let filteredUsers = this.state.users;
    if (isAvailableChacked) {
      filteredUsers = filteredUsers.filter(
        (user) => user.isOpenToWork === isAvailableChacked
      );
    }
    if (skills) {
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
  };

  render() {
    const { filters } = this.state;
    const filteredUsers = this.applyFilters()
    return (
      <>
        <UsersFilters
          filters={filters}
          onChangeSkills={this.handleChangeSkills}
          onChangeAvailability={this.handleChangeAvailability}
          onChangeSearch={this.handleChangeSearch}
          onResetSearch={this.handleResetSearch}
        />
        {filteredUsers.length ? (
          <UsersList
            users={filteredUsers}
            onDeleteUser={this.handleDeleteUser}
          />
        ) : (
          <NotFound />
        )}
      </>
    );
  }
}
