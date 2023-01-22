const array =()=>{
    const str = prompt("unesite potrebno voce:")
    const arr = str.split(",")
    if (arr.some((el) => el === "jagoda") ){
        return `jagoda se nalazi ${arr.indexOf("jagoda") + 1} mestu`
    }else{
        arr.sort()
        arr.unshift(10)
        arr.push(100)
        return arr
    }

}
console.log(array)