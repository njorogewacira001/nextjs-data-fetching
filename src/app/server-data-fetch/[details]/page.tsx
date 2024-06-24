// page.tsx
interface Params {
    userId: string;
}

async function fetchUserDetails(currentUserId: string) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result;
    } catch (e) {
        throw new Error('Failed to fetch user details');
    }
}

interface UserDetailsProps {
    params: Params;
}

export default async function UserDetails({ params }: UserDetailsProps) {
    const { userId } = params;

    if (!userId) {
        return <div>Error: Missing user ID</div>;
    }

    try {
        const userDetails = await fetchUserDetails(userId);

        return (
            <div>
                <h1>This is user details page</h1>
                <p>{userDetails?.firstName} {userDetails?.lastName}</p>
                <p>{userDetails?.age}</p>
                <p>{userDetails?.email}</p>
                <p>{userDetails?.phone}</p>
                <p>{userDetails?.birthDate}</p>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error: Failed to load user details</div>;
    }
}
