function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form className="p-2 mb-2 bg-dark border-bottom border-dark" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="form-control form-control-dark"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </form>
    )
  }