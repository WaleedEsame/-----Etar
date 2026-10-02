/* =====================================================================
   منصة إطار - ETAR TEMPLATES
   ملف البرمجة التفاعلي (script.js)
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // بيانات التصنيفات
  const categories = [
    { id: 'all', name: 'الكل ◍', icon: 'fa-layer-group' },
    { id: 'restaurants', name: 'مطاعم 🍽️', icon: 'fa-utensils' },
    { id: 'cafes', name: 'كافيهات ☕', icon: 'fa-mug-hot' },
    { id: 'fastfood', name: 'فاست فود 🍔', icon: 'fa-burger' }
  ];

  /* =====================================================================
     ⭐⭐⭐ القوالب ⭐⭐⭐
     لينك صفحة القالب بيتحط في الحقل previewUrl
     دور على العلامة:  👈 حط لينك القالب هنا
     ===================================================================== */
  const templates = [
    {
      id: 1,
      nameAr: 'بيت الجدعنه',
      nameEn: 'Home Taste',
      category: 'restaurants',
      categoryLabel: 'مطعم',
      price: '749 ج.م',
      badge: 'مميز ⭐',
      image: './بيت الجدعنة.png',
      previewUrl: 'https://peataljdana.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['منيو تفاعلي', 'طلب واتساب', 'تصميم شعبي']
    },
    {
      id: 2,
      nameAr: 'قطاف وقصه',
      nameEn: 'Bean & Tale',
      category: 'cafes',
      categoryLabel: 'مشروبات',
      price: '599 ج.م',
      badge: 'جديد ✨',
      image: './قِطاف.png',
      previewUrl: 'https://8taf.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مشروبات خاصة', 'منيو تفاعلي', 'سريع جداً']
    },
    {
      id: 3,
      nameAr: 'FEANE',
      nameEn: 'Snack Point',
      category: 'fastfood',
      categoryLabel: 'فاست فود',
      price: '699 ج.م',
      badge: 'الأكثر طلباً 🔥',
      image: './FEANE.png',
      previewUrl: 'https://feane-umber.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['وجبات سريعة', 'عروض دليفري', 'سريع ']
    },
    {
      id: 4,
      nameAr: 'أوستيريا أكس',
      nameEn: 'Olive & Lemon',
      category: 'restaurants',
      categoryLabel: 'مطعم إيطالي',
      price: '799 ج.م',
      badge: 'فخم 🌟',
      image: './أوستيريا إكس.png',
      previewUrl: 'https://ostera-five.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مأكولات إيطالية', 'منيو راقي', 'تصميم فاخر']
    },
    {
      id: 5,
      nameAr: 'Lungola',
      nameEn: 'Morning Corner',
      category: 'cafes',
      categoryLabel: 'كافيه عصري',
      price: '798 ج.م',
      badge: 'عصري 🍵',
      image: './Lungola.png',
      previewUrl: 'https://lungola.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مشروبات باردة', 'منيو راقي', 'سريع']
    },
    {
      id: 6,
      nameAr: 'SizzleHouse',
      nameEn: 'Burger Line',
      category: 'fastfood',
      categoryLabel: 'برجر',
      price: '599 ج.م',
      badge: 'شائع 🍔',
      image: './SizzleHouse.png',
      previewUrl: 'https://sizzlehouse.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['وجبات سريعة', 'عروض دليفري', 'منيو تفاعلي']
    },
    {
      id: 7,
      nameAr: 'تذوّق',
      nameEn: 'Eastern Spice',
      category: 'restaurants',
      categoryLabel: 'مطعم شرقي',
      price: '649 ج.م',
      badge: 'جديد ✨',
      image: './تذوّق.png',
      previewUrl: 'https://tdo8.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مأكولات شرقية', 'منيو تفاعلي', 'طلب واتساب']
    },
    {
      id: 8,
      nameAr: 'EmberLounge',
      nameEn: 'Coffee Cloud',
      category: 'cafes',
      categoryLabel: 'مقهى سحابي',
      price: '699 ج.م',
      badge: 'مميز ⭐',
      image: './EmberLounge.png',
      previewUrl: 'https://ember-lounge-ochre.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مشروبات خاصة', 'تصميم هادئ', 'سريع']
    },
    {
      id: 9,
      nameAr: 'basteit',
      nameEn: 'Seasons Table',
      category: 'restaurants',
      categoryLabel: 'مطعم',
      price: '749 ج.م',
      badge: 'شائع 🔥',
      image: './basteit.png',
      previewUrl: 'https://tasteit-steel.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['منيو تفاعلي', 'عرض صور', 'طلب واتساب']
    },
    {
      id: 10,
      nameAr: 'ديوان',
      nameEn: 'Coffee Notebook',
      category: 'cafes',
      categoryLabel: 'كافيه',
      price: '599 ج.م',
      badge: 'جديد ✨',
      image: './ديوان.png',
      previewUrl: 'https://duwon-flame.vercel.app/', // 👈 حط لينك القالب هنا
      tags: ['مشروبات ساخنة', 'منيو تفاعلي', 'تصميم هادئ']
    }
  ];

  // رقم الواتساب بصيغة دولية بدون + (مطلوب لرابط wa.me)
  const whatsappPhone = '201080732859';

  const filterTabsContainer = document.getElementById('filterTabs');
  const templatesGridContainer = document.getElementById('templatesGrid');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  // بناء التبويبات
  function renderFilterTabs() {
    if (!filterTabsContainer) return;
    filterTabsContainer.innerHTML = categories.map((cat, index) => `
      <button class="filter-tab ${index === 0 ? 'active' : ''}" data-category="${cat.id}">
        <i class="fa-solid ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    const tabs = filterTabsContainer.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderTemplates(tab.getAttribute('data-category'));
      });
    });
  }

  // بناء شبكة القوالب
  function renderTemplates(categoryFilter = 'all') {
    if (!templatesGridContainer) return;

    const filteredTemplates = categoryFilter === 'all'
      ? templates
      : templates.filter(t => t.category === categoryFilter);

    templatesGridContainer.innerHTML = filteredTemplates.map(template => {
      const waMsg = encodeURIComponent(`مرحباً! أود طلب قالب: ${template.nameAr} (${template.nameEn}) - السعر: ${template.price}`);
      const waUrl = `https://wa.me/${whatsappPhone}?text=${waMsg}`;

      return `
        <div class="template-card reveal in-view" data-id="${template.id}">
          <div class="template-card-image">
            <span class="template-badge">${template.badge}</span>
            <img src="${template.image}" alt="${template.nameAr}" loading="lazy">
          </div>

          <div class="template-card-body">
            <div class="template-header-row">
              <div>
                <h3 class="template-name-ar">${template.nameAr}</h3>
                <span class="template-name-en">${template.nameEn}</span>
              </div>
              <span class="template-price">${template.price}</span>
            </div>

            <div class="template-tags">
              ${template.tags.map(t => `<span class="tag-item"><i class="fa-solid fa-check" style="font-size: 9px; color: var(--olive);"></i> ${t}</span>`).join('')}
            </div>

            <div class="template-card-actions">
              <!-- زرار المعاينة: بيفتح صفحة القالب نفسها في تبويب جديد -->
              <a href="${template.previewUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
                <i class="fa-solid fa-eye"></i>
                <span>معاينة حية</span>
              </a>
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
                <i class="fa-brands fa-whatsapp"></i>
                <span>طلب القالب</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  /* =====================================================================
     مودال المعاينة (متعطل حالياً - لأن المعاينة بقت تفتح لينك القالب)
     لو حبيت ترجعه، شيل علامات التعليق وارجع الزرار لـ button
     =====================================================================

  const previewModal = document.getElementById('previewModal');
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTemplateTitle');
  const modalCategory = document.getElementById('modalTemplateCat');
  const previewIframe = document.getElementById('previewIframe');
  const iframeLoader = document.getElementById('iframeLoader');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  function openModal(title, cat, url, waUrl) {
    if (!previewModal) return;
    modalTitle.textContent = title;
    modalCategory.textContent = cat;
    modalWhatsappBtn.href = waUrl;
    iframeLoader.style.display = 'flex';
    previewIframe.src = url;
    previewIframe.onload = () => { iframeLoader.style.display = 'none'; };
    previewModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!previewModal) return;
    previewModal.classList.remove('active');
    previewIframe.src = '';
    document.body.style.overflow = 'auto';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (previewModal) {
    previewModal.addEventListener('click', (e) => {
      if (e.target === previewModal) closeModal();
    });
  }
  ===================================================================== */

  // القائمة في الموبايل
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });
  }

  // أنيميشن التمرير Scroll Reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // زر العودة للأعلى
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
      scrollTopBtn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  renderFilterTabs();
  renderTemplates('all');
});