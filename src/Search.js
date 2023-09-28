import React, {useState} from "react"
import './App.css';
import axios from "axios";

export const Search = () => {
   
    const [search, setSearch] = useState("");
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);


   const handleSearch = async () => {
    setLoading(true);
    const res = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
  
   setLoading(false);
   setCountry(res.data[0]);
   console.log(res.data[0]);
    };
   
   
   
   
    return(
        
      <div className="container">
        <div className="inner">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search a Countries Name..."></input>

      <button onClick={handleSearch}>Search</button>
            </div> 
          
      {country && !loading && (
      <div className="result-veiw">
        <p><span className="text2">Capital:</span>{country.capital}</p>
        <p><span className="text2">Population:</span>{country.population}</p>
       
        <p><span className="text2">Continent:</span>{country.continents}</p>
      </div>
     )}
     {loading && <h2 className="loading">Loading....</h2>}
     </div>
      
    );
  }