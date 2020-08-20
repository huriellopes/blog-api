import { Post } from './../models/Post';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Post)
class PostRepository extends Repository<Post> {}

export default PostRepository;
