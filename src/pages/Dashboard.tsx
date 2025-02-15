
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock,
  BarChart,
  PieChart,
  TrendingUp
} from "lucide-react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { cn } from "@/lib/utils";

const attendanceData = [
  { date: "Mon", present: 18, absent: 2 },
  { date: "Tue", present: 17, absent: 3 },
  { date: "Wed", present: 19, absent: 1 },
  { date: "Thu", present: 16, absent: 4 },
  { date: "Fri", present: 18, absent: 2 },
];

const departmentData = [
  { name: "Engineering", value: 6 },
  { name: "Design", value: 2 },
  { name: "Marketing", value: 2 },
  { name: "HR", value: 1 },
  { name: "Others", value: 9 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const DashboardCard = ({
  title,
  value,
  icon: Icon,
  className,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  className?: string;
}) => (
  <Card className="animate-slideUp">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className={cn("h-4 w-4", className)} />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Employees"
          value="20"
          icon={Users}
          className="text-blue-500"
        />
        <DashboardCard
          title="Present Today"
          value="18"
          icon={UserCheck}
          className="text-green-500"
        />
        <DashboardCard
          title="Absent Today"
          value="2"
          icon={UserX}
          className="text-red-500"
        />
        <DashboardCard
          title="Average Hours"
          value="7.5h"
          icon={Clock}
          className="text-orange-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="animate-slideUp">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Weekly Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="present" fill="#4CAF50" name="Present" />
                  <Bar dataKey="absent" fill="#f44336" name="Absent" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="animate-slideUp">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Department Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
