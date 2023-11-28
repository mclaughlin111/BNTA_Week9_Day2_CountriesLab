console.log("Working...");

const restcountries = "https://restcountries.com/v3.1/all";

const fetchSingleCountry = async () => { // Get Country By Name
    const reponse = await fetch("https://restcountries.com/v3.1/name/australia")
    const data = await reponse.json();

    console.log(data);
};

fetchSingleCountry();