import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import RecipeReviewCard from '../components/CardMaterialUI'
// import Card from './card'


const Vines=({location})=> {
  const [Vines, setVines] = useState(null);
  useEffect(() => {
   

    axios
      .get('http://localhost:4000/vines')
      .then((res) => {
        setVines(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[location]);

    return (
        <div>
          <Navbar />
            <h1> I am Vines</h1>

            <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br /> */}

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Vines ? (
              Vines.map((vines) => (
                <Col key={vines.M_ID} sm>
                  {' '}
                  <RecipeReviewCard
                    key={vines.v_id}
                    Name={vines.v_name}
                    Chname={vines.ch_name}
                    Likes={vines.v_likes}
                    Dislikes={vines.v_dislikes}
                    Date={vines.v_date}
                    
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

export default Vines


