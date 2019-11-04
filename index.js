const _=require("lodash");

const Chunk=function(array=[],size=1){
   return _.chunk(array,size)

}

module.exports=Chunk;