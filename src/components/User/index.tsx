import { useParams } from "react-router";
import { users } from "../../users";

const User = () => {
    const { userId } = useParams()
    const userName = users.find(x => x.id === userId)?.fullName

    return (
        <>
            <h2>Particular User</h2>
            <p>Hello {userName}</p>
        </>
    )
}

export default User;