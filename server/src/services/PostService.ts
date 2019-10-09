import { Service } from "typedi";
import { DeleteResult } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import Post from "../entities/Post";
import { PostRepository } from "../repositories/PostRepository";

@Service()
export class PostService {
  constructor(@InjectRepository(Post) private readonly postRepository: PostRepository) {
  }

  findById(id: number, relations: string[] = []) {
    return this.postRepository.findOne({
      where: {
        id,
      },
      relations: relations,
    });
  }

  create(params: Partial<Post>): Promise<Post> {
    const u = this.postRepository.create(params);
    return this.update(u);
  }

  update(post: Post): Promise<Post> {
    return this.postRepository.save(post);
  }

  delete(post: Post): Promise<DeleteResult> {
    return this.postRepository.delete(post)
  }

  list() {
    return this.postRepository.find()
  }
}
