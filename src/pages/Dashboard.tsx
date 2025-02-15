
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, UserX, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

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
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Employees"
          value="124"
          icon={Users}
          className="text-blue-500"
        />
        <DashboardCard
          title="Present Today"
          value="98"
          icon={UserCheck}
          className="text-green-500"
        />
        <DashboardCard
          title="Absent Today"
          value="26"
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
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Activity feed coming soon...
            </p>
          </CardContent>
        </Card>
        
        <Card className="animate-slideUp">
          <CardHeader>
            <CardTitle>Today's Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Daily overview coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
