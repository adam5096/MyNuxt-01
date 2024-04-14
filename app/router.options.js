// 自定義路由設定
const customRoutes = [
    {
        path: "/xxx",
        name: "xxx",
        component: () => import("@/pages/users/index.vue")
    },
    {
        path: "/yyy",
        name: "yyy",
        component: () => import("@/pages/users/create-or-edit.vue")
    },
    {
        path: "/zzz",
        redirect:'/users'
    },
]

export default {
    routes: (_routes) => _routes.concat(customRoutes)
}