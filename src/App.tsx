import './App.css';
import AddPostForm from './feature/posts/AddPostForm';
import PostList from './feature/posts/postList';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
