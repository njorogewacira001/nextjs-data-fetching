'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){

    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();

    console.log(searchParams.get('search'), searchParams.get('ramdomvalue=abcde'));

    return <div>
        <h1>This is cart component</h1>
    </div>
}