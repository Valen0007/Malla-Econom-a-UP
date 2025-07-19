const cursosPorCiclo = {
  0: ["Nivelación en Matemáticas", "Nivelación en Informática", "Nivelación en Lenguaje"],
  1: ["Matemáticas I", "Estadística I", "Lenguaje I", "Investigación Académica"],
  2: ["Matemáticas II", "Estadística II", "Lenguaje II", "Curso 1 Procesos Sociales"],
  3: ["Matemáticas III", "Economía General I", "Microeconomía I", "Curso Ciencias Sociales", "Curso Introducción quehacer científico"],
  4: ["Matemáticas IV", "Economía General II", "Macroeconomía I", "Curso 1 Pensamiento Crítico", "Curso Desarrollo Personal"],
  // Puedes seguir agregando aquí los ciclos 5 al 10 según el flujograma.
};

const malla = document.getElementById("malla");

Object.entries(cursosPorCiclo).forEach(([ciclo, cursos]) => {
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.textContent = curso;
    div.addEventListener("click", () => {
      div.classList.toggle("completado");
    });
    malla.appendChild(div);
  });
});
