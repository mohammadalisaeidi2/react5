import { useState, useEffect, useRef } from "react";

export const useFetch = (url , _option) => {
    //use useRef to wrap an object/array ("_option"in this case)
    //which is a useEffect dependency
    const option = useRef(_option)

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log(option)
        const fetchData = async () =>{
            setIsPending(true)
            try {
              const res = await fetch(url)
              if(!res.ok){
                throw new Error(res.statusText)
              }
              const json = await res.json()
              setIsPending(false)
              setData(json)
              setError(null)
            }catch (err) {
                setIsPending(false)
                setError('could nodt fetch data')
                console.log(err.message)
            }

        }
        fetchData()

    } ,[url,option])
     return { data:data,isPending, error }
}