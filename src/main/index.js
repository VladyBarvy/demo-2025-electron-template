import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

import connectionDataBase from './db';







async function authorize(event, user) {
  const { login, password } = user;

  try {
    const query = `
      SELECT u.user_id, u.full_name, u.password_hash, r.role_name 
      FROM users u
      JOIN roles r ON u.role_id = r.role_id
      WHERE u.login = \$1
    `;

    const response = await global.dbclient.query(query, [login]);

    if (response.rows.length > 0) {
      const userData = response.rows[0];

      if (userData.password_hash === password) {
        return {
          role: userData.role_name,
          name: userData.full_name,
          userId: userData.user_id
        };
      } else {
        dialog.showErrorBox('Ошибка авторизации', 'Неверный логин или пароль');
        return null;
      }
    } else {
      dialog.showErrorBox('Ошибка авторизации', 'Пользователь не найден');
      return null;
    }
  } catch (e) {
    console.error('Ошибка при авторизации:', e);
    dialog.showErrorBox('Ошибка', 'Произошла ошибка при авторизации');
    return null;
  }
}









async function getProducts() {
  try {
    const query = `
      SELECT 
        p.*,
        c.category_name,
        m.manufacturer_name,
        s.supplier_name
      FROM products p
      JOIN categories c ON p.category_id = c.category_id
      JOIN manufacturers m ON p.manufacturer_id = m.manufacturer_id
      JOIN suppliers s ON p.supplier_id = s.supplier_id
      ORDER BY p.product_article ASC
    `;

    const response = await global.dbclient.query(query);

    if (response.rows.length > 0) {
      // Преобразуем числовые поля
      const products = response.rows.map(product => ({
        ...product,
        price: Number(product.price),
        current_discount: Number(product.current_discount),
        quantity_in_stock: Number(product.quantity_in_stock)
      }));

      console.log('📦 Products loaded successfully:', products.length, 'items');
      return products;
    } else {
      console.log('📦 No products found in database');
      return [];
    }
  } catch (error) {
    console.error('❌ Ошибка при загрузке товаров:', error);
    dialog.showErrorBox('Ошибка', 'Произошла ошибка при загрузке товаров из базы данных');
    return [];
  }
}












function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 950,
    height: 900,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId('com.electron')

  global.dbclient = await connectionDataBase();

  ipcMain.handle('authorizeUser', authorize)
  ipcMain.handle('get-products', getProducts)


  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

































// import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
// import { join } from 'path'
// import { electronApp, optimizer, is } from '@electron-toolkit/utils'
// import icon from '../../resources/icon.png?asset'


// import connectionDataBase from './db';


// async function authorize(event, user) {
//   const { login, password } = user;

//   try {
//     const query = `
//       SELECT u.user_id, u.full_name, u.password_hash, r.role_name 
//       FROM users u
//       JOIN roles r ON u.role_id = r.role_id
//       WHERE u.login = $1
//     `;

//     const response = await global.dbclient.query(query, [login]);

//     if (response.rows.length > 0) {
//       const userData = response.rows[0];


//       if (userData.password_hash === password) {
//         return {
//           role: userData.role_name,
//           name: userData.full_name,
//           userId: userData.user_id
//         };
//       } else {
//         dialog.showErrorBox('Ошибка авторизации', 'Неверный логин или пароль');
//         return null;
//       }
//     } else {
//       dialog.showErrorBox('Ошибка авторизации', 'Пользователь не найден');
//       return null;
//     }
//   } catch (e) {
//     console.error('Ошибка при авторизации:', e);
//     dialog.showErrorBox('Ошибка', 'Произошла ошибка при авторизации');
//     return null;
//   }
// }




// function createWindow() {
//   const mainWindow = new BrowserWindow({
//     width: 900,
//     height: 670,
//     show: false,
//     autoHideMenuBar: true,
//     ...(process.platform === 'linux' ? { icon } : {}),
//     webPreferences: {
//       preload: join(__dirname, '../preload/index.js'),
//       sandbox: false
//     }
//   })

//   mainWindow.on('ready-to-show', () => {
//     mainWindow.show()
//   })

//   mainWindow.webContents.setWindowOpenHandler((details) => {
//     shell.openExternal(details.url)
//     return { action: 'deny' }
//   })

//   if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
//     mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
//   } else {
//     mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
//   }
// }

// app.whenReady().then(async () => {
//   electronApp.setAppUserModelId('com.electron')

//   global.dbclient = await connectionDataBase();

//   ipcMain.handle('authorizeUser', authorize)


//   ipcMain.handle('get-products', async () => {
//     try {
//       const query = `
//       SELECT 
//         p.*,
//         c.category_name,
//         m.manufacturer_name,
//         s.supplier_name
//       FROM products p
//       JOIN categories c ON p.category_id = c.category_id
//       JOIN manufacturers m ON p.manufacturer_id = m.manufacturer_id
//       JOIN suppliers s ON p.supplier_id = s.supplier_id
      
//     `;
//       const result = await global.dbclient.query(query);

//       // Преобразуем числовые поля
//       const products = result.rows.map(product => ({
//         ...product,
//         price: Number(product.price),
//         current_discount: Number(product.current_discount),
//         quantity_in_stock: Number(product.quantity_in_stock)
//       }));

//       return products;
//     } catch (error) {
//       console.error('Database error:', error);
//       throw error;
//     }
//   });



//   app.on('browser-window-created', (_, window) => {
//     optimizer.watchWindowShortcuts(window)
//   })

//   createWindow()

//   app.on('activate', function () {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })


// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })
