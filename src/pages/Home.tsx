// import { useEffect } from 'react';
// // import { RQ_KEY, useGetQueryData, useRepositories } from '../repositories';
// import { Link } from 'react-router-dom';
// // import { AuthResponse } from '../repositories/authentication.repository';

// export const Home = () => {
//   const { usePostLogout, usePostGoogleLogin } = useRepositories();
//   const { refetch } = usePostGoogleLogin();
//   useEffect(() => {
//     refetch();
//   }, []);

//   const { mutateAsync: logout } = usePostLogout();

//   const data = useGetQueryData<AuthResponse>([RQ_KEY.USER_DATA]);

//   const onClickLogout = async (e: any) => {
//     e.preventDefault();
//     await logout();
//   };

//   return (
//     <>
//       <div className="sansation flex w-full justify-end gap-4 bg-[#010E1A] px-4 py-4 text-[16px]">
//         {data?.user?.isAuthenticated ? (
//           <button onClick={e => onClickLogout(e)}>Logout</button>
//         ) : (
//           <>
//             <Link to="/register">Register</Link>
//             <Link to="/sign-in">Sign In</Link>
//           </>
//         )}
//       </div>
//     </>
//   );
// };
