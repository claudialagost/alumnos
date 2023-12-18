class Alumno {
    saludar() {
        console.log("saludar alumno")
    }
}

class Curso {

}

function saludar() {
    alert("hola grupo")
}
const alumnos = JSON.parse(localStorage.getItem("Alumnos 2")) || [];

function mostrarContenido(contenido) {
    //oculta todos los contenidos
    document.getElementById("contenido1").style.display = "none";
    document.getElementById("contenido2").style.display = "none";
    //muestra el contenido deseado
    document.getElementById(contenido).style.display = "block";

    // Generar reglones en la tabla
    if(contenido === "contenido 1"){
        const tablaBody = document.querySelector('#$(contenido) tbody' )
        tablaBody.innerHTML = crearFilasTabla(alumnos);
    }

}

const jose = new Alumno();

// función para agregar un nuevo alumno
const Alumnos = [];

function agregarAlumno(nombre, apellido, edad, cursos, calificaciones) {
    //paso 1: crear el alumno
    var nuevoAlumno = ( nombre; nombre, apellido; apellido, edad; edad, cursos; cursos, calificaciones; calificaciones );

    //paso2: agregar el array de alumnos
    alumnos.push(nuevoAlumno);

    //paso 3: guarda el arrayactualizado en el local storage
    localStorage.setItem("Alumnos" , JSON.stringify(Alumnos));

    //puedes hacer otras cosas con el alumno de ser necesario
    console.log("nuevo alumno agregado:" , nuevoAlumno);
}

function getLocalStorage() {
   let local =  JSON.parse(localStorage.getItem("Alumnos"));

   console.log(local[0])
}

jose.saludar()

function crearFilasTabla(datos){
    let filasHTML ='';
    for (let i = 0; i < datos.length; i++) {
        const { nombre, apellido, edad, cursos } = datos[i];
        filasHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${edad}</td>
                <td>${cursos?.join(', ') || 'Programacion'}</td>
                <td>${calificaciones?.join(', ') || 'none'}</td>
            </tr>
        `;
    }

    return filasHTML;
}