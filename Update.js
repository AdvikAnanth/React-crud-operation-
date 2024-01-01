import React,{useState,useEffect} from 'react'
import { Form,Button,Checkbox } from 'semantic-ui-react';


 function Update() {
  const [FirstName, setFirstName] = useState('');
  const [SecondName, setSecondName] = useState('');
  const [Checked, setChecked] = useState(false);
  const [id, setId] = useState('');

  useEffect(() =>{

    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('FirstNmae'))
    setSecondName(localStorage.getItem('SecondName'))
    setChecked(localStorage.getItem('Checked'))
    
  },[])

  return (
    <Form className='form'>
            <Form.Field>
                <lable> First Name</lable>
                <input value={FirstName} onChange={event => setFirstName(event.target.value)} placeholder='Enter the First Name'></input>
            </Form.Field><br />
            <Form.Field>
                <label>Second Name</label>
                <input value={SecondName} onChange={event => setSecondName(event.target.value)} placeholder='Enter the Second Name'></input>
            </Form.Field><br />
            <Form.Field>
                <Checkbox Checked={Checked} onchange={() => setChecked(!Checked)} label='Agree the condition & terms'/>
            </Form.Field><br />
            <Button>SUBMIT</Button>
        </Form>
  )
}
export default Update;