import {
BrowserRouter,
Routes,
Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Concert from "./pages/concerts/Concert";
import StagePerformance from "./pages/stage performance/StagePerformance";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/activities" element={<List/>}/>
  <Route path="/activities/:id" element={<Concert/>}/> 
  <Route path="/activities/:id" element={<StagePerformance/>}/> 
</Routes>
</BrowserRouter>

    );
}

export default App;
