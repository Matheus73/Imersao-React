import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/index';
import {BrowserRouter , Switch,Route} from "react-router-dom";
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria';
// import * as serviceWorker from './serviceWorker';

const Pagina404 = () => (<div><h1>Página 404 </h1></div>)

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro/categoria" component={CadastroCategoria}/>
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/" component={Home} exact/>
            <Route component={Pagina404} />
        </Switch>
    </BrowserRouter>,

    document.getElementById('root')
);

