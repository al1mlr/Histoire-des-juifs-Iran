import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  const periods = [
    {
      id: 'antiquite',
      title: 'Antiquité et Période Pré-islamique',
      icon: '⚔️',
      content: `L'établissement des Juifs en Perse remonte à des temps bibliques. Cette période vit l'émergence d'une communauté juive qui allait persister pendant plus de 2700 ans, marquée par des moments de tolérance remarquable et des périodes de persécution sévère.`,
      events: [
        {
          year: '722 av. J.-C.',
          title: 'Premier exil assyrien',
          description: 'Le premier exil des Israélites sous le règne de Shalmaneser V a conduit à la déportation de tribus d\'Israël vers la Médie. Ces exilés s\'établirent en Perse et formèrent les premières communautés juives persanes.'
        },
        {
          year: '586 av. J.-C.',
          title: 'Exil babylonien',
          description: 'L\'exil babylonien, mené par Nabuchodonosor II, amena des populations juives supplémentaires en Mésopotamie et en Perse, renforçant la présence juive dans la région.'
        },
        {
          year: '538 av. J.-C.',
          title: 'Édit de Cyrus le Grand - Moment de Tolérance',
          description: 'Cyrus le Grand autorisa les Juifs exilés de Babylone à retourner en Terre d\'Israël pour reconstruire le Second Temple. Cet acte remarquable de tolérance religieuse établit un précédent et créa des liens durables entre la Perse et le peuple juif.'
        },
        {
          year: '226-651 ap. J.-C.',
          title: 'Époque Sassanide',
          description: 'Cette période vit l\'établissement du zoroastrisme comme religion d\'État, créant des tensions avec les minorités religieuses. Cependant, certaines périodes furent relativement pacifiques.'
        },
        {
          year: '459-484 ap. J.-C.',
          title: 'Péroz Ier - Persécutions Systématiques',
          description: 'Le règne de Péroz Ier (Péroz le Méchant) marqua l\'une des premières vagues de persécutions systématiques. Environ la moitié de la population juive d\'Ispahan fut massacrée ou forcée à la conversion. Les enfants juifs furent enlevés et les synagogues détruites.'
        }
      ]
    },
    {
      id: 'moyen-age',
      title: 'Moyen Âge et Début de la Période Islamique',
      icon: '🕌',
      content: `La conquête arabe de la Perse en 642 ap. J.-C. marqua un tournant majeur. Les Juifs furent intégrés au système du dhimmi, offrant une protection légale mais imposant des restrictions sévères. Cette période vit également l'émergence de figures intellectuelles remarquables.`,
      events: [
        {
          year: '642 ap. J.-C.',
          title: 'Conquête Arabe et Statut de Dhimmi',
          description: 'Les Juifs ont été soumis au statut de Dhimmi (minorité protégée mais soumise à la jizya - impôt de capitation). Ce système, bien que restrictif, offrait une certaine autonomie communautaire et protection légale.'
        },
        {
          year: 'VIIIe siècle',
          title: 'Mouvements Messianiques et Résistance',
          description: 'En réaction aux pressions politiques et religieuses, des mouvements messianiques émergèrent. Abou Issa d\'Ispahan organisa une révolte armée, symbolisant la résistance active de la communauté à l\'oppression.'
        },
        {
          year: '1284-1291',
          title: 'Sa\'d al-Dawla - Grand Vizir Juif',
          description: 'Sous le règne d\'Argun Khan, Sa\'d al-Dawla, médecin juif d\'Abhar, devint Grand Vizir, administrant un territoire s\'étendant du Caucase à l\'océan Indien. Son ascension illustre les possibilités d\'intégration remarquable offertes aux Juifs dans certaines circonstances.'
        },
        {
          year: '1291',
          title: 'Exécution de Sa\'d al-Dawla et Pogroms',
          description: 'Après la mort d\'Argun Khan, Sa\'d al-Dawla fut accusé d\'avoir empoisonné le souverain et exécuté. Cela déclencha des massacres anti-juifs dans tout l\'empire, illustrant la vulnérabilité des Juifs malgré leur succès.'
        },
        {
          year: '1327-1359',
          title: 'Shahin Shirazi - Génie Poétique et Préservation Culturelle',
          description: 'Face aux persécutions du XIVe siècle et à la crainte de voir disparaître la connaissance de l\'hébreu, Shahin Shirazi composa trois épopées majeures en persan judéo-persan : Musa Nameh (1327), Ardashir Nameh (1333) et d\'autres œuvres. Ces compositions préservèrent les récits bibliques et la sagesse religieuse juive, créant un pont culturel unique. Shahin est considéré comme le plus grand poète juif de Perse et le fondateur de la littérature judéo-persane.'
        }
      ]
    },
    {
      id: 'safavide',
      title: 'Dynastie Safavide (1501-1736)',
      icon: '👑',
      content: `L'établissement de la dynastie Safavide et l'imposition du chiisme comme religion d'État marquèrent une période sombre. Les Juifs furent déclarés "impurs" rituellement et soumis à des restrictions systématiques. Cependant, cette période vit aussi l'émergence de figures intellectuelles majeures.`,
      events: [
        {
          year: '1501',
          title: 'Avènement de la Dynastie Safavide',
          description: 'L\'établissement de la dynastie Safavide marqua un tournant dramatique. L\'imposition du chiisme comme religion d\'État s\'accompagna de mesures discriminatoires sévères contre toutes les minorités religieuses.'
        },
        {
          year: '1501-1736',
          title: 'Restrictions Systématiques',
          description: 'Les Juifs furent déclarés "najis" (impurs) rituellement, interdits de contact physique avec les musulmans, exclus des bains publics et contraints de porter des signes distinctifs. Ces restrictions, codifiées dans la "Constitution de Jam-e Abbasi", perdurèrent jusqu\'en 1925.'
        },
        {
          year: '1613-1662',
          title: 'Babai ben Lutf - Historien et Témoin des Persécutions',
          description: 'Ce poète et historien juif de Kashan documenta les persécutions dans son œuvre majeure, le "Ketab-e Anusi" (Livre des convertis forcés), un témoignage poignant des souffrances endurées. Malgré l\'oppression, Babai ben Lutf préserva l\'histoire de sa communauté par l\'écrit, créant un document historique d\'une valeur inestimable.'
        },
        {
          year: '1656-1662',
          title: 'Expulsion d\'Ispahan et Conversions Forcées',
          description: 'Une période particulièrement sombre vit l\'expulsion des Juifs d\'Ispahan et des conversions forcées généralisées. Cependant, certains Juifs réussirent à maintenir leur identité religieuse en secret, démontrant une résilience remarquable.'
        }
      ]
    },
    {
      id: 'qajare',
      title: 'Époque Qajare (1794-1925)',
      icon: '📜',
      content: `La période Qajare continua de voir des épisodes de violence et de discrimination, avec des pogroms notables. Cependant, cette époque vit aussi l'intervention d'organisations internationales et les premières réformes majeures.`,
      events: [
        {
          year: '1839',
          title: 'Allahdad à Mashhad - Tournant Tragique',
          description: 'Environ 35 Juifs furent tués, les synagogues brûlées et les maisons pillées. La communauté entière, soit environ 2400 personnes, fut forcée de se convertir à l\'islam. Cependant, cette communauté de "crypto-juifs" maintint clandestinement ses pratiques juives pendant près d\'un siècle, témoignant d\'une résilience remarquable.'
        },
        {
          year: '1892',
          title: 'Émeutes à Hamadan',
          description: 'Des émeutes éclatent suite à l\'imposition de 22 restrictions humiliantes, dont l\'obligation de porter un badge rouge distinctif.'
        },
        {
          year: '1898',
          title: 'Alliance Israélite Universelle - Intervention Internationale',
          description: 'L\'ouverture d\'écoles de l\'Alliance Israélite Universelle marqua un tournant décisif. Ces institutions modernes offrirent une éducation de qualité, des programmes de santé et d\'hygiène, et une formation professionnelle, contribuant lentement à l\'amélioration du statut des Juifs iraniens.'
        },
        {
          year: '1910',
          title: 'Pogrom de Shiraz',
          description: 'Accusés de crime rituel, 12 Juifs furent tués, 50 blessés, et le quartier juif fut entièrement pillé.'
        },
        {
          year: '1923',
          title: 'Samuel Haim - Premier Représentant Juif au Parlement',
          description: 'Samuel Haim fut élu comme premier représentant juif au Majlis (parlement iranien), marquant l\'entrée de la communauté dans la vie politique iranienne.'
        }
      ]
    },
    {
      id: 'moderne',
      title: 'Époque Moderne et Contemporaine',
      icon: '🌍',
      content: `Le XXe siècle apporta des changements significatifs. La période Pahlavi vit une ascension socio-économique remarquable et des contributions majeures à la vie iranienne. La Révolution de 1979 marqua un tournant brutal, suivi d'une adaptation continue.`,
      events: [
        {
          year: '1925',
          title: 'Réformes de Reza Shah Pahlavi',
          description: 'L\'accession au pouvoir de Reza Shah ouvrit une nouvelle ère. L\'abolition du statut d\'impureté rituelle et l\'octroi de droits civiques égaux transformèrent la condition juridique et sociale des Juifs iraniens. L\'accès aux professions libérales et à la fonction publique devint possible.'
        },
        {
          year: '1941-1979',
          title: 'Âge d\'Or sous Mohammad Reza Shah',
          description: 'La communauté juive iranienne connut son âge d\'or moderne. L\'abolition des dernières restrictions professionnelles permit une ascension remarquable. En 1966, 80% des Juifs iraniens appartenaient à la classe moyenne ou supérieure. Ils excellèrent dans l\'industrie hôtelière, pétrolière, la banque, la joaillerie et l\'immobilier, contribuant significativement au développement économique du pays.'
        },
        {
          year: '1960-1970',
          title: 'Contributions Culturelles et Intellectuelles',
          description: 'Pendant cette période, les Juifs iraniens contribuèrent remarquablement à la vie culturelle et intellectuelle du pays : littérature, poésie, musique, sciences et médecine. Des musiciens juifs perpétuaient les traditions musicales persanes, tandis que des médecins et scientifiques juifs contribuaient aux progrès médicaux et technologiques.'
        },
        {
          year: '1979',
          title: 'Révolution Islamique - Tournant Brutal',
          description: 'L\'exécution de Habib Elghanian, un homme d\'affaires et philanthrope juif éminent, marqua le début d\'une nouvelle ère de persécutions. Entre 1979 et 1990, environ 55 000 Juifs quittèrent l\'Iran : 30 000 vers les États-Unis, 20 000 vers Israël et 5 000 vers l\'Europe.'
        },
        {
          year: '1979-1989',
          title: 'Hôpital Juif - Acte de Civisme Remarquable',
          description: 'Pendant la révolution, l\'hôpital juif de Téhéran abrita des manifestants blessés alors qu\'aucun autre hôpital n\'était en mesure de le faire. Cet acte de solidarité envers les compatriotes, accomplissant le commandement biblique "Tu aimeras ton prochain comme toi-même", démontra l\'attachement profond des Juifs iraniens à leur nation.'
        },
        {
          year: '1999',
          title: 'Affaire de Shiraz',
          description: '13 Juifs de Shiraz furent arrêtés et accusés d\'espionnage. Bien que la plupart des accusations aient été abandonnées, cet incident illustra la vulnérabilité continue de la communauté.'
        },
        {
          year: '2024',
          title: 'Situation Actuelle',
          description: 'Environ 9 000 Juifs demeurent en Iran, principalement à Téhéran (6 000-7 000), Shiraz (2 000) et Ispahan (1 500). La communauté maintient ses institutions, bénéficie d\'une autonomie culturelle relative et navigue les complexités géopolitiques avec dignité.'
        }
      ]
    },
    {
      id: 'diaspora',
      title: 'La Diaspora Mondiale',
      icon: '🌏',
      content: `La diaspora juive iranienne, estimée à 300 000-350 000 personnes, s'est remarquablement intégrée dans ses pays d'accueil. Elle a produit des personnalités influentes dans tous les domaines et maintient ses traditions culturelles.`,
      events: [
        {
          year: '1948-1979',
          title: 'Début de la Diaspora',
          description: 'Avant la Révolution de 1979, certains Juifs iraniens commencèrent à s\'installer en Israël et en Occident, notamment en réponse aux tensions géopolitiques.'
        },
        {
          year: '1979-1990',
          title: 'Exode Massif',
          description: 'Entre 1979 et 1990, environ 55 000 Juifs quittèrent l\'Iran : 30 000 vers les États-Unis, 20 000 vers Israël et 5 000 vers l\'Europe.'
        },
        {
          year: '1990-2024',
          title: 'Intégration et Succès Remarquables',
          description: 'La diaspora iranienne s\'est remarquablement intégrée dans ses pays d\'accueil. En Israël (200 000-250 000), elle a produit des personnalités influentes : Dan Halutz (chef d\'état-major), Shaul Mofaz (ministre de la Défense), Moshe Katsav (président). Aux États-Unis (60 000-80 000), notamment à Los Angeles et New York, la communauté s\'est particulièrement implantée avec succès dans les secteurs technologique, médical et commercial.'
        },
        {
          year: '2000-2024',
          title: 'Maintien des Traditions et des Liens',
          description: 'Malgré la dispersion géographique, la diaspora maintient les liens : l\'Union des Immigrants de Perse en Israël, la Fondation Miraj-Israël, et la célébration de "Roza-bagh" (Jour du jardin) rassemblent la communauté avec musique, danse et cuisine persane, symbolisant la préservation de l\'identité culturelle.'
        }
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Histoire des Juifs en Iran</h1>
          <p className="subtitle">2700 ans de persécutions, contributions et résilience</p>
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
            {period.icon} {period.title.split('(')[0].trim()}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {activeSection === 'intro' && (
          <section className="intro-section">
            <div className="intro-card">
              <h2>Bienvenue</h2>
              <p>
                La communauté juive d'Iran, l'une des plus anciennes du monde, a une histoire riche et complexe, 
                marquée par des périodes de coexistence pacifique et de prospérité, mais aussi par de nombreuses 
                persécutions, pogroms et exactions.
              </p>
              <p>
                Cet historique retrace les événements majeurs qui ont affecté les Juifs iraniens à travers les siècles, 
                de l'Antiquité à la période contemporaine. Mais au-delà des défis, cette chronologie met également en lumière 
                les contributions extraordinaires de la communauté juive iranienne à la culture, la littérature, l'économie 
                et la vie intellectuelle de la Perse et de l'Iran.
              </p>
              <p>
                <strong>Une histoire de résilience :</strong> Face à des siècles de persécution, cette communauté a préservé 
                son identité religieuse et culturelle, créé des expressions culturelles durables, atteint une prospérité remarquable 
                dans les périodes de tolérance, et maintenu ses traditions même en diaspora.
              </p>
              <div className="timeline-overview">
                <h3>Périodes principales</h3>
                <div className="periods-grid">
                  {periods.map(period => (
                    <div 
                      key={period.id} 
                      className="period-card"
                      onClick={() => setActiveSection(period.id)}
                    >
                      <span className="period-icon">{period.icon}</span>
                      <h4>{period.title}</h4>
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
                <h2>{period.title}</h2>
              </div>
              <p className="period-intro">{period.content}</p>
              
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
          <p>&copy; 2026 - Histoire des Juifs en Iran</p>
          <p className="footer-note">
            Ce site présente une histoire équilibrée et nuancée, reconnaissant à la fois les défis et les contributions 
            de la communauté juive iranienne.
          </p>
          <div className="references">
            <h4>Sources académiques principales</h4>
            <ul>
              <li>Houman Sarshar, ed. <em>The Jews of Iran</em> (JSTOR)</li>
              <li>Alain Chaoulli, <em>Les Juifs d'Iran à travers leurs musiciens</em> (L'Harmattan, 2012)</li>
              <li>Lior Sternfeld, <em>Between Iran and Zion: Jewish Histories of Twentieth Century Iran</em></li>
              <li>Encyclopaedia Iranica - Articles sur les Juifs iraniens</li>
              <li>Brill Publishers - <em>The Contribution of the Persian Jews to Iranian Culture and Literature</em></li>
              <li>UCLA Fowler Museum - <em>Light and Shadows: The Story of Iranian Jews</em></li>
              <li>American Jewish Committee - <em>The Forgotten Exodus: Iran</em></li>
              <li>IEMED - <em>Les communautés juives d'Iran</em></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
