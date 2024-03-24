import { SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEditTodo from './AddEditTodo';
import { TodoItem } from './TodoItem';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
function TodoList({ todoData }) {
  const [todoList, setTodoList] = useState(todoData);
  const [showSuccess, setShowSuccess] = useState(false);
  const [todoSearch, setTodoSearch] = useState('');

  // //Adding new todo to the list
  const handleTodoCreate = ({ title, startDate, endDate, assigned, description }) => {
    const newTodoObj = {
      id: uuidv4(),
      title: title,
      startDate: startDate,
      endDate: endDate,
      assigned: assigned,
      description: description,
      done: false,
    };
    setTodoList([...todoList, newTodoObj]);
  };
  //search function
  const handleTodoSearch = (event) => {
    setTodoSearch(event.target.value);
  };
  const handleSearch = () => {
    setTodoList(todoList.filter((todo) => todo.title.includes(todoSearch)));
  };
  //Done function
  const handleDone = (id) => {
    const index = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    if (index !== -1) {
      const clonedTodoList = [...todoList];

      clonedTodoList[index].done = true;

      setTodoList(clonedTodoList);
    }
    setShowSuccess(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [showSuccess]);

  //delete Function
  const handleDelete = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };
  //Save Function
  const handleSave = ({ id, title, startDate, endDate, assigned, description }) => {
    const index = todoList.findIndex((todo) => {
      return todo.id === id;
    });
    if (index !== -1) {
      const clonedTodoList = [...todoList];
      clonedTodoList[index].title = title;
      clonedTodoList[index].startDate = startDate;
      clonedTodoList[index].endDate = endDate;
      clonedTodoList[index].assigned = assigned;
      clonedTodoList[index].description = description;

      setTodoList(clonedTodoList);
    }
  };

  return (
    <div className='relative flex justify-center gap-x-[100px] mt-[50px]'>
      <div className=' mb-auto flex flex-col  items-center  w-[30%]  rounded-[20px] bg-cyan-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] '>
        <div className=' relative flex  items-center w-[50%]'>
          <h1 className='font-serif text-cyan-500 m-0 text-[40px] mb-[15px] font-medium'>Todo list</h1>
          <AddEditTodo onSubmit={handleTodoCreate} />
        </div>

        <p className='font-serif text-fuchsia-500 m-0 text-[14px] mb-[20px] font-medium'>
          Simple App to manage your daily to-dos
        </p>
        <div className='flex '>
          <input
            type='text'
            placeholder='Search...'
            onChange={handleTodoSearch}
            className='text-cyan-400 rounded-[10px] bg-cyan-100 mb-[15px]'></input>
          <button onClick={handleSearch}>
            <SearchIcon color='fuchsia' size={20} />
          </button>
        </div>

        {todoList
          .filter((todo) => todo.done === false)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleSave={handleSave}
              handleDone={handleDone}
            />
          ))}
      </div>
      <div className='mb-auto flex flex-col  items-center  w-[30%]  rounded-[20px] bg-cyan-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] '>
        <h1 className='font-serif text-cyan-500 m-0 text-[40px] mb-[15px] font-medium'>Done list</h1>

        {todoList
          .filter((todo) => todo.done === true)
          .map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleSave={handleSave}
              handleDone={handleDone}
            />
          ))}
      </div>
      <Player
        autoplay
        loop
        src='party.json'
        className={`absolute top-[200px] left-[400px] h-[300px] ${!showSuccess ? 'hidden' : ''} `}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </div>
  );
}
export default TodoList;
