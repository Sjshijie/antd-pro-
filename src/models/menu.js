// import { parse, stringify } from 'qs';
import { routerRedux } from 'dva/router';
const MenuList = {
    namespace: 'MenuList',
    state: {
        menu: [],
    },
    effects: {
        *getMenu(_,{ call,put }) {
            yield put({
                type:'getMenuList',
                payload:[
                    {
                        "path": "/dashboard",
                        "name": "dashboard",
                        "icon": "dashboard",
                        "children": [
                            {
                                "path": "/dashboard/analysis",
                                "name": "analysis"
                            },
                            {
                                "path": "/dashboard/monitor",
                                "name": "monitor"
                            },
                            {
                                "path": "/dashboard/workplace",
                                "name": "workplace"
                            }
                        ]
                    }
                ]
            }) 
        }
    },
    reducers: {
        getMenuList(state, { payload }) {
            return { menu: payload};
        },
    },
};
export default MenuList;
