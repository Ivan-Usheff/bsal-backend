import { 
    Controller, 
    Get, 
    Param 
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
    
    constructor(private readonly categoryService: CategoryService){}

    
    @Get()
    getIndex(){
        return this.categoryService.findAll();
    }
    
}
