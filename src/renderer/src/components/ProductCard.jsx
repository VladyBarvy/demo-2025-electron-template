// import "../styles/ProductCard.css";

// function ProductCard({ product }) {
//   // Безопасное преобразование данных
//   const safePrice = Number(product.price) || 0;
//   const safeDiscount = Number(product.current_discount) || 0;
//   const safeQuantity = Number(product.quantity_in_stock) || 0;

//   const discountedPrice = safeDiscount > 0 
//     ? safePrice * (1 - safeDiscount / 100)
//     : safePrice;

//   // Форматирование цены с проверкой
//   const formatPrice = (price) => {
//     const num = Number(price);
//     return isNaN(num) ? '0.00' : num.toFixed(2);
//   };

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img 
//           src={product.photo_url || '/placeholder-image.jpg'} 
//           alt={product.product_name || 'Товар'}
//           onError={(e) => {
//             e.target.src = '/placeholder-image.jpg';
//           }}
//         />
//       </div>
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name || 'Категория не указана'}</span>
//           <span className="product-name">{product.product_name || 'Название не указано'}</span>
//         </div>
        
//         <div className="product-details">
//           <p className="product-description">
//             <strong>Описание товара:</strong> {product.description || 'Описание отсутствует'}
//           </p>
//           <p className="product-manufacturer">
//             <strong>Производитель:</strong> {product.manufacturer_name || 'Не указан'}
//           </p>
//           <p className="product-supplier">
//             <strong>Поставщик:</strong> {product.supplier_name || 'Не указан'}
//           </p>
//           <p className="product-price">
//             <strong>Цена:</strong> 
//             {safeDiscount > 0 ? (
//               <>
//                 <span className="original-price">{formatPrice(safePrice)} руб.</span>
//                 <span className="discounted-price">{formatPrice(discountedPrice)} руб.</span>
//               </>
//             ) : (
//               <span>{formatPrice(safePrice)} руб.</span>
//             )}
//           </p>
//           <p className="product-unit">
//             <strong>Единица измерения:</strong> {product.unit_of_measure || 'шт.'}
//           </p>
//           <p className="product-stock">
//             <strong>Количество на складе:</strong> {safeQuantity}
//           </p>
//         </div>
        
//         {safeDiscount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {safeDiscount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;









// import "../styles/ProductCard.css";

// function ProductCard({ product }) {
//   const price = Number(product.price) || 0;
//   const discount = Number(product.current_discount) || 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img 
//           src={product.photo_url || '/placeholder-image.jpg'} 
//           alt={product.product_name}
//           onError={(e) => {
//             e.target.src = '/placeholder-image.jpg';
//           }}
//         />
//       </div>
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name}</span>
//           <span className="product-name">{product.product_name}</span>
//         </div>
        
//         <div className="product-details">
//           <p><strong>Описание товара:</strong> {product.description}</p>
//           <p><strong>Производитель:</strong> {product.manufacturer_name}</p>
//           <p><strong>Поставщик:</strong> {product.supplier_name}</p>
//           <p><strong>Цена:</strong> 
//             {discount > 0 ? (
//               <>
//                 <span className="original-price">{price.toFixed(2)} руб.</span>
//                 <span className="discounted-price">{discountedPrice.toFixed(2)} руб.</span>
//               </>
//             ) : (
//               <span>{price.toFixed(2)} руб.</span>
//             )}
//           </p>
//           <p><strong>Единица измерения:</strong> {product.unit_of_measure}</p>
//           <p><strong>Количество на складе:</strong> {product.quantity_in_stock}</p>
//         </div>
        
//         {discount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {discount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




















// import { useRef, useEffect } from 'react';
// //import "../styles/ProductCard.css";

// function ProductCard({ product, index }) {
//   const cardRef = useRef(null);
//   const rendered = useRef(false);

//   useEffect(() => {
//     if (cardRef.current && !rendered.current) {
//       rendered.current = true;
//       // Принудительно устанавливаем стили после монтирования
//       const card = cardRef.current;
//       card.style.opacity = '1';
//       card.style.transform = 'none';
//       card.style.animation = 'none';
//     }
//   }, []);

//   const price = Number(product.price) || 0;
//   const discount = Number(product.current_discount) || 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   return (
//     <div 
//       ref={cardRef}
//       className="product-card"
//       style={{
//         opacity: 1,
//         transform: 'none',
//         animation: 'none'
//       }}
//     >
//       <div className="product-image">
//         <img 
//           src={product.photo_url || '/placeholder-image.jpg'} 
//           alt={product.product_name}
//           loading="lazy"
//           onError={(e) => {
//             e.target.src = '/placeholder-image.jpg';
//           }}
//           style={{
//             opacity: 1,
//             transition: 'none'
//           }}
//         />
//       </div>
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name}</span>
//           <span className="product-name">{product.product_name}</span>
//         </div>
        
//         <div className="product-details">
//           <p className="product-description">
//             <strong>Описание товара:</strong> {product.description}
//           </p>
//           <p className="product-manufacturer">
//             <strong>Производитель:</strong> {product.manufacturer_name}
//           </p>
//           <p className="product-supplier">
//             <strong>Поставщик:</strong> {product.supplier_name}
//           </p>
//           <p className="product-price">
//             <strong>Цена:</strong> 
//             {discount > 0 ? (
//               <>
//                 <span className="original-price">{price.toFixed(2)} руб.</span>
//                 <span className="discounted-price">{discountedPrice.toFixed(2)} руб.</span>
//               </>
//             ) : (
//               <span>{price.toFixed(2)} руб.</span>
//             )}
//           </p>
//           <p className="product-unit">
//             <strong>Единица измерения:</strong> {product.unit_of_measure}
//           </p>
//           <p className="product-stock">
//             <strong>Количество на складе:</strong> {product.quantity_in_stock}
//           </p>
//         </div>
        
//         {discount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {discount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;































// import { useState, useEffect } from 'react';
// import "../styles/ProductCard.css";

// function ProductCard({ product }) {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageExists, setImageExists] = useState(true);

//   useEffect(() => {
//     let isMounted = true;

//     const checkAndLoadImage = async () => {
//       if (!product.photo_url) {
//         // Если нет photo_url, не показываем картинку
//         if (isMounted) {
//           setImageExists(false);
//           setImageLoaded(true);
//         }
//         return;
//       }

//       try {
//         // Формируем путь к картинке в папке assets
//         const imagePath = `./assets/${product.photo_url}`;
        
//         // Проверяем существование картинки
//         const img = new Image();
//         img.onload = () => {
//           if (isMounted) {
//             setImageSrc(imagePath);
//             setImageExists(true);
//           }
//         };
//         img.onerror = () => {
//           if (isMounted) {
//             setImageExists(false);
//             setImageLoaded(true);
//           }
//         };
//         img.src = imagePath;
        
//       } catch (error) {
//         console.error('Error checking image:', error);
//         if (isMounted) {
//           setImageExists(false);
//           setImageLoaded(true);
//         }
//       }
//     };

//     checkAndLoadImage();

//     return () => {
//       isMounted = false;
//     };
//   }, [product.photo_url]);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const handleImageError = () => {
//     setImageExists(false);
//     setImageLoaded(true);
//   };

//   const price = Number(product.price) || 0;
//   const discount = Number(product.current_discount) || 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   return (
//     <div className="product-card">
//       {/* Показываем блок с картинкой только если она существует */}
//       {imageExists && imageSrc && (
//         <div className="product-image">
//           <img 
//             src={imageSrc}
//             alt={product.product_name}
//             width="200"
//             height="200"
//             onLoad={handleImageLoad}
//             onError={handleImageError}
//             style={{
//               opacity: imageLoaded ? 1 : 0,
//               transition: 'opacity 0.3s ease'
//             }}
//           />
//           {!imageLoaded && (
//             <div className="image-placeholder">
//               Загрузка изображения...
//             </div>
//           )}
//         </div>
//       )}
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name}</span>
//           <span className="product-name">{product.product_name}</span>
//         </div>
        
//         <div className="product-details">
//           <p className="product-description">
//             <strong>Описание товара:</strong> {product.description}
//           </p>
//           <p className="product-manufacturer">
//             <strong>Производитель:</strong> {product.manufacturer_name}
//           </p>
//           <p className="product-supplier">
//             <strong>Поставщик:</strong> {product.supplier_name}
//           </p>
//           <p className="product-price">
//             <strong>Цена:</strong> 
//             {discount > 0 ? (
//               <>
//                 <span className="original-price">{price.toFixed(2)} руб.</span>
//                 <span className="discounted-price">{discountedPrice.toFixed(2)} руб.</span>
//               </>
//             ) : (
//               <span>{price.toFixed(2)} руб.</span>
//             )}
//           </p>
//           <p className="product-unit">
//             <strong>Единица измерения:</strong> {product.unit_of_measure}
//           </p>
//           <p className="product-stock">
//             <strong>Количество на складе:</strong> {product.quantity_in_stock}
//           </p>
//         </div>
        
//         {discount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {discount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;

























// import "../styles/ProductCard.css";

// function ProductCard({ product }) {


//   const price = Number(product.price) || 0;
//   const discount = Number(product.current_discount) || 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img 
//           src={`src/assets/${product.photo_url ? product.photo_url : 'picture.png'}`}
//           alt={product.product_name}
//           width="200"
//           height="200"
//         />
//       </div>
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name}</span>
//           <span className="product-name">{product.product_name}</span>
//         </div>
        
//         <div className="product-details">
//           <p className="product-description">
//             <strong>Описание товара:</strong> {product.description}
//           </p>
//           <p className="product-manufacturer">
//             <strong>Производитель:</strong> {product.manufacturer_name}
//           </p>
//           <p className="product-supplier">
//             <strong>Поставщик:</strong> {product.supplier_name}
//           </p>
//           <p className="product-price">
//             <strong>Цена:</strong> 
//             {discount > 0 ? (
//               <>
//                 <span className="original-price">{price.toFixed(2)} руб.</span>
//                 <span className="discounted-price">{discountedPrice.toFixed(2)} руб.</span>
//               </>
//             ) : (
//               <span>{price.toFixed(2)} руб.</span>
//             )}
//           </p>
//           <p className="product-unit">
//             <strong>Единица измерения:</strong> {product.unit_of_measure}
//           </p>
//           <p className="product-stock">
//             <strong>Количество на складе:</strong> {product.quantity_in_stock}
//           </p>
//         </div>
        
//         {discount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {discount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;





















import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const price = Number(product.price) || 0;
  const discount = Number(product.current_discount) || 0;

  return (
    <div className="product-card">
      {/* Левая часть - картинка */}
      <div className="product-image-section">
        <img 
          src={`src/assets/${product.photo_url ? product.photo_url : 'picture.png'}`}
          alt={product.product_name}
        />
      </div>
      
      {/* Центральная часть - описание */}
      <div className="product-info-section">
        <div className="product-header">
          <span className="product-category-name">
            {product.category_name} | {product.product_name}
          </span>
        </div>
        
        <div className="product-details">
          <p className="product-description">
            <strong>Описание товара:</strong> {product.description}
          </p>
          <div className="product-info-grid">
            <div className="info-row">
              <strong>Производитель:</strong>
              <span>{product.manufacturer_name}</span>
            </div>
            <div className="info-row">
              <strong>Поставщик:</strong>
              <span>{product.supplier_name}</span>
            </div>
            <div className="info-row">
              <strong>Цена:</strong>
              <span className="product-price">
                {discount > 0 ? (
                  <>
                    <span className="original-price">{price.toFixed(2)} руб.</span>
                  </>
                ) : (
                  <span>{price.toFixed(2)} руб.</span>
                )}
              </span>
            </div>
            <div className="info-row">
              <strong>Единица измерения:</strong>
              <span>{product.unit_of_measure}</span>
            </div>
            <div className="info-row">
              <strong>Количество на складе:</strong>
              <span>{product.quantity_in_stock}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Правая часть - скидка */}
      {discount > 0 && (
        <div className="product-discount-section">
          <div className="discount-badge">
            -{discount}%
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;







//////////////////////////////////////////////////////////////////////////////////////////////////

// import { useState, useEffect } from 'react';
// import "../styles/ProductCard.css";

// // Динамический импорт всех картинок из assets
// function importAll(r) {
//   let images = {};
//   r.keys().forEach(item => { 
//     images[item.replace('./', '')] = r(item); 
//   });
//   return images;
// }

// // Импортируем все jpg файлы из assets
// const images = importAll(require.context('../assets', false, /\.(jpg)$/));

// function ProductCard({ product }) {
//   const [imageSrc, setImageSrc] = useState(null);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     if (product.photo_url) {
//       // Ищем картинку в импортированных изображениях
//       const imageKey = `./${product.photo_url}`;
//       if (images[imageKey]) {
//         setImageSrc(images[imageKey]);
//       } else {
//         // Если картинки нет, не показываем блок с изображением
//         setImageSrc(null);
//         setImageLoaded(true);
//       }
//     } else {
//       setImageSrc(null);
//       setImageLoaded(true);
//     }
//   }, [product.photo_url]);

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const price = Number(product.price) || 0;
//   const discount = Number(product.current_discount) || 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   return (
//     <div className="product-card">
//       {/* Показываем блок с картинкой только если она существует */}
//       {imageSrc && (
//         <div className="product-image">
//           <img 
//             src={imageSrc}
//             alt={product.product_name}
//             width="200"
//             height="200"
//             onLoad={handleImageLoad}
//             style={{
//               opacity: imageLoaded ? 1 : 0,
//               transition: 'opacity 0.3s ease'
//             }}
//           />
//           {!imageLoaded && (
//             <div className="image-placeholder">
//               Загрузка изображения...
//             </div>
//           )}
//         </div>
//       )}
      
//       <div className="product-info">
//         <div className="product-header">
//           <span className="product-category">{product.category_name}</span>
//           <span className="product-name">{product.product_name}</span>
//         </div>
        
//         <div className="product-details">
//           <p className="product-description">
//             <strong>Описание товара:</strong> {product.description}
//           </p>
//           <p className="product-manufacturer">
//             <strong>Производитель:</strong> {product.manufacturer_name}
//           </p>
//           <p className="product-supplier">
//             <strong>Поставщик:</strong> {product.supplier_name}
//           </p>
//           <p className="product-price">
//             <strong>Цена:</strong> 
//             {discount > 0 ? (
//               <>
//                 <span className="original-price">{price.toFixed(2)} руб.</span>
//                 <span className="discounted-price">{discountedPrice.toFixed(2)} руб.</span>
//               </>
//             ) : (
//               <span>{price.toFixed(2)} руб.</span>
//             )}
//           </p>
//           <p className="product-unit">
//             <strong>Единица измерения:</strong> {product.unit_of_measure}
//           </p>
//           <p className="product-stock">
//             <strong>Количество на складе:</strong> {product.quantity_in_stock}
//           </p>
//         </div>
        
//         {discount > 0 && (
//           <div className="discount-badge">
//             Действующая скидка: {discount}%
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
