import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function Dashboard() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-72 bg-[#1f1f1f] text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-indigo-400 mb-8">
          My Dashboard
        </h1>

        <div className="bg-gray-800 p-4 rounded-lg mb-6">
          <p className="text-gray-400 text-sm">My Services</p>
          <div className="mt-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600">
            <h2 className="font-semibold">Prepaid</h2>
            <p className="text-gray-400 text-sm">Active</p>
          </div>
        </div>

        <button className="bg-indigo-600 px-4 py-2 rounded-lg mt-auto hover:bg-indigo-700">
          Get App
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-10">
        {/* Service Overview */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Service Overview</h2>
          <div className="bg-white shadow rounded-lg p-6 max-w-xl">
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold text-indigo-600">1.1 GB</span> left,
              Unlimited Talktime
            </p>

            <div className="mt-4">
              <h3 className="text-xl font-bold">₹929 Unlimited</h3>
              <p className="text-green-600 text-sm font-medium">
                Active · Expiring on 13 Oct 2025
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Calls</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full w-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Truly Unlimited</p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">SMS</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">100 left of 100</p>
              </div>
            </div>

            <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
              Recharge
            </button>
          </div>
        </section>

        {/* Shortcuts */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Shortcuts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Top Up Data",
              "Recharge",
              "Upgrade to Postpaid",
              "International Roaming",
              "Manage DND",
              "Update GST",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-lg p-6 cursor-pointer hover:shadow-lg"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expandable More Options */}
        <section>
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center space-x-2 text-indigo-600 font-medium"
          >
            <span>{showMore ? "Hide" : "Show"} More</span>
            {showMore ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {showMore && (
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Buy Products",
                "Call Manager",
                "Rewards & Refer",
                "Manage Services",
                "Postpaid Plans",
                "Recommended For You",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow rounded-lg p-6 cursor-pointer hover:shadow-lg"
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default function BroadbandLanding() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="bg-gray-50 min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-blue-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">
          High-Speed Internet for Everyone
        </h1>
        <p className="text-lg mb-6">
          Experience blazing fast internet with our reliable broadband services
        </p>
        <button
          onClick={() => setShowDashboard(true)}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100"
        >
          Get Started
        </button>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl w-full py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          📊 Why Choose ConnectFast?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: "⚡",
              title: "Speed",
              subtitle: "Up to 1 Gbps",
              desc: "Blazing fast internet speeds",
            },
            {
              icon: "📅",
              title: "Reliability",
              subtitle: "99.9% Uptime",
              desc: "Consistent connection",
            },
            {
              icon: "👥",
              title: "Coverage",
              subtitle: "98% Areas",
              desc: "Available in your area",
            },
            {
              icon: "⏰",
              title: "Support",
              subtitle: "24/7 Help",
              desc: "Always available",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-xl font-bold">{item.subtitle}</p>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl w-full py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          ✨ Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏠",
              title: "Home Internet",
              desc: "Perfect for streaming, gaming, and working from home",
            },
            {
              icon: "💼",
              title: "Business Solutions",
              desc: "Reliable connectivity for your business needs",
            },
            {
              icon: "🎮",
              title: "Gaming Package",
              desc: "Low latency for competitive gaming",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl w-full py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          💬 What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The best internet service I’ve ever had! Consistent speeds and great customer support.",
              name: "Sarah Johnson",
            },
            {
              quote:
                "Switched from my old provider and couldn’t be happier. The gaming package is amazing!",
              name: "Michael Chen",
            },
            {
              quote:
                "Perfect for working from home. Reliable connection even during peak hours.",
              name: "Emily Rodriguez",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md bg-white p-6 text-center"
            >
              <p className="italic mb-4">"{item.quote}"</p>
              <p className="font-semibold">{item.name}</p>
              <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
