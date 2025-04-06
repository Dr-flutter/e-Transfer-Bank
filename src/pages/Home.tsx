import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SendIcon, SearchIcon, ShieldCheckIcon } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Plateforme de Transfert Bancaire
        </h1>
        <p className="text-lg text-gray-600">
          Solution sécurisée pour vos transferts d'argent
        </p>
      </div>

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

      <div className="mt-16 flex items-center justify-center space-x-2 text-gray-600">
        <ShieldCheckIcon className="w-5 h-5" />
        <span>Transferts sécurisés et cryptés</span>
      </div>
    </div>
  );
}