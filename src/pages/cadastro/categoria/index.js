import React from 'react';
import PageDefault from '../../../components/pageDefault';
import {Link} from 'react-router-dom';


function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastro de Categoria</h1>
            <form>
                <label>
                    Nome da categoria:
                    <input type="text"/>
                </label>
                <button>
                    Enviar
                </button>
            </form>    

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
