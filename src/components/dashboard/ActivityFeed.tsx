import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, ExternalLink } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  color: string;
}

interface OrderItem {
  id: string;
  description: string;
  date: string;
  time: string;
  status?: string;
}

const ActivityFeed = () => {
  // Mock data for news feed
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Apply These 7 Secret Techniques To Improve Event",
      date: "09 Aug 2022",
      description: "Accusantium doloremque laudantium totam fugiat vel maxime.",
      color: "bg-orange-100",
    },
    {
      id: 2,
      title: "How 7 Things Will Change The Way You Approach Event",
      date: "10 Aug 2022",
      description: "Dolor sit amet consectetur adipisicing elit.",
      color: "bg-pink-100",
    },
    {
      id: 3,
      title: "Believing These 7 Myths About Event Keeps You From Growing",
      date: "11 Jan 2022",
      description: "Quis nostrum sed sapiente aliquot nulla.",
      color: "bg-amber-100",
    },
    {
      id: 4,
      title: "Don't Waste Time! 7 Facts Until You Reach Your Event",
      date: "09 Aug 2022",
      description: "Repellat dolor ut voluptas sapiente ratione nostrum est.",
      color: "bg-orange-100",
    },
    {
      id: 5,
      title:
        "Event Awards: 7 Reasons Why They Don't Work & What You Can Do About It",
      date: "12 Jan 2022",
      description: "Quo quia et nihil rerum dolore doloreque sit.",
      color: "bg-slate-100",
    },
  ];

  // Mock data for order timeline
  const orderItems: OrderItem[] = [
    {
      id: "1083 orders, $4520",
      description: "09 Apr 2022",
      date: "21 hours ago",
      time: "",
      status: "completed",
    },
    {
      id: "12 invoices have been paid",
      description: "15 Aug 2022",
      date: "12 hours ago",
      time: "",
      status: "pending",
    },
    {
      id: "Order #37745 from September",
      description: "30 Jun 2022",
      date: "6 hours ago",
      time: "",
      status: "processing",
    },
    {
      id: "New order placed #XF-2356",
      description: "09 Aug 2022",
      date: "2 hours ago",
      time: "",
      status: "new",
    },
    {
      id: "New order placed #XF-2356",
      description: "24 Sep 2022",
      date: "30 minutes ago",
      time: "",
      status: "new",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {/* News Feed Section */}
      <Card className="bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">News & Update</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div
                className={`${item.color} w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0`}
              >
                <CalendarIcon className="h-6 w-6 text-gray-600" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
          <div className="pt-2 text-right">
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 ml-auto">
              View All <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Order Timeline Section */}
      <Card className="bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-medium">Order Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {orderItems.map((item, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full">
                      {item.status === "completed" && (
                        <span className="absolute flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      )}
                      {item.status === "pending" && (
                        <span className="absolute flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                      )}
                      {item.status === "processing" && (
                        <span className="absolute flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                        </span>
                      )}
                      {item.status === "new" && (
                        <span className="absolute flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                      )}
                    </div>
                    {index < orderItems.length - 1 && (
                      <div className="absolute top-8 left-4 -ml-px h-full w-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">{item.id}</h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityFeed;
