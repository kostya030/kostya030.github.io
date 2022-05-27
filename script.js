const country_result_1 = document.getElementById("country_result_1");
const country_result_2 = document.getElementById("country_result_2");
const country_btn = document.getElementById('country_btn');
i = 0;

country_btn.addEventListener('click', getRandomCountry)

function getRandomCountry() {
    fetch("https://restcountries.com/v3.1/region/europe")
        .then(resolve => resolve.json())
        .then(data => {
            data.forEach(country => {
                if(i % 2 == 0) {
                    country_result_1.innerHTML += country.capital[0] + "<br>";
                    i += 1;
                } else {
                    country_result_2.innerHTML += country.capital[0] + "<br>";
                    i += 1;
                }
            })
        })
}