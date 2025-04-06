import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SendIcon, 
  SearchIcon, 
  ShieldCheckIcon, 
  LockIcon, 
  PhoneIcon, 
  GlobeIcon,
  ClockIcon,
  BuildingBankIcon,
  UsersIcon
} from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section avec image de fond */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banking-hero.jpg')"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">
              Solutions de Transfert International
            </h1>
            <p className="text-xl mb-8">
              Une plateforme sécurisée pour vos transactions à travers le monde
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>

      {/* Section Statistiques */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-600">Pays desservis</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">1M+</h3>
            <p className="text-gray-600">Clients satisfaits</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Support client</p>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <button
            onClick={() => navigate('/login')}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                <SendIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Envoyer de l'argent
              </h2>
              <p className="text-gray-600 text-center">
                Accès sécurisé pour les partenaires
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate('/verify')}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                <SearchIcon className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Consulter un transfert
              </h2>
              <p className="text-gray-600 text-center">
                Vérifier le statut de votre transfert
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Section Sécurité */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sécurité Maximale</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <LockIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cryptage 256-bit</h3>
              <p className="text-gray-600">Protection de vos données sensibles</p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentification forte</h3>
              <p className="text-gray-600">Vérification en deux étapes</p>
            </div>
            <div className="text-center">
              <ClockIcon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Surveillance 24/7</h3>
              <p className="text-gray-600">Détection des fraudes en temps réel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4">À propos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Notre histoire</a></li>
                <li><a href="#" className="hover:text-blue-400">Équipe dirigeante</a></li>
                <li><a href="#" className="hover:text-blue-400">Carrières</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Transferts internationaux</a></li>
                <li><a href="#" className="hover:text-blue-400">Solutions entreprises</a></li>
                <li><a href="#" className="hover:text-blue-400">API bancaire</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Centre d'aide</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><PhoneIcon className="w-5 h-5 mr-2" /> +1 234 567 890</li>
                <li className="flex items-center"><GlobeIcon className="w-5 h-5 mr-2" /> www.etransfer.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 E-Transfer Bank. Tous droits réservés.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-blue-400">Conditions d'utilisation</a>
              <a href="#" className="hover:text-blue-400">Politique de confidentialité</a>
              <a href="#" className="hover:text-blue-400">Mentions légales</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}