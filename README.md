# 🌤️ AuréWeather

Um aplicativo web simples e elegante para consultar o clima de qualquer cidade usando a API Open-Meteo.

## 📋 Características

- ✨ Interface moderna e responsiva
- 🌍 Busca de clima por nome de cidade
- 🚀 Sem dependências externas no frontend
- 🧪 Testes unitários com Jest
- 📱 Design mobile-first
- ⚡ Carregamento rápido

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: Open-Meteo (API gratuita de clima)
- **Testes**: Jest
- **Formatação**: Prettier

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

### Cidades Padrão

Clique nos botões de atalho para cidades populares:
- São Paulo
- Recife
- Rio de Janeiro
- Brasília

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

- [ ] Previsão de 7 dias
- [ ] Salvar cidades favoritas (localStorage)
- [ ] Dark mode
- [ ] Localização automática do usuário
- [ ] Notificações de alerta climático
- [ ] Integração com Service Workers (PWA)

## 📝 Licença

MIT

## 👤 Autor

[Seu Nome Aqui]

---

**Dica**: Esta estrutura é escalável! Você pode adicionar novos módulos em `src/js/` conforme a aplicação cresce.
