export default {
  global: {
    Name: 'Destrezas en el punto de pago',
    Description:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar la destreza en el manejo de caja, manejo de dinero, transacciones financieras y otras funciones que se le asignan a los cajeros en los <i>retail</i>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recaudo en el punto de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Base de la caja',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Apertura de la caja',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Validación de transacciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Precios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: ' Legalidad de medios de pago',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Seguridad y herramientas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Excedentes de pago',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Devoluciones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Empaque de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: ' Descripción del empaque',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normativa y clasificación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Técnicas de empaque',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Empaque de productos según naturaleza',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF7_632223_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Recaudo en el punto de pago',
      referencia:
        'Vértice, P. (2008) Gestión del punto de venta.  Editorial Publicaciones Vértice.',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=1_Ys-tbGD90C&printsec=frontcover&hl=es&source=gbs_atb#v=onepage&q&f=false',
    },
    {
      tema: 'Validación de transacciones',
      referencia:
        'Gates Enríquez, A. W., & Moreno Flores, D. M. (2019). Merchandising en el punto de venta y la promoción en Supermercado Metro–Sede Pedro Miotta, en Lima.',
      tipo: 'Articulo',
      link: 'https://repositorio.ucv.edu.pe/handle/20.500.12692/73476',
    },
  ],
  glosario: [
    {
      termino: 'Apertura',
      significado:
        'acto con que se da comienzo a las funciones de una asamblea, centro o institución en la sesión de apertura de cualquier proceso.',
    },
    {
      termino: 'Caja',
      significado:
        'aparato usado en los comercios y establecimientos públicos para realizar automáticamente operaciones matemáticas básicas y guardar el dinero.',
    },
    {
      termino: 'Cajero',
      significado:
        ' persona encargada de la entrada y salida de caudales en un comercio o un banco.',
    },
    {
      termino: 'Cliente',
      significado:
        ' persona que utiliza habitualmente los servicios de un profesional o de una empresa.',
    },
    {
      termino: 'Clientela',
      significado:
        'conjunto de clientes de una empresa, de un establecimiento o de un profesional.',
    },
    {
      termino: 'Criptograma',
      significado: 'documento escrito en clave.',
    },
    {
      termino: 'Durabilidad',
      significado:
        ' cualidad de duradero, la durabilidad del acero inoxidable está demostrada.',
    },
    {
      termino: 'Embalaje',
      significado:
        'operación de embalar objetos para ser transportados, en esta sección se realiza el embalaje de la mercancía.',
    },
    {
      termino: 'Empaque',
      significado: ' conjunto de materiales con que se envuelve una cosa.',
    },
    {
      termino: '<i>Hándicap</i>',
      significado: 'Desventaja.',
    },
    {
      termino: '<i>Hard tag</i>',
      significado:
        'dispositivo de seguridad o identificación electrónica que se adhiere a la mercancía y a las cajas de envío.',
    },
    {
      termino: 'Higroscópico',
      significado: 'que tiene la propiedad de absorber o exhalar la humedad.',
    },
    {
      termino: 'POS',
      significado:
        'terminal punto de venta (TPV), también denominado POS (<i>Point of Sale</i>, en inglés) es un dispositivo que en un establecimiento comercial permite gestionar tareas relacionadas con la venta.',
    },
    {
      termino: 'Punto de pago',
      significado:
        'sitio donde están ubicadas las cajas registradoras en los establecimientos comerciales.',
    },
    {
      termino: 'Recaudo',
      significado: ' bien custodiado, en lugar seguro y controlado.',
    },
    {
      termino: '<i>Tag’s</i>',
      significado:
        'etiqueta (lenguaje de marcado), en los lenguajes informáticos de marcado.',
    },
    {
      termino: 'Transacciones',
      significado:
        'trato o convenio por el cual dos partes llegan a un acuerdo comercial, generalmente de compraventa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualícese. (2018). Cierre o arqueo de caja diario: errores y complicaciones que se pueden presentar en el proceso. ',
      link:
        'https://actualicese.com/archivo/cierre-o-arqueo-de-caja-diario-errores-y-complicaciones-que-se-pueden-presentar-en-el-proceso/',
    },
    {
      referencia:
        'Clasificación de envases. (2017). Clasificación de los envases según su función. ',
      link:
        'https://clasificaciondeenvases.blogspot.com/2017/10/clasificacion-de-envases-en-funcion-de.html ',
    },
    {
      referencia:
        'LogDist. (2020). Normas ISO para empaques y embalajes: las reglas de calidad. ',
      link:
        'https://es.vmalogdist.com/normas-iso-para-empaques-y-embalajes-las-reglas-de-calidad/ ',
    },
    {
      referencia: 'UMNG. (s.f.) Empaque y embalaje. UMNG. ',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/ovas/administracion_empresas/logistica/unidad_4/DM.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Instructora ',
          centro:
            'Centro de Gestión Tecnológica de Servicios CGTS - Regional Valle',
        },
        {
          nombre: 'Jaime Alberto Pérez Posada',
          cargo: 'Instructor',
          centro: 'Centro de Comercio SENA - Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman ',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro	',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
