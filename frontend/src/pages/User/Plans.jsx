import React, { useEffect, useState } from "react";
import PlanCard from "../../components/PlanCard";
// import api from "../../services/api";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // const { data } = await api.get("/plans"); // GET /api/plans
        // setPlans(data);
      } catch (err) {
        setError("Failed to load plans. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = async (planId) => {
    try {
      // await api.post("/subscriptions", { planId }); // POST /api/subscriptions
      alert("Successfully subscribed!");
      // optionally navigate to MySubscriptions.jsx
    } catch (err) {
      alert("Subscription failed. Please try again.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading plans...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Available Plans</h2>

      <div className="flex flex-wrap justify-center">
        {plans.map((plan) => (
          <PlanCard
            key={plan._id}
            name={plan.name}
            type={plan.type}
            price={plan.price}
            data_gb={plan.data_gb}
            features={plan.features}
            onSubscribe={() => handleSubscribe(plan._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
