const contain_duplicate = (arr) => {
    const temp = new Set()
    for(let i = 0; i < arr.lenght; i++){
        if(temp.has(arr[i])){
            return true
        } else {
            temp.add(arr[i])
        }
    }
    return false
}