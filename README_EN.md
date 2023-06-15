# clipcc extension simple template

Translate by <https://fanyi.baidu.com> , some content has been modified.  

> The author is not related to ClipTeam.  
> Using this lightweight method, you can write and package extensions without the need for nodejs.  
> This lightweight packaging method is not standard, but it can still be adopted, such as <https://github.com/bddjr/clipcc-extension-restart_project> .  
> Only for scenarios with a single JavaScript file.  

***

## Implementation principle
Compress the code folder into a zip file.  

***
## Writing extensions

Just edit ./code/main.js .

Because lightweight packaging is used, this method must be used when introducing the clipcc extension API:
```javascript
const {api, type, Extension} = self["ClipCCExtension"];
```

For the usage of the clipcc extension API, please refer to <https://doc.codingclip.com/category/for-developers> .  
If you have any questions about using the extension API, please refer to other extensions yourself or consult the official personnel of Clipcc.  

***
## Modify extension ID and version number

Assuming I want to

> Change the ID of the extension to anonymous. example (if you want to submit for review, according to official standards, the extension ID should be verified through this regular expression `^([a-z_0-9]+)\.([a-z_0-9]+)$` )  
> Revised version to 1.0.0  
> Author modified to anonymous  

Then I need to modify the following files:  

This file will be used to identify extension information when the extension is uploaded to the editor, which is a crucial step.  
./code/main.js  
```javascript
// 此处填写扩展ID
const extension_id = 'anonymous.example';
// 此处填写扩展的积木栏ID
const category_id = extension_id + '.category';
```

This file is a language file for English, and when the editor cannot find the corresponding language file, it will be searched in this file.  
./code/locales/en.json  
```json
{
"anonymous.example.name": "anonymous example extension",
"anonymous.example.description": "Just a example extension.",

"anonymous.example.category": "anonymous example extension",
"anonymous.example.category.string": "String [VALUE]"
}
```

This file is a language file for Simplified Chinese.  
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
## Packaging extensions in Windows 

Please pre install [bandizip](https://en.bandisoft.com/bandizip/),  
Then run the following command using powershell in this folder:  
```
./packaging.ps1
```

If you are unable to use this script because the system prohibits it from running, please open powershell with administrator privileges and run this command to allow the execution of the PS1 script:  
```powershell
set-ExecutionPolicy RemoteSigned
```

If you have already installed Python and Bandizip, you can also use this command to package:  
```
python packaging.py
```

***
## Packaging extensions in Linux

(To be verified for feasibility)  

Please pre install zip and Python,  
Then run the following command in this folder:  
```
./packaging.sh
```

***
## Test extension

Upload your own extension on the preview site to test it:  
<https://codingclip.com/editor/stable/>  
