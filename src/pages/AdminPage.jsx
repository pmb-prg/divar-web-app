import CategoryForm from "components/template/CategoryForm"
import CategoryList from "components/template/CategoryList"

function AdminPage() {
  return (
    <div className=" flex flex-col items-center">
      <CategoryList />
      <CategoryForm />
    </div>
  )
}

export default AdminPage