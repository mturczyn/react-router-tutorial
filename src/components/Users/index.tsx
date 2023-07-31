import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = ({users}: any) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchTerm = searchParams.get('name') || ''
    const handleSearch = (event: any) => {
        const name = event.target.value
        if(name){
            setSearchParams({ name: event.target.value })
        } else {
            setSearchParams({})
        }
    }

    return (
        <>
            <h2>Users</h2>
            <label>Search users
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </label>
            <ul>
                {users
                    .filter((user: any) => {
                        return user.fullName
                            .toLowerCase()
                            .includes(searchTerm.toLocaleLowerCase())
                    })
                    .map((user:any) => (
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
}

export default Users;