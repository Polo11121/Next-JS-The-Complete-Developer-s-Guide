import { PostsList, TopicsList } from "@/components";
import { CreateTopicForm } from "@/components/forms";
import { fetchTopPosts } from "@/db/queries";
import { Divider } from "@nextui-org/react";

const HomePage = () => {
  const fetchDataHandler = () => fetchTopPosts();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostsList onFetchData={fetchDataHandler} />
      </div>
      <div className="border shadow py-3 px-2">
        <CreateTopicForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicsList />
      </div>
    </div>
  );
};

export default HomePage;
