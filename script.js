// ============================================
// MOCK DATA - Banco de dados de notícias
// Baseado no conteúdo do PDF fornecido
// ============================================

const newsDatabase = [
    {
        id: 1,
        title: "Big Data na Agricultura Digital: Algoritmos e Programação",
        excerpt: "Algoritmos processam altos volumes de dados de sensores, clima e maquinários, transformando informações complexas em decisões assertivas no setor agroalimentar.",
        category: "Big Data",
        image: "https://images.unsplash.com/photo-1599058917765-a3b4460b5b3b?w=600&h=400&fit=crop",
        date: "15 Jan 2024",
        readTime: "6 min"
    },
    {
        id: 2,
        title: "Previsão Climática com Machine Learning no Campo",
        excerpt: "Com Big Data, agricultores conseguem prever padrões climáticos utilizando dados coletados por sensores, satélites e estações meteorológicas, otimizando o manejo agrícola.",
        category: "Machine Learning",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
        date: "12 Jan 2024",
        readTime: "5 min"
    },
    {
        id: 3,
        title: "Sensores de Solo: Agricultura de Precisão em Tempo Real",
        excerpt: "Medição de umidade, temperatura, nutrientes e previsão meteorológica com sensores de última geração revolucionam o monitoramento das lavouras.",
        category: "Agricultura Digital",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
        date: "10 Jan 2024",
        readTime: "4 min"
    },
    {
        id: 4,
        title: "Drones e Satélites no Monitoramento Agrícola",
        excerpt: "Imagens de satélite e drones permitem monitoramento da saúde e índice de vegetação da lavoura, gerando dados essenciais para decisões estratégicas.",
        category: "Sensoriamento",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
        date: "08 Jan 2024",
        readTime: "7 min"
    },
    {
        id: 5,
        title: "Máquinas Conectadas e Agro 4.0: O Futuro é Agora",
        excerpt: "Tratores e colheitadeiras com GPS e telemetria geram dados operacionais em tempo real, aumentando a eficiência e produtividade no campo.",
        category: "Inovação",
        image: "https://images.unsplash.com/photo-1599058917765-a3b4460b5b3b?w=600&h=400&fit=crop",
        date: "05 Jan 2024",
        readTime: "5 min"
    },
    {
        id: 6,
        title: "Ciência de Dados no Agronegócio: Oportunidades e Desafios",
        excerpt: "Processar e integrar rapidamente conjuntos de dados altamente heterogêneos viabiliza o entendimento de problemas complexos no setor agroalimentar.",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
        date: "03 Jan 2024",
        readTime: "8 min"
    },
    {
        id: 7,
        title: "Inteligência Artificial na Agricultura Digital",
        excerpt: "Fomentar a área de informática agroalimentar com IA e ciência de dados abre oportunidades inovadoras para aumentar drasticamente as capacidades da ciência agrícola.",
        category: "Inteligência Artificial",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
        date: "30 Dez 2023",
        readTime: "6 min"
    },
    {
        id: 8,
        title: "Conectividade no Meio Rural: Acelerando o Agro Digital",
        excerpt: "O avanço da conectividade e combinações de ferramentas contribuem para o aumento de dados de fontes diversas, oferecendo insights da produção ao consumidor final.",
        category: "Tecnologia",
        image: "https://images.unsplash.com/photo-1599058917765-a3b4460b5b3b?w=600&h=400&fit=crop",
        date: "28 Dez 2023",
        readTime: "4 min"
    }
];

// ============================================
// RENDERIZAÇÃO DOS CARDS DE NOTÍCIAS
// ============================================

function renderNewsCards() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    // Limitar a 6 notícias conforme requisito, mas usar as 6 mais recentes
    const latestNews = newsDatabase.slice(0, 6);
    
    const cardsHTML = latestNews.map(news => `
        <article class="news-card">
            <img class="news-card-image" src="${news.image}" alt="${news.title}" loading="lazy">
            <div class="news-card-content">
                <span class="news-category">${news.category}</span>
                <h3 class="news-card-title">${news.title}</h3>
                <p class="news-card-excerpt">${news.excerpt}</p>
                <div class="news-card-meta">
                    <span><i class="far fa-calendar-alt"></i> ${news.date}</span>
                    <span><i class="far fa-clock"></i> ${news.readTime}</span>
                    <a href="#" class="read-more">Ler mais <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </article>
    `).join('');
    
    newsGrid.innerHTML = cardsHTML;
}

// ============================================
// DARK MODE COM LOCALSTORAGE
// ============================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema salvo
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        // Verificar preferência do sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Evento do botão
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
}

// ============================================
// MENU HAMBÚRGUER
// ============================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!menuToggle || !mobileMenu) return;
    
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        
        // Prevenir scroll quando menu estiver aberto
        if (mobileMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Fechar menu ao clicar em um link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
    
    // Fechar ao clicar fora (backdrop)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            toggleMenu();
        }
    });
}

// ============================================
// NEWSLETTER FORM (validação simples)
// ============================================

function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        const email = input.value.trim();
        
        if (email && email.includes('@') && email.includes('.')) {
            alert(`