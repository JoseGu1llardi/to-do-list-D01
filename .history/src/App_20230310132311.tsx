import { Header } from "./components/Header"

import styles from './App.module.css';

import "./global.css"
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>
    </>
  )
}

export default App
