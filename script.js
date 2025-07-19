const cursos = [
  {"id":"niv-mate","nombre":"Nivelación en Matemáticas","ciclo":0,"prerequisitos":[]},
  {"id":"niv-lengua","nombre":"Nivelación en Lenguaje","ciclo":0,"prerequisitos":[]},
  {"id":"niv-info","nombre":"Nivelación en Informática","ciclo":0,"prerequisitos":[]},
  {"id":"funda-conta","nombre":"Fundamentos de Contabilidad","ciclo":1,"prerequisitos":[]},
  {"id":"mate1","nombre":"Matemáticas 1","ciclo":1,"prerequisitos":["niv-mate"]},
  {"id":"lengua1","nombre":"Lenguaje 1","ciclo":1,"prerequisitos":["niv-lengua"]},
  {"id":"eco-gen1","nombre":"Economía General 1","ciclo":1,"prerequisitos":["niv-mate"]},
  {"id":"mate2","nombre":"Matemáticas 2","ciclo":2,"prerequisitos":["mate1"]},
  {"id":"lengua2","nombre":"Lenguaje 2","ciclo":2,"prerequisitos":["lengua1"]},
  {"id":"eco-gen2","nombre":"Economía General 2","ciclo":2,"prerequisitos":["eco-gen1"]},
  {"id":"CCS","nombre":"Curso de bloque Ciencias Sociales","ciclo":2,"prerequisitos":[]},
  {"id":"CIQC","nombre":"Curo del bloque Introducción al quehacer científico","ciclo":2,"prerequisitos":[]},
  {"id":"micro1","nombre":"Microeconomía 1","ciclo":3,"prerequisitos":["eco-gen1","mate2"]},
  {"id":"mate3","nombre":"Matemáticas 3","ciclo":3,"prerequisitos":["mate2"]},
  {"id":"esta1","nombre":"Estadística 1","ciclo":3,"prerequisitos":["niv-info","mate1"]},
  {"id":"inv-aca","nombre":"Investigación Académica","ciclo":3,"prerequisitos":[]},
  {"id":"CPS","nombre":"Curso del bloque de Procesos Sociales","ciclo":3,"prerequisitos":["lengua2"]},
  {"id":"micro2","nombre":"Microeconomía 2","ciclo":4,"prerequisitos":["micro1"]},
  {"id":"macro1","nombre":"Macroeconomía 1","ciclo":4,"prerequisitos":["eco-gen2","micro1"]},
  {"id":"mate4","nombre":"Matemáticas 4","ciclo":4,"prerequisitos":["mate3"]},
  {"id":"esta2","nombre":"Estadística 2","ciclo":4,"prerequisitos":["esta1","mate2"]},
  {"id":"teo-inter","nombre":"Teoría del Comercio Internacional","ciclo":5,"prerequisitos":["micro2"]},
  {"id":"macro2","nombre":"Macroeconomía 2","ciclo":5,"prerequisitos":["macro1"]},
  {"id":"eva-pro","nombre":"Evaluación Privada de Proyectos","ciclo":5,"prerequisitos":["micro1","funda-conta","esta1"]},
  {"id":"esta-apli","nombre":"Estadística Aplicada","ciclo":5,"prerequisitos":["esta2"]},
  {"id":"CPC","nombre":"Curso del bloque Pensamiento Crítico","ciclo":5,"prerequisitos":[]},
  {"id":"ges-rrnn","nombre":"Gestión de los Recursos Naturales","ciclo":6,"prerequisitos":["micro1"]},
  {"id":"macro3","nombre":"Macroeconomía 3","ciclo":6,"prerequisitos":["mate4","macro2"]},
  {"id":"eco-fin","nombre":"Economía Financiera","ciclo":6,"prerequisitos":["eva-pro"]},
  {"id":"metría1","nombre":"Econometría 1","ciclo":6,"prerequisitos":["esta2","esta-apli"]},
  {"id":"CPS","nombre":"Curso del bloque de Procesos Sociales","ciclo":6,"prerequisitos":["lengua2"]},
  {"id":"his-pe","nombre":"Historia del Pensamiento Económico","ciclo":7,"prerequisitos":["teo-inter","macro3"]},
  {"id":"macro-inter","nombre":"Macroeconomía Internacional","ciclo":7,"prerequisitos":["macro2"]},
  {"id":"eco-der","nombre":"Economía y Derecho","ciclo":7,"prerequisitos":["micro2"]},
  {"id":"metría2","nombre":"Econometría 2","ciclo":7,"prerequisitos":["metría1"]},
  {"id":"orga-ind","nombre":"Organización Industrial","ciclo":8,"prerequisitos":["micro2"]},
  {"id":"poli-eco","nombre":"Política Económica","ciclo":8,"prerequisitos":["macro3"]},
  {"id":"CPC","nombre":"Curso del bloque Pensamiento Crítico","ciclo":8,"prerequisitos":[]},
  {"id":"inv-eco1","nombre":"Investigación Económica 1","ciclo":9,"prerequisitos":[]},
  {"id":"pro-soc1","nombre":"Proyección social","ciclo":9,"prerequisitos":[]},
  {"id":"etica","nombre":"Ética","ciclo":9,"prerequisitos":[]},
  {"id":"inv-eco2","nombre":"Investigación Económica 2","ciclo":10,"prerequisitos":["inv-eco1"]},
  {"id":"CDP","nombre":"Curso del bloque Desarrollo Personal","ciclo":10,"prerequisitos":[]}
];

const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.dataset.id = curso.id;
  div.dataset.prerequisitos = JSON.stringify(curso.prerequisitos);
  div.textContent = curso.nombre;

  if (curso.prerequisitos.length > 0) {
    div.classList.add("bloqueado");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("completado")) {
      div.classList.remove("completado");
      actualizarCursos();
      return;
    }

    const prereqs = JSON.parse(div.dataset.prerequisitos);
    const cumplidos = prereqs.every(pr => document.querySelector(`[data-id="${pr}"]`)?.classList.contains("completado"));

    if (!cumplidos) {
      alert("Este curso tiene prerequisitos que aún no has completado.");
      return;
    }

    div.classList.add("completado");
    actualizarCursos();
  });

  malla.appendChild(div);
});

function actualizarCursos() {
  document.querySelectorAll(".curso").forEach(div => {
    const prereqs = JSON.parse(div.dataset.prerequisitos || "[]");
    const cumplidos = prereqs.every(pr => document.querySelector(`[data-id="${pr}"]`)?.classList.contains("completado"));

    if (prereqs.length === 0 || cumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("completado");
    }
  });
}
🧼 Recuerda:
Asegúrate también de tener este estilo en tu style.css para que los cursos bloqueados se vean grisecitos:

css
Copiar
Editar
.curso.bloqueado {
  background-color: #f0f0f0;
  border-color: #cccccc;
  color: #999;
  cursor: not-allowed;
}
