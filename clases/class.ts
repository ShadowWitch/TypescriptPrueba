class Vehiculo {
  constructor(protected color: string) {}

  public encender(): void {
    console.log("Veniculo encendido");
  }

  private arrancar(): void {
    console.log("Arrancando vehiculo");
  }

  protected acelerar(): void {
    console.log("Acelerando...");
  }
}

class Coche extends Vehiculo {
  constructor(protected numeroRuedas: number, protected color: string) {
    super("color");
  }

  verPropiedades(): void {
    this.acelerar();
    console.log(`Tengo ${this.numeroRuedas} ruedas y soy color ${this.color}`);
  }
}

const Moto = new Vehiculo("Rojo");
// console.log("COLOR >> ", Moto.color);

const Carro = new Coche(4, "Rosado");
// Carro.verPropiedades();

const tuple: readonly [string, boolean, number] = ["Juan", true, 3];
console.log("tuple > ", tuple);

// qwe
