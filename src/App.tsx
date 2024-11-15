import React from "react";
import Header from "./component/header";
import Hero from "./component/hero";

import List from "./component/list";
import Filter from "./component/filter";

const App = () => {
  return (
    <div className="bg-[rgb(23,23,23)] min-h-screen text-white ">
      <Header />

      <Hero />
      <Filter />
      <List />
    </div>
  );
};

export default App;
