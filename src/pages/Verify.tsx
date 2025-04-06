import React, { useState } from 'react';
import { KeyIcon, CopyIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

export function Verify() {
  const [formData, setFormData] = useState({
    transferCode: '',
    secretCode: '',
  });
  const [transfer, setTransfer] = useState<any>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/transfers');
      const transfers = await response.json();
      const foundTransfer = transfers.find((t: any) =>
        t.transferCode === formData.transferCode &&
        t.secretCode === formData.secretCode
      );

      if (foundTransfer) {
        setTransfer(foundTransfer);
        setError('');
      } else {
        setError('Aucun transfert correspondant à ces informations');
        setTransfer(null);
      }
    } catch (err) {
      setError('Erreur lors de la vérification');
      setTransfer(null);
    }
  };

  const copyTransferInfo = () => {
    if (transfer) {
      const info = `
        Transfert #${transfer.id}
        Montant: ${transfer.amount} €
        Date: ${new Date(transfer.createdAt).toLocaleDateString()}
        Statut: ${transfer.status === 'confirmed' ? 'Confirmé' : 'En attente'}
      `;
      navigator.clipboard.writeText(info);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Vérifier un transfert
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              Code secret
            </label>
            <input
              type="text"
              value={formData.secretCode}
              onChange={(e) => setFormData({ ...formData, secretCode: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {error && (
            <div className="flex items-center justify-center text-red-500 bg-red-50 p-4 rounded-lg">
              <XCircleIcon className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Vérifier
          </button>
        </form>

        {transfer && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg space-y-4">
            <div className="flex items-center justify-center text-green-600 mb-4">
              <CheckCircleIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-center mb-4">
              Transfert trouvé
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <span className="font-semibold">Montant:</span> {transfer.amount} €
              </p>
              <p>
                <span className="font-semibold">Date:</span>{' '}
                {new Date(transfer.createdAt).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Statut:</span>{' '}
                <span
                  className={
                    transfer.status === 'confirmed'
                      ? 'text-green-600'
                      : 'text-yellow-600'
                  }
                >
                  {transfer.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                </span>
              </p>
            </div>
            <button
              onClick={copyTransferInfo}
              className="w-full mt-4 flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <CopyIcon className="w-5 h-5 mr-2" />
              {copied ? 'Copié !' : 'Copier les informations'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}