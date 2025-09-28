// import { useNavigate } from "react-router";
// import "../styles/LoginForm.css";

// function LoginForm({ setUser }) {
//   const navigate = useNavigate();

//   async function submitHandler(e) {
//     e.preventDefault()
//     const user = {
//       login: e.target.login.value,
//       password: e.target.password.value,
//     }

//     try {
//       const result = await window.api.authorizeUser(user);

//       if (result) {
//         const { role, name, userId } = result;
//         console.log('Authorization successful:', role, name);
//         setUser({ role, name, userId });


//         if (role === 'Администратор' || role === 'Менеджер') {
//           navigate('/admin');
//         } else if (role === 'Авторизированный клиент') {
//           navigate('/main');
//         }
//       } else {
//         console.log('Authorization failed');
//       }
//     } catch (error) {
//       console.error('Authorization error:', error);
//     }

//     document.querySelector('form').reset();
//   }

//   return (
//     <>
//       <h4>Введите логин и пароль, чтобы войти</h4>
//       <form onSubmit={(e) => submitHandler(e)}>
//         <label htmlFor="login">Логин:</label>
//         <input id="login" type="text" required />
//         <label htmlFor="password">Пароль:</label>
//         <input id="password" type="password" required />
//         <button type="submit">Войти</button>
//       </form>
//       <h5>Перейти на экран просмотра товаров в виде гостя</h5>
//       <button onClick={() => {
//         setUser({ role: 'гость' });
//         navigate('/main');
//       }}>Посмотреть товары</button>
//     </>
//   )
// }

// export default LoginForm;




















import { useNavigate } from "react-router";
import "../styles/LoginForm.css";

function LoginForm({ setUser }) {
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    const user = {
      login: e.target.login.value,
      password: e.target.password.value,
    };

    try {
      const result = await window.api.authorizeUser(user);

      if (result) {
        const { role, name, userId } = result;
        console.log('Authorization successful:', role, name);
        setUser({ role, name, userId });

        // ИСПРАВЛЕНИЕ: Отдельный маршрут для клиентов
        if (role === 'Администратор') {
          navigate('/admin');
        } else if (role === 'Менеджер') {
          navigate('/manager');  // <-- Отдельный маршрут для менеджеров
        } else if (role === 'Авторизированный клиент') {
          navigate('/client');
        } else {
          console.log('Unknown role, redirecting to main');
          navigate('/main');
        }
      } else {
        console.log('Authorization failed');
        alert('Неверный логин или пароль');  // Добавил для UX
      }
    } catch (error) {
      console.error('Authorization error:', error);
      alert('Ошибка авторизации. Проверь соединение.');  // Добавил для UX
    }

    // Reset формы после попытки (даже если ошибка)
    e.target.reset();
  }




  return (
    <div className="login-container">
      <div className="login-form">
        <h4>Введите логин и пароль, чтобы войти</h4>
        <form onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="login">Логин:</label>
          <input id="login" type="text" required />
          <label htmlFor="password">Пароль:</label>
          <input id="password" type="password" required />
          <button type="submit">Войти</button>
        </form>
        <div className="guest-section">
          <h5>Перейти на экран просмотра товаров как гость</h5>
          <button className="guest-button" onClick={() => {
            setUser({ role: 'гость' });
            navigate('/main');
          }}>Посмотреть товары</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
