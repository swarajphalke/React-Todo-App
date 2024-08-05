// TODO LIST
// import { useState } from "react";
// export default function TudoList() {
//   let [todos, setTodos] = useState(["sample task"]);
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask=()=>{
//     setTodos([...todos,newTodo]);
//     setNewTodo("");
//   }
//    let updateValue=(event)=>{
//     setNewTodo(event.target.value);
//    }
//   return (
//     <div>
//       <input placeholder="add a task"  value={newTodo} onChange={updateValue}/>
//       <br />
//       <button onClick={addNewTask}>Add Task</button>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <h4>Task Todo</h4>
//       <ul>
//         {todos.map((todo) => (
//           <li>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// UNIQUE KEY
// import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
// export default function TudoList() {
//   let [todos, setTodos] = useState( [{ task:'sample task',id: uuidv4() }] );
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask=()=>{
//     setTodos([...todos,{task:newTodo, id: uuidv4() } ]);
//     setNewTodo("");
//   }
//    let updateValue=(event)=>{
//     setNewTodo(event.target.value);
//    }
//   return (
//     <div>
//       <input placeholder="add a task"  value={newTodo} onChange={updateValue}/>
//       <br />
//       <button onClick={addNewTask}>Add Task</button>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <h4>Task Todo</h4>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>{todo.task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// DELETING FROM ARRAYS
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// export default function TudoList() {
//   let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask = () => {
//     setTodos((prevTodos) => {
//       return [...prevTodos, { task: newTodo, id: uuidv4() }];
//     });
//     setNewTodo("");
//   };
//   let updateValue = (event) => {
//     setNewTodo(event.target.value);
//   };
//   let deleteTodo=(id)=>{
//    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));

//   }
//   return (
//     <div>
//       <input placeholder="add a task" value={newTodo} onChange={updateValue} />
//       <br />
//       <button onClick={addNewTask}>Add Task</button>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <h4>Task Todo</h4>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span>
//             {todo.task}
//             </span> &nbsp;&nbsp;&nbsp;
//             <button onClick={ ()=> deleteTodo(todo.id) }>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//UPDATING ALL IN ARRAYS
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// export default function TudoList() {
//   let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
//   let [newTodo, setNewTodo] = useState("");

//   let addNewTask = () => {
//     setTodos((prevTodos) => {
//       return [...prevTodos, { task: newTodo, id: uuidv4() }];
//     });
//     setNewTodo("");
//   };
//   let updateValue = (event) => {
//     setNewTodo(event.target.value);
//   };
//   let deleteTodo = (id) => {
//   setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id));
//    };

//   let upperCaseAll = () => {
//     setTodos((todos) => (
//       todos.map((todo) => {
//         return {
//           ...todo,
//           task: todo.task.toUpperCase(),
//         };
//       })
//     ));
//   };
//   return (
//     <div>
//       <input placeholder="add a task" value={newTodo} onChange={updateValue} />
//       <br />
//       <button onClick={addNewTask}>Add Task</button>
//       <br />
//       <br />
//       <br />
//       <hr />
//       <h4>Task Todo</h4>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span>{todo.task}</span> &nbsp;&nbsp;&nbsp;
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <br />
//       <br />
//       <button onClick={upperCaseAll}>UpperCase All</button>
//     </div>
//   );
// }

//UPDATING ONE IN ARRAYS
import { useState } from "react";
import "./TudoList.css";
import { v4 as uuidv4 } from "uuid";
export default function TudoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div>
      <h1>Todo List</h1>
    
      <div className="inputTask">
        <input
          placeholder="add a task"
          value={newTodo}
          onChange={updateValue}
        />
        <br />
        <br />
        <button onClick={addNewTask}>Add Task</button>
      </div>

       
      <h4>Task's Todo</h4>
      <ol >
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ol>
       
      <button onClick={markAllDone}>Mark All As Done</button>
    </div>
  );
}


 
