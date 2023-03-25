import React, { useState, useEffect } from "react";
import './User.css'
import User from "./User";

function Profiles({ users }) {
  //   if (users !== undefined) {
  //     return <p>Loading...</p>;
  //   }
  //   console.log(users);

  return (
    <div>
      <p>Hello</p>
      {users?.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
}

export default Profiles;
