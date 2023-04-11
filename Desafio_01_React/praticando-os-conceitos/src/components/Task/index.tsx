import { ITask } from "../../App";
import styles from "./task.module.css";
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from "react-icons/bs";

//Aqui é a parte que sera o conteúdo das Task
//O conteudo do app que será modificado passa por aqui 

interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
    return (
        <div className={styles.task}>
            <button 
            className={styles.checkContainer} 
            onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}    
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}