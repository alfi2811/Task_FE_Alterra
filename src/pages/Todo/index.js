import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  
  checkItemAction,
  deleteItemAction,  
  submitItemAction,
} from "../../store/todoConfig";
import "./style.scss";

const Todo = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.todoConfig);
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    completed: false,
  });  
  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitItemAction({ items, formData }));
    setFormData({
      id: 0,
      title: "",
      completed: false,
    });
  };  
  const handleEdit = (dt) => {
    setFormData({
      id: dt.id,
      title: dt.title,
      completed: dt.completed,
    });
  };
  return (
    <div className="p-todo">
      <div className="p-todo__title">
        <h2 className="text-gradient">todos</h2>
      </div>
      <hr />
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
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="p-todo__list mt-5">
          {items?.map((dt) => (
            <div className="p-todo__list-item" key={dt.id}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={dt.completed}
                  onChange={() => dispatch(checkItemAction({items, id: dt.id}))}
                />
                <label
                  className={`form-check-label ${
                    dt.completed ? "completed" : ""
                  } `}
                  htmlFor="flexCheckDefault"
                >
                  {dt.title}
                </label>
              </div>
              <div className="p-todo__list-item-action">
                <span onClick={() => handleEdit(dt)}>Edit</span>
                <span onClick={() => dispatch(deleteItemAction({ items, id: dt.id }))}>Delete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
