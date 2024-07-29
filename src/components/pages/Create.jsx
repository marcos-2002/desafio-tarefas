import { useState } from "react"
import style from './Create.module.css'

function Create(){

    const [tarefa, setTarefa] = useState({['concluida']: false})

    function submit(e){
        e.preventDefault()

        fetch('http://localhost:5000/tarefas', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tarefa)
        })
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch((err)=> console.log('Erro --- ' + err))
    }

    function handleOnChage(e){
        setTarefa({...tarefa, [e.target.name]: e.target.value})
        console.log(tarefa)
    }

    return(
        <div className={style.principal}>
            <h1>Criar Tarefa</h1>
            <form onSubmit={submit}>
                <label>Informe o título da Tarefa: </label>
                <input type="text" name="titulo" onChange={handleOnChage}/>
                <button>Criar tarefa</button>
            </form>
        </div>
    )
}

export default Create