import React, { useState } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { RegistrationDisplay } from './components/RegistrationDisplay';
import type { RegistrationData } from './types/form';

function App() {
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  const handleSubmit = (data: RegistrationData) => {
    setSubmittedData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Online Registration Form</h1>
              {!submittedData ? (
                <RegistrationForm onSubmit={handleSubmit} />
              ) : (
                <div className="space-y-6">
                  <RegistrationDisplay data={submittedData} />
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;