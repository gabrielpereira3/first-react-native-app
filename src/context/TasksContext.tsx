import React from 'react';

interface IProps {
  children: React.ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

export interface ITasksContext {
  tasks: ITask[];
  addTask(task: ITask): void;
}

export const TasksContext = React.createContext<ITasksContext>(
  {} as ITasksContext,
);

export const TasksProvider: React.FunctionComponent<IProps> = ({children}) => {
  const addTask = (task: ITask) => {
    console.log('Add task action');
  };

  const tasks = [{id: '1', title: 'Task01'}];

  return (
    <TasksContext.Provider value={{tasks, addTask}}>
      {children}
    </TasksContext.Provider>
  );
};
