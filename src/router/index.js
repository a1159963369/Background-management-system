import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
// 引入组件
// import Yue from "../views/yue.vue";
import Yi from "../views/mnme/yi.vue";
import Er from "../views/mnme/er.vue";
import San from "../views/mnme/san.vue";
import Si from "../views/mnme/si.vue";
import Wu from "../views/mnme/wu.vue";
import Liu from "../views/mnme/liu.vue";
import Qi from "../views/mnme/qi.vue";
import Lay from "../layout/index.vue";
import Shouye from "../views/yue.vue";

import jsCookies from 'js-cookies'
Vue.use(jsCookies);
const routes = [
    {
        path: "/go",
        component: Lay,
        redirect: "/yue",
        children: [
            {
                path: "/yue",
                component: Shouye,
                children: [{
                    path: "yi",
                    component: Yi
                }, {
                    path: "er",
                    component: Er
                }, {
                    path: "san",
                    component: San
                }, {
                    path: "si",
                    component: Si
                }, {
                    path: "wu",
                    component: Wu,
                    children: [
                        {
                            path: "liu",
                            component: Liu,
                        }
                    ]
                },{
                    path: "qi",
                    component: Qi,
                }
                ],
            }
        ],
    },
    {
        path: "/login",
        component: () => import('./../views/Login/index.vue'),
    }



]
var router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to, to.path)
    if (to.path.indexOf("/yue") > -1) {
        let token = jsCookies.getItem("token")
        if (token == 123) {
            console.log('跳转成功');
            next();
        } else {
            next({ path: "views/login.vue" })
            alert("登陆失败");
        }
    } else {
        next();
    }
})

export default router;


