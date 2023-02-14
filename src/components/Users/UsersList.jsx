import React from "react";
import PropTypes from "prop-types";
import { UserCard } from "./UserCard";

export const UsersList = ({ users, title }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {title && <h1>{title}</h1>}
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </ul>
  );
};

UsersList.propTypes = {
  title: PropTypes.string,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};
