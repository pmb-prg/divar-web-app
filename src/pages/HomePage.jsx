import { useQuery, useQueryClient } from "@tanstack/react-query"
import Main from "components/template/Main"
import SideBar from "components/template/SideBar"
import { getAllPosts } from "src/services/user"
import { getAllCategory } from "src/services/admin";
import { useEffect, useState } from "react";
import Loader from "src/components/modules/Loader";


function HomePage() {
  const queryClient = useQueryClient();
  const [display, setDisplay] = useState([])

  const {data, isLoading: postLoading} = useQuery(["post-list"], getAllPosts,{
    // onSuccess: () => {
    //   queryClient.invalidateQueries("profile");
    // },
    staleTime: 120 * 1000,
  })
  
  useEffect(() =>{
      setDisplay(data && data.data.posts)
}, [data])

  const {data: categories, isLoading: categoryLoading } = useQuery(["get-all-category"],getAllCategory);
  
 
  if(postLoading || categoryLoading) return <Loader />
  return (
    <div className=" flex flex-col items-center lg:flex-row lg:items-start w-full p-3">
      <SideBar data={categories} display={display} setDisplay={setDisplay} post={data} />
      <Main data={data && display} />
    </div>
  )
}

export default HomePage