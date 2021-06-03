import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis,eatSushi}) {
  const [sushiStart,setSushiStart] = useState(0)

  function handleMoreSushi() {
    setSushiStart(prevStart => prevStart + 4)
  }
  return (
    <div className="belt">
      {sushis.slice(sushiStart,sushiStart + 4).map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>)}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
