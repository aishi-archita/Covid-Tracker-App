import { useEffect, useState } from 'react';
import WorldStats from '../../Components/WorldStats/WorldStats';
import './Global.css';
import axios from 'axios';
import NumberFormat from 'react-number-format';


const Global = () => {

    const [result, setResult] = useState({
        "Total Confirmed" : 0,
        "Total Deaths" : 0,
        "Total Recovered" : 0,
        "Active Case" : 0

    });


    useEffect(() =>{

        const fetchData = async () => {
            var globalData = await axios.get('https://disease.sh/v3/covid-19/all');

            let corona = globalData.data;

           

            setResult({
                "Total Confirmed" : corona.cases ,
                "Total Deaths" : corona.deaths,
                "Total Recovered" : corona.recovered,
                "Active Case" : corona.active
            })
        }

        fetchData();

    } , [])

    var Stats = Object.keys(result).map((property, index) => {
        return (<WorldStats key = {index}
                           about = {property}
                           total = {<NumberFormat value = {result[property]} thousandSeparator = {true} displayType = "text" />} /> )
            
    })


return (  
        <div className="Global">
            <h1 className="heading">COVID-19 Tracker</h1>
            <p className="description">Let's check information about COVID-19</p>

            <div className="world-statistics">

                {Stats}

            </div>

        </div>
    );
}
 
export default Global;