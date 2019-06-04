import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY
} from './types' 

export function filterProductsWithQuery(fields) {
    return ({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields 
    })
}

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id 
    })
}
export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 94.58,
                category: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 36.36,
                category: [0]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 15.78,
                category: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'JavaScript Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 87.98,
                category: [0, 1]
            },
            {
                _id: 4,
                title: 'User Interface Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 29.86,
                category: [0, 2]
            },
            {
                _id: 5,
                title: 'Advanced OOP',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 62.47,
                category: [0, 6]
            },
            {
                _id: 6,
                title: 'User Experience Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 80.15,
                category: [0, 2]
            },
            {
                _id: 7,
                title: 'Linux Administration',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 87.94,
                category: [0, 3]
            },
            {
                _id: 8,
                title: 'UML Class Diagrams',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 25.54,
                category: [0, 5]
            },
            {
                _id: 9,
                title: 'UML Fundamentals',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 47.33,
                category: [0, 5]
            },
            {
                _id: 10,
                title: 'Python and Machine Learning',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 86.01,
                category: [0, 4]
            },
            {
                _id: 11,
                title: 'Ruby on Rails',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna et pharetra pharetra massa massa ultricies. Nulla porttitor massa id neque aliquam vestibulum morbi. Condimentum id venenatis a condimentum.',
                price: 34.37,
                category: [0, 6]
            }
        ]
    })
}