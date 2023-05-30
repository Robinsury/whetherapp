import React, { useEffect, useState } from "react";
import "./temperat.css";

const Temperat =() =>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Basti");
    useEffect (()=>{
        const fetchApi= async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6b8a5d29e117f2bd97f7b287ff3fd56e`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search] );
    return(
        <>
        <div className="box">
            <div className="child">
              <h1 className="header">Weather in</h1>
              <div className="inputs">
                <input type="search" className="inputfield" onChange={(event)=>{setSearch(event.target.value)}}/>
              </div>
                 {!city ? (
                 <p>no data found</p>
                 ):(
               <div>
               <div className="info">
                <i className="fa fa-map-marker" aria-hidden="true"style={{color:"green",fontSize:80}}></i>
                <h2 className="location">
                {search}
                </h2>
               <h1 className="temp">
               {city.temp}° Cel 
               </h1>
               <h3 className="tempin_max">min:{city.temp_min}° Cel | max : {city.temp_max}° Cel</h3>
              </div>
             </div>
            )}
            </div>
        </div>
        </>
        
    )
} 
export default Temperat; 