import axios from "axios"
import { Metadata } from "next";
import { useParams } from "next/navigation";
 

 

 


async function getSingl(id:string){
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.data
}

const UserDetails = async({params}:{params:{userId:string}}) => {
    const oneUser=await getSingl(params.userId)
    console.log(oneUser)
    
  return (
    <div>
        <p>this is the user profile of: {oneUser.name}</p>
    </div>
  )
}

export default UserDetails