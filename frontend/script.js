function reservar() {

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const servicio = document.getElementById('servicio').value;

  // VALIDACIÓN

  if (
    !nombre ||
    !email ||
    !fecha ||
    !hora ||
    !servicio
  ) {

    alert('Completa todos los campos');
    return;

  }

  // DATOS

  const data = {
    nombre,
    email,
    fecha,
    hora,
    servicio
  };

  // FETCH

  fetch('http://localhost:3000/api/reservar', {

    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)

  })

  .then(res => res.json())

  .then(data => {
    
    console.log(data);

    alert(data.mensaje);

    // LIMPIAR FORMULARIO

    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('servicio').value = '';

  })

  .catch(error => {

    console.log(error);

    alert('Error al reservar');

  });

}

/* CONTADOR */
let porcentaje = 0;
const contador = document.getElementById("contadorNumero");

if (contador) {
  const intervalo = setInterval(() => {
    porcentaje++;
    contador.textContent = porcentaje + "%";
    if (porcentaje === 1000) clearInterval(intervalo);
  }, 30);
}
// =============================
// CHATBOT SPA PROFESIONAL
// =============================

function abrirChat() {

  const body = document.getElementById("chatBody");

  if (body.style.display === "none") {
    body.style.display = "block";
  } else {
    body.style.display = "none";
  }

}

// =============================
// ENVIAR MENSAJE
// =============================

function enviarMensaje() {

  const input = document.getElementById("mensajeUsuario");

  const mensaje = input.value.trim();

  if (mensaje === "") return;

  agregarMensajeUsuario(mensaje);

  responderBot(mensaje);

  input.value = "";

}

// =============================
// MENSAJE USUARIO
// =============================

function agregarMensajeUsuario(texto) {

  const chatBody = document.getElementById("chatBody");

  const div = document.createElement("div");

  div.classList.add("mensaje", "usuario");

  div.textContent = texto;

  chatBody.appendChild(div);

  chatBody.scrollTop = chatBody.scrollHeight;

}

// =============================
// MENSAJE BOT
// =============================

function agregarMensajeBot(texto) {

  const chatBody = document.getElementById("chatBody");

  const div = document.createElement("div");

  div.classList.add("mensaje", "bot");

  div.innerHTML = texto;

  chatBody.appendChild(div);

  chatBody.scrollTop = chatBody.scrollHeight;

}

// =============================
// RESPUESTAS
// =============================

function responderBot(mensaje) {

  const texto = mensaje.toLowerCase();

  // =============================
  // SALUDO
  // =============================

  if (
    texto.includes("hola") ||
    texto.includes("buenas") ||
    texto.includes("hello") ||
    texto.includes("buenos dias")
  ) {

    agregarMensajeBot(`
      Hola 👋 Bienvenida al Centro SPA 💖<br><br>

      Gracias por escribirnos.<br>
      Nuestro equipo estará encantado de ayudarte ✨<br><br>

      🌸 Selecciona la opción que necesitas:<br><br>

      1️⃣ Servicios<br>
      2️⃣ Promociones<br>
      3️⃣ Horarios de atención<br>
      4️⃣ Agendar cita<br>
      5️⃣ Ubicación<br>
      6️⃣ WhatsApp<br>
      7️⃣ Precios
    `);

  }

  // =============================
  // SERVICIOS
  // =============================

  else if (
    texto === "1" ||
    texto.includes("servicios")
  ) {

    agregarMensajeBot(`
      💆 Nuestros servicios disponibles:<br><br>

      ✔ Masajes relajantes<br><br>
      ✔ Masajes reductores<br><br>
      ✔ Masajes postoperatorios<br><br>
      ✔ Limpieza facial<br><br>
      ✔ Tratamientos faciales<br><br>
      ✔ Dermapen y plasma<br><br>
      ✔ Sueroterapia<br><br>>
      ✔ Tratamientos capilares intradérmico<br><br>
      ✔ depilacion con cera<br><br>
      ✔ Todo tipo de uñas<br><br>
      ✔ uñas en Gel<br><br>

      ✨ ¿Deseas reservar alguno?
    `);

  }
// =============================
// RESPUESTA SI
// =============================

else if (
  texto === "si" ||
  texto === "sí"
) {

  agregarMensajeBot(`
    📅 Excelente 💖<br><br>

    Puedes realizar tu reserva directamente desde la sección:<br><br>

    ✨ "Hacer Reserva"<br><br>

    Allí podrás elegir:<br>
    ✔ Servicio<br>
    ✔ Fecha<br>
    ✔ Hora<br><br>

    😊 Será un placer atenderte.
  `);

}

// =============================
// RESPUESTA NO
// =============================

else if (
  texto === "no"
) {

  agregarMensajeBot(`
    💖 Gracias por comunicarte con nosotros.<br><br>

    😊 ¿En qué más puedo ayudarte?<br><br>

    1️⃣ Servicios<br>
    2️⃣ Promociones<br>
    3️⃣ Horarios<br>
    4️⃣ Ubicación<br>
    5️⃣ WhatsApp
  `);

}
  // =============================
  // PROMOCIONES
  // =============================

  else if (
    texto === "2" ||
    texto.includes("promociones")
  ) {

    agregarMensajeBot(`
      🎁 PROMOCIONES SPA 💖<br><br>

      ✨ 20% descuento en masajes<br>
      ✨ Facial + masaje combo especial<br>
      ✨ Promoción para parejas<br><br>

      📲 Agenda hoy mismo.
    `);

  }

  // =============================
  // HORARIOS
  // =============================

  else if (
    texto === "3" ||
    texto.includes("horario")
  ) {

    agregarMensajeBot(`
      🕒 HORARIOS DE ATENCIÓN<br><br>

      Lunes a sábado<br>
      ⏰ Lunes a Viernes
        9:00 a.m. – 5:00 p.m.
        Sábados
        9:00 a.m. – 5:00 p.m.

      Domingo cerrado 💖
    `);

  }

  // =============================
  // AGENDAR
  // =============================

  else if (
    texto === "4" ||
    texto.includes("agendar") ||
    texto.includes("cita") ||
    texto.includes("reservar")
  ) {

    agregarMensajeBot(`
      📅 Puedes agendar tu cita directamente desde el formulario de reservas de esta página
       💖
        Realizar tu reserva directamente desde la sección:<br><br>

    ✨ "Hacer Reserva"<br><br>

    Allí podrás elegir:<br>
    ✔ Servicio<br>
    ✔ Fecha<br>
    ✔ Hora<br><br>

    😊 Será un placer atenderte.
    `);

  }

  // =============================
  // UBICACIÓN
  // =============================

  else if (
    texto === "5" ||
    texto.includes("ubicacion") ||
    texto.includes("direccion")
  ) {

    agregarMensajeBot(`
      📍 Estamos ubicados en el centro de la ciudad.<br><br>

      💖 Será un placer atenderte.
    `);

  }

  // =============================
  // WHATSAPP
  // =============================

  else if (
    texto === "6" ||
    texto.includes("whatsapp") ||
    texto.includes("telefono")
  ) {

    agregarMensajeBot(`
      📲 WhatsApp SPA:<br><br>

      3117740244 💖
    `);

  }

  // =============================
  // PRECIOS
  // =============================

  else if (
    texto === "7" ||
    texto.includes("precio")
  ) {

    agregarMensajeBot(`
      💰 Nuestros precios varían según el servicio.<br><br>

      ✨ Escríbenos al WhatsApp SPA, qué tratamiento deseas y te ayudamos.
      
    `);

  }

  // =============================
  // DESPEDIDA
  // =============================

  else if (
    texto.includes("gracias") ||
    texto.includes("adios")
  ) {

    agregarMensajeBot(`
      💖 Gracias por visitarnos.<br><br>

      Esperamos atenderte muy pronto ✨
    `);

  }

  // =============================
  // RESPUESTA GENERAL
  // =============================

  else {

    agregarMensajeBot(`
      😊 No entendí tu mensaje.<br><br>

      Por favor escribe:<br><br>

      1️⃣ Servicios<br>
      2️⃣ Promociones<br>
      3️⃣ Horarios<br>
      4️⃣ Agendar cita<br>
      5️⃣ Ubicación<br>
      6️⃣ WhatsApp<br>
      7️⃣ Precios
    `);

  }

}