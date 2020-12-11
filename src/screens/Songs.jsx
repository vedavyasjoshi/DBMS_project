import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import RecipeReviewCard from '../components/CardMaterialUI'
// import Card from './card'


const Songs=({location})=> {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Songs, setSongs] = useState(null);
  useEffect(() => {
    const { user_name, user_id } = queryString.parse(location.search);
    setName(user_name);
    setUserID(user_id);

    axios
      .get('http://localhost:4000/songs')
      .then((res) => {
        setSongs(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[location]);

    return (
        <div>
          <Navbar />
          <h1>I am Songs</h1>

            <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br /> */}

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Songs ? (
              Songs.map((song) => (
                <Col key={song.M_ID} sm>
                  {' '}
                  <RecipeReviewCard
                    key={song.s_id}
                    Name={song.s_name}
                    Chname={song.ch_name}
                    Likes={song.s_likes}
                    Dislikes={song.s_dislikes}
                    Date={song.s_date}
                    
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

export default Songs


