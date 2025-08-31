// Header & Banner Transitions
document.addEventListener('DOMContentLoaded', function () {

    // ==================== HEADER ANIMATIONS ====================

    // Hero section fade-in animation
    const hero = document.querySelector('.hero');
    const heroElements = hero.querySelectorAll('.customer-support, .container-logo, .container-user');

    // Initially hide elements
    heroElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Animate elements with staggered delay
    setTimeout(() => {
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 300);

    // Navbar slide-down animation
    const navbar = document.querySelector('.navbar');
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 0.8s ease';

    setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
    }, 800);

    // Menu items fade-in animation
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-10px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    setTimeout(() => {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);

    // Search form slide-in animation
    const searchForm = document.querySelector('.search-form');
    searchForm.style.opacity = '0';
    searchForm.style.transform = 'translateX(30px)';
    searchForm.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
        searchForm.style.opacity = '1';
        searchForm.style.transform = 'translateX(0)';
    }, 1200);

    // ==================== BANNER ANIMATIONS ====================

    // Banner content animation
    const bannerContent = document.querySelector('.content-banner');
    const bannerElements = bannerContent.querySelectorAll('p, h2, a');

    // Initially hide banner elements
    bannerElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Animate banner elements with delay
    setTimeout(() => {
        bannerElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 400);
        });
    }, 1500);

    // Banner background fade-in
    const banner = document.querySelector('.banner');
    banner.style.opacity = '0';
    banner.style.transition = 'opacity 1.2s ease';

    setTimeout(() => {
        banner.style.opacity = '1';
    }, 500);

    // ==================== INTERACTIVE ANIMATIONS ====================

    // Logo hover animation
    const logo = document.querySelector('.container-logo');
    logo.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    logo.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });

    // User icons hover animation
    const userIcons = document.querySelectorAll('.container-user i');
    userIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Search button pulse animation
    const searchBtn = document.querySelector('.btn-search');
    searchBtn.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    searchBtn.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });

    // Banner button hover animation
    const bannerBtn = document.querySelector('.content-banner a');
    bannerBtn.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 10px 20px rgba(241, 171, 21, 0.3)';
        this.style.transition = 'all 0.3s ease';
    });

    bannerBtn.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });

    // ==================== CATEGORY CARDS HOVER ANIMATION ====================

    // Category cards hover animations
    const categoryCards = document.querySelectorAll('.card-category');

    categoryCards.forEach(card => {
        // Initial state
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        // Mouse enter animation
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            this.style.filter = 'brightness(1.1) saturate(1.2)';
            this.style.zIndex = '10';

            // Animate the text inside
            const text = this.querySelector('p');
            if (text) {
                text.style.transform = 'scale(1.1)';
                text.style.transition = 'transform 0.3s ease';
                text.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }

            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                animation: rippleEffect 0.8s ease-out;
                pointer-events: none;
            `;
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 800);
        });

        // Mouse leave animation
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            this.style.filter = 'brightness(1) saturate(1)';
            this.style.zIndex = '1';

            // Reset text animation
            const text = this.querySelector('p');
            if (text) {
                text.style.transform = 'scale(1)';
                text.style.textShadow = 'none';
            }
        });
    });

    // Add ripple keyframes
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            0% {
                width: 0;
                height: 0;
                opacity: 0.8;
            }
            100% {
                width: 200px;
                height: 200px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ==================== FEATURE CARDS HOVER ANIMATION ====================

    // Feature cards hover animations
    const featureCards = document.querySelectorAll('.card-feature');

    featureCards.forEach(card => {
        // Initial state
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        // Mouse enter animation
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.03)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            this.style.filter = 'brightness(1.1) saturate(1.2)';
            this.style.zIndex = '10';

            // Animate the icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
                icon.style.color = 'var(--primary-color)';
            }

            // Animate the text content
            const content = this.querySelector('.feature-content');
            if (content) {
                content.style.transform = 'translateX(5px)';
                content.style.transition = 'transform 0.3s ease';
            }

            // Animate span and p separately
            const span = this.querySelector('span');
            const p = this.querySelector('p');
            if (span) {
                span.style.transform = 'scale(1.05)';
                span.style.transition = 'transform 0.3s ease';
                span.style.textShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
            }
            if (p) {
                p.style.transform = 'scale(1.02)';
                p.style.transition = 'transform 0.3s ease';
                p.style.opacity = '0.9';
            }

            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(241, 171, 21, 0.2);
                transform: translate(-50%, -50%);
                animation: rippleEffect 0.8s ease-out;
                pointer-events: none;
            `;
            this.appendChild(ripple);

            // Remove ripple after animation
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 800);
        });

        // Mouse leave animation
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            this.style.filter = 'brightness(1) saturate(1)';
            this.style.zIndex = '1';

            // Reset icon animation
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.color = '';
            }

            // Reset content animation
            const content = this.querySelector('.feature-content');
            if (content) {
                content.style.transform = 'translateX(0)';
            }

            // Reset text animations
            const span = this.querySelector('span');
            const p = this.querySelector('p');
            if (span) {
                span.style.transform = 'scale(1)';
                span.style.textShadow = 'none';
            }
            if (p) {
                p.style.transform = 'scale(1)';
                p.style.opacity = '1';
            }
        });
    });

    // ==================== STICKY NAVBAR ====================

    // Make navbar sticky at the top
    const containerNavbar = document.querySelector('.container-navbar');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            containerNavbar.style.position = 'fixed';
            containerNavbar.style.top = '0';
            containerNavbar.style.width = '100%';
            containerNavbar.style.zIndex = '1000';
            containerNavbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            // ไม่เปลี่ยนสีพื้นหลัง - ให้ใช้สีเดิมจาก CSS
        } else {
            containerNavbar.style.position = 'relative';
            containerNavbar.style.boxShadow = 'none';
        }
    });

    // ==================== MOBILE MENU ANIMATION ====================

    const mobileMenuBtn = document.querySelector('.fa-bars');
    const menu = document.querySelector('.menu');
    let isMenuOpen = false;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                menu.style.display = 'flex';
                menu.style.flexDirection = 'column';
                menu.style.position = 'absolute';
                menu.style.top = '100%';
                menu.style.left = '0';
                menu.style.width = '100%';
                menu.style.backgroundColor = 'var(--primary-color)';
                menu.style.padding = '2rem';
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-20px)';
                menu.style.transition = 'all 0.3s ease';

                setTimeout(() => {
                    menu.style.opacity = '1';
                    menu.style.transform = 'translateY(0)';
                }, 10);

                this.style.transform = 'rotate(90deg)';
                this.style.transition = 'transform 0.3s ease';
            } else {
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-20px)';

                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);

                this.style.transform = 'rotate(0deg)';
            }
        });
    }

    // ==================== TYPING ANIMATION FOR BANNER TEXT ====================

    const bannerH2 = document.querySelector('.content-banner h2');
    const originalText = bannerH2.textContent;

    // Clear text initially
    bannerH2.textContent = '';
    bannerH2.style.borderRight = '2px solid var(--primary-color)';

    // Start typing animation after other animations
    setTimeout(() => {
        let i = 0;
        const typeInterval = setInterval(() => {
            bannerH2.textContent = originalText.slice(0, i + 1);
            i++;

            if (i >= originalText.length) {
                clearInterval(typeInterval);
                // Remove cursor after typing is complete
                setTimeout(() => {
                    bannerH2.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }, 2500);

    // ==================== LOADING ANIMATION ====================

    // Add loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;

    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(241, 171, 21, 0.3);
        border-radius: 50%;
        border-top-color: var(--primary-color);
        animation: spin 1s ease-in-out infinite;
    `;

    // Add keyframes for spinner
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    loadingOverlay.appendChild(loadingSpinner);
    document.body.appendChild(loadingOverlay);

    // Remove loading overlay after animations start
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loadingOverlay);
        }, 500);
    }, 1000);

    // ==================== PARALLAX EFFECT REMOVED ====================
    // Parallax effect has been disabled

    console.log('🎉 Header และ Banner sequential animations โหลดเรียบร้อยแล้ว!');

    // ==================== PRODUCT CARDS HOVER ANIMATION ====================

    // Product cards hover animations
    const productCards = document.querySelectorAll('.card-product');

    productCards.forEach(card => {
        // Initial state
        card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        // Mouse enter animation
        card.addEventListener('mouseenter', function () {
            // Card animation
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
            this.style.zIndex = '10';

            // Image zoom animation
            const img = this.querySelector('.container-img img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }

            // Discount badge animation
            const discount = this.querySelector('.discount');
            if (discount) {
                discount.style.transform = 'scale(1.1)';
                discount.style.backgroundColor = '#000';
            }

            // Title animation
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = 'var(--primary-color)';
                title.style.transform = 'translateY(-2px)';
            }

            // Price animation
            const price = this.querySelector('.price');
            if (price) {
                price.style.transform = 'scale(1.05)';
                price.style.color = 'var(--primary-color)';
            }

            // Stars animation
            const stars = this.querySelectorAll('.stars i');
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.1)';
                    star.style.animation = 'twinkle 0.8s ease-in-out';
                }, index * 100);
            });

            // Add cart button animation
            const addCart = this.querySelector('.add-cart');
            if (addCart) {
                addCart.style.transform = 'scale(1.1) rotate(5deg)';
                addCart.style.backgroundColor = 'var(--primary-color)';
            }

            // Button group animation
            const buttonGroup = this.querySelector('.button-group');
            if (buttonGroup) {
                buttonGroup.style.right = '-1rem';
                buttonGroup.style.zIndex = '0';
            }
        });

        // ==================== AUTO-SLIDING PRODUCT CARDS ====================

        document.addEventListener('DOMContentLoaded', function () {

            function initProductSlider() {
                const containerProducts = document.querySelector('.container-products');

                if (!containerProducts) return;

                // Create wrapper for sliding animation
                const productsSlider = document.createElement('div');
                productsSlider.className = 'products-slider';

                // Get all product cards
                const productCards = Array.from(containerProducts.children);

                // Clone cards for seamless loop
                const clonedCards = productCards.map(card => card.cloneNode(true));

                // Clear original container
                containerProducts.innerHTML = '';

                // Add original cards to slider
                productCards.forEach(card => productsSlider.appendChild(card));

                // Add cloned cards for seamless loop
                clonedCards.forEach(card => productsSlider.appendChild(card));

                // Append slider to container
                containerProducts.appendChild(productsSlider);

                // Pause animation on hover (enhanced)
                containerProducts.addEventListener('mouseenter', function () {
                    productsSlider.style.animationPlayState = 'paused';
                });

                containerProducts.addEventListener('mouseleave', function () {
                    productsSlider.style.animationPlayState = 'running';
                });

                // Touch/swipe pause for mobile
                let isTouch = false;

                containerProducts.addEventListener('touchstart', function () {
                    isTouch = true;
                    productsSlider.style.animationPlayState = 'paused';
                });

                containerProducts.addEventListener('touchend', function () {
                    setTimeout(() => {
                        if (isTouch) {
                            productsSlider.style.animationPlayState = 'running';
                            isTouch = false;
                        }
                    }, 1000);
                });

                // Intersection Observer for performance optimization
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            productsSlider.style.animationPlayState = 'running';
                        } else {
                            productsSlider.style.animationPlayState = 'paused';
                        }
                    });
                }, {
                    threshold: 0.1
                });

                observer.observe(containerProducts);

                // Adjust animation speed based on screen size
                function adjustAnimationSpeed() {
                    const screenWidth = window.innerWidth;
                    let duration = '30s';

                    if (screenWidth <= 468) {
                        duration = '20s';
                    } else if (screenWidth <= 768) {
                        duration = '25s';
                    }

                    productsSlider.style.animationDuration = duration;
                }

                // Initial adjustment
                adjustAnimationSpeed();

                // Adjust on resize
                window.addEventListener('resize', adjustAnimationSpeed);

                // Smooth restart animation when it completes
                productsSlider.addEventListener('animationiteration', function () {
                    this.style.animationPlayState = 'running';
                });

                console.log('🎠 Product cards auto-sliding animation initialized successfully!');
            }

            // Initialize slider
            initProductSlider();

            // Reinitialize if container options change
            const containerOptions = document.querySelector('.container-options');
            if (containerOptions) {
                const optionSpans = containerOptions.querySelectorAll('span');

                optionSpans.forEach(span => {
                    span.addEventListener('click', function () {
                        // Remove active class from all spans
                        optionSpans.forEach(s => s.classList.remove('active'));
                        // Add active class to clicked span
                        this.classList.add('active');

                        // Reinitialize slider after a brief delay to allow content update
                        setTimeout(() => {
                            initProductSlider();
                        }, 100);
                    });
                });
            }
        });

        // Mouse leave animation
        card.addEventListener('mouseleave', function () {
            // Reset card animation
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
            this.style.zIndex = '1';

            // Reset image animation
            const img = this.querySelector('.container-img img');
            if (img) {
                img.style.transform = 'scale(1)';
            }

            // Reset discount animation
            const discount = this.querySelector('.discount');
            if (discount) {
                discount.style.transform = 'scale(1)';
                discount.style.backgroundColor = 'var(--primary-color)';
            }

            // Reset title animation
            const title = this.querySelector('h3');
            if (title) {
                title.style.color = '';
                title.style.transform = 'translateY(0)';
            }

            // Reset price animation
            const price = this.querySelector('.price');
            if (price) {
                price.style.transform = 'scale(1)';
                price.style.color = '';
            }

            // Reset stars animation
            const stars = this.querySelectorAll('.stars i');
            stars.forEach(star => {
                star.style.transform = 'scale(1)';
                star.style.animation = 'none';
            });

            // Reset add cart button
            const addCart = this.querySelector('.add-cart');
            if (addCart) {
                addCart.style.transform = 'scale(1) rotate(0deg)';
                addCart.style.backgroundColor = '';
            }

            // Reset button group
            const buttonGroup = this.querySelector('.button-group');
            if (buttonGroup) {
                buttonGroup.style.right = '-3rem';
                buttonGroup.style.zIndex = '-1';
            }
        });
    });

    // Product cards entrance animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, observerOptions);

    // Initially hide product cards and observe them
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        productObserver.observe(card);
    });

    // Add twinkle animation keyframes
    const twinkleStyle = document.createElement('style');
    twinkleStyle.textContent = `
        @keyframes twinkle {
            0%, 100% { 
                opacity: 1; 
                filter: brightness(1);
            }
            50% { 
                opacity: 0.7; 
                filter: brightness(1.5);
            }
        }
        
        @keyframes shimmer {
            0% {
                left: -100%;
            }
            100% {
                left: 100%;
            }
        }
        
        .card-product::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.6s ease;
            z-index: 1;
            pointer-events: none;
        }
        
        .card-product:hover::before {
            left: 100%;
        }
    `;
    document.head.appendChild(twinkleStyle);

    // ==================== ENHANCED STAR ANIMATIONS ====================

    document.addEventListener('DOMContentLoaded', function () {

        // Enhanced star interactions
        const starContainers = document.querySelectorAll('.stars');

        starContainers.forEach(container => {
            const stars = container.querySelectorAll('i');

            // Individual star hover effects
            stars.forEach((star, index) => {
                star.addEventListener('mouseenter', function () {
                    // Create ripple effect
                    const ripple = document.createElement('div');
                    ripple.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255, 184, 0, 0.6) 0%, transparent 70%);
                    transform: translate(-50%, -50%);
                    animation: starRipple 0.6s ease-out;
                    pointer-events: none;
                    z-index: -1;
                `;

                    this.appendChild(ripple);

                    // Remove ripple after animation
                    setTimeout(() => {
                        if (ripple.parentNode) {
                            ripple.parentNode.removeChild(ripple);
                        }
                    }, 600);

                    // Highlight stars up to current one
                    stars.forEach((s, i) => {
                        if (i <= index) {
                            s.style.color = '#ffb800';
                            s.style.transform = 'scale(1.15) rotate(5deg)';
                            s.style.filter = 'drop-shadow(0 3px 8px rgba(255, 184, 0, 0.7)) brightness(1.3)';
                        }
                    });
                });

                star.addEventListener('mouseleave', function () {
                    // Reset all stars
                    stars.forEach(s => {
                        s.style.color = '';
                        s.style.transform = '';
                        s.style.filter = '';
                    });
                });

                // Star click animation
                star.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Create burst effect
                    for (let i = 0; i < 6; i++) {
                        const particle = document.createElement('div');
                        const angle = (i * 60) * (Math.PI / 180);
                        const distance = 20;
                        const x = Math.cos(angle) * distance;
                        const y = Math.sin(angle) * distance;

                        particle.style.cssText = `
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 4px;
                        height: 4px;
                        background: linear-gradient(45deg, #ffb800, #ff6b00);
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        animation: burstParticle 0.8s ease-out forwards;
                        pointer-events: none;
                        z-index: 10;
                    `;

                        particle.style.setProperty('--x', x + 'px');
                        particle.style.setProperty('--y', y + 'px');

                        this.appendChild(particle);

                        setTimeout(() => {
                            if (particle.parentNode) {
                                particle.parentNode.removeChild(particle);
                            }
                        }, 800);
                    }

                    // Main star pulse
                    this.style.animation = 'starPulse 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

                    setTimeout(() => {
                        this.style.animation = '';
                    }, 400);
                });
            });

            // Container-wide effects
            container.addEventListener('mouseenter', function () {
                // Create subtle glow around entire star container
                this.style.filter = 'drop-shadow(0 2px 10px rgba(241, 171, 21, 0.3))';
                this.style.transition = 'filter 0.3s ease';
            });

            container.addEventListener('mouseleave', function () {
                this.style.filter = '';
            });
        });

        // Add enhanced keyframes for star animations
        const enhancedStarStyle = document.createElement('style');
        enhancedStarStyle.textContent = `
        @keyframes starRipple {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 40px;
                height: 40px;
                opacity: 0;
            }
        }
        
        @keyframes starPulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.4) rotate(15deg);
                filter: drop-shadow(0 4px 12px rgba(255, 184, 0, 0.8)) brightness(1.6);
            }
            100% {
                transform: scale(1);
                filter: drop-shadow(0 1px 3px rgba(241, 171, 21, 0.3)) brightness(1);
            }
        }
        
        @keyframes burstParticle {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(0);
            }
        }
        
        /* Enhanced glow animation */
        @keyframes starGlowEnhanced {
            0% {
                filter: drop-shadow(0 1px 3px rgba(241, 171, 21, 0.3)) brightness(1);
                text-shadow: 0 0 5px rgba(241, 171, 21, 0.3);
                transform: scale(1) rotate(0deg);
            }
            25% {
                transform: scale(1.05) rotate(2deg);
            }
            50% {
                filter: drop-shadow(0 3px 8px rgba(241, 171, 21, 0.8)) brightness(1.4);
                text-shadow: 0 0 15px rgba(241, 171, 21, 0.7), 0 0 25px rgba(255, 184, 0, 0.4);
                transform: scale(1.1) rotate(-2deg);
            }
            75% {
                transform: scale(1.05) rotate(1deg);
            }
            100% {
                filter: drop-shadow(0 1px 3px rgba(241, 171, 21, 0.3)) brightness(1);
                text-shadow: 0 0 5px rgba(241, 171, 21, 0.3);
                transform: scale(1) rotate(0deg);
            }
        }
        
        /* Replace the original starGlow animation */
        .card-product:hover .stars i {
            animation: starGlowEnhanced 2s ease-in-out infinite;
        }
        
        /* Staggered animation for better visual effect */
        .card-product:hover .stars i:nth-child(1) { animation-delay: 0s; }
        .card-product:hover .stars i:nth-child(2) { animation-delay: 0.2s; }
        .card-product:hover .stars i:nth-child(3) { animation-delay: 0.4s; }
        .card-product:hover .stars i:nth-child(4) { animation-delay: 0.6s; }
        .card-product:hover .stars i:nth-child(5) { animation-delay: 0.8s; }
        
        /* Floating animation for individual stars */
        @keyframes starFloat {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
            }
            25% {
                transform: translateY(-2px) rotate(1deg);
            }
            50% {
                transform: translateY(-4px) rotate(0deg);
            }
            75% {
                transform: translateY(-2px) rotate(-1deg);
            }
        }
        
        .card-product:hover .stars i:nth-child(odd) {
            animation: starFloat 3s ease-in-out infinite, starGlowEnhanced 2s ease-in-out infinite;
        }
        
        .card-product:hover .stars i:nth-child(even) {
            animation: starFloat 3s ease-in-out infinite reverse, starGlowEnhanced 2s ease-in-out infinite;
        }
    `;
        document.head.appendChild(enhancedStarStyle);

        // Random sparkle effect for product cards
        setInterval(() => {
            const visibleProductCards = document.querySelectorAll('.card-product:hover');

            visibleProductCards.forEach(card => {
                const stars = card.querySelectorAll('.stars i.fa-solid');
                if (stars.length > 0) {
                    const randomStar = stars[Math.floor(Math.random() * stars.length)];

                    // Create sparkle
                    const sparkle = document.createElement('div');
                    sparkle.style.cssText = `
                    position: absolute;
                    top: ${Math.random() * 20 - 10}px;
                    left: ${Math.random() * 20 - 10}px;
                    width: 6px;
                    height: 6px;
                    background: radial-gradient(circle, #fff, #ffb800);
                    border-radius: 50%;
                    animation: sparkleFloat 1.5s ease-out forwards;
                    pointer-events: none;
                    z-index: 20;
                `;

                    randomStar.appendChild(sparkle);

                    setTimeout(() => {
                        if (sparkle.parentNode) {
                            sparkle.parentNode.removeChild(sparkle);
                        }
                    }, 1500);
                }
            });
        }, 2000);

        // Add sparkle float animation
        const sparkleStyle = document.createElement('style');
        sparkleStyle.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: scale(0) translateY(0px);
            }
            20% {
                opacity: 1;
                transform: scale(1) translateY(-5px);
            }
            80% {
                opacity: 1;
                transform: scale(1) translateY(-15px);
            }
            100% {
                opacity: 0;
                transform: scale(0) translateY(-25px);
            }
        }
    `;
        document.head.appendChild(sparkleStyle);

        console.log('⭐ Enhanced star animations loaded successfully!');
    });

    document.addEventListener('DOMContentLoaded', function () {
        const containerProducts = document.querySelector('.container-products');
        if (containerProducts) {
            const productCards = Array.from(containerProducts.children);
            const slider = document.createElement('div');
            slider.className = 'products-slider';

            // Clone cards for seamless loop
            [...productCards, ...productCards].forEach(card => {
                slider.appendChild(card.cloneNode(true));
            });

            containerProducts.innerHTML = '';
            containerProducts.appendChild(slider);
        }
    });
});