import Navbar from '../components/Navbar'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import RecipeReviewCard from '../components/CardMaterialUI'
import { Button } from 'react-bootstrap';
// import Card from './card'


const Channels=({location})=> {
  const [Name, setName] = useState(null);
  const [UserID, setUserID] = useState(null);
  const [Ch, setCh] = useState(null);

  const [u_id, setu_id] = useState(null)
    const [ch_name, setch_name] = useState(null)

  useEffect(() => {
    const { name, user_id } = queryString.parse(location.search);
    setName(name);
    setUserID(user_id);

    axios
      .get('http://localhost:4000/home')
      .then((res) => {
        setCh(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[location]);

  const subscribe=()=>{
    axios.post('http://localhost:4000/subs',{
        u_id:UserID,
        // ch_name:channel.ch_name,
      }).then((response)=>{
        console.log(response);
  
      })
      alert("You are successfully subscribed!")
  }

    return (
        <div>
          <Navbar />
          <h1>I am Channels</h1>

            <div className='Music-container'>
      <div style={{ display: 'flex' }}>
        {/* <div style={{ flex: 1, width: '10%' }}>
          <SideNavBar Name={Name} UserID={UserID} />
        </div>
        <br /> */}

        <div style={{ marginLeft: '10%' }}>
          <br />
          <Row>
            {Ch ? (
              Ch.map((channel) => (
                <Col key={channel.M_ID} sm>
                  {' '}
                  
                  <RecipeReviewCard
                    key={channel.ch_id}
                    Name={channel.ch_name}
                    Chname={channel.ch_name}
                    Likes={null}
                    Dislikes={null}
                    Date={null}
                    
                  />{' '}
                  
                  <br />
                  <input type="button" onClick={subscribe} ></input>
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
                <h1>Loading</h1>
              </div>
            )}
          </Row>
        </div>
      </div>
    </div>

          </div>
    )
}

export default Channels


