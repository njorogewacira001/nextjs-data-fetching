
import { redirect } from "next/navigation";

export default function Accounts() {
 
    const userProfileInfo = null;

    if(userProfileInfo === null) redirect('cart?search=product1&ramdomvalue=abcde')

        
    return <h1>Accounts page</h1>;
}
