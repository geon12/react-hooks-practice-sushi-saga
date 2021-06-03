import React from "react";

function Sushi({sushi,eatSushi}) {

  function handleEatClick() {
    eatSushi(sushi)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatClick}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
