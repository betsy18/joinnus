import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Carrousel from './Carrousel';
import Footer from './Footer';
import Section from './Section';
import Item from './Item';
import Theater from './Theater';
import Toolbar from './Toolbar';
import Layout from './Layout';
// import ContainerTheater from '../container/container-theater'



// const data = {
//   event: ['https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab026701c2bf.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab02ef876996.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/14106/5ab1226d40299.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaa570bca23.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaacd17e8bad.jpg', 'https://s3-us-west-2.amazonaws.com/joinnus.com/banner/19132/5aaaf9e88145a.jpg']
// };

const App = ({ choose, seats, see_seats, zone }) => (
  <div>
    <Header />
    <Carrousel />
    <Section/>
    <Toolbar/>
    {/* <Item/> */}
    <Theater/>
    <Layout choose={choose} seats={seats} see_seats={see_seats} zone={zone} />
    {/* <ContainerTheater data= {newInfo}/> */}
    <Footer/>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  choose(id) {
    dispatch({
      type: 'CHOOSE',
      id
    })
  },
  see_seats(id) {
    dispatch({
      type: 'SEE_SEATS',
      id
    })
  }
});

const mapStateToProps = ({ seats, zone }) => ({
  seats,
  zone
});

export default connect( mapStateToProps, mapDispatchToProps )( App );

