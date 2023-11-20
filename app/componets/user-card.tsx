"use client"

import Link from "next/link"
import { Data } from "../types"

 

const UserCard = ({intialData}:any) => {
  return (
    <div className="h-[200px] w-[200px] shadow-lg hover:scale-100">
      <Link href={`/users/${intialData.id}`}>  <p>{intialData.name}</p></Link>

    </div>
  )
}

export default UserCard