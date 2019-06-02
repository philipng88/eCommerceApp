import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types'

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id 
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 13.84,
                orderNumber: 2192028812,
                orderDate: new Date(),
                creditCard: '-1094',
                user: {
                    name: 'Tony Stark',
                    shippingAddress: '158 Irona Grove'
                }
            },
            {
                _id: 1,
                total: 48.79,
                orderNumber: 4229943417,
                orderDate: new Date(),
                creditCard: '-3286',
                user: {
                    name: 'Steve Rogers',
                    shippingAddress: '295 Kiofu Lane'
                }
            },
            {
                _id: 2,
                total: 30.35,
                orderNumber: 453248144,
                orderDate: new Date(),
                creditCard: '-1528',
                user: {
                    name: 'Bruce Banner',
                    shippingAddress: '386 Esezup Court'
                }
            },
            {
                _id: 3,
                total: 57.12,
                orderNumber: 1890130637,
                orderDate: new Date(),
                creditCard: '-4787',
                user: {
                    name: 'Clint Barton',
                    shippingAddress: '280 Hetme Circle'
                }
            },{
                _id: 4,
                total: 63.21,
                orderNumber: 3203979621,
                orderDate: new Date(),
                creditCard: '-2632',
                user: {
                    name: 'Wanda Maximoff',
                    shippingAddress: '1540 Ivode Park'
                }
            },
            {
                _id: 5,
                total: 62.83,
                orderNumber: 441711208,
                orderDate: new Date(),
                creditCard: '-1940',
                user: {
                    name: 'Carol Danvers',
                    shippingAddress: '1769 Vebzik Heights'
                }
            },{
                _id: 6,
                total: 17.90,
                orderNumber: 2303210680,
                orderDate: new Date(),
                creditCard: '-4052',
                user: {
                    name: 'Peter Parker',
                    shippingAddress: '712 Rele Avenue'
                }
            },
            {
                _id: 7,
                total: 46.01,
                orderNumber: 4169299892,
                orderDate: new Date(),
                creditCard: '-1383',
                user: {
                    name: 'James Rhodes',
                    shippingAddress: '1341 Hehmu Lane'
                }
            }
        ]
    })
}