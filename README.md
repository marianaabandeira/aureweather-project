# 🌤️ AuréWeather

Um aplicativo web simples e elegante para consultar o clima de qualquer cidade usando a API Open-Meteo.

## 📋 Características

- ✨ Interface moderna, limpa e responsiva
- 🌍 Busca de clima por nome da cidade
- 🚀 Frontend em JavaScript puro (sem frameworks pesados)
- 🧪 Testes unitários com Jest para garantir qualidade
- 📱 Design mobile-first, pensado para celular
- ⚡ Carregamento rápido e código leve
- 🌙 Dark mode e Light mode
- 📆 Previsão da semana integrada
- 🛡️ Tratamento de erros e validações de entrada

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: Open-Meteo (API gratuita de clima)
- **Testes**: Jest para testes unitários
- **Formatação**: Prettier para padronização de código

## 📁 Estrutura do Projeto

```
aplicativo-clima/
├── public/              # Arquivos HTML e CSS
│   └── index.html      # Página principal
├── src/js/
│   ├── api/            # Integração com Open-Meteo
│   │   └── weatherApi.js
│   └── main.js         # Lógica principal
├── tests/              # Testes unitários
│   └── api.test.js
├── package.json        # Dependências
└── README.md
```

## 🚀 Como Usar

### 1. Instalar dependências

```bash
npm install
```

### 2. Rodando a aplicação

#### Opção 1: Com Node.js (Recomendado)

```bash
node server.js
```

Acesse: `http://localhost:8000`

#### Opção 2: Abrir direto no navegador

Simplesmente abra o arquivo `public/index.html` no seu navegador.

### 3. Rodando os testes

```bash
npm test
```

Para modo watch (testes reexecutam ao salvar):

```bash
npm run test:watch
```

## 📖 Funcionalidades

### Buscar por Cidade

1. Digite o nome da cidade no campo de entrada
2. Pressione Enter ou clique no botão "Buscar"
3. Veja a temperatura, descrição do clima e velocidade do vento
   

## 🔌 API Open-Meteo

A aplicação utiliza dois endpoints gratuitos:

1. **Geocoding API**: Converte nome de cidade em coordenadas
   ```
   https://geocoding-api.open-meteo.com/v1/search
   ```

2. **Forecast API**: Obtém dados de clima
   ```
   https://api.open-meteo.com/v1/forecast
   ```

## 🎯 Próximas Funcionalidades

- [ ] Histórico de buscas recentes
- [ ] Comparar clima entre duas cidades
- [ ] Mostrar sensação térmica
- [ ] Localização automática do usuário
- [ ] Compartilhar previsão nas redes

## 📝 Licença

MIT

## 👩‍💻 Desenvolvedora

Mariana Badeira Santos
  
  **Github: [https://github.com/marianaabandeira)**
  
  **Linkedin: [https://www.linkedin.com/in/marianaabandeira/)**

---
📌 Projeto desenvolvido como parte do portfólio técnico, focado em consumo de API de clima, organização de código, testes unitários e construção de uma interface simples, moderna e funcional.