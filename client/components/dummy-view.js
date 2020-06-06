// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { history } from '../redux'
// import Header from './header'

// import { updateUsername } from '../redux/reducers/repositories'

// const Dummy = () => {
//   const dispatch = useDispatch()
//   const username = useSelector((store) => store.repositories.username)

//   const handleClick = () => {
//     history.push(`/${username}`)
//   }

//   return (
//     <div>
//       <Header />
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-teal-400 font-bold rounded-lg border shadow-lg p-10">
//           <input
//             className="mt-2 border rounded py-2 px-3 text-black mr-2 mt-2"
//             type="text"
//             value={username}
//             onChange={(e) => {
//               dispatch(updateUsername(e.target.value))
//             }}
//           />
//           <button
//             className="bg-white hover:bg-gray-100 text-black font-semibold py-2 px-3 mt-2 border border-gray-400 rounded shadow"
//             onClick={handleClick}
//             id="search-button"
//             type="button"
//           >
//             GO GIT
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// Dummy.propTypes = {}

// export default React.memo(Dummy)
