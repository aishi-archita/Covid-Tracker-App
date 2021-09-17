import './Countries.css';
import CountryDetails from '../../Components/CountryDetails/CountryDetails';
import 'materialize-css/dist/css/materialize.min.css';

import axios from 'axios';
import arraySort from 'array-sort';
import { useEffect , useState } from 'react';

const Countries = () => {

    const [details, setDetails] = useState([]);
    const [value, setValue] = useState('Highest');
    const [searchCountry , setSearchCountry] = useState("");
    

    useEffect(() => {

        const fetchData = async () => {
            var countriesData = await axios.get('https://disease.sh/v3/covid-19/countries');

            let countries = countriesData.data;

            countries = arraySort(countries, 'cases', {reverse: true})

            setDetails(countries);
            

        }

        fetchData();
    } , [] )


   const ChangeSortValue = (e) => {
        let value = e.target.value;
        
        let sortByReverse = true;

        if(value === 'Highest'){
            setValue('Highest');
            sortByReverse = true;
        }
        else{
            setValue('Lowest');
            sortByReverse = false;
        }

        let country_by_sort = arraySort(details, 'cases', {reverse : sortByReverse});

        setDetails(country_by_sort);
        console.log(details);

    } 

    const filterResults = details.filter((country) => {
        return country.country.toLowerCase().includes(searchCountry.toLowerCase()) ;
        }

    );

    const HandleSearch = (e) => {

        
        setSearchCountry(e.target.value);

        let filteredResults = filterResults;

        setDetails(filteredResults);
    
        
    }

    return ( 
        <div className="Countries-Stats ">
            <h2 className="countries-stats-heading">Countries Statistics</h2>
            
            <div className="container">
                <form className="col s12">
                    <div className="filtering row ">
                        <div className="input-field col s8">
                            <input type="text" 
                            placeholder = "Enter Country Name"
                            value = {searchCountry}
                            onChange = {HandleSearch} />
                        </div>
                        
                        <div className="input-field col s4">
                            <select 
                             value = {value}
                             className="sort-by" 
                             onChange = {ChangeSortValue}  > 
                                <option defaultValue disabled selected>Sort By</option>
                                <option value = 'Highest' >Highest</option>
                                <option value = 'Lowest' >Lowest</option>
                            </select>
                        </div>
                        
                    </div>
                </form>

                <table className="centered">
                    <thead className = "deep-purple accent-2">
                    <tr className="white-text">
                        <th className="heading-information">Country</th>
                        <th className="heading-information">Cases</th>
                        <th className="heading-information">Deaths</th>
                        <th className="heading-information">Recovered</th>
                    </tr>
                    </thead>
                   
                </table>

                
                <CountryDetails details = {details}  />
        

            </div>

        </div>


     );
}
 
export default Countries;