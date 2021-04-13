import React,{useState} from 'react';

export const Filter = ()=>{

    const [filter,setfilter] =useState("")
    const handleChange=(e)=>{
        setfilter(e.target.value)  
      }
    console.log("filter",filter)
    return (
        <div>
            Filter for a specific keyword
            <input onChange={handleChange} />
        </div>
    )
}