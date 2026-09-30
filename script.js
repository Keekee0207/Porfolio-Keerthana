document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Work Experience Horizontal Scroll Controls
    const expContainer = document.getElementById('exp-scroll');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');

    if (expContainer && scrollLeftBtn && scrollRightBtn) {
        const scrollAmount = 350;

        scrollLeftBtn.addEventListener('click', () => {
            expContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        scrollRightBtn.addEventListener('click', () => {
            expContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // 3. Log initial status
    console.log("Keerthana's Portfolio initialized smoothly.");
});
