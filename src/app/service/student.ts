import { Injectable } from '@angular/core';
import { Students } from '../interface/student.interface'
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Student {
  private student: Students[] = [
    { id: 1, name: "Rahul Patil", age: 21, course: "BCA", city: "Pune", marks: 85 },
    { id: 2, name: "Sneha Sharma", age: 22, course: "BSc IT", city: "Mumbai", marks: 90 },
    { id: 3, name: "Amit Kumar", age: 20, course: "BCom", city: "Nashik", marks: 78 },
    { id: 4, name: "Priya Desai", age: 23, course: "MCA", city: "Nagpur", marks: 88 },
    { id: 5, name: "Vikas Jadhav", age: 21, course: "BBA", city: "Kolhapur", marks: 72 },
    { id: 6, name: "Neha Kulkarni", age: 22, course: "BCA", city: "Pune", marks: 81 },
    { id: 7, name: "Rohit Singh", age: 20, course: "BSc", city: "Delhi", marks: 76 },
    { id: 8, name: "Anjali Mehta", age: 21, course: "MCA", city: "Ahmedabad", marks: 89 },
    { id: 9, name: "Kiran Pawar", age: 23, course: "BCom", city: "Satara", marks: 67 },
    { id: 10, name: "Pooja Patil", age: 22, course: "BBA", city: "Sangli", marks: 91 },

    { id: 11, name: "Sagar More", age: 21, course: "BCA", city: "Pune", marks: 74 },
    { id: 12, name: "Riya Shah", age: 20, course: "BSc IT", city: "Surat", marks: 86 },
    { id: 13, name: "Manish Verma", age: 22, course: "BCom", city: "Indore", marks: 79 },
    { id: 14, name: "Komal Patwardhan", age: 23, course: "MCA", city: "Mumbai", marks: 92 },
    { id: 15, name: "Akash Shinde", age: 21, course: "BBA", city: "Solapur", marks: 69 },
    { id: 16, name: "Deepali Joshi", age: 22, course: "BCA", city: "Pune", marks: 83 },
    { id: 17, name: "Nikhil Gupta", age: 20, course: "BSc", city: "Jaipur", marks: 75 },
    { id: 18, name: "Meena Iyer", age: 23, course: "MCA", city: "Chennai", marks: 87 },
    { id: 19, name: "Ajay Yadav", age: 21, course: "BCom", city: "Lucknow", marks: 71 },
    { id: 20, name: "Shweta Kale", age: 22, course: "BBA", city: "Pune", marks: 94 },

    { id: 21, name: "Pratik Chavan", age: 21, course: "BCA", city: "Kolhapur", marks: 77 },
    { id: 22, name: "Sonal Jain", age: 20, course: "BSc IT", city: "Udaipur", marks: 88 },
    { id: 23, name: "Arjun Nair", age: 22, course: "BCom", city: "Kochi", marks: 82 },
    { id: 24, name: "Kavita Rao", age: 23, course: "MCA", city: "Hyderabad", marks: 90 },
    { id: 25, name: "Mahesh Gaikwad", age: 21, course: "BBA", city: "Aurangabad", marks: 68 },
    { id: 26, name: "Rutuja Patil", age: 22, course: "BCA", city: "Pune", marks: 84 },
    { id: 27, name: "Sameer Khan", age: 20, course: "BSc", city: "Bhopal", marks: 73 },
    { id: 28, name: "Divya Kapoor", age: 23, course: "MCA", city: "Delhi", marks: 91 },
    { id: 29, name: "Omkar Salunkhe", age: 21, course: "BCom", city: "Satara", marks: 80 },
    { id: 30, name: "Tanvi Deshmukh", age: 22, course: "BBA", city: "Nagpur", marks: 85 },

    { id: 31, name: "Harsh Agarwal", age: 21, course: "BCA", city: "Jaipur", marks: 78 },
    { id: 32, name: "Pallavi Patil", age: 20, course: "BSc IT", city: "Pune", marks: 93 },
    { id: 33, name: "Vinay Mishra", age: 22, course: "BCom", city: "Kanpur", marks: 70 },
    { id: 34, name: "Aarti Kulkarni", age: 23, course: "MCA", city: "Mumbai", marks: 89 },
    { id: 35, name: "Rakesh Shetty", age: 21, course: "BBA", city: "Mangalore", marks: 74 },
    { id: 36, name: "Neelam Gupta", age: 22, course: "BCA", city: "Delhi", marks: 82 },
    { id: 37, name: "Abhishek Jadhav", age: 20, course: "BSc", city: "Pune", marks: 76 },
    { id: 38, name: "Isha Shah", age: 23, course: "MCA", city: "Ahmedabad", marks: 95 },
    { id: 39, name: "Sunil Pawar", age: 21, course: "BCom", city: "Nashik", marks: 72 },
    { id: 40, name: "Vaishali More", age: 22, course: "BBA", city: "Kolhapur", marks: 88 },

    { id: 41, name: "Kunal Patil", age: 21, course: "BCA", city: "Pune", marks: 79 },
    { id: 42, name: "Rashmi Singh", age: 20, course: "BSc IT", city: "Delhi", marks: 86 },
    { id: 43, name: "Gaurav Sharma", age: 22, course: "BCom", city: "Chandigarh", marks: 81 },
    { id: 44, name: "Snehal Desai", age: 23, course: "MCA", city: "Surat", marks: 92 },
    { id: 45, name: "Tejas Shinde", age: 21, course: "BBA", city: "Solapur", marks: 66 },
    { id: 46, name: "Monika Verma", age: 22, course: "BCA", city: "Indore", marks: 84 },
    { id: 47, name: "Aditya Kumar", age: 20, course: "BSc", city: "Patna", marks: 77 },
    { id: 48, name: "Priti Nair", age: 23, course: "MCA", city: "Kochi", marks: 90 },
    { id: 49, name: "Amol Chavan", age: 21, course: "BCom", city: "Satara", marks: 73 },
    { id: 50, name: "Reshma Patil", age: 22, course: "BBA", city: "Pune", marks: 87 },

    { id: 51, name: "Nilesh Pawar", age: 21, course: "BCA", city: "Kolhapur", marks: 75 },
    { id: 52, name: "Ankita Jain", age: 20, course: "BSc IT", city: "Udaipur", marks: 91 },
    { id: 53, name: "Raj Malhotra", age: 22, course: "BCom", city: "Delhi", marks: 80 },
    { id: 54, name: "Swati Kulkarni", age: 23, course: "MCA", city: "Pune", marks: 94 },
    { id: 55, name: "Yogesh Gaikwad", age: 21, course: "BBA", city: "Aurangabad", marks: 69 }
  ]

  mySubject$: Subject<any> = new Subject();
  

  getStudentList():any {
     this.mySubject$.asObservable();
    return this.mySubject$.next(this.student);
  }
}
