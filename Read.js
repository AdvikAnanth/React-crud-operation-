import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Table, TableHeader, TableRow, TableBody, Button } from 'semantic-ui-react';
import { API_URL } from '../Constants/URL';
import { useNavigate } from 'react-router-dom';

 function Read() {
  const [apiData,setApiData] =useState([]);
  const navigate= useNavigate();

const UpdateUser = ({FirstName,SecondName,Checked,id}) =>{
  localStorage.setItem('id',id)
  localStorage.setItem(FirstName,id)
  localStorage.setItem(SecondName,id)
  localStorage.setItem(Checked,id)
  navigate('/Update')
}

  const deleteuser= async (id) =>{
    await axios.delete(API_URL + id)
    callGetAPI()
  }

  const callGetAPI = async () =>{
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  }
  useEffect(() =>{
    callGetAPI();
  },[]);
  
  return (
    <Table singleLine>
      <TableHeader>
        <TableRow>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
      {
        apiData.map(data =>(
          <TableRow key={data.id}>
          <Table.Cell>{data.FirstName}</Table.Cell>
          <Table.Cell>{data.SecondName}</Table.Cell>
          <Table.Cell>{data.Checkedbox}</Table.Cell>
          <Table.Cell><Button onClick={()=> deleteuser(data.id)}>Delete</Button></Table.Cell>
          <Table.Cell><Button onClick={()=> UpdateUser(data)}>Update</Button></Table.Cell>
        </TableRow>
        ))
      }

      </TableBody>
    </Table>
  )
}
export default Read;