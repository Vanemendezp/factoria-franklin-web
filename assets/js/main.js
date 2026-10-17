/* Factoría Franklin — comportamiento del sitio.
   Inserta encabezado y pie, y arma agenda, directorio, ruta y formularios desde data.js. */
(function () {
  'use strict';
  var FF = window.FF;
  var HOY = new Date('2026-10-13T12:00:00'); // fecha de referencia de la maqueta
  var DIAS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  var DIAS_LARGO = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---------- Encabezado y pie ---------- */
  var pagina = document.body.getAttribute('data-pagina');
  var menu = [
    ['agenda', 'agenda.html', 'Agenda'],
    ['fabricas', 'fabricas.html', 'Fábricas'],
    ['factor-f', 'factor-f.html', 'Factor F'],
    ['visitas', 'visitas.html', 'Visitas guiadas'],
    ['espacios', 'espacios.html', 'Arriendo de espacios'],
    ['historia', 'historia.html', 'Historia'],
    ['contacto', 'contacto.html', 'Contacto']
  ];
  var menuHtml = menu.map(function (m) {
    return '<a href="' + m[1] + '"' + (pagina === m[0] ? ' aria-current="page"' : '') + '>' + m[2] + '</a>';
  }).join('');

  var cab = document.getElementById('cabecera');
  if (cab) {
    cab.outerHTML =
      '<a class="saltar" href="#contenido">Saltar al contenido</a>' +
      '<div class="franja"><div class="contenedor">' +
        '<span>Fábricas abiertas principalmente de viernes a domingo</span>' +
        '<span>Franklin 741 · A pasos del Metro Bío Bío y Metro Franklin</span>' +
        '<strong>Entrada liberada</strong>' +
      '</div></div>' +
      '<header class="cabecera"><div class="contenedor">' +
        '<a class="logo" href="index.html"><img src="assets/img/logo-factoria-franklin.png" alt="Factoría Franklin, ir al inicio" width="108" height="54"></a>' +
        '<nav class="menu" id="menu" aria-label="Principal">' + menuHtml + '<a class="btn btn--mostaza" href="index.html#club">Únete al boletín</a></nav>' +
        '<div class="fila" style="--gap:12px">' +
          '<a class="btn btn--mostaza" href="index.html#club">Únete al boletín</a>' +
          '<button class="menu-boton" type="button" aria-expanded="false" aria-controls="menu" aria-label="Abrir menú">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
          '</button>' +
        '</div>' +
      '</div></header>';
    var boton = $('.menu-boton');
    boton.addEventListener('click', function () {
      var abierto = $('#menu').classList.toggle('abierto');
      boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
  }

  var pie = document.getElementById('pie');
  if (pie) {
    pie.outerHTML =
      '<footer class="pie"><div class="contenedor">' +
        '<div class="pie-grilla">' +
          '<div><h2>Cómo llegar</h2><p>Franklin 741, Santiago<br>Entre Santa Rosa y San Francisco<br>A pasos del Metro Bío Bío y Metro Franklin</p>' +
            '<p style="margin-top:10px"><a href="https://www.google.com/maps/search/?api=1&query=Factor%C3%ADa+Franklin+Franklin+741+Santiago">Abrir en Google Maps →</a></p></div>' +
          '<div><h2>Horarios</h2><p>Cada fábrica tiene su propio horario; la mayoría abre de viernes a domingo.</p>' +
            '<p style="margin-top:10px"><a href="fabricas.html">Ver horario por fábrica →</a></p></div>' +
          '<div><h2>Contacto</h2><ul><li>operaciones@factoria-franklin.cl</li><li><a href="espacios.html">Arriendo de espacios</a></li><li><a href="contacto.html#trabaja">Trabaja con nosotros</a></li></ul></div>' +
          '<div><h2>Boletín digital</h2><form class="pie-form" data-form="pie" data-mailchimp="boletin" novalidate><label class="sr-only" for="pie-correo">Tu correo</label><input id="pie-correo" name="correo" type="email" placeholder="tu@correo.cl" required autocomplete="email"><button class="btn btn--mostaza" type="submit" style="border-color:var(--mostaza)">Unirme</button></form>' +
            '<p class="pie-ok" hidden style="margin-top:10px;color:var(--mostaza)">Listo. Revisa tu correo para confirmar.</p></div>' +
        '</div>' +
        '<div class="pie-legal"><span>© 2026 Factoría Franklin · Artes y Oficios</span>' +
          '<span><a href="https://www.instagram.com/factoria_franklin/">Instagram</a> · <a href="https://www.facebook.com/franklin.factory.cl/">Facebook</a> · <a href="https://www.instagram.com/factor__f/">Factor F</a></span></div>' +
      '</div></footer>';
  }

  /* ---------- Formularios ---------- */
  function validar(form) {
    var ok = true;
    $$('[required]', form).forEach(function (c) {
      var valido = c.type === 'checkbox' ? c.checked : c.value.trim() !== '' && (c.type !== 'email' || /\S+@\S+\.\S+/.test(c.value));
      c.setAttribute('aria-invalid', valido ? 'false' : 'true');
      if (!valido) ok = false;
    });
    var err = $('.error', form);
    if (err) err.hidden = ok;
    return ok;
  }
  /* Mailchimp: los formularios con data-mailchimp se envían a la audiencia sin salir de la página.
     La configuración (URL del formulario, campos, etiquetas y grupos) está en data.js → FF.mailchimp. */
  function enviarMailchimp(form, alTerminar) {
    var mc = FF.mailchimp || {};
    if (!mc.action) { alTerminar(true); return; } // sin URL configurada: modo maqueta
    var params = [];
    $$('[name]', form).forEach(function (c) {
      var campo = (mc.campos || {})[c.name];
      if (!campo || (c.type === 'checkbox' && !c.checked) || (c.type === 'radio' && !c.checked)) return;
      params.push(encodeURIComponent(campo) + '=' + encodeURIComponent(c.value));
    });
    $$('[data-chips] [aria-pressed="true"]', form).forEach(function (b) {
      var grupo = (mc.intereses || {})[b.textContent.trim()];
      if (grupo) params.push(encodeURIComponent(grupo) + '=' + encodeURIComponent(grupo.replace(/.*\[(\d+)\]$/, '$1')));
    });
    var etiqueta = (mc.etiquetas || {})[form.getAttribute('data-mailchimp')];
    if (etiqueta) params.push('tags=' + encodeURIComponent(etiqueta));
    var cb = 'mc' + Date.now();
    var s = document.createElement('script');
    window[cb] = function (r) {
      delete window[cb]; s.remove();
      alTerminar(r && r.result === 'success', r && r.msg ? String(r.msg).replace(/<[^>]+>/g, '').replace(/^\d+ - /, '') : '');
    };
    s.onerror = function () { delete window[cb]; s.remove(); alTerminar(false, 'No pudimos conectar. Inténtalo de nuevo en unos minutos.'); };
    s.src = mc.action.replace('/post?', '/post-json?') + '&' + params.join('&') + '&c=' + cb;
    document.body.appendChild(s);
  }

  document.addEventListener('submit', function (e) {
    var form = e.target.closest('[data-form]');
    if (!form) return;
    e.preventDefault();
    if (!validar(form)) { var primero = $('[aria-invalid="true"]', form); if (primero) primero.focus(); return; }
    var boton = $('[type="submit"]', form);
    var mostrarExito = function () {
      if (form.getAttribute('data-form') === 'pie') { $('.pie-ok').hidden = false; form.reset(); return; }
      var exito = document.getElementById(form.getAttribute('data-exito'));
      if (exito) {
        var resumen = $('[data-resumen]', exito);
        if (resumen) resumen.textContent = resumenDe(form);
        form.hidden = true; exito.hidden = false; exito.focus();
      }
    };
    if (!form.hasAttribute('data-mailchimp')) { mostrarExito(); return; } // contacto, arriendo y CV: formulario de WordPress
    if (boton) { boton.disabled = true; boton.setAttribute('aria-busy', 'true'); }
    enviarMailchimp(form, function (ok, msg) {
      if (boton) { boton.disabled = false; boton.removeAttribute('aria-busy'); }
      if (ok) { mostrarExito(); return; }
      var err = $('.error', form);
      if (err) { err.textContent = /already subscribed|ya est/i.test(msg) ? 'Este correo ya está registrado. ¡Gracias!' : (msg || 'No pudimos registrar tu correo. Inténtalo de nuevo.'); err.hidden = false; }
      else if (form.getAttribute('data-form') === 'pie') { $('.pie-ok').textContent = msg || 'No pudimos registrar tu correo.'; $('.pie-ok').hidden = false; }
    });
  });
  document.addEventListener('click', function (e) {
    var volver = e.target.closest('[data-volver]');
    if (!volver) return;
    var exito = volver.closest('.exito');
    var form = document.querySelector('[data-exito="' + exito.id + '"]');
    exito.hidden = true; form.hidden = false;
  });
  function resumenDe(form) {
    var elegidos = $$('[data-chips] [aria-pressed="true"]', form).map(function (b) { return b.textContent.toLowerCase(); });
    var horario = $('[name="horario"]:checked', form);
    var recorrido = $('[name="recorrido"]:checked', form);
    if (recorrido) return recorrido.value + (horario ? ', domingo 18 de octubre a las ' + horario.value + ' hrs.' : '.');
    return elegidos.length ? 'Te escribiremos sobre: ' + elegidos.join(', ') + '.' : 'Te enviaremos toda la agenda.';
  }

  // Chips seleccionables (intereses, filtros)
  document.addEventListener('click', function (e) {
    var chip = e.target.closest('[data-chips] .chip');
    if (!chip) return;
    var grupo = chip.closest('[data-chips]');
    if (grupo.getAttribute('data-chips') === 'uno') {
      $$('.chip', grupo).forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      chip.setAttribute('aria-pressed', 'true');
    } else {
      chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    }
    grupo.dispatchEvent(new CustomEvent('cambio', { bubbles: true }));
  });

  /* ---------- Agenda ---------- */
  function tarjetaEvento(ev) {
    var visual = ev.img
      ? '<img class="evento-foto" src="' + ev.img + '" alt="' + esc(ev.alt || '') + '" loading="lazy" width="600" height="400">'
      : '<div class="evento-cartel evento-cartel--' + ev.tipo + '" aria-hidden="true">' + esc(ev.titulo) + '</div>';
    var accion = ev.interna
      ? '<a class="btn btn--tinta btn--ancho" href="' + ev.interna + '">' + (ev.tipo === 'Visitas' ? 'Inscribirme' : 'Ver exposición') + '</a>'
      : ev.url
        ? '<a class="btn btn--tinta btn--ancho" href="' + ev.url + '">Ver detalles</a>'
        : '<button class="btn btn--ancho" type="button" data-avisar="' + ev.id + '" aria-pressed="false">Avísame</button>';
    return '<article class="evento" data-tipo="' + ev.tipo + '">' + visual +
      '<div class="evento-cuerpo">' +
        '<div class="evento-meta"><span>' + esc(ev.fecha) + '</span><span class="suave">' + esc(ev.tipo) + '</span></div>' +
        '<h3>' + esc(ev.titulo) + '</h3>' +
        '<div class="mono" style="font-size:13px">' + esc(ev.hora) + ' · ' + esc(ev.lugar) + '</div>' +
        '<p>' + esc(ev.texto) + '</p>' +
        '<div class="evento-precio">' + esc(ev.precio) + '</div>' + accion +
      '</div></article>';
  }
  $$('[data-agenda]').forEach(function (cont) {
    var limite = parseInt(cont.getAttribute('data-agenda'), 10) || 99;
    var soloF = cont.getAttribute('data-solo') === 'factor-f';
    var vigentes = FF.eventos.filter(function (e) { return new Date(e.fin + 'T23:59:59') >= HOY && (!soloF || e.factorF); });
    var filtros = document.getElementById(cont.getAttribute('data-filtros'));
    function pintar() {
      var activo = filtros ? ($('[aria-pressed="true"]', filtros) || {}).textContent : 'Todo';
      var lista = vigentes.filter(function (e) { return !activo || activo === 'Todo' || e.tipo === activo; }).slice(0, limite);
      cont.innerHTML = lista.length ? lista.map(tarjetaEvento).join('') : '<p class="vacio">No hay actividades de este tipo esta semana. Únete al boletín y te avisamos de las próximas.</p>';
    }
    if (filtros) filtros.addEventListener('cambio', pintar);
    pintar();
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-avisar]');
    if (!b) return;
    var on = b.getAttribute('aria-pressed') !== 'true';
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.textContent = on ? 'Listo, te avisaremos' : 'Avísame';
    b.classList.toggle('btn--mostaza', on);
  });

  $$('[data-registro]').forEach(function (cont) {
    cont.innerHTML = FF.registro.map(function (r) {
      return '<a class="evento" href="' + r.url + '" style="text-decoration:none">' +
        (r.img ? '<img class="evento-foto" src="' + r.img + '" alt="" loading="lazy" width="600" height="400">' : '<div class="evento-cartel evento-cartel--Arte" aria-hidden="true" style="background:var(--acero)">' + esc(r.titulo) + '</div>') +
        '<div class="evento-cuerpo"><div class="evento-meta"><span>' + esc(r.fecha) + '</span></div><h3>' + esc(r.titulo) + '</h3><p>' + esc(r.texto) + '</p><span class="enlace-flecha" style="align-self:flex-start">Ver registro</span></div></a>';
    }).join('');
  });

  /* ---------- Prensa: carrusel con avance automático ---------- */
  var MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'];
  function fechaCorta(iso) { var p = iso.split('-'); return parseInt(p[2], 10) + ' ' + MESES[parseInt(p[1], 10) - 1] + ' ' + p[0]; }
  var sinMovimiento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  $$('[data-prensa]').forEach(function (cont) {
    var soloF = cont.getAttribute('data-prensa') === 'factor-f';
    var notas = FF.prensa.filter(function (p) { return !soloF || p.factorF; })
      .sort(function (a, b) { return a.fecha < b.fecha ? 1 : -1; });
    cont.classList.add('carrusel');
    cont.setAttribute('role', 'region');
    cont.setAttribute('aria-roledescription', 'carrusel');
    cont.setAttribute('aria-label', 'Notas de prensa');
    cont.innerHTML =
      '<div class="carrusel-ventana"><ul class="carrusel-pista">' + notas.map(function (p, i) {
        return '<li class="recorte"><a href="' + p.url + '" target="_blank" rel="noopener">' +
          '<span class="recorte-cabeza"><small>' + esc(p.medio) + '</small><time datetime="' + p.fecha + '">' + fechaCorta(p.fecha) + '</time></span>' +
          '<b>' + esc(p.titulo) + '</b>' +
          '<span class="recorte-pie">' + (i === 0 && !soloF ? '<span class="recorte-nuevo">Lo más reciente</span>' : '<span></span>') + '<span class="enlace-flecha">Leer nota</span></span>' +
        '</a></li>';
      }).join('') + '</ul></div>' +
      '<div class="carrusel-controles">' +
        '<span class="carrusel-cuenta mono" aria-live="polite"></span>' +
        '<div class="carrusel-barra" aria-hidden="true"><span></span></div>' +
        '<div class="fila" style="--gap:8px">' +
          '<button type="button" class="carrusel-boton" data-dir="-1" aria-label="Notas anteriores">←</button>' +
          '<button type="button" class="carrusel-boton" data-pausa aria-label="Pausar el carrusel">❚❚</button>' +
          '<button type="button" class="carrusel-boton" data-dir="1" aria-label="Notas siguientes">→</button>' +
        '</div>' +
      '</div>';

    var pista = $('.carrusel-pista', cont);
    var tarjetas = $$('.recorte', cont);
    var cuenta = $('.carrusel-cuenta', cont);
    var barra = $('.carrusel-barra span', cont);
    var botonPausa = $('[data-pausa]', cont);
    var indice = 0, temporizador = null, pausadoPorUsuario = sinMovimiento, encima = false;

    function porVista() { return parseInt(getComputedStyle(cont).getPropertyValue('--por'), 10) || 1; }
    function maximo() { return Math.max(0, tarjetas.length - porVista()); }
    function ir(n) {
      var max = maximo();
      indice = n > max ? 0 : n < 0 ? max : n;
      var paso = tarjetas[0].getBoundingClientRect().width + parseFloat(getComputedStyle(pista).columnGap || 0);
      pista.style.transform = 'translateX(' + (-indice * paso) + 'px)';
      var desde = indice + 1, hasta = Math.min(indice + porVista(), tarjetas.length);
      cuenta.textContent = (desde === hasta ? desde : desde + '–' + hasta) + ' de ' + tarjetas.length + ' notas';
      barra.style.width = ((hasta / tarjetas.length) * 100) + '%';
      $('.carrusel-controles', cont).hidden = maximo() === 0; // si todo cabe, no hay nada que mover
      tarjetas.forEach(function (t, i) {
        var visible = i >= indice && i < indice + porVista();
        t.setAttribute('aria-hidden', visible ? 'false' : 'true');
        $('a', t).tabIndex = visible ? 0 : -1;
      });
    }
    function detener() { clearInterval(temporizador); temporizador = null; }
    function arrancar() {
      detener();
      if (pausadoPorUsuario || encima || document.hidden || maximo() === 0) return;
      temporizador = setInterval(function () { ir(indice + 1); }, 4500);
    }
    function pintarPausa() {
      botonPausa.textContent = pausadoPorUsuario ? '▶' : '❚❚';
      botonPausa.setAttribute('aria-label', pausadoPorUsuario ? 'Reanudar el carrusel' : 'Pausar el carrusel');
    }
    $$('[data-dir]', cont).forEach(function (b) {
      b.addEventListener('click', function () { ir(indice + parseInt(b.getAttribute('data-dir'), 10)); arrancar(); });
    });
    botonPausa.addEventListener('click', function () { pausadoPorUsuario = !pausadoPorUsuario; pintarPausa(); arrancar(); });
    cont.addEventListener('mouseenter', function () { encima = true; detener(); });
    cont.addEventListener('mouseleave', function () { encima = false; arrancar(); });
    cont.addEventListener('focusin', function () { encima = true; detener(); });
    cont.addEventListener('focusout', function () { encima = false; arrancar(); });
    document.addEventListener('visibilitychange', arrancar);
    window.addEventListener('resize', function () { ir(Math.min(indice, maximo())); });
    // deslizar con el dedo en el celular
    var x0 = null;
    pista.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; detener(); }, { passive: true });
    pista.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) ir(indice + (dx < 0 ? 1 : -1));
      arrancar();
    });
    pintarPausa();
    ir(0);
    arrancar();
  });

  /* ---------- Directorio de fábricas ---------- */
  $$('[data-directorio]').forEach(function (cont) {
    var filtros = document.getElementById(cont.getAttribute('data-filtros'));
    var conHorario = cont.hasAttribute('data-con-horario');
    function pintar() {
      var activo = filtros ? ($('[aria-pressed="true"]', filtros) || {}).textContent : 'Todos';
      var lista = FF.fabricas.filter(function (f) { return !activo || activo === 'Todos' || f.rubros.indexOf(activo) > -1; });
      cont.innerHTML = lista.map(function (f) {
        return '<a href="fabrica.html#' + f.slug + '"><img class="directorio-foto" src="assets/img/fabricas/' + f.slug + '-1.jpg" alt="" width="72" height="72" loading="lazy"><span style="min-width:0;flex:1"><b>' + esc(f.nombre) + '</b><small>' + esc(f.rubros.join(' · ')) + '</small>' +
          (conHorario ? '<span style="display:block;font-size:14px;color:#c7ccd3;margin-top:8px">' + esc(f.horario) + '</span>' : '') +
          '</span><span class="flecha" aria-hidden="true">→</span></a>';
      }).join('') +
        (!activo || activo === 'Todos' ? '<a class="directorio-cta" href="contacto.html"><span><b>¿Quieres instalar tu taller aquí?</b><small>Arriendos para emprendimientos</small></span><span aria-hidden="true">→</span></a>' : '');
      var cuenta = document.getElementById(cont.getAttribute('data-cuenta'));
      // La Factoría tiene 24 fábricas; la maqueta muestra las fichas publicadas hoy en factoria-franklin.cl
      if (cuenta) cuenta.textContent = (!activo || activo === 'Todos') ? '24 fábricas en la Factoría' : lista.length + (lista.length === 1 ? ' fábrica' : ' fábricas');
    }
    if (filtros) filtros.addEventListener('cambio', pintar);
    pintar();
  });

  /* ---------- Planifica tu visita ---------- */
  $$('[data-ruta]').forEach(function (cont) {
    var diasCont = $('[data-dias]', cont);
    var rubrosCont = $('[data-rubros]', cont);
    var lista = $('[data-ruta-lista]', cont);
    var titulo = $('[data-ruta-titulo]', cont);
    var hoyIdx = (HOY.getDay() + 6) % 7;
    var dia = hoyIdx < 4 ? 5 : hoyIdx; // si es lunes a jueves, propone el sábado
    diasCont.innerHTML = DIAS.map(function (d, i) {
      return '<button type="button" class="chip" aria-pressed="' + (i === dia ? 'true' : 'false') + '" aria-label="' + DIAS_LARGO[i] + '">' + d + '</button>';
    }).join('');
    function pintar() {
      var diaSel = $$('.chip', diasCont).findIndex(function (c) { return c.getAttribute('aria-pressed') === 'true'; });
      var rubros = $$('[aria-pressed="true"]', rubrosCont).map(function (c) { return c.textContent; });
      var abiertas = FF.fabricas.filter(function (f) {
        var abre = f.dias === null || f.dias.indexOf(diaSel) > -1;
        var calza = !rubros.length || f.rubros.some(function (r) { return rubros.indexOf(r) > -1; });
        return abre && calza;
      });
      titulo.textContent = abiertas.length + (abiertas.length === 1 ? ' fábrica abre' : ' fábricas abren') + ' el ' + DIAS_LARGO[diaSel];
      lista.innerHTML = abiertas.length ? abiertas.map(function (f) {
        return '<li><b>' + esc(f.nombre) + '</b><span>' + esc(f.dias === null ? f.horario + ' (revisa los días en su Instagram)' : f.horario) + '</span><a href="fabrica.html#' + f.slug + '">Ver ficha</a></li>';
      }).join('') : '<li class="vacio">Ninguna fábrica de ese rubro abre ese día. Prueba con viernes, sábado o domingo.</li>';
    }
    diasCont.addEventListener('cambio', pintar);
    rubrosCont.addEventListener('cambio', pintar);
    pintar();
  });

  /* ---------- Ficha de fábrica ---------- */
  var ficha = document.querySelector('[data-ficha]');
  if (ficha) {
    var mostrar = function () {
      var slug = (location.hash || '').replace('#', '') || FF.fabricas[0].slug;
      var f = FF.fabricas.filter(function (x) { return x.slug === slug; })[0] || FF.fabricas[0];
      var i = FF.fabricas.indexOf(f);
      var sig = FF.fabricas[(i + 1) % FF.fabricas.length];
      var ant = FF.fabricas[(i - 1 + FF.fabricas.length) % FF.fabricas.length];
      document.title = f.nombre + ' · Factoría Franklin';
      var datos = [['Horario', f.horario], ['Rubro', f.rubros.join(' · ')]];
      if (f.piso) datos.push(['Ubicación', f.piso]);
      if (f.telefono) datos.push(['Teléfono', f.telefono]);
      if (f.correo) datos.push(['Correo', f.correo]);
      datos.push(['Instagram', '<a href="https://www.instagram.com/' + f.instagram + '/">@' + esc(f.instagram) + '</a>']);
      ficha.innerHTML =
        '<div class="contenedor migas"><a href="index.html">Inicio</a> / <a href="fabricas.html">Fábricas</a> / ' + esc(f.nombre) + '</div>' +
        '<section class="seccion" style="border-bottom:var(--borde)"><div class="contenedor dos" style="align-items:start">' +
          '<div class="pila">' +
            '<span class="etiqueta">' + esc(f.rubros.join(' · ')) + ' · Franklin 741</span>' +
            '<h1 class="titulo-l">' + esc(f.nombre) + '</h1>' +
            '<p class="bajada">' + esc(f.bajada) + '</p>' +
            '<div class="texto-largo">' + f.texto.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') + '</div>' +
            '<div class="pila" style="--gap:10px"><span class="grupo-label">Productos</span><ul class="lista-productos">' + f.productos.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul></div>' +
          '</div>' +
          '<div class="pila">' +
            '<div class="ficha-fotos">' +
              [1, 2, 3].map(function (n) {
                return '<img src="assets/img/fabricas/' + f.slug + '-' + n + '.jpg" alt="' + esc(f.nombre) + ', foto ' + n + '" width="900" height="900"' + (n > 1 ? ' loading="lazy"' : '') + '>';
              }).join('') +
              '<span class="placa">Fábrica ' + String(i + 1).padStart(2, '0') + ' de ' + FF.fabricas.length + '</span>' +
            '</div>' +
            '<div class="datos">' + datos.map(function (d) { return '<div><small>' + d[0] + '</small><span>' + (d[0] === 'Instagram' ? d[1] : esc(d[1])) + '</span></div>'; }).join('') + '</div>' +
            '<a class="btn btn--tinta" href="https://www.instagram.com/' + f.instagram + '/">Ver su Instagram</a>' +
          '</div>' +
        '</div></section>' +
        '<nav class="contenedor fila fila--entre" aria-label="Otras fábricas" style="padding-block:28px">' +
          '<a class="enlace-flecha" href="#' + ant.slug + '">← ' + esc(ant.nombre) + '</a>' +
          '<a class="enlace-flecha" href="#' + sig.slug + '">' + esc(sig.nombre) + ' →</a>' +
        '</nav>';
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', mostrar);
    mostrar();
  }
})();
