// 轻量级扩展编写方式，必须用这个头引入clipcc扩展api
const {api, type, Extension} = self["ClipCCExtension"];

// 此处填写扩展ID
const extension_id = 'anonymous.example';
// 此处填写扩展的积木栏ID
const category_id = extension_id + '.category';

module.exports = class extends Extension {
    onUninit(){
        api.removeCategory( category_id );
    }

    onInit(){
        api.addCategory({
            categoryId: category_id, 
            messageId: category_id,
            color: '#339900',
        });

        api.addBlock({
            opcode: `${ category_id }.string`,
            type: type.BlockType.REPORTER,
            // 此处仅演示如何使用语言文件替换里面的内容
            messageId: `${ category_id }.string`,
            categoryId: category_id,
            param: {
                VALUE: {
                    type: type.ParameterType.STRING,
                    default: 'Hello World!'
                }
            },
            function: ( args, util )=>{
                return String(args.VALUE);
            },
            // 这种情况可以将匿名函数简写为： a=> String(a.VALUE)
        });
    }
};
