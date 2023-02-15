import React, { Component } from "react";
import { UsersItem } from "./UsersItem";

export class UsersList extends Component {
  state = {
    users: this.props.users ?? [],
  };

  handleDeleteUser = (userId) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userId),
    }));
  };

  getOpenToWorkTotal = () => {
    return this.state.users.reduce(
      (acc, user) => (user.isOpenToWork ? acc + 1 : acc),
      0
    );
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <p>Open to work: {this.getOpenToWorkTotal()}</p>
        <ul className="mb-5" style={{ listStyle: "none" }}>
          {users.map((user) => (
            <UsersItem
              onDeleteUser={this.handleDeleteUser}
              key={user.id}
              user={user}
            />
          ))}
        </ul>
      </>
    );
  }
}

// export const UsersList = ({ users }) => {
//   return (
//     <>
//       <p>Open to work: 0</p>
//       <ul className="mb-5" style={{ listStyle: "none" }}>
//         {users.map((user) => (
//           <UsersItem key={user.id} user={user} />
//         ))}
//       </ul>
//     </>
//   );
// };
