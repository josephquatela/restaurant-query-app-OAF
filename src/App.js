import './App.css';
import { InputContainer } from './components/InputContainer/InputContainer';


function App() {
  return (
    <div className='app'>
      <h1>Title Here</h1>
      <main>
        <InputContainer></InputContainer>
        {/* ResultsComponentHere (will display Search for Results if nothing is search/appears) */}
      </main>
    </div>
  );
}

export default App;
