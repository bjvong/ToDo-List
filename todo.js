function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }
    return <div className="dropdown-item d-flex align-items-center gap-2 py-2" onClick={handle}>&#8226;  {todo.text}</div>
  }
