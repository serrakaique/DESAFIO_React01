import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

//Será feito uma interface já que estou usando TypeScript
export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}
//Tasks o primeiro tasks pode ser qualquer nome, o que esta dentro dos conchetes é o tesks que será 
//exportado da interface da ITask para o Tasks

//o conteúdo que será mostrado você coloca dentro da useState<ITask[]>

//A função addTask vai pegar o setTasks, armazenar as antigas (...tasks) e armazenar as nova no 
//conchetes, o taskTile é um atributo novo já que será title sempre novos

//addTask vai ser mandado para o header

function App() {

  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "duygcyttyd",
      title: "ghffvgv",
      isCompleted: false,
    }
  ]);

  function addTask(taskTitle: string){
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTaskById} 
      onComplete={toggleTaskCompletedById}
      />
    </>  
      );
}

export default App
