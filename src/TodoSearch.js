import './TodoSearch.css'

function TodoSearch() {
    return (
        <input placeholder="cocinar guayabas" className='TodoSearch' onChange={(event)=>console.log(event.target.value)}/>
    );
}

export { TodoSearch };