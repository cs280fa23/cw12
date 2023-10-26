import { users, posts } from "@/lib/data";
import type { User, Post } from "@/lib/data";

// Mock database
const db = {
  users: [...users],
  posts: [...posts],
};

export type PostWithUserData = Post & { user?: User };

// Helper function to find a user by ID
export const findUser = async (id: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = db.users.find((user) => user.id === id);
      resolve(user);
    }, 200); // Simulate an API delay
  });
};

// Fetch all posts with user data
export const fetchPosts = async (): Promise<PostWithUserData[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const postsWithUserData = await Promise.all(
        db.posts.map(async (post) => ({
          ...post,
          user: await findUser(post.userId),
        })),
      );
      resolve(postsWithUserData);
    }, 200); // Simulate an API delay
  });
};

// Delete post by id
export const deletePost = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.posts = db.posts.filter((post) => post.id !== id);
      resolve();
    }, 200); // Simulate an API delay
  });
};
