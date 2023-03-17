import { useState, createContext, ReactNode } from 'react';

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

function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;