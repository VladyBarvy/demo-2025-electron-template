// import { useEffect, useState, useRef } from 'react';
// import ProductCard from './ProductCard';
// import "../styles/ProductList.css";  // Переиспользуем стили от ProductList для一致ности внешнего вида

// function ClientPanel({ user }) {  // Принимаем user для возможного приветствия или дополнительной логики
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);  // Для отфильтрованных товаров
//   const [isReady, setIsReady] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');  // Для поиска
//   const [sortBy, setSortBy] = useState('name');  // Для сортировки (по имени, цене)
//   const [filterCategory, setFilterCategory] = useState('');  // Для фильтрации по категории
//   const containerRef = useRef(null);
//   const initialized = useRef(false);

//   // Всегда показываем элементы управления для клиента
//   const showControls = true;

//   // Загружаем данные ОДИН раз при монтировании (аналогично ProductList)
//   useEffect(() => {
//     if (initialized.current) return;
//     initialized.current = true;

//     console.log('🚀 Начало загрузки данных для клиента');

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

//   // Эффект для фильтрации, поиска и сортировки (всегда активен для клиента)
//   useEffect(() => {
//     let filtered = products;

//     // Поиск по названию или описанию (используем product_name для consistency с ProductCard)
//     if (searchQuery) {
//       filtered = filtered.filter(product =>
//         product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }

//     // Фильтрация по категории (используем category_name или category – адаптируй под твои данные)
//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category_name === filterCategory || product.category === filterCategory);
//     }

//     // Сортировка
//     filtered.sort((a, b) => {
//       if (sortBy === 'name') {
//         return a.product_name?.localeCompare(b.product_name) || 0;
//       } else if (sortBy === 'price') {
//         return (Number(a.price) || 0) - (Number(b.price) || 0);
//       }
//       return 0;
//     });

//     setFilteredProducts(filtered);
//   }, [products, searchQuery, sortBy, filterCategory]);

//   // Обработчики для элементов управления
//   const handleSearchChange = (e) => setSearchQuery(e.target.value);
//   const handleSortChange = (e) => setSortBy(e.target.value);
//   const handleFilterChange = (e) => setFilterCategory(e.target.value);

//   // Если данные еще не готовы - показываем статичный loading (аналогично ProductList)
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

//   // Когда все готово - рендерим основной контент (похож на ProductList для гостей, но с controls)
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

//       {/* Приветствие для клиента (опционально, для персонализации) */}
//       {user && (
//         <div className="client-greeting">
//           Добро пожаловать, {user.name}! Вы можете просматривать и фильтровать товары.
//         </div>
//       )}

//       {/* Элементы управления: поиск, фильтры, сортировка - всегда для клиента */}
//       <div className="controls">
//         <div className="search">
//           <input
//             type="text"
//             placeholder="Поиск по названию или описанию..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="filters">
//           <select value={filterCategory} onChange={handleFilterChange}>
//             <option value="">Все категории</option>
//             {/* Динамически генерируем категории из products для полноты */}
//             {[...new Set(products.map(p => p.category_name || p.category))].filter(cat => cat).map(cat => (
//               <option key={cat} value={cat}>{cat}</option>
//             ))}
//             {/* Или статические, если нужно: <option value="Обувь">Обувь</option> */}
//           </select>
//         </div>
//         <div className="sort">
//           <select value={sortBy} onChange={handleSortChange}>
//             <option value="name">По названию</option>
//             <option value="price">По цене</option>
//           </select>
//         </div>
//       </div>

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

// export default ClientPanel;



























// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';  // Для редиректа при выходе
// import ProductCard from './ProductCard';
// import "../styles/ClientPanel.css";

// function ClientPanel({ user, setUser }) {  // Теперь принимаем setUser для выхода
// 	const navigate = useNavigate();
// 	const [products, setProducts] = useState([]);
// 	const [filteredProducts, setFilteredProducts] = useState([]);  // Для отфильтрованных товаров
// 	const [isReady, setIsReady] = useState(false);
// 	const [searchQuery, setSearchQuery] = useState('');  // Для поиска
// 	const [sortBy, setSortBy] = useState('name');  // Для сортировки (по имени, цене)
// 	const [filterCategory, setFilterCategory] = useState('');  // Для фильтрации по категории
// 	const containerRef = useRef(null);
// 	const initialized = useRef(false);

// 	// Всегда показываем элементы управления для клиента
// 	const showControls = true;

// 	// Функция выхода: сбрасываем user и перенаправляем на вход
// 	const handleLogout = () => {
// 		setUser({ role: 'не авторизован', name: null });  // Сбрасываем на исходное состояние
// 		navigate('/');  // Редирект на окно входа
// 	};

// 	// Загружаем данные ОДИН раз при монтировании (аналогично ProductList)
// 	useEffect(() => {
// 		if (initialized.current) return;
// 		initialized.current = true;

// 		console.log('🚀 Начало загрузки данных для клиента');

// 		const loadProducts = async () => {
// 			try {
// 				const productsData = await window.api.getProducts();
// 				console.log('✅ Данные загружены:', productsData.length, 'товаров');

// 				// Устанавливаем данные (порядок сохраняется как в БД)
// 				setProducts(productsData || []);
// 				setFilteredProducts(productsData || []);  // Изначально все товары

// 				// Даем браузеру время на обработку DOM
// 				requestAnimationFrame(() => {
// 					requestAnimationFrame(() => {
// 						console.log('🎯 Показываем контент');
// 						setIsReady(true);
// 					});
// 				});

// 			} catch (error) {
// 				console.error('❌ Ошибка загрузки:', error);
// 				setProducts([]);
// 				setFilteredProducts([]);
// 				setIsReady(true);
// 			}
// 		};

// 		loadProducts();
// 	}, []);

// 	// Эффект для фильтрации, поиска и сортировки (всегда активен для клиента)
// 	useEffect(() => {
// 		let filtered = products;

// 		// Поиск по названию или описанию (используем product_name для consistency с ProductCard)
// 		if (searchQuery) {
// 			filtered = filtered.filter(product =>
// 				product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// 				product.description?.toLowerCase().includes(searchQuery.toLowerCase())
// 			);
// 		}

// 		// Фильтрация по категории (используем category_name или category – адаптируй под твои данные)
// 		if (filterCategory) {
// 			filtered = filtered.filter(product => product.category_name === filterCategory || product.category === filterCategory);
// 		}

// 		// Сортировка
// 		filtered.sort((a, b) => {
// 			if (sortBy === 'name') {
// 				return a.product_name?.localeCompare(b.product_name) || 0;
// 			} else if (sortBy === 'price') {
// 				return (Number(a.price) || 0) - (Number(b.price) || 0);
// 			}
// 			return 0;
// 		});

// 		setFilteredProducts(filtered);
// 	}, [products, searchQuery, sortBy, filterCategory]);

// 	// Обработчики для элементов управления
// 	const handleSearchChange = (e) => setSearchQuery(e.target.value);
// 	const handleSortChange = (e) => setSortBy(e.target.value);
// 	const handleFilterChange = (e) => setFilterCategory(e.target.value);

// 	// Если данные еще не готовы - показываем статичный loading (аналогично ProductList)
// 	if (!isReady) {
// 		return (
// 			<div
// 				ref={containerRef}
// 				className="product-list-container product-list-container--loading"
// 				style={{
// 					opacity: 1,
// 					transform: 'none',
// 					animation: 'none'
// 				}}
// 			>
// 				<div className="loading-state">
// 					<h2>Загрузка каталога...</h2>
// 					<div className="loading-placeholder">
// 						Подождите, товары загружаются
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	// Когда все готово - рендерим основной контент
// 	return (
// 		<div
// 			ref={containerRef}
// 			className="product-list-container product-list-container--ready"
// 			style={{
// 				opacity: 1,
// 				transform: 'none',
// 				animation: 'none'
// 			}}
// 		>




// 			{user && user.role !== 'не авторизован' && (
// 				<div className="header">
// 					<div className="user-info">
// 						<span className="user-info-label">Текущая роль пользователя:</span>
// 						<span className="user-info-role">
// 							{user.name} ({user.role})
// 						</span>
// 					</div>
// 					<div className="logout-container">
// 						<button className="logout-btn" onClick={handleLogout}>
// 							Выход
// 						</button>
// 					</div>
// 				</div>
// 			)}

// 			<h2> </h2>



// 			{/* Элементы управления: поиск, фильтры, сортировка - всегда для клиента */}
// 			<div className="controls">
// 				<div className="search">
// 					<input
// 						type="text"
// 						placeholder="Поиск по названию или описанию..."
// 						value={searchQuery}
// 						onChange={handleSearchChange}
// 					/>
// 				</div>
// 				<div className="filters">
// 					<select value={filterCategory} onChange={handleFilterChange}>
// 						<option value="">Все категории</option>
// 						{/* Динамически генерируем категории из products для полноты */}
// 						{[...new Set(products.map(p => p.category_name || p.category))].filter(cat => cat).map(cat => (
// 							<option key={cat} value={cat}>{cat}</option>
// 						))}
// 						{/* Или статические, если нужно: <option value="Обувь">Обувь</option> */}
// 					</select>
// 				</div>
// 				<div className="sort">
// 					<select value={sortBy} onChange={handleSortChange}>
// 						<option value="name">По названию</option>
// 						<option value="price">По цене</option>
// 					</select>
// 				</div>
// 			</div>

// 			<div className="products-grid">
// 				{filteredProducts.map((product) => (
// 					<ProductCard
// 						key={product.product_article}
// 						product={product}
// 					/>
// 				))}
// 			</div>
// 			{filteredProducts.length === 0 && (
// 				<div className="no-products">
// 					{products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default ClientPanel;






































// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ProductCard from './ProductCard';
// import "../styles/ClientPanel.css";

// function ClientPanel({ user, setUser }) {
// 	const navigate = useNavigate();
// 	const [products, setProducts] = useState([]);
// 	const [filteredProducts, setFilteredProducts] = useState([]);
// 	const [isReady, setIsReady] = useState(false);
// 	const [searchQuery, setSearchQuery] = useState('');
// 	const [sortBy, setSortBy] = useState('name');
// 	const [filterCategory, setFilterCategory] = useState('');
// 	const containerRef = useRef(null);
// 	const initialized = useRef(false);

// 	const showControls = true;

// 	const handleLogout = () => {
// 		setUser({ role: 'не авторизован', name: null });
// 		navigate('/');
// 	};

// 	useEffect(() => {
// 		if (initialized.current) return;
// 		initialized.current = true;

// 		console.log('🚀 Начало загрузки данных для клиента');

// 		const loadProducts = async () => {
// 			try {
// 				const productsData = await window.api.getProducts();
// 				console.log('✅ Данные загружены:', productsData.length, 'товаров');

// 				setProducts(productsData || []);
// 				setFilteredProducts(productsData || []);

// 				requestAnimationFrame(() => {
// 					requestAnimationFrame(() => {
// 						console.log('🎯 Показываем контент');
// 						setIsReady(true);
// 					});
// 				});

// 			} catch (error) {
// 				console.error('❌ Ошибка загрузки:', error);
// 				setProducts([]);
// 				setFilteredProducts([]);
// 				setIsReady(true);
// 			}
// 		};

// 		loadProducts();
// 	}, []);

// 	useEffect(() => {
// 		let filtered = products;

// 		if (searchQuery) {
// 			filtered = filtered.filter(product =>
// 				product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// 				product.description?.toLowerCase().includes(searchQuery.toLowerCase())
// 			);
// 		}

// 		if (filterCategory) {
// 			filtered = filtered.filter(product => product.category_name === filterCategory || product.category === filterCategory);
// 		}

// 		filtered.sort((a, b) => {
// 			if (sortBy === 'name') {
// 				return a.product_name?.localeCompare(b.product_name) || 0;
// 			} else if (sortBy === 'price') {
// 				return (Number(a.price) || 0) - (Number(b.price) || 0);
// 			}
// 			return 0;
// 		});

// 		setFilteredProducts(filtered);
// 	}, [products, searchQuery, sortBy, filterCategory]);

// 	const handleSearchChange = (e) => setSearchQuery(e.target.value);
// 	const handleSortChange = (e) => setSortBy(e.target.value);
// 	const handleFilterChange = (e) => setFilterCategory(e.target.value);

// 	if (!isReady) {
// 		return (
// 			<div
// 				ref={containerRef}
// 				className="client-panel-container client-panel-container--loading"
// 			>
// 				<div className="loading-state">
// 					<h2>Загрузка каталога...</h2>
// 					<div className="loading-placeholder">
// 						Подождите, товары загружаются
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	return (
// 		<>
// 			{/* Header вынесен за пределы основного контейнера */}
// 			{user && user.role !== 'не авторизован' && (
// 				<div className="client-panel-header">
// 					<div className="user-info">
// 						<span className="user-info-label">Текущая роль пользователя:</span>
// 						<span className="user-info-role">
// 							{user.name} ({user.role})
// 						</span>
// 					</div>
// 					<div className="logout-container">
// 						<button className="logout-btn" onClick={handleLogout}>
// 							Выход
// 						</button>
// 					</div>
// 				</div>
// 			)}

// 			{/* Основной контент */}
// 			<div
// 				ref={containerRef}
// 				className="client-panel-container client-panel-container--ready"
// 			>
// 				<h2> </h2>

// 				{/* Элементы управления: поиск, фильтры, сортировка - всегда для клиента */}
// 				<div className="controls">
// 					<div className="search">
// 						<input
// 							type="text"
// 							placeholder="Поиск по названию или описанию..."
// 							value={searchQuery}
// 							onChange={handleSearchChange}
// 						/>
// 					</div>
// 					<div className="filters">
// 						<select value={filterCategory} onChange={handleFilterChange}>
// 							<option value="">Все категории</option>
// 							{[...new Set(products.map(p => p.category_name || p.category))].filter(cat => cat).map(cat => (
// 								<option key={cat} value={cat}>{cat}</option>
// 							))}
// 						</select>
// 					</div>
// 					<div className="sort">
// 						<select value={sortBy} onChange={handleSortChange}>
// 							<option value="name">По названию</option>
// 							<option value="price">По цене</option>
// 						</select>
// 					</div>
// 				</div>

// 				<div className="products-grid">
// 					{filteredProducts.map((product) => (
// 						<ProductCard
// 							key={product.product_article}
// 							product={product}
// 						/>
// 					))}
// 				</div>
// 				{filteredProducts.length === 0 && (
// 					<div className="no-products">
// 						{products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
// 					</div>
// 				)}
// 			</div>
// 		</>
// 	);
// }

// export default ClientPanel;




































// import { useEffect, useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';  // Для редиректа при выходе
// import ProductCard from './ProductCard';
// import "../styles/ClientPanel.css";

// function ClientPanel({ user, setUser }) {  // Теперь принимаем setUser для выхода
// 	const navigate = useNavigate();
// 	const [products, setProducts] = useState([]);
// 	const [filteredProducts, setFilteredProducts] = useState([]);  // Для отфильтрованных товаров
// 	const [isReady, setIsReady] = useState(false);
// 	const [searchQuery, setSearchQuery] = useState('');  // Для поиска
// 	const [sortBy, setSortBy] = useState('name');  // Для сортировки (по имени, цене)
// 	const [filterCategory, setFilterCategory] = useState('');  // Для фильтрации по категории
// 	const containerRef = useRef(null);
// 	const initialized = useRef(false);

// 	// Всегда показываем элементы управления для клиента
// 	const showControls = true;

// 	// Функция выхода: сбрасываем user и перенаправляем на вход
// 	const handleLogout = () => {
// 		setUser({ role: 'не авторизован', name: null });  // Сбрасываем на исходное состояние
// 		navigate('/');  // Редирект на окно входа
// 	};

// 	// Загружаем данные ОДИН раз при монтировании (аналогично ProductList)
// 	useEffect(() => {
// 		if (initialized.current) return;
// 		initialized.current = true;

// 		console.log('🚀 Начало загрузки данных для клиента');

// 		const loadProducts = async () => {
// 			try {
// 				const productsData = await window.api.getProducts();
// 				console.log('✅ Данные загружены:', productsData.length, 'товаров');

// 				// Устанавливаем данные (порядок сохраняется как в БД)
// 				setProducts(productsData || []);
// 				setFilteredProducts(productsData || []);  // Изначально все товары

// 				// Даем браузеру время на обработку DOM
// 				requestAnimationFrame(() => {
// 					requestAnimationFrame(() => {
// 						console.log('🎯 Показываем контент');
// 						setIsReady(true);
// 					});
// 				});

// 			} catch (error) {
// 				console.error('❌ Ошибка загрузки:', error);
// 				setProducts([]);
// 				setFilteredProducts([]);
// 				setIsReady(true);
// 			}
// 		};

// 		loadProducts();
// 	}, []);

// 	// Эффект для фильтрации, поиска и сортировки (всегда активен для клиента)
// 	useEffect(() => {
// 		let filtered = products;

// 		// Поиск по названию или описанию (используем product_name для consistency с ProductCard)
// 		if (searchQuery) {
// 			filtered = filtered.filter(product =>
// 				product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// 				product.description?.toLowerCase().includes(searchQuery.toLowerCase())
// 			);
// 		}

// 		// Фильтрация по категории (используем category_name или category – адаптируй под твои данные)
// 		if (filterCategory) {
// 			filtered = filtered.filter(product => product.category_name === filterCategory || product.category === filterCategory);
// 		}

// 		// Сортировка
// 		filtered.sort((a, b) => {
// 			if (sortBy === 'name') {
// 				return a.product_name?.localeCompare(b.product_name) || 0;
// 			} else if (sortBy === 'price') {
// 				return (Number(a.price) || 0) - (Number(b.price) || 0);
// 			}
// 			return 0;
// 		});

// 		setFilteredProducts(filtered);
// 	}, [products, searchQuery, sortBy, filterCategory]);

// 	// Обработчики для элементов управления
// 	const handleSearchChange = (e) => setSearchQuery(e.target.value);
// 	const handleSortChange = (e) => setSortBy(e.target.value);
// 	const handleFilterChange = (e) => setFilterCategory(e.target.value);

// 	// Если данные еще не готовы - показываем статичный loading (аналогично ProductList)
// 	if (!isReady) {
// 		return (
// 			<div
// 				ref={containerRef}
// 				className="product-list-container product-list-container--loading"
// 				style={{
// 					opacity: 1,
// 					transform: 'none',
// 					animation: 'none'
// 				}}
// 			>
// 				<div className="loading-state">
// 					<h2>Загрузка каталога...</h2>
// 					<div className="loading-placeholder">
// 						Подождите, товары загружаются
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	// Когда все готово - рендерим основной контент
// 	return (
// 		<div
// 			ref={containerRef}
// 			className="product-list-container product-list-container--ready"
// 			style={{
// 				opacity: 1,
// 				transform: 'none',
// 				animation: 'none'
// 			}}
// 		>




// 			{user && user.role !== 'не авторизован' && (
// 				<div className="header">
// 					<div className="user-info">
// 						<span className="user-info-label">Текущая роль пользователя:</span>
// 						<span className="user-info-role">
// 							{user.name} ({user.role})
// 						</span>
// 					</div>
// 					<div className="logout-container">
// 						<button className="logout-btn" onClick={handleLogout}>
// 							Выход
// 						</button>
// 					</div>
// 				</div>
// 			)}

// 			<h2> </h2>



// 			{/* Элементы управления: поиск, фильтры, сортировка - всегда для клиента */}
// 			<div className="controls">
// 				<div className="search">
// 					<input
// 						type="text"
// 						placeholder="Поиск по названию или описанию..."
// 						value={searchQuery}
// 						onChange={handleSearchChange}
// 					/>
// 				</div>
// 				<div className="filters">
// 					<select value={filterCategory} onChange={handleFilterChange}>
// 						<option value="">Все категории</option>
// 						{/* Динамически генерируем категории из products для полноты */}
// 						{[...new Set(products.map(p => p.category_name || p.category))].filter(cat => cat).map(cat => (
// 							<option key={cat} value={cat}>{cat}</option>
// 						))}
// 						{/* Или статические, если нужно: <option value="Обувь">Обувь</option> */}
// 					</select>
// 				</div>
// 				<div className="sort">
// 					<select value={sortBy} onChange={handleSortChange}>
// 						<option value="name">По названию</option>
// 						<option value="price">По цене</option>
// 					</select>
// 				</div>
// 			</div>

// 			<div className="products-grid">
// 				{filteredProducts.map((product) => (
// 					<ProductCard
// 						key={product.product_article}
// 						product={product}
// 					/>
// 				))}
// 			</div>
// 			{filteredProducts.length === 0 && (
// 				<div className="no-products">
// 					{products.length === 0 ? 'Товары не найдены' : 'По вашему запросу ничего не найдено'}
// 				</div>
// 			)}
// 		</div>
// 	);
// }

// export default ClientPanel;




































import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import "../styles/ClientPanel.css";

function ClientPanel({ user, setUser }) {
	const navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [isReady, setIsReady] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [sortBy, setSortBy] = useState('name');
	const [filterCategory, setFilterCategory] = useState('');
	const containerRef = useRef(null);
	const initialized = useRef(false);


	const showControls = true;


	const handleLogout = () => {
		setUser({ role: 'не авторизован', name: null });
		navigate('/');
	};


	useEffect(() => {
		if (initialized.current) return;
		initialized.current = true;

		console.log('🚀 Начало загрузки данных для клиента');

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


	useEffect(() => {
		let filtered = products;


		if (searchQuery) {
			filtered = filtered.filter(product =>
				product.product_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
				product.description?.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}


		if (filterCategory) {
			filtered = filtered.filter(product => product.category_name === filterCategory || product.category === filterCategory);
		}


		filtered.sort((a, b) => {
			if (sortBy === 'name') {
				return a.product_name?.localeCompare(b.product_name) || 0;
			} else if (sortBy === 'price') {
				return (Number(a.price) || 0) - (Number(b.price) || 0);
			}
			return 0;
		});

		setFilteredProducts(filtered);
	}, [products, searchQuery, sortBy, filterCategory]);


	const handleSearchChange = (e) => setSearchQuery(e.target.value);
	const handleSortChange = (e) => setSortBy(e.target.value);
	const handleFilterChange = (e) => setFilterCategory(e.target.value);


	if (!isReady) {
		return (
			<div
				ref={containerRef}
				className="product-list-container product-list-container--loading"
				style={{
					opacity: 1,
					transform: 'none',
					animation: 'none'
				}}
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

			<div>
				{user && user.role !== 'не авторизован' && (
					<div className="compact-header">
						<div className="user-compact-info">
							<div className="user-name">{user.name}</div>
							<div className="user-role">{user.role}</div>
						</div>
						<button className="logout-btn-compact" onClick={handleLogout}>
							Выход
						</button>
					</div>
				)}
			</div>


			<div className="client-panel-wrapper">




				<div
					ref={containerRef}
					className="product-list-container product-list-container--ready"
				>
					<h2> </h2>


					<div className="controls">

					</div>

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

export default ClientPanel;

