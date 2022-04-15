import React, { useState } from "react";
import classes from "./TodoList.module.css";
import { FaPlus, FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit]= useState(true)
  const [isEditItem, setIsEditItem]= useState(null)

  const addTodoItem = () => {
    if (!inputData) {
        alert("plzz fill data");
    }else if(inputData && !toggleSubmit){
        setItems(
            items.map((elem)=>{
                if (elem.id === isEditItem){
                    return{ ...elem, name:inputData}
                }
                return elem;
            })
        )
        setToggleSubmit(true);
        setInputData('');
        setIsEditItem(null);
    
    } else {
        const allInputData = {id: new Date().getTime().toString(), name:inputData}
      setItems([...items, allInputData]);
      setInputData("");
    }
  };
  // Delete the items
  const deleteItem = (index) => {
    alert("item deleted:" + index);
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateditems);
  };
  // Edit Functi0on

  const editItem = (id)=>{
      
      let newEditItems = items.find((elem)=>{
          return elem.id ===id
      });
      console.log(newEditItems)
      setToggleSubmit(false);
      setInputData(newEditItems.name)
      setIsEditItem(id)
  }
  const removeAll= ()=>{
      setItems([ ])
  }

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.childDiv}>
          <figure>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <figcaption>Add Your List Here <span>&#9996;</span></figcaption>
          </figure>
          <div className={classes.addItems}>
            <input
              type="text"
              placeholder="  &#9997; Add Items..."
              title="Add item"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {
                toggleSubmit ? <span className={classes.fa} onClick={addTodoItem}>
                <FaPlus /> 
              </span> :
              
              <span className={classes.editBtn}
              onClick={addTodoItem}
              >
                <FaEdit /> 
              </span>
            }

            
          </div>
          <div className={classes.showItems}>
            {items.map((elem) => {
              return (
                <div className={classes.eachItem} key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className={classes.todoBtn}>
                    
                    <span className={classes.editBtn}
                    onClick={()=> editItem(elem.id)}
                    >
                      <FaEdit />
                    </span>
                    <span
                      className={classes.ti}
                      onClick={() => deleteItem(elem.id)}
                    >
                      <RiDeleteBinLine />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div >
          <button className={classes.btn} onClick={removeAll}>clear all</button>
          </div>
         
        </div>
      </div>
    </>
  );
};
export default TodoList;
