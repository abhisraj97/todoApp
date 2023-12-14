/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { useDispatch} from 'react-redux';
import { toggleTodo,deleteTodo,updateTodo} from '../redux/features/todoSlice';


function TodoItem({todo}) {
    const [isEdit ,setisEdit] = useState('true');
    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todos.todos);
  
    const [newTodo, setNewTodo] = useState('');
    const editTodo = (id) => {
        if (newTodo.trim() !== '') {
            dispatch(updateTodo({text : newTodo,id}));
            setNewTodo('');
          }
        setisEdit('true')
    }

  return (
    <>
           {isEdit && <span
             className='mr-32 text-green-500'
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
            {todo.text}
            </span>}
            {!isEdit && <input className='text-white' onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>}
            <button onClick={()=> {
                if(!isEdit){
                    editTodo(todo.id)
                }else{
                    setisEdit(pre => !pre)
                }
            }}>
              {isEdit ? "Edit" : "save"}
            </button>
            <button className='' onClick={() => dispatch(toggleTodo(todo.id))}>
              Complete
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
    </>
  );
}

export default TodoItem;
