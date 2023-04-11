import './read.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Update from '../update/Update';

export default function Read (){
    const [apiData, setApiData] = useState([]);

    useEffect(()=> {
        axios.get(`https://64352f2483a30bc9ad5a058c.mockapi.io/StockCheck`)
        .then((getData)=> {
            setApiData(getData.data);
        })
    }, [])

    const setCodigo = (codigo) => {
        console.log(codigo);

    }

    return (        
        <div className='container-acoes'>
            Tabela de acoes registradas
            <table className='tabela'>
                <thead>
                    <tr>
                        <th>CODIGO</th>
                        <th>EMPRESA</th>
                        <th>VALOR</th>
                        <th>DESCRIÇÃO</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                        <tr className="separator">
                            <td colSpan="6"/>
                        </tr>
                </thead>
                <tbody>
                    {apiData.map((data) => {
                        return (
                            <tr>
                                <td>{data.codigo}</td>
                                <td>{data.nome}</td>
                                <td>{data.valor}</td>
                                <td>{data.descricao}</td>
                                <td>
                                    <Button color='green' onClick={setCodigo} >UPDATE</Button>
                                </td>
                                <td>
                                    <Button color='red'>DELETE</Button>
                                </td>
                            </tr>
                            )                     
                    })}
                   
                </tbody>
            </table>
        </div>
    )
}