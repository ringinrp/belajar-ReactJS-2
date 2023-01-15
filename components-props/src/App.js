import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Profile />
      <Introduction name="ringin"/>
      <Introduction name="restu pati"/>
    </div>
  );
}

export default App;
