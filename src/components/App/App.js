import './App.css';
import { Container, Segment } from 'semantic-ui-react';
import { InputForm } from '../InputForm/InputForm';


function App() {
  
  
  return (
    <div className='app'>
      <h1>Title Here</h1>
      <main>
        <Container>
          <Segment>
            <InputForm></InputForm>
          </Segment>
        </Container>
      </main>
    </div>
  );
}

export default App;
