import React, {Component} from 'react'
import './style.scss'

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      data: [ 
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
      ],
      addItem: {
        id: 0,
        title: "",
        completed: false,
      }
    };
  }
  handleCheck = (id) => {    
    this.setState(prevState => ({
      data: prevState.data.map(
        dt => dt.id === id? { ...dt, completed: !dt.completed }: dt
      )    
    }))
  }

  changeValue = (e) => {    
    this.setState({
      addItem: { ...this.state.addItem, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      ...this.state.addItem,
      id: Math.floor(Math.random() * 100) + 1,
    };
    this.setState({
      data: [...this.state.data, newData],
      addItem: {
        id: 0,
        title: "",
        completed: false,
      },
    });
  };

  render() {
    return (
      <div className="p-todo">
        <h4>To Do App</h4>
        <hr/>        
        <div className="p-todo__content container">
          <form onSubmit={this.handleSubmit}>
            <div class="input-group mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="Add Your To Do" 
                id="title"
                name="title"
                value={this.state.addItem.title}                
                onChange={(e) => this.changeValue(e)}
              />
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
            </div>
          </form>
          <div className="p-todo__list">
            {
              this.state.data.map((dt) => (            
                <div className="p-todo__list-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={dt.completed} onChange={() => this.handleCheck(dt.id)} />
                    <label class={`form-check-label ${dt.completed? 'completed':''} `} for="flexCheckDefault">
                      {dt.title}
                    </label>
                  </div>
                  <span>Delete</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Todo
