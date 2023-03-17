import { useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

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
    tasks: TaskType[];
    setTasks: Dispatch<SetStateAction<TaskType[]>>
}

export const TaskContext = createContext({} as TaskConstextData);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        api.get("/tasks")
            .then(({ data }) => setTasks(data))
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}