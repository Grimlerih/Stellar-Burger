import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { mockData  } from "../utils/mockData";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients data={mockData } />
        <BurgerConstructor data={mockData } />
      </main>
    </div>
  );
}

export default App;