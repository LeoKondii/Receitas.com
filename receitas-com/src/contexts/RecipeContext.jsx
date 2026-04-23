import { createContext, useContext, useReducer, useCallback, useRef, useEffect, useMemo } from "react";
import { recipeReducer, initialState } from "./recipeReducer";

const RecipeContext = createContext(null);

const API_CONFIG = { // Configurações da API e debounce, pode alterar
  BASE_URL: "https://www.themealdb.com/api/json/v1/1",
  DEBOUNCE_MS: 400,
  RESULTS_LIMIT: 12,
};

export function RecipeProvider({ children }) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const debounceTimer = useRef(null);

    useEffect(() => {
        return () => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current);
        }
        };
    }, []);

    const searchRecipes = useCallback(async (term) => {
        dispatch({ type: "SET_SEARCH_TERM", payload: term });

        if (!term || term.trim().length < 2) {
        dispatch({ type: "CLEAR_RESULTS" });
        return;
        }

        if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(async () => {
            dispatch({ type: "SET_LOADING", payload: true });

            try {
                const response = await fetch(
                `${API_CONFIG.BASE_URL}/search.php?s=${encodeURIComponent(term.trim())}`
                );

                if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

                const data = await response.json();
                const meals = data.meals ? data.meals.slice(0, API_CONFIG.RESULTS_LIMIT) : [];
                dispatch({ type: "SET_RECIPES", payload: meals });
            } catch (error) {
                dispatch({ type: "SET_ERROR", payload: error.message });
            } finally {
                dispatch({ type: "SET_LOADING", payload: false }); // Resetar loading
            }
        }, API_CONFIG.DEBOUNCE_MS);
    }, []);

  const selectRecipe = useCallback((recipe) => {
    dispatch({ type: "SET_SELECTED_RECIPE", payload: recipe });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: "SET_SELECTED_RECIPE", payload: null });
  }, []);

  // Evitar recriação do value object
  const value = useMemo(
    () => ({ state, searchRecipes, selectRecipe, closeModal }),
    [state, searchRecipes, selectRecipe, closeModal]
  );

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipe() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipe deve ser usado dentro de RecipeProvider");
  }
  return context;
}