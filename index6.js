// 订阅器模型
var Dep={
    
    clientList:{},
    listen:function(key,fn){   
        
        (this.clientList[key] || (this.clientList[key]=[])).push(fn)
    },
    trigger:function(){   
        let key=Array.prototype.shift.call(arguments);
        let fns=this.clientList[key];
        if(!fns || fns.length===0){
            return;
        }
        for(let i=0,fn;fn=fns[i++];){
            fn.apply(this,arguments)
        }
    },
}
// 劫持方法
var dataHijack=function ({data,tag,datakey,selector}){
    var value='',
        el=document.querySelector(selector);
    // 数据劫持
    Object.defineProperty(data,datakey,{
        get:function () {
            console.log('拿到数据')
            return value;

        },
        set:function (vewValue){
            console.log('设置数据');
            value=vewValue;
            Dep.trigger(tag,vewValue)
        }
    })
    // 绑定观察者
    Dep.listen(tag,function(text){
        el.innerHTML=text;
    })
}
