
// const reversar = (arr: (string | number)[]): (string | number)[] => {
//     return arr.reverse()
// }

// const arrExample = [1, 2, 3]
// console.log(reversar(arrExample))

// function reversarGenerico<T>(arr: T[]): T[] {

//     return arr.reverse()
// }


class ArrayOfNumbers {
    constructor(public collection: number[]) { }

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) { }

    get(index: number): string {
        return this.collection[index];
    }
}


// * Genericos "T" se adapta a lo que sea que le mandemos y la funcion "get" tiene que devolver el mismo valor de "T"
class ArrayOfAnything<T> {
    constructor(public collection: T[]) { }

    // get(index: number): T { 
    //     let arr: T[] = [2, 3, 4] //!  << ERROR
    //     return arr[2];
    // }

    get(index: number): T {
        return this.collection[index];
    }
}

//* Aca le pasamos el tipo de dato que queremos que sea "T"
const palabras = new ArrayOfAnything<string>(['qwe', 'tqw', 'qwe'])
const numeros = new ArrayOfAnything<number>([1, 2, 3])


// qwe