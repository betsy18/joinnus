import React from 'react';
import Header from './Header';
import Carrousel from './Carrousel';
import Footer from './Footer';
import Section from './Section';
import Item from './Item';


// const data = {
//   event: ['https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab026701c2bf.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab02ef876996.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab1226d40299.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaa570bca23.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaacd17e8bad.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaf9e88145a.jpg']
// };

const App = () => (
  <div>
    <Header />
    <Carrousel />
    <Section/>
    {/* <Item/> */}
    <Footer/>
  </div>
);
export default App;
