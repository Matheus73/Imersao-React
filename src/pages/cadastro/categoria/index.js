import React, { useState} from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descrição: '',
        cor:'#000',
    }
    const [categorias, setCategorias] = useState([]);
    const [values,setValues] = useState(valoresIniciais);
    
    function setValue(chave,valor){
        setValues({
            ...values,
            [chave] : valor,
        })
    }

    function handleChange(infosDoEvento){
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }
    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form  onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                
                <FormField 
                    label="Nome:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="textArea"
                    name="descrição"
                    value={values.descrição}
                    onChange={handleChange}
/>

                <FormField
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
/>


                
                <button>
                    Enviar
                </button>
            </form>  
            
            <ul>
                {categorias.map((categoria,indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>    
                            {categoria.nome} 
                        </li>
                        
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
