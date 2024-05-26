import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';


const App = ()=>{

  const [tours, setTours] = useState(data);

  const handleButton = (id) => {
   const newTours = tours.filter(tour => tour.id !== id);
   setTours(newTours);
  }

  if(tours.length === 0){
    return(
      <div className='h-screen flex items-center justify-center flex-col gap-2'>
            <h1 className='text-lg'>No Tours Found</h1>
            <button className='bg-zinc-400 text-white px-4 py-2 hover:bg-zinc-500 rounded-lg' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  };

  return(
    <div>
      <Tours tours={tours} removeTour={handleButton}/>
    </div>
  )
}

export default App;
