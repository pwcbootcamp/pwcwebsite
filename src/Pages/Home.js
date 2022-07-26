import React from "react";

const Home = () => {
  return (
    <section className="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div className="msg"></div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
      <ul id="users"></ul>
      {/* <!-- <ul className="items">
      <li className="item">Item 1</li>
      <li className="item">Item 2</li>
      <li className="item">Item 3</li>
    </ul> --> */}
    </section>
  );
};

export default Home;
