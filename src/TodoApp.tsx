import { useState } from "react";
import { useGetTodoQuery, /* useGetTodosQuery */} from "./store"

export const TodoApp = () => {

    const [ todoId, setTodoId ] = useState(1)

    // const { data: todos = [], isLoading } = useGetTodosQuery('');
    const { data: todo, isLoading } = useGetTodoQuery(todoId);


    const nextToDo = () => {
        setTodoId( todoId + 1 );
    };

    const prevToDo = () => {
        if ( todoId === 1 ) return;
        setTodoId( todoId - 1);
    };

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>

            <pre>{ JSON.stringify( todo ) }</pre>

            <button onClick={prevToDo}>
                Prev ToDo
            </button>

            <button onClick={nextToDo}>
                Next ToDo
            </button>

            {/* <ul>
                {
                    todos.map( (todo:any) => (
                        <li key={ todo.id }>
                            <strong>{ todo.completed ? 'DONE ' : 'Pending ' }</strong>
                            { todo.title }
                        </li>
                    ))
                }
            </ul> */}


        </>
    )
}
