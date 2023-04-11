```
{
  // 发布时候的项目名，必填，@xxx是代表npm Organization
  "name": "@xxx/package",
  // 发布版本，必填项
  "version": "1.0.0",
  // 项目描述信息，description是字符串，便于用户在npm上搜索到我们的项目
  "description": 'xxx',
  // 包是否是私有，true的话无法发布到npm
  private: true,
  // commonjs规范入口文件，主文件，默认值是项目根目录下的index.js
  "main": "lib/index.js",
  // es module规范入口文件
  "module": "",
  // 可以通过script直接引入的文件地址
  "unpkg": "",
  // jsdelivr cdn入口文件
  "jsdelivr": "dist/vuex.js",
  // 全局命令入口文件
  "bin": {
    "vue": "bin/vue.js"
  },
  // 声明该模块是否包含 sideEffects（副作用），从而可以为 tree-shaking 提供更多的优化空间。
  "sideEffects": false,
  // 包的关键字 用于npm搜索
  "keywords": [
    "xxx",
    "xxx"
  ],
  // homepage项目的主页地址
  "homepage": "github.com.xxx",
  // 项目问题反馈的Url或报告问题的邮箱地址,
  "bugs": {
    "email": "",
    "url": ""
  },
  //许可证
  "license": "MIT",
  //作者信息
  "author": "xxx",
  // 贡献者信息 array
  "contributors": [
    {
      "name": "",
      "email": "",
      "url": ""
    }
  ],
  // 下载依赖包所包含的文件 指定这个包被install时候有哪些文件
  // 或者说 发布package时，具体那些文件会发布上去
  "files": [
    "es",
    "lib"
  ],
  //yarn workspace monorepo
  "workspaces":[],
  //确保所有的package具有相同的版本
  "resolutions":{},
  //仓库地址
  "repository": {
    "type": "git",
    "url": "git://github.com/[name]/xxx.git" // git+https://github.com/vuejs/vue.git
  },
  //脚本
  "scripts": {
    "start": "webpack-dev-server --open 'Google Chrome'"
  },
  //发布设置
  "publishConfig": {
    //If present, will replace whatever registry is defined in the configuration
    // when the package is about to be pushed to a remote location
   "registry": "https://registry.npmjs.org/",
    //包的访问权限
    "access": "public"
  },
  // typings： TypeScript 的入口文件
  "typings": "lib/index.d.ts",
  // jsdelivr cdn公共库
  "jsdelivr":"lib/index.min.js",
  //可通过 process.env.npm_package_config_port获取到8080
  // 用于添加命令行的环境变量 可以通过输入命令npm config set来修改值
  // 设置一些用于npm包的脚本命令会用到的配置参数
  "config": {
    "port": "8080",
    "commitizen": {
        "path": "./node_modules/cz-customizable"
    }
  },
  //包的限制
  "engines": {
    "node": ">=13.14.0",
    "yarn": ">=1.22.0"
  },
  // devDependencies 和 dependencies
  //dependencies，依赖的意思，这些安装包都是程序所依赖的包,需要发布到生产环境的.
  //dev即develop，开发的意思，也就是开发环境下的依赖。,
  // devDependencies中的插件只用于开发环境，不用于生产环境
  // 而dependencies是要发布到生产环境
  "dependencies": {
  },
  "devDependencies": {
  },
  //相对依赖
  "peerDependencies": {
  },
  //>1.0.2 大于当前版本
  //
  //>=1.0.2 大于等于当前版本
  //
  //<1.0.2 小于当前版本
  //
  //<=1.0.2小于等于当前版本
  //
  //~1.0.2 不低于1.0.2，但不改变大版本号和次要版本号
  //
  //^1.0.2 不低于1.0,2, 但不改变大版本号
  //
  //1.2.x 表示1.2.3 ,1.2.4版本都支持,
}
```