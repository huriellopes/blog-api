import { Category } from './../models/Category';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Category)
class CategoryRepository extends Repository<Category> {}

export default CategoryRepository;
