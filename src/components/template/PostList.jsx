import { useQuery } from "@tanstack/react-query"
import { getPosts } from "services/user"
import { e2p } from "src/utils/number";
//__________________________________________________________________________
function PostList() {
    //------------------------data---------------------------------
    const baseURL = import.meta.env.VITE_BASE_URL;
    const { data, isLoading} = useQuery(["my-post-list"], getPosts)
    console.log(data)
    //------------------------jsx----------------------------------
  return (
    <div className="w-full">
        <h3 className=" text-2xl font-bold my-5 border-b-4 border-b-[#a62626] py-2">لیست آگهی ها</h3>
        {!isLoading && <div className=" flex flex-col">
            {data?.data.posts.map((i) =><div key={i._id} className=" w-full h-36 flex items-center justify-between sm:p-3 p-1 border my-2 rounded-lg">
                <div className="flex h-full items-center justify-center">
                    <img src={`${baseURL}${i.images[0]}`} className="h-28 w-28 ml-2" />
                    <div>
                        <p>{i.options.title}</p>
                        <span className="text-sm text-zinc-400">{i.options.content.substring(0,25)}...</span>
                    </div>
                </div>
                <div className=" flex flex-col items-end">
                    <p>{new Date(i.createdAt).toLocaleDateString("fa-IR")}</p>
                    <span className="text-sm text-zinc-400">{e2p(i.amount.toLocaleString())} تومان</span>
                </div>
            </div>)}
        </div>}
    </div>
  )
}

export default PostList