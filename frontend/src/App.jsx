import React, { useState } from "react";
import {
  CreditCard,
  Search,
  MoreHorizontal,
  DollarSign,
  Users,
  Plus,
  X,
  Package,
  TrendingUp,
} from "lucide-react";

import { subscriptionPlans, adminStats, users } from "./services/stub_data";

import { Sidebar } from "./components";

const LumenAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");
  const [sortBy, setSortBy] = useState("Subscribers");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddPlanModal, setShowAddPlanModal] = useState(false);

  const Header = () => (
    <div className="ml-64 bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{activeTab}</h1>
          {activeTab === "Plans Management" && (
            <div className="flex items-center mt-2 space-x-4">
              <button
                onClick={() => setSelectedPeriod("thisMonth")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedPeriod === "thisMonth"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                This Month Plans
              </button>
              <button
                onClick={() => setSelectedPeriod("active")}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedPeriod === "active"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Active Plans (
                {subscriptionPlans.filter((p) => p.status === "Active").length})
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {activeTab === "Plans Management" && (
            <>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for Plans"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option>Subscribers</option>
                  <option>Revenue</option>
                  <option>Plan Name</option>
                  <option>Price</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const StatsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              Total Subscriptions
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {adminStats.totalSubscriptions.toLocaleString()}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-blue-50">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
            <p className="text-2xl font-bold text-gray-900">
              ${adminStats.monthlyRevenue.toLocaleString()}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-green-50">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Plans</p>
            <p className="text-2xl font-bold text-gray-900">
              {adminStats.totalPlans}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-purple-50">
            <Package className="w-6 h-6 text-purple-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">
              New Subscriptions
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {adminStats.newSubscriptions}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-50">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Cancellations</p>
            <p className="text-2xl font-bold text-gray-900">
              {adminStats.cancellations}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-red-50">
            <X className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );

  const PlansTable = () => {
    const filteredPlans = subscriptionPlans.filter(
      (plan) =>
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h3 className="text-lg font-medium text-gray-900">Plan Name</h3>
            <div className="flex space-x-8 text-sm text-gray-500">
              <span>Status</span>
              <span>Category</span>
              <span>Price</span>
              <span>Subscribers</span>
              <span>Actions</span>
            </div>
          </div>
          <button
            onClick={() => setShowAddPlanModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Plan
          </button>
        </div>

        {/* Plans List */}
        <div className="space-y-4">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg ${
                      plan.category === "Fibernet"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {plan.category === "Fibernet" ? "🌐" : "📡"}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{plan.name}</h4>
                    <div className="flex items-center space-x-6 mt-1">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          plan.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        ● {plan.status}
                      </span>
                      <span className="text-sm text-gray-600">
                        {plan.category}
                      </span>
                      <span className="font-medium text-gray-900">
                        ${plan.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        {plan.subscribers} subscribers
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 text-blue-600 border border-blue-200 rounded hover:bg-blue-50 transition-colors">
                    Cancel
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Plan Details */}
              <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-500">Data Quota</p>
                  <p className="font-medium">{plan.quota}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Revenue</p>
                  <p className="font-medium text-green-600">
                    ${plan.revenue.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <CreditCard className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Credit card</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current users</p>
                  {plan.users && (
                    <div className="flex items-center space-x-1 mt-1">
                      {plan.users.map((user, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs"
                        >
                          {user.avatar}
                        </div>
                      ))}
                      <button className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Billing Frequency */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Choose your billing frequency
                </p>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Pay Monthly
                    </span>
                    <span className="ml-1 text-xs text-gray-400">
                      $5.99 per user per month
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Pay Annually
                    </span>
                    <span className="ml-1 text-xs text-gray-400">
                      $59.99 per user per month
                    </span>
                  </label>
                </div>
              </div>

              {/* Additional Settings */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Additional Settings
                </h4>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      defaultChecked
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Set to automove
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Collect payments
                    </span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <div>
            <StatsCards />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Top Performing Plans
                  </h3>
                  <div className="space-y-4">
                    {subscriptionPlans.slice(0, 3).map((plan, index) => (
                      <div
                        key={plan.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-600">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              {plan.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              {plan.category} • {plan.quota}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">
                            {plan.subscribers} subscribers
                          </p>
                          <p className="text-sm text-green-600">
                            ${plan.revenue.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1"></div>
            </div>
          </div>
        );

      case "Plans Management":
        return <PlansTable />;

      case "Users":
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Usage
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.plan}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.usage}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "Analytics":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Plan Performance
              </h3>
              <div className="space-y-4">
                {subscriptionPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-gray-600">{plan.name}</span>
                    <span className="font-medium">{plan.subscribers}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <StatsCards />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Header activeTab={activeTab} />

      <main className="ml-64 p-8">{renderContent()}</main>

      {/* Add Plan Modal */}
      {showAddPlanModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add New Plan</h3>
              <button onClick={() => setShowAddPlanModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Plan Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option>Fibernet</option>
                <option>Broadband Copper</option>
              </select>
              <input
                type="number"
                placeholder="Price ($)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Data Quota (e.g., 100 GB)"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAddPlanModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddPlanModal(false)}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LumenAdminDashboard;
