import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'

const Detail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    fetch("http://localhost:9000/"+id)
        .then(res => res.json())
        .then((api) => setDetail(api))

    return (
        <div className='detail'>
            <img width={400} src={detail.image} alt="" />
            <div className="write">
                <h2>Name: {detail.name}</h2>
                <p>DEScription:{detail.desc}</p>
                <h3>Price: $ {detail.price}</h3>
                <h3>Value: {detail.value}</h3>

            </div>

        </div>
    )
}

export default Detail