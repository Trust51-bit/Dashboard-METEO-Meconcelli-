// Gestisce le chiamate a Open-Meteo e riempie le pagine interne.
// meteo.html usa #weather-list, previsioni.html usa #forecast-table.
const CITIES = [
    { name: "Firenze", latitude: 43.7696, longitude: 11.2558 },
    { name: "Roma", latitude: 41.9028, longitude: 12.4964 },
    { name: "Milano", latitude: 45.4642, longitude: 9.1900 },
    { name: "Parigi", latitude: 48.8566, longitude: 2.3522 },
    { name: "Tokyo", latitude: 35.6762, longitude: 139.6503 }
];
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#weather-list")) {
        loadCurrentWeather();
    }
    if (document.querySelector("#forecast-table")) {
        loadForecast(CITIES[0]);
    }
});
function buildWeatherUrl(city) {
    const params = new URLSearchParams({
        latitude: city.latitude,
        longitude: city.longitude,
        current: "temperature_2m,wind_speed_10m,weather_code",
        daily: "temperature_2m_max,temperature_2m_min",
        timezone: "auto"
    });
    return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}
async function getJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore HTTP: ${response.status}`);
    }
    return await response.json();
}
function weatherCodeToText(code) {
    const codes = {
        0: "Cielo sereno",
        1: "Prevalentemente sereno",
        2: "Parzialmente nuvoloso",
        3: "Coperto",
        45: "Nebbia",
        48: "Nebbia con brina",
        51: "Pioviggine leggera",
        53: "Pioviggine moderata",
        55: "Pioviggine intensa",

        61: "Pioggia leggera",
        63: "Pioggia moderata",
        65: "Pioggia intensa",
        71: "Neve leggera",
        73: "Neve moderata",
        75: "Neve intensa",
        80: "Rovesci leggeri",
        81: "Rovesci moderati",
        82: "Rovesci intensi",
        95: "Temporale"
    };
    return codes[code] || `Codice meteo ${code}`;
}
function showAlert(container, message, type = "warning") {
    container.innerHTML = `
<div class="alert alert-${type}" role="alert">
${message}
</div>
`;
}
async function loadCurrentWeather() {
    const container = document.querySelector("#weather-list");
    container.innerHTML = `
<div class="col-12">
<div class="alert alert-info">Sto recuperando le ultime misurazioni...</div>
</div>
`;
    try {
        const results = await Promise.all(
            CITIES.map(async city => {
                const data = await getJSON(buildWeatherUrl(city));
                return { city, data };
            })
        );
        container.innerHTML = results.map(({ city, data }) => {
            const current = data.current;
            return `
<div class="col-md-4">
<article class="card h-100 shadow-sm">
<div class="card-body">
<h2 class="h4 card-title">${city.name}</h2>
<p class="display-6 mb-2">${current.temperature_2m} &deg;C</p>
<p class="mb-1"><strong>Aria:</strong> ${current.wind_speed_10m} km/h</p>
<p class="mb-1"><strong>Cielo:</strong> ${weatherCodeToText(current.weather_code)}</p>
<p class="small text-body-secondary mb-0">Rilevazione: ${current.time}</p>
</div>
</article>
</div>
`;
        }).join("");
    } catch (error) {
        container.innerHTML = `
<div class="col-12">
<div class="alert alert-danger" role="alert">
Non riesco a leggere le informazioni ora. Dettaglio: ${error.message}
</div>
</div>
`;
    }
}
async function loadForecast(city) {
    const container = document.querySelector("#forecast-table");
    showAlert(container, `Preparo la tabella per ${city.name}...`, "info");
    try {
        const data = await getJSON(buildWeatherUrl(city));
        const daily = data.daily;
        const rows = daily.time.map((day, index) => `
<tr>
<td>${day}</td>
<td>${daily.temperature_2m_min[index]} &deg;C</td>
<td>${daily.temperature_2m_max[index]} &deg;C</td>
</tr>

`).join("");
        container.innerHTML = `
<h2 class="h4 mb-3">Prossimi giorni a ${city.name}</h2>
<div class="table-responsive">
<table class="table table-striped table-bordered align-middle">
<thead class="table-dark">
<tr>
<th>Data</th>
<th>Valore piu basso</th>
<th>Picco previsto</th>
</tr>
</thead>
<tbody>${rows}</tbody>
</table>
</div>
`;
    } catch (error) {
        showAlert(container, `La tabella non e disponibile in questo momento. Dettaglio: ${error.message}`, "danger");
    }
}
