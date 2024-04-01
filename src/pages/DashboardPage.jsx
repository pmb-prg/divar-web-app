import AddPost from "src/components/template/AddPost"
import PostList from "src/components/template/PostList"

function DashboardPage() {
  return (
    <div className=" w-full flex flex-col items-center p-4">
      <AddPost />
      <PostList />
    </div>
  )
}

export default DashboardPage