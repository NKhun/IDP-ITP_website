const burger = document.querySelector('.burger-nav');
        const navList = document.querySelector('.nav-list');

        burger.addEventListener('click', () => {
        navList.classList.toggle('show');
        });
        //change ITP-IDP toggle
        function toggleIdpItp() {
            const idp = document.getElementById("idp");
            const itp = document.getElementById("itp");
            const nav = document.querySelector("nav")
            const idpContent = document.getElementById("idp-container");
            const itpContent = document.getElementById("itp-container");
            const highlight = document.getElementById("highlightswitch");

            if (idp.classList.contains("active")) {
                idp.classList.remove("active");
                idpContent.classList.remove("active");
                nav.classList.add("active");
                highlightswitch.classList.add("active");
                itp.classList.add("active");
                itpContent.classList.add("active");
                highlight.classList.add("active");
            } 
            else {
                itp.classList.remove("active");
                itpContent.classList.remove("active");
                idp.classList.add("active");
                idpContent.classList.add("active");
                nav.classList.remove("active");
                highlightswitch.classList.remove("active");
                highlight.classList.remove("active");
            }
        }

        //animate on scroll
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("scroll");
                    }
                });
            }, { threshold: 0.01 });

            document.querySelectorAll(".animate").forEach(el => {
                observer.observe(el);
            });
        });

        let currentIndex = 0;
        let slideInterval;

        // ฟังก์ชันช่วยดึง slider ที่อยู่ใน container ที่ active อยู่
        function getActiveSlider() {
        return document.querySelector(".content.active .slider");
        }

        // อัปเดตความกว้างของ slider ตามจำนวนรูปที่แสดงอยู่
        function updateSliderWidth() {
        const slider = getActiveSlider();
        const totalSlides = slider.querySelectorAll("img").length;
        slider.style.width = `${totalSlides * 100}vw`;
        }

        // อัปเดตตำแหน่งเลื่อนรูป
        function updateSlide() {
        const slider = getActiveSlider();
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
        }

        // เลื่อนไปยังรูปถัดไป
        function nextSlide() {
        const slider = getActiveSlider();
        const totalSlides = slider.querySelectorAll("img").length;
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // วนกลับไปรูปแรก
        }
        updateSlide();
        resetAutoSlide();
        }

        // เลื่อนกลับไปรูปก่อนหน้า
        function prevSlide() {
        const slider = getActiveSlider();
        const totalSlides = slider.querySelectorAll("img").length;
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1; // วนกลับไปรูปสุดท้าย
        }
        updateSlide();
        resetAutoSlide();
        }

        // เริ่ม Auto Slide
        function autoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
        }
        autoSlide();

        // รีเซ็ต Timer เมื่อมีการเปลี่ยนรูป
        function resetAutoSlide() {
        clearInterval(slideInterval);
        autoSlide();
        }

        // เมื่อโหลดหน้าเว็บ อัปเดตความกว้าง slider
        updateSliderWidth();
