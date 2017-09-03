const compare = (sortby) =>{
    return function(a,b){
        return b[sortby] - a[sortby]
    }
}

export default compare