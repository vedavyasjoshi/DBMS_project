import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import RecipeReviewCard from '../components/CardMaterialUI'
// import Card from './card'


const Movies=({location})=> {
  const [Movie, setMovie] = useState(null);
  useEffect(() => {
   

    axios
      .get('http://localhost:4000/movies')
      .then((res) => {
        setMovie(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[location]);

    return (
        <div>
          <Navbar />
          <h1>I am Movies</h1>
            <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br /> */}

        <div styleMovie={{marginLeft: '10%' }}>
          <br />
          <Row>
            {Movie ? (
              Movie.map((movie) => (
                <Col key={movie.M_ID} sm>
                  {' '}
                  <RecipeReviewCard
                    key={movie.m_id}
                    Name={movie.m_name}
                    Chname={movie.ch_name}
                    Likes={movie.m_likes}
                    Dislikes={movie.m_dislikes}
                    Date={movie.m_date}
                    
                  />{' '}
                  <br />
                </Col>
              ))
            ) : (
              <div>
                {/* <Spinner
                  animation='border'
                  style={{ marginLeft: 750 }}
                  role='status'
                >
                  <span className='sr-only'>Loading...</span>
                </Spinner> */}
                <h1>loading</h1>
              </div>
            )}
          </Row>
        </div>
      </div>
    </div>

          </div>
    )
}

export default Movies


