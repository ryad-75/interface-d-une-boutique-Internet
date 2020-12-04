import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Passer la commande")
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 4.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("de-DE", {style: "currency", currency: "EUR"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Commande...")
        setTimeout(() => {
            console.log("Commande passée!")
            setButtonText("Passer la commande")
            emptyCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Mes commandes</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>Vous n'avez aucun article dans votre panier.</p>
            }
        </main>
    )
}

export default Cart
