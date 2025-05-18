  // Dados dos produtos (este é um exemplo - você pode adicionar mais produtos copiando o formato)
        const products = [
            {
                id: 1,
                name: "Cronos Elegance",
                price: "R$ 289,90",
                description: "Relógio clássico com pulseira de couro genuíno e mostrador prateado.",
                image: "img/atlantis-gold.jpg",
                category: "classico"
            },
            {
                id: 2,
                name: "SportTime Pro",
                price: "R$ 349,90",
                description: "Relógio esportivo resistente à água com cronômetro e calendário.",
                image: "img/g-chock.jpg",
                category: "esportivo"
            },
            {
                id: 3,
                name: "Urban Style",
                price: "R$ 199,90",
                description: "Relógio casual com design minimalista, perfeito para o dia a dia.",
                image: "img/atlantis-borracha.jpg",
                category: "casual"
            },
            {
                id: 4,
                name: "Executive Gold",
                price: "R$ 399,90",
                description: "Relógio executivo com acabamento dourado e mostrador sofisticado.",
                image: "img/bulgari-cassino.jpg",
                category: "classico"
            },
            {
                id: 5,
                name: "Adventure Gear",
                price: "R$ 329,90",
                description: "Relógio resistente para atividades ao ar livre com altímetro e bússola.",
                image: "img/atlantis-ouro.jpg",
                category: "esportivo"
            },
            {
                id: 6,
                name: "Midnight Blue",
                price: "R$ 259,90",
                description: "Relógio casual com mostrador azul profundo e detalhes em aço inoxidável.",
                image: "img/atlantis.jpg",
                category: "casual"
            },
            {
                id: 7,
                name: "Digital Smart",
                price: "R$ 299,90",
                description: "Relógio digital com múltiplas funções e display iluminado.",
                image: "img/atlantis-misto.jpg",
                category: "digital"
            },
            {
                id: 8,
                name: "Vintage Leather",
                price: "R$ 279,90",
                description: "Relógio com design retrô e pulseira de couro envelhecido.",
                image: "img/festina-1.jpg",
                category: "classico"
            },
            {
                id: 9,
                name: "Rose global",
                price: "R$ 279,90",
                description: "Relógio com design global e pulseira de borracha.",
                image: "img/atlantis-rose.jpg",
                category: "feminino"
            }
        ];

        // Função para renderizar os produtos na página
        function renderProducts(productsToRender) {
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = '';

            if (productsToRender.length === 0) {
                productGrid.innerHTML = '<div class="no-products">Nenhum produto encontrado com os critérios de busca.</div>';
                return;
            }

            productsToRender.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <span class="product-category">${getCategoryName(product.category)}</span>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">${product.price}</div>
                        <p class="product-description">${product.description}</p>
                        <a href="https://wa.me/5511987654321?text=Olá, quero reservar o Relógio ${encodeURIComponent(product.name)}." class="reserve-button" target="_blank">Reservar</a>
                    </div>
                `;
                
                productGrid.appendChild(productCard);
            });
        }

        // Função para obter o nome da categoria
        function getCategoryName(category) {
            const categories = {
                'classico': 'Clássico',
                'esportivo': 'Esportivo',
                'casual': 'Casual',
                'digital': 'Digital',
                'feminino': 'feminino'
            };
            
            return categories[category] || category;
        }

        // Função para filtrar produtos por categoria e busca
        function filterProducts() {
            const searchTerm = document.getElementById('search-box').value.toLowerCase();
            const activeCategory = document.querySelector('.filter-button.active').dataset.category;
            
            let filteredProducts = products.filter(product => {
                // Filtro por busca
                const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                                    product.description.toLowerCase().includes(searchTerm);
                
                // Filtro por categoria
                const matchesCategory = activeCategory === 'todos' || product.category === activeCategory;
                
                return matchesSearch && matchesCategory;
            });
            
            renderProducts(filteredProducts);
        }

        // Configuração dos eventos de filtro
        document.getElementById('search-box').addEventListener('input', filterProducts);
        
        document.querySelectorAll('.filter-button').forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                document.querySelectorAll('.filter-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Atualiza os produtos
                filterProducts();
            });
        });

        // Renderiza todos os produtos ao carregar a página
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(products);
        });