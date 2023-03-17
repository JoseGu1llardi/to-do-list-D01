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
    tasks: TaskType[];
    isChecked: boolean;
    changeTaskStatus: (id: number, status: boolean) => Promise<void>
}

export const TaskContext = createContext({} as TaskConstextData);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [isChecked, setIsChecked] = useState(Boolean);


    useEffect(() => {
        api.get("/tasks")
            .then(({ data }) => setTasks(data))
    }, [tasks]);

    async function changeTaskStatus(id: number, status: boolean) {
        const response = await api.patch(`/tasks/${id}`, {
            status: !status
        });

        return response.data;
    }

    return (
        <TaskContext.Provider value={{ tasks, changeTaskStatus, isChecked }}>
            {children}
        </TaskContext.Provider>
    )
}