import React, { FC } from "react";
import Counter from "./counter";

const App: FC = () => (
  <>
    <p>
      <strong>HUH</strong> counter{" "}
      <span role="img" aria-label="hmm">
        🤔
      </span>
    </p>
    <br />
    <Counter />
  </>
);

export default App;
