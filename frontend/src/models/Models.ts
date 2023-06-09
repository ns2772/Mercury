
export interface Employee {
	id: string;
	name: string;
	birthday: Date;
	bio: string;
	departmentId: string
}

export interface Department {
	id: string;
	name: string;
	employeeIds: string[];
}
export interface IDepartmentDetails {
	id: string;
	name: string;
	employeeDetails: Employee[];
	employeeIds: string[];
}
