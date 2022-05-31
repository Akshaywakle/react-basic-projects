import { useState } from 'react';
import './App.css';
import data from './Data';
import List from './List'
function App() {
  const [people, setpeople] = useState(data)


  return (
    <>
      <div className='container '>
        <div className='row'>
          <div className='col-md-6 mx-auto bg-white'>
            <h3> {people.length} Today Birthday</h3>

            <List people={people} />
            <button onClick={() => setpeople([])} className='w-100 btn btn-primary'>Clear All</button>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
