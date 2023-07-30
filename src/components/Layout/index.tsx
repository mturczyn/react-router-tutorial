import { Outlet } from "react-router";

const Layout = () => (
    <main style={{ padding: '1rem 0' }}>
        {/* This in order to render nested Routes
        inside Layout component */}
       <Outlet/>
    </main>
)

export default Layout;