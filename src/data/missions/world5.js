export const missions = [
  {
    id: 'w5m1',
    title: { es: '¿Quién escribió esto?', eu: 'Nork idatzi du hau?' },
    goal: {
      es: 'Entender qué hace la IA y qué datos conviene no darle',
      eu: 'AAk zer egiten duen ulertu eta zer datu ez zaizkion eman behar jakin',
    },
    intro: {
      es: 'En la Ciudad de la IA, las farolas escriben poemas y los robots responden preguntas. Aura te muestra un chat donde alguien cuenta su vida entera a un asistente.',
      eu: 'AAaren Hirian, farolek poemak idazten dituzte eta robotek galderei erantzuten diete. Aurak txat bat erakusten dizu, norbaitek laguntzaile bati bere bizitza osoa kontatzen diona.',
    },
    dialogue: {
      es: '«Una IA no es una persona: es una herramienta que aprende de datos. Cuídala como cuidarías tu diario.»',
      eu: '«AA ez da pertsona bat: datuetatik ikasten duen tresna bat da. Zaindu zure egunkaria zainduko zenukeen bezala.»',
    },
    steps: [
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: '¿Qué es la inteligencia artificial?',
          eu: 'Zer da adimen artifiziala?',
        },
        options: [
          { es: 'Un robot que piensa y siente como una persona', eu: 'Pertsona bat bezala pentsatzen eta sentitzen duen robota' },
          { es: 'Programas que reconocen patrones en muchos datos y generan respuestas', eu: 'Datu askotan ereduak ezagutzen eta erantzunak sortzen dituzten programak' },
          { es: 'Una página web de preguntas y respuestas escritas por humanos', eu: 'Gizakiek idatzitako galdera-erantzunen webgune bat' },
        ],
        correct: 1,
        explain: {
          es: 'La IA no entiende ni siente: detecta patrones en datos y produce respuestas probables. Por eso puede equivocarse con total seguridad.',
          eu: 'AAk ez du ulertzen ez sentitzen: datuetan ereduak hautematen ditu eta erantzun probableak sortzen. Horregatik erabat ziur egonik ere huts egin dezake.',
        },
      },
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: '¿Qué le puedes contar a un chatbot y qué es mejor no contarle?',
          eu: 'Zer konta diezaiokezu txatbot bati eta zer da hobe ez kontatzea?',
        },
        buckets: [
          { id: 'ok', label: { es: 'Puedo contarlo', eu: 'Konta dezaket' } },
          { id: 'no', label: { es: 'Mejor no', eu: 'Hobe ez' } },
        ],
        items: [
          { text: { es: 'Una idea para una redacción de clase', eu: 'Klaseko idazlan baterako ideia bat' }, bucket: 'ok' },
          { text: { es: 'Tu dirección y tu número de teléfono', eu: 'Zure helbidea eta telefono-zenbakia' }, bucket: 'no' },
          { text: { es: 'La contraseña de tu correo', eu: 'Zure postako pasahitza' }, bucket: 'no' },
          { text: { es: 'Cómo se resuelve una raíz cuadrada', eu: 'Erro karratu bat nola ebazten den' }, bucket: 'ok' },
          { text: { es: 'Una foto de tu DNI para «verificar la edad»', eu: 'Zure NANaren argazkia «adina egiaztatzeko»' }, bucket: 'no' },
          { text: { es: 'Un resumen de un tema de historia', eu: 'Historia gai baten laburpena' }, bucket: 'ok' },
          { text: { es: 'Datos médicos de un familiar', eu: 'Senide baten datu medikoak' }, bucket: 'no' },
          { text: { es: 'Un chiste para practicar euskera', eu: 'Euskaraz praktikatzeko txiste bat' }, bucket: 'ok' },
        ],
        explain: {
          es: 'Todo lo que escribes puede quedar guardado y usarse para entrenar o mejorar el sistema. No compartas datos personales, tuyos ni de otras personas.',
          eu: 'Idazten duzun guztia gordeta gera daiteke eta sistema entrenatzeko edo hobetzeko erabil daiteke. Ez partekatu datu pertsonalik, ez zureak ez besteenak.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Un chatbot te dice: «Para ayudarte con tus deberes, envíame una foto de tu carné de estudiante». ¿Qué haces?',
          eu: 'Txatbot batek esaten dizu: «Zure deberretan laguntzeko, bidali zure ikasle-txartelaren argazkia». Zer egiten duzu?',
        },
        options: [
          {
            es: 'Enviarla, es solo para comprobar quién soy',
            eu: 'Bidali, nor naizen egiaztatzeko besterik ez da eta',
            correct: false,
            outcome: {
              es: 'La imagen contiene tu nombre completo y tu centro. Ya está fuera de tu control.',
              eu: 'Irudiak zure izen osoa eta ikastegia ditu. Jada ezin duzu kontrolatu.',
            },
            explain: {
              es: 'Un chatbot no necesita identificarte para explicarte matemáticas. Ninguna herramienta educativa legítima pide documentos por chat.',
              eu: 'Txatbot batek ez du zu identifikatu behar matematika azaltzeko. Inongo hezkuntza-tresna zilegiak ez du dokumenturik txatez eskatzen.',
            },
          },
          {
            es: 'Negarte y pedir la explicación sin enviar nada',
            eu: 'Ezezkoa eman eta azalpena eskatu ezer bidali gabe',
            correct: true,
            outcome: {
              es: 'El asistente te explica el ejercicio igual de bien. No hacía falta ningún documento.',
              eu: 'Laguntzaileak ariketa berdin azaltzen dizu. Ez zegoen dokumenturik behar.',
            },
            explain: {
              es: 'Si una herramienta se niega a ayudarte sin datos personales, no es imprescindible. Existen alternativas que respetan tu privacidad.',
              eu: 'Tresna batek datu pertsonalik gabe laguntzeari uko egiten badio, ez da nahitaezkoa. Zure pribatutasuna errespetatzen duten alternatibak daude.',
            },
          },
          {
            es: 'Enviar solo la foto del carné por la mitad',
            eu: 'Txartelaren argazkia erdizka soilik bidali',
            correct: false,
            outcome: {
              es: 'Con medio carné se lee tu nombre y tu foto. El riesgo sigue ahí.',
              eu: 'Txartelaren erdiarekin zure izena eta argazkia irakurtzen dira. Arriskua hor jarraitzen du.',
            },
            explain: {
              es: 'Una foto recortada sigue siendo un documento personal. El problema no es cuánto envías, sino que lo envías.',
              eu: 'Moztutako argazkia dokumentu pertsonala izaten jarraitzen du. Arazoa ez da zenbat bidaltzen duzun, bidaltzea bera baizik.',
            },
          },
        ],
      },
    ],
    lesson: {
      es: 'La IA reconoce patrones, no comprende como una persona, y puede equivocarse con seguridad total. No le des datos personales ni documentos: úsala para aprender, no para confiarle tu identidad.',
      eu: 'AAk ereduak ezagutzen ditu, ez du pertsona batek bezala ulertzen, eta erabat ziur egonik huts egin dezake. Ez eman datu pertsonalik ez dokumenturik: erabili ikasteko, ez zure identitatea harengan uzteko.',
    },
  },
  {
    id: 'w5m2',
    title: { es: 'El vídeo imposible', eu: 'Bideo ezinezkoa' },
    goal: {
      es: 'Reconocer deepfakes y contenidos generados por IA',
      eu: 'Deepfakeak eta AAk sortutako edukiak ezagutu',
    },
    intro: {
      es: 'En todas las pantallas de la ciudad se emite un vídeo donde una persona famosa pide dinero para una causa urgente. Aura lo pone a cámara lenta y algo no encaja.',
      eu: 'Hiriko pantaila guztietan pertsona ospetsu batek kausa urgente baterako dirua eskatzen duen bideoa emititzen da. Aurak motelgailuan jartzen du eta zerbait ez dator bat.',
    },
    dialogue: {
      es: '«Un deepfake no es magia: es una imitación. Y toda imitación deja pistas.»',
      eu: '«Deepfake bat ez da magia: imitazio bat da. Eta imitazio guztiek pistak uzten dituzte.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca las pistas que hacen sospechar que el vídeo es un deepfake.',
          eu: 'Markatu bideoa deepfakea izatea suspertzen duten pistak.',
        },
        items: [
          { text: { es: 'Los labios no siguen bien el sonido en algunas frases', eu: 'Ezpainak ez datoz bat soinuarekin esaldi batzuetan' }, bad: true },
          { text: { es: 'Los dientes parecen una sola pieza blanca', eu: 'Hortzek pieza zuri bakar bat dirudite' }, bad: true },
          { text: { es: 'Los parpados parpadean muy poco', eu: 'Beteekin oso gutxitan kliskatzen dute' }, bad: true },
          { text: { es: 'La persona lleva una camiseta azul', eu: 'Pertsonak kamiseta urdina du' }, bad: false },
          { text: { es: 'El borde de la cara tiembla cuando gira la cabeza', eu: 'Aurpegiaren ertzak dardar egiten du burua biratzen duenean' }, bad: true },
          { text: { es: 'El vídeo tiene buena calidad de imagen', eu: 'Bideoak irudi-kalitate ona du' }, bad: false },
        ],
        explain: {
          es: 'Los deepfakes fallan en detalles: labios, dientes, bordes del rostro, parpadeos o sombras. La calidad alta no es prueba de autenticidad.',
          eu: 'Deepfakeak xehetasunetan huts egiten du: ezpainak, hortzak, aurpegiaren ertzak, klispeak edo itzalak. Kalitate altuak ez du benetakotasuna bermatzen.',
        },
      },
      {
        type: 'order',
        points: 100,
        prompt: {
          es: 'Ordena qué hacer antes de creer o compartir un vídeo impactante.',
          eu: 'Ordenatu bideo hunkigarri bat sinetsi edo partekatu aurretik zer egin.',
        },
        steps: [
          { es: 'Fijarte en los detalles del rostro y de la voz', eu: 'Aurpegiko eta ahotseko xehetasunak begiratu' },
          { es: 'Buscar si esa persona o entidad lo ha publicado en sus canales oficiales', eu: 'Pertsona edo erakunde horrek bere kanal ofizialetan argitaratu duen bilatu' },
          { es: 'Comprobar si otros medios fiables lo recogen', eu: 'Beste komunikabide fidagarriek jasotzen duten egiaztatu' },
          { es: 'No compartirlo mientras no haya pruebas', eu: 'Ez partekatu probak egon arte' },
        ],
        explain: {
          es: 'Primero se observa, después se busca la fuente original y solo al final se decide. Un vídeo sin fuente oficial es motivo de sospecha, no de difusión.',
          eu: 'Lehenik behatzen da, gero jatorrizko iturria bilatzen da eta azkenik erabakitzen da. Iturri ofizialik gabeko bideoa susmoa pizteko arrazoia da, ez zabaltzeko.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'El vídeo pide donaciones urgentes a una cuenta personal. ¿Qué es lo más probable?',
          eu: 'Bideoak dohaintza urgenteak eskatzen ditu kontu pertsonal batera. Zer da probabilitate handiena?',
        },
        options: [
          { es: 'Una campaña solidaria auténtica', eu: 'Kanpaina solidario benetakoa' },
          { es: 'Una estafa que usa una cara conocida para dar confianza', eu: 'Konfiantza emateko aurpegi ezaguna erabiltzen duen iruzurra' },
          { es: 'Un anuncio sin importancia', eu: 'Garrantzirik gabeko iragarki bat' },
        ],
        correct: 1,
        explain: {
          es: 'Suplantar la imagen de alguien famoso para pedir dinero es una estafa habitual. Las organizaciones serias publican sus cuentas en sus webs oficiales.',
          eu: 'Pertsona ospetsu baten irudia dirua eskatzeko erabiltzea ohiko iruzurra da. Erakunde serioek beren kontuak beren web ofizialetan argitaratzen dituzte.',
        },
      },
    ],
    lesson: {
      es: 'Los deepfakes se detectan por detalles del rostro, la voz y los bordes. Comprueba siempre el canal oficial antes de creer y no difundas vídeos sin fuente.',
      eu: 'Deepfakeak aurpegiaren, ahotseren eta ertzen xehetasunekin hautematen dira. Egiaztatu beti kanal ofiziala sinetsi aurretik eta ez zabaldu iturririk gabeko bideorik.',
    },
  },
  {
    id: 'w5m3',
    title: { es: 'La ciudad que aprende', eu: 'Ikasten duen hiria' },
    goal: {
      es: 'Usar la IA de forma responsable y crítica',
      eu: 'AA arduratsu eta kritikoki erabili',
    },
    intro: {
      es: 'La ciudad recoge datos de cada paso que das para mejorar sus servicios. Aura te pide que decidas en qué casos la IA debe ayudar y en qué casos no.',
      eu: 'Hiriak ematen duzun urrats bakoitzeko datuak biltzen ditu bere zerbitzuak hobetzeko. Aurak erabaki dezazun eskatzen dizu noiz lagundu behar duen AAk eta noiz ez.',
    },
    dialogue: {
      es: '«La IA es una herramienta excelente para pensar mejor, y un mal sustituto para pensar por ti.»',
      eu: '«AA tresna bikaina da hobeto pentsatzeko, eta ordezko txarra zure ordez pentsatzeko.»',
    },
    steps: [
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: '¿Uso responsable de la IA o uso arriesgado?',
          eu: 'AAren erabilera arduratsua edo erabilera arriskutsua?',
        },
        buckets: [
          { id: 'good', label: { es: 'Responsable', eu: 'Arduratsua' } },
          { id: 'bad', label: { es: 'Arriesgado', eu: 'Arriskutsua' } },
        ],
        items: [
          { text: { es: 'Usar la IA para repasar y comprobar tu propio trabajo', eu: 'AA erabili zure lana errepasatu eta egiaztatzeko' }, bucket: 'good' },
          { text: { es: 'Entregar como tuyo un texto generado por IA', eu: 'AAk sortutako testua zurea balitz bezala entregatu' }, bucket: 'bad' },
          { text: { es: 'Comprobar en otra fuente lo que te responde la IA', eu: 'AAk erantzuten dizuna beste iturri batean egiaztatu' }, bucket: 'good' },
          { text: { es: 'Crear una foto falsa de un compañero para burlarte', eu: 'Ikaskide baten argazki faltsua sortu barre egiteko' }, bucket: 'bad' },
          { text: { es: 'Pedir ideas cuando no sabes por dónde empezar', eu: 'Ideiak eskatu nondik hasi ez dakizunean' }, bucket: 'good' },
          { text: { es: 'Creer todo lo que dice porque habla con seguridad', eu: 'Esaten duen guztia sinetsi ziurtasunez hitz egiten duelako' }, bucket: 'bad' },
        ],
        explain: {
          es: 'La IA ayuda a aprender cuando te hace pensar más; perjudica cuando sustituye tu criterio o cuando sirve para engañar a otros.',
          eu: 'AAk ikasten laguntzen du gehiago pentsarazten dizunean; kalte egiten du zure irizpidea ordezkatzen duenean edo besteak engainatzeko balio duenean.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'La IA te da una respuesta para un trabajo de clase, pero no cita ninguna fuente y suena demasiado perfecta. ¿Qué haces?',
          eu: 'AAk klaseko lan baterako erantzuna ematen dizu, baina ez du iturririk aipatzen eta oso perfektua dirudi. Zer egiten duzu?',
        },
        options: [
          {
            es: 'Copiarla tal cual, seguro que está bien',
            eu: 'Horixe kopiatu, ziur dagoela ondo',
            correct: false,
            outcome: {
              es: 'En clase descubren dos datos inventados y tienes que repetir el trabajo.',
              eu: 'Klasean bi datu asmatu aurkitzen dituzte eta lana errepikatu behar duzu.',
            },
            explain: {
              es: 'La IA puede inventar datos con mucha seguridad. Copiar sin comprobar es asumir un error que no has cometido tú.',
              eu: 'AAk datuak ziurtasun handiz asma ditzake. Egiaztatu gabe kopiatzea zeuk egin ez duzun akatsa bere gain hartzea da.',
            },
          },
          {
            es: 'Comprobar los datos en fuentes fiables y reescribirlo con tus palabras',
            eu: 'Datuak iturri fidagarrietan egiaztatu eta zure hitzekin berridatzi',
            correct: true,
            outcome: {
              es: 'Encuentras un dato falso, lo corriges y el trabajo queda tuyo de verdad.',
              eu: 'Datu faltsu bat aurkitzen duzu, zuzentzen duzu eta lana benetan zurea da.',
            },
            explain: {
              es: 'La IA es un borrador, no una respuesta final. Verificar y reescribir convierte la herramienta en ayuda real para aprender.',
              eu: 'AA zirriborro bat da, ez azken erantzuna. Egiaztatzeak eta berridazteak tresna benetako ikaskuntza-laguntza bihurtzen du.',
            },
          },
          {
            es: 'Entregarlo pero decir que lo ha hecho la IA',
            eu: 'Entregatu baina esan AAk egin duela',
            correct: false,
            outcome: {
              es: 'El trabajo no demuestra lo que has aprendido y el dato falso sigue ahí.',
              eu: 'Lanak ez du erakusten zer ikasi duzun eta datu faltsua hor jarraitzen du.',
            },
            explain: {
              es: 'Reconocerlo está bien, pero el objetivo del trabajo es que aprendas tú. Usa la IA para entender, no para evitar pensar.',
              eu: 'Onartzeak balio du, baina lanaren helburua zuk ikastea da. Erabili AA ulertzeko, ez pentsatzea saihesteko.',
            },
          },
        ],
      },
      {
        type: 'timed',
        points: 100,
        seconds: 35,
        prompt: {
          es: 'Última ronda: ¿IA con criterio?',
          eu: 'Azken erronda: AA irizpidearekin?',
        },
        statements: [
          { text: { es: 'Verificar con otra fuente lo que dice la IA', eu: 'AAk esaten duena beste iturri batekin egiaztatu' }, isTrue: true },
          { text: { es: 'Compartir datos personales para que responda mejor', eu: 'Datu pertsonalak partekatu hobeto erantzun dezan' }, isTrue: false },
          { text: { es: 'Avisar cuando un contenido parece generado para engañar', eu: 'Iruzur egiteko sortua dirudien edukia ohartarazi' }, isTrue: true },
          { text: { es: 'Usar la IA para hacer un examen en tiempo real', eu: 'AA erabili azterketa bat denbora errealean egiteko' }, isTrue: false },
          { text: { es: 'Pedir a la IA que te explique algo que no entiendes', eu: 'AAri ulertzen ez duzun zerbait azaltzeko eskatu' }, isTrue: true },
          { text: { es: 'Creer que la IA siempre tiene razón', eu: 'AAk beti arrazoia duela sinetsi' }, isTrue: false },
        ],
        explain: {
          es: 'Usar la IA con criterio significa verificar, proteger tus datos y no emplearla para engañar. La responsabilidad final siempre es de la persona.',
          eu: 'AA irizpidearekin erabiltzeak egiaztatzea, zure datuak babestea eta engainatzeko ez erabiltzea esan nahi du. Azken erantzukizuna beti pertsonarena da.',
        },
      },
    ],
    lesson: {
      es: 'La IA escribe borradores, no verdades. Verifica, protege tus datos y no la uses para engañar a nadie. La decisión final y la responsabilidad son tuyas.',
      eu: 'AAk zirriborroak idazten ditu, ez egiak. Egiaztatu, babestu zure datuak eta ez erabili inor engainatzeko. Azken erabakia eta erantzukizuna zureak dira.',
    },
  },
];