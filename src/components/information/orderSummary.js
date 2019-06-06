import React, { Component } from 'react'
import { UnderlinedTitle, InfoTitle } from './infoHelp'
import { connect } from 'react-redux'

class OrderSummary extends Component {
    render() {
        const { className } = this.props 
        let subtotal = 0
        let shipping = 0
        let tax = 0 
        let amountStickers = 0
        this.props.cartProducts.map(cartProduct => {
            subtotal = Math.round((subtotal + (cartProduct.quantity * cartProduct.product.price)) * 100) / 100
            amountStickers += cartProduct.quantity
            // subtotal += cartProduct.quantity * cartProduct.product.price 
        })
        return (
            <div className={`${className} order-summary`}>
                <UnderlinedTitle className='order-summary__title' title='Order Summary' />
                <InfoTitle className='order-summary__subtotal' title={`${amountStickers} stickers`} value={`$${subtotal}`} />
                <InfoTitle className='order-summary__tax-shipping' title='Taxes & Shipping' value={`$${tax + shipping}`} /> 
                <InfoTitle className='order-summary__total info-title-green' title='Total' value={`$${subtotal + tax + shipping}`} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user 
    return { cartProducts }
}
OrderSummary = connect(mapStateToProps)(OrderSummary)
export default OrderSummary