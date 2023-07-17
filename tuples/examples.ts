
interface IBebidas {
    color: string,
    carbonated: boolean,
    sugar: number,
    botar(): string,
    // botar(palabra: string): void;
    // botar: (palabra: string) => void
}

interface ICerveza extends IBebidas { }

const bebidas: IBebidas = {
    color: 'negro',
    carbonated: true,
    sugar: 40,
    botar() {
        return 'hola mundo'
    },
}

//* Type alias
// type TRefresco = readonly [string, boolean, number]
type TRefresco = [string, boolean, number]

const pepsi: TRefresco = ["Negro", true, 20]
const cocaCola: TRefresco = ["Negro", true, 50]
const tea: TRefresco = ["Cafe", false, 0]



interface IVehicle {
    // name: string,
    // year: Date,
    // broken: boolean,
    summary(): string,
}

const oldCivic = {
    name: 'Honda Civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return 'Hola mundo'
    },
}

const printVehicle = (vehicle: IVehicle): void => {
    console.log(vehicle.summary())
}
printVehicle(oldCivic)







// qwe