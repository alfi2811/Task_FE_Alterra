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
    let { id } = this.state.addItem
    let find = this.state.data.find((dt) => dt.id === id)        
    if(find) {
      this.setState(prevState => ({
        data: prevState.data.map(
          dt => dt.id === id? this.state.addItem : dt
        )    
      }))
    } else {
      let newData = {
        ...this.state.addItem,
        id: Math.floor(Math.random() * 100) + 1,
      };
      this.setState({
        data: [...this.state.data, newData],        
      });
    }
    this.setState({      
      addItem: {
        id: 0,
        title: "",
        completed: false,
      },
    });
  };

  handleDelete = (id) => {    
    this.setState({
      data: this.state.data.filter((data) => data.id !== id),
    });
  }
  handleEdit = (dt) => {
    this.setState({    
      addItem: {
        id: dt.id,
        title: dt.title,
        completed: dt.completed,
      },
    });
  }

  render() {
    return (
      <div className="p-todo">
        <div className="p-todo__title">
          <h2 className="text-gradient">todos</h2>      
        </div>
        <hr/>        
        <div className="p-todo__content container mt-5">
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
              <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
            </div>
          </form>
          <div className="p-todo__list mt-5">
            {
              this.state.data.map((dt) => (            
                <div className="p-todo__list-item">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" checked={dt.completed} onChange={() => this.handleCheck(dt.id)} />
                    <label class={`form-check-label ${dt.completed? 'completed':''} `} for="flexCheckDefault">
                      {dt.title}
                    </label>
                  </div>
                  <div className="p-todo__list-item-action">
                    <span onClick={() => this.handleEdit(dt)}>Edit</span>
                    <span onClick={() => this.handleDelete(dt.id)}>Delete</span>
                  </div>
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
