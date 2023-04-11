# @zh-achieve/utils
工具函数大全

## 安装
```
npm i @zh-achieve/utils
```

## 使用

```
import { deepFreeze, formatMille, IEVersion, isValidPhone, deepCopy } from "@zh-achieve/utils"
```

| 方法名 | 参数 | 作用 | 返回 |
| --- | --- | --- | --- |
| deepFreeze(obj) | obj(对象) | 递归冻结对象的属性,禁止删除属性和修改属性值 | 无|
| formatMille(num) | num(数字) | 对数字格式化
123456789->123,456,789 | 返回格式化后的数字|
| IEVersion | num(数字) | 获取ie浏览器版本 | edge、-1(不是ie), ie版本号|
| isValidPhone(phone) | phone(号码) | 验证手机号 | true/false |
| deepCopy((obj, cache = new WeakMap())) | obj(对象), cache(缓存) | 深拷贝 | 返回拷贝的对象 |