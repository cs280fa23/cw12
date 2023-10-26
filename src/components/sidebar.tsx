import {
  HomeIcon,
  MagnifyingGlassIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button variant={"ghost"} size="sm">
        <HomeIcon className="w-5 h-5" />
      </Button>
      <Button variant={"ghost"} size="sm">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </Button>
      <Button size="sm">
        <PlusCircledIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Sidebar;
