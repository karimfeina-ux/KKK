export type Language = "ca" | "es";

export interface ConfirmedOfferingCategory {
  id: string;
  name: {
    ca: string;
    es: string;
  };
  badge: {
    ca: string;
    es: string;
  };
  summary: {
    ca: string;
    es: string;
  };
  highlights: {
    ca: string[];
    es: string[];
  };
  image: string;
  imageAlt: {
    ca: string;
    es: string;
  };
  popularDishes: {
    ca: string;
    es: string;
    type?: string;
  }[];
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: {
    ca: string;
    es: string;
  };
  description?: {
    ca: string;
    es: string;
  };
  price?: string;
}

export interface OwnerEditableConfig {
  hasCustomHours: boolean;
  openingHoursNotes: {
    ca: string;
    es: string;
  };
  customMenuItems: MenuItem[];
}

export const VERIFIED_BUSINESS_DATA = {
  name: "La Montserratina",
  brandSubtitle: {
    ca: "Cafeteria & Espai Gastronòmic",
    es: "Cafetería & Espacio Gastronómico",
  },
  logoSeal: "/images/montserratina-turisme.jpg",
  rating: "4.1",
  reviewCount: "250+",
  capacity: "45",
  address: "Carrer Muralla del Carme, 11, 08241 Manresa, Barcelona, Espanya",
  addressShort: "Carrer Muralla del Carme, 11, Manresa",
  city: "Manresa",
  district: "Centre Històric - Muralla",
  comarca: "El Bages",
  province: "Barcelona",
  postalCode: "08241",
  region: "Catalunya",
  phone: "+34 938 72 09 26",
  phoneClean: "+34938720926",
  email: "montserratina11@yahoo.es",
  instagramUrl: "https://www.instagram.com/lamontserratinamanresa/",
  instagramHandle: "@lamontserratinamanresa",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Carrer+Muralla+del+Carme+11+08241+Manresa&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsUrl: "https://www.google.com/maps/place/La+Montserratina/@41.7253094,1.8228649,17z/data=!4m15!1m8!3m7!1s0x12a458733e0dd471:0x41aef1d88d67ed52!2sMuralla+del+Carme,+11,+08241+Manresa,+Barcelona!3b1!8m2!3d41.7251266!4d1.8253988!16s%2Fg%2F11bw4npndd!3m5!1s0x12a458733e87a499:0xabb7a9d1b0ae17d0!8m2!3d41.7252087!4d1.8254643!16s%2Fg%2F11cssmsn37?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  googleMapsBusinessUrl: "https://www.google.com/maps/place/La+Montserratina/@41.7253094,1.8228649,17z/data=!4m15!1m8!3m7!1s0x12a458733e0dd471:0x41aef1d88d67ed52!2sMuralla+del+Carme,+11,+08241+Manresa,+Barcelona!3b1!8m2!3d41.7251266!4d1.8253988!16s%2Fg%2F11bw4npndd!3m5!1s0x12a458733e87a499:0xabb7a9d1b0ae17d0!8m2!3d41.7252087!4d1.8254643!16s%2Fg%2F11cssmsn37?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  shareUrl: "https://ais-pre-rjsmkqpgdeepfsggtugbb2-235675018208.europe-west3.run.app",
  
  // Real hours verified with Ajuntament de Manresa & Manresa Turisme
  schedule: [
    { dayId: 1, dayName: { ca: "Dilluns", es: "Lunes" }, hours: "07:00 – 23:00 h", isOpen: true },
    { dayId: 2, dayName: { ca: "Dimarts", es: "Martes" }, hours: "07:00 – 23:00 h", isOpen: true },
    { dayId: 3, dayName: { ca: "Dimecres", es: "Miércoles" }, hours: "07:00 – 23:00 h", isOpen: true },
    { dayId: 4, dayName: { ca: "Dijous", es: "Jueves" }, hours: "07:00 – 23:00 h", isOpen: true },
    { dayId: 5, dayName: { ca: "Divendres", es: "Viernes" }, hours: "07:00 – 23:00 h", isOpen: true },
    { dayId: 6, dayName: { ca: "Dissabte", es: "Sábado" }, hours: "08:00 – 01:00 h", isOpen: true },
    { dayId: 0, dayName: { ca: "Diumenge", es: "Domingo" }, hours: "Tancat per descans", isOpen: false },
  ],

  heritageStory: {
    ca: "Situada al bell mig de Manresa, La Montserratina ocupa un espai emblemàtic al Carrer Muralla del Carme, on destaquen les seves impressionants parets de pedra originals que evoquen el traçat històric de la muralla medieval de la ciutat. Un establiment de tradició comercial que s'ha consolidat com un imprescindible punt de trobada per esmorzar, dinar de menú casolà o gaudir de tapes a la terrassa.",
    es: "Situada en pleno centro de Manresa, La Montserratina ocupa un espacio emblemático en el Carrer Muralla del Carme, donde destacan sus impresionantes paredes de piedra originales que evocan el trazado histórico de la muralla medieval de la ciudad. Un establecimiento de tradición comercial que se ha consolidado como un imprescindible punto de encuentro para desayunar, comer de menú casero o disfrutar de tapas en la terraza.",
  },

  features: [
    {
      id: "stone-walls",
      icon: "Shield",
      title: { ca: "Parets de Pedra Originals", es: "Paredes de Piedra Originales" },
      desc: {
        ca: "Interior acollidor amb murs de pedra vista testimonis de la història de la Muralla del Carme.",
        es: "Interior acogedor con muros de piedra vista testigos de la historia de la Muralla del Carme."
      }
    },
    {
      id: "outdoor-terrace",
      icon: "Sun",
      title: { ca: "Terrassa a la Muralla", es: "Terraza en la Muralla" },
      desc: {
        ca: "Terrassa exterior a peu de carrer per gaudir del cafè al sol, el vermut o la fresca del vespre.",
        es: "Terraza exterior a pie de calle para disfrutar del café al sol, el vermut o el fresco de la tarde."
      }
    },
    {
      id: "daily-menu",
      icon: "Utensils",
      title: { ca: "Menú del Migdia i Tapes", es: "Menú del Mediodía y Tapas" },
      desc: {
        ca: "Cuina tradicional mediterrània, racions per compartir i plats combinats preparats cada dia.",
        es: "Cocina tradicional mediterránea, raciones para compartir y platos combinados preparados a diario."
      }
    },
    {
      id: "early-breakfast",
      icon: "Coffee",
      title: { ca: "Esmorzars des de les 7:00 h", es: "Desayunos desde las 7:00 h" },
      desc: {
        ca: "Oberts des de primera hora del matí per acompanyar la jornada amb cafè i torrades de pa de pagès.",
        es: "Abiertos desde primera hora de la mañana para acompañar la jornada con café y tostadas de pan de payés."
      }
    }
  ]
};

export const CONFIRMED_OFFERING_CATEGORIES: ConfirmedOfferingCategory[] = [
  {
    id: "esmorzars",
    name: {
      ca: "Esmorzars de Forquilla & Cafè",
      es: "Desayunos de Tenedor & Café",
    },
    badge: {
      ca: "Des de les 07:00 h",
      es: "Desde las 07:00 h",
    },
    summary: {
      ca: "El gran clàssic de la casa per començar el dia al centre de Manresa: cafè d'aroma intens, pa de pagès torrat amb tomàquet i oli d'oliva verge, embotits tradicionals i entrepans calents fets al moment.",
      es: "El gran clásico de la casa para empezar el día en el centro de Manresa: café de aroma intenso, pan de payés tostado con tomate y aceite de oliva virgen, embutidos tradicionales y bocadillos calientes hechos al momento.",
    },
    highlights: {
      ca: [
        "Cafè amb llet cremós, tallat, espresso i bombó",
        "Torrades de pa de pagès amb pernil ibèric i formatge",
        "Truita a la francesa o de patates",
        "Entrepans freds i calents (llom, cansalada, truita, formatge)",
        "Pastes del dia i brioixeria artesana"
      ],
      es: [
        "Café con leche cremoso, cortado, espresso y bombón",
        "Tostadas de pan de payés con jamón ibérico y queso",
        "Tortilla francesa o de patatas",
        "Bocadillos fríos y calientes (lomo, panceta, tortilla, queso)",
        "Bollería del día y pastas artesanales"
      ],
    },
    popularDishes: [
      { ca: "Torrada de pa de pagès amb tomàquet i embotits", es: "Tostada de pan de payés con tomate y embutidos" },
      { ca: "Cafè de la casa amb brioixeria del dia", es: "Café de la casa con bollería del día" },
      { ca: "Entrepà calent a la planxa", es: "Bocadillo caliente a la plancha" }
    ],
    image: "/assets/aistudio/google-maps-dish.jpg",
    imageAlt: {
      ca: "Cafè de La Montserratina a la taula amb vistes a la terrassa i carrer Muralla del Carme",
      es: "Café de La Montserratina en mesa con vistas a la terraza y calle Muralla del Carme",
    },
  },
  {
    id: "menu-migdia",
    name: {
      ca: "Menú del Migdia & Plats Casolans",
      es: "Menú del Mediodía & Platos Caseros",
    },
    badge: {
      ca: "De dilluns a divendres",
      es: "De lunes a viernes",
    },
    summary: {
      ca: "Cuina de mercat i plats reconfortants per dinar a Manresa. Propostes que varien diàriament segons la temporada, combinant primers plats de cullera, pastes, verdures fresques i segons de carn o peix.",
      es: "Cocina de mercado y platos reconfortantes para comer en Manresa. Propuestas que varían a diario según la temporada, combinando primeros platos de cuchara, pastas, verduras frescas y segundos de carne o pescado.",
    },
    highlights: {
      ca: [
        "Primer plat variat (amanides, llegums, pasta o sopa)",
        "Segon plat amb guarnició (carns a la brasa/planxa, guisats)",
        "Pa, beguda i postres casolanes",
        "Servei àgil per a la pausa del treball o visites a Manresa"
      ],
      es: [
        "Primer plato variado (ensaladas, legumbres, pasta o sopa)",
        "Segundo plato con guarnición (carnes a la plancha/guisadas)",
        "Pan, bebida y postres caseros",
        "Servicio ágil para la pausa laboral o visitas en Manresa"
      ],
    },
    popularDishes: [
      { ca: "Plat del dia amb productes de proximitat", es: "Plato del día con productos de proximidad" },
      { ca: "Guisats tradicionals catalans", es: "Guisos tradicionales catalanes" },
      { ca: "Postres casolanes de la casa", es: "Postres caseros de la casa" }
    ],
    image: "/assets/aistudio/especialidad-en-arroces_2a389752.jpg",
    imageAlt: {
      ca: "Arròs negre mariner amb musclos i allioli casolà a La Montserratina",
      es: "Arroz negro marinero con mejillones y alioli casero en La Montserratina",
    },
  },
  {
    id: "tapes-racions",
    name: {
      ca: "Tapes Tradicionals & Racions",
      es: "Tapas Tradicionales & Raciones",
    },
    badge: {
      ca: "Tarda & Vespre",
      es: "Tarde & Noche",
    },
    summary: {
      ca: "El sabor del tapeo autèntic a la barra o a la terrassa de la Muralla del Carme: calamars a la romana cruixents amb llimona, croquetes cremoses de rostit, braves casolanes i montaditos de la casa.",
      es: "El sabor del tapeo auténtico en la barra o en la terraza de la Muralla del Carme: calamares a la romana crujientes con limón, croquetas cremosas de asado, bravas caseras y montaditos de la casa.",
    },
    highlights: {
      ca: [
        "Calamars a la romana amb rodanxa de llimona",
        "Croquetes casolanes de pollastre i pernil",
        "Patates braves amb salsa especial",
        "Montaditos calents i fusta de formatges",
        "Vermut de la casa i cerveses artesanes"
      ],
      es: [
        "Calamares a la romana con rodaja de limón",
        "Croquetas caseras de pollo y jamón",
        "Patatas bravas con salsa especial",
        "Montaditos calientes y tabla de quesos",
        "Vermut de la casa y cervezas artesanas"
      ],
    },
    popularDishes: [
      { ca: "Plat combinat de calamars i croquetes", es: "Plato combinado de calamares y croquetas" },
      { ca: "Patates braves La Montserratina", es: "Patatas bravas La Montserratina" },
      { ca: "Montadito calent del xef", es: "Montadito caliente del chef" }
    ],
    image: "/assets/aistudio/caption_daa4de7a.jpg",
    imageAlt: {
      ca: "Tapes casolanes de La Montserratina: calamars a la romana i croquetes",
      es: "Tapas caseras de La Montserratina: calamares a la romana y croquetas",
    },
  },
  {
    id: "brasa-mercat",
    name: {
      ca: "Cuina de Mercat & Graellada",
      es: "Cocina de Mercado & Parrilla",
    },
    badge: {
      ca: "Plats principals",
      es: "Platos principales",
    },
    summary: {
      ca: "Segons plats elaborats amb productes frescos del Bages: carns a la planxa i brasa acompanyades de verdures de temporada rostides (carbassó, patates al forn, tomàquets i herbes del bosc).",
      es: "Segundos platos elaborados con productos frescos del Bages: carnes a la plancha y parrilla acompañadas de verduras de temporada asadas (calabacín, patatas al horno, tomates y hierbas del bosque).",
    },
    highlights: {
      ca: [
        "Graellada de carns seleccionades",
        "Verdures fresques de temporada rostides al punt",
        "Patates forneres i tomàquets cherry",
        "Aromatitzat amb romaní natural",
        "Maridatge amb vins de la terra"
      ],
      es: [
        "Parrillada de carnes seleccionadas",
        "Verduras frescas de temporada asadas al punto",
        "Patatas panaderas y tomates cherry",
        "Aromatizado con romero natural",
        "Maridaje con vinos de la tierra"
      ],
    },
    popularDishes: [
      { ca: "Graellada de carn amb verdures de l'hort", es: "Parrillada de carne con verduras del huerto" },
      { ca: "Costelles i botifarra a la planxa", es: "Costillas y butifarra a la plancha" },
      { ca: "Guarnició de patates i romaní fresc", es: "Guarnición de patatas y romero fresco" }
    ],
    image: "/assets/aistudio/la-montserratina-dispone_bea134d3.jpg",
    imageAlt: {
      ca: "Plat de carns i verdures a la graella de La Montserratina",
      es: "Plato de carnes y verduras a la parrilla de La Montserratina",
    },
  },
  {
    id: "celler-cafeteria",
    name: {
      ca: "Celler de Vins Catalans & Cafeteria",
      es: "Bodega de Vinos Catalanes & Cafetería",
    },
    badge: {
      ca: "D.O. Catalanes",
      es: "D.O. Catalanas",
    },
    summary: {
      ca: "Cuidada selecció de vins catalans (Costers del Segre, Pla de Bages, Penedès) per acompanyar dinars i sopars sota les parets de pedra originals, a més de servei de cafès, infusions i aperitius durant tot el dia.",
      es: "Cuidada selección de vinos catalanes (Costers del Segre, Pla de Bages, Penedès) para acompañar comidas y cenas bajo las paredes de piedra originales, además de servicio de cafés, infusiones y aperitivos durante todo el día.",
    },
    highlights: {
      ca: [
        "Vins negres, blancs i rosats de la terra",
        "Ampolles de cellers com Clos Pons (Alges - Costers del Segre)",
        "Copes de vidre preparades per a maridatge",
        "Cafès i refrescos continus a la barra",
        "Ambient nocturn càlid i acollidor"
      ],
      es: [
        "Vinos tintos, blancos y rosados de la tierra",
        "Botellas de bodegas como Clos Pons (Alges - Costers del Segre)",
        "Copas de vidrio preparadas para maridaje",
        "Cafés y refrescos continuos en la barra",
        "Ambiente nocturno cálido y acogedor"
      ],
    },
    popularDishes: [
      { ca: "Vi Alges (Costers del Segre) a taula", es: "Vino Alges (Costers del Segre) en mesa" },
      { ca: "Copes de vi seleccionat de la casa", es: "Copas de vino seleccionado de la casa" },
      { ca: "Cafeteria i aperitius a la barra", es: "Cafetería y aperitivos en barra" }
    ],
    image: "/assets/aistudio/en-la-montserratina-tenemos_7c8c2d30.jpg",
    imageAlt: {
      ca: "Prestatgeria del celler de vins a La Montserratina",
      es: "Estantería de la bodega de vinos en La Montserratina",
    },
  },
];

export const REAL_BUSINESS_PHOTOS = {
  diningRoomStone: "/assets/aistudio/comedor-de-la-montserratina_d371de2b.jpg",
  interiorArchLogo: "/assets/aistudio/espacio-la-montserratina_8f1399c7.jpg",
  facadeGlassWindow: "/assets/aistudio/cocina-informal-en-el_31342b72.jpg",
  tapasSpread: "/assets/aistudio/caption_daa4de7a.jpg",
  arrozNegro: "/assets/aistudio/especialidad-en-arroces_2a389752.jpg",
  grilledPlatter: "/assets/aistudio/la-montserratina-dispone_bea134d3.jpg",
  wineEveningTable: "/assets/aistudio/en-la-montserratina-dispones_0823d253.jpg",
  wineCellarGlasses: "/assets/aistudio/en-la-montserratina-tenemos_7c8c2d30.jpg",
  coffeeTerraceMuralla: "/assets/aistudio/google-maps-dish.jpg",
  streetViewMuralla: "https://upload.wikimedia.org/wikipedia/commons/7/75/Muralla_del_Carme_de_Manresa_per_Nadal.jpg",
};

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    image: "/assets/aistudio/comedor-de-la-montserratina_d371de2b.jpg",
    caption: {
      ca: "El nostre menjador amb la paret de pedra històrica de la Muralla del Carme. Taula preparada per gaudir d'una bona trobada.",
      es: "Nuestro comedor con la pared de piedra histórica de la Muralla del Carme. Mesa preparada para disfrutar de un buen encuentro.",
    },
    tag: { ca: "Ambient & Història", es: "Ambiente & Historia" },
  },
  {
    id: "post-2",
    image: "/assets/aistudio/especialidad-en-arroces_2a389752.jpg",
    caption: {
      ca: "Especialitat en arrossos a La Montserratina: arròs negre amb musclos i el nostre allioli casolà.",
      es: "Especialidad en arroces en La Montserratina: arroz negro con mejillones y nuestro alioli casero.",
    },
    tag: { ca: "Especialitat Arrossos", es: "Especialidad Arroces" },
  },
  {
    id: "post-3",
    image: "/assets/aistudio/caption_daa4de7a.jpg",
    caption: {
      ca: "Tapes casolanes a punt: calamars a la romana acabats de fer, croquetes daurades i braves per compartir.",
      es: "Tapas caseras listas: calamares a la romana recién hechos, croquetas doradas y bravas para compartir.",
    },
    tag: { ca: "Tapes de la Casa", es: "Tapas de la Casa" },
  },
  {
    id: "post-4",
    image: "/assets/aistudio/la-montserratina-dispone_bea134d3.jpg",
    caption: {
      ca: "Carns a la brasa amb verdures de l'hort del Bages i romaní aromàtic. Cuina honesta i de mercat.",
      es: "Carnes a la parrilla con verduras de la huerta del Bages y romero aromático. Cocina honesta y de mercado.",
    },
    tag: { ca: "Cuina de Mercat", es: "Cocina de Mercado" },
  },
  {
    id: "post-5",
    image: "/assets/aistudio/espacio-la-montserratina_8f1399c7.jpg",
    caption: {
      ca: "El nostre espai interior: el segell oficial de La Montserratina i el pas entre els arcs de pedra medieval.",
      es: "Nuestro espacio interior: el sello oficial de La Montserratina y el paso entre los arcos de piedra medieval.",
    },
    tag: { ca: "Espai Gastronòmic", es: "Espacio Gastronómico" },
  },
  {
    id: "post-6",
    image: "/assets/aistudio/google-maps-dish.jpg",
    caption: {
      ca: "Des de les 7:00 h: un cafè calent a la taula amb vistes a la terrassa del Carrer Muralla del Carme.",
      es: "Desde las 7:00 h: un café caliente en mesa con vistas a la terraza del Carrer Muralla del Carme.",
    },
    tag: { ca: "Esmorzars & Terrassa", es: "Desayunos & Terraza" },
  },
  {
    id: "post-7",
    image: "/assets/aistudio/cocina-informal-en-el_31342b72.jpg",
    caption: {
      ca: "Des del carrer Muralla del Carme: la vidriera que us dóna la benvinguda a La Montserratina.",
      es: "Desde la calle Muralla del Carme: la cristalera que os da la bienvenida a La Montserratina.",
    },
    tag: { ca: "Muralla del Carme, 11", es: "Muralla del Carme, 11" },
  },
  {
    id: "post-8",
    image: "/assets/aistudio/en-la-montserratina-dispones_0823d253.jpg",
    caption: {
      ca: "Sopars i vespres a Manresa amb una bona copa de vi català (Alges - Costers del Segre).",
      es: "Cenas y noches en Manresa con una buena copa de vino catalán (Alges - Costers del Segre).",
    },
    tag: { ca: "Vins & Maridatge", es: "Vinos & Maridaje" },
  },
  {
    id: "post-9",
    image: "/assets/aistudio/en-la-montserratina-tenemos_7c8c2d30.jpg",
    caption: {
      ca: "El nostre celler: referències de D.O. Pla de Bages, Costers del Segre i Penedès preparades per gaudir.",
      es: "Nuestra bodega: referencias de D.O. Pla de Bages, Costers del Segre y Penedès listas para disfrutar.",
    },
    tag: { ca: "El Celler", es: "La Bodega" },
  },
];

export const INITIAL_OWNER_CONFIG: OwnerEditableConfig = {
  hasCustomHours: false,
  openingHoursNotes: {
    ca: "Dilluns a dijous: 07:00 – 23:00 h • Divendres: 07:00 – 23:00 h • Dissabte: 08:00 – 01:00 h • Diumenge: Tancat per descans setmanal.",
    es: "Lunes a jueves: 07:00 – 23:00 h • Viernes: 07:00 – 23:00 h • Sábado: 08:00 – 01:00 h • Domingo: Cerrado por descanso semanal.",
  },
  customMenuItems: [],
};

export const UI_STRINGS = {
  ca: {
    navHome: "Inici",
    navAbout: "Història & Espai",
    navOfferings: "Menú & Tapes",
    navSchedule: "Horaris",
    navContact: "Com Arribar",
    navCall: "Trucar",
    shareWithOwner: "Enllaç per al Propietari",
    heroBadge: "Carrer Muralla del Carme, 11 • Manresa (Bages)",
    heroTitle: "La Montserratina",
    heroSubtitle: "Cafeteria i cuina informal al cor de Manresa. Murs de pedra històrica, esmorzars de forquilla, tapes tradicionals i terrassa a la Muralla del Carme.",
    heroActionCall: "Trucar directament (938 72 09 26)",
    heroActionDirections: "Veure mapa i com arribar",
    heroOpenNow: "Obert ara",
    heroClosedNow: "Tancat ara",
    openToday: "Horari avui",
    viewMenuAction: "Descobrir la carta",
    aboutHeading: "Un Espai amb Història a Manresa",
    aboutSub: "On la pedra medieval de la muralla es fon amb la calidesa d'una cafeteria de barri.",
    aboutHistoryTag: "Patrimoni & Tradició a la Muralla del Carme",
    offeringsHeading: "La Nostra Oferta Gastronòmica",
    offeringsSub: "Esmorzars consistents, menú casolà del migdia i tapes per compartir.",
    offeringsNotice: "Plats i suggeriments elaborats diàriament segons mercat. Truqueu al 938 72 09 26 per encarregar o reservar.",
    scheduleHeading: "Horaris de Servei Confirmats",
    scheduleSub: "Oberts des de primera hora del matí fins a la nit per acompanyar el vostre dia a Manresa.",
    contactHeading: "Localització & Contacte",
    contactSub: "Us esperem al Carrer Muralla del Carme, 11, Manresa.",
    addressLabel: "Adreça Oficial",
    phoneLabel: "Telèfon de Contacte",
    emailLabel: "Correu Electrònic",
    instagramLabel: "Instagram Oficial",
    instagramHeading: "El Nostre Dia a Dia a Instagram",
    instagramSub: "Imatges reals dels nostres arrossos, tapes, celler de vins i el menjador amb parets de pedra històrica.",
    instagramFollowBtn: "Seguir a @lamontserratinamanresa",
    openInGoogleMaps: "Obrir a Google Maps",
    getDirections: "Com arribar amb cotxe o a peu",
    ownerPanelBtn: "Panell del Propietari",
    ownerPanelTitle: "Configuració & Instruccions per a La Montserratina",
    ownerPanelDesc: "Ajusteu els horaris d'obertura o afegiu plats concrets a la carta amb total flexibilitat.",
    shareModalTitle: "Enllaç Oficial per Ensenyar al Propietari",
    shareModalSubtitle: "Mostreu la web en directe des del mòbil o compartiu-la directament amb el responsable de La Montserratina.",
    copyLinkBtn: "Copiar Enllaç Web",
    copiedText: "Enllaç copiat al porta-retalls!",
    openWhatsappBtn: "Enviar per WhatsApp al propietari",
    sendEmailBtn: "Enviar per correu a montserratina11@yahoo.es",
    scanQrNotice: "Escanegeu el codi QR amb la càmera del mòbil per obrir la web a l'instant:",
    footerVerifiedNotice: "Dades de negoci verificades oficialment per Manresa Turisme i l'Ajuntament de Manresa.",
    footerRights: "Tots els drets reservats.",
  },
  es: {
    navHome: "Inicio",
    navAbout: "Historia & Espacio",
    navOfferings: "Menú & Tapas",
    navSchedule: "Horarios",
    navContact: "Cómo Llegar",
    navCall: "Llamar",
    shareWithOwner: "Enlace para el Propietario",
    heroBadge: "Carrer Muralla del Carme, 11 • Manresa (Bages)",
    heroTitle: "La Montserratina",
    heroSubtitle: "Cafetería y cocina informal en el corazón de Manresa. Muros de piedra histórica, desayunos de tenedor, tapas tradicionales y terraza en la Muralla del Carme.",
    heroActionCall: "Llamar directamente (938 72 09 26)",
    heroActionDirections: "Ver mapa y cómo llegar",
    heroOpenNow: "Abierto ahora",
    heroClosedNow: "Cerrado ahora",
    openToday: "Horario hoy",
    viewMenuAction: "Descubrir la carta",
    aboutHeading: "Un Espacio con Historia en Manresa",
    aboutSub: "Donde la piedra medieval de la muralla se funde con la calidez de una cafetería de barrio.",
    aboutHistoryTag: "Patrimonio & Tradición en la Muralla del Carme",
    offeringsHeading: "Nuestra Oferta Gastronómica",
    offeringsSub: "Desayunos consistentes, menú casero del mediodía y tapas para compartir.",
    offeringsNotice: "Platos y sugerencias elaborados a diario según mercado. Llame al 938 72 09 26 para encargar o reservar.",
    scheduleHeading: "Horarios de Servicio Confirmados",
    scheduleSub: "Abiertos desde primera hora de la mañana hasta la noche para acompañar su jornada en Manresa.",
    contactHeading: "Localización & Contacto",
    contactSub: "Le esperamos en Carrer Muralla del Carme, 11, Manresa.",
    addressLabel: "Dirección Oficial",
    phoneLabel: "Teléfono de Contacto",
    emailLabel: "Correo Electrónico",
    instagramLabel: "Instagram Oficial",
    instagramHeading: "Nuestro Día a Día en Instagram",
    instagramSub: "Imágenes reales de nuestros arroces, tapas, bodega de vinos y el comedor con paredes de piedra histórica.",
    instagramFollowBtn: "Seguir a @lamontserratinamanresa",
    openInGoogleMaps: "Abrir en Google Maps",
    getDirections: "Cómo llegar en coche o a pie",
    ownerPanelBtn: "Panel del Propietario",
    ownerPanelTitle: "Configuración & Instrucciones para La Montserratina",
    ownerPanelDesc: "Ajuste los horarios de apertura o añada platos concretos a la carta con total flexibilidad.",
    shareModalTitle: "Enlace Oficial para Mostrar al Propietario",
    shareModalSubtitle: "Muestre la web en vivo desde el móvil o compártala directamente con el responsable de La Montserratina.",
    copyLinkBtn: "Copiar Enlace Web",
    copiedText: "¡Enlace copiado al portapapeles!",
    openWhatsappBtn: "Enviar por WhatsApp al propietario",
    sendEmailBtn: "Enviar por correo a montserratina11@yahoo.es",
    scanQrNotice: "Escanee el código QR con la cámara del móvil para abrir la web al instante:",
    footerVerifiedNotice: "Datos de negocio verificados oficialmente por Manresa Turisme y el Ajuntament de Manresa.",
    footerRights: "Todos los derechos reservados.",
  },
};
