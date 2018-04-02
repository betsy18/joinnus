import React from 'react';
import Header from './Header';
import Carrousel from './Carrousel';
import Footer from './Footer';
import Section from './Section';
import Item from './Item';
import Theater from './Theater';
import ContainerTheater from '../container/container-theater'


const App = ({data}) => (
  <div>
    <Header />
    <Carrousel />
    <Section/>
    {/* <Item/> */}
    <Theater/>
    <ContainerTheater data= {data}/>
    <Footer/>
  </div>
);
export default App;