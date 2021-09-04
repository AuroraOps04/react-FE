import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Layout from "../layout";
import User from "../pages/User";
import Dashboard from "@pages/Dashboard";

export const globalRouter = [
    {
        name: "login",
        path: "/login",
        component: Login
    },
    {
        name: "NotFound",
        path: "/404",
        component: NotFound
    },
    {
        name: "Layout",
        path: "/admin",
        component: Layout
    }
]
export const adminRouter = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        component: Dashboard
    },
    {
        name: "User",
        path: "/admin/user",
        component: User
    },

]

