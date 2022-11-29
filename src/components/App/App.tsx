import "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { Api } from "./api";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <BurgerIngredients data={Api} />
      </main>
    </div>
  );
}

export default App;
