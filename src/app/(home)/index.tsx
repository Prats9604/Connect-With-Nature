import React from "react";
import Nature from "./_components/nature";
import Why from "./_components/why";
import How from "./_components/how";
import Where from "./_components/where";

const Home = () => {
  return (
    <>
      <div>
        <Nature />
      </div>
      <div>
        <Why />
      </div>
      <div>
        <How />
      </div>
      <div>
        <Where />
      </div>
    </>
  );
};

export default Home;
