import React from 'react'
import { FaArrowDown, FaArrowUp, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import "./Descriptions.css";

const Descriptions = ({weather, units}) =>{

const timeUnit = units === 'metric' ? 'c' : 'F';
const windUnit = units === 'metric' ? 'm/s' : 'm/h';



 const cards = [
    {
        id: 1,
        icon: <FaArrowDown/>,
        title: "min",
        data: weather.temp_min.toFixed(),
        unit: timeUnit,

    },

    {
        id: 2,
        icon: <FaArrowUp/>,
        title: "max",
        data: weather.temp_max.toFixed(),
        unit: timeUnit,

    },


    {
        id: 3,
        icon: <BiHappy/>,
        title: "feels like",
        data: weather.feels_like.toFixed(),
        unit: timeUnit,

    },
   
    {
        id: 4,
        icon: <MdCompress/>,
        title: "pressure",
        data: weather.pressure,
        unit: "hPa",

    },

    {
        id: 5,
        icon: <MdOutlineWaterDrop/>,
        title: "humidity",
        data: weather.humidity,
        unit: "%",

    },

    {
        id: 6,
        icon: <FaWind/>,
        title: "wind speed",
        data: weather.speed.toFixed(),
        unit: windUnit,

    },

];

return (
    <div className="section section__descriptions">
      {cards.map(({ id, title, data, unit }) => (
        <div key={id} className="card"> 
          <div className="descriptions__card-icons">
            <FaArrowDown/>
            <small>{title}</small> 
          </div>
          <h3>{`${data} ${unit}`}</h3>
        </div>
      ))}
    </div>
  );
  
};

export default Descriptions



