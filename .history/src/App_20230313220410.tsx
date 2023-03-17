import { TaskProvider } from './contexts/TaskContext';

import { Header } from "./components/Header";
import { NewTaskForm } from './components/NewTaskForm';
import { TasksList } from "./components/TasksList";

import styles from './App.module.css';
import "./global.css";

function App() {
  return (
    <TaskProvider>
      <Header />

      <NewTaskForm />

      <div className={styles.tasksContainer}>
        <TasksList />
      </div>
    </TaskProvider>
  )
}

export default App
