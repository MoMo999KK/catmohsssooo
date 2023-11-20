
import axios from "axios"
import UserCard from "./componets/user-card";
import { Data } from "./types";
async function getData(){
  try {
    const data=await axios.get("https://jsonplaceholder.typicode.com/users")
    return data.data
    
  } catch (error) {
    
  }
}

const Home = async() => {
  const allusers=await getData()
  return (
    <div>
      {allusers.map((user:Data)=>(
        <div className="flex flex-col" key={user.id }>
          <UserCard intialData={user}/>

        </div>
      ))}
    </div>
  )
}

export default Home