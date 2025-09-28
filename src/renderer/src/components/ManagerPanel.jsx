import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import "../styles/ManagerPanel.css";

function ManagerPanel({ user, setUser }) {
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

		console.log('🚀 Начало загрузки данных для менеджера');

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
				className="manager-panel-container manager-panel-container--loading"
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

			<div className="manager-panel-wrapper">
				<div
					ref={containerRef}
					className="manager-panel-container manager-panel-container--ready"
				>
					<h2> </h2>

					{/* Элементы управления: поиск, фильтры, сортировка */}
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
								{[...new Set(products.map(p => p.category_name || p.category))].filter(cat => cat).map(cat => (
									<option key={cat} value={cat}>{cat}</option>
								))}
							</select>
						</div>
						<div className="sort">
							<select value={sortBy} onChange={handleSortChange}>
								<option value="name">По названию</option>
								<option value="price">По цене</option>
							</select>
						</div>
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

export default ManagerPanel;
