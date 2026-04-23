# Receitas.com

Buscador de receitas desenvolvido como projeto final da disciplina de Programação Web Fullstack.

Acesse: https://receitas-q4pkx21nu-leokondiis-projects.vercel.app

---

## Sobre o projeto

Receitas.com é uma Single Page Application (SPA) — toda a aplicação roda em uma única página HTML, sem redirecionamentos ou recarregamentos. A navegação entre busca, resultados e detalhes acontece de forma instantânea, com o React atualizando apenas os componentes necessários na tela. Isso proporciona uma experiência fluida, sem as interrupções de uma aplicação web tradicional.

Os dados vêm da TheMealDB, uma API pública de receitas. O usuário digita um ingrediente ou nome de prato, e a aplicação consulta a API automaticamente, exibindo até 12 resultados em cards. Ao clicar em um card, um modal exibe os ingredientes completos, o modo de preparo e um link para o YouTube quando disponível.

---

## Tecnologias

- React 19 com Vite
- Context API com useReducer para estado global
- react-hook-form para o formulário de busca e validação
- TheMealDB API como fonte de dados
- CSS puro, sem frameworks de estilo

---

## Estrutura

```
src/
├── components/
│   ├── Header.jsx
│   ├── SearchForm.jsx
│   ├── RecipeList.jsx
│   ├── RecipeCard.jsx
│   ├── RecipeModal.jsx
│   ├── Loader.jsx
│   └── ErrorMessage.jsx
├── contexts/
│   ├── RecipeContext.jsx
│   ├── recipeReducer.js
│   └── recipeActions.js
├── services/
│   └── mealApi.js
├── App.jsx
└── main.jsx
```

---

## Estado global

Gerenciado com `useReducer` via Context API:

```js
{
  recipes: [],
  loading: false,
  error: "",
  selectedRecipe: null,
  searchTerm: ""
}
```

---

## Como rodar localmente

```bash
git clone https://github.com/LeoKondii/Receitas.com.git
cd Receitas.com
npm install
npm run dev
```

Acesse `http://localhost:5173`.

---

## API

TheMealDB — https://www.themealdb.com

```
GET https://www.themealdb.com/api/json/v1/1/search.php?s={termo}
```

---

## Autor

Leonardo Kondii — Programação Web Fullstack
