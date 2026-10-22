export type Language = "ca" | "es";

export interface ConfirmedOfferingCategory {
  id: string;
  name: {
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
  price?: string; // Optional — never fabricated
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
  name: "Montserratina",
  type: {
    ca: "Cafeteria i Restaurant Informal",
    es: "Cafetería y Restaurante Informal",
  },
  address: "Carrer Muralla del Carme, 11, 08241 Manresa, Barcelona, Espanya",
  addressShort: "Carrer Muralla del Carme, 11, Manresa",
  city: "Manresa",
  province: "Barcelona",
  postalCode: "08241",
  region: "Catalunya",
  phone: "+34 938 72 09 26",
  phoneClean: "+34938720926",
  email: "montserratina11@yahoo.es",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Montserratina+Carrer+Muralla+del+Carme+11+08241+Manresa",
  establishedContext: {
    ca: "Ubicat a la cèntrica Muralla del Carme de Manresa, Montserratina és un punt de trobada acollidor per començar el dia amb un bon cafè, gaudir d'un esmorzar tradicional de forquilla o compartir tapes i plats informals.",
    es: "Ubicado en la céntrica Muralla del Carme de Manresa, Montserratina es un punto de encuentro acogedor para empezar el día con un buen café, disfrutar de un desayuno tradicional o compartir tapas y platos informales.",
  },
};

export const CONFIRMED_OFFERING_CATEGORIES: ConfirmedOfferingCategory[] = [
  {
    id: "esmorzars",
    name: {
      ca: "Esmorzars",
      es: "Desayunos",
    },
    summary: {
      ca: "Des dels clàssics esmorzars de cafè amb pasta o torrada fins a entrepans i opcions consistents per començar el matí amb energia al centre de Manresa.",
      es: "Desde los clásicos desayunos de café con bollería o tostada hasta bocadillos y opciones consistentes para empezar la mañana con energía en el centro de Manresa.",
    },
    highlights: {
      ca: [
        "Cafè amb llet, tallat o sol acabat d'elaborar",
        "Entrepans freds i calents fets al moment",
        "Pa de pagès torrat",
        "Brioixeria del dia"
      ],
      es: [
        "Café con leche, cortado o solo recién elaborado",
        "Bocadillos fríos y calientes hechos al momento",
        "Pan de payés tostado",
        "Bollería del día"
      ],
    },
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80",
    imageAlt: {
      ca: "Cafè acabat de preparar i esmorzar al matí",
      es: "Café recién preparado y desayuno por la mañana",
    },
  },
  {
    id: "cafe-begudes",
    name: {
      ca: "Cafès i Begudes",
      es: "Cafés y Bebidas",
    },
    summary: {
      ca: "Servei de cafetera de qualitat per gaudir d'una bona tassa a qualsevol hora, acompanyat de refrescos, aigües, cerveses i vins.",
      es: "Servicio de cafetera de calidad para disfrutar de una buena taza a cualquier hora, acompañado de refrescos, aguas, cervezas y vinos.",
    },
    highlights: {
      ca: [
        "Espresso i combinacions de cafè clàssiques",
        "Infusions i tes",
        "Begudes refrescants i aigua mineral",
        "Cervesa de tirador i vins de la casa"
      ],
      es: [
        "Espresso y combinaciones de café clásicas",
        "Infusiones y tés",
        "Bebidas refrescantes y agua mineral",
        "Cerveza de barril y vinos de la casa"
      ],
    },
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    imageAlt: {
      ca: "Tassa de cafè amb crema sobre taula de fusta",
      es: "Taza de café con crema sobre mesa de madera",
    },
  },
  {
    id: "tapes",
    name: {
      ca: "Tapes Tradicionals",
      es: "Tapas Tradicionales",
    },
    summary: {
      ca: "Varietat de racions i platets per fer el vermut, compartir amb amics o acompanyar un bon migdia o tarda informal.",
      es: "Variedad de raciones y platillos para tomar el aperitivo, compartir con amigos o acompañar un buen mediodía o tarde informal.",
    },
    highlights: {
      ca: [
        "Platets freds i calents del dia",
        "Assortiment de tapes per picar",
        "Ideal per al vermut a Manresa",
        "Productes i sabors de proximitat"
      ],
      es: [
        "Platillos fríos y calientes del día",
        "Surtido de tapas para picar",
        "Ideal para el aperitivo en Manresa",
        "Productos y sabores de proximidad"
      ],
    },
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=900&q=80",
    imageAlt: {
      ca: "Assortiment de tapes i aperitius sobre la taula",
      es: "Surtido de tapas y aperitivos sobre la mesa",
    },
  },
  {
    id: "menjar-informal",
    name: {
      ca: "Cuina Informal",
      es: "Comida Informal",
    },
    summary: {
      ca: "Plats combinats, entrepans generosos i menges ràpides i saboroses sense formalismes, perfectes per a una pausa còmoda i saborosa.",
      es: "Platos combinados, bocadillos generosos y comidas rápidas y sabrosas sin formalismos, perfectas para una pausa cómoda y sabrosa.",
    },
    highlights: {
      ca: [
        "Entrepans complets freds i calents",
        "Plats senzills i reconfortants",
        "Atenció ràpida i ambient de barri",
        "Servei continu per a una pausa còmoda"
      ],
      es: [
        "Bocadillos completos fríos y calientes",
        "Platos sencillos y reconfortantes",
        "Atención rápida y ambiente de barrio",
        "Servicio continuo para una pausa cómoda"
      ],
    },
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
    imageAlt: {
      ca: "Pa acabat de fornejar i productes artesanals",
      es: "Pan recién horneado y productos artesanales",
    },
  },
];

export const INITIAL_OWNER_CONFIG: OwnerEditableConfig = {
  hasCustomHours: false,
  openingHoursNotes: {
    ca: "Per consultar els horaris exactes d'obertura del dia o festius, podeu trucar-nos directament al +34 938 72 09 26.",
    es: "Para consultar los horarios exactos de apertura del día o festivos, puede llamarnos directamente al +34 938 72 09 26.",
  },
  customMenuItems: [],
};

export const UI_STRINGS = {
  ca: {
    navHome: "Inici",
    navAbout: "Qui som",
    navOfferings: "Oferta Gastronòmica",
    navContact: "Com Arribar i Contacte",
    navCall: "Trucar",
    heroTitle: "Cafeteria i Cuina Informal a Manresa",
    heroSubtitle: "El caliu d'un espai de sempre al Carrer Muralla del Carme. Esmorzars del matí, cafè acabat de fer, tapes per compartir i menjar informal.",
    heroActionCall: "Trucar al restaurant",
    heroActionMap: "Com arribar-hi",
    heroBadge: "Carrer Muralla del Carme, 11 • Manresa",
    aboutHeading: "Benvinguts a Montserratina",
    aboutLead: "Un espai proper i autèntic al rovell de l'ou de Manresa.",
    aboutBody1: "A Montserratina us oferim un ambient familiar i distès pensat per a la gent de la ciutat i per a tothom qui ens visita al Bages. Som el lloc idoni tant per agafar forces amb el primer cafè del matí com per fer una parada al migdia o la tarda.",
    aboutBody2: "La nostra proposta es basa en allò que ens defineix: esmorzars complets, bona cafeteria, tapes casolanes i cuina informal sense complicacions, servida amb la cordialitat de sempre.",
    offeringsHeading: "La Nostra Oferta Gastronòmica",
    offeringsSubtitle: "Propostes pensades per a cada moment de la jornada.",
    offeringsVerifiedNote: "Els plats i suggeriments poden variar segons el servei del dia i mercat. Per conèixer el menú del dia complet o confirmar disponibilitat, consulteu directament al nostre personal.",
    contactHeading: "Contacte i Localització",
    contactSubtitle: "Us esperem al Carrer Muralla del Carme, 11 de Manresa.",
    addressLabel: "Adreça",
    phoneLabel: "Telèfon",
    phoneHelp: "Feu clic per trucar directament",
    emailLabel: "Correu Electrònic",
    openInMaps: "Obrir a Google Maps",
    hoursHeading: "Horari i Atenció",
    hoursCallNote: "Truqueu-nos al 938 72 09 26 per a qualsevol consulta o encàrrec.",
    ownerAdminBtn: "Panell del Propietari",
    ownerAdminTitle: "Instruccions i Configuració del Propietari",
    ownerAdminDesc: "Afegiu o editeu els horaris exactes d'obertura i els plats concrets de la carta amb total veracitat.",
    footerRights: "Tots els drets reservats.",
    footerVerifiedNotice: "Totes les dades de contacte i ubicació han estat contrastades amb la informació oficial del negoci.",
  },
  es: {
    navHome: "Inicio",
    navAbout: "Quiénes somos",
    navOfferings: "Oferta Gastronómica",
    navContact: "Cómo Llegar y Contacto",
    navCall: "Llamar",
    heroTitle: "Cafetería y Cocina Informal en Manresa",
    heroSubtitle: "La calidez de un espacio cercano en el Carrer Muralla del Carme. Desayunos de mañana, café recién hecho, tapas para compartir y comida informal.",
    heroActionCall: "Llamar al restaurante",
    heroActionMap: "Cómo llegar",
    heroBadge: "Carrer Muralla del Carme, 11 • Manresa",
    aboutHeading: "Bienvenidos a Montserratina",
    aboutLead: "Un espacio cercano y auténtico en el centro de Manresa.",
    aboutBody1: "En Montserratina le ofrecemos un ambiente familiar y distendido pensado para los vecinos de la ciudad y para todos aquellos que nos visitan en el Bages. Somos el lugar idóneo tanto para tomar el primer café de la mañana como para hacer una pausa a mediodía o por la tarde.",
    aboutBody2: "Nuestra propuesta se fundamenta en lo que nos define: desayunos completos, buen servicio de café, tapas tradicionales y comida informal sin complicaciones, servida con la cordialidad de siempre.",
    offeringsHeading: "Nuestra Oferta Gastronómica",
    offeringsSubtitle: "Propuestas pensadas para cada momento de la jornada.",
    offeringsVerifiedNote: "Los platos y sugerencias pueden variar según el servicio del día y mercado. Para conocer la carta completa del día o consultar disponibilidad, pregunte directamente a nuestro personal.",
    contactHeading: "Contacto y Localización",
    contactSubtitle: "Le esperamos en Carrer Muralla del Carme, 11 de Manresa.",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    phoneHelp: "Haga clic para llamar directamente",
    emailLabel: "Correo Electrónico",
    openInMaps: "Abrir en Google Maps",
    hoursHeading: "Horario y Atención",
    hoursCallNote: "Llámenos al 938 72 09 26 para cualquier consulta o encargo.",
    ownerAdminBtn: "Panel del Propietario",
    ownerAdminTitle: "Instrucciones y Configuración del Propietario",
    ownerAdminDesc: "Añada o edite los horarios exactos de apertura y los platos concretos de la carta con total veracidad.",
    footerRights: "Todos los derechos reservados.",
    footerVerifiedNotice: "Todos los datos de contacto y localización han sido contrastados con la información oficial del negocio.",
  },
};
