import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import AddMembers from './components/AddMembers';
import UpdateMember from './components/UpdateMember'

function App() {
  return (
    <BrowserRouter>
     < Routes>
      <Route path = '/' element = {<Homepage/>}/>
      <Route path = '/create' element = {<AddMembers/>}/>
      <Route path = '/update/:id' element = {<UpdateMember/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
