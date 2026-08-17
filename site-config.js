/* =====================================================
   SITE CONFIG — SUMBER DATA TUNGGAL
   Nilai kontak, media sosial, dan WhatsApp yang dipakai
   berulang di halaman situs (index.html & berita.html).
   Ubah cukup di sini agar perubahan tersebar otomatis.
   ===================================================== */

const SITE_CONFIG = {
  schoolName: "SLB Rumah Melati",

  /* Kontak */
  phone: "(021) 8838-5678",
  email: "info@slbrumahmelati.sch.id",
  address: "SLB Rumah Melati, Bekasi, Jawa Barat",
  hours: "Senin - Jumat: 07.30 - 15.00 WIB",

  /* WhatsApp — nomor internasional tanpa tanda "+" */
  whatsappNumber: "6281234567890",

  /* Pesan tombol CTA WhatsApp (dipetakan lewat data-wa di HTML) */
  waMessages: {
    consult: "Halo Admin SLB Rumah Melati, saya ingin konsultasi pendaftaran",
    visit: "Halo Admin SLB Rumah Melati, saya ingin menjadwalkan kunjungan ke sekolah",
    requirements: "Halo Admin SLB Rumah Melati, saya ingin informasi persyaratan pendaftaran",
    ask: "Halo Admin SLB Rumah Melati, saya ingin bertanya"
  },

  /* Popup WhatsApp melayang */
  waGreeting: "Halo! 👋 Ada yang bisa kami bantu seputar program dan pendaftaran di SLB Rumah Melati?",
  waChat: "Mulai Chat via WhatsApp",

  /* Media sosial */
  social: {
    instagram: { url: "https://instagram.com", icon: "fa-brands fa-instagram", label: "Instagram Official" },
    facebook: { url: "https://facebook.com", icon: "fa-brands fa-facebook", label: "Facebook Page" }
  }
};