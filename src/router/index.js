import Login from "../components/Login";
import NotFound from "../components/NotFound";
import Layout from "../layout";
import User from "../pages/User";
import Dashboard from "@pages/Dashboard";
import {DashboardOutlined, TeamOutlined} from "@ant-design/icons"

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
        component: Dashboard,
        icon: DashboardOutlined
    },
    {
        name: "权限管理",
        path: "/admin/user",
        icon: TeamOutlined,
        children: [
            {
                name: "用户管理",
                path: "/admin/user/manager",
                component: User,
                icon: TeamOutlined
            }
        ]
    },

]

