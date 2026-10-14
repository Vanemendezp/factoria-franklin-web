/* Datos de Factoría Franklin.
   Fuente: factoria-franklin.cl (fichas de fábricas, blog y páginas), revisado el 13 de octubre de 2026.
   Prensa: La Tercera, National Geographic Viajes, Chef & Hotel, Guía Comino. */

// Días: 0 = lunes ... 6 = domingo
window.FF = {
  fabricas: [
    {
      slug: 'la-casa-borracha', nombre: 'La Casa Borracha', rubros: ['Licores'],
      bajada: 'Cócteles artesanales, listos para disfrutar',
      texto: [
        'La Casa Borracha nació en plena pandemia, de la mano de Johanna Scherpenisse y Gellyn Matos, despachando a domicilio una pequeña selección de cócteles artesanales. Lo que comenzó como un proyecto tímido, hoy se ha convertido en una marca consolidada con 15 variedades y un catálogo que crece cada año.',
        'Su cóctel más vendido es el Sour Calafate, elaborado con un syrup traído directamente desde Punta Arenas.'
      ],
      horario: 'Viernes a domingo, 12:00 a 18:30', dias: [4, 5, 6],
      productos: ['Sours', 'Mojitos', 'Margaritas', 'Piña Colada', 'La Caja Borracha'],
      instagram: 'lacasaborracha'
    },
    {
      slug: 'emperatriz', nombre: 'Emperatriz Gastronomía Peruana', rubros: ['Gastronomía'],
      bajada: 'Comida peruana · Gourmet · Auténtica',
      texto: [
        'Desde el corazón de Perú hasta el Barrio Franklin. Emperatriz es la mujer que transforma ingredientes en platos con alma y, junto a Don Víctor, ha creado un espacio donde cada visitante es parte de su historia.',
        'Desde el 2024 en el segundo piso de la Factoría: ceviches, lomo saltado y sazón criolla.'
      ],
      horario: '11:00 a 18:30', dias: null, piso: 'Segundo piso',
      productos: ['Ceviche Norteño', 'Pulpo al olivo', 'Tacu tacu', 'Chilcanos', 'Suspiro limeño'],
      instagram: 'emperatriz.franklin'
    },
    {
      slug: 'weekends-310', nombre: 'Weekends 310', rubros: ['Gastronomía'],
      bajada: 'Prepara tus sentidos...',
      texto: [
        'Una experiencia gastronómica donde la música, los aromas y los sabores se unen. En su cocina, desde 2019, mandan la innovación y la calidad: hamburguesas en pan de papa con carne Angus y sándwiches de autor.',
        'Para rematar, una carta de mocktails únicos.'
      ],
      horario: 'Sábado y domingo, 11:00 a 18:30', dias: [5, 6],
      productos: ['Hamburguesas en pan de papa', 'Sándwiches en pan de masa madre', 'Brunch', 'Mocktails'],
      instagram: 'weekends310'
    },
    {
      slug: 'donaostra', nombre: 'Doña Ostra', rubros: ['Gastronomía'],
      bajada: 'Hecho para los amantes de ostras y mariscos',
      texto: [
        'En Doña Ostra podrás encontrar las delicias que el mar nos regala, para servir y llevar al lugar donde quieras impresionar. Te esperan con una atención cálida, familiar y de calidad.'
      ],
      horario: 'Viernes a domingo, 12:30 a 17:30', dias: [4, 5, 6], telefono: '22 9257655',
      productos: ['Ostras', 'Ceviches', 'Ostiones', 'Erizos', 'Picorocos'],
      instagram: 'donaostrafactoria'
    },
    {
      slug: 'hunab-ku', nombre: 'Hunab Ku', rubros: ['Gastronomía', 'Pastelerías'],
      bajada: 'La fábrica de chocolates de la Factoría',
      texto: [
        'Chocolatería Hunab Ku debe su nombre al “Dios Uno” de la cultura Maya de Yucatán. Trabaja con chocolate belga o con elaboraciones propias a partir del fruto del cacao importado de Ecuador y Perú, y tiene más de 70 productos.',
        '“Nuestro proveedor tiene la trazabilidad directa con los que cosechan el cacao”, explica Felipe Carrasco, su dueño.'
      ],
      horario: 'Viernes a domingo y festivos, 12:00 a 18:30', dias: [4, 5, 6],
      productos: ['Trufas de licor', 'Pasta de avellana y cacao', 'Mezcla para chocolate caliente', 'Alfajores'],
      instagram: 'hunabkuchocolates'
    },
    {
      slug: 'destileriazunda', nombre: 'Destilería Zunda', rubros: ['Licores'],
      bajada: 'Una compañía de aromas y sabores',
      texto: [
        'Una micro destilería urbana instalada en el corazón del barrio Franklin.'
      ],
      horario: 'Lunes a jueves, 9:00 a 18:00 · Sábado y domingo, 12:00 a 18:00', dias: [0, 1, 2, 3, 5, 6],
      productos: ['Gin Pajarillo, 12 botánicos', 'Bárbaro Negro, brandy de cerveza', 'Soju BOK', 'Experiencia Zunda: crea tu propio gin'],
      instagram: 'destileria_zunda'
    },
    {
      slug: 'miraifoodlab', nombre: 'Mirai Food Lab', rubros: ['Bebidas', 'Gastronomía'],
      bajada: 'Laboratorio de fermentación, kombucha y ramen',
      texto: [
        'Una tienda de productos de factura artesanal y un restaurant tipo izakaya con ramen de temporada y productos fermentados. Sus métodos y recetas vienen de vivencias en Japón, Dinamarca, Australia, Estados Unidos y de vuelta a Chile.'
      ],
      horario: 'Fábrica y tienda: martes a domingo, 11:00 a 17:00 · Restaurant: viernes a domingo, 12:30 a 17:00', dias: [1, 2, 3, 4, 5, 6],
      productos: ['Ramen', 'Koji', 'Kimchi', 'Kombuchas'],
      instagram: 'miraifoodlab'
    },
    {
      slug: 'los-vrujos-lab', nombre: 'Los Vrujos Lab', rubros: ['Bebidas'],
      bajada: 'Salud y nutrición consciente',
      texto: [
        'Brebajes en base a una bebida nootrópica, resultado de la alquimia del cold brew con agua, plantas, hongos y azúcar orgánica. Su línea SOMA, mushroom elixir, transforma la medicina fungi ancestral en un elixir práctico.'
      ],
      horario: 'Soma: viernes, sábado y domingo, 11:00 a 18:00', dias: [4, 5, 6], telefono: '+569 5880 83 20',
      productos: ['Alchemy of Energy', 'Alchemy of Relax', 'Alchemy of Immunity', 'Alchemy of Focus'],
      instagram: 'soma_elixir'
    },
    {
      slug: 'aji-veneno', nombre: 'Ají Veneno', rubros: ['Gastronomía'],
      bajada: '22 tipos de salsas, enfocado netamente en lo picante',
      texto: [
        'Proteínas, arrollados, malayas y costillas en sándwiches con pastas picantes y no picantes, con ajíes de proveedores de distintas regiones del país. También tiene platos vegetarianos y veganos.',
        '“Ají Veneno viene del tiempo de mis abuelos”, cuenta Juan Pablo, su creador.'
      ],
      horario: 'Viernes a domingo, 13:00 a 18:00', dias: [4, 5, 6],
      productos: ['Salsas picantes y no picantes', 'Sándwich de malaya', 'Trilogía de carnes', 'Hamburguesas veganas'],
      instagram: 'ajiveneno'
    },
    {
      slug: 'quintal', nombre: 'Quintal Destilados', rubros: ['Licores'],
      bajada: 'Gin destilado en Santiago, a 580 metros de altitud',
      texto: [
        'Una destilería artesanal que destila una combinación de botánicos que busca realzar las hierbas nativas chilenas, recolectadas mayoritariamente en la cordillera de los Andes. Su gin es doble destilado en alambiques de cobre.',
        'Según La Tercera, está en el local A1, justo al entrar.'
      ],
      horario: 'Sábado, domingo y festivos', dias: [5, 6],
      productos: ['Gin Valparaíso', 'Gin Andes', 'Gin Franklin', 'Enguindado'],
      instagram: 'destiladosquintal'
    },
    {
      slug: 'andariego-coffee', nombre: 'Andariego Coffee', rubros: ['Bebidas'],
      bajada: 'Tostaduría de café de especialidad colombiano',
      texto: [
        'Café de origen colombiano, de especialidad y 100% arábica, en grano y molido. Venden al detalle y al por mayor, maquilan para cafeterías, hoteles y restaurantes, y preparan café frío y caliente.'
      ],
      horario: 'Martes a domingo, 10:00 a 18:00', dias: [1, 2, 3, 4, 5, 6], correo: 'andariegocoffeecl@gmail.com',
      productos: ['Café El Andariego', 'Café La Cordillera', 'Métodos de preparación', 'Canelés y macarons'],
      instagram: 'andariegocoffee.cl'
    },
    {
      slug: 'sano-y-vital', nombre: 'Sano y Vital', rubros: ['Gastronomía'],
      bajada: 'Alimentos funcionales para todos',
      texto: [
        'Alimentos que aportan beneficios para la salud: ricos en proteínas, buena fuente de omega 3 y 6, algunos de bajo índice glicémico y otros libres de gluten. Para estudiantes, deportistas y dietas sin azúcar.'
      ],
      horario: 'Sábados, domingos y festivos, 10:30 a 17:30', dias: [5, 6], correo: 'sanoyvitalsv@gmail.com',
      productos: ['Barra de cereal pop', 'Cereales de quinoa, amaranto y mijo', 'Semillas', 'Sal rosada'],
      instagram: 'sanoyvital_'
    },
    {
      slug: 'pobre-vermut', nombre: 'Pobre Vermut', rubros: ['Licores'],
      bajada: 'La primera vermutería de Chile',
      texto: [
        'El 7 de enero de 2023, La Vermutería del PobreVermut abrió sus puertas en Factoría Franklin. Su vermut está enriquecido con botánicos endémicos chilenos y se elabora desde 2017.',
        'Puedes conocer la sala de producción, probar coctelería en su barra vermutera y comer tapeo de cocina española y argentina.'
      ],
      horario: 'Sábado, domingo y festivos, 12:00 a 18:00', dias: [5, 6], telefono: '+569 5140 01 23', correo: 'contacto@pobrevermut.cl',
      productos: ['Vermut Rosso', 'Vermut Blanco', 'Negroni', 'Vermut con soda'],
      instagram: 'pobrevermut'
    }
  ],

  // Agenda (fechas de 2026). tipo: Ferias | Arte | Música | Visitas
  eventos: [
    {
      id: 'bacan', tipo: 'Ferias', fecha: 'Sáb 17 y dom 18 oct', hora: '12:00 a 19:00', fin: '2026-10-18',
      titulo: 'Bacán tu Casa', lugar: 'Factoría Franklin',
      texto: 'Segunda edición de la feria de diseño, arte y decoración para el hogar: más de 40 expositoras y expositores, vinyl DJ set, gastronomía y activaciones. La primera edición recibió a más de 6.300 personas.',
      precio: 'Entrada liberada', url: 'https://factoria-franklin.cl/bacan-tu-casa-factoria-franklin/'
    },
    {
      id: 'visita-factoria', tipo: 'Visitas', fecha: 'Dom 18 oct', hora: '12:30 · 14:00 · 16:00', fin: '2026-10-18',
      titulo: 'Visita guiada Factoría Franklin', lugar: 'Acceso principal, Franklin 741',
      texto: 'Un recorrido de aproximadamente 40 minutos, en grupos reducidos, para entender cómo nació la Factoría, qué propone y cómo conviven sus proyectos bajo un mismo techo.',
      precio: 'Sin costo · cupos limitados', interna: 'visitas.html', img: 'assets/img/recorrido-exposicion.jpg', alt: 'Grupo recorriendo una exposición en la Factoría'
    },
    {
      id: 'visita-factorf', tipo: 'Visitas', fecha: 'Dom 18 oct', hora: '12:30', fin: '2026-10-18',
      titulo: 'Visita guiada Factor F: Ojos del Alma', lugar: 'Factor F, 4° piso',
      texto: 'Un recorrido de aproximadamente 45 minutos con un guía especializado por las dos partes de la exposición. No necesitas conocimientos previos de arte.',
      precio: 'Sin costo · cupos limitados', interna: 'visitas.html', img: 'assets/img/visita-guiada-ojos-del-alma.jpg', alt: 'Afiche de la visita guiada a Ojos del Alma'
    },
    {
      id: 'ojos', tipo: 'Arte', fecha: 'Hasta el 8 de noviembre', hora: 'Inaugurada el 8 de octubre', fin: '2026-11-08',
      titulo: 'Ojos del Alma', lugar: 'Factor F, 4° piso',
      texto: '8 artistas y 86 obras a partir de una pregunta clínica de la Dra. Paola Andrea Dorta Salfate: ¿qué ocurre entre el diagnóstico y la sanación?',
      precio: 'Entrada gratis', interna: 'factor-f.html'
    },
    {
      id: 'musica', tipo: 'Música', fecha: 'Viernes a domingo', hora: 'Vie 13:00 a 18:00 · Sáb y dom 13:00 a 19:00', fin: '2099-01-01',
      titulo: 'Música en el Patio Central', lugar: 'Patio Central',
      texto: 'Todos los fines de semana te esperamos con rica música para que disfrutes tu tarde en Factoría Franklin.',
      precio: 'Entrada liberada', img: 'assets/img/musica-patio.jpg', alt: 'Saxofonista tocando en la Factoría'
    },
    {
      id: 'transito', tipo: 'Arte', fecha: 'Viernes a domingo', hora: 'Desde las 12:30', fin: '2099-01-01',
      titulo: 'Espacio en Tránsito', lugar: 'Piso 3',
      texto: 'Un espacio de difusión para el arte contemporáneo.',
      precio: 'Entrada liberada', img: 'assets/img/sala-exposicion.jpg', alt: 'Visitantes en una sala de arte'
    }
  ],

  // Registro de actividades recientes (blog de factoria-franklin.cl)
  registro: [
    { titulo: 'Perderse para Encontrar', fecha: '26 sept al 4 oct', texto: 'Iniciativa de Puebla que celebra cinco años de trabajo territorial en Barrio Franklin, junto a más de 15 vecinos y organizaciones.', img: 'assets/img/perderse-para-encontrar.jpg', url: 'https://factoria-franklin.cl/perderse-para-encontrar-factor-f/' },
    { titulo: 'Feria del Libro', fecha: '26 y 27 sept', texto: 'Editoriales independientes chilenas, autores y cuentacuentos para niñas y niños.', img: 'assets/img/feria-del-libro.jpg', url: 'https://factoria-franklin.cl/feria-del-libro-factoria-franklin-septiembre/' },
    { titulo: 'Fonda Medieval Party', fecha: '18 al 20 sept', texto: 'Más de 40 variedades de cervezas artesanales e hidromiel, música celta y folclórica para Fiestas Patrias.', img: 'assets/img/medieval-party.jpg', url: 'https://factoria-franklin.cl/medieval-party-factoria-franklin-septiembre/' },
    { titulo: 'Feria de Vinilos', fecha: '12 y 13 sept', texto: 'La Bandita Vinilera trajo la Feria de Vinilos a Factoría Franklin.', url: 'https://factoria-franklin.cl/feria-de-vinilos-factoria-franklin-septiembre/' },
    { titulo: 'Mercado Factoría Franklin · Edición 05', fecha: '12 y 13 sept', texto: 'Diseño, arte, oficios y gastronomía.', url: 'https://factoria-franklin.cl/mercado-factoria-franklin-edicion-05-septiembre/' },
    { titulo: 'Santiago IPA Fest 2026', fecha: '22 y 23 ago', texto: 'Cervecerías artesanales, música en vivo y cultura cervecera.', url: 'https://factoria-franklin.cl/santiago-ipa-fest-2026-en-factoria-franklin/' },
    { titulo: 'Expresión Botánica', fecha: 'Desde el 13 ago', texto: 'Muestra colectiva de 30 artistas seleccionados en Factor F.', url: 'https://factoria-franklin.cl/exposicion-expresion-botanica-factor-f/' }
  ],

  /* Conexión con Mailchimp.
     1. En Mailchimp: Audiencia → Formularios de registro → Formularios integrados.
     2. Copia la URL del atributo action del formulario (termina en /subscribe/post?u=...&id=...) y pégala en "action".
     Mientras "action" esté vacío, los formularios funcionan en modo maqueta (muestran la confirmación sin enviar). */
  mailchimp: {
    action: '',
    // nombre del campo en esta web → etiqueta del campo en Mailchimp (Audiencia → Configuración → Campos y etiquetas)
    campos: { correo: 'EMAIL', nombre: 'FNAME', comuna: 'COMUNA', celular: 'PHONE', recorrido: 'RECORRIDO', horario: 'HORARIO', personas: 'PERSONAS', origen: 'ORIGEN', disciplina: 'DISCIPLINA', portafolio: 'PORTAFOLIO' },
    // interés → nombre del grupo en el código del formulario integrado, por ejemplo 'group[12345][1]'
    intereses: { 'Arte': '', 'Gastronomía': '', 'Ferias': '', 'Música': '', 'Licores': '', 'Visitas guiadas': '' },
    // formulario → ID de la etiqueta (tag) de Mailchimp, para saber de dónde vino cada contacto
    etiquetas: { boletin: '', ruta: '', visita: '', convocatoria: '' }
  },

  prensa: [
    { medio: 'La Tercera', titulo: 'Las sabrosas historias que dan vida a la Factoría Franklin', url: 'https://www.latercera.com/transformadores/noticia/las-sabrosas-historias-que-dan-vida-a-la-factoria-franklin/YJOIHZFPBZG3TFV63YHKJNG6OY/' },
    { medio: 'National Geographic Viajes', titulo: 'Factoría Franklin, la fábrica que congrega a los artesanos chilenos del sabor', url: 'https://viajes.nationalgeographic.com.es/gastronomia/fabrica-que-congrega-a-artesanos-gastronomicos-santiago-chile_18077' },
    { medio: 'La Tercera', titulo: 'La Vermutería del Pobre Vermut: la barra que es un hit en Franklin', url: 'https://www.latercera.com/finde/noticia/la-vermuteria-del-pobre-vermut-la-barra-que-es-un-hit-en-franklin/' },
    { medio: 'Guía Comino', titulo: 'Festival del Vermut: el vermut chileno se toma la Factoría Franklin', url: 'https://comino.cl/festival-del-vermut-el-vermut-chileno-se-toma-la-factoria-franklin/' }
  ]
};
