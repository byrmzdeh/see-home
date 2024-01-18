import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import './style.scss'
import { BasketContext } from '../../context/BasketContext'

const Wishlist = () => {
    const { wishlist } = useContext(WishlistContext)
    const {addBasket} = useContext(BasketContext)
    return (
        <div className='wishlist'>
            {wishlist.map(item => (
                <div className="card">
                    <img width={350} height={400} src={item.image} alt="" />
                    <h2>{item.name}</h2>
                    <h3>$ {item.price}</h3>
                    <button onClick={()=>addBasket(item)}>Cart</button>
                </div>
            ))}
        </div>
    )
}

export default Wishlist