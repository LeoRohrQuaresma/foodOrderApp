import React from 'react'
import { useContext } from 'react'
import styles from './MealItem.module.css'
import MealItemform from './MealItemform'
import CartContext from '../../../store/cart-context'

const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const AddToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <>
            <li className={styles.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styles.descrption}> {props.description} </div>
                    <div className={styles.price}> {price} </div>
                </div>
                <div>
                    <MealItemform onAddToCart={AddToCartHandler} />
                </div>
            </li>
        </>

    )
}

export default MealItem
