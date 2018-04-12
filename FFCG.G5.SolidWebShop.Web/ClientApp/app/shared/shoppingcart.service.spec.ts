import { ShoppingcartService } from './shoppingcart.service'
import { IProduct } from '../models/product'
import {} from 'jasmine'

describe('Shopping cart service', () => {
    let shoppingCartService

    describe(' - when adding a product', () => {
        let productToBeAdded: IProduct

        beforeEach(() => {
            shoppingCartService = new ShoppingcartService()
        })

        it('should add product to cart', () => {
            let productToBeAdded: IProduct = {
                name: 'Some product',
                price: 1000,
                description: 'A great product',
                imageUrl: 'http://someurl.com'
            }

            shoppingCartService.addToCart(productToBeAdded)

            expect(productToBeAdded).toEqual(shoppingCartService.getProducts()[0])
        })

        it('should notify listeners that a product was added', () => {
            let productsCount = 0

            shoppingCartService.cartChanged$.subscribe(numberOfProducts => {
                productsCount = numberOfProducts
            })

            let productToBeAdded: IProduct = {
                name: 'Some product',
                price: 1000,
                description: 'A great product',
                imageUrl: 'http://someurl.com'
            }

            shoppingCartService.addToCart(productToBeAdded)

            expect(productsCount).toBe(1)
        })

        it('should notify listeners when additional products have been added', () => {
            let productsCount = 0

            shoppingCartService.cartChanged$.subscribe(numberOfProducts => {
                productsCount = numberOfProducts
            })

            let productToBeAdded: IProduct = {
                name: 'Some product',
                price: 1000,
                description: 'A great product',
                imageUrl: 'http://someurl.com'
            }

            let secondProduct: IProduct = {
                name: 'Some other product',
                price: 1000,
                description: 'A great product',
                imageUrl: 'http://someurl.com'
            }

            shoppingCartService.addToCart(productToBeAdded)
            shoppingCartService.addToCart(secondProduct)

            expect(productsCount).toBe(2)
        })
    })
})
