// import area (optional)

import { useState } from "react";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Home />
      {/* <Search /> */}
    </>
  );
};
// export area --> export function

// module.exports = App
export default App;

// component lifecycle
// component
// initialization --> component get memory
// rendering  ---> JSX runs

// load --> mounting (once)
// update ---> updating (multiple time)
// unload ---> unmounting (once)

// functional component --> hook --> useEffect
// useEffect happen
// human ---> birth (once) ---> progress (updating) ---> die (once)
