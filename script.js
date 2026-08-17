document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const expanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", expanded);
      menuToggle.innerHTML = expanded ? "&times;" : "&#9776;";
    });
  }

  // Bubble WhatsApp Toggle
  const waToggleBtn = document.getElementById("waToggleBtn");
  const waPopup = document.getElementById("waPopup");
  const closeWaPopup = document.getElementById("closeWaPopup");

  if (waToggleBtn && waPopup) {
    waToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopup.classList.toggle("active");
    });
  }

  if (closeWaPopup && waPopup) {
    closeWaPopup.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopup.classList.remove("active");
    });
  }

  // Tutup WA popup saat klik di luar
  document.addEventListener("click", (e) => {
    if (waPopup && waPopup.classList.contains("active")) {
      if (!waPopup.contains(e.target) && !waToggleBtn.contains(e.target)) {
        waPopup.classList.remove("active");
      }
    }
  });

  // Smooth Scroll untuk tautan anchor internal di halaman yang sama
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId !== "#" && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          e.preventDefault();
          if (navLinks) {
            navLinks.classList.remove("active");
            if (menuToggle) {
              menuToggle.innerHTML = "&#9776;";
              menuToggle.setAttribute("aria-expanded", "false");
            }
          }

          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

    // ============================================
    // RENDER KONTEN BERULANG DARI SITE_CONFIG
    // ============================================
    if (typeof SITE_CONFIG !== "undefined") {
      // Bangun tautan WhatsApp dari nomor + pesan terpusat
      const waHref = (message) =>
        "https://wa.me/" + SITE_CONFIG.whatsappNumber + "?text=" + encodeURIComponent(message);

      // Nomor telepon di top bar
      const renderTopbarPhone = () => {
        const el = document.querySelector('[data-render="topbar-phone"]');
        if (el) el.textContent = SITE_CONFIG.phone;
      };

      // Semua tombol CTA WhatsApp (data-wa = kunci pesan di SITE_CONFIG)
      const renderWaLinks = () => {
        document.querySelectorAll("[data-wa]").forEach((link) => {
          const message = SITE_CONFIG.waMessages[link.getAttribute("data-wa")];
          if (message) link.setAttribute("href", waHref(message));
        });
      };

      // Ikon media sosial + email di top bar
      const renderTopSocial = () => {
        const container = document.querySelector('[data-render="top-social"]');
        if (!container) return;

        const items = [
          { url: SITE_CONFIG.social.instagram.url, icon: SITE_CONFIG.social.instagram.icon, label: "Instagram" },
          { url: SITE_CONFIG.social.facebook.url, icon: SITE_CONFIG.social.facebook.icon, label: "Facebook" },
          { url: "mailto:" + SITE_CONFIG.email, icon: "fa-solid fa-envelope", label: "Email Sekolah" }
        ];

        container.innerHTML = items
          .map(
            (item) =>
              '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer" aria-label="' +
              item.label + '"><i class="' + item.icon + '"></i></a>'
          )
          .join("");
      };

      // Blok "Kontak Sekolah" di footer
      const renderFooterContact = () => {
        const container = document.querySelector('[data-render="footer-contact"]');
        if (!container) return;

        container.innerHTML =
          '<h3>Kontak Sekolah</h3>' +
          '<p><i class="fa-solid fa-location-dot"></i> ' + SITE_CONFIG.address + '</p>' +
          '<p><i class="fa-solid fa-phone"></i> ' + SITE_CONFIG.phone + '</p>' +
          '<p><i class="fa-solid fa-envelope"></i> ' + SITE_CONFIG.email + '</p>' +
          '<p><i class="fa-solid fa-clock"></i> ' + SITE_CONFIG.hours + '</p>';
      };

      // Blok "Media Sosial" di footer
      const renderFooterSocial = () => {
        const container = document.querySelector('[data-render="footer-social"]');
        if (!container) return;

        const items = [
          { url: SITE_CONFIG.social.instagram.url, icon: SITE_CONFIG.social.instagram.icon, label: SITE_CONFIG.social.instagram.label },
          { url: SITE_CONFIG.social.facebook.url, icon: SITE_CONFIG.social.facebook.icon, label: SITE_CONFIG.social.facebook.label },
          { url: "mailto:" + SITE_CONFIG.email, icon: "fa-solid fa-envelope", label: "Surel Resmi Sekolah" }
        ];

        container.innerHTML =
          '<h3>Media Sosial</h3>' +
          '<p>Ikuti kabar dan dokumentasi kegiatan belajar mengajar peserta didik kami:</p>' +
          '<ul class="footer-links">' +
          items
            .map(
              (item) =>
                '<li><a href="' + item.url + '" target="_blank" rel="noopener noreferrer">' +
                '<i class="' + item.icon + '"></i> ' + item.label +
                '</a></li>'
            )
            .join("") +
          '</ul>';
      };

      // Isi pop-up WhatsApp (teks sambutan + tombol chat)
      const renderWaPopup = () => {
        const container = document.querySelector('[data-render="wa-popup"] .wa-body');
        if (!container) return;

        container.innerHTML =
          '<p>' + SITE_CONFIG.waGreeting + '</p>' +
          '<a href="' + waHref(SITE_CONFIG.waMessages.ask) + '" target="_blank" rel="noopener noreferrer" class="wa-chat-btn">' +
          '<i class="fa-brands fa-whatsapp"></i> ' + SITE_CONFIG.waChat +
          '</a>';
      };

      renderTopbarPhone();
      renderWaLinks();
      renderTopSocial();
      renderFooterContact();
      renderFooterSocial();
      renderWaPopup();
    }
});
