import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  const periods = [
    {
      id: 'antiquite',
      title: 'Antiquité et Période Pré-islamique',
      icon: '⚔️',
      content: `L'établissement des Juifs en Perse remonte à des temps bibliques, notamment après l'exil assyrien et babylonien. Cependant, même durant ces périodes anciennes, des épisodes de persécution ont eu lieu.`,
      events: [
        {
          year: '722 av. J.-C.',
          title: 'Premier exil assyrien',
          description: 'Le premier exil des Israélites sous le règne de Shalmaneser V, roi des Assyriens, a conduit à la déportation de tribus d\'Israël vers la Médie.'
        },
        {
          year: '586 av. J.-C.',
          title: 'Exil babylonien',
          description: 'L\'exil babylonien, mené par Nabuchodonosor II, a également vu des populations juives s\'établir en Perse.'
        },
        {
          year: '226-642 ap. J.-C.',
          title: 'Époque Sassanide',
          description: 'Cette période est caractérisée par une intolérance croissante envers les minorités religieuses, le zoroastrisme étant devenu la religion d\'État.'
        },
        {
          year: '459-484 ap. J.-C.',
          title: 'Péroz Ier - "Péroz le Méchant"',
          description: 'Son règne fut marqué par des persécutions violentes. Environ la moitié de la population juive d\'Ispahan fut massacrée ou forcée à la conversion, et leurs enfants enlevés.'
        }
      ]
    },
    {
      id: 'moyen-age',
      title: 'Moyen Âge et Début de la Période Islamique',
      icon: '🕌',
      content: `La conquête arabe de la Perse en 642 ap. J.-C. a instauré l'islam comme religion dominante, modifiant profondément le statut des Juifs.`,
      events: [
        {
          year: '642 ap. J.-C.',
          title: 'Conquête Arabe',
          description: 'Les Juifs ont été soumis au statut de Dhimmi (minorité protégée mais soumise à la jizya - impôt de capitation - et à des restrictions sociales et légales).'
        },
        {
          year: 'VIIIe siècle',
          title: 'Mouvements Messianiques',
          description: 'En réaction aux pressions politiques et religieuses, des mouvements messianiques ont émergé, tel celui d\'Abou Isa d\'Ispahan.'
        },
        {
          year: 'XIIIe-XIVe siècles',
          title: 'Période Mongole',
          description: 'L\'invasion mongole a d\'abord apporté une relative accalmie, avec des figures juives atteignant des postes importants.'
        },
        {
          year: '1291',
          title: 'Exécution de Sa\'d al-Dawla',
          description: 'Après l\'exécution du vizir juif, des vagues de pogroms et de persécutions ont éclaté à travers l\'Iran.'
        },
        {
          year: '1318',
          title: 'Mort de Rashid al-Din',
          description: 'Ce médecin et historien juif converti à l\'islam fut exécuté sur de fausses accusations, et sa famille ainsi que ses biens furent persécutés.'
        }
      ]
    },
    {
      id: 'safavide',
      title: 'Dynastie Safavide (1501-1736) : Le Tournant Chiite',
      icon: '👑',
      content: `L'établissement de la dynastie Safavide et l'imposition du chiisme comme religion d'État ont marqué une période de persécutions intenses pour les Juifs.`,
      events: [
        {
          year: '1501',
          title: 'Ismaïl Ier',
          description: 'Des persécutions ont eu lieu lors de l\'unification du pays sous son règne.'
        },
        {
          year: 'XVIIe siècle',
          title: 'Abbas Ier et Abbas II',
          description: 'Ces règnes ont été caractérisés par des conversions forcées massives. Des décrets humiliants ont été imposés, obligeant les Juifs à porter des signes distinctifs.'
        },
        {
          year: '1656-1662',
          title: 'Expulsion d\'Ispahan',
          description: 'Une période particulièrement sombre a vu l\'expulsion des Juifs d\'Ispahan et des conversions forcées généralisées.'
        }
      ]
    },
    {
      id: 'qajare',
      title: 'Époque Qajare (1794-1925)',
      icon: '📜',
      content: `La période Qajare a continué de voir des épisodes de violence et de discrimination, avec des pogroms notables.`,
      events: [
        {
          year: '1839',
          title: 'Pogrom d\'Allahdad à Mashhad',
          description: 'Environ 35 Juifs furent tués, les synagogues brûlées et les maisons pillées. La communauté entière, soit environ 2400 personnes, fut forcée de se convertir à l\'islam.'
        },
        {
          year: '1892',
          title: 'Émeutes à Hamadan',
          description: 'Des émeutes éclatent suite à l\'imposition de 22 restrictions humiliantes, dont l\'obligation de porter un badge rouge.'
        },
        {
          year: '1910',
          title: 'Pogrom de Shiraz',
          description: 'Accusés de crime rituel, 12 Juifs furent tués, 50 blessés, et le quartier juif fut entièrement pillé.'
        }
      ]
    },
    {
      id: 'moderne',
      title: 'Époque Moderne et Contemporaine',
      icon: '🌍',
      content: `Le XXe siècle a apporté des changements significatifs, avec une période d'émancipation sous les Pahlavi, suivie d'une nouvelle ère de défis après la Révolution Islamique.`,
      events: [
        {
          year: '1925-1979',
          title: 'Dynastie Pahlavi',
          description: 'Cette période a été marquée par une laïcisation et une émancipation des Juifs. Cependant, des influences externes ont parfois ravivé l\'antisémitisme.'
        },
        {
          year: '1930-1940',
          title: 'Influence nazie',
          description: 'La montée de l\'influence nazie en Iran a conduit à la diffusion d\'une propagande antisémite dans la presse.'
        },
        {
          year: '1979',
          title: 'Révolution Islamique',
          description: 'L\'exécution de Habib Elghanian, un homme d\'affaires et philanthrope juif éminent, marque le début d\'une nouvelle ère de persécutions.'
        },
        {
          year: '1999',
          title: 'Arrestations à Shiraz et Ispahan',
          description: '13 Juifs sont arrêtés et accusés d\'espionnage, condamnés à de lourdes peines de prison.'
        },
        {
          year: '2024',
          title: 'Exécution d\'Arvin Nathaniel Ghahremani',
          description: 'Un jeune Juif iranien est exécuté après une condamnation pour meurtre dans un différend financier.'
        }
      ]
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Histoire des Persécutions des Juifs en Iran</h1>
          <p className="subtitle">Une chronologie de 2700 ans de présence, de résilience et de défis</p>
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
                de l'Antiquité à la période contemporaine. Cette chronologie met en lumière la résilience de la communauté 
                juive iranienne face à des siècles de défis, tout en soulignant la nature persistante des persécutions et 
                des discriminations qu'elle a subies.
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
          <p>&copy; 2026 - Histoire des Persécutions des Juifs en Iran</p>
          <p className="footer-note">
            Ce site est basé sur des recherches historiques documentées et des sources académiques.
          </p>
          <div className="references">
            <h4>Sources principales</h4>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/History_of_the_Jews_in_Iran" target="_blank" rel="noopener noreferrer">History of the Jews in Iran - Wikipedia</a></li>
              <li><a href="https://fr.wikipedia.org/wiki/Histoire_des_Juifs_en_Iran" target="_blank" rel="noopener noreferrer">Histoire des Juifs en Iran - Wikipédia</a></li>
              <li><a href="https://fr.wikipedia.org/wiki/Allahdad" target="_blank" rel="noopener noreferrer">Allahdad - Wikipédia</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
