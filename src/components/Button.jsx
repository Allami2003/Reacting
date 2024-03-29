import React, { useState } from "react";

const Button = ({label, onclick}) =>{
    /*return <button onClick={onclick}>{label}</button>*/
    const [count,setCount]=useState(0);
    return(
      <div>
        <p>вы нажили {count}</p>
        <button onClick={()=>setCount(count+1)}>mimi</button>
      </div>
    );
  }
export default Button