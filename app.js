const restcountries = "https://restcountries.com/v3.1/all";

const search = document.querySelector("#search-bar");
const searchButton = document.querySelector("#enter");
const showAllButton = document.querySelector("#all-button");

// console.log(search);
// console.log(button);

//listen on search button
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("buttonclicked")
    // console.log(search.value);
    getCountryByName(search.value);
});

//listen on all show button
showAllButton.addEventListener('click', (event) => {
    event.preventDefault();
    getAllCountries();
});


const getCountryByName = async (countryName) => { // Get Country By Name
    const response = await fetch("https://restcountries.com/v3.1/name/" + countryName)
    const data = await response.json();

    const name = (data[0].name.common);
    const flag = (data[0].flag);
    const capital = (data[0].capital);
    const languages = Object.values((data[0].languages)).join(", ");
    // const languageObject = languages.values;
    const population = (data[0].population);

    // console.log(name, languages, capital, population);
    document.querySelector("#span-name").innerText = ("beforeend", ' ' + name + flag);
    document.querySelector("#span-capital").innerText = ("beforeend",' ' + capital);
    document.querySelector("#span-language").innerText = ("beforeend",' ' + languages);
    document.querySelector("#span-population").innerText = ("beforeend",' ' +  population);
};

const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all/");
    const data = await response.json();
    //loop through all elements
    //Yes:pretty sure there's a more efficient way of doing this 

    for (let index = 0; index < data.length; index++) {

        //create section for each
        const section = document.createElement('section');
        section.id = 'section-' + index;

        // add name
        const names = document.createElement("p")
        names.innerHTML = data[index].name.common;
        document.body.appendChild(names);


         // add languages
         const languages = document.createElement("p")
         languages.innerHTML = Object.values((data[0].languages)).join(", ");;
         document.body.appendChild(languages);


        // add capital
        const capitals = document.createElement("p")
        capitals.innerHTML = data[index].capital;
        document.body.appendChild(capitals);

        // add population
        const populations = document.createElement("p")
        populations.innerHTML = data[index].population;
        document.body.appendChild(populations);

    
         //seperate withhr
         const seperate = document.createElement('hr')
         document.body.appendChild(seperate);

    }
    
        
    }


  


    


// console.log(getCountryByName('Norway'));


// getCountryByName();