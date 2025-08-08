import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { Check, ChevronRight } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  bgColor: string;
}

const MetricCard = ({
  icon,
  value,
  label,
  bgColor = "bg-green-100",
}: MetricCardProps) => {
  return (
    <Card className={`${bgColor} border-none shadow-sm`}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          <div className="mb-2">{icon}</div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const websiteVisitsData = [
  { name: "Jan", TeamA: 20, TeamB: 30, TeamC: 40 },
  { name: "Feb", TeamA: 30, TeamB: 25, TeamC: 35 },
  { name: "Mar", TeamA: 40, TeamB: 35, TeamC: 45 },
  { name: "Apr", TeamA: 35, TeamB: 40, TeamC: 50 },
  { name: "May", TeamA: 50, TeamB: 45, TeamC: 55 },
  { name: "Jun", TeamA: 45, TeamB: 50, TeamC: 60 },
  { name: "Jul", TeamA: 60, TeamB: 55, TeamC: 65 },
  { name: "Aug", TeamA: 65, TeamB: 60, TeamC: 70 },
  { name: "Sep", TeamA: 70, TeamB: 65, TeamC: 75 },
  { name: "Oct", TeamA: 75, TeamB: 70, TeamC: 80 },
  { name: "Nov", TeamA: 80, TeamB: 75, TeamC: 85 },
  { name: "Dec", TeamA: 85, TeamB: 80, TeamC: 90 },
];

const currentVisitsData = [
  { name: "America", value: 40, color: "#10B981" },
  { name: "Africa", value: 35, color: "#06B6D4" },
  { name: "Asia", value: 15, color: "#F59E0B" },
  { name: "Europe", value: 10, color: "#EF4444" },
];

const conversionRatesData = [
  { country: "Italy", value: 400 },
  { country: "Japan", value: 430 },
  { country: "China", value: 448 },
  { country: "Canada", value: 470 },
  { country: "United States", value: 580 },
];

const subjectData = [
  { subject: "English", A: 65, B: 85, fullMark: 150 },
  { subject: "History", A: 98, B: 90, fullMark: 150 },
  { subject: "Physics", A: 86, B: 70, fullMark: 150 },
  { subject: "Geography", A: 99, B: 75, fullMark: 150 },
  { subject: "Chinese", A: 85, B: 65, fullMark: 150 },
  { subject: "Math", A: 65, B: 95, fullMark: 150 },
];

const newsData = [
  {
    id: 1,
    title: "Apply These 7 Secret Techniques To Improve Event",
    date: "08 Apr 2022",
    timeAgo: "2 hours ago",
    color: "bg-orange-100",
  },
  {
    id: 2,
    title: "How 7 Things Will Change The Way You Approach Event",
    date: "15 Aug 2022",
    timeAgo: "3 hours ago",
    color: "bg-pink-100",
  },
  {
    id: 3,
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    date: "11 Jan 2022",
    timeAgo: "5 hours ago",
    color: "bg-yellow-100",
  },
  {
    id: 4,
    title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
    date: "09 Aug 2022",
    timeAgo: "7 hours ago",
    color: "bg-red-100",
  },
  {
    id: 5,
    title:
      "Event Awards: 7 Reasons Why They Don't Work & What You Can Do About It",
    date: "12 Jan 2022",
    timeAgo: "9 hours ago",
    color: "bg-gray-100",
  },
];

const orderTimelineData = [
  {
    id: 1,
    title: "1983 orders, $4200",
    date: "23 Nov 2022",
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "12 Invoices have been paid",
    date: "23 Nov 2022",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Order #37745 from September",
    date: "28 Oct 2022",
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "New order placed #XF-2356",
    date: "27 Nov 2022",
    color: "bg-red-500",
  },
  {
    id: 5,
    title: "New order placed #XF-2356",
    date: "24 Sep 2022",
    color: "bg-green-500",
  },
];

const trafficData = [
  { site: "Facebook", visits: "34.9k", icon: "🔵", color: "text-blue-500" },
  { site: "Google", visits: "91.4k", icon: "🔴", color: "text-red-500" },
  { site: "LinkedIn", visits: "50.1k", icon: "🔵", color: "text-blue-700" },
  { site: "Twitter", visits: "90.5k", icon: "🔵", color: "text-blue-400" },
];

const taskData = [
  { id: 1, title: "Create FireStone Logo", completed: false },
  { id: 2, title: "Add SCSS and JS files if required", completed: true },
  { id: 3, title: "Stakeholder Meeting", completed: true },
  { id: 4, title: "Scoping & Estimations", completed: false },
  { id: 5, title: "Sprint Showcase", completed: false },
];

const DashboardContent = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Hi, Welcome back</h1>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          icon={
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              🌱
            </div>
          }
          value="73.9k"
          label="Weekly Sales"
          bgColor="bg-green-100"
        />
        <MetricCard
          icon={
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
              🍎
            </div>
          }
          value="89.2k"
          label="New Users"
          bgColor="bg-blue-100"
        />
        <MetricCard
          icon={
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
              📦
            </div>
          }
          value="47.9k"
          label="Item Orders"
          bgColor="bg-yellow-100"
        />
        <MetricCard
          icon={
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
              🐞
            </div>
          }
          value="86.6k"
          label="Bug Reports"
          bgColor="bg-red-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Website Visits Chart */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Website Visits</h2>
            <p className="text-sm text-gray-500 mb-4">+14% than last year</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={websiteVisitsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="TeamA"
                    stroke="#10B981"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="TeamB" stroke="#F59E0B" />
                  <Line type="monotone" dataKey="TeamC" stroke="#3B82F6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Current Visits Pie Chart */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Current Visits</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentVisitsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {currentVisitsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Conversion Rates */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Conversion Rates</h2>
            <p className="text-sm text-gray-500 mb-4">+43% than last year</p>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionRatesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Current Subject */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-2">Current Subject</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={subjectData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar
                    name="Series 1"
                    dataKey="A"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Series 2"
                    dataKey="B"
                    stroke="#F59E0B"
                    fill="#F59E0B"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News & Order Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* News & Updates */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">News & Update</h2>
              <button className="text-sm text-blue-600 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
            <div className="space-y-4">
              {newsData.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div
                    className={`${item.color} w-12 h-12 rounded-md flex-shrink-0`}
                  ></div>
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Timeline</h2>
            <div className="space-y-6">
              {orderTimelineData.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative">
                    <div className={`${item.color} w-3 h-3 rounded-full`}></div>
                    {item.id !== orderTimelineData.length && (
                      <div className="absolute top-3 left-1.5 w-0.5 h-16 bg-gray-200"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Traffic by Site & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic by Site */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Traffic by Site</h2>
            <div className="grid grid-cols-2 gap-4">
              {trafficData.map((item, index) => (
                <div key={index} className="border rounded-md p-4 text-center">
                  <div className={`text-2xl ${item.color} mb-2`}>
                    {item.icon}
                  </div>
                  <div className="font-medium">{item.visits}</div>
                  <div className="text-sm text-gray-500">{item.site}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Task</h2>
            <div className="space-y-3">
              {taskData.map((task) => (
                <div key={task.id} className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 border rounded flex items-center justify-center ${task.completed ? "bg-primary border-primary" : "border-gray-300"}`}
                  >
                    {task.completed && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <span
                    className={
                      task.completed ? "line-through text-gray-500" : ""
                    }
                  >
                    {task.title}
                  </span>
                  <button className="ml-auto">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
