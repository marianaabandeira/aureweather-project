# 🌤️ AuréWeather

Aplicação web desenvolvida para consulta de **clima e previsão do tempo** de qualquer cidade, utilizando a **API Open-Meteo**.

O projeto foi construído com foco em **JavaScript puro (Vanilla JS)**, priorizando **performance**, **código limpo**, **responsividade** e **boa experiência do usuário**, sem o uso de frameworks pesados.

---

## ✨ Características

- Interface moderna, limpa e responsiva
- Busca de clima por nome da cidade
- Previsão do tempo para a semana
- Dark mode e Light mode
- Design **mobile-first**
- Código leve e carregamento rápido
- Tratamento de erros e validações de entrada
- Testes unitários para garantir qualidade

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **API:** Open-Meteo (API gratuita de clima)
- **Testes:** Jest
- **Formatação:** Prettier
- **Versionamento:** Git & GitHub

---

## 📁 Estrutura do Projeto

```
aplicativo-clima/
├── public/             # Arquivos HTML e CSS
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

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js
- NPM

---

### 1️⃣ Instalar dependências:
```bash
npm install
```

### 2️⃣ Executar a aplicação:
#### Opção 1 — Com Node.js (recomendado)

```bash
node server.js
```

Acesse: `http://localhost:8000`

#### Opção 2 — Diretamente no navegador
Abra o arquivo:
 `public/index.html`.

### 3️⃣ Executar os testes

```bash
npm test
```

Para modo watch (testes reexecutam ao salvar):

```bash
npm run test:watch
```


## 📖 Funcionalidades

### 🔍 Busca por cidade
- Digite o nome da cidade
- Pressione **Enter** ou clique em **Buscar**
- Visualize:
  - **Temperatura**
  - **Condições climáticas**
  - **Velocidade do vento**
  - **Previsão semanal**
   

## 🔌 API Open-Meteo

O projeto utiliza endpoints gratuitos da Open-Meteo:

1. **Geocoding API**: Converte nome de cidade em coordenadas
   ```
   https://geocoding-api.open-meteo.com/v1/search
   ```

2. **Forecast API**: Obtém dados de clima
   ```
   https://api.open-meteo.com/v1/forecast
   ```

## 🎯 Próximas Funcionalidades (Ideias)

- Histórico de buscas recentes
- Comparação de clima entre cidades
- Exibição de sensação térmica
- Localização automática do usuário
- Compartilhamento da previsão

---

## 📝 Licença

MIT

---

## 👩‍💻 Desenvolvedora

**Mariana Bandeira Santos**

- [GitHub](https://github.com/marianaabandeira)
- [LinkedIn](https://www.linkedin.com/in/marianaabandeira/)

---
📌 Projeto desenvolvido como parte do portfólio técnico, com foco em consumo de API, JavaScript puro, testes unitários e construção de uma interface simples, moderna e funcional.
