import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword]= useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos)
}

function search(){
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey ="563492ad6f9170000100000128866f61e2154e2e9837ab6be6848019";
     let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
     let headers ={Authorization: `Bearer ${pexelsApiKey}`};
     axios.get(pexelsApiUrl, { headers: headers })
     .then(handlePexelsResponse);
    }


function handleSubmit(event){
event.preventDefault();
search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search ();
}

if (loaded){
 return (
        <div className="Dictionary">
            <section>
                <h1> What word do you want to look up? </h1>
        <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword }/>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, plant and etc.
        </div>
        </section>
        <Results results={results}/>
                </div>
            );   
           } else{
            load();
            return  "Loading"; 
           }
}

