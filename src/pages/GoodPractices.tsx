import { Sidebar } from "../components/layout/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const heroStyle = {
  background: "linear-gradient(90deg, #e0f7fa 60%, #fff 100%)",
};

const cards = [
  {
    title: "Optimisez votre code",
    description: "Un code efficace consomme moins de ressources et réduit l'empreinte carbone des serveurs.",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    details: `
      L'optimisation du code consiste à écrire des programmes plus rapides, plus légers et moins gourmands en ressources. Cela passe par :
      - L'utilisation d'algorithmes efficaces
      - La suppression des redondances
      - L'analyse des performances (profiling)
      - L'adoption de bonnes pratiques de développement (DRY, KISS, SOLID)
      Un code optimisé permet de réduire la consommation d'énergie des serveurs et d'améliorer l'expérience utilisateur.
    `,
  },
  {
    title: "Nettoyez vos données",
    description: "Supprimez les fichiers et données inutiles pour limiter le stockage et la consommation énergétique.",
    icon: "🗑️",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    details: `
      Le nettoyage des données consiste à :
      - Supprimer les fichiers temporaires et obsolètes
      - Archiver ou compresser les données peu utilisées
      - Mettre en place des politiques de rétention des données
      - Éviter la duplication des informations
      Cela permet de limiter l'empreinte carbone liée au stockage et de réduire les coûts d'infrastructure.
    `,
  },
  {
    title: "Favorisez l'accessibilité",
    description: "Un site accessible est plus durable et inclusif pour tous les utilisateurs.",
    icon: "🌍",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    details: `
      L'accessibilité numérique vise à rendre les sites et applications utilisables par tous, y compris les personnes en situation de handicap. Pour cela :
      - Utilisez des contrastes de couleurs suffisants
      - Ajoutez des textes alternatifs aux images
      - Rendez la navigation possible au clavier
      - Respectez les standards (WCAG)
      Un site accessible est plus pérenne, touche un public plus large et favorise l'inclusion.
    `,
  },
  {
    title: "Utilisez des hébergements verts",
    description: "Privilégiez des serveurs alimentés par des énergies renouvelables.",
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    details: `
      L'hébergement vert consiste à choisir des fournisseurs qui :
      - Utilisent des énergies renouvelables (solaire, éolien, hydraulique)
      - Compensent leurs émissions de CO2
      - Optimisent la gestion thermique des data centers
      - Affichent des labels environnementaux (Green Web Foundation, ISO 14001)
      Cela réduit l'impact environnemental de vos applications et services web.
    `,
  },
];

const articles = [
  {
    title: "Green IT : comment rendre le numérique plus responsable ?",
    url: "https://www.greenit.fr/2022/03/01/green-it-comment-rendre-le-numerique-plus-responsable/",
    description: "Un panorama des enjeux et des solutions pour un numérique plus respectueux de l'environnement.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Développement durable et numérique : bonnes pratiques",
    url: "https://www.ademe.fr/particuliers-eco-citoyens/eco-conso/numerique-responsable",
    description: "L'ADEME propose des conseils pour réduire l'empreinte écologique du numérique au quotidien.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Écoconception web : pourquoi et comment ?",
    url: "https://www.ecoconceptionweb.com/",
    description: "Un guide complet pour concevoir des sites web plus sobres et plus verts.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Sobriété numérique : enjeux et solutions",
    url: "https://theconversation.com/sobriete-numerique-enjeux-et-solutions-127015",
    description: "Un article de The Conversation sur la nécessité de limiter l'impact du numérique.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
];

export const GoodPractices = () => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main className="flex-1 ml-64">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8" style={heroStyle}>
        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
          {/* Hero SVG illustration */}
          <svg width="320" height="220" viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="160" cy="200" rx="120" ry="20" fill="#B2DFDB" />
            <g>
              <ellipse cx="160" cy="120" rx="80" ry="80" fill="#4CAF50" />
              <ellipse cx="160" cy="120" rx="70" ry="70" fill="#81C784" />
              <ellipse cx="160" cy="120" rx="60" ry="60" fill="#A5D6A7" />
              {/* Mains stylisées */}
              <path d="M80 120 Q60 180 160 200 Q260 180 240 120" stroke="#FBC02D" strokeWidth="12" fill="none" />
              <ellipse cx="160" cy="120" rx="50" ry="50" fill="#fff" fillOpacity="0.1" />
            </g>
            {/* Nuages */}
            <ellipse cx="110" cy="80" rx="18" ry="8" fill="#fff" />
            <ellipse cx="210" cy="70" rx="14" ry="6" fill="#fff" />
            <ellipse cx="180" cy="160" rx="10" ry="4" fill="#fff" />
          </svg>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">KahAI</h1>
          <p className="text-xl md:text-2xl text-green-900 mb-4">"Code propre, planète sauve."</p>
          <p className="text-lg text-gray-700 max-w-lg">
            Découvrez comment adopter des pratiques numériques responsables pour préserver notre planète tout en développant des applications performantes et durables.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-10">Bonnes pratiques du numérique responsable</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <Card key={idx} className="bg-green-50 rounded-xl flex flex-col items-center text-center">
              <CardHeader>
                <div className="text-4xl mb-2">{card.icon}</div>
                <CardTitle className="text-xl font-semibold text-green-800">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Section */}
      <section className="py-16 px-8 bg-gray-100 border-t">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-12">Aller plus loin</h2>
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <Card key={idx} className="flex flex-col md:flex-row overflow-hidden w-full">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full md:w-64 h-64 md:h-auto"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col justify-center p-6">
                <CardHeader className="p-0 mb-2">
                  <div className="text-3xl mb-2">{card.icon}</div>
                  <CardTitle className="text-2xl font-bold text-green-800 mb-2">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-700 whitespace-pre-line mb-2">
                    {card.details}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-8 bg-white border-t">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-12">Pour aller plus loin : lectures recommandées</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, idx) => (
            <Card key={idx} className="flex flex-col md:flex-row overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full md:w-48 h-48 md:h-auto"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col justify-center p-6">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl font-bold text-green-800 mb-2">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-600 transition-colors">
                      {article.title}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-700 mb-2">
                    {article.description}
                  </CardDescription>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-green-700 font-medium hover:underline">
                    Lire l'article ↗
                  </a>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  </div>
); 