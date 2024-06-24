import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

async function fetchListOfUsers() {
    try {
        const apiResponse = await fetch("https://dummyjson.com/users");
        const result = await apiResponse.json();
        return result.users;
    } catch (error) {
        throw new Error('Failed to fetch list of users');
    }
}

export default async function ServerSideDataFetching() {
    
    const listOfUsers = await fetchListOfUsers();
    
    return (
        <div>
            <h1>Server Side Data Fetching</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                        listOfUsers.map((user: { id: Key | null | undefined; 
                            firstName: string | number | bigint | boolean | ReactElement<any, 
                            string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => 
                        <li className="mt-5 cursor-pointer">
                            <Link href={'/server-data-fetch${user.id}'}>{user.firstName}</Link>
                        </li>
                        ) 
                        : null
                }
            </ul>
        </div>
    );
}
