import { 
    Controller, 
    Get, 
    Param 
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    
    constructor(private readonly productsService: ProductsService){}
    
    @Get()
    getIndex(){
        return this.productsService.findAll();
    }
    
    @Get(':category')
    getOne(@Param('category') category: string){
        return this.productsService.getProductByCategory(category);
    }

}
