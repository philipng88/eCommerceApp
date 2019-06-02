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
                orderDate: 'Wed May 01 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },
            {
                _id: 1,
                total: 48.79,
                orderNumber: 4229943417,
                orderDate: 'Fri May 31 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },
            {
                _id: 2,
                total: 30.35,
                orderNumber: 453248144,
                orderDate: 'Tue Feb 05 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },
            {
                _id: 3,
                total: 57.12,
                orderNumber: 1890130637,
                orderDate: 'Wed Jul 04 2018',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },{
                _id: 4,
                total: 63.21,
                orderNumber: 3203979621,
                orderDate: 'Thu Mar 14 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },
            {
                _id: 5,
                total: 62.83,
                orderNumber: 441711208,
                orderDate: 'Thu May 23 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },{
                _id: 6,
                total: 17.90,
                orderNumber: 2303210680,
                orderDate: 'Tue Jan 22 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            },
            {
                _id: 7,
                total: 46.01,
                orderNumber: 4169299892,
                orderDate: 'Sat Jun 01 2019',
                creditCard: '1094',
                user: {
                    name: 'John Doe',
                    shippingAddress: '742 Evergreen Terrace'
                }
            }
        ]
    })
}