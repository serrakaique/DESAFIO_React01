import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

//Essa será a parte do head do tasks + o conteúdo do Tasks

//Como foi exportado o conteudo da ITask pela propriedade tasks, terá que ser definida como props
//no começo da function

//No taks.map ela busca o conteúdo

//Como a task será algo que ira mudar, precisa colocar ela dentro do components do map
//Como o conteúdo é so o "header" será que ser passado para o Task também pelo propriedade

//tasksQuantity vai ser a quantidade de lista
//completedTasks vai ser a quantidade de tarefa concluido
interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </header>

            <div className={styles.list}>
               {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete}
                onComplete={onComplete}
                />
               ))}

               {tasks.length <= 0 && (
                <section className={styles.empty}>
                    <TbClipboardText size={50} />
                    <div>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </section>
               )}
                
            </div>
        </section>  
    );
}