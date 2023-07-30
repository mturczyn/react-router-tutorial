import { useState } from 'react';
import './App.css';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import { users as initialUsers } from './users';
import User from './components/User';

function App() {
  const [users, setUsers] = useState(initialUsers)
  const navigate = useNavigate()

  const handleRemoveUser = (userId: any) => {
    setUsers(state => state.filter(user => user.id !== userId));
    navigate('/users')
  }

  return (
    <>
      <h1>React Router</h1>

      <NavigationBar />

      {/* This is not allowed in React Route as descendants
      of Routes has to be either Fragment or Route */}
      {/* <Routes>
        <Layout>
          <Route path="home" element={<Home/>}/>
          <Route path="users" element={<Users/>}/>
        </Layout>
      </Routes> */}
      {/* Below approach is a way to achieve the above, but in Layout components
      we need to use Outlet instead of children */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="users" element={<Users users={users}/>}>
            <Route path=":userId" element={<User onRemoveUser={handleRemoveUser}/>}/>
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </>
  )
}

function NavigationBar() {
  const style = ({ isActive }: any) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    marginRight: '5px'
  });

  return (
    <nav style={{
      borderBottom: 'solid 1px',
      paddingBottom: '1rem',
    }}>
      <NavLink style={style} to="/home">Home</NavLink>
      <NavLink style={style} to="/users">Users</NavLink>
    </nav>
  );
}

export default App;
