import { useParams } from "react-router";
import { users } from "../../users";
import { Link } from "react-router-dom";

const User = ({onRemoveUser}: any) => {
    const { userId } = useParams()
    const userName = users.find(x => x.id === userId)?.fullName

    return (
        <>
            <h2>User: {userName} (ID: {userId})</h2>
            
            <button type="button" onClick={() => onRemoveUser(userId)}>Remove</button>

            <Link to="/users">Back to Users</Link>
        </>
    )
}

export default User;