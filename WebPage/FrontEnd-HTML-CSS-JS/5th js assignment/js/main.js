// https://api.weatherapi.com/v1/current.json?key=50374d3a135d4de48b4154842220306&q=cairo

async function search(country = 'cairo') {
    let tempApi = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=50374d3a135d4de48b4154842220306&q=${country} &days=3`);

    if (tempApi.ok && 400 != tempApi.status) {
        let apiJson = await tempApi.json();
        displayTemp(apiJson);
    }
}
let locationSearch = document.getElementById('searchBar');
search();
locationSearch.addEventListener('keyup', function (e) {
    search(locationSearch.value);
})
function displayTemp(apiData) {
    let htmlTempTable = `
                    <section id="currentTemp" class="text-center text-white m-3"> 
                        <h1>${apiData.location.name}</h1>
                        <p class="display-1 fw-bolder">${apiData.current.temp_c}°C</p>
                    </section>
                    <div class="card-group rounded-3">
                        <div class="card  bg-dark text-light bg-gradient">
                            <div class="card-header">
                                <div class="d-flex justify-content-between ">
                                    <p class="mb-0">Today</p>
                                    <p class="mb-0">${apiData.forecast.forecastday[0].date}</p>
                                </div>
                            </div>

                            <div class="card-body">
                                <h3>${apiData.location.name}</h3>
                                <p class="display-1 fw-bolder">${apiData.forecast.forecastday[0].day.maxtemp_c}°C</p>
                                <p class="display-4 fw-normal">${apiData.forecast.forecastday[0].day.mintemp_c}°C</p>
                                <img src="${apiData.forecast.forecastday[0].day.condition.icon}" alt="weather Icon">
                                <p class="text-info">${apiData.forecast.forecastday[0].day.condition.text}</p>
                            </div>
                        </div>
                        <div class="card  bg-black text-light bg-gradient">
                            <div class="card-header">
                                <div class="text-center">
                                    <p class="mb-0">${apiData.forecast.forecastday[1].date}</p>
                                </div>
                            </div>

                            <div class="card-body text-center">
                                <img src="${apiData.forecast.forecastday[1].day.condition.icon}" alt="weather Icon">
                                <p class="display-1 fw-bolder">${apiData.forecast.forecastday[1].day.maxtemp_c}°C</p>
                                <p class="display-4 fw-normal">${apiData.forecast.forecastday[1].day.mintemp_c}°C</p>
                                <p class="text-info">${apiData.forecast.forecastday[1].day.condition.text}</p>
                            </div>
                        </div>
                        <div class="card  bg-dark text-light bg-gradient">
                            <div class="card-header">
                                <div class="text-center">
                                    <p class="mb-0">${apiData.forecast.forecastday[2].date}</p>
                                </div>
                            </div>

                            <div class="card-body text-center">
                                <img src="${apiData.forecast.forecastday[2].day.condition.icon}" alt="weather Icon">
                                <p class="display-1 fw-bolder">${apiData.forecast.forecastday[2].day.maxtemp_c}°C</p>
                                <p class="display-4 fw-normal">${apiData.forecast.forecastday[2].day.mintemp_c}°C</p>
                                <p class="text-info">${apiData.forecast.forecastday[2].day.condition.text}</p>
                            </div>
                        </div>
                    </div>`;
    document.getElementById("tempbox").innerHTML = htmlTempTable;
}
