export const missions = [
  {
    id: 'w1m1',
    title: { es: 'El mensaje que duele', eu: 'Min egiten duen mezua' },
    goal: {
      es: 'Reconocer el ciberacoso y actuar sin responder con más violencia',
      eu: 'Ziberjazarpena ezagutu eta indarkeria gehiagorekin ez erantzun',
    },
    intro: {
      es: 'En el Reino del Respeto los puentes de luz se apagan cuando alguien insulta a otro. Hoy uno parpadea: desde ayer, Leo recibe mensajes crueles en el chat de la clase.',
      eu: 'Errespetuaren Erresuman argizko zubiak itzaltzen dira norbaitek besteari iraintzen dionean. Gaur bat keinuka dabil: atzotik, Leok mezu gogorrak jasotzen ditu klaseko txatean.',
    },
    dialogue: {
      es: '«No hace falta ser un héroe para parar esto. Basta con no reír la gracia y dar el primer paso.»',
      eu: '«Ez da heroia izan behar hau gelditzeko. Nahikoa da barrea ez egitea eta lehen urratsa ematea.»',
    },
    steps: [
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'En el chat de clase alguien escribe: «Nadie te aguanta, Leo. ¿Por qué no te vas?» y tres personas responden con emojis de risa. ¿Qué está pasando?',
          eu: 'Klaseko txatean norbaitek idazten du: «Inork ez zaitu jasaten, Leo. Zergatik ez zara joaten?» eta hiru lagunek barre-emojiak bidaltzen dituzte. Zer gertatzen ari da?',
        },
        options: [
          { es: 'Es una broma normal entre amigos', eu: 'Lagunen arteko txantxa normala da' },
          { es: 'Es ciberacoso: se está humillando a una persona en grupo', eu: 'Ziberjazarpena da: pertsona bat taldean umiliatzen ari dira' },
          { es: 'No es nada, es solo un mensaje', eu: 'Ez da ezer, mezu bat besterik ez da' },
        ],
        correct: 1,
        explain: {
          es: 'Cuando un mensaje busca humillar y el grupo lo jalea, ya no es una broma: es acoso. El daño no depende de la intención de quien escribe, sino de cómo lo vive quien lo recibe.',
          eu: 'Mezu batek umiliatu nahi duenean eta taldeak animatzen duenean, ez da txantxa: jazarpena da. Kaltea ez dator idazten duenaren asmotik, jaso duenak nola bizi duen baizik.',
        },
      },
      {
        type: 'decision',
        points: 100,
        chat: {
          from: { es: 'Chat · Clase 6B', eu: 'Txata · 6B klasea' },
          text: {
            es: '«Nadie te aguanta, Leo. ¿Por qué no te vas?» · 3 respuestas con 😂',
            eu: '«Inork ez zaitu jasaten, Leo. Zergatik ez zara joaten?» · 3 erantzun 😂ekin',
          },
        },
        prompt: { es: '¿Qué haces tú en ese chat?', eu: 'Zer egiten duzu zuk txata horretan?' },
        options: [
          {
            es: 'Reírte y seguir la broma para no quedar mal',
            eu: 'Barre egin eta txantxari jarraitu, txarto geratu ez dadin',
            correct: false,
            outcome: {
              es: 'Mañana Leo no viene a clase. El chat sigue, y ahora tú también formas parte de él.',
              eu: 'Bihar Leo ez da klasera etorriko. Txatak jarraitzen du, eta orain zu ere bertan zaude.',
            },
            explain: {
              es: 'Reírse da permiso al acosador: siente que el grupo lo apoya. Tu «me gusta» o tu emoji también cuenta como acoso.',
              eu: 'Barre egiteak jazartzaileari baimena ematen dio: taldeak babesten duela sentitzen du. Zure «atsegitea» edo emojia ere jazarpena da.',
            },
          },
          {
            es: 'No decir nada y mirar hacia otro lado',
            eu: 'Ezer ez esan eta beste aldera begiratu',
            correct: false,
            outcome: {
              es: 'Leo escribe «da igual» y borra el chat. Nadie le ha defendido.',
              eu: 'Leok «berdin dio» idazten du eta txata ezabatzen du. Inork ez dio defendatu.',
            },
            explain: {
              es: 'El silencio se interpreta como apoyo al que insulta. No tienes que enfrentarte a nadie: basta con escribir «esto no tiene gracia».',
              eu: 'Isiltasuna iraintzen duenaren babes gisa ulertzen da. Ez duzu inoren aurka jarri behar: nahikoa da «honek ez du graziarik» idaztea.',
            },
          },
          {
            es: 'Escribir «basta, esto no tiene gracia» y hablar con Leo en privado',
            eu: '«Nahikoa, honek ez du graziarik» idatzi eta Leorekin bakarrik hitz egin',
            correct: true,
            outcome: {
              es: 'Dos compañeros más escriben lo mismo. El chat se calma y Leo te cuenta que llevaba días aguantándolo.',
              eu: 'Beste bi ikaskidek gauza bera idazten dute. Txata lasaitu egiten da eta Leok kontatzen dizu egunak zeramatzala hori pairatzen.',
            },
            explain: {
              es: 'Una sola persona que rompe el silencio cambia el grupo. Y hablar en privado con la víctima le devuelve algo esencial: no está solo.',
              eu: 'Isiltasuna apurtzen duen pertsona bakar batek taldea aldatzen du. Eta biktimarekin bakarrik hitz egiteak funtsezkoa itzultzen dio: ez dagoela bakarrik.',
            },
          },
        ],
      },
      {
        type: 'spot',
        points: 100,
        prompt: {
          es: 'Estos son mensajes del grupo de la clase. Marca todos los que sean ciberacoso.',
          eu: 'Hauek dira klaseko taldeko mezuak. Markatu ziberjazarpena diren guztiak.',
        },
        items: [
          { text: { es: '«Eres un pringado, nadie te quiere»', eu: '«Asto bat zara, inork ez zaitu maite»' }, bad: true },
          { text: { es: '«¿Me pasas los deberes de mates?»', eu: '«Mateko deberrak pasatzen dizkidazu?»' }, bad: false },
          { text: { es: '«Subimos la foto de Leo dormido en clase 😂»', eu: '«Leoren argazkia igoko dugu, klasean lo zegoela 😂»' }, bad: true },
          { text: { es: '«Gran partido ayer, Leo»', eu: '«Partida handia atzo, Leo»' }, bad: false },
          { text: { es: '«Si lo cuentas a alguien te vas a arrepentir»', eu: '«Norbaitek jakiten badu damutuko zara»' }, bad: true },
          { text: { es: '«Quedamos el sábado para el trabajo»', eu: '«Larunbatean geratzen gara lana egiteko»' }, bad: false },
        ],
        explain: {
          es: 'El acoso no siempre va de insultos: también es humillar con fotos, amenazar o dejar a alguien en ridículo delante de todos. Los mensajes normales del día a día no tienen nada que ver.',
          eu: 'Jazarpena ez da beti irainak: argazkiekin umiliatzea, mehatxatzea edo norbait denen aurrean barregarri uztea ere bada. Eguneroko mezu arruntak ez du zerikusi handirik.',
        },
      },
    ],
    lesson: {
      es: 'El ciberacoso es repetido, intencionado y ocurre delante de otros. No responder con más insultos y no reír la gracia ya lo frena. Si te pasa a ti o a alguien cercano: guarda pruebas, bloquea y cuenta lo que ocurre a un adulto de confianza.',
      eu: 'Ziberjazarpena behin eta berriz gertatzen da, nahita, eta besteen aurrean. Irainekin ez erantzuteak eta barre ez egiteak jada geldiarazten du. Zuri edo gertukoren bati gertatzen bazaizu: gorde frogak, blokeatu eta kontatu gertatzen dena konfiantzazko heldu bati.',
    },
  },
  {
    id: 'w1m2',
    title: { es: 'El grupo que excluye', eu: 'Baztertzen duen taldea' },
    goal: {
      es: 'Ayudar a quien sufre acoso y entender lo que necesita una víctima',
      eu: 'Jazarpena pairatzen duenari lagundu eta biktimak zer behar duen ulertu',
    },
    intro: {
      es: 'Al otro lado del reino han creado un grupo llamado «los de siempre» y se ríen de una compañera nueva. Te han añadido a ti. Todos esperan tu reacción.',
      eu: 'Erresumaren beste aldean «betikoak» izeneko taldea sortu dute eta ikaskide berri batengatik barre egiten dute. Zu gehitu zaituzte. Denek zure erreakzioa espero dute.',
    },
    dialogue: {
      es: '«Excluir a alguien también es acosar. Y defender a esa persona delante del grupo cambia la historia.»',
      eu: '«Norbait baztertzea ere jazarpena da. Eta pertsona hori taldearen aurrean defendatzeak istorioa aldatzen du.»',
    },
    steps: [
      {
        type: 'decision',
        points: 100,
        chat: {
          from: { es: 'Grupo «Los de siempre»', eu: '«Betikoak» taldea' },
          text: {
            es: '«Chicos, mirad la ropa de la nueva 😂 No la metáis en nuestro grupo, que se cree especial.»',
            eu: '«Mutilak, ikusi berriaren arropa 😂 Ez dezagun gure taldera sartu, berezia dela uste du eta.»',
          },
        },
        prompt: { es: '¿Cómo respondes?', eu: 'Nola erantzuten duzu?' },
        options: [
          {
            es: 'Mandar el mensaje a otros amigos para reírte',
            eu: 'Mezua beste lagun batzuei bidali barre egiteko',
            correct: false,
            outcome: {
              es: 'La imagen da la vuelta al curso en una hora. Ella se entera por un desconocido.',
              eu: 'Irudia ordubetean zehar zabaltzen da ikasturte osoan. Berataz arrotz batek jakiten du.',
            },
            explain: {
              es: 'Reenviar contenido que humilla es participar. Un mensaje que sale de tu móvil ya no lo controlas: se copia, se guarda y nunca desaparece del todo.',
              eu: 'Umiliatzen duen edukia birbidaltzea parte-hartzea da. Zure mugikorretik ateratzen den mezua ezin duzu kontrolatu: kopiatu, gorde eta ez da guztiz desagertzen.',
            },
          },
          {
            es: 'Salir del grupo sin decir nada',
            eu: 'Taldetik atera hitzik esan gabe',
            correct: false,
            outcome: {
              es: 'Estás fuera, pero la broma sigue sin ti y ella sigue sola.',
              eu: 'Kanpoan zaude, baina txantxak zu gabe jarraitzen du eta bera bakarrik dago.',
            },
            explain: {
              es: 'Marcharse protege tu nombre, no a la persona acosada. Irte poniendo un límite y avisando es mucho más útil.',
              eu: 'Joateak zure izena babesten du, ez jazartzen ari diren pertsona. Alde egitea, muga jarriz eta ohartaraziz, askoz erabilgarriagoa da.',
            },
          },
          {
            es: 'Escribir «esto no mola» y sentarte con ella en el recreo',
            eu: '«Hau ez da ona» idatzi eta jolastokian berarekin eseri',
            correct: true,
            outcome: {
              es: 'Al día siguiente otra compañera se sienta con vosotras. El grupo pierde fuerza.',
              eu: 'Hurrengo egunean beste ikaskide bat zuekin esertzen da. Taldeak indarra galtzen du.',
            },
            explain: {
              es: 'Los grupos acosan porque se sienten respaldados. Cuando alguien marca un límite público, otros se atreven a decir lo mismo y el acoso pierde apoyo.',
              eu: 'Taldeek jazarpena egiten dute babestuta sentitzen direlako. Norbaitek muga publikoa jartzen duenean, beste batzuek gauza bera esatera ausartzen dira eta jazarpenak babesa galtzen du.',
            },
          },
        ],
      },
      {
        type: 'order',
        points: 100,
        prompt: {
          es: 'Pulsa los pasos en el orden correcto para ayudar a una persona que sufre acoso.',
          eu: 'Sakatu urratsak ordena zuzenan jazarpena pairatzen duen pertsona bati laguntzeko.',
        },
        steps: [
          { es: 'No reenviar ni seguir compartiendo el contenido', eu: 'Ez birbidali eta ez jarraitu edukia partekatzen' },
          { es: 'Guardar pruebas con capturas de pantalla', eu: 'Gorde frogak pantaila-argazkiekin' },
          { es: 'Hablar con la persona en privado y escucharla', eu: 'Hitz egin pertsonarekin bakarrik eta entzun' },
          { es: 'Bloquear y reportar al acosador', eu: 'Blokeatu eta salatu jazartzailea' },
          { es: 'Contarlo a un adulto de confianza', eu: 'Kontatu konfiantzazko heldu bati' },
        ],
        explain: {
          es: 'Primero se corta la difusión, después se demuestra lo que pasa y se apoya a la víctima. Bloquear y reportar cierra la puerta por donde entra el acoso; contarlo a un adulto consigue ayuda real.',
          eu: 'Lehenik zabalkundea mozten da, gero frogatzen da zer gertatzen den eta biktima babesten da. Blokeatzeak eta salatzeak jazarpena sartzen den atea ixten du; heldu bati kontatzeak benetako laguntza lortzen du.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'Tu compañera te dice que ya no quiere ir al instituto. ¿Qué necesita de ti en ese momento?',
          eu: 'Zure ikaskideak esaten dizu dagoeneko ez dela institutura joan nahi. Zer behar du zuregandik une horretan?',
        },
        options: [
          { es: 'Que le digas que no exagere y que son bromas', eu: 'Esateko ez duela gehiegizkoa egiten eta txantxak direla' },
          { es: 'Que la escuches sin juzgar y le ayudes a contarlo a un adulto', eu: 'Epaitu gabe entzutea eta heldu bati kontatzen laguntzea' },
          { es: 'Que lo resuelvas tú sola delante de todo el mundo', eu: 'Zu bakarrik den guztien aurrean konpontzea' },
        ],
        correct: 1,
        explain: {
          es: 'A quien sufre acoso se le quita la culpa y se le cree. Escuchar sin juzgar y acompañar hasta un adulto de confianza es más valioso que cualquier discurso.',
          eu: 'Jazarpena pairatzen duenari errua kentzen zaio eta sinetsi egiten zaio. Epaitu gabe entzutea eta konfiantzazko heldu batengana laguntzea edozein diskurtso baino baliotsuagoa da.',
        },
      },
    ],
    lesson: {
      es: 'Excluir, reírse de la ropa o difundir fotos humillantes es acoso aunque no haya insultos. Reenviar contenido es participar. Ayudar es escuchar, no juzgar y acompañar a la persona hasta un adulto de confianza.',
      eu: 'Baztertzea, arropagatik barre egitea edo argazki umiliagarriak zabaltzea jazarpena da irainik ez badago ere. Edukia birbidaltzea parte hartzea da. Laguntzea entzutea da, ez epaitzea, eta pertsona konfiantzazko heldu batengana laguntzea.',
    },
  },
  {
    id: 'w1m3',
    title: { es: 'La cadena de rumores', eu: 'Esamesen katea' },
    goal: {
      es: 'Decidir qué se comparte y qué se corta para no hacer daño',
      eu: 'Zer partekatu eta zer moztu erabaki kalterik ez egiteko',
    },
    intro: {
      es: 'Alguien ha sacado de contexto un audio de una compañera y ya va por el tercer grupo. El rumor corre más rápido que la verdad y cada reenvío añade una capa nueva.',
      eu: 'Norbaitek ikaskide baten audioa testuingurutik atera du eta jada hirugarren taldean dabil. Esamesak egiak baino azkarrago egiten du korrika eta birbidaltze bakoitzak geruza berri bat gehitzen du.',
    },
    dialogue: {
      es: '«Un rumor no se para con otro rumor. Se para cuando alguien deja de reenviarlo.»',
      eu: '«Esamesa ez da beste esames batekin gelditzen. Norbaitek birbidaltzeari uzten dionean gelditzen da.»',
    },
    steps: [
      {
        type: 'sort',
        points: 100,
        prompt: {
          es: 'Clasifica cada acción: ¿ayuda a frenar el rumor o lo empeora?',
          eu: 'Sailkatu ekintza bakoitza: esamesa gelditzen laguntzen du edo okerrago jartzen du?',
        },
        buckets: [
          { id: 'help', label: { es: 'Frena el rumor', eu: 'Esamesa gelditzen du' } },
          { id: 'hurt', label: { es: 'Lo empeora', eu: 'Okerrago jartzen du' } },
        ],
        items: [
          { text: { es: 'Compartirlo «por si es verdad»', eu: 'Partekatu «egia bada behintzat»' }, bucket: 'hurt' },
          { text: { es: 'Preguntar a la persona implicada', eu: 'Inplikatutako pertsonari galdetu' }, bucket: 'help' },
          { text: { es: 'Añadir «me han dicho que…» al reenviar', eu: '«Esan didate…» erantsi birbidaltzean' }, bucket: 'hurt' },
          { text: { es: 'Escribir en el grupo que no hay pruebas', eu: 'Taldean idatzi frogarik ez dagoela' }, bucket: 'help' },
          { text: { es: 'Hacer una captura y pasarla a otro grupo', eu: 'Pantaila-argazkia egin eta beste talde batera pasa' }, bucket: 'hurt' },
          { text: { es: 'Decir «no lo sé, no lo comparto»', eu: 'Esan «ez dakit, nik ez dut partekatzen»' }, bucket: 'help' },
        ],
        explain: {
          es: 'Un rumor sin pruebas no se comparte, ni siquiera con un «dicen que». Comprobar antes de reenviar es la única forma de no convertirte en parte del problema.',
          eu: 'Frogarik gabeko esamesa ez da partekatzen, ezta «diote» esanda ere. Birbidali aurretik egiaztatzea da arazoaren parte ez bihurtzeko modu bakarra.',
        },
      },
      {
        type: 'quiz',
        points: 100,
        prompt: {
          es: 'El rumor ya está en cinco grupos. ¿Cuál es la mejor forma de cortarlo?',
          eu: 'Esamesa jada bost taldetan dago. Zein da hura mozteko modurik onena?',
        },
        options: [
          { es: 'Desmentirlo con otra cadena de mensajes virales', eu: 'Beste mezu kate biriko batekin gezurtatzea' },
          { es: 'Avisar a la persona afectada, no reenviarlo y pedir que se pare en tu grupo', eu: 'Kaltetutakoari ohartarazi, ez birbidali eta zure taldean gelditzeko eskatu' },
          { es: 'Esperar a que se olvide solo', eu: 'Bere kabuz ahaztu dadin itxaron' },
        ],
        correct: 1,
        explain: {
          es: 'La persona afectada tiene derecho a saber lo que se dice de ella y a decidir qué hacer. Cuanto menos se difunde, menos daño hace: cada reenvío es una copia más difícil de borrar.',
          eu: 'Kaltetutako pertsonak eskubidea du berari buruz esaten dena jakiteko eta zer egin erabakitzeko. Zenbat eta gutxiago zabaldu, orduan eta kalte txikiagoa: birbidaltze bakoitza ezabatzeko zailagoa den kopia bat da.',
        },
      },
      {
        type: 'timed',
        points: 100,
        seconds: 35,
        prompt: {
          es: 'Ronda rápida: ¿respeto en línea sí o no?',
          eu: 'Erronda bizkorra: lineako errespetua bai ala ez?',
        },
        statements: [
          { text: { es: 'Pedir permiso antes de subir una foto de otra persona', eu: 'Beste pertsona baten argazkia igotzeko baimena eskatu' }, isTrue: true },
          { text: { es: 'Etiquetar a alguien en una foto que le da vergüenza', eu: 'Norbait lotsatzen duen argazki batean etiketatu' }, isTrue: false },
          { text: { es: 'Criticar la idea y no a la persona', eu: 'Ideia kritikatu, ez pertsona' }, isTrue: true },
          { text: { es: 'Publicar un audio privado para reírte', eu: 'Audio pribatua argitaratu barre egiteko' }, isTrue: false },
          { text: { es: 'Denunciar un comentario que insulta', eu: 'Iraintzen duen iruzkina salatu' }, isTrue: true },
          { text: { es: 'Escribir en mayúsculas para gritar a alguien', eu: 'Maiuskulaz idatzi norbaitek oihukatzeko' }, isTrue: false },
          { text: { es: 'Preguntar «¿estás bien?» si alguien desaparece del grupo', eu: '«Ongi zaude?» galdetu norbait taldetik desagertzen bada' }, isTrue: true },
          { text: { es: 'Crear un perfil falso con el nombre de un compañero', eu: 'Ikaskide baten izenarekin profil faltsua sortu' }, isTrue: false },
        ],
        explain: {
          es: 'El respeto digital cabe en gestos pequeños: pedir permiso, no etiquetar sin avisar, criticar ideas sin atacar personas y frenar lo que humilla.',
          eu: 'Errespetu digitala keinuek osatzen dute: baimena eskatu, ohartarazi gabe ez etiketatu, ideiak kritikatu pertsonak eraso gabe eta umiliatzen duena gelditu.',
        },
      },
    ],
    lesson: {
      es: 'Un rumor se frena cuando alguien deja de reenviarlo. No difundas lo que no puedes comprobar y avisa a la persona afectada. Compartir «por si acaso» también hace daño.',
      eu: 'Esamesa norbaitek birbidaltzeari uzten dionean gelditzen da. Ez zabaldu egiaztatu ezin duzuna eta ohartarazi kaltetutako pertsonari. «Badaezpada ere» partekatzeak ere min egiten du.',
    },
  },
];