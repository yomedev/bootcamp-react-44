import React from "react";
import classNames from "classnames";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HiStatusOnline } from "react-icons/hi";
// import defaultAvatar from "../../images/default-avatar.jpg";
import styles from "./Users.module.css";

const CardBody = styled.li`
  padding: 20px;
  margin: 20px;
  background-color: #eee;
`;

const StatusIcon = styled(HiStatusOnline)`
  color: ${(props) => (props.status === "online" ? "green" : "red")};
`;

export const UserCard = ({
  firstName,
  lastName,
  email,
  phone,
  isOnline,
  image,
}) => {
  return (
    <CardBody>
      {/* <img src={image ?? defaultAvatar} alt="avatar" /> */}
      <p>
        {firstName} {lastName}
      </p>
      <a href="/" className={styles.link}>
        {email}
      </a>
      <p>{phone}</p>
      <StatusIcon status={isOnline ? "online" : "offline"} />
      <p
        className={classNames({
          [styles.online]: isOnline,
          [styles.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </CardBody>
  );
};

UserCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  image: PropTypes.string,
};
