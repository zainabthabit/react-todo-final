import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { CalendarPlusIcon, PencilIcon } from 'lucide-react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const AddEditTodo = ({ onSubmit, todo }) => {
    const [newTodoTitle, setNewTodoTitle] = useState(todo?.title || "")
    const [newTodoStartDate, setNewTodoStartDate] = useState(todo?.startDate || "")
    const [newTodoEndDate, setNewTodoEndDate] = useState(todo?.endDate || "")
    const [newTodoDesc, setNewTodoDesc] = useState(todo?.description || "")
    const [selectedEmployee, setSelectedEmployee] = useState(todo?.assigned || "")
    //dropdown 
    const options = [
        { value: 1, label: 'Aya' },
        { value: 2, label: 'Hussain' },
        { value: 2, label: 'Marrwa' },
    ];
    const onSelect = (value) => {
        setSelectedEmployee(value.label)
    }
    //capture the texts
    const handleNewTodoTitle = (event) => {
        setNewTodoTitle(event.target.value)
    }
    const handleNewTodoStartDate = (event) => {
        setNewTodoStartDate(event.target.value)
    }
    const handleNewTodoDesc = (event) => {
        setNewTodoDesc(event.target.value)
    }
    const handleNewTodoEndDate = (event) => {
        setNewTodoEndDate(event.target.value)
    }


    // Dialoge design
    return <Dialog.Root >
        <Dialog.Trigger asChild>
            { todo ? <button >
                <PencilIcon color='fuchsia' size={ 20 }></PencilIcon>
            </button> :
                <button className='absolute top-[3px] left-[250px]' >
                    <CalendarPlusIcon color='fuchsia' size={ 25 } />
                </button> }
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-cyan-100 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="font-serif text-cyan-500 m-0 text-[20px] font-medium">
                    { todo ? "Edit My Task" : "Add New Task" }
                </Dialog.Title>
                <Dialog.Description className=" font-serif text-cyan-500 mt-[10px] mb-5 text-[15px] leading-normal">
                    { todo ? "Edit your task. Click Save when you're done" : "Add new task. Click Add when you're done." }
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="font-serif	text-cyan-400	 w-[90px] text-right text-[17px]" htmlFor="name">
                        Task Title
                    </label>
                    <input type="text" placeholder='enter task title' onChange={ handleNewTodoTitle } value={ newTodoTitle }
                        className="text-cyan-400 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 bg-cyan-50 border-slate-300 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="TaskTitle"

                    />

                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="font-serif	text-cyan-400 w-[90px] text-right text-[17px]" htmlFor="StartDate">
                        Start Date
                    </label>
                    <input type="date" onChange={ handleNewTodoStartDate } value={ newTodoStartDate }
                        className=" text-cyan-400 bg-cyan-50 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="StartDate"

                    />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="font-serif	text-cyan-400 w-[90px] text-right text-[17px]" htmlFor="EndDate">
                        End Date
                    </label>
                    <input type="date" onChange={ handleNewTodoEndDate } value={ newTodoEndDate }
                        className="text-cyan-400 bg-cyan-50 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="EndDate"

                    />
                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="font-serif	text-cyan-400 w-[100px] text-right text-[17px]" htmlFor="Description">
                        Assigned To
                    </label>
                    <Dropdown options={ options } onChange={ onSelect } placeholder="Select one" value={ selectedEmployee } className='text-cyan-400 bg-cyan-50 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]' />

                </fieldset>
                <fieldset className="mb-[15px] flex items-center gap-5">
                    <label className="font-serif	text-cyan-400 w-[90px] text-right text-[17px]" htmlFor="Description">
                        Description
                    </label>
                    <textarea onChange={ handleNewTodoDesc } value={ newTodoDesc }
                        className=" h-[200px] text-cyan-400 bg-cyan-50 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                        id="Description"

                    />
                </fieldset>

                <div className="mt-[25px] flex justify-end">
                    <Dialog.Close asChild>
                        <button onClick={ () => onSubmit({ id: todo?.id, title: newTodoTitle, startDate: newTodoStartDate, endDate: newTodoEndDate, assigned: selectedEmployee, description: newTodoDesc }) } className="bg-fuchsia-400 text-green11 hover:bg-fuchsia-300 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                            { todo ? "Save" : "Add" }
                        </button>
                    </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
};

export default AddEditTodo;