import router from "./router";

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requireAuth)) {
        const token = localStorage.getItem("token")
        console.log("-----------" + token)
        if (token) {
            // 判断当前的token是否存在，登录存入的token
            if (to.path === '/login') {

            } else {
                next()
            }
        } else {
            next({
                path: '/login'
            })
        }
    }else {
        next()


    }
})