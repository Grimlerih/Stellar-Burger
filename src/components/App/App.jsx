import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { getData } from "../utils/Api";
import { BurgerContext } from "../services/burgerContext.js";

function App() {
  const [dataIngredients, setDataIngredients] = useState([]);

  useEffect(() => {
    getData()
      .then((res) => {
        setDataIngredients([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.App}>
      <AppHeader />
      {dataIngredients.length > 0 && (
        <main className={styles.container}>
          <BurgerContext.Provider value={dataIngredients}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </main>
      )}
    </div>
  );
}

export default App;
