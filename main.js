console.log(axios);

const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById('searchButton');
let response;

searchBar.addEventListener('keypress', async (e) => {
    try {
        if (e.key === 'Enter') {
            const countryContainer = document.getElementById("containerResults");
            response = await axios.get("https://restcountries.eu/rest/v2/name/belgium");
            const countryName = response.data[0].name;
            const countrySubregion = response.data[0].subregion;
            const countryPopulation = response.data[0].population;

            function textInfo() {
                return countryName + " is situated in " + countrySubregion + ". It has a population of " + countryPopulation + " people.";
            }

            function currency() {
                for (let i = 0; i < response.data[0].currencies.length; i++) {
                    if (response.data[0].currencies.length === 1) {
                        return " and you can pay with " + response.data[0].currencies[0].name + "'s";
                    } else {
                        return " and you can pay with " + response.data[0].currencies[0].name + "'s and " + response.data[0].currencies[1].name + "'s";
                    }
                }
                return currency();
            }

            function textInfo2() {
                return "The capital is " + response.data[0].capital + currency();
            }

            function language() {
                for (let i = 0; response.data[0].languages.length; i++) {
                    if (response.data[0].languages.length === 1) {
                        return "They speak " + response.data[0].languages[0].name;
                    } else if (response.data[0].languages.length === 2) {
                        return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name;
                    } else if (response.data[0].languages.length === 3) {
                        return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name;
                    } else if (response.data[0].languages.length === 4) {
                        return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name + " and " + response.data[0].languages[3].name;
                    } else if (response.data[0].languages.length === 5) {
                        return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name + " and " + response.data[0].languages[3].name + " and " + response.data[0].languages[4].name;
                    }
                }
                return language();
            }

            function flag() {
                return response.data[0].flag;
            }

            const flagImg = document.createElement("img");
            flagImg.src = flag()
            const countryTitle = document.createElement("h1");
            countryTitle.textContent = countryName;
            const countryInfo = document.createElement("p");
            countryInfo.textContent = textInfo();
            const countryInfo2 = document.createElement("p");
            countryInfo2.textContent = textInfo2();
            const countryLanguage = document.createElement("p");
            countryLanguage.textContent = language();

            countryContainer.appendChild(flagImg)
            countryContainer.appendChild(countryTitle);
            countryContainer.appendChild(countryInfo);
            countryContainer.appendChild(countryInfo2);
            countryContainer.appendChild(countryLanguage);

            document.querySelector('input').value = '';
        }
    } catch (e) {
        if (e.key === 'Enter') {
            console.error(e);
        }
    }
}, {once: true});

searchButton.addEventListener('click', async () => {
    try {
        const countryContainer = document.getElementById("containerResults");
        response = await axios.get("https://restcountries.eu/rest/v2/name/belgium");
        const countryName = response.data[0].name;
        const countrySubregion = response.data[0].subregion;
        const countryPopulation = response.data[0].population;

        function textInfo() {
            return countryName + " is situated in " + countrySubregion + ". It has a population of " + countryPopulation + " people.";
        }

        function currency() {
            for (let i = 0; i < response.data[0].currencies.length; i++) {
                if (response.data[0].currencies.length === 1) {
                    return " and you can pay with " + response.data[0].currencies[0].name + "'s";
                } else {
                    return " and you can pay with " + response.data[0].currencies[0].name + "'s and " + response.data[0].currencies[1].name + "'s";
                }
            }
            return currency();
        }

        function textInfo2() {
            return "The capital is " + response.data[0].capital + currency();
        }

        function language() {
            for (let i = 0; response.data[0].languages.length; i++) {
                if (response.data[0].languages.length === 1) {
                    return "They speak " + response.data[0].languages[0].name;
                } else if (response.data[0].languages.length === 2) {
                    return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name;
                } else if (response.data[0].languages.length === 3) {
                    return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name;
                } else if (response.data[0].languages.length === 4) {
                    return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name + " and " + response.data[0].languages[3].name;
                } else if (response.data[0].languages.length === 5) {
                    return "They speak " + response.data[0].languages[0].name + " and " + response.data[0].languages[1].name + " and " + response.data[0].languages[2].name + " and " + response.data[0].languages[3].name + " and " + response.data[0].languages[4].name;
                }
            }
            return language();
        }

        function flag() {
            return response.data[0].flag;
        }

        const flagImg = document.createElement("img");
        flagImg.src = flag()
        const countryTitle = document.createElement("h1");
        countryTitle.textContent = countryName;
        const countryInfo = document.createElement("p");
        countryInfo.textContent = textInfo();
        const countryInfo2 = document.createElement("p");
        countryInfo2.textContent = textInfo2();
        const countryLanguage = document.createElement("p");
        countryLanguage.textContent = language();

        countryContainer.appendChild(flagImg)
        countryContainer.appendChild(countryTitle);
        countryContainer.appendChild(countryInfo);
        countryContainer.appendChild(countryInfo2);
        countryContainer.appendChild(countryLanguage);

    } catch (e) {
        console.error(e);
    }
}, {once: true});



