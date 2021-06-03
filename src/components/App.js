import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis,setSushis] = useState([])
  const [money,setMoney] = useState(100)

  function filterSushi() {
    return sushis.filter(sushi => sushi.isEaten)
  }

  function eatSushi(chosenSushi) {
    if (money >= chosenSushi.price && chosenSushi.isEaten === false) {
      const updatedSushis= [...sushis].map((sushi) => {
        if (sushi.id === chosenSushi.id) {
          sushi.isEaten = true
        }
        return sushi
      })
      setSushis(updatedSushis)
      setMoney(prevMoney => prevMoney - chosenSushi.price)
    }
  }

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(resp => {
        const newSushis = resp.map(sushi => { return {...sushi,isEaten:false} })
        setSushis(newSushis)
      })
  },[])
  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi}/>
      <Table money={money} plates={filterSushi(sushis)}/>
    </div>
  );
}

export default App;
