/**
 * Script principal da aplicação de clima
 */

// Tema
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('themeBtn');
    const isLightMode = document.body.classList.contains('light-mode');
    btn.textContent = isLightMode ? '🌙' : '☀️';
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Restaurar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('themeBtn').textContent = '🌙';
    } else {
        document.getElementById('themeBtn').textContent = '☀️';
    }

    // Permitir Enter para buscar
    const cityInput = document.getElementById('cityInput');
    cityInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchWeather();
        }
    });

    // Buscar São Paulo ao carregar
    searchWeather('São Paulo');
});


/**
 * Retorna um ícone emoji simples baseado no código de clima
 */
function getWeatherIcon(code) {
    if (code === 0) return '☀️';
    if (code === 1 || code === 2) return '⛅';
    if (code === 3) return '☁️';
    if (code === 45 || code === 48) return '🌫️';
    if (code === 51 || code === 53 || code === 55) return '🌧️';
    if (code === 61 || code === 63 || code === 65) return '🌧️';
    if (code === 71 || code === 73 || code === 75 || code === 77) return '❄️';
    if (code === 80 || code === 81 || code === 82) return '⛈️';
    if (code === 85 || code === 86) return '❄️';
    if (code === 95 || code === 96 || code === 99) return '⛈️';
    return '🌤️';
}



/**
 * Busca e exibe o clima da cidade
 */
async function searchWeather(cityName = null) {
    const cityInput = document.getElementById('cityInput');
    const errorDiv = document.getElementById('errorMessage');
    const loadingDiv = document.getElementById('loadingMessage');
    const resultsDiv = document.getElementById('weatherResults');

    // Limpa mensagens anteriores
    errorDiv.innerHTML = '';
    resultsDiv.innerHTML = '';

    // Usa o valor do input se cityName não for fornecido
    if (!cityName) {
        cityName = cityInput.value.trim();
    }

    // Validação
    if (!cityName) {
        errorDiv.innerHTML = '⚠️ Digite o nome de uma cidade';
        return;
    }

    // Mostra carregamento
    loadingDiv.style.display = 'block';

    try {
        const weatherData = await getWeatherByCity(cityName);
        displayWeather(weatherData, resultsDiv);
        cityInput.value = '';
    } catch (error) {
        errorDiv.innerHTML = `<div class="error">❌ ${error.message}</div>`;
    } finally {
        loadingDiv.style.display = 'none';
    }
}

/**
 * Exibe os dados de clima na página
 * @param {Object} weatherData - Dados do clima
 * @param {HTMLElement} container - Container para exibir
 */
function displayWeather(weatherData, container) {
    const { city, temperature, description, weatherCode, daily, humidity, precipitation, windSpeed } = weatherData;
    const icon = getWeatherIcon(weatherCode);

    let dailyHtml = '';
    if (daily && daily.time) {
        const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        const today = new Date();
        const todayDate = today.toISOString().split('T')[0];

        for (let i = 0; i < Math.min(7, daily.time.length); i++) {
            const dateStr = daily.time[i];
            const date = new Date(dateStr);
            const dayName = days[date.getDay()];
            const maxTemp = daily.temperature_2m_max[i];
            const code = daily.weather_code[i];
            const dayIcon = getWeatherIcon(code);
            
            const isToday = dateStr === todayDate ? 'today' : '';

            dailyHtml += `
                <div class="day-circle ${isToday}">
                    <div class="day-name">${dayName}</div>
                    <div class="day-icon">${dayIcon}</div>
                    <div class="day-temp">${maxTemp.toFixed(0)}°</div>
                </div>
            `;
        }
    }

    // Formatar precipitação
    const precipText = precipitation ? `${precipitation.toFixed(1)}mm` : '0mm';

    container.innerHTML = `
        <div class="weather-card">
            <div class="city-name">${city}</div>
            <div class="temperature-section">
                <div class="temperature">${temperature.toFixed(0)}°</div>
                <div class="weather-desc">${description}</div>
            </div>
            <div class="weather-icon-large">${icon}</div>
            
            <div class="weather-details">
                <div class="detail-item">
                    <div class="detail-label">💧 Umidade</div>
                    <div class="detail-value">${humidity || 'N/A'}%</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">💨 Vento</div>
                    <div class="detail-value">${windSpeed ? windSpeed.toFixed(1) : 'N/A'} km/h</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">🌧️ Chuva</div>
                    <div class="detail-value">${precipText}</div>
                </div>
            </div>
        </div>

        <div class="forecast-section">
            <div class="forecast-scroll">
                ${dailyHtml}
            </div>
        </div>
    `;
}

