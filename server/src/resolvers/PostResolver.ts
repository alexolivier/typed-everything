import { Arg, Mutation, Query, Resolver, ResolverInterface } from "type-graphql";
import Post from "../entities/Post";
import PostInput from "../inputs/PostInput";
import { PostService } from "../services/PostService";

@Resolver(of => Post)
class PostResolver implements ResolverInterface<Post> {
  constructor(
    private readonly postService: PostService,
  ) { }

  @Query(returns => [Post])
  async posts() {
    return this.postService.list();
  }

  @Query(returns => Post, { nullable: true })
  async post(@Arg("id") id: number): Promise<Post | undefined> {
    return this.postService.findById(id);
  }

  @Mutation(type=>Post)
  async createPost(@Arg("data") data: PostInput): Promise<Post> {
    return this.postService.create(data)
  }

}

export default PostResolver;
