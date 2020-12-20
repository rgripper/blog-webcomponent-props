/** @jsx jsx */
import { jsx, css } from "@emotion/react";

const buttonStyles = css`
  background: black;
  color: white;
  border: none;
`;

export function App(props) {
  return (
    <button css={buttonStyles} onClick={() => alert(props.ransom)}>
      Hold the world ransom for...
    </button>
  );
}
