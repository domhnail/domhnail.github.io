import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './ui/Nav';

function App() {
  return (
        <main className='d-flex'>
          <div className='container'>
            <Nav />
            <Outlet />
          </div>
        </main>
  )
}

export default App
