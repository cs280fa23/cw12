import { PostWithUserData, fetchPosts } from "@/lib/api";
import Post from "./post";
import { useEffect, useState } from "react";
import { deletePost } from "@/lib/api";

const Posts = () => {
  const [posts, setPosts] = useState<PostWithUserData[]>([]);

  const loadPosts = async () => {
    const fetchedPosts = await fetchPosts();
    setPosts(fetchedPosts);
  };

  const handleDelete = async (postId: string) => {
    await deletePost(postId);
    setPosts(posts.filter((post: PostWithUserData) => post.id !== postId));
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="">
      {posts.map((post) => (
        <Post post={post} key={post.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Posts;
