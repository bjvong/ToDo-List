function  App(){
    const [todos, setTodos] = React.useState([]);
    
    const addTodo = text => {
        const newTodos = [{text, isCompleted:false}, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return(
        <div className="app">
            <div className="dropdown-menu dropdown-menu-dark d-block position-static border-0 pt-0 mx-0 rounded-3 shadow overflow-hidden w-280px">
            <TodoForm addTodo={addTodo} />
        {todos.map((todo,i) => (<Todo key={i} index={i} todo={todo} remove={removeTodo} />))}

        
            </div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);