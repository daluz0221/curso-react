import { Box, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'


export const Product = ({producto}) => {

    const { title, id, url, marca, price, has_discount, discount, rating } = producto;

  return (
    <>
    <div className="col">
        <div className="card" style={{width: "18rem"}}>
        <img src={ url } className="card-img-top" alt={title} />
        <div className="card-body">
            <h5 className="card-title">{ marca }</h5>
            <p className="card-text">{ title }</p>
            <div>

                <span className={`span-price ${has_discount ? 'text-decoration-line-through price-low' : ''}`}>${price}  </span>
                {
                    has_discount && <span className='percent-discount'> -{discount* 100}% </span>
                }
            </div>
            {
                has_discount && <small className='new-price'>${ price - (price * discount) }</small>
            }
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={rating} precision={0.5} readOnly />
            </Box>
            <button className="btn btn-primary">Ver más</button>
        </div>
    </div>

  
    </div>

    </>
  )
}
