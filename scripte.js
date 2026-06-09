// ---------- CONFIGURACIÓN ----------
const USD_TO_CUP = 540;
let useCUP = false;

const BANNER_SLIDES = [
  { image: 'img/banner1.jpg', text: 'Sabados de Ofertas ' },
  { image: 'img/banner2.jpg', text: 'Envíos gratis +9.9 USD' },
    { image: 'img/banner2.jpg', text: 'Siente lo nuevo' },
 
 
];

const CATEGORIES = [
  { id: 'todas', name: 'Todos los productos', icon: 'border-all' },
  { id: 'solar', name: 'Solar', icon: 'sun' },
  /*{ id: 'compresores', name: 'Compresores', icon: 'cogs' },*/
  { id: 'electricas', name: 'Eléctricas', icon: 'bolt' },
  { id: 'herramientas', name: 'Herramientas', icon: 'tools' }, 
  { id: 'refrigeracion y clima', name: 'Refrigeración y Clima', icon: 'snowflake' }
];

const PRODUCTS = [
  { id: 1, name: 'Acoplador Rapido Amaricano de 222222222222 vias',desc:'' , category: 'herramientas', images: ['img/productos/Acoplador-rapido-amercano-de-2-vias.jpg','img/productos/Acoplador-rapido-amercano-de-2-vias1.jpg'], priceBase: 9, price1: 8.06, price2: 7.59, price3: 6.84 },
  { id: 2, name: 'Acoplador Rapido kit alta/baja plateado',desc:'' , category: 'herramientas', images: ['img/productos/acoplador-rapido-kit-altabaja-plateado.jpg'], priceBase: 16, price1: 13.86, price2: 12.79, price3: 11.18 },
  { id: 3, name: 'Adaptador Corto 410',desc:'' , category: 'refrigeracion y clima', images: ['img/productos/adaptador-corto.jpg',], priceBase: 2.5, price1: 2.18, price2: 2.02, price3: 1.78 },
  { id: 4, name: 'Alambre de Soldadura de estano 100g',desc:'' , category: 'herramientas', images: ['img/productos/alambre-de-soldadura-de-estano.jpg'], priceBase: 0.5, price1: 0.45, price2: 0.42, price3: 0.38 },
  { id: 5, name: 'Alambre para soldar C/ Nucleo Fundente',desc:'' , category: 'herramientas', images: ['img/productos/alambre-para-soldar-con-nucleo-fundente.jpg'], priceBase: 10, price1: 8.76, price2: 8.14, price3: 7.21 },
  { id: 6, name: 'Alambre de Soldadura Solido',desc:'' , category: 'herramientas', images: ['img/productos/alambre-de-soldadura-solido.jpg'], priceBase: 10.50, price1: 9.44, price2: 8.91, price3: 8.11 },
  { id: 7, name: 'Alicate de Corte Diagonal 7"',desc:'' , category: 'herramientas', images: ['img/productos/alicate-de-corte-diagonal-7.jpg'], priceBase: 8, price1: 7.16, price2: 6.74, price3: 6.11 },
  { id: 8, name: 'Alicatede Presion recto 10"',desc:'' , category: 'herramientas', images: ['img/productos/alicate-de-presion-recto-10.jpg'], priceBase: 8, price1: 6.90, price2: 6.35, price3: 5.53 },
  { id: 9, name: 'Adaptador Rotomartillo',desc:'' , category: 'herramientas', images: ['img/productos/adaptador-rotomartillo.jpg'], priceBase: 20, price1: 17.94, price2: 16.91, price3: 15.36 },
  { id: 10, name: 'Alicatede Multifuncion C/ Bolsa 11 en 1',desc:'' , category: 'herramientas', images: ['img/productos/alicate-multifuncion-con-bolsa-11enuno.jpg'], priceBase: 6, price1: 5.33, price2: 5, price3: 4.50 },
  { id: 11, name: 'Alicate punta curva 6"',desc:'' , category: 'herramientas', images: ['img/productos/alicate-punta-curva-6.jpg'], priceBase: 6, price1: 5.30, price2: 4.94, price3: 4.42 },
  { id: 12, name: 'Alicatede punta curva de 8"',desc:'' , category: 'herramientas', images: ['img/productos/alicate-punta-curva-8.jpg'], priceBase: 8, price1: 7.03, price2: 6.55, price3: 5.82 },
  { id: 13, name: 'Alicate punta larga de 6"',desc:'' , category: 'herramientas', images: ['img/productos/alicate-punta-larga-6.jpg'], priceBase: 6.5, price1: 5.64, price2: 5.21, price3: 4.56 },
  { id: 14, name: 'Arandelas Autoblocantes de 4mm',desc:'' , category: 'herramientas', images: ['img/productos/arandela-autoblocante-de-4mm.jpg'], priceBase: 1.60, price1: 1.44, price2: 1.35, price3: 1.23 },
  { id: 15, name: 'Arandelas Autoblocantes de 6mm',desc:'' , category: 'herramientas', images: ['img/productos/arandela-autoblocante-de-6mm.jpg'], priceBase: 1.90, price1: 1.68, price2: 1.57, price3: 1.41 },
  { id: 16, name: 'Aspa para Micromotor  Refrigerador Fino',desc:'' , category: 'herramientas', images: ['img/productos/aspa-para-micromotor-refrigerador-fina.jpg'], priceBase: 2.5, price1: 2.24, price2: 2.11, price3: 1.91 },
  { id: 17, name: 'Aspa para Micromotor 0 Fan Eje Gordo',desc:'' , category: 'herramientas', images: ['img/productos/aspa-para-micromotor-o-fan-eje-gorda.jpg'], priceBase: 2, price1: 1.85, price2: 1.78, price3: 1.67 },
  { id: 18, name: 'Bateria de LiFePO4 12V 200Ah',desc:'' , category: 'solar', images: ['img/productos/bateria lifepo4 12V 200Ah.jpeg'], priceBase: 550, price1: 550, price2: 550, price3: 515.89 },
  { id: 19, name: 'bateria lifepo4 24V 200Ah',desc:'' , category: 'solar', images: ['img/productos/bateria lifepo4 24V 200Ah.jpeg'], priceBase: 1050, price1: 1050, price2: 1050, price3: 990  },
  { id: 20, name: 'bateria lifepo4 48V 100Ah',desc:'' , category: 'solar', images: ['img/productos/bateria lifepo4 48V 100Ah.jpeg'], priceBase: 1200, price1: 1200, price2: 1200, price3: 1150 },
  { id: 21, name: 'Estacion de energia portatil DABBSON',desc:'' , category: 'solar', images: ['img/productos/Estacion de energia portatil DABBSON.jpeg'], priceBase: 950, price1: 950, price2: 950, price3: 950  },
  { id: 22, name: 'Cable original para estacion de energia portatil 3m',desc:'' , category: 'solar', images: ['img/productos/Cable original para estacion de energia portatil.jpeg'], priceBase: 50, price1: 43.26, price2: 39.89, price3: 34.84 },
  { id: 23, name: 'Cable original para estacion de energia portatil 5m',desc:'' , category: 'solar', images: ['img/productos/Cable original para estacion de energia portatil.jpeg'], priceBase: 70, price1: 61.15, price2: 56.72, price3: 50.08 },
  { id: 24, name: 'Estacion de Energia Portatil Delta 3 Classic',desc:'' , category: 'solar', images: ['img/productos/estacion de energia portatil Delta 3 Classic.jpeg'], priceBase: 690, price1: 690, price2: 690, price3: 690 },
  //{ id: 25, name: 'Estacion de energia portatil Delta 3 Max',desc:'Gran capacidad 2048Wh, 2400W de potencia continua ' , category: 'solar', images: ['img/productos/estacion de energia portatil Delta 3 Max.jpeg'], priceBase: 1220, price1: 1220, price2: 1220, price3: 1220 },
  //{ id: 26, name: 'Inversor Solar SUNRY 4000W/120VAC',desc:'4000W/120VAC, Onda Senoidal Pura, Pantalla LCD, Compatible con baterias de Litio,Gel y Plomo/acido' , category: 'solar', images: ['img/productos/Inversor-4000W-110.jpg'], priceBase: 520, price1: 520, price2: 505.86, price3: 495 },
  { id: 27, name: 'Breaker DC de 25A',desc:'' , category: 'solar', images: ['img/productos/breaker 25 DC.jpg'], priceBase: 18, price1: 15.56, price2: 14.35, price3: 12.52 },
  
  
  
];

// 🔄 ORDENAR PRODUCTOS ALFABÉTICAMENTE (función de comparación)
function sortProductsAlphabetically(products) {
    return [...products].sort((a, b) => {
        // Usamos localeCompare para ordenar correctamente mayúsculas/minúsculas y caracteres especiales
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
    });
}

// PRODUCTOS ORDENADOS (creamos una copia ordenada para usar en toda la app)
const SORTED_PRODUCTS = sortProductsAlphabetically(PRODUCTS);

// Estado global
let cart = [];
let activeCategory = 'todas';
let currentTotal = 0;
let baseTotal = 0;
let currentPage = 1;
const PRODUCTS_PER_PAGE = 16;
let searchTerm = '';
let filteredSearchProducts = [];

// === MODAL: variables ===
let productModal, modalClose, modalImg, modalName, modalDesc, modalPrice, modalAddBtn;
let currentModalProductId = null;
let currentModalImageIndex = 0;
let modalImages = [];

// --- Swipe tracking ---
let swipeStartX = 0;
let swipeThreshold = 50;

// Elementos DOM
let productsContainer, catListMobile, catListDesktop;
let cartItemsContainer, cartItemsMobile;
let cartTotalSpan, cartTotalMobile;
let savingsMsg, savingsMsgMobile;
let savingsAmountDesktop, savingsAmountMobile;
let cartBadge;
let menuToggle, sideMenu, menuOverlay, closeMenu;
let cartToggleMobile, cartDrawer, cartOverlay, closeCartDrawer;
let clearCartBtn, clearCartBtnMobile, sendWhatsApp, sendWhatsAppMobile;
let currencyToggleDesktop, currencyToggleMobile;
let bannerContainer, bannerDots;

// ---------- UTILIDADES DE MONEDA ----------
function formatMoney(amount) {
  return useCUP ? `CUP ${(amount * USD_TO_CUP).toFixed(2)}` : `$${amount.toFixed(2)}`;
}

function getPriceForTotal(product, total) {
  if (total >= 1000) return product.price3;
  if (total >= 500) return product.price2;
  if (total >= 200) return product.price1;
  return product.priceBase;
}

function getPriceTierLabel() {
  if (currentTotal >= 1000) return 'Súper oferta';
  if (currentTotal >= 500) return 'Mejor oferta';
  if (currentTotal >= 200) return 'Oferta';
  return '';
}

function getSavingsMessage(total) {
  if (total >= 1000) return '🎉 ¡Súper oferta activa!';
  if (total >= 500) return '🏷️ Mejor oferta activa';
  if (total >= 200) return '✨ Oferta activa';
  return `💡 Agrega ${formatMoney(200 - total)} más para ofertas`;
}

function calculateStableTotals() {
  let base = 0;
  cart.forEach(item => {
    const product = SORTED_PRODUCTS.find(p => p.id === item.id);
    if (product) base += product.priceBase * item.quantity;
  });
  baseTotal = base;
  let newTotal = baseTotal;
  for (let i = 0; i < 5; i++) {
    let tempTotal = 0;
    cart.forEach(item => {
      const product = SORTED_PRODUCTS.find(p => p.id === item.id);
      if (product) tempTotal += getPriceForTotal(product, newTotal) * item.quantity;
    });
    if (Math.abs(tempTotal - newTotal) < 0.001) break;
    newTotal = tempTotal;
  }
  currentTotal = newTotal;
}

function refreshUI() {
  calculateStableTotals();
  updateCartBadgeAndMessages();
  renderCartItems(cartItemsContainer);
  renderCartItems(cartItemsMobile);
  renderProducts();
  updateTotalAndSavingsDisplay();
}

function updateCartBadgeAndMessages() {
  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  cartBadge.textContent = totalItems;
  const msg = getSavingsMessage(currentTotal);
  if (savingsMsg) savingsMsg.textContent = msg;
  if (savingsMsgMobile) savingsMsgMobile.textContent = msg;
}

function updateTotalAndSavingsDisplay() {
  if (cartTotalSpan) cartTotalSpan.textContent = formatMoney(currentTotal);
  if (cartTotalMobile) cartTotalMobile.textContent = formatMoney(currentTotal);
  const saving = baseTotal - currentTotal;
  if (saving > 0.001) {
    const savingStr = formatMoney(saving);
    if (savingsAmountDesktop) {
      savingsAmountDesktop.textContent = `💰 Ahorro: ${savingStr}`;
      savingsAmountDesktop.style.display = 'block';
    }
    if (savingsAmountMobile) {
      savingsAmountMobile.textContent = `💰 Ahorro: ${savingStr}`;
      savingsAmountMobile.style.display = 'block';
    }
  } else {
    if (savingsAmountDesktop) savingsAmountDesktop.style.display = 'none';
    if (savingsAmountMobile) savingsAmountMobile.style.display = 'none';
  }
}

function renderCartItems(container) {
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center; opacity:0.6;">🛒 Carrito vacío</p>';
    return;
  }
  let html = '';
  cart.forEach(item => {
    const product = SORTED_PRODUCTS.find(p => p.id === item.id);
    if (!product) return;
    const price = getPriceForTotal(product, currentTotal);
    const subtotal = price * item.quantity;
    html += `<div class="cart-item">
      <div class="cart-item-details">
        <span class="cart-item-name">${product.name}</span>
      </div>
      <div class="cart-item-controls">
        <div>
          <button class="decr-btn" data-id="${item.id}">−</button>
          <span style="margin:0 8px;">${item.quantity}</span>
          <button class="incr-btn" data-id="${item.id}">+</button>
        </div>
        <span class="cart-item-subtotal">${formatMoney(subtotal)}</span>
      </div>
    </div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.incr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
  container.querySelectorAll('.decr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      decreaseQuantity(id);
    });
  });
}

// ---------- PAGINACIÓN ----------
function renderPaginationControls(totalPages) {
  let paginationDiv = document.getElementById('pagination-controls');
  if (!paginationDiv && productsContainer) {
    paginationDiv = document.createElement('div');
    paginationDiv.id = 'pagination-controls';
    paginationDiv.className = 'pagination';
    productsContainer.insertAdjacentElement('afterend', paginationDiv);
  }
  if (!paginationDiv) return;
  if (totalPages <= 1) {
    paginationDiv.innerHTML = '';
    return;
  }
  let controlsHtml = `<button class="page-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''}>◀ Anterior</button>`;
  for (let i = 1; i <= totalPages; i++) {
    controlsHtml += `<button class="page-btn" data-page="${i}" ${i === currentPage ? 'class="active-page"' : ''}>${i}</button>`;
  }
  controlsHtml += `<button class="page-btn" data-page="next" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente ▶</button>`;
  paginationDiv.innerHTML = controlsHtml;
  paginationDiv.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      if (page === 'prev' && currentPage > 1) currentPage--;
      else if (page === 'next' && currentPage < totalPages) currentPage++;
      else if (!isNaN(parseInt(page))) currentPage = parseInt(page);
      renderProducts();
      if (productsContainer) productsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function renderProducts() {
  // 1. Comenzamos con la lista ORDENADA de productos
  let productsToRender = [...SORTED_PRODUCTS];
  
  // 2. Aplicar filtro de búsqueda si existe
  if (searchTerm.trim()) {
    productsToRender = productsToRender.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // 3. Aplicar filtro de categoría (si no es 'todas')
  if (activeCategory !== 'todas') {
    productsToRender = productsToRender.filter(p => p.category === activeCategory);
  }
  
  // Guardar productos filtrados para referencia (opcional)
  if (searchTerm.trim()) {
    filteredSearchProducts = productsToRender;
  }
  
  const totalProducts = productsToRender.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const pageProducts = productsToRender.slice(start, end);
  
  let html = '';
  pageProducts.forEach(prod => {
    const qty = cart.find(i => i.id === prod.id)?.quantity || 0;
    const price = getPriceForTotal(prod, currentTotal);
    const tier = getPriceTierLabel();
    const showOld = currentTotal >= 200 && price < prod.priceBase;
    const oldPriceHtml = showOld ? `<span class="old-price">${formatMoney(prod.priceBase)}</span>` : '';
    const badge = tier ? `<span class="price-tier-badge">${tier}</span>` : '';
    // Usar la primera imagen del array, o placeholder si no existe
    const imgSrc = (prod.images && prod.images.length) ? prod.images[0] : 'img/placeholder.png';
    html += `<div class="product-card">
      <img src="${imgSrc}" alt="${prod.name}" class="product-img" onerror="this.src='img/placeholder.png'">
      <div class="product-name">${prod.name}</div>
      <div class="product-price">${oldPriceHtml} ${formatMoney(price)} ${badge}</div>
      <div class="product-actions">
        <button class="decr-prod-btn" data-id="${prod.id}" ${qty === 0 ? 'disabled' : ''}>−</button>
        <span>${qty}</span>
        <button class="incr-prod-btn" data-id="${prod.id}">+</button>
      </div>
    </div>`;
  });
  productsContainer.innerHTML = html || '<p>No hay productos disponibles</p>';

  // === MODAL: Agregar evento click a las imágenes de producto ===
  document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', function() {
      const productId = parseInt(this.closest('.product-card').querySelector('.incr-prod-btn').dataset.id);
      openProductModal(productId);
    });
  });

  document.querySelectorAll('.incr-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === id);
      if (product) addToCart(product);
    });
  });
  document.querySelectorAll('.decr-prod-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      decreaseQuantity(id);
    });
  });
  renderPaginationControls(totalPages);
}

// ---------- BÚSQUEDA CON AUTOCOMPLETADO ----------
function filterProductsBySearch(term) {
  if (!term.trim()) return [];
  const lowerTerm = term.toLowerCase();
  // Usamos SORTED_PRODUCTS para mantener el orden alfabético incluso en sugerencias
  return SORTED_PRODUCTS.filter(p => p.name.toLowerCase().includes(lowerTerm));
}

function showSuggestions(term, inputElement, suggestionsContainer) {
  if (!term.trim()) {
    suggestionsContainer.classList.remove('show');
    return;
  }
  const matches = filterProductsBySearch(term);
  if (matches.length === 0) {
    suggestionsContainer.innerHTML = '<div class="no-suggestions">No hay productos 😕</div>';
    suggestionsContainer.classList.add('show');
    return;
  }
  let html = '';
  matches.forEach(product => {
    const catName = CATEGORIES.find(c => c.id === product.category)?.name || product.category;
    html += `<div class="suggestion-item" data-id="${product.id}">
              <span class="suggestion-name">${product.name}</span>
              <span class="suggestion-category">${catName}</span>
            </div>`;
  });
  suggestionsContainer.innerHTML = html;
  suggestionsContainer.classList.add('show');
  suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = parseInt(item.dataset.id);
      const product = SORTED_PRODUCTS.find(p => p.id === productId);
      if (product) {
        searchTerm = product.name;
        inputElement.value = product.name;
        filteredSearchProducts = [product];
        activeCategory = 'todas';
        currentPage = 1;
        renderProducts();
        renderCategoryLists();
        suggestionsContainer.classList.remove('show');
      }
    });
  });
}

function initSearch() {
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    const suggestionsContainer = input.closest('.search-container').querySelector('.suggestions-list');
    input.addEventListener('input', (e) => {
      const term = e.target.value;
      searchTerm = term;
      currentPage = 1;
      if (term.trim() === '') {
        filteredSearchProducts = [];
        suggestionsContainer.classList.remove('show');
        renderProducts();
        activeCategory = 'todas';
        renderCategoryLists();
      } else {
        filteredSearchProducts = filterProductsBySearch(term);
        showSuggestions(term, input, suggestionsContainer);
        renderProducts();
      }
    });
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
        suggestionsContainer.classList.remove('show');
      }
    });
  });
}

// ---------- CATEGORÍAS ----------
function renderCategoryLists() {
  const render = (cont) => {
    if (!cont) return;
    cont.innerHTML = '';
    CATEGORIES.forEach(cat => {
      const li = document.createElement('li');
      li.className = 'category-item';
      li.innerHTML = `<i class="fas fa-${cat.icon}"></i> ${cat.name}`;
      li.dataset.cat = cat.id;
      if (cat.id === activeCategory) li.classList.add('active');
      li.addEventListener('click', () => {
        activeCategory = cat.id;
        searchTerm = '';
        filteredSearchProducts = [];
        document.querySelectorAll('.search-input').forEach(inp => inp.value = '');
        currentPage = 1;
        renderCategoryLists();
        renderProducts();
        if (sideMenu && sideMenu.classList.contains('active')) {
          sideMenu.classList.remove('active');
          if (menuOverlay) menuOverlay.classList.remove('active');
        }
      });
      cont.appendChild(li);
    });
  };
  render(catListMobile);
  render(catListDesktop);
}

// ---------- CARRITO ----------
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  existing ? existing.quantity++ : cart.push({ id: product.id, quantity: 1 });
  refreshUI();
}

function decreaseQuantity(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  if (cart[idx].quantity > 1) cart[idx].quantity--;
  else cart.splice(idx, 1);
  refreshUI();
}

function clearCart() {
  cart = [];
  refreshUI();
}

// ---------- WHATSAPP ----------
function sendOrder() {
  if (cart.length === 0) return;
  let msg = '🛒 *Pedido Mercoventas*%0A';
  cart.forEach(item => {
    const p = SORTED_PRODUCTS.find(pr => pr.id === item.id);
    if (!p) return;
    const price = getPriceForTotal(p, currentTotal);
    msg += `• ${p.name} x${item.quantity} - ${formatMoney(price * item.quantity)}%0A`;
  });
  msg += `%0A*Total: ${formatMoney(currentTotal)}*`;
  if (baseTotal > currentTotal) msg += `%0A*Ahorro: ${formatMoney(baseTotal - currentTotal)}*`;
  window.open(`https://wa.me/+5350746226?text=${msg}`, '_blank');
}

// ---------- BANNER ----------
let currentSlide = 0, slideInterval;
function initBanner() {
  if (!bannerContainer) return;
  BANNER_SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = `banner-slide ${i === 0 ? 'active' : ''}`;
    div.style.backgroundImage = `url('${s.image}')`;
    if (s.text) {
      const span = document.createElement('span');
      span.textContent = s.text;
      div.appendChild(span);
    }
    bannerContainer.insertBefore(div, bannerDots);
  });
  document.querySelectorAll('.banner-slide').forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      document.querySelectorAll('.banner-slide').forEach((s, j) => s.classList.toggle('active', j === i));
      document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === i));
      currentSlide = i;
    });
    bannerDots.appendChild(dot);
  });
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % BANNER_SLIDES.length;
    document.querySelectorAll('.banner-slide').forEach((s, j) => s.classList.toggle('active', j === currentSlide));
    document.querySelectorAll('.dot').forEach((d, j) => d.classList.toggle('active', j === currentSlide));
  }, 4000);
}

// ---------- DRAWERS ----------
function closeAll() {
  if (sideMenu) sideMenu.classList.remove('active');
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  // === MODAL: cerrar también el modal ===
  if (productModal) closeModal();
}

// ========== MODAL CON SWIPE ==========
function openProductModal(productId) {
  const prod = SORTED_PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  currentModalProductId = productId;
  // Obtener array de imágenes (si no existe, usar array vacío y después placeholder)
  modalImages = prod.images && prod.images.length ? [...prod.images] : [];
  if (modalImages.length === 0) modalImages = ['img/placeholder.png'];
  currentModalImageIndex = 0;

  updateModalImage();
  modalName.textContent = prod.name;
  modalDesc.textContent = prod.desc || 'Producto de alta calidad, nuevo y sellado. Usted lo estrena';

  // Mostrar precio con descuento si aplica
  const price = getPriceForTotal(prod, currentTotal);
  const showOld = currentTotal >= 200 && price < prod.priceBase;
  modalPrice.innerHTML = showOld
    ? `<span class="old-price">${formatMoney(prod.priceBase)}</span> ${formatMoney(price)}`
    : formatMoney(price);

  productModal.classList.add('active');

  // Asegurar que existe el contenedor de swipe y configurar eventos
  setupSwipeContainer();
}

function updateModalImage() {
  if (modalImages.length === 0) return;
  const src = modalImages[currentModalImageIndex];
  modalImg.src = src;
  modalImg.onerror = () => { modalImg.src = 'img/placeholder.png'; };
}

function nextImage() {
  if (modalImages.length <= 1) return;
  currentModalImageIndex = (currentModalImageIndex + 1) % modalImages.length;
  updateModalImage();
}

function prevImage() {
  if (modalImages.length <= 1) return;
  currentModalImageIndex = (currentModalImageIndex - 1 + modalImages.length) % modalImages.length;
  updateModalImage();
}

function setupSwipeContainer() {
  // Crear o reutilizar un contenedor swipe alrededor de la imagen
  let swiper = document.getElementById('modal-image-swiper');
  if (!swiper) {
    swiper = document.createElement('div');
    swiper.id = 'modal-image-swiper';
    swiper.style.position = 'relative';
    swiper.style.overflow = 'hidden';
    swiper.style.userSelect = 'none';
    // Insertar antes de modalImg y mover la imagen dentro
    modalImg.parentNode.insertBefore(swiper, modalImg);
    swiper.appendChild(modalImg);
    // Añadir indicador de imágenes (puntos)
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-dots';
    swiper.appendChild(dotsContainer);
  }

  updateModalDots();

  // Eventos táctiles
  swiper.removeEventListener('touchstart', handleSwipeStart);
  swiper.removeEventListener('touchend', handleSwipeEnd);
  swiper.addEventListener('touchstart', handleSwipeStart, {passive: true});
  swiper.addEventListener('touchend', handleSwipeEnd);

  // Eventos de ratón
  swiper.removeEventListener('mousedown', handleMouseDown);
  swiper.removeEventListener('mouseup', handleMouseUp);
  swiper.addEventListener('mousedown', handleMouseDown);
  swiper.addEventListener('mouseup', handleMouseUp);
  // Prevenir arrastre de imagen por defecto
  modalImg.addEventListener('dragstart', e => e.preventDefault());
}

function updateModalDots() {
  const swiper = document.getElementById('modal-image-swiper');
  if (!swiper || modalImages.length <= 1) return;
  let dotsContainer = swiper.querySelector('.modal-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.className = 'modal-dots';
    swiper.appendChild(dotsContainer);
  }
  dotsContainer.innerHTML = '';
  for (let i = 0; i < modalImages.length; i++) {
    const dot = document.createElement('span');
    dot.className = `modal-dot ${i === currentModalImageIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      currentModalImageIndex = i;
      updateModalImage();
      updateModalDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function handleSwipeStart(e) {
  swipeStartX = e.touches[0].clientX;
}

function handleSwipeEnd(e) {
  if (!swipeStartX) return;
  const diff = e.changedTouches[0].clientX - swipeStartX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) prevImage();
    else nextImage();
    updateModalDots();
  }
  swipeStartX = 0;
}

function handleMouseDown(e) {
  e.preventDefault();
  swipeStartX = e.clientX;
}

function handleMouseUp(e) {
  if (!swipeStartX) return;
  const diff = e.clientX - swipeStartX;
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) prevImage();
    else nextImage();
    updateModalDots();
  }
  swipeStartX = 0;
}

function closeModal() {
  productModal.classList.remove('active');
  currentModalProductId = null;
  modalImages = [];
}

// ---------- INICIALIZACIÓN ----------
function init() {
  productsContainer = document.getElementById('products-container');
  catListMobile = document.getElementById('categories-list');
  catListDesktop = document.getElementById('desktop-categories-list');
  cartItemsContainer = document.getElementById('cart-items-container');
  cartItemsMobile = document.getElementById('cart-items-container-mobile');
  cartTotalSpan = document.getElementById('cart-total');
  cartTotalMobile = document.getElementById('cart-total-mobile');
  savingsMsg = document.getElementById('savings-message');
  savingsMsgMobile = document.getElementById('savings-message-mobile');
  savingsAmountDesktop = document.getElementById('savings-amount-desktop');
  savingsAmountMobile = document.getElementById('savings-amount-mobile');
  cartBadge = document.getElementById('cart-count-badge');
  menuToggle = document.getElementById('menuToggle');
  sideMenu = document.getElementById('sideMenu');
  menuOverlay = document.getElementById('menuOverlay');
  closeMenu = document.getElementById('closeMenu');
  cartToggleMobile = document.getElementById('cartToggleMobile');
  cartDrawer = document.getElementById('cartDrawer');
  cartOverlay = document.getElementById('cartOverlay');
  closeCartDrawer = document.getElementById('closeCartDrawer');
  clearCartBtn = document.getElementById('clearCartBtn');
  clearCartBtnMobile = document.getElementById('clearCartBtnMobile');
  sendWhatsApp = document.getElementById('sendWhatsApp');
  sendWhatsAppMobile = document.getElementById('sendWhatsAppMobile');
  currencyToggleDesktop = document.getElementById('currencyToggleDesktop');
  currencyToggleMobile = document.getElementById('currencyToggleMobile');
  bannerContainer = document.getElementById('banner');
  bannerDots = document.getElementById('bannerDots');

  // === MODAL: referencias ===
  productModal = document.getElementById('productModal');
  modalClose = document.getElementById('modalClose');
  modalImg = document.getElementById('modal-img');
  modalName = document.getElementById('modal-name');
  modalDesc = document.getElementById('modal-desc');
  modalPrice = document.getElementById('modal-price');
  modalAddBtn = document.getElementById('modal-add-btn');

  // Eventos del modal
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeModal();
    });
  }
  if (modalAddBtn) {
    modalAddBtn.addEventListener('click', () => {
      if (currentModalProductId) {
        const product = SORTED_PRODUCTS.find(p => p.id === currentModalProductId);
        if (product) addToCart(product);
        closeModal();
      }
    });
  }

  initBanner();
  renderCategoryLists();
  refreshUI();
  initSearch();

  if (menuToggle) menuToggle.addEventListener('click', () => {
    if (sideMenu) sideMenu.classList.add('active');
    if (menuOverlay) menuOverlay.classList.add('active');
  });
  if (closeMenu) closeMenu.addEventListener('click', closeAll);
  if (menuOverlay) menuOverlay.addEventListener('click', closeAll);
  if (cartToggleMobile) cartToggleMobile.addEventListener('click', () => {
    if (cartDrawer) cartDrawer.classList.add('active');
    if (cartOverlay) cartOverlay.classList.add('active');
  });
  if (closeCartDrawer) closeCartDrawer.addEventListener('click', closeAll);
  if (cartOverlay) cartOverlay.addEventListener('click', closeAll);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
  if (clearCartBtnMobile) clearCartBtnMobile.addEventListener('click', clearCart);
  if (sendWhatsApp) sendWhatsApp.addEventListener('click', sendOrder);
  if (sendWhatsAppMobile) sendWhatsAppMobile.addEventListener('click', sendOrder);

  const toggleCurrency = (checked) => {
    useCUP = checked;
    refreshUI();
  };
  if (currencyToggleDesktop) currencyToggleDesktop.addEventListener('change', (e) => {
    if (currencyToggleMobile) currencyToggleMobile.checked = e.target.checked;
    toggleCurrency(e.target.checked);
  });
  if (currencyToggleMobile) currencyToggleMobile.addEventListener('change', (e) => {
    if (currencyToggleDesktop) currencyToggleDesktop.checked = e.target.checked;
    toggleCurrency(e.target.checked);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', () => {
  if (slideInterval) clearInterval(slideInterval);
});
