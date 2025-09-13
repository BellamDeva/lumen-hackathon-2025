import React from 'react';

const PlanCard = ({ name, type, price, data_gb, features = [], onSubscribe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 m-4 w-full sm:max-w-sm transition transform hover:scale-105">
      {/* Plan Name & Type */}
      <h3 className="text-2xl font-bold text-center mb-1">{name}</h3>
      <p className="text-center text-indigo-600 font-medium mb-4">{type}</p>

      {/* Price */}
      <p className="text-4xl font-extrabold text-center mb-2">
        ${price}
        <span className="text-lg font-normal">/mo</span>
      </p>

      {/* Data Allowance */}
      <p className="text-center text-gray-700 mb-4">{data_gb} GB Data</p>

      {/* Extra Features */}
      {features.length > 0 && (
        <ul className="text-gray-600 mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-600 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Subscribe Button */}
      <button
        onClick={onSubscribe}
        aria-label={`Subscribe to ${name} plan`}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Subscribe
      </button>
    </div>
  );
};

export default PlanCard;
