import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Sukhwinder-i0')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
        
    //   })
    // }, [])
    


  return (

    <div className='flex flex-col items-center justify-center m-4  text-teal-200 p-4 text-lg' >Github Username: {data.login} 
    <p>Twitter Username: {data.twitter_username}</p>
    <p>Public Repositories : {data.public_repos}</p>
    <img className='m-6 rounded-full' src={data.avatar_url} alt='Git Pic' width={300} />
    </div>
 
  )
}

export default Github


export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Sukhwinder-i0')
   return response.json()
}

// for Loader