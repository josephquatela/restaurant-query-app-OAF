import './App.css';
import { Container, Divider, Segment } from 'semantic-ui-react';
import { InputForm } from '../InputForm/InputForm';
import { ResultsList } from '../ResultsList/ResultsList';
import { useState } from 'react';


function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState([]);
  const [data10, setData10] = useState([]);
  const [returnedData, setReturnedData] = useState([]);

  return (
    <div className='app'>
      <h1>Query Search Tool</h1>
      <main style={{minHeight: "100vh", maxHeight: "100vh"}}>
        <Container >
          <div className="inputFormContainer">
              <Divider />
              <Segment>
                  <InputForm
                  setReturnedData = {setReturnedData} 
                  setData1 = {setData1}
                  setData2 = {setData2}
                  setData3 = {setData3}
                  setData4 = {setData4}
                  setData5 = {setData5}
                  setData6 = {setData6}
                  setData7 = {setData7}
                  setData8 = {setData8}
                  setData9 = {setData9}
                  setData10 = {setData10}
                  />
              </Segment>
          </div>
        </Container>
        <h1 style={{color: "white", marginTop: 24, borderRadius: 8, backgroundColor: "rgb(241, 190, 95)", 
        maxWidth: 256, margin: "24px auto 8px"}}>Results</h1>
        <Container fluid>
          <ResultsList
          returnedData = {returnedData}
          data1 = {data1}
          data2 = {data2}
          data3 = {data3}
          data4 = {data4}
          data5 = {data5}
          data6 = {data6}
          data7 = {data7}
          data8 = {data8}
          data9 = {data9}
          data10 = {data10}
          />
        </Container>
      </main>
    </div>
  );
}

export default App;
