import React from 'react';

const AddTask = () => {
    const handleAddTask = event =>{
        event.preventDefault();
       
    }
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>Add Task</h1>
            <form onClick={handleAddTask}>
                <input className='border-solid border-2 border-sky-500 h-32 w-96' type="text" name="text" id="" /> <br />
                <input className='mt-5' type="file" name="inputFile" id="" />
                <input className='border-rounded border-4 border-sky-500 bg-fuchsia-900 p-1' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddTask;