import React from "react";
import { Link } from "./Link";

export const App = () => {
  console.log("App");
  // return React.createElement("div", null, 'App');
  return (
    <div>
      <Link path="/details" title="To home">
        My link
      </Link>
      <Link path="/contacts" title="To contacts">
        Contacts
      </Link>
      <Link title="To home">Home</Link>
    </div>
  );
};

// Link({title: "To home", children: "Home"})
