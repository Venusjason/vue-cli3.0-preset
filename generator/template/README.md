# vue 3.0 移动端H5模板

- [x] px2rem
- [x] eslint
- [x] vue-router vuex
- [x] axios拦截
- [x] mock配置
- [x] 多环境打包配置
- [x] 打包路径包含版本号    

##### 需要修改webpack配置的 请到vue.config.js修改
### 命令
```
npm install
npm run serve
npm run buildDebug // 构建联调包
npm run buildTest  // 构建test包
npm run build      // 构建生产包

# 本机预览
npm install -g serve
serve -s dist
```

### 工程结构
```
yfe-H5
├── dist         // 编译后目录
├── node_modules // 项目依赖
├── public // 静态模板文件
├── src
│    ├── assets     // 静态文件
│    ├── components // 公用组件
│    ├── pages      // 页面
│    ├── router     // 路由
│    │  ├──  index.js    // 路由控制
│    │  ├──  routes.js   // 路由配置
│    ├── store     // vuex
│    │  ├──  index.js
│    ├── service     // api请求
│    │  ├──  index.js   // apis 定义
│    │  ├──  http.js   // axios配置
│    ├── utils     // 函数方法
│    │  ├──  index.js   // 工具类
│    │  ├──  enum.js    // 枚举
│    ├── App.vue
│    ├── main.js
│    ├── config.js  // 配置文件
├── .gitignore
├── .eslintrc.js
├── package-lock.json
├── package.json
├── vue.config.js // webpack相关构建配置
└── README.md
```

### 工程规范
 * Page 级文件大写命名, 如 `Home.vue`
 * component 文件连接符命名，如`switch-tab.vue`