'use client';

import { useRouter } from 'next/navigation';

export default function LoginPage() {
      return (
        <h1>Login Page Not available at this time</h1>
      )
}
// import { useState } from 'react';

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch('/api/admin/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       if (res.ok) {
//         router.push('/admin');
//       } else {
//         const data = await res.json();
//         alert(data.message || 'Login failed');
//       }
//     } catch (err) {
//       alert('Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleLogin}
//       className="max-w-sm mx-auto mt-40 space-y-4 p-4 bg-white shadow"
//     >
//       <h1 className="text-2xl font-bold text-center">Login</h1>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="w-full p-2 border rounded"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         className="w-full p-2 border rounded"
//         required
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 text-white p-2 rounded"
//       >
//         {loading ? 'Logging in...' : 'Login'}
//       </button>
//     </form>
//   );
// }



