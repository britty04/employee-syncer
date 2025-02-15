
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Employee } from "@/types";
import { useState } from "react";

const employeeData: Employee[] = [
  {
    id: 1,
    name: "Aarav Patel",
    email: "aarav.patel@fr8.com",
    position: "Software Engineer",
    department: "Engineering",
    joiningDate: "2023-01-15",
    status: "not_marked"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@fr8.com",
    position: "HR Manager",
    department: "Human Resources",
    joiningDate: "2022-11-20",
    status: "not_marked"
  },
  {
    id: 3,
    name: "Arjun Kumar",
    email: "arjun.kumar@fr8.com",
    position: "Product Manager",
    department: "Product",
    joiningDate: "2023-03-10",
    status: "not_marked"
  },
  {
    id: 4,
    name: "Riya Desai",
    email: "riya.desai@fr8.com",
    position: "UX Designer",
    department: "Design",
    joiningDate: "2023-02-15",
    status: "not_marked"
  },
  {
    id: 5,
    name: "Aditya Singh",
    email: "aditya.singh@fr8.com",
    position: "Backend Developer",
    department: "Engineering",
    joiningDate: "2023-04-01",
    status: "not_marked"
  },
  {
    id: 6,
    name: "Kavya Reddy",
    email: "kavya.reddy@fr8.com",
    position: "Sales Executive",
    department: "Sales",
    joiningDate: "2023-01-20",
    status: "not_marked"
  },
  {
    id: 7,
    name: "Rohan Mehta",
    email: "rohan.mehta@fr8.com",
    position: "Frontend Developer",
    department: "Engineering",
    joiningDate: "2023-03-15",
    status: "not_marked"
  },
  {
    id: 8,
    name: "Ananya Gupta",
    email: "ananya.gupta@fr8.com",
    position: "Marketing Manager",
    department: "Marketing",
    joiningDate: "2023-02-01",
    status: "not_marked"
  },
  {
    id: 9,
    name: "Vikram Verma",
    email: "vikram.verma@fr8.com",
    position: "DevOps Engineer",
    department: "Engineering",
    joiningDate: "2023-05-01",
    status: "not_marked"
  },
  {
    id: 10,
    name: "Neha Kapoor",
    email: "neha.kapoor@fr8.com",
    position: "Content Writer",
    department: "Marketing",
    joiningDate: "2023-04-15",
    status: "not_marked"
  },
  // Add 10 more employees with similar structure
];

const updateAttendance = async (employeeId: number, status: "present" | "absent" | "late") => {
  // Google Apps Script URL - replace with your deployed web app URL
  const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";
  
  const date = new Date().toISOString().split('T')[0];
  const time = new Date().toLocaleTimeString();
  
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        employeeId,
        date,
        time,
        status,
      }),
    });
    
    return true;
  } catch (error) {
    console.error('Error updating attendance:', error);
    return false;
  }
};

const Employees = () => {
  const [employees, setEmployees] = useState(employeeData);
  const { toast } = useToast();

  const handleAttendance = async (employeeId: number, status: "present" | "absent" | "late") => {
    const success = await updateAttendance(employeeId, status);
    
    if (success) {
      setEmployees(prev =>
        prev.map(emp =>
          emp.id === employeeId ? { ...emp, status } : emp
        )
      );
      toast({
        title: "Attendance Updated",
        description: `Attendance marked as ${status}`,
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to update attendance",
        variant: "destructive",
      });
    }
  };

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
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    employee.status === "present"
                      ? "bg-green-100 text-green-800"
                      : employee.status === "absent"
                      ? "bg-red-100 text-red-800"
                      : employee.status === "late"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {employee.status === "not_marked" ? "Not Marked" : employee.status}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-green-50 hover:bg-green-100"
                    onClick={() => handleAttendance(employee.id, "present")}
                  >
                    Present
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-red-50 hover:bg-red-100"
                    onClick={() => handleAttendance(employee.id, "absent")}
                  >
                    Absent
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-yellow-50 hover:bg-yellow-100"
                    onClick={() => handleAttendance(employee.id, "late")}
                  >
                    Late
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Employees;
