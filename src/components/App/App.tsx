import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Api } from "./api";

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients data={Api} />
        <BurgerConstructor data={Api} />
      </main>
    </div>
  );
}

export default App;
