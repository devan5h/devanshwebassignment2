import React from 'react';
import type { RegistrationData } from '../types/form';

export function RegistrationDisplay({ data }: { data: RegistrationData }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Application Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal and contact details</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {Object.entries(data).map(([key, value], index) => (
            <div key={key} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
              <dt className="text-sm font-medium text-gray-500">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}