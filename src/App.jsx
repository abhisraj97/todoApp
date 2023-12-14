// App.js
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo} from '../src/redux/features/todoSlice';
import TodoItem from './components/TodoItem';
import './index.css'

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [newTodo, setNewTodo] = useState('');
 

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div  className='mt-28 text-yellow-700' >
      <h1 className='text-center text-6xl font-bold mr-24'>Todo List</h1>
      <div className='mt-12' >
        <input  className='mr-1  text-white text-1xl w-96 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='submit' className='text-lg rounded-r-lg px-3 py-1 bg-green-600 text-white shrink' onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul  className='mt-12 text-center border-sky-600'>
        {todos.map((todo) => (
          <li className='mt-4' key={todo.id}>
         <TodoItem todo={todo}></TodoItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
