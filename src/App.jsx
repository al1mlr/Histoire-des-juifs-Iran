import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  const periods = [
    {
      id: 'antiquite',
      title: 'Antiquité et Période Pré-islamique',
      subtitle: '722 av. J.-C. — 642 ap. J.-C.',
      icon: '𓂀',
      intro: `La présence juive en Perse est l'une des plus anciennes du monde. Bien antérieure à l'islam et au zoroastrisme d'État, elle précède de plusieurs siècles l'émergence des grandes religions d'État iraniennes. Les Juifs ne sont pas arrivés en conquérants ni en étrangers tolérés : ils sont, au sens plein du terme, autochtones de cette terre. Ils ont participé à la construction de la civilisation perse, contribué à ses lettres, à son commerce, à ses sciences. L'édit de Cyrus le Grand, gravé sur le célèbre cylindre conservé au British Museum, demeure l'un des premiers actes de tolérance religieuse de l'histoire universelle.`,
      events: [
        {
          year: '722 av. J.-C.',
          title: 'Les premières communautés : une présence antérieure à l\'islam',
          description: 'La déportation des Israélites par Shalmaneser V vers la Médie constitue le premier établissement documenté de Juifs en territoire perse. Ces exilés s\'intégrèrent progressivement dans le tissu social et économique de la région, formant des communautés qui allaient traverser les siècles. Leur présence précède de plus d\'un millénaire la conquête arabe et l\'islamisation de la Perse.'
        },
        {
          year: '586 av. J.-C.',
          title: 'L\'exil babylonien et l\'enracinement en Mésopotamie',
          description: 'La déportation menée par Nabuchodonosor II amena des populations juives supplémentaires en Mésopotamie et en Perse. Loin de se dissoudre, ces communautés s\'organisèrent, développèrent leurs institutions et produisirent une vie intellectuelle et religieuse d\'une remarquable richesse — dont le Talmud de Babylone sera l\'expression la plus durable.'
        },
        {
          year: '538 av. J.-C.',
          title: 'Cyrus le Grand : le premier acte de tolérance religieuse de l\'histoire',
          description: 'L\'édit de Cyrus, gravé sur le Cylindre de Cyrus conservé au British Museum, autorise les Juifs exilés à rentrer en Terre d\'Israël et à reconstruire le Temple de Jérusalem. Cet acte sans précédent dans l\'histoire ancienne établit un lien durable entre la Perse et le peuple juif. La Bible hébraïque salue Cyrus comme un instrument de la Providence divine — honneur unique accordé à un souverain non juif. Ce moment fondateur illustre que la relation entre Perses et Juifs ne se réduit pas à l\'oppression : elle est aussi faite de reconnaissance mutuelle et de respect.'
        },
        {
          year: '226 — 651 ap. J.-C.',
          title: 'L\'époque sassanide : tensions et coexistence',
          description: 'L\'établissement du zoroastrisme comme religion d\'État sous les Sassanides créa des tensions nouvelles avec les minorités religieuses. Certains règnes furent marqués par des persécutions, d\'autres par une relative tolérance. Les communautés juives maintinrent leurs institutions, leurs académies talmudiques et leurs réseaux commerciaux, contribuant à l\'économie et à la vie intellectuelle de l\'empire.'
        },
        {
          year: '459 — 484 ap. J.-C.',
          title: 'Péroz Ier : une vague de persécutions systématiques',
          description: 'Le règne de Péroz Ier marqua l\'une des premières vagues de persécutions organisées. Une partie de la communauté juive d\'Ispahan fut massacrée ou contrainte à la conversion. Des enfants furent enlevés et des synagogues détruites. Cet épisode illustre la vulnérabilité des minorités face aux aléas du pouvoir politique — vulnérabilité qui ne définit pas, pour autant, l\'ensemble de la relation judéo-persane.'
        },
        {
          year: '614 ap. J.-C.',
          title: 'La conquête perse de Jérusalem : alliance, trahison et massacre',
          description: 'En 614, les armées sassanides du général Schahr-Barâz s\'emparent de Jérusalem, alors sous domination byzantine. Les Juifs de Palestine, soumis depuis des décennies aux pressions et aux discriminations de l\'Empire chrétien, voient dans cette invasion une libération et rejoignent les forces perses. Néhémie ben Hushiel, chef de la révolte juive, est installé gouverneur de Jérusalem par les Sassanides, et des préparatifs pour la reconstruction du Troisième Temple sont engagés. Mais dès 617, les Perses renversent leur alliance et se rallient aux chrétiens locaux, probablement sous la pression des communautés chrétiennes de Mésopotamie. Néhémie et son « conseil des justes » sont massacrés, et les Juifs sont chassés de Jérusalem. Lorsque l\'empereur byzantin Héraclius reprend la région en 629, il ordonne à son tour le massacre des Juifs en représailles de leur soutien aux Perses. Cet épisode illustre avec une acuité particulière la condition des Juifs de l\'Antiquité tardive : acteurs politiques à part entière, capables de s\'allier aux puissances du moment, mais toujours exposés au retournement des empires.'
        }
      ]
    },
    {
      id: 'moyen-age',
      title: 'Moyen Âge et Période Islamique',
      subtitle: '642 — XVe siècle',
      icon: '✦',
      intro: `La conquête arabe de la Perse en 642 ap. J.-C. intégra les Juifs dans le système du dhimmi. Ce cadre juridique, restrictif à bien des égards, offrait néanmoins une protection légale et une autonomie communautaire réelle. C'est dans ce contexte que naquit la littérature judéo-persane, l'une des expressions les plus originales de la symbiose entre culture juive et culture iranienne. Des poètes juifs écrivaient en persan, des médecins juifs servaient à la cour des califes et des sultans : la contribution juive à la civilisation islamique iranienne fut substantielle et durable.`,
      events: [
        {
          year: '642 ap. J.-C.',
          title: 'La conquête arabe et le statut de dhimmi',
          description: 'Les Juifs furent intégrés au statut de dhimmi (minorité protégée soumise à la jizya, impôt de capitation). Ce système, bien que discriminatoire, offrait une autonomie communautaire et une protection juridique réelles. Les communautés juives conservèrent leurs tribunaux, leurs académies et leurs institutions religieuses. Paradoxalement, certaines communautés juives connurent sous les premiers siècles islamiques une relative prospérité économique et intellectuelle.'
        },
        {
          year: 'VIIIe siècle',
          title: 'Abou Issa d\'Ispahan : la résistance comme affirmation identitaire',
          description: 'En réaction aux pressions politiques et religieuses, des mouvements messianiques émergèrent. Abou Issa d\'Ispahan organisa une révolte armée, symbole de la résistance active d\'une communauté qui refusait de se laisser réduire à la passivité. Ces mouvements témoignent de la vitalité et de la conscience politique des Juifs iraniens.'
        },
        {
          year: '1284 — 1291',
          title: 'Sa\'d al-Dawla : un Juif Grand Vizir de l\'empire mongol',
          description: 'Sous le règne d\'Argun Khan, Sa\'d al-Dawla, médecin juif originaire d\'Abhar, accéda à la fonction de Grand Vizir, administrant un territoire s\'étendant du Caucase à l\'océan Indien. Son ascension illustre les possibilités d\'intégration et de réussite remarquables que certaines périodes offraient aux Juifs iraniens. Après la mort d\'Argun Khan, il fut accusé d\'avoir empoisonné le souverain et exécuté — déclenchant des pogroms qui illustrent la fragilité de cette réussite face aux retournements politiques.'
        },
        {
          year: '1327 — 1359',
          title: 'Shahin Shirazi : fondateur de la littérature judéo-persane',
          description: 'Face aux persécutions du XIVe siècle et à la crainte de voir disparaître la connaissance de l\'hébreu, Shahin Shirazi composa en judéo-persan trois épopées majeures : le Musa Nameh (1327), l\'Ardashir Nameh (1333) et d\'autres œuvres monumentales. Ces compositions préservèrent les récits bibliques dans la langue et les formes poétiques de la Perse, créant un pont culturel unique entre deux civilisations. Shahin est considéré comme le plus grand poète juif de Perse et le fondateur d\'une littérature originale qui témoigne de la profondeur de l\'enracinement juif dans la culture iranienne.'
        }
      ]
    },
    {
      id: 'safavide',
      title: 'Dynastie Safavide',
      subtitle: '1501 — 1736',
      icon: '◈',
      intro: `L'avènement de la dynastie Safavide et l'imposition du chiisme duodécimain comme religion d'État marquèrent un tournant sombre pour les minorités religieuses d'Iran. Les Juifs furent déclarés rituellement impurs (najis) et soumis à un ensemble de restrictions codifiées. Cette période vit pourtant aussi l'émergence de figures intellectuelles majeures, dont l'œuvre témoigne de la persistance d'une vie culturelle juive intense, même sous l'oppression. Babai ben Lutf, poète et historien, choisit l'écriture comme acte de résistance : documenter pour ne pas oublier.`,
      events: [
        {
          year: '1501',
          title: 'L\'avènement safavide et l\'imposition du chiisme d\'État',
          description: 'L\'établissement de la dynastie Safavide et l\'imposition du chiisme duodécimain comme religion d\'État s\'accompagnèrent de mesures discriminatoires sévères contre toutes les minorités religieuses. Pour les Juifs, cette période inaugura un régime de restrictions systématiques qui allait durer plus de quatre siècles.'
        },
        {
          year: '1501 — 1736',
          title: 'Le régime des restrictions systématiques',
          description: 'Les Juifs furent déclarés najis (rituellement impurs), interdits de contact physique avec les musulmans, exclus des bains publics et contraints de porter des signes distinctifs. Ces restrictions, codifiées dans la Constitution de Jam-e Abbasi, perdurèrent formellement jusqu\'en 1925. Elles constituèrent un cadre d\'humiliation légale qui pesa lourdement sur la vie quotidienne des communautés, sans pour autant étouffer leur vie intellectuelle et religieuse.'
        },
        {
          year: '1613 — 1662',
          title: 'Babai ben Lutf : l\'écriture comme acte de résistance',
          description: 'Ce poète et historien juif de Kashan documenta les persécutions dans son œuvre majeure, le Ketab-e Anusi (Livre des convertis forcés). Face à l\'oppression, il choisit l\'arme de l\'écriture : témoigner, nommer, préserver la mémoire. Son œuvre constitue un document historique d\'une valeur inestimable, et son geste — écrire pour résister — incarne une forme de dignité que les siècles n\'ont pas effacée.'
        },
        {
          year: '1656 — 1662',
          title: 'Expulsions d\'Ispahan et conversions forcées',
          description: 'Une période particulièrement sombre vit l\'expulsion des Juifs d\'Ispahan et des conversions forcées généralisées. Certains Juifs maintinrent clandestinement leur identité religieuse — pratiquant en secret ce qu\'ils ne pouvaient plus professer ouvertement. Cette résistance silencieuse témoigne d\'un attachement profond à une identité que les pouvoirs politiques ne parvinrent jamais totalement à effacer.'
        }
      ]
    },
    {
      id: 'qajare',
      title: 'Époque Qajare',
      subtitle: '1794 — 1925',
      icon: '❧',
      intro: `La période Qajare continua de voir des épisodes de violence et de discrimination, avec des pogroms notables. Mais cette époque fut aussi celle des premières réformes et de l'intervention d'organisations internationales qui contribuèrent à transformer lentement la condition des Juifs iraniens. La Révolution Constitutionnelle de 1906 marqua un tournant décisif : pour la première fois, les Juifs obtinrent une représentation parlementaire garantie, affirmant leur appartenance à la nation iranienne.`,
      events: [
        {
          year: '1839',
          title: 'L\'Allahdad de Mashhad : la conversion forcée d\'une communauté entière',
          description: 'Environ 35 Juifs furent tués, les synagogues brûlées et les maisons pillées. La communauté entière de Mashhad — quelque 2 400 personnes — fut contrainte de se convertir à l\'islam. Mais cette communauté de Jedid al-Islam (nouveaux convertis) maintint clandestinement ses pratiques juives pendant près d\'un siècle, témoignant d\'une résilience remarquable face à la contrainte.'
        },
        {
          year: '1892',
          title: 'Les émeutes de Hamadan',
          description: 'Des émeutes éclatèrent suite à l\'imposition de 22 restrictions humiliantes, dont l\'obligation de porter un badge rouge distinctif. Ces événements illustrent la persistance d\'un antisémitisme populaire instrumentalisé par les pouvoirs locaux.'
        },
        {
          year: '1898',
          title: 'L\'Alliance Israélite Universelle : l\'éducation comme levier d\'émancipation',
          description: 'L\'ouverture d\'écoles de l\'Alliance Israélite Universelle marqua un tournant décisif. Ces institutions modernes offrirent une éducation de qualité, des programmes de santé et de formation professionnelle, contribuant à l\'émancipation progressive des Juifs iraniens. L\'Alliance représenta l\'intervention de la solidarité juive internationale au service des communautés les plus vulnérables.'
        },
        {
          year: '1910',
          title: 'Le pogrom de Shiraz',
          description: 'Accusés à tort de crime rituel, 12 Juifs furent tués, 50 blessés, et le quartier juif fut entièrement pillé. Cet épisode illustre la persistance des accusations calomnieuses et la vulnérabilité des communautés face à la violence populaire.'
        },
        {
          year: '1906 — 1923',
          title: 'La Révolution Constitutionnelle et la représentation parlementaire',
          description: 'La Révolution Constitutionnelle de 1906 institua un siège réservé à la communauté juive au Majlis (parlement iranien), affirmant pour la première fois l\'appartenance des Juifs à la nation iranienne. Le premier représentant juif élu fut Loghman Nehourai. Samuel Haim lui succéda en 1923, poursuivant cette présence parlementaire qui symbolisait la reconnaissance civique de la communauté.'
        }
      ]
    },
    {
      id: 'moderne',
      title: 'Époque Moderne et Contemporaine',
      subtitle: '1925 — aujourd\'hui',
      icon: '◉',
      intro: `Le XXe siècle apporta des changements considérables. La période Pahlavi vit une ascension socio-économique et culturelle remarquable : les Juifs iraniens contribuèrent à la modernisation du pays dans tous les domaines. La Révolution islamique de 1979 marqua un tournant brutal, contraignant la grande majorité de la communauté à l'exil. Mais même dans cette période sombre, des actes de solidarité civique témoignèrent de la profondeur des liens entre Juifs et Iraniens — liens que les régimes politiques peuvent contraindre, mais non effacer.`,
      events: [
        {
          year: '1925',
          title: 'Reza Shah Pahlavi : l\'abolition du statut d\'impureté rituelle',
          description: 'L\'accession au pouvoir de Reza Shah ouvrit une ère nouvelle. L\'abolition du statut de najis et l\'octroi de droits civiques égaux transformèrent la condition juridique et sociale des Juifs iraniens. L\'accès aux professions libérales et à la fonction publique devint possible. Cette réforme majeure marqua la fin d\'un régime discriminatoire vieux de quatre siècles.'
        },
        {
          year: '1941 — 1979',
          title: 'L\'âge d\'or : une communauté au cœur de la modernité iranienne',
          description: 'La communauté juive iranienne connut son apogée moderne sous Mohammad Reza Shah. L\'abolition des dernières restrictions professionnelles permit une ascension remarquable. En 1966, 80 % des Juifs iraniens appartenaient à la classe moyenne ou supérieure. Ils excellèrent dans l\'industrie hôtelière, pétrolière, la banque, la joaillerie et l\'immobilier, contribuant significativement au développement économique du pays. Des médecins, des ingénieurs, des artistes et des intellectuels juifs participèrent pleinement à la vie nationale.'
        },
        {
          year: '1960 — 1979',
          title: 'Contributions culturelles et intellectuelles',
          description: 'Pendant cette période, les Juifs iraniens contribuèrent remarquablement à la vie culturelle du pays : littérature, poésie, musique, sciences et médecine. Des musiciens juifs perpétuaient et enrichissaient les traditions musicales persanes. Des médecins et scientifiques juifs contribuaient aux progrès médicaux et technologiques. Cette participation active à la modernité iranienne illustre la profondeur de l\'enracinement de la communauté dans la culture nationale.'
        },
        {
          year: '1979',
          title: 'La Révolution islamique : un tournant brutal',
          description: 'L\'exécution de Habib Elghanian, éminent homme d\'affaires et philanthrope juif, marqua le début d\'une nouvelle ère de persécutions. Entre 1979 et 1990, environ 55 000 Juifs quittèrent l\'Iran : 30 000 vers les États-Unis, 20 000 vers Israël et 5 000 vers l\'Europe. La communauté, qui comptait 80 000 à 100 000 personnes avant la révolution, fut réduite à une fraction d\'elle-même.'
        },
        {
          year: '1979 — 1989',
          title: 'L\'hôpital juif de Téhéran : un acte de civisme remarquable',
          description: 'Pendant la révolution, l\'hôpital juif de Téhéran accueillit des manifestants blessés alors qu\'aucun autre établissement n\'était en mesure de le faire. Cet acte de solidarité envers les compatriotes — accomplissant le commandement biblique « Tu aimeras ton prochain comme toi-même » — illustre la profondeur des liens entre la communauté juive et la nation iranienne, liens que les bouleversements politiques ne purent rompre.'
        },
        {
          year: '1999',
          title: 'L\'affaire de Shiraz',
          description: 'Treize Juifs de Shiraz furent arrêtés et accusés d\'espionnage. Bien que la plupart des accusations aient été abandonnées ou les peines réduites, cet incident illustra la vulnérabilité continue de la communauté dans un régime où l\'accusation d\'espionnage au profit d\'Israël peut frapper à tout moment.'
        },
        {
          year: 'Aujourd\'hui',
          title: 'Une communauté qui demeure',
          description: 'Environ 9 000 Juifs demeurent en Iran, principalement à Téhéran (6 000 à 7 000), Shiraz et Ispahan. La communauté maintient ses synagogues, ses écoles et ses institutions. Elle navigue les complexités d\'un régime hostile à Israël tout en affirmant son identité iranienne. Sa persistance, après 2 700 ans de présence, est en elle-même un témoignage de résilience.'
        }
      ]
    },
    {
      id: 'diaspora',
      title: 'La Diaspora Mondiale',
      subtitle: '1948 — aujourd\'hui',
      icon: '✿',
      intro: `La diaspora juive iranienne, estimée à 300 000 à 350 000 personnes, s'est remarquablement intégrée dans ses pays d'accueil tout en préservant une identité culturelle distincte. En Israël, aux États-Unis, en Europe, les Juifs iraniens ont apporté avec eux une culture riche, une langue, une cuisine, une musique et une mémoire. Ils ont produit des personnalités influentes dans tous les domaines. Et ils maintiennent, à travers les générations, le souvenir d'une présence multimillénaire sur la terre de Perse.`,
      events: [
        {
          year: '1948 — 1979',
          title: 'Les premières vagues d\'émigration',
          description: 'Avant la Révolution de 1979, certains Juifs iraniens commencèrent à s\'installer en Israël et en Occident, notamment en réponse aux tensions géopolitiques liées à la création de l\'État d\'Israël et aux pressions économiques et sociales croissantes.'
        },
        {
          year: '1979 — 1990',
          title: 'L\'exode massif',
          description: 'Entre 1979 et 1990, environ 55 000 Juifs quittèrent l\'Iran : 30 000 vers les États-Unis, 20 000 vers Israël et 5 000 vers l\'Europe. Cet exode massif transforma radicalement la géographie de la communauté juive iranienne, dispersant à travers le monde une communauté enracinée depuis 2 700 ans.'
        },
        {
          year: '1990 — aujourd\'hui',
          title: 'Intégration et succès remarquables',
          description: 'La diaspora iranienne s\'est remarquablement intégrée dans ses pays d\'accueil. En Israël (200 000 à 250 000 personnes), elle a produit des personnalités influentes : Dan Halutz (chef d\'état-major), Shaul Mofaz (ministre de la Défense), Moshe Katsav (président de l\'État). Aux États-Unis (60 000 à 80 000 personnes), notamment à Los Angeles et New York, la communauté s\'est particulièrement distinguée dans les secteurs technologique, médical et commercial.'
        },
        {
          year: 'Mémoire et identité',
          title: 'Préserver la mémoire d\'une présence multimillénaire',
          description: 'Malgré la dispersion géographique, la diaspora maintient vivante la mémoire d\'une présence de 2 700 ans en Iran. Des associations culturelles, des festivals, des publications et des projets numériques perpétuent la langue judéo-persane, la musique, la cuisine et les traditions. Cette mémoire n\'est pas nostalgie : elle est affirmation que l\'histoire des Juifs d\'Iran est une partie constitutive de l\'histoire de la civilisation iranienne.'
        }
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-top-bar">
          <span className="header-label">Histoire · Civilisation · Mémoire</span>
        </div>
        <div className="header-content">
          <div className="header-icon">✦</div>
          <h1>Les Juifs d'Iran</h1>
          <p className="subtitle">2 700 ans de présence, de contributions et de résilience</p>
          <div className="header-tags">
            <span>Antiquité persane</span>
            <span className="tag-sep">·</span>
            <span>Civilisation islamique</span>
            <span className="tag-sep">·</span>
            <span>Modernité iranienne</span>
            <span className="tag-sep">·</span>
            <span>Diaspora mondiale</span>
          </div>
        </div>
      </header>

      <nav className="navigation">
        <button
          className={`nav-btn ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => setActiveSection('intro')}
        >
          Introduction
        </button>
        {periods.map(period => (
          <button
            key={period.id}
            className={`nav-btn ${activeSection === period.id ? 'active' : ''}`}
            onClick={() => setActiveSection(period.id)}
          >
            {period.title}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeSection === 'intro' && (
          <section className="intro-section">
            <div className="intro-card">
              <h2>Une histoire aux multiples facettes</h2>
              <p>
                L'histoire des Juifs d'Iran est l'une des plus longues et des plus complexes de la diaspora juive mondiale.
                Longtemps réduite, dans l'imaginaire collectif, à une suite de persécutions entrecoupées de répits,
                elle mérite d'être relue à la lumière de ce qu'elle est réellement : l'histoire d'un peuple <strong>autochtone</strong>,
                présent sur la terre de Perse avant l'islam, avant le zoroastrisme d'État, partie prenante de la
                civilisation iranienne qu'il a contribué à bâtir pendant plus de vingt-sept siècles.
              </p>
              <p>
                L'historien Lior Sternfeld, dans son ouvrage <em>Between Iran and Zion</em> (Stanford University Press, 2019),
                récuse précisément le récit larmoyant qui réduit cette histoire à une litanie de pogroms.
                Il montre que les Juifs iraniens se sont vécus, et ont été vécus par leurs compatriotes, comme des
                acteurs à part entière de la modernité iranienne — y compris dans les mouvements nationalistes et révolutionnaires.
                La confrontation actuelle entre la République islamique d'Iran et l'État d'Israël ne saurait être lue comme
                la simple expression d'un conflit géopolitique symétrique. Elle est le produit d'une idéologie d'État
                spécifique, construite dès 1979, et qui ne représente pas la continuité de la civilisation persane.
              </p>
              <p>
                Khomeini avait été profondément marqué par les fondateurs des Frères musulmans — Hassan al-Banna et,
                surtout, Sayyid Qutb, dont Ali Khamenei traduisit lui-même deux ouvrages en persan. Cette hybridation
                entre chiisme politique et islamisme sunnite a fait de l'éradication de l'État d'Israël l'un des
                objectifs centraux et assumés de la République islamique, indépendamment de tout calcul stratégique
                ou de toute revendication territoriale directe. Comme le note l'historien Richard Prasquier, Khomeini
                combinait mépris religieux traditionnel, théories du complot d'inspiration nazie — dont il était
                un auditeur assidu via la radio allemande — et antisionisme politique des Frères musulmans :
                une confluence inédite qui confère à l'antijudaïsme de la République islamique un caractère
                idéologique, et non conjoncturel. Cette réalité n'efface pas la longue histoire de coexistence
                et de reconnaissance mutuelle entre Perses et Juifs ; elle en est, précisément, la rupture.
              </p>
              <p>
                Ce site retrace les grandes périodes de cette histoire : ses moments de tolérance remarquable et ses
                épisodes de persécution, ses figures intellectuelles et ses actes de résistance, ses contributions
                à la culture persane et son extraordinaire diaspora contemporaine. Il s'appuie sur des sources
                académiques sérieuses et s'efforce de restituer la complexité d'une relation que ni l'hostilité
                ni la nostalgie ne sauraient résumer.
              </p>
              <div className="timeline-overview">
                <h3>Parcourir les périodes historiques</h3>
                <div className="periods-grid">
                  {periods.map(period => (
                    <div
                      key={period.id}
                      className="period-card"
                      onClick={() => setActiveSection(period.id)}
                    >
                      <span className="period-icon">{period.icon}</span>
                      <h4>{period.title}</h4>
                      <span className="period-subtitle-card">{period.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {periods.map(period => (
          activeSection === period.id && (
            <section key={period.id} className="period-section">
              <div className="period-header">
                <span className="period-icon-large">{period.icon}</span>
                <div className="period-header-text">
                  <h2>{period.title}</h2>
                  <span className="period-dates">{period.subtitle}</span>
                </div>
              </div>
              <p className="period-intro">{period.intro}</p>
              <hr className="section-divider" />
              <div className="timeline">
                {period.events.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {index < period.events.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <div className="event-year">{event.year}</div>
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        ))}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-divider"></div>
          <p className="footer-title">Les Juifs d'Iran · Histoire, Civilisation, Mémoire</p>
          <p className="footer-note">
            Ce site s'efforce de restituer la complexité d'une histoire de 2 700 ans,
            en s'appuyant sur des sources académiques et en récusant tout récit réducteur.
          </p>
          <div className="references">
            <h4>Sources académiques</h4>
            <ul>
              <li>Lior Sternfeld, <em>Between Iran and Zion: Jewish Histories of Twentieth-Century Iran</em> (Stanford University Press, 2019)</li>
              <li>Houman Sarshar, éd., <em>The Jews of Iran</em> (I.B. Tauris, 2014)</li>
              <li>Alain Chaoulli, <em>Les Juifs d'Iran à travers leurs musiciens</em> (L'Harmattan, 2012)</li>
              <li>Encyclopaedia Iranica — Articles spécialisés sur les Juifs iraniens</li>
              <li>Brill Publishers — <em>The Contribution of the Persian Jews to Iranian Culture and Literature</em></li>
              <li>UCLA Fowler Museum — <em>Light and Shadows: The Story of Iranian Jews</em></li>
              <li>Matthias Küntzel, <em>Jihad and Jew-Hatred: Islamism, Nazism and the Roots of 9/11</em> (Telos Press, 2007) — sur les liens entre islamisme et antisémitisme européen</li>
              <li>Matthias Küntzel, « Iranian Antisemitism: Stepchild of German National Socialism », <em>Israel Journal of Foreign Affairs</em>, 2010</li>
              <li>Meir Litvak, « The Islamic Republic of Iran and the Holocaust: Anti-Semitism and Anti-Zionism », in <em>Holocaust Denial: The Politics of Perfidy</em> (De Gruyter, 2013)</li>
              <li>Wahied Wahdat-Hagh, « L'antisémitisme de l'idéologie étatique de Khomeini », cité in Günther Jikeli, <em>Revue d'histoire moderne et contemporaine</em>, 2015/2</li>
              <li>Yusuf Unal, « Sayyid Qutb in Iran: Translating the Islamist Ideologue », <em>Journal of Islamic and Muslim Studies</em>, 2016</li>
              <li>Haim Hillel Ben-Sasson, éd., <em>A History of the Jewish People</em> (Harvard University Press, 1976) — sur la conquête perse de Jérusalem en 614</li>
              <li>American Jewish Committee — <em>The Forgotten Exodus: Iran</em></li>
            </ul>
          </div>
          <p className="footer-back">← <a href="#">Retour en haut</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
