import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BanIcon as BankIcon, UserIcon, CoinsIcon, KeyIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';

export function Transfer() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientAccount: '',
    amount: '',
    transferCode: '',
    secretCode: '',
    status: 'pending'
  });
  const [success, setSuccess] = useState(false);
  const [transferId, setTransferId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const transfer = {
        id: Math.random().toString(36).substr(2, 9),
        senderId: 'PARTNER001',
        recipientName: formData.recipientName,
        recipientAccount: formData.recipientAccount,
        amount: parseFloat(formData.amount),
        transferCode: formData.transferCode,
        secretCode: formData.secretCode,
        status: formData.status,
        createdAt: new Date().toISOString()
      };

      const response = await fetch('http://localhost:3001/transfers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transfer)
      });

      if (response.ok) {
        setSuccess(true);
        setTransferId(transfer.id);
      }
    } catch (err) {
      console.error('Error creating transfer:', err);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Transfert créé avec succès
          </h2>
          <p className="text-gray-600 mb-6">
            Identifiant du transfert: <span className="font-mono font-bold">{transferId}</span>
          </p>
          <div className="space-y-4">
            <button
              onClick={() => setSuccess(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Nouveau transfert
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Nouveau Transfert
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <UserIcon className="w-5 h-5 mr-2" />
              Nom et prénom du bénéficiaire
            </label>
            <input
              type="text"
              value={formData.recipientName}
              onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <BankIcon className="w-5 h-5 mr-2" />
              Numéro de compte du bénéficiaire
            </label>
            <input
              type="text"
              value={formData.recipientAccount}
              onChange={(e) => setFormData({ ...formData, recipientAccount: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <CoinsIcon className="w-5 h-5 mr-2" />
              Montant à envoyer
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
              min="0"
              step="0.01"
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <KeyIcon className="w-5 h-5 mr-2" />
              Code de transfert
            </label>
            <input
              type="text"
              value={formData.transferCode}
              onChange={(e) => setFormData({ ...formData, transferCode: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              <KeyIcon className="w-5 h-5 mr-2" />
              Code secret (pour le bénéficiaire)
            </label>
            <input
              type="text"
              value={formData.secretCode}
              onChange={(e) => setFormData({ ...formData, secretCode: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-4">Statut du transfert</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: 'confirmed' })}
                className={`p-4 rounded-lg flex items-center justify-center ${
                  formData.status === 'confirmed'
                    ? 'bg-green-100 text-green-700 border-2 border-green-500'
                    : 'bg-gray-50 text-gray-700 border-2 border-transparent'
                }`}
              >
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                Confirmé
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, status: 'pending' })}
                className={`p-4 rounded-lg flex items-center justify-center ${
                  formData.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-500'
                    : 'bg-gray-50 text-gray-700 border-2 border-transparent'
                }`}
              >
                <ClockIcon className="w-5 h-5 mr-2" />
                En attente
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Créer le transfert
          </button>
        </form>
      </div>
    </div>
  );
}