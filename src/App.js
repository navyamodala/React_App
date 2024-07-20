import { Heading, Heading1 } from "./components/heading";
import Iplcard from "./components/card.js";
import { ipl } from "./components/ipl";

import CustomList from "./components/customlist/custom_list";
import Listitem from "./components/list";
import { Accordion, Button } from "react-bootstrap";
import Name from "./components/display_name.js";
import Data from "./components/data.js";


const App=()=>{
  
  return(
    <>
      {/* <Heading></Heading>      */}
      {/* <Iplcard data={ipl}></Iplcard> */}
      {/* <Heading1></Heading1> */}
      {/* <CustomList list={["apple","bannana","organe"]}></CustomList>
     <Listitem></Listitem>
     <Accordion></Accordion>
  
      
      <Button></Button>*/}
      <Name d={Data}></Name>

      
    

    </>

  )


}



 

export default App; 