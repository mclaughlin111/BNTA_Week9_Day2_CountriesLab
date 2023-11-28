console.log("Working...");

const restcountries = "https://restcountries.com/v3.1/all";

const getCountryByName = async (countryName) => { // Get Country By Name
    const reponse = await fetch("https://restcountries.com/v3.1/name/" + countryName)
    const data = await reponse.json();
    return data;
    
};

console.log(getCountryByName('Egypt'));