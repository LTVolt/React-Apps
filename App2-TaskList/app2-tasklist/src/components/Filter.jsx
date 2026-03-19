const Filter = ({ onAll, onCompleted, onIncomplete }) => {
    return (<>
        <button onClick={onAll} className="bg-blue-400 m-2 p-2 rounded-full hover:bg-blue-600 active:bg-blue-800">
            Show All
        </button>
        <button onClick={onCompleted} className="bg-blue-400 m-2 p-2 rounded-full hover:bg-blue-600 active:bg-blue-800">
            Show Completed
        </button>
        <button onClick={onIncomplete} className="bg-blue-400 m-2 p-2 rounded-full hover:bg-blue-600 active:bg-blue-800">
            Show Not Completed
        </button>
    
    </>  
    );
}
 
export default Filter;