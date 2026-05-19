// ==================== ПОЛНОСТЬЮ РАБОЧИЙ SCRIPT.JS ====================

// Ждём полной загрузки страницы
document.addEventListener('DOMContentLoaded', function() {

  // ==================== УСЛУГИ ====================
  const servicesData = [
    { name: "КТ для животных", price: "от 5000 руб.", desc: "Высокоточная диагностика", icon: "fa-microscope" },
    { name: "МРТ для животных", price: "от 11000 руб.", desc: "Детальное исследование", icon: "fa-brain" },
    { name: "Хирургия", price: "от 3500 руб.", desc: "Операции любой сложности", icon: "fa-kit-medical" },
    { name: "Терапия", price: "от 3500 руб.", desc: "Лечение внутренних болезней", icon: "fa-stethoscope" },
    { name: "Кардиология", price: "от 3000 руб.", desc: "Сердце под контролем", icon: "fa-heartbeat" },
    { name: "Неврология", price: "от 3500 руб.", desc: "Здоровье нервной системы", icon: "fa-brain" },
    { name: "Ортопедия", price: "от 3500 руб.", desc: "Кости и суставы", icon: "fa-bone" },
    { name: "Стоматология", price: "от 3500 руб.", desc: "Здоровые зубы", icon: "fa-tooth" },
    { name: "Эндоскопия", price: "от 19000 руб.", desc: "Малоинвазивная хирургия", icon: "fa-microscope" }
  ];

  function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = servicesData.map(s => `
      <div class="service-card" onclick="window.open('about:blank', '_blank');" style="cursor: pointer;">
        <div class="service-icon"><i class="fas ${s.icon}"></i></div>
        <div class="service-name">${s.name}</div>
        <div class="service-price">${s.price}</div>
        <div class="service-desc">${s.desc}</div>
      </div>
    `).join('');
  }

  // ==================== ВРАЧИ ====================
  const doctors = [
    { name: "Иванова Екатерина Валентиновна", role: "Ведущий кардиолог", photo: "images/doctors/doctor1.jpg" },
    { name: "Кильдеева Дарья Руслановна", role: "Ведущий хирург", photo: "images/doctors/doctor2.jpg" },
    { name: "Левченкова Наталья Алексеевна", role: "Ведущий кардиолог", photo: "images/doctors/doctor3.jpg" },
    { name: "Зацепин Никита Андреевич", role: "Анестезиолог", photo: "images/doctors/doctor4.jpg" },
    { name: "Скрицкая Дарья Владимировна", role: "Терапевт", photo: "images/doctors/doctor5.jpg" },
    { name: "Даценко Ульяна Дмитриевна", role: "Врач визуальной диагностики", photo: "images/doctors/doctor6.jpg" },
    { name: "Судьенков Андрей Юрьевич", role: "Врач ОРИТ", photo: "images/doctors/doctor7.jpg" }
  ];

  function renderDoctorsSwiper() {
    const wrapper = document.getElementById('doctorsWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = doctors.map(d => `
      <div class="swiper-slide">
        <div class="specialist-card">
          <img class="specialist-photo-img" src="${d.photo}" alt="${d.name}">
          <div class="specialist-name">${d.name}</div>
          <div class="specialist-role" style="color:var(--orange);">${d.role}</div>
          <button class="btn-more" data-doctor='${JSON.stringify(d)}'>Подробнее →</button>
        </div>
      </div>
    `).join('');
    new Swiper('.specialistSwiper', {
      slidesPerView: 1, spaceBetween: 24,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
    document.querySelectorAll('.btn-more').forEach(btn => {
      btn.addEventListener('click', () => {
        const doc = JSON.parse(btn.getAttribute('data-doctor'));
        const win = window.open();
        win.document.write(`
          <html><head><title>${doc.name}</title><link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></head>
          <body style="font-family:Inter;padding:30px;"><h2 style="color:#5e418f">${doc.name}</h2>
          <p>${doc.role}, опыт более 12 лет.</p><img src="${doc.photo}" width="150"><p>Прием по записи.</p>
          <button onclick="window.close()">Закрыть</button></body></html>
        `);
        win.document.close();
      });
    });
  }

  // ==================== ИСТОРИИ ====================
  const stories = [
    { petName: "Барсик", img: "images/pets/pet1.jpg", story: "Выпал с 5 этажа. Операция и остеосинтез. Через месяц бегал как прежде.", review: "Невероятная команда! Спасли нашего любимца. Оценка 5.0", rating: 5.0 },
    { petName: "Рекс", img: "images/pets/pet2.jpg", story: "Онкологическая операция. Комплексное лечение и реабилитация.", review: "Спасибо хирургам! Рекс вернулся к активной жизни. 4.9", rating: 4.9 },
    { petName: "Марта", img: "images/pets/pet3.jpg", story: "Отравление, критическое состояние. Реанимация и детокс спасли жизнь.", review: "Врачи реаниматологи творили чудеса. Бесконечно благодарна! 5.0", rating: 5.0 },
    { petName: "Грей", img: "images/pets/pet4.jpg", story: "Тяжелый артрит. Курс лазерной терапии избавил от боли.", review: "Грей снова ходит! Спасибо неврологам. 4.9", rating: 4.9 }
  ];

  function renderStories() {
    const wrapper = document.getElementById('storiesSwiperWrapper');
    if (!wrapper) return;
    wrapper.innerHTML = stories.map(s => `
      <div class="swiper-slide">
        <div class="story-card-slider">
          <img class="story-img-custom" src="${s.img}" alt="${s.petName}">
          <div class="story-content">
            <div class="story-pet-name"><span>🐾 ${s.petName}</span><span class="rating">★ ${s.rating}</span></div>
            <div class="story-text"><strong>📋 История:</strong> ${s.story}</div>
            <div class="owner-review"><i class="fas fa-quote-left"></i> ${s.review}</div>
          </div>
        </div>
      </div>
    `).join('');
    if (window.storiesSwiper) window.storiesSwiper.destroy(true, true);
    window.storiesSwiper = new Swiper('.storiesSwiper', {
      slidesPerView: 1, spaceBetween: 20,
      navigation: { nextEl: '.storiesSwiper .swiper-button-next', prevEl: '.storiesSwiper .swiper-button-prev' },
      pagination: { el: '.storiesSwiper .swiper-pagination', clickable: true },
      breakpoints: { 500: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2.3 } }
    });
  }

  // ==================== ЛИЦЕНЗИИ ====================
  const licenses = ["images/licenses/licenses1.jpg", "images/licenses/licenses2.jpg", "images/licenses/licenses3.jpg", "images/licenses/licenses4.jpg"];
  function renderLicenses() {
    const grid = document.getElementById('licensesGrid');
    if (!grid) return;
    grid.innerHTML = licenses.map(src => `<div class="license-item"><img class="license-img" src="${src}" alt="Лицензия"></div>`).join('');
  }

  // ==================== FAQ ====================
  const faqData = [
    { q: "Как записаться на приём?", a: "Нажмите кнопку «Записаться онлайн» или позвоните +7 (812) 777-88-99." },
    { q: "Работаете ли вы круглосуточно?", a: "Да, клиника работает 24/7 без выходных." },
    { q: "Как добраться от метро Петроградская?", a: "Выход к Вяземскому переулку, 15 минут пешком. Ориентир — бизнес-центр 'Вяземский'." },
    { q: "Принимаете экзотических животных?", a: "Да, у нас есть герпетолог и орнитолог." }
  ];
  function renderFAQ() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    container.innerHTML = '';
    faqData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'faq-item';
      div.innerHTML = `<div class="faq-question">${item.q} <i class="fas fa-chevron-down"></i></div><div class="faq-answer">${item.a}</div>`;
      div.querySelector('.faq-question').onclick = () => {
        div.classList.toggle('active');
        const icon = div.querySelector('.faq-question i');
        icon.classList.toggle('fa-chevron-up');
        icon.classList.toggle('fa-chevron-down');
      };
      container.appendChild(div);
    });
  }

  // ==================== ЛИЧНЫЙ КАБИНЕТ (УПРОЩЁННАЯ ВЕРСИЯ) ====================
  let isLoginMode = true;
  const modalCab = document.getElementById('cabinetModal');
  const openModalBtn = document.getElementById('openCabinetModal');
  const closeModalSpan = document.querySelector('.close-modal');
  const switchAuthBtn = document.getElementById('switchAuthBtn');
  const authMessage = document.getElementById('authMessage');
  const loginForm = document.getElementById('authForm');
  const modalTitleEl = document.getElementById('modalTitle');
  const authBtn = document.getElementById('authActionBtn');

  // Открыть модалку
  if (openModalBtn) {
    openModalBtn.onclick = function() {
      if (modalCab) modalCab.style.display = 'flex';
    };
  }

  // Закрыть модалку
  if (closeModalSpan) {
    closeModalSpan.onclick = function() {
      if (modalCab) modalCab.style.display = 'none';
    };
  }

  // Закрыть по клику вне окна
  window.onclick = function(e) {
    if (e.target === modalCab) modalCab.style.display = 'none';
  };

  // Переключение между входом и регистрацией
  if (switchAuthBtn) {
    switchAuthBtn.onclick = function() {
      isLoginMode = !isLoginMode;
      modalTitleEl.innerText = isLoginMode ? "Вход" : "Регистрация";
      authBtn.innerText = isLoginMode ? "Войти" : "Зарегистрироваться";
      authMessage.innerText = '';
      
      // Показываем/скрываем поле имени
      let nameField = document.getElementById('regNameField');
      if (!nameField && !isLoginMode) {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        formGroup.id = 'regNameField';
        formGroup.innerHTML = '<input type="text" id="regName" placeholder="Ваше имя">';
        const passwordInput = document.querySelector('#authForm input[type="password"]');
        if (passwordInput) {
          passwordInput.parentNode.insertAdjacentElement('afterend', formGroup);
        }
      } else if (nameField) {
        nameField.style.display = isLoginMode ? 'none' : 'block';
      }
      
      // Очищаем форму
      if (loginForm) loginForm.reset();
    };
  }

  // Обработка отправки формы
  if (loginForm) {
    loginForm.onsubmit = function(e) {
      e.preventDefault();
      
      const loginVal = document.getElementById('authPhoneEmail')?.value.trim();
      const password = document.getElementById('authPassword')?.value.trim();
      
      if (!loginVal || !password) {
        authMessage.innerHTML = '❌ Заполните все поля';
        authMessage.style.color = 'red';
        return;
      }
      
      let users = JSON.parse(localStorage.getItem('vet_users') || '[]');
      
      if (isLoginMode) {
        // Вход
        const user = users.find(u => (u.email === loginVal || u.phone === loginVal) && u.pass === password);
        if (user) {
          localStorage.setItem('vet_logged_in', JSON.stringify({
            email: user.email,
            phone: user.phone,
            name: user.name || 'Пользователь'
          }));
          authMessage.innerHTML = `✅ Добро пожаловать, ${user.name || user.email}!`;
          authMessage.style.color = 'green';
          setTimeout(() => {
            if (modalCab) modalCab.style.display = 'none';
            if (loginForm) loginForm.reset();
            location.reload();
          }, 1500);
        } else {
          authMessage.innerHTML = '❌ Неверный email/телефон или пароль';
          authMessage.style.color = 'red';
        }
      } else {
        // Регистрация
        const isEmail = loginVal.includes('@');
        const name = document.getElementById('regName')?.value.trim() || '';
        
        if (users.some(u => u.email === loginVal || u.phone === loginVal)) {
          authMessage.innerHTML = '❌ Пользователь уже существует';
          authMessage.style.color = 'red';
          return;
        }
        
        const newUser = {
          email: isEmail ? loginVal : '',
          phone: !isEmail ? loginVal : '',
          pass: password,
          name: name || (isEmail ? loginVal.split('@')[0] : 'Пользователь'),
          created: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem('vet_users', JSON.stringify(users));
        localStorage.setItem('vet_logged_in', JSON.stringify({
          email: newUser.email,
          phone: newUser.phone,
          name: newUser.name
        }));
        authMessage.innerHTML = `✅ Регистрация успешна! Добро пожаловать, ${newUser.name}!`;
        authMessage.style.color = 'green';
        setTimeout(() => {
          if (modalCab) modalCab.style.display = 'none';
          location.reload();
        }, 1500);
      }
    };
  }

  // Обновляем кнопку ЛК если пользователь залогинен
  const loggedIn = localStorage.getItem('vet_logged_in');
  const cabinetBtn = document.getElementById('openCabinetModal');
  if (loggedIn && cabinetBtn) {
    const user = JSON.parse(loggedIn);
    cabinetBtn.innerHTML = `<i class="fas fa-user-check"></i> ${user.name || 'Аккаунт'}`;
    cabinetBtn.style.background = '#2e7d32';
  }

  // ==================== ОТПРАВКА В GOOGLE SHEETS ====================
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxg6PsYZl7Ov-HuwygL4SfCMuHweD3yhZBswXGgG-ozGEXNtspVlLoztm3CToV4FmbyGg/exec';
  function sendToGoogleSheets(fio, phone, pet) {
    fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fio: fio, phone: phone, pet: pet })
    }).catch(err => console.error('Ошибка отправки:', err));
  }

  // ==================== УВЕДОМЛЕНИЕ ====================
  function showSuccessMessage(message) {
    const old = document.querySelector('.toast-success');
    if (old) old.remove();
    const div = document.createElement('div');
    div.className = 'toast-success';
    div.innerHTML = `✅ ${message}`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 4000);
  }

  // ==================== ОНЛАЙН ЗАПИСЬ ====================
  const showAppBtn = document.getElementById('showAppointmentBtn');
  const formBlock = document.getElementById('appointmentFormBlock');

  if (showAppBtn && formBlock) {
    showAppBtn.onclick = () => {
      formBlock.style.display = formBlock.style.display === 'block' ? 'none' : 'block';
    };
  }

  const appointmentForm = document.getElementById('onlineAppointmentForm');
  if (appointmentForm) {
    appointmentForm.onsubmit = (e) => {
      e.preventDefault();
      
      const fio = document.getElementById('app_fio')?.value || '';
      const phone = document.getElementById('app_phone')?.value || '';
      const pet = document.getElementById('app_pet')?.value || '';
      
      if (!fio || !phone || !pet) {
        alert('⚠️ Пожалуйста, заполните все поля!');
        return;
      }
      
      let apps = JSON.parse(localStorage.getItem('vet_appointments') || '[]');
      apps.push({ fio, phone, pet, time: new Date() });
      localStorage.setItem('vet_appointments', JSON.stringify(apps));
      
      sendToGoogleSheets(fio, phone, pet);
      showSuccessMessage('Заявка принята! Администратор свяжется с вами в течение 2 часов.');
      
      formBlock.style.display = 'none';
      appointmentForm.reset();
    };
  }

// ========== ЯНДЕКС.МЕТРИКА — ОТСЛЕЖИВАНИЕ ЦЕЛЕЙ ==========

// Цель 1: клик по кнопке «Записаться онлайн»
const onlineBtn = document.getElementById('showAppointmentBtn');
if (onlineBtn) {
    onlineBtn.addEventListener('click', function() {
        if (typeof ym === 'function') {
            ym(109309351, 'reachGoal', 'click_online_btn');
            console.log('Яндекс.Метрика: цель "click_online_btn" достигнута');
        }
    });
}

// Цель 2: отправка формы
const appointmentForm = document.getElementById('onlineAppointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function() {
        if (typeof ym === 'function') {
            ym(109309351, 'reachGoal', 'form_submit');
            console.log('Яндекс.Метрика: цель "form_submit" достигнута');
        }
    });
}

// Цель 3: просмотр блока отзывов (прокрутка)
const reviewSection = document.querySelector('.stories-slider-section');
if (reviewSection) {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            if (typeof ym === 'function') {
                ym(109309351, 'reachGoal', 'scroll_to_reviews');
                console.log('Яндекс.Метрика: цель "scroll_to_reviews" достигнута');
            }
            observer.disconnect();
        }
    });
    observer.observe(reviewSection);
}

  // ==================== ЗАПУСК ====================
  renderServices();
  renderDoctorsSwiper();
  renderStories();
  renderFAQ();
  renderLicenses();

}); // Конец DOMContentLoaded
