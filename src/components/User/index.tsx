import { Outlet, useParams } from "react-router";
import { users } from "../../users";
import { Link, NavLink } from "react-router-dom";

const User = ({onRemoveUser}: any) => {
    const { userId } = useParams()
    const userName = users.find(x => x.id === userId)?.fullName
    const style = ({ isActive }: any) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        marginRight: '5px'
      });
    return (
        <>
            <h2>User: {userName} (ID: {userId})</h2>
            
            <button type="button" onClick={() => onRemoveUser(userId)}>Remove</button>

            <Link to="/users">Back to Users</Link>

            <nav>
                <NavLink style={style} to="profile">Profile</NavLink>
                <NavLink style={style} to="account">Account</NavLink>
            </nav>

            <Outlet/>
        </>
    )
}

export default User;