import React from "react";
import "./styles.css";
/*const SeasonConfig = {
  summer: {
    text: "Its Summer!!"
  },
  winter: {
    text: "Burr its chilly"
  }
};*/
const getSeasons = (lat, months) => {
  if (months > 2 && months < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeasons(props.lat, new Date().getMonth());
  const text = season === "summer" ? "Lets hit the beach" : "Burr its chilly";
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
export default SeasonDisplay;
//<i className={`${icon} icon`} />
//<i className={`${icon} icon`} />
