import React from 'react'

const Card = (props) => {
    return (
        <div className="card row mt-2 col-sm-6 col-md-4 col-lg-3" style={{ "width": "18rem", margin: 0 }}>
            <img src="https://picsum.photos/300?grayscale" className="card-img-top" alt="..." />
            <div className="card-body ">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Card
