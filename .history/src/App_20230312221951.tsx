import { TaskProvider } from './contexts/TaskContext';

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { TasksList } from "./components/TasksList";

import styles from './App.module.css';
import "./global.css";

function App() {
  return (
    <TaskProvider>
      <Header />

      <div className={styles.newTaskContainer}>
        <Input />
        <Button />
      </div>

      <div className={styles.tasksContainer}>
        <TasksList />
      </div>
    </TaskProvider>
  )
}

export default App
