import {
  Settings,
  ChevronDown,
  Users,
  BarChart3,
  Package,
  TrendingUp,
} from "lucide-react";

export const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-white h-screen border-r border-gray-200 fixed left-0 top-0 z-10">
    {/* Admin Profile */}
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
          LA
        </div>
        <div>
          <h3 className="font-medium text-gray-900">LUMEN Admin</h3>
          <p className="text-sm text-gray-500">admin@lumen.com</p>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>

    {/* Navigation */}
    <nav className="mt-6 px-3">
      {[
        { name: "Dashboard", icon: BarChart3 },
        { name: "Plans Management", icon: Package },
        { name: "Users", icon: Users },
        { name: "Analytics", icon: TrendingUp },
        { name: "Settings", icon: Settings },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg text-left mb-1 transition-colors ${
              activeTab === item.name
                ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {item.name}
          </button>
        );
      })}
    </nav>
  </div>
);
