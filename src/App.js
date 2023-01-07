import { useState } from "react";
import {  Container  } from "react-bootstrap";
import "./App.css";
import Btm from "./component/Btms/Btm";
import Cards from "./component/Cards/Cards";
import Title from "./component/Title/Title";
import {person} from './Data'

function App() {
  
const [Pdata, setPdata] = useState(person)
const deletefun=()=>{
  setPdata([])
}
const showfun =()=>{
  setPdata(person)
}
  return (
    <div className="App color-body font">
      <Container className="py-5">
       <Title data={Pdata}/>
        <Cards data={Pdata}/>
        <Btm deletData={deletefun} showData={showfun} />
      </Container>
    </div>
  );
}

export default App;
