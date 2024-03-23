function verProyecto(url) {
  window.open(url, "_blank");
}

function verCodigo(repoUrl) {
  window.open(repoUrl, "_blank");
}
document.addEventListener("DOMContentLoaded", function () {
  const enlaceInicio = document.getElementById("enlaceInicio");
  const enlaceSobreMi = document.getElementById("enlaceSobreMi");
  const enlaceProyectos = document.getElementById("enlaceProyectos");
  const contenedorInicio = document.getElementById("inicio");
  const contenedorSobreMi = document.getElementById("sobre-mi");
  const contenedorProyectos = document.getElementById("proyectos");

  // Función para mostrar la sección correspondiente
  function mostrarSeccion(contenedor) {
    contenedorInicio.style.display = "none";
    contenedorSobreMi.style.display = "none";
    contenedorProyectos.style.display = "none";

    contenedor.style.display = "flex";

    // Mostrar el footer después de ocultar otras secciones
    document.querySelector("footer").style.display = "block";
  }

  // Mostrar el contenedor de "Inicio" al cargar la página
  mostrarSeccion(contenedorInicio);

  // Mostrar la sección correspondiente al hacer clic en el enlace
  if (enlaceInicio) {
    enlaceInicio.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSeccion(contenedorInicio);
    });
  }

  if (enlaceSobreMi) {
    enlaceSobreMi.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSeccion(contenedorSobreMi);
    });
  }

  if (enlaceProyectos) {
    enlaceProyectos.addEventListener("click", function (event) {
      event.preventDefault();
      mostrarSeccion(contenedorProyectos);
    });
  }

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("ver-mas-modal")) {
      event.preventDefault();
      var proyectoId = event.target.getAttribute("data-proyecto");
      verMas(proyectoId);
    }
  });

  var botonesVerMas = document.querySelectorAll(".ver-mas-modal");

  botonesVerMas.forEach(function (boton) {
    boton.addEventListener("click", function (event) {
      event.preventDefault();
      var proyectoId = boton.getAttribute("data-proyecto");
      verMas(proyectoId);
    });
  });

  function verMas(proyectoId) {
    var proyectoContenido = document.getElementById(proyectoId);
    if (!proyectoContenido) {
      console.error("Project content not found:", proyectoId);
      return;
    }

    var modal = document.getElementById("modal-proyecto");
    var modalContenido = document.getElementById("modal-contenido");

    // Obtener el contenido específico del proyecto
    var contenidoProyecto = proyectoContenido.querySelector(".modal-contenido");

    // Clonar el contenido dentro del proyecto correspondiente
    var contenidoClonado = contenidoProyecto.cloneNode(true);

    // Limpiar el contenido actual del modal
    modalContenido.innerHTML = "";

    // Agregar el contenido clonado al modal
    modalContenido.appendChild(contenidoClonado);

    // Mostrar el modal
    modal.style.display = "block";
  }

  window.cerrarModal = function () {
    var modal = document.getElementById("modal-proyecto");
    modal.style.display = "none";
  };
});
