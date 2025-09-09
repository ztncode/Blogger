
(async function(){
  const code = window.location.pathname.replace(/^\/|\/$/g, '');

  // kalau path kosong (home) / artikel lain → jangan tampilkan shortBox
  if (!code || code === "index.html" || code === "post.html" || /\./.test(code)) {
    return; // berhenti, box tetap hidden
  }

  // tampilkan box hanya jika memang kita akan cek shortlink
  document.getElementById("shortBox").style.display = "flex";

  const API = "https://script.google.com/macros/s/AKfycbwATa150dxYaUwHv9U7RMgeGqiaN4nVR2EWcGbJjw28WVc7IyxMYzjYygBzCK8J8uN8wQ/exec";
  try {
    const res = await fetch(API + "?code=" + encodeURIComponent(code));
    const data = await res.json();

    if (data.status === "ok" && data.url) {
      document.getElementById("urlPreview").innerText = data.url;

      let detik = 5; // hitung mundur
      const countdownEl = document.getElementById("countdown");
      countdownEl.innerText = detik;

      const timer = setInterval(() => {
        detik--;
        countdownEl.innerText = detik;
        if (detik <= 0) {
          clearInterval(timer);
          window.location.href = data.url; // redirect
        }
      }, 1000);
    } else {
      document.getElementById("urlPreview").innerText = "Link tidak ditemukan.";
      document.getElementById("countdown").style.display = "none";
    }
  } catch (err) {
    document.getElementById("urlPreview").innerText = "Gagal menghubungi server.";
    document.getElementById("countdown").style.display = "none";
  }
})();