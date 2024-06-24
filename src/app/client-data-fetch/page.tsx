"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientsideDataFetching(){

        const [loading, setLoading] = useState(false);
        const [users, setUsers] = useState([]);

        async function fetchListOfUsers() {
            try{
                setLoading(true);
                const apiResponse = await fetch('https//dummyjson.com/users')
                const result = await apiResponse.json();

                if(result?.users){
                    setUsers(result.users);
                    setLoading(false)

                }
               
            }catch(error){
                console.log(error);
                setUsers([]);
                    setLoading(false)
            }
            
        }

        useEffect(()=>{
            fetchListOfUsers()

        },[])

        if(loading) return <h3 className="font-extrabold text-3xl">Loading users please wait !</h3>


    return(
        <div>
            <h1>Clientside Data Fetching</h1>
            
        </div>
        );
        
};