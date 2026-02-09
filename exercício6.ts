function retornarElemento<T>(array:T[],index:number):T{
    return array[index]
}

console.log(retornarElemento([10, 20, 30], 1))
console.log(retornarElemento(["a", "b", "c"], 0))

