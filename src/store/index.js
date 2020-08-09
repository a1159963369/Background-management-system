import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        menuTabs: [],



        arrayData: [
            { id: 1, name: "JAY", price: 40, count: 0, max: 10, zongjia: 0, img: require('../assets/JAY.jpg') },
            { id: 2, name: "范特西", price: 120, count: 0, max: 10, zongjia: 0, img: require('../assets/范特西.jpg') },
            { id: 3, name: "八度空间", price: 120, count: 0, max: 10, zongjia: 0, img: require('../assets/八度空间.jpg') },
            { id: 4, name: "叶惠美", price: 112, count: 0, max: 10, zongjia: 0, img: require('../assets/叶惠美.jpg') },
            { id: 5, name: "七里香", price: 11, count: 0, max: 10, zongjia: 0, img: require('../assets/七里香.jpg') },
            { id: 6, name: "十一月的萧邦", price: 810, count: 0, max: 10, zongjia: 0, img: require('../assets/十一月的萧邦.jpg') },
            { id: 7, name: "依然范特西", price: 18, count: 0, max: 10, zongjia: 0, img: require('../assets/依然范特西.jpg') },
            { id: 8, name: "我很忙", price: 80, count: 0, max: 10, zongjia: 0, img: require('../assets/我很忙.jpg') },
            { id: 9, name: "魔杰座", price: 18, count: 0, max: 10, zongjia: 0, img: require('../assets/魔杰座.jpg') },
            { id: 10, name: "跨时代", price: 18, count: 0, max: 10, zongjia: 0, img: require('../assets/跨时代.jpg') },
            { id: 11, name: "惊叹号", price: 17, count: 0, max: 10, zongjia: 0, img: require('../assets/惊叹号.jpg') },
            { id: 12, name: "十二月新作", price: 10, count: 0, max: 10, zongjia: 0, img: require('../assets/十二月新作.jpg') },
            { id: 13, name: "哎哟，不错哦", price: 130, count: 0, max: 10, zongjia: 0, img: require('../assets/哎哟不错哦.jpg') },
            { id: 14, name: "周杰伦的床边故事", price: 40, count: 0, max: 10, zongjia: 0, img: require('../assets/周杰伦的床边故事.jpg') },
        ],
        GouwuChe: []

    },
    getters: {

    },
    //同步机制
    mutations: {
        
        add(state, spid) {

            let res = false

            if (state.GouwuChe.length == 0) {

            } else {
                res = state.GouwuChe.some((val) => {
                    return val.id == spid
                })
            }

            let sp = state.arrayData.filter((val, index) => {
                return spid == val.id
            })

            if (res) {

            } else {
                state.GouwuChe.push(sp[0])
                
            }
            
        },
        jia(state, id) {

            state.GouwuChe.forEach((v, i) => {
                if (i == id) {
                    if (v.count == v.max) {
                        alert('没了')
                    } else {
                        v.count++
                        v.zongjia = v.count * v.price
                    }
                }
            })
        },
        jian(state, id) {
            state.GouwuChe.forEach((v, i) => {
                if (i == id) {
                    if (v.count < 1) {
                        alert('已清空')
                    } else {
                        v.count--;
                        v.zongjia = v.count * v.price
                    }
                }
            })
        },
        addMenuTabs(state, menuitem) {

            let res = false
            res = state.menuTabs.some((val) => {
                return menuitem.title == val.title
            })

            if (state.menuTabs.length == 0) {
                state.menuTabs.push(menuitem)
            } else {
                if (res) {

                } else {
                    state.menuTabs.push(menuitem)
                }
            }
        },
        delMenuTabs(state, menuitem) {
            state.menuTabs.forEach((val, index) => {
                // console.log(val.name, menuitem.title)
                if (val.name == menuitem.title) {
                    state.menuTabs.splice(index, 1)
                }
                
            })
            // console.log(typeof state.menuTabs)
        }
    },
    actions: {

        addgold(context, id) {
            context.commit("add", id)
        },
        jiafa(context, id) {
            context.commit('jia', id)
        },
        jianfa(context, id) {
            context.commit('jian', id)
        },
        addMenuTabs(context, menuitem) {
            context.commit("addMenuTabs", menuitem)
        },
        delMenuTabs(context, menuitem) {
            context.commit("delMenuTabs", menuitem)
        }
    },
});





