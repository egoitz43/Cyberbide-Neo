export const missions = [
  {
    id: 'w4m1',
    title: { es: 'La llave maestra', eu: 'Giltza nagusia' },
    goal: {
      es: 'Crear contraseñas fuertes y únicas para cada cuenta',
      eu: 'Kontu bakoitzerako pasahitz sendo eta bereiziak sortu',
    },
    intro: {
      es: 'La Torre de la Seguridad tiene cien puertas y todas necesitan su propia llave. Zeto te enseña un cajón lleno de llaves débiles que se abren con solo mirarlas.',
      eu: 'Segurtasunaren Dorreak ehun ate ditu eta guztiek beren giltza behar dute. Zetok begirada batekin irekitzen diren giltza ahulen kaxa bat erakusten dizu.',
    },
    dialogue: {
      es: '«Una contraseña no tiene que ser difícil de recordar, tiene que ser difícil de adivinar.»',
      eu: '«Pasahitz bat ez da gogoratzeko zaila izan behar, asmatzeko zaila baizik.»',
    },
    steps: [
      {
        type: 'password',
        points: 100,
        prompt: {
          es: 'Forja tu llave: escribe una contraseña que cumpla las cuatro reglas.',
          eu: 'Forjatu zure giltza: idatzi lau arauak betetzen dituen pasahitz bat.',
        },
        explain: {
          es: 'Una frase larga con mayúsculas, números y un símbolo es fácil de recordar y muy difícil de adivinar. Evita tu nombre, tu fecha de nacimiento o «123456».',
          eu: 'Maiuskulak, zenbakiak eta sinbolo bat dituen esaldi luzea erraza da gogoratzen eta oso zaila asmatzen. Saihestu zure izena, jaiotze-data edo «123456».',
        },
      },
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: 'Clasifica estas contraseñas: ¿son fuertes o se rompen fácilmente?',
          eu: 'Sailkatu pasahitz hauek: sendoak dira edo erraz apurtzen dira?',
        },
        buckets: [
          { id: 'strong', label: { es: 'Fuerte', eu: 'Sendoa' } },
          { id: 'weak', label: { es: 'Débil', eu: 'Ahula' } },
        ],
        items: [
          { text: { es: '123456', eu: '123456' }, bucket: 'weak' },
          { text: { es: 'Nara2010', eu: 'Nara2010' }, bucket: 'weak' },
          { text: { es: 'Río-Azul-Cobalto-9!', eu: 'Ibai-Urdin-Kobalto-9!' }, bucket: 'strong' },
          { text: { es: 'contraseña', eu: 'pasahitza' }, bucket: 'weak' },
          { text: { es: '7Trueno#Vuela@Luna', eu: '7Trumoi#Hegan@Ilargi' }, bucket: 'strong' },
          { text: { es: 'abcdefgh', eu: 'abcdefgh' }, bucket: 'weak' },
        ],
        explain: {
          es: 'Los programas de ataque prueban primero palabras comunes, nombres y fechas. La longitud y la mezcla de caracteres multiplican las combinaciones posibles.',
          eu: 'Eraso-programek hitz arruntak, izenak eta datak probatzen dituzte lehenik. Luzerak eta karaktere-nahasketak konbinazio posibleak biderkatzen dituzte.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'Usas la misma contraseña en el correo y en un foro de juegos. El foro sufre una filtranción. ¿Qué pasa?',
          eu: 'Pasahitz bera erabiltzen duzu postan eta jokoen foro batean. Foroak datu-ihesa pairatzen du. Zer gertatzen da?',
        },
        options: [
          { es: 'Nada, el foro no tiene acceso a tu correo', eu: 'Ezer ez, foroak ez du zure postara sarbiderik' },
          { es: 'Quien tenga esa contraseña puede entrar en tu correo y en todo lo demás', eu: 'Pasahitz hori duenak zure postan eta gainerako guztian sartu daiteke' },
          { es: 'Solo se pierde la cuenta del foro', eu: 'Foroko kontua bakarrik galtzen da' },
        ],
        correct: 1,
        explain: {
          es: 'Los atacantes prueban la misma contraseña en otros servicios porque saben que mucha gente la repite. Una contraseña distinta por cuenta rompe esa cadena.',
          eu: 'Erasotzaileek pasahitz bera beste zerbitzu batzuetan probatzen dute, jende askok errepikatzen duela badakite. Kontu bakoitzeko pasahitz ezberdinak kate hori apurtzen du.',
        },
      },
    ],
    lesson: {
      es: 'Contraseña larga, distinta para cada cuenta y con mayúsculas, números y símbolos. Nunca uses tu nombre ni fechas. Si una cuenta se filtra, las demás siguen a salvo.',
      eu: 'Pasahitz luzea, kontu bakoitzerako ezberdina eta maiuskulak, zenbakiak eta sinboloak dituena. Inoiz ez erabili zure izena edo datak. Kontu bat iragazten bada, gainerakoak seguru jarraitzen dute.',
    },
  },
  {
    id: 'w4m2',
    title: { es: 'El correo del banco', eu: 'Bankuaren posta' },
    goal: {
      es: 'Reconocer el phishing y saber qué hacer al recibirlo',
      eu: 'Phishinga ezagutu eta jasotzean zer egin jakin',
    },
    intro: {
      es: 'Un correo con el logo de tu banco avisa de un «cargo sospechoso» y pide confirmar tus datos en 24 horas. El remitente tiene una letra cambiada.',
      eu: 'Zure bankuaren logoa duen posta batek «karga susmagarri» baten berri ematen du eta 24 orduan zure datuak berresteko eskatzen du. Bidaltzaileak hizki bat aldatuta du.',
    },
    dialogue: {
      es: '«Tu banco nunca te pedirá la contraseña por correo. Si sientes prisa, sospecha.»',
      eu: '«Zure bankuak ez dizu inoiz pasahitza postaz eskatuko. Presa sentitzen baduzu, susmatu.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca todas las señales de que este correo es phishing.',
          eu: 'Markatu posta hau phishinga izateko seinale guztiak.',
        },
        items: [
          { text: { es: 'El remitente es «seguridad@banc0-avisos.net»', eu: 'Bidaltzailea «seguridad@banc0-avisos.net» da' }, bad: true },
          { text: { es: '«Tu cuenta se bloqueará en 24 horas»', eu: '«Zure kontua 24 orduan blokeatuko da»' }, bad: true },
          { text: { es: 'El enlace lleva a una web que no es la del banco', eu: 'Estekak ez du bankuaren webgunera eramaten' }, bad: true },
          { text: { es: 'Te saluda por tu nombre real', eu: 'Zure benetako izenaz agurtzen zaitu' }, bad: false },
          { text: { es: 'Pide confirmar la contraseña y el código SMS', eu: 'Pasahitza eta SMS kodea berresteko eskatzen du' }, bad: true },
          { text: { es: 'Tiene faltas de ortografía en la firma', eu: 'Sinaduran ortografia-akatsak ditu' }, bad: true },
        ],
        explain: {
          es: 'El phishing imita la imagen de una empresa de confianza para asustarte y que actúes sin pensar. Fíjate en el dominio real, no en el logo.',
          eu: 'Phishingak konfiantzazko enpresa baten itxura imitatzen du, beldurtu eta pentsatu gabe joka dezazun. Begiratu benetako domeinua, ez logoa.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: '¿Qué haces con ese correo?',
          eu: 'Zer egiten duzu posta horrekin?',
        },
        options: [
          {
            es: 'Pinchar el enlace para comprobar si es verdad',
            eu: 'Esteka sakatu egia den egiaztatzeko',
            correct: false,
            outcome: {
              es: 'La web falsa registra tu contraseña y en minutos cambian el acceso a tu cuenta.',
              eu: 'Web faltsuak zure pasahitza erregistratzen du eta minutu gutxitan zure konturako sarbidea aldatzen dute.',
            },
            explain: {
              es: 'Pinchar ya envía información y puede instalar algo. Ni siquiera para «comprobar» se abre el enlace de un mensaje sospechoso.',
              eu: 'Sakatzeak jada informazioa bidaltzen du eta zerbait instala dezake. Mezu susmagarri baten esteka ez da irekitzen, ezta «egiaztatzeko» ere.',
            },
          },
          {
            es: 'No pinchar, entrar en la app del banco por tu cuenta y reportar el correo',
            eu: 'Ez sakatu, zure kabuz sartu bankuaren aplikazioan eta posta salatu',
            correct: true,
            outcome: {
              es: 'En la app oficial no hay ningún cargo. Reportas el correo y avisas a tu familia.',
              eu: 'Aplikazio ofizialean ez dago kargarik. Posta salatzen duzu eta zure familiari ohartarazten diozu.',
            },
            explain: {
              es: 'La regla de oro: nunca uses el enlace del mensaje. Entra en la web o app oficial escribiendo la dirección tú mismo.',
              eu: 'Urrezko araua: inoiz ez erabili mezuaren esteka. Sartu webgune edo aplikazio ofizialean helbidea zeuk idatzita.',
            },
          },
          {
            es: 'Reenviarlo a tus contactos para avisar',
            eu: 'Zure kontaktuei birbidali ohartarazteko',
            correct: false,
            outcome: {
              es: 'Alguien de tu lista pincha y cae en la trampa.',
              eu: 'Zure zerrendako norbaitek sakatzen du eta tranpan erortzen da.',
            },
            explain: {
              es: 'Reenviar el correo difunde el enlace malicioso. Para avisar, describe el intento sin incluir el enlace.',
              eu: 'Posta birbidaltzeak esteka maltzurra zabaltzen du. Ohartarazteko, deskribatu saiakera esteka sartu gabe.',
            },
          },
        ],
      },
      {
        type: 'order',
        points: 100,
        prompt: {
          es: 'Ordena qué hacer si has picado en un enlace de phishing.',
          eu: 'Ordenatu phishing-esteka batean erori bazara zer egin.',
        },
        steps: [
          { es: 'Cambiar la contraseña desde la web oficial', eu: 'Pasahitza aldatu webgune ofizialetik' },
          { es: 'Cerrar la sesión en todos los dispositivos', eu: 'Saioa itxi gailu guztietan' },
          { es: 'Activar la verificación en dos pasos', eu: 'Bi urratseko egiaztapena aktibatu' },
          { es: 'Revisar los movimientos y avisar al banco si hace falta', eu: 'Mugimenduak berrikusi eta beharrezkoa bada bankuari ohartarazi' },
          { es: 'Contarlo a un adulto de confianza', eu: 'Konfiantzazko heldu bati kontatu' },
        ],
        explain: {
          es: 'Cuanto antes cambies la contraseña y cierres sesiones, menos tiempo tiene el atacante. Activar la verificación en dos pasos evita que vuelva a entrar.',
          eu: 'Zenbat eta lehenago aldatu pasahitza eta saioak itxi, orduan eta denbora gutxiago du eraso egileak. Bi urratseko egiaztapena aktibatzeak berriro sartzea eragozten du.',
        },
      },
    ],
    lesson: {
      es: 'El phishing usa prisa, miedo y una imagen de confianza. Mira el dominio real, nunca uses el enlace del mensaje y entra siempre por la app oficial. Si has caído: cambia la contraseña, cierra sesiones y activa la verificación en dos pasos.',
      eu: 'Phishingak presa, beldurra eta konfiantzazko irudia erabiltzen ditu. Begiratu benetako domeinua, inoiz ez erabili mezuaren esteka eta sartu beti aplikazio ofizialean. Erortzen bazara: aldatu pasahitza, itxi saioak eta aktibatu bi urratseko egiaztapena.',
    },
  },
  {
    id: 'w4m3',
    title: { es: 'El código de seis dígitos', eu: 'Sei zifrako kodea' },
    goal: {
      es: 'Entender y usar la verificación en dos pasos',
      eu: 'Bi urratseko egiaztapena ulertu eta erabili',
    },
    intro: {
      es: 'A Zeto le llega un SMS con un código de seis dígitos. Un minuto después, un mensaje dice ser del servicio técnico y pide ese código «para arreglar tu cuenta».',
      eu: 'Zetori sei zifrako kodea dakarren SMS bat iristen zaio. Minutu bat geroago, mezu batek berak zerbitzu teknikoa dela dio eta kodea eskatzen du «zure kontua konpontzeko».',
    },
    dialogue: {
      es: '«Ese código es la llave de tu casa. Ni tu mejor amigo, ni el servicio técnico, ni el banco la necesitan.»',
      eu: '«Kode hori zure etxeko giltza da. Ez du zure lagunik onenak, ez zerbitzu teknikoak, ez bankuak behar.»',
    },
    steps: [
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Te escriben: «Hola, soy del soporte. Pásame el código que acabas de recibir para verificar tu identidad». ¿Qué haces?',
          eu: 'Idazten dizute: «Kaixo, laguntza-zerbitzutik nator. Eman iezadazu oraintxe jaso duzun kodea zure identitatea egiaztatzeko». Zer egiten duzu?',
        },
        options: [
          {
            es: 'Dárselo: si ya me han escrito, sabrán quién soy',
            eu: 'Eman: idatzi badidate, badakite nor naizen',
            correct: false,
            outcome: {
              es: 'En dos minutos cambian la contraseña y te quedas fuera de tu propia cuenta.',
              eu: 'Bi minututan pasahitza aldatzen dute eta zeure kontutik kanpo geratzen zara.',
            },
            explain: {
              es: 'El código de verificación es la segunda llave. Quien lo tiene entra aunque no sepa tu contraseña. Nadie legítimo te lo pedirá nunca.',
              eu: 'Egiaztapen-kodea bigarren giltza da. Hura duenak sartzen da, zure pasahitza jakin ez arren. Inork ez dizu inoiz behar bezala eskatuko.',
            },
          },
          {
            es: 'No darlo, bloquear el contacto y avisar',
            eu: 'Ez eman, kontaktua blokeatu eta ohartarazi',
            correct: true,
            outcome: {
              es: 'Tu cuenta sigue segura y avisas a tus compañeros de que ese número es un fraude.',
              eu: 'Zure kontua seguru jarraitzen du eta ikaskideei zenbaki hori iruzurra dela ohartarazten diezu.',
            },
            explain: {
              es: 'El código solo se introduce en la web o app oficial donde estás entrando. Si alguien te lo pide por chat, es un intento de robo de cuenta.',
              eu: 'Kodea sartzen ari zaren webgune edo aplikazio ofizialean soilik idazten da. Norbaitek txatez eskatzen badizu, kontua lapurtzeko saiakera da.',
            },
          },
          {
            es: 'Preguntarle qué cuenta es antes de decidir',
            eu: 'Zein kontu den galdetu erabaki aurretik',
            correct: false,
            outcome: {
              es: 'Te responde con datos que ha copiado de tu perfil público y te convence.',
              eu: 'Zure profil publikoan kopiatutako datuekin erantzuten du eta konbentzitzen zaitu.',
            },
            explain: {
              es: 'Los estafadores conocen tu nombre y tu foto porque son públicos. Conversar solo les da más oportunidades.',
              eu: 'Iruzurgileek zure izena eta argazkia ezagutzen dituzte publikoak direlako. Hitz egiteak aukera gehiago ematen dizkie soilik.',
            },
          },
        ],
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: '¿Para qué sirve la verificación en dos pasos?',
          eu: 'Zertarako balio du bi urratseko egiaztapenak?',
        },
        options: [
          { es: 'Para que la contraseña sea más corta', eu: 'Pasahitza laburragoa izan dadin' },
          { es: 'Para que, aunque alguien tenga tu contraseña, necesite un segundo código', eu: 'Norbaitek zure pasahitza izan arren, bigarren kode bat behar izan dezan' },
          { es: 'Para entrar más rápido en tus cuentas', eu: 'Zure kontuetan azkarrago sartzeko' },
        ],
        correct: 1,
        explain: {
          es: 'Añade una segunda prueba: un código en el móvil o una app de autenticación. Sin ese segundo paso, la contraseña robada no sirve.',
          eu: 'Bigarren froga bat gehitzen du: kodea mugikorrean edo autentifikazio-aplikazio bat. Bigarren urrats hori gabe, lapurtutako pasahitzak ez du balio.',
        },
      },
      {
        type: 'timed',
        points: 100,
        seconds: 35,
        prompt: {
          es: 'Ronda rápida de cuentas seguras.',
          eu: 'Kontu seguruen erronda bizkorra.',
        },
        statements: [
          { text: { es: 'Compartir el código SMS con alguien que lo pide', eu: 'SMS kodea eskatzen duen norbaiti partekatu' }, isTrue: false },
          { text: { es: 'Activar la verificación en dos pasos en el correo', eu: 'Postan bi urratseko egiaztapena aktibatu' }, isTrue: true },
          { text: { es: 'Cerrar sesión en ordenadores públicos', eu: 'Ordenagailu publikoetan saioa itxi' }, isTrue: true },
          { text: { es: 'Usar la misma contraseña en todas las cuentas', eu: 'Pasahitz bera kontu guztietan erabili' }, isTrue: false },
          { text: { es: 'Revisar los dispositivos conectados a tu cuenta', eu: 'Zure kontura konektatutako gailuak berrikusi' }, isTrue: true },
          { text: { es: 'Dejar la sesión abierta en el móvil de un amigo', eu: 'Zure saioa lagun baten mugikorrean irekita utzi' }, isTrue: false },
        ],
        explain: {
          es: 'La seguridad de una cuenta se construye con tres gestos: contraseña única, verificación en dos pasos y cerrar sesiones donde no las necesitas.',
          eu: 'Kontu baten segurtasuna hiru keinuk eraikitzen dute: pasahitz bakarra, bi urratseko egiaztapena eta behar ez dituzun lekuetan saioak ixtea.',
        },
      },
    ],
    lesson: {
      es: 'El código de seis dígitos es personal: no se comparte nunca. La verificación en dos pasos evita que una contraseña robada abra tu cuenta.',
      eu: 'Sei zifrako kodea pertsonala da: ez da inoiz partekatzen. Bi urratseko egiaztapenak eragozten du lapurtutako pasahitz batek zure kontua irekitzea.',
    },
  },
];