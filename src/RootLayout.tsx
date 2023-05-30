import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Loading } from "./Loading.tsx";

export function RootLayout() {
    return (
        <div style={{ maxWidth: "fit-content" }}>
            <nav style={{ maxWidth: "fit-content" }}>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/office">Office</NavLink>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    );
}
