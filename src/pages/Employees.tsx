
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Employee } from "@/types";

const employeeData: Employee[] = [
  {
    id: 1,
    name: "Aarav Patel",
    email: "aarav.patel@fr8.com",
    position: "Software Engineer",
    department: "Engineering",
    joiningDate: "2023-01-15",
    status: "present"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@fr8.com",
    position: "HR Manager",
    department: "Human Resources",
    joiningDate: "2022-11-20",
    status: "present"
  },
  {
    id: 3,
    name: "Arjun Kumar",
    email: "arjun.kumar@fr8.com",
    position: "Product Manager",
    department: "Product",
    joiningDate: "2023-03-10",
    status: "absent"
  },
  // ... Add 17 more employees with similar structure
];

const Employees = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Joining Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employeeData.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.joiningDate}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    employee.status === "present"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {employee.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Employees;
