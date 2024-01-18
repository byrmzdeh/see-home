import React, { useContext } from 'react'
import './style.scss'
import { BasketContext } from '../../context/BasketContext'
const Basket = () => {
    const { basket , increaseCount , decreaseCount} = useContext(BasketContext)
    return (
        <div className='basket'>
            <table border={1}>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Delete</th>
                </tr>
                {basket.map(item => (
                    <tr>
                        <td><img width={110} src={item.image} alt="" /></td>
                        <td>{item.name}</td>
                        <td>$ {item.price*item.count}</td>
                        <td>
                        <i class="fa-solid fa-caret-up" onClick={()=>increaseCount(item)}></i>
                        <h2>{item.count}</h2>
                        <i class="fa-solid fa-caret-down" onClick={()=>decreaseCount(item)}></i>
                        </td>
                        <td><i class="remove fa-solid fa-trash-can"></i></td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default Basket