import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { getData } from "../utils/Api";
import { BurgerContext } from "../services/burgerContext.js";

function App() {
  const [dataIngredients, setDataIngredients] = useState({
    ingredients: [],
  });

  useEffect(() => {
    getData()
      .then((res) => {
        setDataIngredients({ ...dataIngredients, ingredients: res.data });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      {dataIngredients.ingredients && (
        <main className={styles.container}>
          <BurgerContext.Provider value={dataIngredients.ingredients}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </main>
      )}
    </div>
  );
}

export default App;
