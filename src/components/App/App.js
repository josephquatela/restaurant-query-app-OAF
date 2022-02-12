import './App.css';
import { Container, Divider, Segment } from 'semantic-ui-react';
import { InputForm } from '../InputForm/InputForm';
import { ResultsList } from '../ResultsList/ResultsList';
import { useState } from 'react';


function App() {
  const [returnedData, setReturnedData] = useState([]);
  const [activePageContent, setActivePageContent] = useState([]);

  return (
    <div className='app'>
      <h1>Query Search Tool</h1>
      <main style={{minHeight: "100vh", maxHeight: "100vh"}}>
        <Container >
          <div className="inputFormContainer">
              <Divider />
              <Segment>
                  <InputForm 
                  setReturnedData={setReturnedData}
                  setActivePageContent={setActivePageContent}
                  />
              </Segment>
          </div>
        </Container>
        <h1 style={{color: "white", marginTop: 24, borderRadius: 8, backgroundColor: "rgb(241, 190, 95)", 
        maxWidth: 256, margin: "24px auto 8px"}}>Results</h1>
        <Container fluid>
          <ResultsList returnedData={returnedData} 
          activePageContent={activePageContent} 
          setActivePageContent={setActivePageContent} />
        </Container>
      </main>
    </div>
  );
}

export default App;
