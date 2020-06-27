let houseObj={}// 发布者
houseObj.list=[];  //缓存列表
//添加订阅者
houseObj.listen=function(fn){   
    // 订阅消息添加到缓存列表
    this.list.push(fn);
};
houseObj.trigger=function(val){   //发布
    for(let i=0,fn;fn=this.list[i++];){
        // fn.apply(this,arguments)
        fn(val)
    }
}
setTimeout(()=>{
    houseObj.trigger(60)
},3000)