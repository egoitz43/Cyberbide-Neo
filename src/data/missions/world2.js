export const missions = [
  {
    id: 'w2m1',
    title: { es: 'El sorteo imposible', eu: 'Ezinezko zozketa' },
    goal: {
      es: 'Detectar estafas y sorteos falsos en redes sociales',
      eu: 'Sare sozialetako iruzurrak eta zozketa faltsuak hauteman',
    },
    intro: {
      es: 'El Río de la Verdad muestra el reflejo de cada mensaje. Hoy sus aguas están turbias: un perfil con muchos seguidores regala móviles si escribes tus datos en un enlace.',
      eu: 'Egiaren Ibaiak mezu bakoitzaren isla erakusten du. Gaur bere urak lausotuta daude: jarraitzaile asko dituen profil batek mugikorrak oparitzen dizkio zure datuak esteka batean idazten badituzu.',
    },
    dialogue: {
      es: '«Si un regalo te pide prisa, datos o dinero, el regalo eres tú.»',
      eu: '«Oparia batek presa, datuak edo dirua eskatzen baditu, oparia zu zara.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca todas las señales sospechosas de esta publicación.',
          eu: 'Markatu argitalpen honetako seinale susmagarri guztiak.',
        },
        items: [
          { text: { es: '«¡Solo hoy! 500 móviles gratis»', eu: '«Gaur bakarrik! 500 mugikor doan»' }, bad: true },
          { text: { es: 'Pide escribir tu contraseña «para verificar»', eu: 'Zure pasahitza idazteko eskatzen du «egiaztatzeko»' }, bad: true },
          { text: { es: 'El enlace no es de la marca, es acortado', eu: 'Esteka ez da markarena, laburtuta dago' }, bad: true },
          { text: { es: 'Tiene una foto del producto', eu: 'Produktuaren argazkia dauka' }, bad: false },
          { text: { es: 'Cuenta creada hace dos días', eu: 'Duela bi egun sortutako kontua' }, bad: true },
          { text: { es: 'Explica cómo participar', eu: 'Nola parte hartu azaltzen du' }, bad: false },
        ],
        explain: {
          es: 'Los sorteos falsos viven de la urgencia, de los premios exagerados y de pedir datos que un sorteo real nunca necesita: contraseñas, datos bancarios o el DNI.',
          eu: 'Zozketa faltsuak presak, sari gehiegizkoak eta benetako zozketa batek inoiz behar ez dituen datuak eskatzeaz elikatzen dira: pasahitzak, banku-datuak edo NANa.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Te llega un mensaje privado: «¡Has ganado! Solo necesitamos los datos de tu tarjeta para enviarte el premio». ¿Qué haces?',
          eu: 'Mezu pribatu bat iristen zaizu: «Irabazi duzu! Saria bidaltzeko zure txartelaren datuak besterik ez ditugu behar». Zer egiten duzu?',
        },
        options: [
          {
            es: 'Enviar los datos, total, has ganado',
            eu: 'Datuak bidali, irabazi egin duzu eta',
            correct: false,
            outcome: {
              es: 'A los dos días hay un cobro de 89 € en la tarjeta y el perfil ha desaparecido.',
              eu: 'Bi egunera 89 €ko kobrantza dago txartelean eta profila desagertu egin da.',
            },
            explain: {
              es: 'Ningún sorteo regala algo pidiéndote el número de tarjeta. Con esos datos pueden cobrarte o suscribirte a algo que no has pedido.',
              eu: 'Inongo zozketak ez du ezer oparitzen txartel-zenbakia eskatuta. Datu horiekin kobratu egin dezakete edo eskatu ez duzun zerbaitera harpidetu.',
            },
          },
          {
            es: 'No responder, capturar el mensaje y reportar el perfil',
            eu: 'Ez erantzun, mezua harrapatu eta profila salatu',
            correct: true,
            outcome: {
              es: 'Reportas el perfil y avisas en clase. Dos compañeros habían recibido lo mismo.',
              eu: 'Profila salatzen duzu eta klasean ohartarazten duzu. Bi ikaskidek gauza bera jaso zuten.',
            },
            explain: {
              es: 'No contestar ya evita el fraude; reportar protege a los demás. Bloquear y avisar es la respuesta completa.',
              eu: 'Ez erantzuteak iruzurra saihesten du; salatzeak besteak babesten ditu. Blokeatzeak eta ohartarazteak erantzun osoa osatzen dute.',
            },
          },
          {
            es: 'Pedirle primero una foto del premio',
            eu: 'Lehenik sariaren argazkia eskatu',
            correct: false,
            outcome: {
              es: 'Te manda una foto con marca de agua de otra web. La conversación sigue y te presiona con «el premio caduca en 10 minutos».',
              eu: 'Beste web bateko ur-marka duen argazkia bidaltzen dizu. Elkarrizketak jarraitzen du eta «saria 10 minutuan iraungitzen da» esanez presioa egiten du.',
            },
            explain: {
              es: 'Seguir la conversación da información y tiempo al estafador. Las fotos se copian de cualquier sitio: no son pruebas.',
              eu: 'Elkarrizketarekin jarraitzeak informazioa eta denbora ematen dizkio iruzurgileari. Argazkiak edozein lekutatik kopiatzen dira: ez dira frogak.',
            },
          },
        ],
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'Antes de creer un mensaje sorprendente, ¿cuál es el primer paso más útil?',
          eu: 'Harrigarria den mezu bat sinetsi aurretik, zein da urrats erabilgarriena?',
        },
        options: [
          { es: 'Compartirlo rápido para avisar a todos', eu: 'Azkar partekatu denak ohartarazteko' },
          { es: 'Buscar la misma noticia en medios fiables y en la web oficial', eu: 'Albiste bera bilatu komunikabide fidagarrietan eta web ofizialean' },
          { es: 'Fijarte solo en cuántos «me gusta» tiene', eu: 'Zenbat «atsegin dut» dituen bakarrik begiratu' },
        ],
        correct: 1,
        explain: {
          es: 'Los seguidores y los «me gusta» se compran. La verificación se hace yendo a la fuente original: la web oficial, el medio de siempre o una agencia de noticias.',
          eu: 'Jarraitzaileak eta «atsegin dut»ak erosi egiten dira. Egiaztatzea jatorrizko iturrira joanda egiten da: web ofiziala, ohiko komunikabidea edo albiste-agentzia.',
        },
      },
    ],
    lesson: {
      es: 'Las estafas usan prisa, premios grandes y datos que no deberías dar. Nadie regala nada a cambio del número de tarjeta. Verifica en la fuente original antes de creer, y reporta sin reenviar.',
      eu: 'Iruzurrak presa, sari handiak eta eman beharko ez zenituzkeen datuak erabiltzen ditu. Inork ez du ezer oparitzen txartel-zenbakiaren truke. Egiaztatu jatorrizko iturrian sinetsi aurretik, eta salatu birbidali gabe.',
    },
  },
  {
    id: 'w2m2',
    title: { es: 'La noticia bomba', eu: 'Albiste lehergarria' },
    goal: {
      es: 'Comprobar fuentes y reconocer titulares engañosos',
      eu: 'Iturriak egiaztatu eta izenburu engainagarriak ezagutu',
    },
    intro: {
      es: 'Un titular enorme recorre el río: «Prohíben los móviles en todo el país a partir de mañana». Nadie cita de dónde sale. Kimo te pide ayuda para comprobarlo.',
      eu: 'Izenburu erraldoi bat ibaian zehar dabil: «Mugikorrak debekatuko dituzte herrialde osoan bihar». Inork ez du esaten nondik datorren. Kimok egiaztatzen laguntzeko eskatzen dizu.',
    },
    dialogue: {
      es: '«Una noticia sin fuente es solo un rumor con buena letra.»',
      eu: '«Iturririk gabeko albistea letra oneko esamesa bat besterik ez da.»',
    },
    steps: [
      {
        type: 'order',
        points: 100,
        prompt: {
          es: 'Ordena los pasos para verificar una noticia que te llega por chat.',
          eu: 'Ordenatu txatez iristen zaizun albiste bat egiaztatzeko urratsak.',
        },
        steps: [
          { es: 'Leer el mensaje completo, no solo el titular', eu: 'Mezu osoa irakurri, ez izenburua soilik' },
          { es: 'Buscar quién es la fuente y si existe', eu: 'Bilatu nor den iturria eta existitzen den' },
          { es: 'Comprobar si otros medios serios lo publican', eu: 'Beste komunikabide serioek argitaratzen duten egiaztatu' },
          { es: 'Mirar la fecha: puede ser una noticia antigua', eu: 'Data begiratu: albiste zaharra izan daiteke' },
          { es: 'Decidir si se comparte o se avisa de que es falsa', eu: 'Erabaki partekatu edo faltsua dela ohartarazi' },
        ],
        explain: {
          es: 'El titular se escribe para que lo compartas; el cuerpo de la noticia es donde está la verdad. Comprobar la fuente, otros medios y la fecha desmonta la mayoría de bulos.',
          eu: 'Izenburua partekatzeko idazten da; albistearen gorputzean dago egia. Iturria, beste komunikabideak eta data egiaztatzeak bulo gehienak desmuntatzen ditu.',
        },
      },
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca las señales de que este titular puede ser un bulo.',
          eu: 'Markatu izenburu hau buloa izan daitekeen seinaleak.',
        },
        items: [
          { text: { es: '«¡¡ÚLTIMA HORA!! NADIE TE LO CUENTA»', eu: '«AZKEN ORDUA!! INORK EZ DIZU ESATEN»' }, bad: true },
          { text: { es: 'No aparece el nombre del periódico ni el autor', eu: 'Ez da egunkariaren izena ez autorerik agertzen' }, bad: true },
          { text: { es: 'Comparte una cuenta anónima con 12 seguidores', eu: '12 jarraitzaile dituen kontu anonimo batek partekatzen du' }, bad: true },
          { text: { es: 'Incluye una foto del edificio del parlamento', eu: 'Parlamentuaren eraikinaren argazkia dakar' }, bad: false },
          { text: { es: 'Pide «reenviar a 10 contactos para que se sepa»', eu: '«Bidali 10 kontakturi jakin dezaten» eskatzen du' }, bad: true },
          { text: { es: 'La noticia tiene fecha y firma', eu: 'Albisteak data eta sinadura ditu' }, bad: false },
        ],
        explain: {
          es: 'Los bulos suelen ser anónimos, exagerados y piden difusión urgente. Una noticia real se puede localizar en la web del medio que la publica, con autor y fecha.',
          eu: 'Buloak anonimoak eta gehiegizkoak izaten dira eta presazko zabalkundea eskatzen dute. Benetako albistea argitaratzen duen komunikabidearen webgunean aurki daiteke, autorearekin eta datarekin.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Tu tía ha compartido el bulo en el grupo familiar y está preocupada. ¿Qué le dices?',
          eu: 'Zure izebak buloa familia-taldean partekatu du eta kezkatuta dago. Zer esaten diozu?',
        },
        options: [
          {
            es: '«Es mentira, no compartas estas cosas» y callarte',
            eu: '«Gezurra da, ez partekatu halakoak» eta isildu',
            correct: false,
            outcome: {
              es: 'Se molesta y sigue compartiendo porque no sabe por qué era falso.',
              eu: 'Haserretu egiten da eta partekatzen jarraitzen du, ez dakielako zergatik zen faltsua.',
            },
            explain: {
              es: 'Corregir sin explicar rara vez convence. Mostrar dónde está la información oficial ayuda mucho más.',
              eu: 'Azaldu gabe zuzentzeak gutxitan konbentzitzen du. Informazio ofiziala non dagoen erakusteak askoz gehiago laguntzen du.',
            },
          },
          {
            es: 'Enviarle el enlace oficial del ministerio y decirle con calma que la noticia no existe',
            eu: 'Ministerioaren esteka ofiziala bidali eta lasai esan albistea ez dagoela',
            correct: true,
            outcome: {
              es: 'Ella misma borra el mensaje del grupo y avisa a sus amigas.',
              eu: 'Bera bera arduratzen da taldeko mezua ezabatzen eta lagunei ohartarazten.',
            },
            explain: {
              es: 'Se corrige con datos y con la fuente original. Cuando alguien ve la web oficial, deja de necesitar el bulo.',
              eu: 'Datuekin eta jatorrizko iturriarekin zuzentzen da. Norbait web ofiziala ikusten duenean, buloa ez zaio beharrezkoa suertatzen.',
            },
          },
          {
            es: 'Reenviarlo a más gente preguntando si es verdad',
            eu: 'Jende gehiagori birbidali egia den galdetuz',
            correct: false,
            outcome: {
              es: 'El bulo llega a más personas y tu mensaje parece confirmarlo.',
              eu: 'Buloa jende gehiagorengana iristen da eta zure mezuak baieztatu egiten duela dirudi.',
            },
            explain: {
              es: 'Preguntar «¿es verdad?» no evita la difusión: el mensaje ya circula. Se pregunta a la fuente, no al grupo.',
              eu: '«Egia al da?» galdetzeak ez dio zabalkundeari saihesten: mezua jada zebilen. Iturriari galdetzen zaio, ez taldeari.',
            },
          },
        ],
      },
    ],
    lesson: {
      es: 'Antes de compartir: lee el cuerpo, busca la fuente, comprueba otros medios y mira la fecha. Corregir a alguien funciona mejor con el enlace oficial que con un «es mentira».',
      eu: 'Partekatu aurretik: irakurri gorputza, bilatu iturria, egiaztatu beste komunikabideak eta begiratu data. Norbait zuzentzeko «gezurra da» baino eraginkorragoa da esteka ofiziala.',
    },
  },
  {
    id: 'w2m3',
    title: { es: 'La imagen retocada', eu: 'Irudia ukitua' },
    goal: {
      es: 'Detectar fotos manipuladas y contenidos sacados de contexto',
      eu: 'Argazki manipulatuak eta testuingurutik ateratako edukiak hauteman',
    },
    intro: {
      es: 'Una foto impactante se ha convertido en el centro del río: un edificio en llamas con un mensaje alarmante. Kimo frunce el ceño porque la luz de la foto no le cuadra.',
      eu: 'Argazki hunkigarri bat ibaiaren erdian bihurtu da: eraikin bat sutan mezu kezkagarri batekin. Kimok bekainak uzkurtzen ditu, argazkiko argiak ez zaizkiolako batere sinesgarri gertatzen.',
    },
    dialogue: {
      es: '«Una foto puede ser real y aun así mentir: la clave es cuándo, dónde y con qué intención se usó.»',
      eu: '«Argazki bat erreala izan daiteke eta hala ere gezurra esan: gakoa noiz, non eta zein asmorekin erabili zen da.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca las pistas que indican que la imagen puede estar manipulada o fuera de contexto.',
          eu: 'Markatu irudia manipulatu edo testuingurutik kanpo egon daitekeela iradokitzen duten pistak.',
        },
        items: [
          { text: { es: 'La sombra del edificio apunta a distinto lado que la de los árboles', eu: 'Eraikinaren itzalak zuhaitzen alderantziz seinalatzen du' }, bad: true },
          { text: { es: 'Las personas del fondo están recortadas y sin bordes naturales', eu: 'Atzeko pertsonak moztuta daude eta ertz naturalik gabe' }, bad: true },
          { text: { es: 'La foto ya aparecía en una noticia de hace ocho años', eu: 'Argazkia duela zortzi urteko albiste batean agertzen zen jada' }, bad: true },
          { text: { es: 'Aparece el nombre del fotógrafo', eu: 'Argazkilariaren izena agertzen da' }, bad: false },
          { text: { es: 'El humo tiene píxeles cuadrados y repetidos', eu: 'Keak pixel karratuak eta errepikatuak ditu' }, bad: true },
          { text: { es: 'La imagen tiene buena resolución', eu: 'Irudiak bereizmen ona du' }, bad: false },
        ],
        explain: {
          es: 'Sombras que no coinciden, bordes raros, píxeles repetidos o una foto antigua reutilizada son pistas habituales. La resolución alta no garantiza que la imagen diga la verdad.',
          eu: 'Bat ez datozen itzalak, ertz arraroak, pixel errepikatuak edo berrerabilitako argazki zahar bat ohiko pistak dira. Bereizmen altuak ez du bermatzen irudiak egia esaten duenik.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'La imagen es auténtica, pero se publicó hace ocho años en otro país. ¿Qué está mal entonces?',
          eu: 'Irudia benetakoa da, baina duela zortzi urte argitaratu zen beste herrialde batean. Zer dago gaizki, orduan?',
        },
        options: [
          { es: 'Nada, si la foto es real se puede usar libremente', eu: 'Ezer ez, argazkia erreala bada libre erabil daiteke' },
          { es: 'El contexto: se presenta como algo que está pasando hoy y aquí', eu: 'Testuingurua: gaur eta hemen gertatzen ari den zerbait balitz bezala aurkezten da' },
          { es: 'Solo la calidad de la imagen', eu: 'Irudiaren kalitatea bakarrik' },
        ],
        correct: 1,
        explain: {
          es: 'Una imagen real fuera de contexto es desinformación. Si no puedes verificar cuándo y dónde se hizo, no la uses para afirmar lo que está pasando.',
          eu: 'Testuingurutik kanpoko irudi erreala desinformazioa da. Noiz eta non egin zen egiaztatu ezin baduzu, ez erabili gertatzen ari dena baieztatzeko.',
        },
      },
      {
        type: 'timed',
        points: 100,
        seconds: 35,
        prompt: {
          es: '¿Verificar o compartir? Responde rápido.',
          eu: 'Egiaztatu edo partekatu? Erantzun azkar.',
        },
        statements: [
          { text: { es: 'Buscar la imagen en el buscador para ver si aparece antes', eu: 'Irudia bilatzailean bilatu lehenago agertu den ikusteko' }, isTrue: true },
          { text: { es: 'Compartir un titular que solo has leído completo en la captura', eu: 'Pantaila-argazkian bakarrik irakurri duzun izenburua partekatu' }, isTrue: false },
          { text: { es: 'Comprobar si el medio tiene sección de contacto y autor', eu: 'Komunikabideak kontaktu-atala eta autorea dituen egiaztatu' }, isTrue: true },
          { text: { es: 'Fiarte de una cuenta que promete «lo que no verás en la tele»', eu: '«Telebistan ikusiko ez duzuna» agintzen duen kontuaz fidatu' }, isTrue: false },
          { text: { es: 'Desconfiar si el mensaje pide reenviar a diez personas', eu: 'Mesedez, hamar pertsonari birbidaltzea eskatzen badu ez fidatu' }, isTrue: true },
          { text: { es: 'Creer algo porque lo dice mucha gente', eu: 'Gauza bat sinetsi jende askok esaten duelako' }, isTrue: false },
        ],
        explain: {
          es: 'Verificar es un hábito de treinta segundos: buscar la imagen, localizar la fuente y desconfiar de lo que pide difusión urgente.',
          eu: 'Egiaztatzea hogeita hamar segundoko ohitura da: irudia bilatu, iturria aurkitu eta presazko zabalkundea eskatzen duenaz ez fidatu.',
        },
      },
    ],
    lesson: {
      es: 'Una imagen real puede usarse para mentir si se cambia el contexto. Comprueba sombras, bordes y fechas, y busca la imagen antes de compartirla.',
      eu: 'Irudi erreala gezurra esateko erabil daiteke testuingurua aldatzen bada. Egiaztatu itzalak, ertzak eta datak, eta bilatu irudia partekatu aurretik.',
    },
  },
];