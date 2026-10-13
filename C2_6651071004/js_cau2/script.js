const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

function toggleMenu(open) {
  menu.classList.toggle('hidden', !open);
  menu.classList.toggle('flex', open);
  btn.setAttribute('aria-expanded', open);
}

btn.addEventListener('click', () => toggleMenu(menu.classList.contains('hidden')));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
window.addEventListener('resize', () => { if (window.innerWidth >= 768) toggleMenu(false); });

document.getElementById('order-form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Đã nhận yêu cầu! Bếp Bánh sẽ gọi lại cho bạn sớm.';
  msg.classList.remove('hidden');
  e.target.reset();
});
