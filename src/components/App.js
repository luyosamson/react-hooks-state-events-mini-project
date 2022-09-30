import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks,setMytask]=useState(TASKS)
const [categorys,setCategory]=useState('All')


function toAddTask(newTask){
setMytask([...tasks,newTask])
}

function handleDELETE(deletedItems){
setMytask(tasks.filter((task)=>task.text!== deletedItems));

}


const viewTask=tasks.filter(
(task)=>categorys==='All' || task.category===categorys

);
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} mySelect={categorys} onMyselect={setCategory} />
      <div className="tasks">
        <h5>TASKS</h5>
      <NewTaskForm    onTaskFormSubmit={toAddTask}
      categorie={CATEGORIES.filter((CATEGORY) => CATEGORY !== "All")}
      
      />
      <TaskList tasks={viewTask}  onDeleteTask={handleDELETE} />
      
</div>
    </div>
  
  );
  
}

export default App;



