import './App.css';
import { Container, Divider, Segment } from 'semantic-ui-react';
import { InputForm } from '../InputForm/InputForm';


function App() {
  
  
  return (
    <div className='app'>
      <h1>Query Search Tool</h1>
      <main>
        <Container>
          <div class="inputFormContainer">
              <Divider />
              <Segment>
                  <InputForm />
              </Segment>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
