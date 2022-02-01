import './App.css';
import { Container, Divider, Segment } from 'semantic-ui-react';
import { InputForm } from '../InputForm/InputForm';
import { ResultsList } from '../ResultsList/ResultsList';


function App() {
  
  return (
    <div className='app'>
      <h1>Query Search Tool</h1>
      <main style={{minHeight: "100vh"}}>
        <Container>
          <div className="inputFormContainer">
              <Divider />
              <Segment>
                  <InputForm />
              </Segment>
          </div>
        </Container>
        <h1 style={{color: "white", marginTop: 24}}>Results</h1>
        <Container fluid>
          <ResultsList />
        </Container>
      </main>
    </div>
  );
}

export default App;
