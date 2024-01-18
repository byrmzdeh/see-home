import React from 'react'
import BasketProvider from '../BasketContext'
import WishlistProvider from '../WishlistContext'

const MainProvider = ({ children }) => {
    return (
        <BasketProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </BasketProvider>
    )
}

export default MainProvider