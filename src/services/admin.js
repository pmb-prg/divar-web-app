import api from "src/configs/api";

const createCategory = (data) => api.post("category", data)

const getAllCategory = async () => {
    try{
        const res = await api.get("category")
        return {res}
    }catch (error){
        return(error)
    }
}

const removeCategory = async (id) => {
    try{
        const res = await api.delete(`category/${id}`)
        return res
    } catch (error) {
        return (error)
    }
} 


export { createCategory, getAllCategory, removeCategory };