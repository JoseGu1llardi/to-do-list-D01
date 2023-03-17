import { useState, useEffect, createContext, ReactNode } from 'react';

import api from '../services/api';

export interface TaskType {
    id: number;
    content: string;
    status: boolean;
}

interface TaskProviderProps {
    children: ReactNode;
}

interface TaskConstextData {
    tasks: TaskType[]
}

export const TaskContext = createContext({} as TaskConstextData);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        api.get("/tasks")
            .then(({ data }) => setTasks(data))
    }, []);

    function handleToggleTaskStatus(id: number) {
        const taskUpdate = [...tasks];
        const taskIndex = tasks.findIndex(task => task.id === id);
        taskUpdate[taskIndex].status = !taskUpdate[taskIndex].status;

        setTasks(taskUpdate);
    }

    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    )
}