import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import {
  Search,
  Bell,
  Settings,
  ChevronDown,
  MoreVertical,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
} from "lucide-react";

const Home = () => {
  // Mock data for charts
  const websiteVisitsData = [
    { name: "Jan", "Team A": 20, "Team B": 30, "Team C": 40 },
    { name: "Feb", "Team A": 30, "Team B": 20, "Team C": 45 },
    { name: "Mar", "Team A": 40, "Team B": 25, "Team C": 35 },
    { name: "Apr", "Team A": 25, "Team B": 30, "Team C": 50 },
    { name: "May", "Team A": 50, "Team B": 45, "Team C": 40 },
    { name: "Jun", "Team A": 45, "Team B": 40, "Team C": 55 },
    { name: "Jul", "Team A": 60, "Team B": 50, "Team C": 45 },
    { name: "Aug", "Team A": 65, "Team B": 55, "Team C": 50 },
    { name: "Sep", "Team A": 70, "Team B": 60, "Team C": 55 },
    { name: "Oct", "Team A": 60, "Team B": 65, "Team C": 60 },
    { name: "Nov", "Team A": 55, "Team B": 60, "Team C": 65 },
    { name: "Dec", "Team A": 70, "Team B": 55, "Team C": 60 },
  ];

  const pieChartData = [
    { name: "America", value: 40, color: "#10b981" },
    { name: "Africa", value: 35, color: "#06b6d4" },
    { name: "Asia", value: 15, color: "#fbbf24" },
    { name: "Europe", value: 10, color: "#ef4444" },
  ];

  const conversionRatesData = [
    { name: "Italy", value: 400 },
    { name: "Japan", value: 300 },
    { name: "China", value: 300 },
    { name: "Canada", value: 500 },
    { name: "United States", value: 600 },
  ];

  const newsData = [
    {
      id: 1,
      title: "Apply These 7 Secret Techniques To Improve Event",
      date: "08 Apr 2022",
      color: "#f3e8e8",
      textColor: "#d97706",
    },
    {
      id: 2,
      title: "How 7 Things Will Change The Way You Approach Event",
      date: "15 Aug 2022",
      color: "#fce7f3",
      textColor: "#db2777",
    },
    {
      id: 3,
      title: "Believing These 7 Myths About Event Keeps You From Growing",
      date: "11 Jan 2022",
      color: "#fef3c7",
      textColor: "#d97706",
    },
    {
      id: 4,
      title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
      date: "03 Aug 2022",
      color: "#fee2e2",
      textColor: "#ef4444",
    },
    {
      id: 5,
      title:
        "Event Awards: 7 Reasons Why They Don't Work & What You Can Do About It",
      date: "12 Jan 2022",
      color: "#e0e7ff",
      textColor: "#4f46e5",
    },
  ];

  const orderTimelineData = [
    {
      id: 1,
      title: "1983 orders, $4200",
      time: "23 hours ago",
      color: "#10b981",
    },
    {
      id: 2,
      title: "12 invoices have been paid",
      time: "12 hours ago",
      color: "#fbbf24",
    },
    {
      id: 3,
      title: "Order #37745 from September",
      time: "30 minutes ago",
      color: "#06b6d4",
    },
    {
      id: 4,
      title: "New order placed #XF-2356",
      time: "2 hours ago",
      color: "#ef4444",
    },
    {
      id: 5,
      title: "New order placed #XF-2356",
      time: "24 Sep 2022",
      color: "#10b981",
    },
  ];

  const taskData = [
    { id: 1, title: "Create FireStone Logo", completed: false },
    { id: 2, title: "Add SCSS and JS files if required", completed: true },
    { id: 3, title: "Stakeholder Meeting", completed: true },
    { id: 4, title: "Scoping & Estimations", completed: false },
    { id: 5, title: "Sprint Showcase", completed: false },
  ];

  const trafficData = [
    {
      site: "Facebook",
      visits: "34.9k",
      icon: <Facebook className="h-5 w-5 text-blue-600" />,
    },
    {
      site: "Google",
      visits: "91.4k",
      icon: <Globe className="h-5 w-5 text-red-500" />,
    },
    {
      site: "LinkedIn",
      visits: "50.1k",
      icon: <Linkedin className="h-5 w-5 text-blue-700" />,
    },
    {
      site: "Twitter",
      visits: "90.5k",
      icon: <Twitter className="h-5 w-5 text-blue-400" />,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white font-bold mr-2">
            P
          </div>
          <span className="font-semibold text-gray-700">SAJAL MAITY</span>
        </div>

        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            GENERAL
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📱</span>
              App
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">🛒</span>
              E-commerce
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md">
              <span className="mr-3 text-gray-500">📊</span>
              Analytics
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📈</span>
              Banking
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">🏨</span>
              Booking
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📄</span>
              File
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            MANAGEMENT
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">👤</span>
              User
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">🛒</span>
              E-Commerce
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📝</span>
              Invoices
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📰</span>
              Blog
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📁</span>
              File manager
            </div>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            APPS
          </h3>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <div className="flex items-center">
                <span className="mr-3 text-gray-500">✉️</span>
                Mail
              </div>
              <Badge variant="destructive" className="text-xs">
                25+
              </Badge>
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">💬</span>
              Chat
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">📅</span>
              Calendar
            </div>
            <div className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
              <span className="mr-3 text-gray-500">🇰🇷</span>
              Korean
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-500" />
            </button>
            <div className="flex items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=pritam"
                  alt="User"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-gray-500 ml-2" />
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Hi, Welcome back
          </h1>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <span className="text-green-600 text-lg">🌱</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">73.9k</h2>
                    <p className="text-sm text-gray-600 mt-1">Weekly Sales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-blue-600 text-lg">🍎</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">89.2k</h2>
                    <p className="text-sm text-gray-600 mt-1">New Users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <span className="text-yellow-600 text-lg">📦</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">47.9k</h2>
                    <p className="text-sm text-gray-600 mt-1">Item Orders</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-red-50">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <span className="text-red-600 text-lg">🐞</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">86.6k</h2>
                    <p className="text-sm text-gray-600 mt-1">Bug Reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Website Visits Chart */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Website Visits</h3>
                  <p className="text-sm text-gray-500">+1.2% from last year</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={websiteVisitsData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Team A"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 0 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Team B"
                        stroke="#fbbf24"
                        strokeWidth={2}
                        dot={{ r: 0 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Team C"
                        stroke="#06b6d4"
                        strokeWidth={2}
                        dot={{ r: 0 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Current Visits Pie Chart */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Current Visits</h3>
                </div>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                        label
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Conversion Rates */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Conversion Rates</h3>
                  <p className="text-sm text-gray-500">+0.9% than last year</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={conversionRatesData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={true}
                        vertical={false}
                      />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        fill="#10b981"
                        barSize={20}
                        radius={[0, 4, 4, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Current Subject */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Current Subject</h3>
                </div>
                <div className="h-80 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">English</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">History</span>
                        <span className="text-sm font-medium">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Physics</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Geography</span>
                        <span className="text-sm font-medium">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Chinese</span>
                        <span className="text-sm font-medium">55%</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Math</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* News & Order Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* News & Updates */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">News & Update</h3>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                <div className="space-y-4">
                  {newsData.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div
                        className="w-12 h-12 rounded-md flex-shrink-0 flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <span
                          className="text-lg"
                          style={{ color: item.textColor }}
                        >
                          📰
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Order Timeline</h3>
                </div>
                <div className="space-y-6">
                  {orderTimelineData.map((item, index) => (
                    <div key={item.id} className="relative pl-6">
                      {index < orderTimelineData.length - 1 && (
                        <div
                          className="absolute left-2 top-3 bottom-0 w-0.5 bg-gray-200"
                          style={{ height: "calc(100% + 1.5rem)" }}
                        ></div>
                      )}
                      <div className="flex items-center mb-1">
                        <div
                          className="absolute left-0 w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <h4 className="text-sm font-medium">{item.title}</h4>
                      </div>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Traffic by Site & Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Traffic by Site */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Traffic by Site</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {trafficData.map((item, index) => (
                    <div
                      key={index}
                      className="border rounded-md p-4 text-center"
                    >
                      <div className="flex justify-center mb-2">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{item.visits}</h4>
                      <p className="text-sm text-gray-500">{item.site}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tasks */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Task</h3>
                </div>
                <div className="space-y-4">
                  {taskData.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <Checkbox
                          id={`task-${task.id}`}
                          checked={task.completed}
                        />
                        <label
                          htmlFor={`task-${task.id}`}
                          className={`ml-2 text-sm ${task.completed ? "line-through text-gray-500" : "text-gray-700"}`}
                        >
                          {task.title}
                        </label>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
