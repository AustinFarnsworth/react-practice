import React from "react";

function Hello() {
     const sayHello = () => {
         alert("Welcome to my website!");
     }

    return (
        <button onClick={sayHello}>Say Hello </button>
    )
}

export default Hello; 