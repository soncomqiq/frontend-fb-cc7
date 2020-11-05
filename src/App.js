import './App.css';
import PrivateRoutes from './containers/PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <PrivateRoutes role="USER"/>
    </div>
  );
}

export default App;
