import React, { useContext } from 'react'
import { GlobalContext } from '../store/AppContext'

const About = () => {
    const { tasks, setTasks} = useContext(GlobalContext);
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12">
                <h1>About</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-">
                <h4>Listado de Tareas</h4>
                <button className='btn btn-info' onClick={() => {
                    setTasks((prevState) => {
                        return [...prevState, `Task ${prevState.length + 1}`]
                    })
                }}>Add Task</button>
                <ul className="list-group">
                    {
                        tasks.length > 0 &&
                        tasks.map((task, i) => {
                            return (
                                <li key={i} className="list-group-item list-group-item-action">{task}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About