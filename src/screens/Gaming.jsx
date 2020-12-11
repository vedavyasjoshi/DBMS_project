import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import RecipeReviewCard from '../components/CardMaterialUI'
// import Card from './card'


const Gaming=({location})=> {
  const [Gaming, setGaming] = useState(null);
  useEffect(() => {
   

    axios
      .get('http://localhost:4000/gaming')
      .then((res) => {
        setGaming(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[location]);

    return (
        <div>
          <Navbar />
          <h1>I am Gaming</h1>

            <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br /> */}

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Gaming ? (
              Gaming.map((gaming) => (
                <Col key={gaming.M_ID} sm>
                  {' '}
                  <RecipeReviewCard
                    key={gaming.g_id}
                    Name={gaming.g_name}
                    Chname={gaming.ch_name}
                    Likes={gaming.g_likes}
                    Dislikes={gaming.g_dislikes}
                    Date={gaming.g_date}
                    
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

export default Gaming


