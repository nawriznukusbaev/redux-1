export const add=(val)=>{
    return {
        type:'ADD',
        value:val
    }
}
export const change=(val,key)=>{
    console.log(val,key);
    return {
        type:'CHANGE',
        value:val,
        index:key
    }
}
export const remove=(key)=>{
    return {
        type:'DELETE',
        index:key
    }
}

