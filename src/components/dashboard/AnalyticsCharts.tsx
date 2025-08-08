import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalyticsChartsProps {
  websiteVisitsData?: {
    labels: string[];
    datasets: {
      name: string;
      data: number[];
      color: string;
    }[];
  };
  currentVisitsData?: {
    labels: string[];
    data: number[];
    colors: string[];
  };
  conversionRatesData?: {
    labels: string[];
    data: number[];
  };
  currentSubjectData?: {
    labels: string[];
    datasets: {
      name: string;
      data: number[];
    }[];
  };
}

const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({
  websiteVisitsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        name: "Team A",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 80, 65, 59, 55],
        color: "#10b981",
      },
      {
        name: "Team B",
        data: [20, 30, 25, 40, 39, 50, 60, 81, 70, 55, 49, 45],
        color: "#3b82f6",
      },
      {
        name: "Team C",
        data: [10, 20, 15, 30, 29, 40, 50, 71, 60, 45, 39, 35],
        color: "#f59e0b",
      },
    ],
  },
  currentVisitsData = {
    labels: ["America", "Africa", "Asia", "Europe"],
    data: [40, 15, 25, 20],
    colors: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"],
  },
  conversionRatesData = {
    labels: ["USA", "India", "China", "Canada", "United States"],
    data: [400, 430, 380, 490, 380],
  },
  currentSubjectData = {
    labels: ["English", "Math", "History", "Physics", "Geography", "Chinese"],
    datasets: [
      {
        name: "Series 1",
        data: [65, 75, 70, 80, 60, 55],
      },
      {
        name: "Series 2",
        data: [55, 65, 60, 70, 50, 45],
      },
    ],
  },
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-background">
      {/* Website Visits Chart */}
      <Card className="col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Website Visits</CardTitle>
          <p className="text-sm text-muted-foreground">+14% from last year</p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative">
            {/* Line chart visualization */}
            <div className="absolute inset-0 flex items-end">
              {websiteVisitsData.labels.map((label, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  {/* Vertical bars for each month */}
                  <div className="relative h-full w-full flex items-end justify-center">
                    {websiteVisitsData.datasets.map((dataset, datasetIndex) => (
                      <div
                        key={datasetIndex}
                        className="absolute bottom-0 w-1 rounded-t-sm mx-0.5"
                        style={{
                          backgroundColor: dataset.color,
                          height: `${(dataset.data[index] / 100) * 80}%`,
                          left: `${datasetIndex * 4 + 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Line chart overlay */}
            <div className="absolute inset-0">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {websiteVisitsData.datasets.map((dataset, datasetIndex) => (
                  <polyline
                    key={datasetIndex}
                    points={websiteVisitsData.labels
                      .map(
                        (_, index) =>
                          `${index * (100 / (websiteVisitsData.labels.length - 1))},${100 - (dataset.data[index] / 100) * 80}`,
                      )
                      .join(" ")}
                    fill="none"
                    stroke={dataset.color}
                    strokeWidth="1"
                  />
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="absolute top-0 right-0 flex items-center space-x-4">
              {websiteVisitsData.datasets.map((dataset, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-1"
                    style={{ backgroundColor: dataset.color }}
                  />
                  <span className="text-xs">{dataset.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Visits Chart */}
      <Card className="col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Current Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            {/* Pie chart visualization */}
            <div className="relative w-[200px] h-[200px]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {currentVisitsData.data.map((value, index) => {
                  // Calculate pie chart segments
                  const total = currentVisitsData.data.reduce(
                    (sum, val) => sum + val,
                    0,
                  );
                  const startAngle = currentVisitsData.data
                    .slice(0, index)
                    .reduce((sum, val) => sum + (val / total) * 360, 0);
                  const angle = (value / total) * 360;
                  const endAngle = startAngle + angle;

                  // Convert angles to radians and calculate coordinates
                  const startRad = ((startAngle - 90) * Math.PI) / 180;
                  const endRad = ((endAngle - 90) * Math.PI) / 180;

                  const x1 = 50 + 40 * Math.cos(startRad);
                  const y1 = 50 + 40 * Math.sin(startRad);
                  const x2 = 50 + 40 * Math.cos(endRad);
                  const y2 = 50 + 40 * Math.sin(endRad);

                  // Create arc path
                  const largeArcFlag = angle > 180 ? 1 : 0;
                  const path = [
                    `M 50 50`,
                    `L ${x1} ${y1}`,
                    `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                    `Z`,
                  ].join(" ");

                  return (
                    <path
                      key={index}
                      d={path}
                      fill={currentVisitsData.colors[index]}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="ml-8 space-y-2">
              {currentVisitsData.labels.map((label, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: currentVisitsData.colors[index] }}
                  />
                  <span className="text-sm">
                    {label} {currentVisitsData.data[index]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Rates Chart */}
      <Card className="col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            Conversion Rates
          </CardTitle>
          <p className="text-sm text-muted-foreground">+43% than last year</p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] relative pt-6">
            {/* Bar chart visualization */}
            <div className="h-full flex items-end">
              {conversionRatesData.labels.map((label, index) => {
                const maxValue = Math.max(...conversionRatesData.data);
                const height =
                  (conversionRatesData.data[index] / maxValue) * 100;

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-4/5 bg-primary rounded-sm"
                      style={{ height: `${height * 0.7}%` }}
                    />
                    <div className="mt-2 text-xs text-muted-foreground truncate w-full text-center">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
              <div>600</div>
              <div>400</div>
              <div>200</div>
              <div>0</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Subject Chart */}
      <Card className="col-span-1 md:col-span-1">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Current Subject</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center">
            {/* Radar chart visualization */}
            <div className="relative w-[250px] h-[250px]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background hexagon grid */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
                  <polygon
                    key={i}
                    points={currentSubjectData.labels
                      .map((_, idx) => {
                        const angle =
                          (((idx * 360) / currentSubjectData.labels.length) *
                            Math.PI) /
                          180;
                        const x =
                          50 + 45 * scale * Math.cos(angle - Math.PI / 2);
                        const y =
                          50 + 45 * scale * Math.sin(angle - Math.PI / 2);
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Axis lines */}
                {currentSubjectData.labels.map((_, idx) => {
                  const angle =
                    (((idx * 360) / currentSubjectData.labels.length) *
                      Math.PI) /
                    180;
                  const x = 50 + 45 * Math.cos(angle - Math.PI / 2);
                  const y = 50 + 45 * Math.sin(angle - Math.PI / 2);
                  return (
                    <line
                      key={idx}
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                    />
                  );
                })}

                {/* Data polygons */}
                {currentSubjectData.datasets.map((dataset, datasetIndex) => (
                  <polygon
                    key={datasetIndex}
                    points={dataset.data
                      .map((value, idx) => {
                        const scale = value / 100;
                        const angle =
                          (((idx * 360) / currentSubjectData.labels.length) *
                            Math.PI) /
                          180;
                        const x =
                          50 + 45 * scale * Math.cos(angle - Math.PI / 2);
                        const y =
                          50 + 45 * scale * Math.sin(angle - Math.PI / 2);
                        return `${x},${y}`;
                      })
                      .join(" ")}
                    fill={
                      datasetIndex === 0
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(245, 158, 11, 0.2)"
                    }
                    stroke={datasetIndex === 0 ? "#10b981" : "#f59e0b"}
                    strokeWidth="1"
                  />
                ))}

                {/* Axis labels */}
                {currentSubjectData.labels.map((label, idx) => {
                  const angle =
                    (((idx * 360) / currentSubjectData.labels.length) *
                      Math.PI) /
                    180;
                  const x = 50 + 55 * Math.cos(angle - Math.PI / 2);
                  const y = 50 + 55 * Math.sin(angle - Math.PI / 2);
                  return (
                    <text
                      key={idx}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="3"
                      fill="#64748b"
                    >
                      {label}
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="ml-4 space-y-2">
              {currentSubjectData.datasets.map((dataset, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{
                      backgroundColor: index === 0 ? "#10b981" : "#f59e0b",
                    }}
                  />
                  <span className="text-sm">{dataset.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsCharts;
