console.log("Working...");

const restcountries = "https://restcountries.com/v3.1/all";
const search = document.querySelector("#search-bar");
const form = document.querySelector("#country-form");

countryName = search.innerHTML;

form.addEventListener('submit', (event) => {
    console.log("form submit")
    event.preventDefault();
    countryName = search.event.target['#search-bar'].value;
    getCountryByName(countryName);
});




const getCountryByName = async (countryName) => { // Get Country By Name
    const reponse = await fetch("https://restcountries.com/v3.1/name/" + countryName)
    const data = await reponse.json();

    console.log(countryName);

    const name = (data[0].name.common);
    const flag = (data[0].flag);
    const capital = (data[0].capital);
    const languages = Object.values((data[0].languages)).join(" ");
    // const languageObject = languages.values;
    const population = (data[0].population);

    console.log(name, languages, capital, population);
    document.querySelector("#country-name").insertAdjacentText("beforeend", ' ' + name + flag);
    document.querySelector("#country-capital").insertAdjacentText("beforeend",' ' + capital);
    document.querySelector("#country-language").insertAdjacentText("beforeend",' ' + languages);
    document.querySelector("#country-population").insertAdjacentText("beforeend",' ' +  population);
};

// console.log(getCountryByName('Norway'));


// const displayCountryInformation = (name) => {
//     const country = getCountryByName(name);
//     console.log(country);
// };

// document.querySelector("#country-form").addEventListener("submit", getCountryByName(search));
