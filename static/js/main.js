// static/js/main.js

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
});

// Testimonial Carousel
class TestimonialCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonial-carousel');
        this.track = document.querySelector('.testimonial-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.prevButton = document.querySelector('.carousel-controls .prev');
        this.nextButton = document.querySelector('.carousel-controls .next');
        
        this.currentIndex = 0;
        this.cardWidth = 0;
        this.maxIndex = this.cards.length - 1;
        
        this.init();
    }
    
    init() {
        if (!this.carousel) return;
        
        this.cardWidth = this.cards[0].offsetWidth;
        
        this.prevButton?.addEventListener('click', () => this.slide('prev'));