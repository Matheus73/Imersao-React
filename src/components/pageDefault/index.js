import React from 'react';
import Footer from '../Footer';
import Menu from '../menu';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex:1;
    padding-top: 50px;
    padding-left: 5%:
    padding-rigth: 5%;
`;
function PageDefault({children}) {
    return (
        <>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </>
    );

}

export default PageDefault;
