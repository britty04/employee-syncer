
export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  joiningDate: string;
  status: "present" | "absent" | "late" | "not_marked";
}

export interface AttendanceRecord {
  id: number;
  employeeId: number;
  date: string;
  checkIn: string | null;
  checkOut: string | null;
  status: "present" | "absent" | "late";
  workingHours: number | null;
}

export interface User {
  username: string;
  role: "admin" | "employee";
}
