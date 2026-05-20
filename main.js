const projects = [
  {
    name: "Hotel Sol",
    link: "hotel-sol.html",
    image: "img/InicioHotel.png",
    alt: "Hotel Sol",
    description:
      "Aplicación de gestión hotelera creada en .NET, conectada a una base de datos SQL y con soporte de almacenamiento en XML. Incluye un sistema de login, gestión de usuarios y operaciones internas del hotel, diseñada como proyecto académico para simular un entorno real.",
  },
  {
    name: "Ruleta Europea",
    link: "ruleta.html",
    image: "img/Ruleta.jpeg",
    alt: "Ruleta Europea",
    description:
      "Aplicación móvil desarrollada en Android Studio que simula una ruleta de casino con animaciones, sonido y apuestas interactivas. Incluye inicio de sesión con Google, ranking global en tiempo real, un premio común acumulable (jackpot), capturas de pantalla, notificaciones de victoria y registro de eventos en el calendario. El proyecto combina Firestore, Firebase Authentication, Retrofit y Moshi para crear una experiencia multijugador fluida y conectada.",
  },
  {
    name: "VirtuAlliance",
    link: "virtualliance.html",
    image: "img/virtualliance.jpg",
    alt: "imagen del juego",
    description:
      "Experiencia interactiva compuesta por varios minijuegos en 2D, 3D, AR y un modo VR desarrollado como proyecto académico para DAM. El jugador avanza de forma lineal por cada juego, acumulando puntos hasta llegar a la pantalla final. Incluye mecánicas táctiles, joystick virtual, detección por mirada en VR y escenarios diseñados en Unity.",
  },
  {
    name: "Pagina de Cantantes POP",
    link: "cantantes.html",
    image: "img/pagcantantes.png",
    alt: "pagina cantantes",
    description:
      "Sitio web multipágina creado con HTML y CSS que presenta a tres artistas: Justin Bieber, Miley Cyrus y Taylor Swift. Cada página incluye un banner con foto, nombre y redes sociales, una breve biografía, vídeos de YouTube y enlaces a sus álbumes en Spotify. La página principal muestra tarjetas interactivas de los artistas y listas de navegación, combinando estructura semántica, flexbox y diseño visual personalizado.",
  },
];
const container = document.getElementById("project-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;
function showProject(index) {
  const item = projects[index];
  console.log(item);
  container.innerHTML = `
            <a href="${item.link}"class="project-link">
            <div class="project-target">
              <img
                src="${item.image}"
                class="project-img"
                alt="pagina cantantes"
              />
              <h4>${item.name} POP</h4>
              <p>
              ${item.description}
              </p>
            </div>
          </a>
  `;
}
if (prev && next) {
  next.addEventListener("click", () => {
    index++;
    if (index >= projects.length) index = 0;
    showProject(index);
  });

  prev.addEventListener("click", () => {
    index--;
    if (index < 0) index = projects.length - 1;
    showProject(index);
  });
  showProject(index);
}
