import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Shop extends Component {
    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin',
                icon: <FontAwesomeIcon icon="sign-in-alt" />
            }
        ]
        this.props.setHeaderLinks(headerLinks) 
    }
    
    render() {
        return (
            <div className='shop'> 
                shop...
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { state }
}

Shop = connect(mapStateToProps, actions)(Shop) 
export default Shop;