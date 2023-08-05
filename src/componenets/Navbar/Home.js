import React from "react";
import classes from './Home.module.css';


const tours = [
  {
    sno: 1,
    Date: "15 july",
    City: "DETROIT, MI",
    Destination: "DTE ENERGY MUSIC THEATRE",
  },
  {
    sno: 2,
    Date: "16 july",
    City: "TORONTO,ON",
    Destination: "BUDWEISER STAGE",
  },
  {
    sno: 3,
    Date: "17 july",
    City: "BRISTOW, VA",
    Destination: "JIGGY LUBE LIVE",
  },
  {
    sno: 4,
    Date: "18 july",
    City: "PHOENIX, AZ",
    Destination: "AK-CHIN PAVILION",
  },
  {
    sno: 5,
    Date: "19 july",
    City: "LAS VEGAS, NV",
    Destination: "T-MOBILE ARENA",
  },
  {
    sno: 6,
    Date: "20 july",
    City: "CONCORD, CA",
    Destination: "CONCORD PAVILION",
  },
];

const Home = (props) => {
    
  const showOnhomepage = tours.map((list) => {

    return (
      <ul>
        <li>
          {list.sno}
          {list.Date} 
          {list.City} 
          {list.Destination}
          <button className={classes.btn}>Buy Ticket</button>
          <hr />
        </li>
      </ul>
    );
    
  });
  return <div className={classes.main}>{showOnhomepage}</div>;
};

export default Home;
