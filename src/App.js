import './App.css';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from './store/posts/actions';
import Posts from './components/PostsList';

function App() {
  let dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Hola esteban</h1>
      <Posts renderItem={post => <Posts.Item key={post.id} post={post} /> }>
      </Posts>
    </div>
  );
}


export default App;
