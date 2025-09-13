import React, { useState, useEffect } from "react";

// Placeholder for API calls
const fetchSubscriptionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        currentPlan: {
          id: 2,
          name: "Basic Plan",
          price: "$9.99/month",
          features: ["Feature A", "Feature B", "Feature C"],
          status: "active",
          renewalDate: "2025-10-12",
        },
        availablePlans: [
          {
            id: 1,
            name: "Free Plan",
            price: "$0/month",
            features: ["Feature A"],
          },
          {
            id: 2,
            name: "Basic Plan",
            price: "$9.99/month",
            features: ["Feature A", "Feature B", "Feature C"],
          },
          {
            id: 3,
            name: "Premium Plan",
            price: "$19.99/month",
            features: ["Feature A", "Feature B", "Feature C", "Feature D"],
          },
        ],
      });
    }, 1000);
  });
};

const MySubscriptions = () => {
  const [currentPlan, setCurrentPlan] = useState(null);
  const [availablePlans, setAvailablePlans] = useState([]);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    // Fetch subscription data from API
    fetchSubscriptionData().then((data) => {
      setCurrentPlan(data.currentPlan);
      setAvailablePlans(data.availablePlans);
    });
  }, []);

  const handleUpgrade = (planId) => {
    console.log("Upgrading to plan", planId);
    setNotification("Subscription upgraded successfully!");
  };

  const handleDowngrade = (planId) => {
    console.log("Downgrading to plan", planId);
    setNotification("Subscription downgraded successfully!");
  };

  const handleCancel = () => {
    console.log("Cancelling plan");
    setCurrentPlan(null);
    setNotification("Subscription cancelled.");
  };

  const handleAddSubscription = (planId) => {
    console.log("Adding subscription for plan", planId);
    const newPlan = availablePlans.find((p) => p.id === planId);
    setCurrentPlan(newPlan);
    setNotification("Subscription added successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Subscriptions</h1>

      {notification && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{notification}</span>
        </div>
      )}

      {/* Current Subscription Section */}
      {currentPlan ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Current Subscription</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold">{currentPlan.name}</h3>
              <p className="text-gray-600">{currentPlan.price}</p>
              <span
                className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                  currentPlan.status === "active"
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {currentPlan.status}
              </span>
            </div>
            <div>
              <h4 className="font-semibold">Features:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {currentPlan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">
              {currentPlan.status === "active" ? "Renews on" : "Expires on"}:{" "}
              {currentPlan.renewalDate}
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cancel Plan
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            No Active Subscription
          </h2>
          <p className="text-gray-600 mb-4">
            Please choose a plan to get started.
          </p>
        </div>
      )}

      {/* Available Plans Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {availablePlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white shadow-md rounded-lg p-6 ${
                currentPlan?.id === plan.id ? "border-2 border-indigo-500" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="text-center">
                {currentPlan ? (
                  <>
                    {plan.id > currentPlan.id && (
                      <button
                        onClick={() => handleUpgrade(plan.id)}
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full"
                      >
                        Upgrade
                      </button>
                    )}
                    {plan.id < currentPlan.id && (
                      <button
                        onClick={() => handleDowngrade(plan.id)}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 w-full"
                      >
                        Downgrade
                      </button>
                    )}
                    {plan.id === currentPlan.id && (
                      <p className="text-indigo-600 font-semibold">
                        Current Plan
                      </p>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleAddSubscription(plan.id)}
                    className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 w-full"
                  >
                    Add Subscription
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySubscriptions;
