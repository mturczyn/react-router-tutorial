import { Link, Outlet } from "react-router-dom";

const Users = ({users}: any) => (
    <>
        <h2>Users</h2>

        <ul>
            {users.map((user:any) => (
                <li key={user.id}>
                    {/* <Link to={`/users/${user.id}`}> */}
                    {/* Below we use reltive route instead of full as above */}
                    <Link to={`${user.id}`}>
                        {user.fullName}
                    </Link>
                </li>
            ))}
        </ul>

        <Outlet />
    </>
)

export default Users;