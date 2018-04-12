import { ProductService } from '../../shared/product.service'
import { IProduct } from '../../models/product'
import {} from 'jasmine'
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable'
import { TechComponent } from './tech.component'

describe('Tech component', () => {
    let techComponent : TechComponent 

    it('should be able to retrieve products', () => {
        let fakeProductService = new ProductService(null, null, null)
        techComponent = new TechComponent(fakeProductService, null)
        expect(techComponent.products.length).toBe(5)
    })
})
