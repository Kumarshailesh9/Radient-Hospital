'use client';

 export default function AdminPanel() {
  return (
    <h1>Page Not Availabe</h1>
  )
 }

// import { useEffect, useState } from 'react';

// interface Appointment {
//   name: string;
//   email: string;
//   phone: string;
//   date: string;
//   time: string;
//   reason: string;
//   department: string;
// }

// export default function AdminPanel() {
//   const [appointments, setAppointments] = useState<Appointment[]>([]);
//   const [viewMode, setViewMode] = useState<'table' | 'list'>('table');
//   const [filterDate, setFilterDate] = useState('');
//   const [filterDept, setFilterDept] = useState('');

//   const fetchAppointments = async () => {
//     try {
//       const res = await fetch('/api/appoinment');
//       const data = await res.json();
//       setAppointments(data);
//     } catch (err) {
//       console.error('Failed to fetch appointments', err);
//     }
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const filteredAppointments = appointments.filter((appt) => {
//     const dateMatch = filterDate ? appt.date === filterDate : true;
//     const deptMatch = filterDept ? appt.department === filterDept : true;
//     return dateMatch && deptMatch;
//   });

//   const departments = Array.from(new Set(appointments.map(a => a.department)));
  

//   return (
//     <main className="p-8 bg-gray-100 min-h-screen">
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <h1 className="text-3xl font-bold">Admin Panel - All Appointments</h1>
        
//         <div className="flex flex-col md:flex-row gap-2 md:items-center">
//           <select
//             className="border px-3 py-2 rounded shadow-sm"
//             value={viewMode}
//             onChange={(e) => setViewMode(e.target.value as 'table' | 'list')}
//           >
//             <option value="table">Table View</option>
//             <option value="list">List View</option>
//           </select>

//           <input
//             type="date"
//             value={filterDate}
//             onChange={(e) => setFilterDate(e.target.value)}
//             className="border px-3 py-2 rounded shadow-sm"
//           />

//           <select
//             value={filterDept}
//             onChange={(e) => setFilterDept(e.target.value)}
//             className="border px-3 py-2 rounded shadow-sm"
//           >
//             <option value="">All Departments</option>
//             {departments.map((dept, index) => (
//               <option key={index} value={dept}>
//                 {dept}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {filteredAppointments.length === 0 ? (
//         <p className="text-center text-gray-500 mt-10">No appointments found for selected filters.</p>
//       ) : viewMode === 'table' ? (
//         <table className="w-full max-w-6xl table-auto border-collapse border border-gray-300 mt-4">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Email</th>
//               <th className="border px-4 py-2">Phone</th>
//               <th className="border px-4 py-2">Date</th>
//               <th className="border px-4 py-2">Time</th>
//               <th className="border px-4 py-2">Reason</th>
//               <th className="border px-4 py-2">Department</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredAppointments.map((appt, index) => (
//               <tr key={index} className="text-sm text-gray-700">
//                 <td className="border px-4 py-2">{appt.name}</td>
//                 <td className="border px-4 py-2">{appt.email}</td>
//                 <td className="border px-4 py-2">{appt.phone}</td>
//                 <td className="border px-4 py-2">{appt.date}</td>
//                 <td className="border px-4 py-2">{appt.time}</td>
//                 <td className="border px-4 py-2">{appt.reason}</td>
//                 <td className="border px-4 py-2 capitalize">{appt.department}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <ul className="grid gap-4 mt-4 max-w-6xl">
//           {filteredAppointments.map((appt, index) => (
//             <li key={index} className="bg-white p-4 rounded shadow">
//               <p><strong>Name:</strong> {appt.name}</p>
//               <p><strong>Email:</strong> {appt.email}</p>
//               <p><strong>Phone:</strong> {appt.phone}</p>
//               <p><strong>Date:</strong> {appt.date}</p>
//               <p><strong>Time:</strong> {appt.time}</p>
//               <p><strong>Reason:</strong> {appt.reason}</p>
//               <p><strong>Department:</strong> {appt.department}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </main>
//   );
// }
