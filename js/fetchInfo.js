const getCapital = async (country) =>{
    const url = `https://restcountries.eu/rest/v2/name/${country}`;
    try {
        let response = await fetch(url);
        let parsed = await response.json();
        return parsed[0].capital;

    }catch(err){
        console.log(err);
    }
}

export {
    getCapital
}
