import { useEffect, useState } from "react"
import style from './Home.module.css'
import classNames from "classnames"

function Home() {

    const [tarefas, setTarefas] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/tarefas', {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then((data) => data.json())
        .then((data) => setTarefas(data))
        .catch((err) => console.log("Erro ao pegar tarefas: " + err))
    })

    function handleOnChange(e) {

        let tarefa = tarefas.find((trf) => trf.id === e.target.id)

        tarefa.concluida = !tarefa.concluida

        fetch(`http://localhost:5000/tarefas/${e.target.id}`, {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tarefa)
        })
        .then((data) => data.json())
        .catch((err) => console.log("Erro ao pegar tarefas: " + err))
    }


    return (
        <div className={style.principal}>
            <h1>Lista de tarefas</h1>

            {tarefas.length>0 && tarefas.map((tarefa) => {
                return (
                    <div key={tarefa.id} className={classNames(style.tarefa, {[style.tarefaConcluida]: tarefa.concluida, [style.tarefaNaoConcluida]: !tarefa.concluida})}>
                        <p><strong>{tarefa.titulo}</strong></p>
                        <form>
                            <label>Status de {tarefa.titulo}: </label>
                            <input type="checkbox" name="concluida" id={tarefa.id} onClick={handleOnChange} defaultChecked={tarefa.concluida}/>
                        </form>
                    </div>
                )
            })}

        </div>
    )
}

export default Home