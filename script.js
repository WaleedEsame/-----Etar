/* =====================================================================
   ملف JavaScript - قوالب مواقع مطاعم/كافيهات/فاست فود
   =====================================================================
   محتويات الملف:
   1) رقم الواتساب (متغير واحد يُستخدم في كل روابط الطلب)
   2) مصفوفة بيانات القوالب (المصدر الوحيد للحقيقة لكل القوالب)
   3) دوال بناء التبويبات وكروت القوالب من البيانات
   4) منطق الفلترة حسب التصنيف
   5) أنيميشن الظهور عند التمرير
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) رقم الواتساب
   ضع هنا رقم الواتساب بصيغة دولية بدون + وبدون مسافات، مثال:
   "9665XXXXXXXX" (السعودية) أو "20XXXXXXXXXX" (مصر)
--------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "+201080732859";


/* ---------------------------------------------------------------------
   2) مصفوفة بيانات القوالب
   ---------------------------------------------------------------------
   كل عنصر يمثل قالب واحد وله الحقول التالية:

   id              : رقم تعريفي فريد لكل قالب (رقم صحيح)
   category        : أحد ثلاث قيم فقط بالضبط: "مطعم" أو "كافيه" أو "فاست فود"
                      (التبويبات تُبنى تلقائيًا من هذه القيم)
   name_ar         : اسم القالب بالعربي (يظهر كبير في الكارت)
   name_en         : اسم القالب بالإنجليزي (يظهر صغير تحت الاسم العربي)
   image           : رابط صورة معاينة القالب (يفضّل مقاس أفقي 4:3)
   previewLink     : رابط المعاينة الحية للقالب (رابط خارجي)
   whatsappMessage : نص الرسالة التي تُرسل تلقائيًا عند الضغط على "اطلب عبر واتساب"

   ---------------------------------------------------------------------
   مثال لإضافة قالب جديد (انسخ الكتلة التالية وعدّل قيمها ثم أضفها
   داخل المصفوفة TEMPLATES في أي مكان قبل القوس الأخير ]):

   {
     id: 13,
     category: "كافيه",
     name_ar: "كافيه لافندر",
     name_en: "Lavender Cafe",
     image: "https://picsum.photos/seed/lavender-cafe/600/450",
     previewLink: "https://example.com/preview/lavender-cafe",
     whatsappMessage: "مرحبًا، أرغب بطلب قالب كافيه لافندر"
   },

--------------------------------------------------------------------- */

// ===================== الهيدر ===================== >

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// --------------------------------------------------------------------- */
const TEMPLATES = [
  {
    id: 1,
    category: "مطعم",
    name_ar: "بيت الجدعنه",
    name_en: "Home Taste",
    image: "./بيت الجدعنة.png",
    previewLink: "https://peataljdana.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب بيت الجدعنه "
  },
  {
    id: 2,
    category: "مشروب",
    name_ar: "قطاف وقصه",
    name_en: "Bean & Tale",
    image: "./قِطاف.png",
    previewLink: "https://8taf.vercel.app",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب  قطاف"
  },
  {
    id: 3,
    category: "فاست فود",
    name_ar: "FEANE",
    name_en: "Snack Point",
    image: "./FEANE.png",
    previewLink: "https://feane-umber.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب  FEANE "
  },
  {
    id: 4,
    category: "مطعم",
    name_ar: "أوستيريا أكس",
    name_en: "Olive & Lemon",
    image: "./أوستيريا إكس.png",
    previewLink: "https://ostera-five.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب أوستيريا أكس"
  },
  {
    id: 5,
    category: "كافيه",
    name_ar: "Lungola",
    name_en: "Morning Corner",
    image: "./Lungola.png",
    previewLink: "https://lungola.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب Lungola"
  },
  {
    id: 6,
    category: "فاست فود",
    name_ar: "SizzleHouse",
    name_en: "Burger Line",
    image: "./SizzleHouse.png",
    previewLink: "https://sizzlehouse.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب SizzleHouse"
  },
  {
    id: 7,
    category: "مطعم",
    name_ar: "تذوّق",
    name_en: "Eastern Spice",
    image: "./تذوّق.png",
    previewLink: "https://tdo8.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب تذوّق "
  },
  {
    id: 8,
    category: "كافيه",
    name_ar: "EmberLounge",
    name_en: "Coffee Cloud",
    image: "./EmberLounge.png",
    previewLink: "https://ember-lounge-ochre.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب EmberLounge"
  },
  {
    id: 10,
    category: "مطعم",
    name_ar: "basteit",
    name_en: "Seasons Table",
    image: "./basteit.png",
    previewLink: "https://tasteit-steel.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب basteit"
  },
  {
    id: 11,
    category: "كافيه",
    name_ar: "ديوان",
    name_en: "Coffee Notebook",
    image: "./ديوان.png",
    previewLink: "https://duwon-flame.vercel.app/",
    whatsappMessage: "مرحبًا، أرغب بطلب قالب ديوان"
  },
];


/* ---------------------------------------------------------------------
   عناصر DOM المستخدمة
--------------------------------------------------------------------- */
const filterTabsEl = document.getElementById("filterTabs");
const templatesGridEl = document.getElementById("templatesGrid");

/* التصنيف الحالي المُفعّل، "الكل" يعني عرض كل القوالب */
let activeCategory = "الكل";


/* ---------------------------------------------------------------------
   بناء رابط واتساب كامل من رقم الهاتف ونص الرسالة
   encodeURIComponent يحمي النص العربي والرموز الخاصة داخل الرابط
--------------------------------------------------------------------- */
function buildWhatsappLink(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}


/* ---------------------------------------------------------------------
   بناء تبويبات التصنيف تلقائيًا من القيم الموجودة فعليًا في TEMPLATES
   بحيث لو أضفت تصنيف جديد لاحقًا، يظهر تبويبه تلقائيًا بدون تعديل يدوي
--------------------------------------------------------------------- */
function renderFilterTabs() {
  // استخراج التصنيفات الفريدة من البيانات مع الحفاظ على ترتيب ظهورها الأول
  const uniqueCategories = [...new Set(TEMPLATES.map(t => t.category))];
  const categories = ["الكل", ...uniqueCategories];

  filterTabsEl.innerHTML = categories.map(cat => {
    const isActive = cat === activeCategory ? "active" : "";
    return `<button class="filter-tab ${isActive}" data-category="${cat}" role="tab">${cat}</button>`;
  }).join("");

  // ربط حدث الضغط بكل زر تبويب
  filterTabsEl.querySelectorAll(".filter-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderFilterTabs();   // إعادة رسم التبويبات لتحديث حالة "active"
      renderTemplatesGrid(); // إعادة رسم الكروت حسب الفلتر الجديد
    });
  });
}


/* ---------------------------------------------------------------------
   بناء شبكة كروت القوالب حسب التصنيف المُفعّل حاليًا
--------------------------------------------------------------------- */
function renderTemplatesGrid() {
  const list = activeCategory === "الكل"
    ? TEMPLATES
    : TEMPLATES.filter(t => t.category === activeCategory);

  templatesGridEl.innerHTML = list.map(t => `
    <article class="template-card reveal">
      <div class="template-card-image">
        <img src="${t.image}" alt="معاينة قالب ${t.name_ar}" loading="lazy">
        <span class="template-badge">${t.category}</span>
      </div>
      <div class="template-card-body">
        <span class="template-name-ar">${t.name_ar}</span>
        <span class="template-name-en">${t.name_en}</span>
        <div class="template-card-actions">
          <a class="btn btn-outline btn-small" href="${t.previewLink}" target="_blank" rel="noopener">معاينة حية</a>
          <a class="btn btn-primary btn-small" href="${buildWhatsappLink(t.whatsappMessage)}" target="_blank" rel="noopener">اطلب عبر واتساب</a>
        </div>
      </div>
    </article>
  `).join("");

  // تفعيل مراقبة الظهور على الكروت المُضافة حديثًا
  observeRevealElements();
}


/* ---------------------------------------------------------------------
   أنيميشن الظهور عند التمرير
   نستخدم IntersectionObserver: كل عنصر يحمل فئة "reveal" يبدأ مخفيًا
   قليلًا (انظر style.css)، وبمجرد دخوله نطاق الشاشة تُضاف له فئة
   "in-view" التي تشغّل الانتقال (fade + slide up) عبر CSS.
--------------------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target); // لا داعي لمراقبته بعد ظهوره مرة
    }
  });
}, { threshold: 0.15 });

function observeRevealElements() {
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => {
    revealObserver.observe(el);
  });
}


/* ---------------------------------------------------------------------
   تفعيل فئة "reveal" على العناصر الثابتة في الصفحة (خارج الشبكة الديناميكية)
   مثل عناصر قسم المميزات وقسم الخطوات
--------------------------------------------------------------------- */
function markStaticRevealTargets() {
  document.querySelectorAll(".feature, .timeline-step").forEach(el => {
    el.classList.add("reveal");
  });
}


/* ---------------------------------------------------------------------
   نقطة انطلاق الصفحة بعد تحميل DOM بالكامل
--------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderFilterTabs();
  renderTemplatesGrid();
  markStaticRevealTargets();
  observeRevealElements();
});