import TodoLogo from "../../assets/Logo.png";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

// Quando for mandado uma função será void 

//foi criado o onSubmit com a função handleSubmit nova, o event.preventDefault é padrão
//vai ser criado um novo array title, que vai começar vazio e será adicionado na função onAddTask

//O value vai ser title (ou seja novo), e o onChangeTitle vai ser quando for alterado o valor do HTML

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    return (
        <header className={styles.header}>
            <img src={TodoLogo} />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa"
                onChange={onChangeTitle} 
                value={title}
                />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>
            </form>
        </header>
    )
}