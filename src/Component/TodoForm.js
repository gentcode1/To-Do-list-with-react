import React, {useState} from 'react'

  function TodoForm({addTodo}) {
    const [input, setInput]=useState('')
 
 const handleSubmit=(e)=>{
     e.preventDefault();
     if(!input)
         return;
     
     addTodo(input);
     setInput('');
 }
 
    return (
        <form className="todoForm" onSubmit={handleSubmit}>
           <input onChange={e=>setInput(e.target.value)} value={input} names='text' type='text' placeholder='add todo' className='textInput'/>
     <button>add Todo</button>  
        </form>
    )
}

export default TodoForm;
