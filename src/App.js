import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from './store/posts/actions';
function App() {
  let dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Hola esteban</h1>
    </div>
  );
}


export default App;
