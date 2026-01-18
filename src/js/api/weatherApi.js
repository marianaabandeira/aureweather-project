/**
 * API para integração com Open-Meteo
 * Fornece funções para buscar dados de clima por nome de cidade
 */

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

/**
 * Busca as coordenadas (latitude/longitude) de uma cidade
 * @param {string} cityName - Nome da cidade
 * @returns {Promise<{latitude: number, longitude: number, name: string}>}
 */
async function getCoordinates(cityName) {
    try {
        const response = await fetch(
            `${GEOCODING_API}?name=${encodeURIComponent(cityName)}&language=pt&limit=1`
        );
        
        if (!response.ok) {
            throw new Error('Erro ao buscar coordenadas');
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error(`Cidade "${cityName}" não encontrada`);
        }

        const city = data.results[0];
        return {
            latitude: city.latitude,
            longitude: city.longitude,
            name: city.name,
            country: city.country
        };
    } catch (error) {
        throw new Error(`Erro ao buscar cidade: ${error.message}`);
    }
}

/**
 * Busca dados de clima para uma localização
 * @param {number} latitude 
 * @param {number} longitude 
 * @returns {Promise<Object>}
 */
async function getWeather(latitude, longitude) {
    try {
        const params = new URLSearchParams({
            latitude,
            longitude,
            current: 'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,precipitation,weather_code',
            timezone: 'America/Sao_Paulo'
        });

        const response = await fetch(`${WEATHER_API}?${params}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar dados climáticos');
        }

        const data = await response.json();
        return data.current;
    } catch (error) {
        throw new Error(`Erro ao buscar clima: ${error.message}`);
    }
}

/**
 * Busca informações completas de clima de uma cidade
 * @param {string} cityName - Nome da cidade
 * @returns {Promise<Object>}
 */
async function getWeatherByCity(cityName) {
    const coordinates = await getCoordinates(cityName);
    const weatherData = await getWeather(coordinates.latitude, coordinates.longitude);
    const forecastData = await getForecast(coordinates.latitude, coordinates.longitude);

    return {
        city: coordinates.name,
        country: coordinates.country,
        temperature: weatherData.temperature_2m,
        weatherCode: weatherData.weather_code,
        windSpeed: weatherData.wind_speed_10m,
        humidity: weatherData.relative_humidity_2m,
        precipitation: weatherData.precipitation,
        description: getWeatherDescription(weatherData.weather_code),
        hourly: forecastData.hourly,
        daily: forecastData.daily
    };
}

/**
 * Busca dados de previsão para uma localização
 * @param {number} latitude 
 * @param {number} longitude 
 * @returns {Promise<Object>}
 */
async function getForecast(latitude, longitude) {
    try {
        const params = new URLSearchParams({
            latitude,
            longitude,
            hourly: 'temperature_2m,weather_code',
            daily: 'weather_code,temperature_2m_max,temperature_2m_min',
            timezone: 'America/Sao_Paulo'
        });

        const response = await fetch(`${WEATHER_API}?${params}`);

        if (!response.ok) {
            throw new Error('Erro ao buscar previsão');
        }

        const data = await response.json();
        return {
            hourly: data.hourly,
            daily: data.daily
        };
    } catch (error) {
        throw new Error(`Erro ao buscar previsão: ${error.message}`);
    }
}

/**
 * Converte código de clima WMO em descrição legível
 * @param {number} code - Código WMO
 * @returns {string}
 */
function getWeatherDescription(code) {
    const descriptions = {
        0: 'Céu claro',
        1: 'Principalmente claro',
        2: 'Parcialmente nublado',
        3: 'Nublado',
        45: 'Névoa',
        48: 'Névoa com depósitos de gelo',
        51: 'Chuvisco leve',
        53: 'Chuvisco moderado',
        55: 'Chuvisco denso',
        61: 'Chuva fraca',
        63: 'Chuva moderada',
        65: 'Chuva forte',
        71: 'Neve fraca',
        73: 'Neve moderada',
        75: 'Neve forte',
        77: 'Grãos de neve',
        80: 'Pancadas de chuva fracas',
        81: 'Pancadas de chuva moderadas',
        82: 'Pancadas de chuva violentas',
        85: 'Pancadas de neve fraca',
        86: 'Pancadas de neve forte',
        95: 'Trovoada',
        96: 'Trovoada com granizo fraco',
        99: 'Trovoada com granizo forte'
    };

    return descriptions[code] || 'Clima desconhecido';
}
