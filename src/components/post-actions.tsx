import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

const PostActions = ({
  postId,
  handleDelete,
}: {
  postId: string;
  handleDelete: (id: string) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <DotsHorizontalIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit post</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDelete(postId)}>
          Delete post
        </DropdownMenuItem>
        <DropdownMenuItem>Copy link to post</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500">
          Report post
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostActions;
