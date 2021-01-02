import {useState} from 'react'
import {Form,Modal,Card,Button} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pop from './Pop';
import Oops from './Oops'

function App() {
  const problems=["fucking COVID 19","LockDown","Mask","Homeless Population","Poverty","Income Gap","Racial Injustice",
"Political Corruption","Women's Safety","Civil Rights and Racial Discrimination","Climate Change","Immigration Stresses","Unemployment","Agricultural Distress.",
"Human Rights and Access to Justice","Cyclone Burevi","Article 69A","OTT release","waiting for vaccines","mutant virus","what next....."];
const [modalOpen, setModalOpen] = useState(false)
function closeModal() {
  setModalOpen(false)
}
const [count, setCount] = useState(0)       

 function sec(){
if(count< 100){
  setCount(count+1) 
}
}

  return (
    <div
    style={{
      display: "flex",
      alignItems:"baseline",
      justifyContent: "center"
    }}
  >
    <Card
    bg='dark'
    text='white'
    style={{ width: '20rem' }}
    className="mb-5"
  >
    <Card.Header>Delete my 2020</Card.Header>
    <Card.Body>
      <Card.Title> F**K !!</Card.Title>
      <Card.Text>
        {problems.map((pro)=>{
          return(<ul>{pro}</ul>)
        })}
        <Form onSubmit={setTimeout(sec,100)}>
        <Button type="submit"> Deleteing your 2020 Memories</Button>
        </Form>
        
        <Modal show={true} onHide={closeModal}>
        {count===100 ?
          <Pop  closeModal={closeModal} /> :
          <Oops closeModal={closeModal}/>
        }
      </Modal>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>


  );
}

export default App;
