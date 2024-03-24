import AddEditTodo from './AddEditTodo';
import React, { useState } from 'react';
import { CircleCheckIcon, Trash2Icon } from 'lucide-react';
export const TodoItem = ({ todo, handleDelete, handleSave, handleDone }) => {
  return (
    <div className='  flex flex-col justify-between   w-[90%] mb-[16px]  rounded-[10px] bg-cyan-100 p-[25px] pb-[5px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
      <div className='flex justify-between items-center w-[100%]'>
        <button onClick={() => handleDone(todo.id)}>
          {todo.done === false ? (
            <CircleCheckIcon color='fuchsia' size={20} />
          ) : (
            <CircleCheckIcon color='green' size={20} />
          )}
        </button>
        <p className='font-serif text-cyan-500 m-0 text-[18px] font-medium' key={todo.id}>
          {todo.title}
        </p>

        <div className=' flex items-center justify-between w-[60px]'>
          <sub style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(todo.id)}>
            <Trash2Icon color='fuchsia' size={20}></Trash2Icon>
          </sub>
          <AddEditTodo onSubmit={handleSave} todo={todo} />
        </div>
      </div>
      <h6 className=' text-[12px] text-slate-400 mt-[10px]'>
        {todo.done === false ? `Assigned to:${todo.assigned}` : `Well Done  ${todo.assigned} ✨`}
      </h6>
    </div>
  );
};
