import { useState } from 'react';
import {api} from "./libs/axios";

function App() {
  const [valor,setValor] = useState("");
  const [mod,setMod] = useState("");
  const [from,setFrom] = useState("");
  const [covert_to,setCovert_to] = useState("");

  const onChange = e => {
    console.log(e.target.value);
    setValor(e.target.value);
  }

  const onSubmit = async() => {
    try {
      const response = await api.get(`/${from}-${covert_to}`);
      const data  = response.data;
      console.log(data)
      setMod(Number(data[`${from}${covert_to}`].high))
  
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <select name="from" id="from" onChange={e => setFrom(e.target.value)}>
      <option value=""> Select... </option>
      <option value="BRL">BRL</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>

    <select name="convert_to" id="covert_to" onChange={e => setCovert_to(e.target.value)}>
      <option value=""> Select... </option>
      <option value="BRL">BRL</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>

    <input onChange={onChange} type='number'/>

    <button onClick={onSubmit}> Coverter</button>


    <h2> valor digitado {valor} </h2>
    <h2> fator de conversão {mod}</h2>
    <h2> valor convertido {valor*mod}</h2>
    </>
  )
}

export default App;
