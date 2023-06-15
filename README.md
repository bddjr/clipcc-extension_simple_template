# clipcc extension simple template

别针扩展简单模板  

> 该作者与 ClipTeam 无关。  
> 使用这个轻量级的方法，无需 nodejs 就能编写并打包扩展。  
> 这种轻量级的打包方式不是标准的，但仍然可以被采纳，例如 <https://github.com/bddjr/clipcc-extension-restart_project> 。  
> 仅用于单个 javascript 文件的场景。  

***
## 编写扩展
编辑文件 ./code/main.js 即可。  
因为使用的是轻量级的打包方式，所以引入clipcc扩展api时必须使用这个方法：
```javascript
const {api, type, Extension} = self["ClipCCExtension"];
```

有关clipcc扩展api的使用方式请参考 <https://doc.codingclip.com/zh-cn/category/for-developers> 。  
若有扩展api使用的疑问，请自行参考其它扩展，或者到clipcc官方群聊询问。  

***
## 修改扩展ID与版本号
假设我要  
> 将扩展的ID修改为 anonymous.example （如果你要提交审核，按照官方标准，扩展ID应当通过这个正则表达式验证 `^([a-z_0-9]+)\.([a-z_0-9]+)$` ）   
> 版本修改为 1.0.0  
> 作者修改为 anonymous  


那么我需要修改以下文件：  

这个文件会在扩展上传至编辑器时用于识别扩展信息，是很关键的一步。  
./code/info.json  
```json
{
    "id": "anonymous.example",
    "author": "anonymous",
    "version": "1.0.0",
    "icon": "assets/icon.webp",
    "inset_icon": "assets/inset_icon.svg",
    "api": 1
}
```

这个文件是 javascript 程序，也是很关键的一步。  
./code/main.js  
```javascript
// 此处填写扩展ID
const extension_id = 'anonymous.example';
// 此处填写扩展的积木栏ID
const category_id = extension_id + '.category';
```

这个文件是用于英语的语言文件，当编辑器找不到对应语言的文件时，会在这个文件里查找。  
./code/locales/en.json  
```json
{
"anonymous.example.name": "anonymous example extension",
"anonymous.example.description": "Just a example extension.",

"anonymous.example.category": "anonymous example extension",
"anonymous.example.category.string": "String [VALUE]"
}
```

这个文件是用于简体中文的语言文件。  
./code/locales/zh-cn.json  
```json
{
"anonymous.example.name": "匿名示范扩展",
"anonymous.example.description": "只是一个示范扩展。",

"anonymous.example.category": "匿名示范扩展",
"anonymous.example.category.string": "字符串 [VALUE]"
}
```

***
## 在 Windows 操作系统打包扩展
请预先安装 [bandizip](https://www.bandisoft.com/bandizip/) ，  
再在这个文件夹下使用 powershell 运行如下命令：  
```
./packaging.ps1
```

如果你因为系统禁止运行此脚本而无法使用，请以管理员权限打开 powershell ，然后运行这个命令以允许执行ps1脚本：
```powershell
set-ExecutionPolicy RemoteSigned
```

如果你已经安装了 python 与 bandizip ，那么也可以使用这个命令打包：
```
python packaging.py
```

***
## 在 Linux 操作系统打包扩展
（待验证可行性）  
请预先安装 zip 和 python ，  
再在这个文件夹下运行如下命令：  
```
./packaging.sh
```

***
## 测试扩展
在预览站上传自己的扩展（不提交扩展审核），以测试自己的扩展：  
<https://codingclip.com/editor/stable/>  
