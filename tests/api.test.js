/**
 * Testes unitários para weatherApi.js
 * Execute com: npm test
 */

describe('getWeatherDescription', () => {
    test('deve retornar descrição para código 0 (céu claro)', () => {
        expect(getWeatherDescription(0)).toBe('Céu claro');
    });

    test('deve retornar descrição para código 61 (chuva fraca)', () => {
        expect(getWeatherDescription(61)).toBe('Chuva fraca');
    });

    test('deve retornar descrição para código desconhecido', () => {
        expect(getWeatherDescription(999)).toBe('Clima desconhecido');
    });
});

describe('getCoordinates', () => {
    test('deve retornar coordenadas para "São Paulo"', async () => {
        const result = await getCoordinates('São Paulo');
        
        expect(result).toHaveProperty('latitude');
        expect(result).toHaveProperty('longitude');
        expect(result).toHaveProperty('name');
        expect(result.name).toBe('São Paulo');
    });

    test('deve lançar erro para cidade inexistente', async () => {
        await expect(getCoordinates('CidadeInexistente12345'))
            .rejects
            .toThrow();
    });
});

describe('getWeatherByCity', () => {
    test('deve retornar objeto com dados de clima', async () => {
        const result = await getWeatherByCity('Recife');
        
        expect(result).toHaveProperty('city');
        expect(result).toHaveProperty('temperature');
        expect(result).toHaveProperty('description');
        expect(result).toHaveProperty('windSpeed');
    });
});
