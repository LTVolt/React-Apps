import Task from './components/Task';
import Filter from './components/Filter';
import useLocalStorageState from './hooks/useLocalStorageState';

const App = () => {

  const defaultTasks = [
    {id: 1, name: "Task 1", completed: false},
    {id: 2, name: "Task 2", completed: true},
    {id: 3, name: "Task 3", completed: false},
  ]

  const [tasks, setTasks] = useLocalStorageState("tasks", defaultTasks);

  function addTask() {
    const taskName = document.querySelector("input[type='text']").value;
    if (!taskName) return;

    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;

    const newTask = {id: lastId + 1, name: taskName, completed: false}
    setTasks([...tasks, newTask]);
  }

  function editTask(id) {
    const newName = prompt("Enter new task name:");
    if (!newName) return;

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

function completeTask(id) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(newTasks);
  }

  function filterAll() {
    setTasks(defaultTasks);
  }

  function filterCompleted() {
    const newTasks = defaultTasks.filter(task => task.completed);
    setTasks(newTasks);
  }

  function filterIncomplete() {
    const newTasks = defaultTasks.filter(task => !task.completed);
    setTasks(newTasks);
  }

  return ( 
    <>
      <div className="flex-col my-10 mx-auto">
        <div className='flex rounded-3xl p-5'>
          <form className='flex mx-auto'>
            <input className='bg-gray-300 mx-auto p-2 m-3 text-black font-bold rounded-2xl' type="text" placeholder='Task Name' onChange={setTaskName}/>
            <button onClick={addTask} className='bg-blue-500 text-white p-2 m-3 hover:bg-blue-700 active:bg-blue-900 rounded-2xl' type="button">Add Task</button>
          </form>
        </div>
          <div className="flex mx-auto w-140 justify-center my-5">
            <Filter onAll={filterAll} onCompleted={filterCompleted} onIncomplete={filterIncomplete} />
          </div>
        <div>
          {tasks.map(task => (
            <Task key={task.id} {...task} onEdit={() => editTask(task.id)} onDelete={() => deleteTask(task.id)} onComplete={() => completeTask(task.id)}/>
          ))}
        </div>
      </div>
    </>
  );
}
 
export default App;