import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import {API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [FirstName, setFirstName] = useState('');
    const [SecondName, setSecondName] = useState('');
    const [Checked, setChecked] = useState(false);
    const navigate= useNavigate();
    const postData = async () => {
        await axios.post(API_URL, { FirstName, SecondName, Checked }) 
   navigate('/Read')
    };

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
            <Button onClick={postData}>SUBMIT</Button>
        </Form>
    )
}
export default Create;