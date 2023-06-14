# clipcc extension simple template

别针扩展简单模板  

> 该模板不是 ClipTeam 官方写的，作者与 ClipTeam 无关。  
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
假设我要将扩展的ID修改为 anonymous.example ，版本修改为 1.0.0 ，作者修改为 anonymous ，那么我需要修改以下文件：  

这个文件会在扩展上传至编辑器时用于识别扩展信息，是最关键的一步。  
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

这个文件是用于英语的语言文件，当编辑器找不到对应语言的文件时，会在这个文件里查找。  
./code/locales/en.json  
```json
{
"anonymous.example.name": "anonymous example extension",
"anonymous.example.description": "Just a example extension.",

"anonymous.example.category": "anonymous example extension"
}
```

这个文件是用于简体中文的语言文件。  
./code/locales/zh-cn.json  
```json
{
"anonymous.example.name": "匿名示范扩展",
"anonymous.example.description": "只是一个示范扩展。",

"anonymous.example.category": "匿名示范扩展"
}
```

这个文件是在Windows操作系统中用来打包为扩展的脚本。  
packaging.bat
```
bandizip a anonymous.example@1.0.0.ccx ./code
```

这个文件是在Linux操作系统中用来打包为扩展的脚本。  
packaging.sh
```
zip -q -r anonymous.example@1.0.0.ccx ./code
```

***
## 在Windows操作系统打包扩展
请预先安装 [bandizip](https://www.bandisoft.com/bandizip/) ，再在这个文件夹下使用 powershell 运行如下命令：  
```
./packaging.bat
```

或使用 cmd 运行如下命令：  
```
packaging.bat
```

***
## 在Linux操作系统打包扩展
（待验证可行性）  
请预先安装 zip 程序（多数Linux操作系统预装了该程序，但部分纯净镜像内可能不含），  
再在这个文件夹下运行如下命令：  
```
./packaging.sh
```

***
## 测试扩展
在预览站上传自己的扩展（不会提交扩展审核），以测试自己的扩展：  
<https://codingclip.com/editor/stable/>  
