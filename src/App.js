import { useState } from 'react';
import Login from './components/Login';
import Alert from './components/Alert';

function App() {
  const [passwordCorrect, setPasswordCorrect] = useState(null);

  const handlePasswordCorrect = (value) => {
    setPasswordCorrect(value);
  };

  return (
    <div className="App">
      <Login handlePasswordCorrect={handlePasswordCorrect} />
      <Alert passwordCorrect={passwordCorrect} />
    </div>
  );
}

export default App;