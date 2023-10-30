// crear las clases Edificio, Piso y Departamento aquí
//este cambio es desde la nube
//este cambio es desde la pc
class Departamento {
  nombre: string;
  constructor(nom: string) {
    this.nombre = nom;
  }

  getName() {
    return this.nombre;
  }
}
class Piso {
  nombre: string;
  departamentos: Departamento[] = [];
  constructor(nom: string) {
    this.nombre = nom;
  }
  pushDepartamento(departamento: Departamento) {
    this.departamentos.push(departamento);
  }
  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }
}
class Edificio {
  pisos: Piso[] = [];
  constructor(piso: Piso[]) {
    this.pisos = piso;
  }

  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find(
      (piso) => piso.nombre == nombreDePiso
    );

    if (pisoEncontrado) {
      pisoEncontrado.pushDepartamento(departamento);
    } else {
      console.log("error");
    }
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find(
      (piso) => piso.nombre == nombreDePiso
    );

    if (pisoEncontrado) {
      return pisoEncontrado.getDepartamentos();
    } else {
      return [];
    }
  }
  getPisos() {
    return this.pisos;
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  // const nuevoDepartamento = new Departamento("dpto1");
  // const nuevoDepartamento2 = new Departamento("dpto2");
  // const nuevoDepartamento3 = new Departamento("dpto3");

  // const nuevoDepartamento4 = new Departamento("dpto4");
  // const nuevoDepartamento5 = new Departamento("dpto5");
  // const nuevoDepartamento6 = new Departamento("dpto6");
  // const nuevoDepartamento7 = new Departamento("dpto7");

  // //console.log(nuevoDepartamento.getName());

  // const nuevoPiso = new Piso("piso1");
  // const nuevoPiso2 = new Piso("piso2");

  // nuevoPiso.pushDepartamento(nuevoDepartamento);
  // nuevoPiso.pushDepartamento(nuevoDepartamento2);
  // nuevoPiso.pushDepartamento(nuevoDepartamento3);

  // nuevoPiso2.pushDepartamento(nuevoDepartamento4);
  // nuevoPiso2.pushDepartamento(nuevoDepartamento5);
  // nuevoPiso2.pushDepartamento(nuevoDepartamento6);

  // const edificio = new Edificio([nuevoPiso, nuevoPiso2]);
  // edificio.addDepartamentoToPiso("piso1", nuevoDepartamento7);
  // //console.log(nuevoPiso.getDepartamentos());
  // if (edificio.getDepartamentosByPiso("piso1") == false) {
  //   console.log("no se encontro el piso");
  // } else {
  //   console.log(edificio.getDepartamentosByPiso("piso1"));
  // }
  //console.log(edificio.getPisos());
  //console.log(nuevoPiso.getDepartamentos());
}
main();
