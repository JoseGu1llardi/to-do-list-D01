import { Header } from "./components/Header"

import styles from './App.module.css';

import "./global.css"
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
      </div>
    </>
  )
}

export default App
