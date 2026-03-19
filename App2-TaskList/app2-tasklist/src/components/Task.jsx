const Task = ({id, name, completed, onEdit, onDelete, onComplete}) => {
    return ( 
        <div className="flex-col justify-center my-5 w-140 mx-auto">
            <div className="flex items-center my-3 mx-auto border border-solid rounded-3xl p-3 bg-gray-400 hover:bg-gray-500">
                <span className="flex-1">Task #{id} : {name} - {completed ? "Completed" : "Not Completed"}</span>
                <div className="flex justify-end">
                    <button onClick={onEdit} className="border border-solid border-black m-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 active:bg-yellow-900 w-15 h-9 flex justify-center items-center" type="button">
                        Edit
                    </button>
                    <button onClick={onDelete} className="border border-solid border-black m-2 bg-red-500 text-white p-2 rounded hover:bg-red-700 active:bg-red-900 w-15 h-9 flex justify-center items-center" type="button">
                        Delete
                    </button>
                    <button onClick={onComplete} className="border border-solid border-black m-2 bg-green-500 text-white p-2 rounded hover:bg-green-700 active:bg-green-900 w-20 h-9 flex justify-center items-center" type="button">
                        {completed ? "Undo" : "Complete"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Task;