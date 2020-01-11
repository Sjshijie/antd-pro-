# 前端根据后端渲染列表

在model里新建menu.js写对应代码
在BasicLayout.jsx 的menuDataRender里 返回菜单数组
菜单数组要求与conifg/config.js里的路由配置一一关联

类似于：[
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
不用写component
antd pro 会帮你映射对应组件

