import React from 'react';
import Menu from './components/menu/index'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
    return (
        <div style={{ background: "#141414"  }}>
        <Menu />

        <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Jovens que queriam ser os donos do mundo mas acabaram descobrindo quem é o verdadeiro dono do mundo e decidem empunhar a espada em seu nome."}
        />

        <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />

        <Carousel
        category={dadosIniciais.categorias[1]}
        />

        <Carousel
        category={dadosIniciais.categorias[2]}
        />      

        <Carousel
        category={dadosIniciais.categorias[3]}
        />      

        <Carousel
        category={dadosIniciais.categorias[4]}
        />      

        <Carousel
        category={dadosIniciais.categorias[5]}
        />      

        <Footer />
        </div>

    );

}

export default App;
