import React, { useState } from 'react'
import './style.scss'

const Todo = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {  
      id: 2,  
      title: "Unit Testing",  
      completed: false,
    },  
    {  
      id: 3,  
      title: "Setup Development Environment",
      completed: true,
    }, 
  ])
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    completed: false,
  })
  const handleCheck = (id) => {        
    setTodoList(
      todoList.map(dt => dt.id === id? { ...dt, completed: !dt.completed }: dt)
    )      
  }

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { id } = formData
    let find = todoList.find((dt) => dt.id === id)        
    if(find) {
      setTodoList(
        todoList.map(dt => dt.id === id? formData : dt)
      )      
    } else {
      let newData = {
        ...formData,
        id: Math.floor(Math.random() * 100) + 1,
      };
      setTodoList([...todoList, newData])      
    }
    setFormData({
      id: 0,
      title: "",
      completed: false,
    })    
  };

  const handleDelete = (id) => {    
    setTodoList(todoList.filter((data) => data.id !== id))    
  }
  const handleEdit = (dt) => {
    setFormData({
      id: dt.id,
      title: dt.title,
      completed: dt.completed,
    })    
  }
  return (
    <div className="p-todo">
      <div className="p-todo__title">
        <h2 className="text-gradient">todos</h2>      
      </div>
      <hr/>        
      <div className="p-todo__content container mt-5">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Add Your To Do" 
              id="title"
              name="title"
              value={formData.title}                
              onChange={(e) => changeValue(e)}
            />
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
          </div>
        </form>
        <div className="p-todo__list mt-5">
          {
            todoList.map((dt) => (            
              <div className="p-todo__list-item" key={dt.id}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" checked={dt.completed} onChange={() => handleCheck(dt.id)} />
                  <label className={`form-check-label ${dt.completed? 'completed':''} `} htmlFor="flexCheckDefault">
                    {dt.title}
                  </label>
                </div>
                <div className="p-todo__list-item-action">
                  <span onClick={() => handleEdit(dt)}>Edit</span>
                  <span onClick={() => handleDelete(dt.id)}>Delete</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Todo