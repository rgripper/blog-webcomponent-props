import React from "react";

export function App(props) {
  return (
    <button onClick={() => alert(props.ransom)}>
      Hold the world ransom for...
    </button>
  );
}
