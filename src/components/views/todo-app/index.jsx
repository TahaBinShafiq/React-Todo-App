import { useState } from "react"

function TodoApp() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTask] = useState([]);

    function addTask() {
        const tempTasks = [...tasks]
        tempTasks.push(inputValue)
        setTask(tempTasks)
        setInputValue('');
    }


    function deleteTask(index) {
        console.log(index)
        const tempTask = [...tasks]
        tempTask.splice(index, 1)
        setTask(tempTask)
    }
    return (
        <div className="todo-container">
            {/* Todo Card/Box */}
            <div className="todo-card">

                {/* Heading */}
                <h1 className="todo-heading">
                    React Todo App
                </h1>

                {/* Input aur Button ka Container */}
                <div className="input-group">
                    {/* Input Field */}
                    <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder="Add Task" className="task-input"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                addTask();
                            }
                        }}
                    />

                    {/* Button */}
                    <button onClick={addTask} className="add-button" disabled={!inputValue.trim()}  >
                        Add
                    </button>
                </div>

                {/* Task List Container */}
                <div className="task-list">
                    {tasks.length === 0 && (
                        <p className="text-center text-gray-500 italic mt-4">
                            There is no task at the moment. Shall we start?
                        </p>
                    )}

                    {tasks.map((task, index) => (
                        // Har Task Item
                        <div key={index} className="task-item">
                            <span className="task-text">{task}</span>

                            {/* Edit Icon (SVG) */}
                            <div className="icons">
                                <div className="edit-icon" title="Edit Task">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className="delete-icon"
                                    title="Delete Task"
                                    onClick={() => deleteTask(index)} // Delete logic attach kiya
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default TodoApp