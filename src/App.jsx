import React from "react";
// import { Button } from "./components/Button/Button";
// import { Link } from "./components/Link/Link";
// import { UserCard } from "./components/Users/UserCard";
import { UsersList } from "./components/Users/UsersList";
import usersJson from "./data/users.json";

// console.log(usersJson);

// const user = usersJson[0];

export const App = () => {
  console.log("App");
  // return React.createElement("div", null, 'App');
  // const { firstName, lastName, phone, email } = user;
  return (
    <>
      {/* <Button primary>Enter</Button>
      <Button secondary>Enter</Button> */}
      {/* <Link underline path="/details" title="To home">
        Home
      </Link>
      <br />
      <Link path="/contacts" title="To contacts">
        Contacts
      </Link> */}

      <UsersList title="My users list" users={usersJson} />
      {/* <UserCard
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
      /> */}
      {/* <UserCard {...user} /> */}
    </>
  );
};

// Link({title: "To home", children: "Home"})
