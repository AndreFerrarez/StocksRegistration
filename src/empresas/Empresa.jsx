import { useState } from 'react';
import './empresa.css';
import axios from 'axios';




export default function Empresa(){

    const [codigo, setCodigo] = useState('');
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState('');
    
    console.log(codigo);
    console.log(nome);
    console.log(valor);
    console.log(descricao);

    const sendDataToApi = () =>{
        axios.post(`https://64352f2483a30bc9ad5a058c.mockapi.io/StockCheck`, {
            codigo,
            nome,
            valor,
            descricao
        })
    }

    return (
        <div className="container-analise">      
                      
                <div className='box-empresa' >
                    <label>Codigo Da Empresa...</label><br/>
                    <input  required
                        className='codigo'
                        onChange={(e) => setCodigo(e.target.value)}
                        type='text'placeholder='Codigo da empresa' />
                </div>
                <div className='box-empresa'>
                    <label>Nome Da Empresa...</label><br/>
                    <input required
                        className='nome'
                        onChange={(e) => setNome(e.target.value)}
                        type='text'placeholder='Nome da empresa' />
                </div>
                <div className='box-empresa'>
                    <label>Valor R$...</label><br/>
                    <input required
                        className='valor'
                        onChange={(e) => setValor(e.target.value)}
                        type='number'placeholder='Valor da Acao' />
                </div>
                <div className='box-empresa'>
                    <label>Descricao Da Empresa...</label><br/>
                    <textarea  required
                        className='descricao' 
                        onChange={(e) => setDescricao(e.target.value)}
                        rows="4" cols="50" 
                        form="usrform"></textarea>
                </div>
                <button 
                    className='analise-btn-enviar' 
                    onClick={sendDataToApi}
                    type='submit' >
                        Salvar
                </button>  
            
        </div>
        
    )
}