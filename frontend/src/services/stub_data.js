// Sample admin data based on LUMEN requirements
export const adminStats = {
  totalSubscriptions: 2547,
  monthlyRevenue: 125430,
  totalPlans: 12,
  newSubscriptions: 156,
  cancellations: 23,
};

// Sample subscription plans data (MVP requirement)
export const subscriptionPlans = [
  {
    id: 1,
    name: "Fibernet Pro 100",
    status: "Active",
    category: "Fibernet",
    price: 100,
    quota: "100 GB",
    subscribers: 456,
    revenue: 45600,
    paymentDue: "2 days",
    dueDate: "12 Nov 2024",
    users: [
      { name: "John Doe", avatar: "JD", days: "2 days ago" },
      { name: "Sarah Wilson", avatar: "SW", days: "3 days ago" },
    ],
  },
  {
    id: 2,
    name: "Broadband Premium",
    status: "Active",
    category: "Broadband Copper",
    price: 80,
    quota: "50 GB",
    subscribers: 389,
    revenue: 31120,
    paymentDue: "5 days",
    dueDate: "17 Nov 2024",
  },
  {
    id: 3,
    name: "Fibernet Basic",
    status: "Active",
    category: "Fibernet",
    price: 60,
    quota: "25 GB",
    subscribers: 342,
    revenue: 20520,
    paymentDue: "8 days",
    dueDate: "20 Nov 2024",
  },
  {
    id: 4,
    name: "Ultra Speed 200",
    status: "Active",
    category: "Fibernet",
    price: 120,
    quota: "200 GB",
    subscribers: 298,
    revenue: 35760,
    paymentDue: "12 days",
    dueDate: "24 Nov 2024",
  },
  {
    id: 5,
    name: "Home Broadband",
    status: "Inactive",
    category: "Broadband Copper",
    price: 50,
    quota: "30 GB",
    subscribers: 267,
    revenue: 13350,
    paymentDue: "15 days",
    dueDate: "27 Nov 2024",
  },
];

// Sample users data
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    plan: "Fibernet Pro 100",
    status: "Active",
    joinDate: "2024-01-15",
    usage: "75 GB",
    avatar: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    plan: "Broadband Premium",
    status: "Active",
    joinDate: "2024-02-20",
    usage: "32 GB",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    plan: "Fibernet Basic",
    status: "Cancelled",
    joinDate: "2024-01-10",
    usage: "15 GB",
    avatar: "MJ",
  },
];

// Usage trends data for analytics
export const usageData = {
  2024: [
    { month: "Jan", active: 2100, cancelled: 45 },
    { month: "Feb", active: 2250, cancelled: 52 },
    { month: "Mar", active: 2180, cancelled: 48 },
    { month: "Apr", active: 2340, cancelled: 61 },
    { month: "May", active: 2420, cancelled: 35 },
    { month: "Jun", active: 2380, cancelled: 67 },
    { month: "Jul", active: 2450, cancelled: 29 },
    { month: "Aug", active: 2520, cancelled: 41 },
    { month: "Sep", active: 2490, cancelled: 38 },
    { month: "Oct", active: 2547, cancelled: 23 },
    { month: "Nov", active: 2600, cancelled: 30 },
    { month: "Dec", active: 2650, cancelled: 25 },
  ],
};
