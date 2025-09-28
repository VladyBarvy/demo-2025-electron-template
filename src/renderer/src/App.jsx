// import { useEffect, useState } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"

// function App() {

//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       {user.name ? <h1>{`${user.name} Роль: ${user.role}`}</h1> : <h1>Гость</h1>}
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />

//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App




















// import { useEffect, useState } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"
// import './styles/App.css'

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div className="user-info">
//         <span className="user-info-label">Текущая роль пользователя:</span>
//         <span className="user-info-role">
//           {user.name ? `${user.name} (${user.role})` : 'Гость'}
//         </span>
//       </div>
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />

//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App
























// import { useEffect, useState } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"
// import ProductList from "./components/ProductList.jsx"
// import './styles/App.css'

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div className="user-info">
//         <span className="user-info-label">Текущая роль пользователя:</span>
//         <span className="user-info-role">
//           {user.name ? `${user.name} (${user.role})` : 'Гость'}
//         </span>
//       </div>
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />
//           <Route path='/main' element={<ProductList />} />
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App













// import { useState, useCallback } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"
// import ProductList from "./components/ProductList.jsx"
// import './styles/App.css'

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   // Стабилизируем функцию setUser
//   const stableSetUser = useCallback((userData) => {
//     setUser(userData);
//   }, []);

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div className="user-info">
//         <span className="user-info-label">Текущая роль пользователя:</span>
//         <span className="user-info-role">
//           {user.name ? `${user.name} (${user.role})` : 'Гость'}
//         </span>
//       </div>
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={stableSetUser} />} />
//           <Route path='/main' element={<ProductList />} />
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App
































// import { useState, useEffect } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"
// import ProductList from "./components/ProductList.jsx"
// //import AdminPanel from "./components/AdminPanel.jsx"
// //import ClientPanel from "./components/ClientPanel.jsx"
// import './styles/App.css'

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   useEffect(() => {
//     console.log('🏠 App component mounted');
//   }, []);

//   console.log('🔄 App рендерится');

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div className="user-info">
//         <span className="user-info-label">Текущая роль пользователя:</span>
//         <span className="user-info-role">
//           {user.name ? `${user.name} (${user.role})` : 'Гость'}
//         </span>
//       </div>
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />
//           <Route path='/main' element={<ProductList user={user} />} />
//           {/* <Route path='/admin' element={<AdminPanel user={user} />} /> */}
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App















//17_21
// import { useState, useEffect } from 'react'
// import { Routes, Route, HashRouter } from 'react-router'
// import shoesWorldLogo from './assets/icon.png'
// import LoginForm from "./components/LoginForm.jsx"
// import ProductList from "./components/ProductList.jsx"
// //import AdminPanel from "./components/AdminPanel.jsx"  // Раскомментировал для админов
// import ClientPanel from "./components/ClientPanel.jsx"  // Добавил для клиентов
// import './styles/App.css'

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null })

//   useEffect(() => {
//     console.log('🏠 App component mounted');
//   }, []);

//   console.log('🔄 App рендерится');

//   return (
//     <>
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="icon"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
//       <div className="user-info">
//         <span className="user-info-label">Текущая роль пользователя:</span>
//         <span className="user-info-role">
//           {user.name ? `${user.name} (${user.role})` : 'Гость'}
//         </span>
//       </div>
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />
//           <Route path='/main' element={<ProductList user={user} />} />
//           <Route path='/client' element={<ClientPanel user={user} />} />
//           {/* <Route path='/admin' element={<AdminPanel user={user} />} /> */}
//         </Routes>
//       </HashRouter>
//     </>
//   )
// }

// export default App
















// import { useState, useEffect } from 'react';
// import { Routes, Route, HashRouter } from 'react-router';
// import shoesWorldLogo from './assets/icon.png';
// import LoginForm from "./components/LoginForm.jsx";
// import ProductList from "./components/ProductList.jsx";
// //import AdminPanel from "./components/AdminPanel.jsx";  // Раскомментировал для поддержки админов
// import ClientPanel from "./components/ClientPanel.jsx";  // Для клиентов
// import './styles/App.css';

// function App() {
//   const [user, setUser] = useState({ role: 'не авторизован', name: null });

//   useEffect(() => {
//     console.log('🏠 App component mounted');
//   }, []);

//   console.log('🔄 App рендерится');

//   return (
//     <>
//       {/* Логотип отображается на всех страницах для consistency */}
//       <img
//         className="logo"
//         src={shoesWorldLogo}
//         alt="Shoes World Logo"
//         style={{ display: 'block', margin: '0 auto' }}
//       />
      
//       <HashRouter>
//         <Routes>
//           <Route path='/' element={<LoginForm setUser={setUser} />} />
//           {/* <Route path='/main' element={<ProductList user={user} />} /> */}
//           <Route path='/main' element={<ProductList user={user} setUser={setUser} />} />
//           <Route 
//             path='/client' 
//             element={<ClientPanel user={user} setUser={setUser} />}  // Передаём setUser для выхода
//           />
//           {/* <Route 
//             path='/admin' 
//             element={<AdminPanel user={user} setUser={setUser} />}  // Аналогично для админов
//           /> */}
//         </Routes>
//       </HashRouter>
//     </>
//   );
// }

// export default App;





























import { useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router';
import shoesWorldLogo from './assets/icon.png';
import LoginForm from "./components/LoginForm.jsx";
import ProductList from "./components/ProductList.jsx";
//import AdminPanel from "./components/AdminPanel.jsx";
import ManagerPanel from "./components/ManagerPanel.jsx";
import ClientPanel from "./components/ClientPanel.jsx";
import './styles/App.css';

function App() {
  const [user, setUser] = useState({ role: 'не авторизован', name: null });

  useEffect(() => {
    console.log('🏠 App component mounted');
  }, []);

  console.log('🔄 App рендерится');

  return (
    <>
      {/* Логотип отображается на всех страницах для consistency */}
      <img
        className="logo"
        src={shoesWorldLogo}
        alt="Shoes World Logo"
        style={{ display: 'block', margin: '0 auto' }}
      />
      
      <HashRouter>
        <Routes>
          <Route path='/' element={<LoginForm setUser={setUser} />} />
          <Route path='/main' element={<ProductList user={user} setUser={setUser} />} />
          <Route path='/client' element={<ClientPanel user={user} setUser={setUser} />} />
          {/* <Route path='/admin' element={<AdminPanel user={user} setUser={setUser} />} /> */}
          <Route path='/manager' element={<ManagerPanel user={user} setUser={setUser} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
