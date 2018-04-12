import { ProductService } from './product.service'
import { IProduct } from '../models/product'
import {} from 'jasmine'
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'

describe('Product service', () => {
    let productService : ProductService 

    it('should be able to retrieve products', () => {
        productService = new ProductService(null, null, null)

        let numberOfMockedProducts = 5

        productService.getProducts().subscribe(products =>
          expect(products.length).toBe(numberOfMockedProducts)
        )
    })
})
