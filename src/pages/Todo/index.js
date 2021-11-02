import React from 'react'
import './style.scss'

const Todo = () => {
  const data = [ 
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
    {  
      id: 4,  
      title: "Deploy ke server",  
      completed: false,  
    },  
  ]
  return (
    <div className="p-todo">
      <h4>To Do App</h4>
      <hr/>
      <div className="p-todo__list">
        {
          data.map((dt) => (            
              <p 
                className="p-todo__list-item" 
                key={dt.id}
                style={dt.completed? {textDecoration: 'line-through'}:{}}
              >
                {dt.title}
              </p>
          ))
        }
      </div>
    </div>
  )
}

export default Todo
