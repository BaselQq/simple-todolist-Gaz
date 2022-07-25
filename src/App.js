import Input from "./input";
import Task from "./task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const onAdd = async (task) => {
    setTasks([...tasks, task]);
    const response = await fetch(
      "FirebaseAPILink/todolist.json",
      {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  const onDelete = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const onEdit = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, edited: true } : { ...task }
      )
    );
  const onDone = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : { ...task }
      )
    );
  const onEditDone = (newTask) =>
    setTasks(
      tasks.map((task) =>
        task.id === newTask.id
          ? { ...task, name: newTask.name, edited: false }
          : { ...task }
      )
    );
  const onEditCancel = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, edited: false } : { ...task }
      )
    );

  return (
    <div className="App">
      <div className="container mt-6 px-6">
        <Input onInput={(task) => onAdd(task)} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
            onDone={() => onDone(task.id)}
            onEdit={() => onEdit(task.id)}
            onEditDone={(newTask) => onEditDone(newTask)}
            onEditCancel={(id) => onEditCancel(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
