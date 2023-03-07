import React from "react";
import { UsersItem } from "./UsersItem";

export const UsersList = ({ users, onDeleteUser }) => {
  

  return (
    <>
      <ul className="mb-5" style={{ listStyle: "none" }}>
        {users.map((user) => (
          <UsersItem onDeleteUser={onDeleteUser} key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

// export class UsersList extends Component {
//   getOpenToWorkTotal = () => {
//     return this.props.users.reduce(
//       (acc, user) => (user.isOpenToWork ? acc + 1 : acc),
//       0
//     );
//   };

//   render() {
//     const { users, onDeleteUser } = this.props;
//     return (
//       <>
//         <p>Open to work: {this.getOpenToWorkTotal()}</p>
//         <ul className="mb-5" style={{ listStyle: "none" }}>
//           {users.map((user) => (
//             <UsersItem onDeleteUser={onDeleteUser} key={user.id} user={user} />
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

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
