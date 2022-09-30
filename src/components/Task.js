import React from "react";

function Task({onDeleteTask,text,category}) {

function buttonClick(){
  onDeleteTask(text)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"onClick={buttonClick} >X</button>
    </div>
  );
}

export default Task;
