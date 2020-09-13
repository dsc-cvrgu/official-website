import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState(null);
  const getUser = (e) => {
    e.preventDefault();
    axios.get(`${process.env.REACT_APP_URL}/logout`).then((res) => {
      setData(res.data);
      console.log(res);
    });
  };

  return (
    <div>
      <h1>User</h1>
      <form>
        <button onClick={getUser}>Logout</button>
        {data ? "welcome" : null}
      </form>
    </div>
  );
};

export default User;
