const kaikeba = {
    info:{name : '开课吧',desc:'开课吧真不错'},
    get name(){
        return this.info.name
    },
    set name(val){
        console.log('new name is '+ val)
        this.info.name = val + 'ggg'
    }
}

// 使复杂的过程进行封装，使其优雅起来
// kaikeba.info.name => kaikeba.name
console.log(kaikeba.name)
kaikeba.name = 'kaikeba'
console.log(kaikeba.name)