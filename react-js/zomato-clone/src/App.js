// import area (optional)

import { useState } from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:meal_id/:meal_type_name" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
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
