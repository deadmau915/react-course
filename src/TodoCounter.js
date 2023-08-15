import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    if (total == completed) {
        return (
            <h1 className='TodoCounter'>
                <span>Congrats!!! you have completed all the tasks</span>
            </h1>
        );   
    } else {
        return (
            <h1 className='TodoCounter'>
                You have completed <span>{completed}</span> of <span>{total}</span> TODOs
            </h1>
        );
    }
}

export { TodoCounter };