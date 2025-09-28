// import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         if (!window.api || !window.api.getProducts) {
//           throw new Error('API method not available');
//         }

//         const productsData = await window.api.getProducts();

//         // Добавляем логирование для отладки
//         console.log('Received products data:', productsData);
//         if (productsData && productsData.length > 0) {
//           console.log('First product sample:', productsData[0]);
//           console.log('Price type:', typeof productsData[0].price);
//           console.log('Price value:', productsData[0].price);
//         }

//         setProducts(productsData);
//       } catch (err) {
//         console.error('Error loading products:', err);
//         setError('Ошибка загрузки товаров. Проверьте подключение к базе данных.');
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProducts();
//   }, []);

//   if (loading) {
//     return <div className="loading">Загрузка товаров...</div>;
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <div className="error">{error}</div>
//         <button onClick={() => window.location.reload()} className="retry-button">
//           Попробовать снова
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров</h2>
//       <div className="products-grid">
//         {products.map(product => (
//           <ProductCard key={product.product_article} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;














// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [state, setState] = useState({
//     products: null,
//     loading: true,
//     error: null
//   });

//   const hasLoaded = useRef(false);

//   useEffect(() => {
//     if (hasLoaded.current) return;
//     hasLoaded.current = true;

//     async function loadProducts() {
//       try {
//         if (!window.api || !window.api.getProducts) {
//           throw new Error('API method not available');
//         }

//         console.log('Loading products...');
//         const productsData = await window.api.getProducts();

//         setState({
//           products: productsData,
//           loading: false,
//           error: null
//         });
//       } catch (err) {
//         console.error('Error loading products:', err);
//         setState({
//           products: null,
//           loading: false,
//           error: 'Ошибка загрузки товаров. Проверьте подключение к базе данных.'
//         });
//       }
//     }

//     loadProducts();
//   }, []);

//   console.log('ProductList rendered, loading:', state.loading, 'products:', state.products?.length);

//   if (state.loading || state.products === null) {
//     return <div className="loading">Загрузка товаров...</div>;
//   }

//   if (state.error) {
//     return (
//       <div className="error-container">
//         <div className="error">{state.error}</div>
//         <button onClick={() => window.location.reload()} className="retry-button">
//           Попробовать снова
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров</h2>
//       <div className="products-grid">
//         {state.products.map(product => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;















// import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]); // Просто пустой массив

//   useEffect(() => {
//     let isMounted = true;

//     async function loadProducts() {
//       try {
//         const productsData = await window.api.getProducts();
//         if (isMounted) {
//           setProducts(productsData || []); // Один раз устанавливаем данные
//         }
//       } catch (err) {
//         console.error('Error loading products:', err);
//         if (isMounted) {
//           setProducts([]); // Один раз устанавливаем пустой массив при ошибке
//         }
//       }
//     }

//     loadProducts();

//     return () => {
//       isMounted = false; // Защита от установки состояния после размонтирования
//     };
//   }, []); // Пустой массив зависимостей - выполнится только один раз

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров</h2>
//       <div className="products-grid">
//         {products.map(product => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;














// import { useEffect, useState } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     let isMounted = true;

//     async function loadProducts() {
//       try {
//         const productsData = await window.api.getProducts();
//         if (isMounted) {
//           // Берем только ПЕРВЫЙ товар
//           const firstProduct = productsData && productsData.length > 0 
//             ? [productsData[0]] 
//             : [];
//           setProducts(firstProduct);
//           console.log('✅ Загружен один товар:', firstProduct[0]?.product_name);
//         }
//       } catch (err) {
//         console.error('Error loading products:', err);
//         if (isMounted) {
//           setProducts([]);
//         }
//       }
//     }

//     loadProducts();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   console.log('🔄 ProductList рендерится, товаров:', products.length);

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров (ТЕСТ: 1 товар)</h2>
//       <div className="products-grid">
//         {products.map(product => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product} 
//           />
//         ))}
//       </div>
//       {products.length === 0 && <div>Нет товаров для отображения</div>}
//     </div>
//   );
// }

// export default ProductList;
























// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const initialized = useRef(false);

//   useEffect(() => {
//     // Защита от двойного вызова в Strict Mode
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начинаем загрузку товаров');

//     async function loadProducts() {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Товары загружены');

//         // Берем только первый товар для теста
//         const firstProduct = productsData && productsData.length > 0 
//           ? [productsData[0]] 
//           : [];
//         setProducts(firstProduct);

//       } catch (err) {
//         console.error('❌ Ошибка загрузки:', err);
//         setProducts([]);
//       }
//     }

//     loadProducts();
//   }, []);

//   console.log('🔄 ProductList рендерится, товаров:', products.length);

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров (ТЕСТ: 1 товар)</h2>
//       <div className="products-grid">
//         {products.map(product => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product} 
//           />
//         ))}
//       </div>
//       {products.length === 0 && <div>Загрузка...</div>}
//     </div>
//   );
// }

// export default ProductList;










// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// // Статический массив с одним товаром для теста
// const testProduct = [{
//   product_article: 'TEST001',
//   product_name: 'Тестовые ботинки',
//   price: 5000,
//   current_discount: 10,
//   quantity_in_stock: 5,
//   description: 'Тестовое описание товара',
//   photo_url: '',
//   category_name: 'Обувь',
//   manufacturer_name: 'Тестовый производитель',
//   supplier_name: 'Тестовый поставщик',
//   unit_of_measure: 'шт.'
// }];

// function ProductList() {
//   console.log('🔄 ProductList рендерится (статическая версия)');

//   return (
//     <div className="product-list-container">
//       <h2>Каталог товаров (СТАТИЧЕСКИЙ ТЕСТ)</h2>
//       <div className="products-grid">
//         {testProduct.map(product => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;






















// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [isReady, setIsReady] = useState(false);
//   const containerRef = useRef(null);
//   const initialized = useRef(false);

//   // Загружаем данные ОДИН раз при монтировании
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных');

//     const loadProducts = async () => {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Данные загружены:', productsData.length, 'товаров');

//         // Устанавливаем данные
//         setProducts(productsData || []);

//         // Даем браузеру время на обработку DOM
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             console.log('🎯 Показываем контент');
//             setIsReady(true);
//           });
//         });

//       } catch (error) {
//         console.error('❌ Ошибка загрузки:', error);
//         setProducts([]);
//         setIsReady(true);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Если данные еще не готовы - показываем статичный loading
//   if (!isReady) {
//     return (
//       <div 
//         ref={containerRef}
//         className="product-list-container product-list-container--loading"
//         style={{
//           opacity: 1,
//           transform: 'none',
//           animation: 'none'
//         }}
//       >
//         <div className="loading-state">
//           <h2>Загрузка каталога...</h2>
//           <div className="loading-placeholder">
//             Подождите, товары загружаются
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Когда все готово - рендерим основной контент
//   return (
//     <div 
//       ref={containerRef}
//       className="product-list-container product-list-container--ready"
//       style={{
//         opacity: 1,
//         transform: 'none', 
//         animation: 'none'
//       }}
//     >
//       <h2>Каталог товаров</h2>
//       <div className="products-grid">
//         {products.map((product, index) => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product}
//             index={index}
//           />
//         ))}
//       </div>
//       {products.length === 0 && (
//         <div className="no-products">Товары не найдены</div>
//       )}
//     </div>
//   );
// }

// export default ProductList;


































































// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [isReady, setIsReady] = useState(false);
//   const containerRef = useRef(null);
//   const initialized = useRef(false);

//   // Загружаем данные ОДИН раз при монтировании
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных');

//     const loadProducts = async () => {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Данные загружены:', productsData.length, 'товаров');

//         // Устанавливаем данные (порядок сохраняется как в БД)
//         setProducts(productsData || []);

//         // Даем браузеру время на обработку DOM
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             console.log('🎯 Показываем контент');
//             setIsReady(true);
//           });
//         });

//       } catch (error) {
//         console.error('❌ Ошибка загрузки:', error);
//         setProducts([]);
//         setIsReady(true);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Если данные еще не готовы - показываем статичный loading
//   if (!isReady) {
//     return (
//       <div 
//         ref={containerRef}
//         className="product-list-container product-list-container--loading"
//         style={{
//           opacity: 1,
//           transform: 'none',
//           animation: 'none'
//         }}
//       >
//         <div className="loading-state">
//           <h2>Загрузка каталога...</h2>
//           <div className="loading-placeholder">
//             Подождите, товары загружаются
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Когда все готово - рендерим основной контент
//   return (
//     <div 
//       ref={containerRef}
//       className="product-list-container product-list-container--ready"
//       style={{
//         opacity: 1,
//         transform: 'none', 
//         animation: 'none'
//       }}
//     >
//       <h2>Каталог товаров</h2>
//       <div className="products-grid">
//         {products.map((product) => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product}
//           />
//         ))}
//       </div>
//       {products.length === 0 && (
//         <div className="no-products">Товары не найдены</div>
//       )}
//     </div>
//   );
// }

// export default ProductList;





























//18_04
// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList({ user }) {  // Добавляем user как проп для логики ролей
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);  // Для отфильтрованных товаров
//   const [isReady, setIsReady] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');  // Для поиска
//   const [sortBy, setSortBy] = useState('name');  // Для сортировки (например, по имени, цене)
//   const [filterCategory, setFilterCategory] = useState('');  // Для фильтрации по категории (если есть)
//   const containerRef = useRef(null);
//   const initialized = useRef(false);

//   // Определяем, показывать ли элементы управления (фильтры, поиск, сортировка)
//   const showControls = user && user.role !== 'гость';  // Только для авторизованных пользователей

//   // Загружаем данные ОДИН раз при монтировании
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных');

//     const loadProducts = async () => {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Данные загружены:', productsData.length, 'товаров');

//         // Устанавливаем данные (порядок сохраняется как в БД)
//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);  // Изначально все товары

//         // Даем браузеру время на обработку DOM
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             console.log('🎯 Показываем контент');
//             setIsReady(true);
//           });
//         });

//       } catch (error) {
//         console.error('❌ Ошибка загрузки:', error);
//         setProducts([]);
//         setFilteredProducts([]);
//         setIsReady(true);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Эффект для фильтрации, поиска и сортировки (только если showControls)
//   useEffect(() => {
//     if (!showControls) {
//       setFilteredProducts(products);  // Для гостей - все товары без изменений
//       return;
//     }

//     let filtered = products;

//     // Поиск по названию или описанию
//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Фильтрация по категории (предполагаем, что у товара есть поле category)
//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category === filterCategory);
//     }

//     // Сортировка
//     filtered.sort((a, b) => {
//       if (sortBy === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sortBy === 'price') {
//         return a.price - b.price;
//       }
//       return 0;
//     });

//     setFilteredProducts(filtered);
//   }, [products, searchQuery, sortBy, filterCategory, showControls]);

//   // Обработчики для элементов управления
//   const handleSearchChange = (e) => setSearchQuery(e.target.value);
//   const handleSortChange = (e) => setSortBy(e.target.value);
//   const handleFilterChange = (e) => setFilterCategory(e.target.value);

//   // Если данные еще не готовы - показываем статичный loading
//   if (!isReady) {
//     return (
//       <div 
//         ref={containerRef}
//         className="product-list-container product-list-container--loading"
//         style={{
//           opacity: 1,
//           transform: 'none',
//           animation: 'none'
//         }}
//       >
//         <div className="loading-state">
//           <h2>Загрузка каталога...</h2>
//           <div className="loading-placeholder">
//             Подождите, товары загружаются
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Когда все готово - рендерим основной контент
//   return (
//     <div 
//       ref={containerRef}
//       className="product-list-container product-list-container--ready"
//       style={{
//         opacity: 1,
//         transform: 'none', 
//         animation: 'none'
//       }}
//     >
//       <h2> </h2>

//       {/* Элементы управления: поиск, фильтры, сортировка - только для авторизованных */}
//       {showControls && (
//         <div className="controls">
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Поиск по названию или описанию..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className="filters">
//             <select value={filterCategory} onChange={handleFilterChange}>
//               <option value="">Все категории</option>
//               {/* Здесь добавь опции категорий на основе данных, например: */}
//               <option value="Обувь">Обувь</option>
//               <option value="Аксессуары">Аксессуары</option>
//               {/* Или динамически из products: new Set(products.map(p => p.category)).forEach(...) */}
//             </select>
//           </div>
//           <div className="sort">
//             <select value={sortBy} onChange={handleSortChange}>
//               <option value="name">По названию</option>
//               <option value="price">По цене</option>
//             </select>
//           </div>
//         </div>
//       )}

//       <div className="products-grid">
//         {filteredProducts.map((product) => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product}
//           />
//         ))}
//       </div>
//       {filteredProducts.length === 0 && (
//         <div className="no-products">
//           {products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;













































// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';  // Добавьте этот импорт
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList({ user, setUser }) {  // Добавьте setUser в пропсы
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isReady, setIsReady] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortBy, setSortBy] = useState('name');
//   const [filterCategory, setFilterCategory] = useState('');
//   const containerRef = useRef(null);
//   const initialized = useRef(false);
//   const navigate = useNavigate();  // Добавьте навигацию

//   // Функция выхода для гостя
//   const handleLogout = () => {
//     setUser({ role: 'не авторизован', name: null });
//     navigate('/');  // Редирект на окно входа
//   };

//   // Определяем, показывать ли элементы управления
//   const showControls = user && user.role !== 'гость';

//   // Загружаем данные ОДИН раз при монтировании
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных');

//     const loadProducts = async () => {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Данные загружены:', productsData.length, 'товаров');

//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);

//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             console.log('🎯 Показываем контент');
//             setIsReady(true);
//           });
//         });

//       } catch (error) {
//         console.error('❌ Ошибка загрузки:', error);
//         setProducts([]);
//         setFilteredProducts([]);
//         setIsReady(true);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Эффект для фильтрации, поиска и сортировки
//   useEffect(() => {
//     if (!showControls) {
//       setFilteredProducts(products);
//       return;
//     }

//     let filtered = products;

//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category === filterCategory);
//     }

//     filtered.sort((a, b) => {
//       if (sortBy === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sortBy === 'price') {
//         return a.price - b.price;
//       }
//       return 0;
//     });

//     setFilteredProducts(filtered);
//   }, [products, searchQuery, sortBy, filterCategory, showControls]);

//   // Обработчики для элементов управления
//   const handleSearchChange = (e) => setSearchQuery(e.target.value);
//   const handleSortChange = (e) => setSortBy(e.target.value);
//   const handleFilterChange = (e) => setFilterCategory(e.target.value);

//   // Если данные еще не готовы - показываем статичный loading
//   if (!isReady) {
//     return (
//       <div 
//         ref={containerRef}
//         className="product-list-container product-list-container--loading"
//         style={{
//           opacity: 1,
//           transform: 'none',
//           animation: 'none'
//         }}
//       >
//         <div className="loading-state">
//           <h2>Загрузка каталога...</h2>
//           <div className="loading-placeholder">
//             Подождите, товары загружаются
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Когда все готово - рендерим основной контент
//   return (
//     <div 
//       ref={containerRef}
//       className="product-list-container product-list-container--ready"
//       style={{
//         opacity: 1,
//         transform: 'none', 
//         animation: 'none'
//       }}
//     >
//       {/* Добавленный header для гостя */}
//       <div className="header">
//         <div className="user-info">
//           <span className="user-info-label">Текущий пользователь:</span>
//           <span className="user-info-role">
//             Гость
//           </span>
//         </div>
//         <div className="logout-container">
//           <button className="logout-btn" onClick={handleLogout}>
//             Выход
//           </button>
//         </div>
//       </div>

//       <h2> </h2>

//       {/* Элементы управления: поиск, фильтры, сортировка - только для авторизованных */}
//       {showControls && (
//         <div className="controls">
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Поиск по названию или описанию..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className="filters">
//             <select value={filterCategory} onChange={handleFilterChange}>
//               <option value="">Все категории</option>
//               <option value="Обувь">Обувь</option>
//               <option value="Аксессуары">Аксессуары</option>
//             </select>
//           </div>
//           <div className="sort">
//             <select value={sortBy} onChange={handleSortChange}>
//               <option value="name">По названию</option>
//               <option value="price">По цене</option>
//             </select>
//           </div>
//         </div>
//       )}

//       <div className="products-grid">
//         {filteredProducts.map((product) => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product}
//           />
//         ))}
//       </div>
//       {filteredProducts.length === 0 && (
//         <div className="no-products">
//           {products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;










































// 19_41
// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";

// function ProductList({ user }) {  // Добавляем user как проп для логики ролей
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);  // Для отфильтрованных товаров
//   const [isReady, setIsReady] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');  // Для поиска
//   const [sortBy, setSortBy] = useState('name');  // Для сортировки (например, по имени, цене)
//   const [filterCategory, setFilterCategory] = useState('');  // Для фильтрации по категории (если есть)
//   const containerRef = useRef(null);
//   const initialized = useRef(false);

//   // Определяем, показывать ли элементы управления (фильтры, поиск, сортировка)
//   const showControls = user && user.role !== 'гость';  // Только для авторизованных пользователей

//   // Загружаем данные ОДИН раз при монтировании
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных');

//     const loadProducts = async () => {
//       try {
//         const productsData = await window.api.getProducts();
//         console.log('✅ Данные загружены:', productsData.length, 'товаров');

//         // Устанавливаем данные (порядок сохраняется как в БД)
//         setProducts(productsData || []);
//         setFilteredProducts(productsData || []);  // Изначально все товары

//         // Даем браузеру время на обработку DOM
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => {
//             console.log('🎯 Показываем контент');
//             setIsReady(true);
//           });
//         });

//       } catch (error) {
//         console.error('❌ Ошибка загрузки:', error);
//         setProducts([]);
//         setFilteredProducts([]);
//         setIsReady(true);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Эффект для фильтрации, поиска и сортировки (только если showControls)
//   useEffect(() => {
//     if (!showControls) {
//       setFilteredProducts(products);  // Для гостей - все товары без изменений
//       return;
//     }

//     let filtered = products;

//     // Поиск по названию или описанию
//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Фильтрация по категории (предполагаем, что у товара есть поле category)
//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category === filterCategory);
//     }

//     // Сортировка
//     filtered.sort((a, b) => {
//       if (sortBy === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sortBy === 'price') {
//         return a.price - b.price;
//       }
//       return 0;
//     });

//     setFilteredProducts(filtered);
//   }, [products, searchQuery, sortBy, filterCategory, showControls]);

//   // Обработчики для элементов управления
//   const handleSearchChange = (e) => setSearchQuery(e.target.value);
//   const handleSortChange = (e) => setSortBy(e.target.value);
//   const handleFilterChange = (e) => setFilterCategory(e.target.value);

//   // Если данные еще не готовы - показываем статичный loading
//   if (!isReady) {
//     return (
//       <div 
//         ref={containerRef}
//         className="product-list-container product-list-container--loading"
//         style={{
//           opacity: 1,
//           transform: 'none',
//           animation: 'none'
//         }}
//       >
//         <div className="loading-state">
//           <h2>Загрузка каталога...</h2>
//           <div className="loading-placeholder">
//             Подождите, товары загружаются
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Когда все готово - рендерим основной контент
//   return (
//     <div 
//       ref={containerRef}
//       className="product-list-container product-list-container--ready"
//       style={{
//         opacity: 1,
//         transform: 'none', 
//         animation: 'none'
//       }}
//     >
//       <h2> </h2>

//       {/* Элементы управления: поиск, фильтры, сортировка - только для авторизованных */}
//       {showControls && (
//         <div className="controls">
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Поиск по названию или описанию..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>
//           <div className="filters">
//             <select value={filterCategory} onChange={handleFilterChange}>
//               <option value="">Все категории</option>
//               {/* Здесь добавь опции категорий на основе данных, например: */}
//               <option value="Обувь">Обувь</option>
//               <option value="Аксессуары">Аксессуары</option>
//               {/* Или динамически из products: new Set(products.map(p => p.category)).forEach(...) */}
//             </select>
//           </div>
//           <div className="sort">
//             <select value={sortBy} onChange={handleSortChange}>
//               <option value="name">По названию</option>
//               <option value="price">По цене</option>
//             </select>
//           </div>
//         </div>
//       )}

//       <div className="products-grid">
//         {filteredProducts.map((product) => (
//           <ProductCard 
//             key={product.product_article} 
//             product={product}
//           />
//         ))}
//       </div>
//       {filteredProducts.length === 0 && (
//         <div className="no-products">
//           {products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;
































import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Добавляем навигацию
import ProductCard from './ProductCard';
import "../styles/ProductList.css";

function ProductList({ user, setUser }) {  // Добавляем setUser в пропсы
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isReady, setIsReady] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortBy, setSortBy] = useState('name');
	const [filterCategory, setFilterCategory] = useState('');
	const containerRef = useRef(null);
	const initialized = useRef(false);
	const navigate = useNavigate(); // Добавляем навигацию

	// Функция выхода для гостя
	// const handleLogout = () => {
	//   setUser({ role: 'не авторизован', name: null });
	//   navigate('/');  // Редирект на окно входа
	// };

	const handleLogout = () => {
		setUser({ role: 'не авторизован', name: null });
		// Полный переход на главную страницу вместо history.back()
		navigate('/', { replace: true });
	};



	// Определяем, показывать ли элементы управления
	const showControls = user && user.role !== 'гость';

	// Загружаем данные ОДИН раз при монтировании
	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		console.log('🚀 Начало загрузки данных');

		const loadProducts = async () => {
			try {
				const productsData = await window.api.getProducts();
				console.log('✅ Данные загружены:', productsData.length, 'товаров');

				setProducts(productsData || []);
				setFilteredProducts(productsData || []);

				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						console.log('🎯 Показываем контент');
						setIsReady(true);
					});
				});

			} catch (error) {
				console.error('❌ Ошибка загрузки:', error);
				setProducts([]);
				setFilteredProducts([]);
				setIsReady(true);
			}
		};

		loadProducts();
	}, []);




	// Эффект для фильтрации, поиска и сортировки (только если showControls)
	// useEffect(() => {
	//   if (!showControls) {
	//     setFilteredProducts(products);
	//     return;
	//   }

	//   let filtered = products;

	//   if (searchQuery) {
	//     filtered = filtered.filter(product =>
	//       product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
	//       product.description?.toLowerCase().includes(searchQuery.toLowerCase())
	//     );
	//   }

	//   if (filterCategory) {
	//     filtered = filtered.filter(product => product.category === filterCategory);
	//   }

	//   filtered.sort((a, b) => {
	//     if (sortBy === 'name') {
	//       return a.name.localeCompare(b.name);
	//     } else if (sortBy === 'price') {
	//       return a.price - b.price;
	//     }
	//     return 0;
	//   });

	//   setFilteredProducts(filtered);
	// }, [products, searchQuery, sortBy, filterCategory, showControls]);




	useEffect(() => {
		if (!showControls) {
			setFilteredProducts(products);
			return;
		}

		let filtered = products;

		if (searchQuery) {
			filtered = filtered.filter(product =>
				product?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product?.description?.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		if (filterCategory) {
			filtered = filtered.filter(product => product?.category === filterCategory);
		}

		// Безопасная сортировка с проверками
		filtered.sort((a, b) => {
			if (sortBy === 'name') {
				return (a?.name || '').localeCompare(b?.name || '');
			} else if (sortBy === 'price') {
				return (Number(a?.price) || 0) - (Number(b?.price) || 0);
			}
			return 0;
		});

		setFilteredProducts(filtered);
	}, [products, searchQuery, sortBy, filterCategory, showControls]);





	const handleSearchChange = (e) => setSearchQuery(e.target.value);
	const handleSortChange = (e) => setSortBy(e.target.value);
	const handleFilterChange = (e) => setFilterCategory(e.target.value);

	if (!isReady) {
		return (
			<div
				ref={containerRef}
				className="product-list-container product-list-container--loading"
			>
				<div className="loading-state">
					<h2>Загрузка каталога...</h2>
					<div className="loading-placeholder">
						Подождите, товары загружаются
					</div>
				</div>
			</div>
		);
	}

	return (
		<>

			{user && user.role === 'гость' && (
				<div className="compact-header">
					<div className="user-compact-info">
						<div className="user-name">Гость</div>
						<div className="user-role">Неавторизованный пользователь</div>
					</div>
					<button className="logout-btn-compact" onClick={handleLogout}>
						Выход
					</button>
				</div>
			)}



			<div className="product-list-wrapper">



				<div
					ref={containerRef}
					className="product-list-container product-list-container--ready"
				>
					<h2> </h2>

					{showControls && (
						<div className="controls">
							<div className="search">
								<input
									type="text"
									placeholder="Поиск по названию или описанию..."
									value={searchQuery}
									onChange={handleSearchChange}
								/>
							</div>
							<div className="filters">
								<select value={filterCategory} onChange={handleFilterChange}>
									<option value="">Все категории</option>
									<option value="Обувь">Обувь</option>
									<option value="Аксессуары">Аксессуары</option>
								</select>
							</div>
							<div className="sort">
								<select value={sortBy} onChange={handleSortChange}>
									<option value="name">По названию</option>
									<option value="price">По цене</option>
								</select>
							</div>
						</div>
					)}

					<div className="products-grid">
						{filteredProducts.map((product) => (
							<ProductCard
								key={product.product_article}
								product={product}
							/>
						))}
					</div>
					{filteredProducts.length === 0 && (
						<div className="no-products">
							{products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ProductList;
