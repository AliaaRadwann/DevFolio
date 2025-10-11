/**
 * Typed.js Initialization
 */
const options = {
  // الكلمات التي ستظهر في الأنيميشن
    strings: [
    'React Developer',
    'Frontend Engineer',
    'Next.js Developer',
    'Problem Solver'
    ],
  typeSpeed: 60,    // سرعة الكتابة
  backSpeed: 50,    // سرعة الحذف
  loop: true,       // التكرار بشكل لا نهائي
  showCursor: true, // إظهار مؤشر الكتابة
  cursorChar: '|'   // شكل المؤشر
};

// هذا السطر يبحث عن العنصر الذي يحمل id="typed-element" ويطبق عليه الأنيميشن
const typed = new Typed('#typed-element', options);