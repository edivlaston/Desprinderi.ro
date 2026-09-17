/* Dropdown „Ce tratăm" — click, tastatură, aria; hover-ul pe desktop e din CSS. */
(function () {
  function init() {
    var dds = document.querySelectorAll('.has-dropdown');
    dds.forEach(function (dd) {
      var btn = dd.querySelector('.dropdown-toggle');
      var menu = dd.querySelector('.dropdown-menu');
      if (!btn || !menu) return;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var open = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          menu.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          var first = menu.querySelector('a');
          if (first) first.focus();
        }
      });
      dd.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          menu.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      });
    });
    document.addEventListener('click', function (e) {
      dds.forEach(function (dd) {
        if (!dd.contains(e.target)) {
          var menu = dd.querySelector('.dropdown-menu');
          var btn = dd.querySelector('.dropdown-toggle');
          if (menu) menu.classList.remove('open');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
