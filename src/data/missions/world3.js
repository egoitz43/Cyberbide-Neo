export const missions = [
  {
    id: 'w3m1',
    title: { es: 'Tu huella digital', eu: 'Zure aztarna digitala' },
    goal: {
      es: 'Distinguir qué datos se pueden compartir y cuáles no',
      eu: 'Zer datu parteka daitekeen eta zer ez bereizi',
    },
    intro: {
      es: 'En la Montaña de la Privacidad cada dato que dejas se queda grabado en la piedra. Sira te enseña una pared llena de nombres, fotos y direcciones que otros dejaron sin pensar.',
      eu: 'Pribatutasunaren Mendian uzten duzun datu bakoitza harrian grabatuta geratzen da. Sirak paret bat erakusten dizu, beste batzuk pentsatu gabe utzitako izenez, argazkiz eta helbidez betea.',
    },
    dialogue: {
      es: '«Lo que publicas hoy puede leerlo alguien dentro de diez años. Pregúntate siempre: ¿quiero que esto sea permanente?»',
      eu: '«Gaur argitaratzen duzuna hamar urte barru norbaitek irakur dezake. Galdetu beti zeure buruari: nahi dut hau betirako geratzea?»',
    },
    steps: [
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: 'Clasifica cada dato: ¿se puede compartir en un perfil público o mejor guardarlo?',
          eu: 'Sailkatu datu bakoitza: parteka daiteke profil publikoan edo hobe da gordetzea?',
        },
        buckets: [
          { id: 'share', label: { es: 'Se puede compartir', eu: 'Parteka daiteke' } },
          { id: 'keep', label: { es: 'Mejor guardarlo', eu: 'Hobe gordetzea' } },
        ],
        items: [
          { text: { es: 'Tu color favorito', eu: 'Zure kolore gogokoena' }, bucket: 'share' },
          { text: { es: 'Tu dirección de casa', eu: 'Zure etxeko helbidea' }, bucket: 'keep' },
          { text: { es: 'El nombre de tu mascota', eu: 'Zure maskotaren izena' }, bucket: 'share' },
          { text: { es: 'Una foto de tu DNI', eu: 'Zure NANaren argazkia' }, bucket: 'keep' },
          { text: { es: 'Tu grupo de música favorito', eu: 'Zure musika-talde gogokoena' }, bucket: 'share' },
          { text: { es: 'El horario en el que estás solo en casa', eu: 'Etxean bakarrik zauden ordutegia' }, bucket: 'keep' },
          { text: { es: 'El nombre de tu instituto', eu: 'Zure institutuaren izena' }, bucket: 'keep' },
          { text: { es: 'Tu videojuego favorito', eu: 'Zure bideojoko gogokoena' }, bucket: 'share' },
        ],
        explain: {
          es: 'Dirección, horarios, documentos y centro de estudios permiten localizarte. Los gustos y aficiones no te ponen en peligro y sirven para conectar con gente.',
          eu: 'Helbideak, ordutegiek, dokumentuek eta ikastegiak kokatu egiten zaituzte. Gustuek eta zaletasunek ez zaituzte arriskuan jartzen eta jendearekin harremanetan jartzeko balio dute.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: '¿Qué es la huella digital?',
          eu: 'Zer da aztarna digitala?',
        },
        options: [
          { es: 'El rastro de todo lo que haces en Internet y que puede quedar para siempre', eu: 'Interneten egiten duzun guztiaren arrastoa, betiko geratu daitekeena' },
          { es: 'Una marca que se pone en el dedo al usar el móvil', eu: 'Mugikorra erabiltzean hatzean jartzen den marka' },
          { es: 'La memoria del teléfono', eu: 'Telefonoaren memoria' },
        ],
        correct: 0,
        explain: {
          es: 'Cada búsqueda, «me gusta», comentario y foto deja un rastro. Aunque borres una publicación, puede haber copias, capturas o cachés.',
          eu: 'Bilaketa bakoitzak, «atsegin dut»ek, iruzkinek eta argazkiek arrastoa uzten dute. Argitalpena ezabatuta ere, kopiak, pantaila-argazkiak edo cacheak egon daitezke.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Una app de retos te pide acceso a tus contactos «para que juegues con amigos». ¿Qué haces?',
          eu: 'Erronken aplikazio batek zure kontaktuetara sarbidea eskatzen du «lagunekin jolasteko». Zer egiten duzu?',
        },
        options: [
          {
            es: 'Aceptar, total, solo son contactos',
            eu: 'Onartu, kontaktuak besterik ez dira eta',
            correct: false,
            outcome: {
              es: 'Días después tus contactos reciben mensajes extraños enviados desde tu cuenta.',
              eu: 'Egun batzuk geroago zure kontaktuek mezu arraroak jasotzen dituzte zure kontutik bidalita.',
            },
            explain: {
              es: 'Los contactos son datos de otras personas y tú no puedes decidir por ellas. Muchas apps venden o usan esos datos.',
              eu: 'Kontaktuak beste pertsonen datuak dira eta ezin duzu haien ordez erabaki. Aplikazio askok datu horiek saltzen edo erabiltzen dituzte.',
            },
          },
          {
            es: 'Rechazar el permiso y jugar sin esa función',
            eu: 'Baimena ukatu eta funtzio hori gabe jolastu',
            correct: true,
            outcome: {
              es: 'El juego funciona igual de bien y tus contactos no reciben nada.',
              eu: 'Jokoak berdin funtzionatzen du eta zure kontaktuek ez dute ezer jasotzen.',
            },
            explain: {
              es: 'Una app debe pedir solo los permisos que necesita para funcionar. Si el permiso no tiene sentido, se rechaza o se busca otra app.',
              eu: 'Aplikazio batek funtzionatzeko behar dituen baimenak soilik eskatu behar ditu. Baimenak zentzurik ez badu, ukatu edo beste aplikazio bat bilatu.',
            },
          },
          {
            es: 'Aceptar y borrar la app al día siguiente',
            eu: 'Onartu eta hurrengo egunean aplikazioa ezabatu',
            correct: false,
            outcome: {
              es: 'La app ya había copiado la lista de contactos antes de que la borraras.',
              eu: 'Aplikazioak jada kontaktuen zerrenda kopiatu zuen ezabatu aurretik.',
            },
            explain: {
              es: 'El permiso se concede en el momento en que aceptas. Borrar la app después no deshace la copia.',
              eu: 'Baimena onartzen duzun unean ematen da. Aplikazioa geroago ezabatzeak ez du kopia desegiten.',
            },
          },
        ],
      },
    ],
    lesson: {
      es: 'Tu huella digital es el rastro de lo que haces en Internet y casi nunca desaparece. Datos como dirección, horarios o documentos te localizan; los gustos y aficiones, no. Una app solo debe pedir los permisos que necesita.',
      eu: 'Zure aztarna digitala Interneten egiten duzunaren arrastoa da eta ia inoiz ez da desagertzen. Helbidea, ordutegiak edo dokumentuak bezalako datuek kokatzen zaituzte; gustuek eta zaletasunek ez. Aplikazio batek behar dituen baimenak soilik eskatu behar ditu.',
    },
  },
  {
    id: 'w3m2',
    title: { es: 'La foto de la playa', eu: 'Hondartzako argazkia' },
    goal: {
      es: 'Detectar datos ocultos en fotos y ajustar la privacidad',
      eu: 'Argazkietan ezkutuko datuak hauteman eta pribatutasuna egokitu',
    },
    intro: {
      es: 'Una compañera ha publicado una foto en la playa con su familia. En un rincón se ve una matrícula y en el texto cuenta que estarán fuera dos semanas.',
      eu: 'Ikaskide batek hondartzako argazki bat argitaratu du bere familiarekin. Izkin batean matrikula bat ikusten da eta testuan bi astez kanpo egongo direla kontatzen du.',
    },
    dialogue: {
      es: '«Una foto cuenta más cosas de las que quieres: dónde estás, con quién y cuándo vuelves.»',
      eu: '«Argazki batek nahi duzun baino gauza gehiago kontatzen ditu: non zauden, norekin eta noiz itzuliko zaren.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca los datos personales que quedan expuestos en esa publicación.',
          eu: 'Markatu argitalpen horretan agerian geratzen diren datu pertsonalak.',
        },
        items: [
          { text: { es: 'La matrícula del coche familiar', eu: 'Familiako autoaren matrikula' }, bad: true },
          { text: { es: '«Estaremos fuera dos semanas»', eu: '«Bi astez kanpo egongo gara»' }, bad: true },
          { text: { es: 'El nombre del hotel en la ubicación', eu: 'Kokapenean hotelaren izena' }, bad: true },
          { text: { es: 'El color del cielo', eu: 'Zeruaren kolorea' }, bad: false },
          { text: { es: 'La cara de su hermano pequeño', eu: 'Bere anaia txikiaren aurpegia' }, bad: true },
          { text: { es: 'El tipo de helado que está comiendo', eu: 'Jaten ari den izozki mota' }, bad: false },
        ],
        explain: {
          es: 'Una sola foto puede revelar matrícula, ubicación, rutinas y caras de menores. Con esos datos se puede saber cuándo una casa está vacía.',
          eu: 'Argazki bakar batek matrikula, kokapena, errutinak eta adingabeen aurpegiak ager ditzake. Datu horiekin jakin daiteke noiz dagoen etxe bat hutsik.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'Tu amiga ha subido la foto y no se ha dado cuenta. ¿Qué haces?',
          eu: 'Zure lagunak argazkia igo du eta ez da ohartu. Zer egiten duzu?',
        },
        options: [
          {
            es: 'Comentarlo delante de todos para que aprenda',
            eu: 'Denen aurrean komentatu ikas dezan',
            correct: false,
            outcome: {
              es: 'Se avergüenza y no borra la foto por no dar el brazo a torcer.',
              eu: 'Lotsatu egiten da eta ez du argazkia ezabatzen, ez duelako amore emango.',
            },
            explain: {
              es: 'Avisar en público pone a la persona a la defensiva. Un mensaje privado consigue que cambie lo que ha publicado.',
              eu: 'Publikoan ohartarazteak pertsona defentsiboa jartzen du. Mezu pribatu batek argitaratu duena aldatzea lortzen du.',
            },
          },
          {
            es: 'Escribirle en privado y explicarle qué se ve en la foto',
            eu: 'Bakarrik idatzi eta argazkian zer ikusten den azaldu',
            correct: true,
            outcome: {
              es: 'Borra la ubicación, recorta la matrícula y te da las gracias.',
              eu: 'Kokapena ezabatzen du, matrikula mozten du eta eskerrak ematen dizkizu.',
            },
            explain: {
              es: 'Avisar con respeto y datos concretos funciona. Se trata de proteger a la persona, no de ridiculizarla.',
              eu: 'Errespetuz eta datu zehatzekin ohartarazteak funtzionatzen du. Kontua pertsona babestea da, ez barregarri uztea.',
            },
          },
          {
            es: 'No decir nada, es su perfil',
            eu: 'Ezer ez esan, bere profila da eta',
            correct: false,
            outcome: {
              es: 'La publicación sigue visible y con ella la información del viaje.',
              eu: 'Argitalpena ikusgai jarraitzen du, eta harekin batera bidaiaren informazioa.',
            },
            explain: {
              es: 'Respetar la libertad de alguien no está reñido con avisarle de un riesgo. Basta con hacerlo una vez y en privado.',
              eu: 'Norbaiten askatasuna errespetatzea ez dago harekin arriskuaz hitz egitearekin gatazkan. Behin eta bakarrik esatea nahikoa da.',
            },
          },
        ],
      },
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: '¿Qué ajustes de privacidad protegen tu cuenta?',
          eu: 'Zein pribatutasun-ezarpenek babesten dute zure kontua?',
        },
        buckets: [
          { id: 'protect', label: { es: 'Protege', eu: 'Babesten du' } },
          { id: 'expose', label: { es: 'Expone', eu: 'Agerrarazten du' } },
        ],
        items: [
          { text: { es: 'Cuenta privada: solo te siguen personas que aceptas', eu: 'Kontu pribatua: onartzen dituzunek soilik jarraitzen zaituzte' }, bucket: 'protect' },
          { text: { es: 'Perfil abierto a todo el mundo', eu: 'Mundu guztiari irekitako profila' }, bucket: 'expose' },
          { text: { es: 'Desactivar la ubicación en las fotos', eu: 'Argazkietako kokapena desaktibatu' }, bucket: 'protect' },
          { text: { es: 'Aceptar a cualquier desconocido que te escriba', eu: 'Ezezagun orok idazten dizunean onartu' }, bucket: 'expose' },
          { text: { es: 'Revisar quién puede comentar tus publicaciones', eu: 'Nor arduratzen den zure argitalpenak komentatzeaz berrikusi' }, bucket: 'protect' },
          { text: { es: 'Publicar el horario de tus entrenamientos', eu: 'Zure entrenamenduen ordutegia argitaratu' }, bucket: 'expose' },
        ],
        explain: {
          es: 'Privacidad es decidir quién ve qué. Cuenta privada, ubicación desactivada y comentarios limitados reducen mucho el riesgo.',
          eu: 'Pribatutasuna nork zer ikusten duen erabakitzea da. Kontu pribatuak, kokapena desaktibatuta eta iruzkin mugatuek arriskua asko murrizten dute.',
        },
      },
    ],
    lesson: {
      es: 'Las fotos hablan: matrículas, ubicaciones, caras y rutinas. Avisa en privado cuando veas un riesgo y revisa quién puede ver tu perfil.',
      eu: 'Argazkiek hitz egiten dute: matrikulak, kokapenak, aurpegiak eta errutinak. Ohartarazi bakarrik arriskua ikusten duzunean eta berrikusi nork ikus dezakeen zure profila.',
    },
  },
  {
    id: 'w3m3',
    title: { es: 'El formulario trampa', eu: 'Tranpa-formularioa' },
    goal: {
      es: 'Reconocer cuándo una web pide datos que no necesita',
      eu: 'Noiz eskatzen duen web batek behar ez duen daturik ezagutu',
    },
    intro: {
      es: 'Para descargar un fondo de pantalla gratis, una web pide nombre completo, teléfono, dirección y el nombre de tu colegio. Sira levanta una ceja.',
      eu: 'Doako horma-paper bat deskargatzeko, web batek izen osoa, telefonoa, helbidea eta zure eskolaren izena eskatzen ditu. Sirak bekaina altxatzen du.',
    },
    dialogue: {
      es: '«Si el premio es pequeño y los datos que piden son enormes, el negocio son tus datos.»',
      eu: '«Saria txikia bada eta eskatzen dituzten datuak erraldoiak, negozioa zure datuak dira.»',
    },
    steps: [
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Marca los campos que no tienen nada que ver con descargar un fondo de pantalla.',
          eu: 'Markatu horma-paper bat deskargatzearekin zerikusirik ez duten eremuak.',
        },
        items: [
          { text: { es: 'Nombre completo', eu: 'Izen osoa' }, bad: true },
          { text: { es: 'Número de teléfono', eu: 'Telefono zenbakia' }, bad: true },
          { text: { es: 'Dirección postal', eu: 'Posta-helbidea' }, bad: true },
          { text: { es: 'Resolución de pantalla que quieres', eu: 'Nahi duzun pantaila-bereizmena' }, bad: false },
          { text: { es: 'Nombre de tu colegio', eu: 'Zure eskolaren izena' }, bad: true },
          { text: { es: 'Color favorito del fondo', eu: 'Atzeko planoaren kolore gogokoena' }, bad: false },
        ],
        explain: {
          es: 'Para descargar una imagen solo hace falta elegir el tamaño. Cualquier dato extra sirve para crear perfiles, enviar publicidad o vender la lista.',
          eu: 'Irudi bat deskargatzeko tamaina aukeratzea besterik ez da behar. Aparteko datu oro profilak sortzeko, publizitatea bidaltzeko edo zerrenda saltzeko balio du.',
        },
      },
      {
        type: 'decision',
        points: 100,
        prompt: {
          es: 'El formulario no te deja continuar si no marcas «acepto recibir ofertas de empresas colaboradoras». ¿Qué haces?',
          eu: 'Formularioak ezin du aurrera egin «bazkide diren enpresen eskaintzak jasotzea onartzen dut» markatzen ez baduzu. Zer egiten duzu?',
        },
        options: [
          {
            es: 'Marcar la casilla, es solo publicidad',
            eu: 'Laukia markatu, publizitatea besterik ez da eta',
            correct: false,
            outcome: {
              es: 'En dos semanas tu correo está en listas de spam y recibes llamadas comerciales.',
              eu: 'Bi astetan zure posta spam-zerrendetan dago eta dei komertzialak jasotzen dituzu.',
            },
            explain: {
              es: 'Aceptar cesiones de datos permite compartirlos con otras empresas. Recuperar ese permiso después es muy difícil.',
              eu: 'Datu-uzkidura onartzeak beste enpresekin partekatzeko aukera ematen du. Baimen hori berreskuratzea oso zaila da gero.',
            },
          },
          {
            es: 'Buscar el fondo en otra web que no pida nada',
            eu: 'Horma-papera ezer eskatzen ez duen beste web batean bilatu',
            correct: true,
            outcome: {
              es: 'Encuentras el mismo fondo en un banco de imágenes gratuito en un minuto.',
              eu: 'Minutu batean horma-paper bera aurkitzen duzu doako irudi-banku batean.',
            },
            explain: {
              es: 'Casi todo lo que buscas existe en otro sitio sin condiciones. Si una web pide demasiado, hay alternativas.',
              eu: 'Bilatzen duzun ia dena baldintzarik gabe dago beste leku batean. Web batek gehiegi eskatzen badu, badira alternatibak.',
            },
          },
          {
            es: 'Rellenar con datos inventados',
            eu: 'Datu asmatuekin bete',
            correct: false,
            outcome: {
              es: 'La descarga funciona, pero la web guarda tu IP y tu correo si lo has puesto real.',
              eu: 'Deskargak funtzionatzen du, baina webak zure IPa eta posta gordetzen ditu erabilgarria jarri baduzu.',
            },
            explain: {
              es: 'Inventar datos evita parte del daño, pero la web sigue registrando tu conexión. Es más seguro cambiar de sitio.',
              eu: 'Datuak asmatzeak kaltearen zati bat saihesten du, baina webak zure konexioa erregistratzen jarraitzen du. Seguruagoa da lekuz aldatzea.',
            },
          },
        ],
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: '¿Cuál de estos datos es el más peligroso de publicar o enviar a un desconocido?',
          eu: 'Zein da arriskutsuena argitaratzea edo ezezagun bati bidaltzea?',
        },
        options: [
          { es: 'Tu equipo de fútbol favorito', eu: 'Zure futbol-talde gogokoena' },
          { es: 'Una foto de tu tarjeta de crédito o del DNI', eu: 'Zure kreditu-txartelaren edo NANaren argazkia' },
          { es: 'El nombre de tu perro', eu: 'Zure txakurraren izena' },
        ],
        correct: 1,
        explain: {
          es: 'Los documentos y las tarjetas permiten suplantar tu identidad o gastar tu dinero. Nunca se envían por chat, aunque quien los pida parezca de confianza.',
          eu: 'Dokumentuek eta txartelek zure identitatea ordezkatzeko edo zure dirua gastatzeko aukera ematen dute. Inoiz ez dira txatez bidaltzen, eskatu dituena fidagarria dirudien arren.',
        },
      },
    ],
    lesson: {
      es: 'Antes de rellenar un formulario pregúntate qué tiene que ver cada campo con lo que vas a recibir. Documentos y tarjetas no se envían nunca. Si una web abusa, busca otra.',
      eu: 'Formulario bat bete aurretik galdetu zeure buruari zer zerikusi duen eremu bakoitzak jasoko duzunarekin. Dokumentuak eta txartelak ez dira inoiz bidaltzen. Web batek gehiegikeria egiten badu, bila ezazu beste bat.',
    },
  },
];