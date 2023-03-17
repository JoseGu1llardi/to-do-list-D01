import { Header } from "./components/Header"

import styles from './App.module.css';

import "./global.css"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Tasks } from "./components/TasksList";

function App() {
  return (
    <>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>

      <div className={styles.tasksContainer}>
        <Tasks />
      </div>
    </>
  )
}

export default App
