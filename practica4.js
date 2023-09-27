
const miInformacionPersonal = {
    nombre: "Ana Rodríguez Bello",
    edad: 20,
    contacto: {
      correo: "cdmx2111@amerike.edu.mx",
      telefono: "55-65-38-60-14",
    },
  };
  
 
  const pasatiempos = ["Leer", "Escuchar múisca", "Jugar", "Ir al gym", "Ver contenido en Youtube o Twitch", "Ver mis redes sociales", "Cantar", "Salir a pasear"];
  
  
  const libro1 = {
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    genero: "Ficción, Suspenso y Thriller",
    añoPublicacion: 2002,
    fichaBibliografica: function() {
      console.log(`"${this.titulo}" - ${this.autor}, ${this.añoPublicacion}`);
    },
  };
  
  const libro2 = {
    titulo: "The Outsiders",
    autor: "Susan Eloise Hinton",
    genero: "Novela, Ficción adulto joven, Drama y Novela de aprendizaje",
    añoPublicacion: 1967,
    fichaBibliografica: function() {
      console.log(`"${this.titulo}" - ${this.autor}, ${this.añoPublicacion}`);
    },
  };
  
  const libro3 = {
    titulo: "Nosotros en la luna",
    autor: "Alice Kellen",
    genero: "Novela rosa y Ficción",
    añoPublicacion: 2015,
    fichaBibliografica: function() {
      console.log(`"${this.titulo}" - ${this.autor}, ${this.añoPublicacion}`);
    },
  };
  
  
  const miObjeto = {
    informacionPersonal: miInformacionPersonal,
    pasatiempos: pasatiempos,
    librosFavoritos: [libro1, libro2, libro3],
    booleano: true,
    funcionEjemplo: function() {
      console.log("¡Me gusta leer!");
    },
  };
  
  console.log(miObjeto.informacionPersonal.nombre);
  console.log(miObjeto.pasatiempos[0]);
  miObjeto.librosFavoritos[0].fichaBibliografica();
  miObjeto.funcionEjemplo();
  