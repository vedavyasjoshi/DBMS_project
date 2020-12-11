import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function Card(props) {
    return (
        <div>
          <Navbar />
          <h1 className="text-center text-danger text-capitallize my-5"> {props.name}</h1>
          <div className="container">
  <div className="row">
  <div className="col-sm"><div class="card">

  {/* <img class="card-img-top" src="https://picsum.photos/200/301" alt="Card image cap"height="300px" /> */}
  <div class="card-body">
    <h5 class="card-title">{props.chname}</h5>
    <h5 class="card-title">{props.likes}</h5>
    <h5 class="card-title">{props.dislikes}</h5>
    <h5 class="card-title">{props.date}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Subscribe</a>
  </div>
</div></div>
    {/* <div className="col-sm"><div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/302" alt="Card image cap"height="300px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card">
  <img class="card-img-top" src="https://picsum.photos/200/303" alt="Card image cap"height="300px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div> */}
  </div>
</div>
        </div>
    )
}

export default Card
