import { uuid } from 'uuidv4';

/**
 * Challenge #1: Create custom Type
 */
export type TaskItem = {
  id: string;
  task: string;
  completed?: boolean;
};

/**
 * Challenge #2: Create an array with custom type
 *
 */
export let tasks: TaskItem[] = [
  { id: uuid(), task: 'Buy Groceries' },
  { id: uuid(), task: 'Watch Netflix' },
  { id: uuid(), task: 'Read Books' },
];

/**
 * Challenge #3: Implement add tasks
 */
export const addItem = (task: string): void => {
  const newTask: TaskItem = {
    id: uuid(),
    task,
    completed: false,
  };
  tasks.push(newTask);
};

/**
 * Challenge #4: Implement complete tasks
 *
 *
 */
export const completeItem = (todoId: string): TaskItem[] => {
  return tasks.map(todo => {
    if (todo.id === todoId) {
      todo.completed = true;
    }
    return todo;
  });
};

/**
 * Challenge #5: Implement clearItems tasks
 *
 */
export const clearItems = (): void => {
  tasks = [];
};
