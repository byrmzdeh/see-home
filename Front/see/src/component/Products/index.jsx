import React, { useContext, useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'
import { WishlistContext } from '../../context/WishlistContext'

const Products = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const [sortBy, setSortBy] = useState(null)
    const { handleWishlist, checkWishlist } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)

    useEffect(() => {
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then((api) => setData(api))

    }, [])

    function lower(data) {
        if (typeof data === 'string') {
            return data.toLowerCase()
        }
        return data
    }

    return (
        <div className='products'>
            <p className='popular'>POPULAR PRODUCTS</p>
            <h1>Our Products</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br /> nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br /> consequatur laboriosam ipsam.</p>
            <input type="text" placeholder='Search products..' value={input} onChange={(e) => setInput(e.target.value)} />
            <div className="sort">
                <button onClick={()=>setSortBy({preporty:"name", asc:true})}>A-Z</button>
                <button onClick={()=>setSortBy({preporty:"name", asc:false})}>Z-A</button>
                <button onClick={()=>setSortBy({preporty:"price", asc:true})}>ARTAN</button>
                <button onClick={()=>setSortBy({preporty:"price", asc:false})}>AZALAN</button>
                <button onClick={()=>setSortBy(null)}>Default</button>
            </div>

            <div className="cards">
                {data
                    .filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
                    .sort((a, b) => {
                        if (!sortBy) {


                        } else if (sortBy.asc) {
                            return (lower(a[sortBy.preporty]) >lower(a[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty] )> lower(a[sortBy.preporty])) ? -1 : 0)
                        } else if (sortBy.asc === false) {
                            return (lower(a[sortBy.preporty]) <lower(a[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty] )< lower(a[sortBy.preporty])) ? -1 : 0)
                        }

                    })

                    .map(item => (
                        <div className="card">
                            <img width={350} height={400} src={item.image} alt="" />
                            <h2>{item.name}</h2>
                            <div className="value">
                                <p><i class="fa-solid fa-star" ></i> {item.value}</p>
                                <i onClick={() => handleWishlist(item)} 
                                className={`heart ${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`}>
                                
                                </i>
                            </div>
                            <h2>$ {item.price}</h2>
                            <p>{item.desc}</p>
                            <div className="button">
                                <button className="cart" onClick={() => addBasket(item)}>CART</button>
                                <Link to={`/${item._id}`} > <button className="view">WIEW</button></Link>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default Products