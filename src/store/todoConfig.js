import { createSlice } from '@reduxjs/toolkit';

// export const deleteItemAction = createAsyncThunk(
//   'todoConfig/deleteItemAction',
//   async ({items, id}, thunkAPI) => {
//     console.log(items, id);
//   }
// )

export const todoConfigSlice = createSlice({
  name: 'todoConfig',
  initialState: {    
    items: [
      {
        id: 1,
        title: "Membuat Styling",
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
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.items= [...state.items, action.payload]
    },
    changeItem: (state, action) => {
      state.items= action.payload
    },
  },  
})

export const {addItem, changeItem}= todoConfigSlice.actions;


export const addItemAction = ({items, formData}) => {
  return dispatch => {    
    let newItem = [...items, formData]
    dispatch(changeItem(newItem))
  }
}

export const deleteItemAction = ({items, id}) => {
  return dispatch => {
    console.log(items, id)
    let newItem = items.filter((data) => data.id !== id)
    dispatch(changeItem(newItem))
  }
}

export const checkItemAction = ({items, id}) => {
  return dispatch => {
    console.log(items, id)
    let newItem = items.map(dt => dt.id === id? { ...dt, completed: !dt.completed }: dt)
    dispatch(changeItem(newItem))
  }
}

export const editItemAction = ({items, formData}) => {
  return dispatch => {
    let { id } = formData
    console.log(items, id)
    let newItem = items.map(dt => dt.id === id? formData : dt)
    dispatch(changeItem(newItem))
  }
}

export const submitItemAction = ({items, formData}) => {
  return dispatch => {
    let { id } = formData
    let find = items.find((dt) => dt.id === id)        
    if(find) {      
      dispatch(editItemAction({items, formData}))
    } else {      
      let newData = {
        ...formData,
        id: Math.floor(Math.random() * 100) + 1,
      };
      console.log("masuk")
      dispatch(addItemAction({items, newData}))        
    }
  }
}