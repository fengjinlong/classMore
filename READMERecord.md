一 normalize
二 nprogress 进度条

三 注掉
"eslint": "4.19.1",
"eslint-friendly-formatter": "4.0.1",
"eslint-loader": "2.0.0",
"eslint-plugin-vue": "4.7.1",

    node-notifier

四 暂时不用处理懒加载影响热加载的问题

五 确定是否动态渲染路由

六 左侧菜单路由meta: { title: 'Menu1111' }通过title定义名字

七 不改变左侧菜单，添加右侧路由的规则
  1 左侧一级菜单均重定向相应的第一个二级菜单的路由
  2 左侧的第一个二级菜单(也可以叫二级路由)均饮用公共CommonView组件，作为右侧子路由的容器
  3 左侧默认只渲染两级菜单
  4 左侧的二级路由对应的children里面存放右侧的子路由
  5 name无要求，但不要重复
  6 meta里面的title对应菜单名字或当前的title
  7 左侧一级菜单均引用Layout组件
  8 即使引用一个组件，路由也要确定当前的父子归属关系（针对右侧对应的左侧）
八 只添加左侧路由，且相应右侧没有路由跳转
  1 左侧一级菜单均引用Layout组件
  2 左侧一级菜单均重定向相应的第一个二级菜单的路由
九 所有路由存在hidden为true的属性，均不渲染到左侧（子路由或者白名单），也就是说，非左侧菜的单路由均要加这个属性

十 拦截器在permission里面
十一 缓存需要配置项

文件及文件夹的命名首字母不要大写

icon  https://www.iconfont.cn/collections/detail?cid=10328