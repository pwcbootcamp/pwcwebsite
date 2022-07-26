import React, { useState } from "react";
// import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0); //Array distructoring
  //   const [desc, setDesc] = useState("");

  return (
    <section>
      <div>
        <h2>{count}</h2>
        {/* <button onClick={() => setCount(count + 1)}>
          Click me to increase by 1
        </button>
        <button onClick={() => setCount(count - 1)}>
          Click me to decrease by 1
        </button>
        <button onClick={() => setCount(0)}>Click me to reset</button>
        <Button text="Like Me" color="red" />
        <Button text="Hate Me" color="yellow" />
        <input type="text" onChange={(e) => setDesc(e.target.value)} />
        <h3>{desc}</h3> */}
        <button onClick={() => setCount(count + 1)}>
          Click me to decrease by 1
        </button>
      </div>
    </section>
  );
};

export default Counter;
