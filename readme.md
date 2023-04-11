```
pnpm install // 安装所有依赖
pnpm add packageA --filter packageB  // 把packageA安装到packageB中
pnpm add packageA -r // 把packageA安装到packageB中
pnpm why packageA -r // 显示含有packageA的所有包
pnpm run build -r // 在所有包中执行build命令
pnpm store path 安装包实际存在的目录
pnpm --filter packageA publish  // 发布packageA
pnpm --filter packageA run serve  // 在packageA执行run serve命令
pnpm i eslint@latest -w // 使用-w才可以把依赖安装到根目录
pnpm remove rollup --filter packageA // 把packageA中的rollup移除
// .npmrc文件中的shamefully-hoist = true 把安装包的子依赖提升到最顶层
```


nrm use npm // 切换源

npm login // 登陆

npm publish --access publick // 发布
