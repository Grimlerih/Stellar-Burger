import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { getData } from "../utils/Api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients data={ingredients} />
        <BurgerConstructor data={ingredients} />
      </main>
    </div>
  );
}

export default App;
