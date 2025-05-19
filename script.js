  // Dados dos produtos (este é um exemplo - você pode adicionar mais produtos copiando o formato)
        const products = [
            {
                id: 1,
                name: "Relógio Atlantis Masculino",
                price: "R$ 80,00",
                description: "Relógio clássico com Design robusto e elegante com pulseira metálica, mostrador moderno (preto ou prata) e resistência à água de até 50m. Ideal para quem busca estilo e durabilidade com ótimo custo-benefício..",
                image: "img/atlantis.png",
                category: "classico"
            },
            {
                id: 2,
                name: "Relógio Digital G-Shock – Estilo e Resistência",
                price: "R$ 35,90",
                description: "Modelo esportivo com visual moderno e acabamento fosco. Resistente a impactos, com pulseira em silicone e visor digital com funções de hora, data e cronômetro. Perfeito para o dia a dia ou prática esportiva..",
                image: "img/g-chock.png",
                category: "esportivo"
            },
            {
                id: 3,
                name: "Relógio Atlantis Gold – Conforto e Sofisticação",
                price: "R$ 50,90",
                description: "Modelo leve e moderno com pulseira de borracha texturizada e caixa dourada. Disponível em mostradores coloridos (preto, azul e vermelho), resistente à água até 50m. Um acessório versátil que combina estilo e praticidade para o dia a dia.",
                image: "img/atlantis-gold.png",
                category: "casual"
            },
            {
                id: 4,
                name: "Relógio Bulgari Cassino – Luxo com Personalidade Única",
                price: "R$ 90,90",
                description: "Inspirado no glamour dos cassinos, esse modelo traz um mostrador temático com visual de roleta e acabamento dourado imponente. A pulseira metálica complementa o design sofisticado, ideal para quem deseja se destacar com estilo e ousadia.",
                image: "img/bulgari-cassino.png",
                category: "classico"
            },
            {
                id: 5,
                name: "Relógio Festina Dourado – Presença e Prestígio em Cada Detalhe",
                price: "R$ 80,90",
                description: "Com design robusto, mostrador multifuncional e acabamento totalmente dourado, o Festina transmite imponência e sofisticação. Ideal para quem busca um relógio de alto impacto visual sem abrir mão da elegância. Um acessório que transforma qualquer ocasião em um momento de destaque..",
                image: "img/festina-ouro.png",
                category: "classico"
            },
            {
                id: 6,
                name: "Festina Gold Blue – Sofisticação com Espírito Esportivo",
                price: "R$ 80,00",
                description: "Um relógio que impõe respeito com seu acabamento dourado premium e mostrador azul profundo. Equipado com cronógrafo funcional e estrutura robusta, é a escolha perfeita para quem valoriza estilo, desempenho e destaque em qualquer ocasião. Elegância esportiva com presença de luxo.",
                image: "img/festina-blue.png",
                category: "classico"
            },
            {
                id: 7,
                name: "Festina Gold White – Impacto Visual e Sofisticação",
                price: "R$ 80,90",
                description: "Design imponente com pulseira dourada de alta resistência e mostrador branco detalhado que inspira elegância. Ideal para quem deseja um acessório versátil que combina com eventos casuais ou formais. Com funções de cronógrafo, é mais do que um relógio – é um símbolo de presença.",
                image: "img/festina-white.png",
                category: "classico"
            },
            {
                id: 8,
                name: "Bulgari Hélice Azul – Design que Gira Cabeças",
                price: "R$ 90,90",
                description: "Um espetáculo visual com mostrador azul em formato de hélice, este relógio Bulgari une ousadia e sofisticação. Sua estrutura dourada impõe respeito, enquanto o mostrador dinâmico garante exclusividade. Ideal para quem quer se destacar com estilo e modernidade.",
                image: "img/bulgari-blue.png",
                category: "classico"
            },
            {
                id: 9,
                name: "Atlantis 2 em 1 – Elegância e Tecnologia à Prova d'Água",
                price: "R$ 90,90",
                description: "Combinando mostrador analógico clássico e visor digital funcional, o Atlantis 2 em 1 oferece praticidade sem perder o estilo. Disponível nas versões branca e dourada, este modelo é resistente à água (50M) e ideal para quem busca versatilidade e presença marcante no pulso.",
                image: "img/atlantis2em1.png",
                category: "classico"
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
                        <a href="https://wa.me/5585991575525?text=Olá, quero reservar o Relógio ${encodeURIComponent(product.name)}." class="reserve-button" target="_blank">Reservar</a>
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