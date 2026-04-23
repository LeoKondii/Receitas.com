import { RecipeProvider } from "./contexts/RecipeContext";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import RecipeList from "./components/RecipeList";
import RecipeModal from "./components/RecipeModal";
import "./App.css";

export default function App() {
  return (
    <RecipeProvider>
      <div className="app">
        <Header />
        <main className="main">
          <SearchForm />
          <RecipeList />
        </main>
        <RecipeModal />
        <footer className="footer">
          <p>Receitas por <a href="https://www.themealdb.com" target="_blank" rel="noopener noreferrer">TheMealDB</a> · Receitas.com</p>
        </footer>
      </div>
    </RecipeProvider>
  );
}