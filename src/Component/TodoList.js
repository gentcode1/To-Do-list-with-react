import React, {useState}from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo'
function TodoList() {
    const [todos, setTodos]= useState([
        {text:' wake up',
          isComplete:false},
        {text:' get started with react',
         isComplete:false},
        {text:' getch lunch',
         isComplete:false}
        ]);
    const addTodo=(text)=>{
        const newTodos=[...todos,{text}];
        setTodos(newTodos);
    };
    const completeTodo=(index)=>{
     const newTodos=[...todos];
     newTodos[index].isComplete= true;
     setTodos(newTodos);
    }
    const removeTodo=(index)=>
    { 
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
    }

    return (
    
     <div className='todo-list'>
    {todos.map((todo, index)=>(
       <Todo  
       key={index}
       index={index}
       todo={todo}
       completeTodo={completeTodo}
       removeTodo={removeTodo}
       />
        ))}
      <TodoForm addTodo={addTodo}/>
     </div>     
      
    );
}

export default TodoList
