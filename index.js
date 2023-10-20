//EXERCICES NO 1

class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
//get props
  get proprietati() {
    return `Masina[marca=${this.marca}, model=${this.model}, culoare=${this.culoare}, kilometraj=${this.kilometraj}]`;
  }
}

function main() {
  const masina1 = new Masina("VOLVO", "XC-60", "Negru", 234000);
  const masina2 = new Masina("Mazda", "CX-5", "Verde", 111000);
  const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", 20000);

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}

main();
console.log(".....................");

//EXERCICES NO 2

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj) {
    super(marca, model, culoare, kilometraj);
  }

  participaLaCampionat(pozitiaInCampionat) {
    if (pozitiaInCampionat > 0) {
      console.log(`Am castigat locul ${pozitiaInCampionat}`);
    } else {
      console.log("Nu am castigat niciun premiu");
    }
  }
}

function main2() {
  const masina1 = new MasinaDeCurse("Toyota", "Turbo", "Rosu", 100000);
  const masina2 = new MasinaDeCurse("Ferrari", "SuperFast", "Albastru", 80000);

  masina1.participaLaCampionat(2);
  masina2.participaLaCampionat(-1);

  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
}
main2();
console.log(".....................");
  
