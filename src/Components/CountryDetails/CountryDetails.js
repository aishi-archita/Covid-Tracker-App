
import 'materialize-css/dist/css/materialize.min.css';

import './CountryDetails.css';

import NumberFormat from 'react-number-format';


const CountryDetails = ({details}) => {

    
    return ( 
        <div className="countries-details ">
             <table className="centered">
                <tbody> 
                    { details.map((country , index) =>(
                        <tr key={index}>
                            <td className = "row-content flag">
                
                                <img alt="Country Flag" style = {{width : '120px' , height : '80px'}}src ={country.countryInfo.flag}/>
                                <p>{country.country}</p>
                            </td>

                            <td className = "row-content">
                                <p className ="count cases">
                                    <NumberFormat value = {country.cases} thousandSeparator = {true} displayType = "text" />
                                </p>
                                <p className= "yesterday">Last 24 Hours: 
                                    <strong>
                                        <NumberFormat value = {country.todayCases} thousandSeparator = {true} displayType = "text" />
                                    </strong>
                                </p>
                            </td>

                            <td className = "row-content">
                                <p className ="count deaths">
                                    <NumberFormat value = {country.deaths} thousandSeparator = {true} displayType = "text" />
                                </p>
                                <p className= "yesterday">Last 24 Hours: 
                                     <strong>
                                        <NumberFormat value = {country.todayDeaths} thousandSeparator = {true} displayType = "text" />
                                    </strong>
                                </p>
                            </td>

                            <td className ="row-content">
                                <p className ="count recovered">
                                <NumberFormat value = {country.recovered} thousandSeparator = {true} displayType = "text" />
                                </p>
                                <p className= "yesterday">Last 24 Hours: 
                                    <strong>
                                        <NumberFormat value = {country.todayRecovered} thousandSeparator = {true} displayType = "text" />  
                                    </strong>
                                </p>
                            </td>
                         </tr>
                    ))
                    
                    }
                 </tbody>
            </table> 
        </div>
     );
}
 
export default CountryDetails;