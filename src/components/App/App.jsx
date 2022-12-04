import {useEffect, useState} from 'react'
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { getData } from "../utils/Api";
import {mockData} from '../utils/mockData'

function App() {

const [ingredients, setIngredients] = useState([])

useEffect(() => {
  getData().then((res)=>{setIngredients(res.data)})
},[])


  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.container}>
        <BurgerIngredients data={ingredients } />
        <BurgerConstructor data={ingredients } />
      </main>
    </div>
  );
}

export default App;