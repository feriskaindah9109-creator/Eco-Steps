/* =====================================
   ECO STEPS - JAVASCRIPT
===================================== */

/* 1. MENU NAVIGASI */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const terbuka = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(terbuka));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* 2. PENCARIAN MATERI */
const materiEco = [
  {
    judul: "Sampah Organik",
    kata: "organik daun sisa makanan kulit buah",
    isi: "Sampah yang berasal dari makhluk hidup, seperti daun, sisa sayuran, dan kulit buah. Sampah ini dapat diolah menjadi kompos."
  },
  {
    judul: "Sampah Anorganik",
    kata: "anorganik plastik botol kardus kertas kaca",
    isi: "Sampah seperti botol plastik, kardus, kertas, dan kaca dapat dipilah untuk digunakan kembali atau didaur ulang sesuai jenisnya."
  },
  {
    judul: "Sampah Residu",
    kata: "residu popok tisu kotor kemasan sulit didaur ulang",
    isi: "Sampah yang sulit didaur ulang melalui fasilitas biasa. Pisahkan dari sampah yang masih bisa dimanfaatkan."
  },
  {
    judul: "Sampah B3 Rumah Tangga",
    kata: "baterai lampu obat elektronik berbahaya",
    isi: "Baterai bekas, lampu tertentu, dan bahan kimia rumah tangga perlu ditangani secara khusus. Jangan mencampurnya dengan sampah biasa."
  },
  {
    judul: "Mengurangi Sampah Plastik",
    kata: "plastik tas belanja tumbler wadah pakai ulang",
    isi: "Bawa tas belanja dan botol minum sendiri. Pilih barang yang dapat digunakan berulang kali untuk mengurangi sampah sekali pakai."
  },
  {
    judul: "Membuat Kompos",
    kata: "kompos organik daun kering sisa sayur",
    isi: "Sisa bahan organik tertentu dapat diolah menjadi kompos dengan pemilahan dan pengelolaan yang tepat."
  },
  {
    judul: "Daur Ulang Kertas",
    kata: "kertas buku catatan kardus daur ulang",
    isi: "Gunakan sisi kertas yang masih kosong untuk menulis. Kertas yang sudah tidak terpakai dapat dikumpulkan secara terpisah agar mudah didaur ulang."
  },
  {
    judul: "Menjaga Kebersihan Lingkungan",
    kata: "lingkungan bersih kerja bakti sampah",
    isi: "Buang sampah pada tempatnya, pilah sesuai jenis, dan ikut menjaga kebersihan rumah, sekolah, serta lingkungan sekitar."
  }
];

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchResults = document.querySelector("#searchResults");

function cariMateri() {
  if (!searchInput || !searchResults) return;

  const kataKunci = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (!kataKunci) {
    searchResults.innerHTML =
      '<p class="search-empty">Ketik kata kunci, misalnya "plastik" atau "kompos".</p>';
    return;
  }

  const hasil = materiEco.filter((materi) =>
    (materi.judul + " " + materi.kata + " " + materi.isi)
      .toLowerCase()
      .includes(kataKunci)
  );

  if (hasil.length === 0) {
    searchResults.innerHTML =
      '<p class="search-empty">Materi belum ditemukan. Coba kata kunci lain, ya!</p>';
    return;
  }

  hasil.forEach((materi) => {
    const kartu = document.createElement("article");
    kartu.className = "search-result";

    const judul = document.createElement("strong");
    judul.textContent = materi.judul;

    const isi = document.createElement("p");
    isi.textContent = materi.isi;

    kartu.append(judul, isi);
    searchResults.appendChild(kartu);
  });
}

if (searchButton) {
  searchButton.addEventListener("click", cariMateri);
}

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") cariMateri();
  });
}

/* 3. AKTIVITAS PEMILAHAN SAMPAH */
const soalPilah = [
  {
    emoji: "🍌",
    nama: "Kulit pisang",
    benar: "organik",
    penjelasan: "Kulit pisang berasal dari tumbuhan dan termasuk sampah organik."
  },
  {
    emoji: "🧴",
    nama: "Botol plastik kosong",
    benar: "daurulang",
    penjelasan: "Botol plastik kosong dapat dipilah untuk digunakan kembali atau didaur ulang sesuai fasilitas setempat."
  },
  {
    emoji: "🍂",
    nama: "Daun kering",
    benar: "organik",
    penjelasan: "Daun kering dapat dimanfaatkan sebagai bahan kompos."
  },
  {
    emoji: "🔋",
    nama: "Baterai bekas",
    benar: "khusus",
    penjelasan: "Baterai bekas harus dipisahkan dan diserahkan ke tempat pengumpulan khusus."
  },
  {
    emoji: "🧻",
    nama: "Tisu kotor",
    benar: "residu",
    penjelasan: "Tisu kotor umumnya sulit didaur ulang dan termasuk residu."
  },
  {
    emoji: "📦",
    nama: "Kardus bersih",
    benar: "daurulang",
    penjelasan: "Kardus bersih dapat digunakan kembali atau dikumpulkan untuk didaur ulang."
  },
  {
    emoji: "🥬",
    nama: "Sisa sayuran",
    benar: "organik",
    penjelasan: "Sisa sayuran bisa diolah menjadi kompos dengan pengelolaan yang tepat."
  },
  {
    emoji: "💡",
    nama: "Lampu bekas tertentu",
    benar: "khusus",
    penjelasan: "Jenis lampu tertentu memerlukan penanganan khusus. Jangan dicampur dengan sampah biasa."
  },
  {
    emoji: "🥫",
    nama: "Kaleng minuman kosong",
    benar: "daurulang",
    penjelasan: "Kaleng kosong dapat dikumpulkan untuk didaur ulang. Hati-hati terhadap sisi yang tajam."
  },
  {
    emoji: "🪥",
    nama: "Sikat gigi bekas",
    benar: "residu",
    penjelasan: "Sikat gigi biasa umumnya sulit didaur ulang melalui fasilitas rumah tangga."
  }
];

let indeksPilah = 0;
let skorPilah = 0;
let sudahMenjawabPilah = false;

const wasteEmoji = document.querySelector("#wasteEmoji");
const wasteName = document.querySelector("#wasteName");
const wasteCounter = document.querySelector("#wasteCounter");
const sortOptions = document.querySelector("#sortOptions");
const sortFeedback = document.querySelector("#sortFeedback");
const nextWaste = document.querySelector("#nextWaste");

function tampilkanSoalPilah() {
  const soal = soalPilah[indeksPilah];

  wasteEmoji.textContent = soal.emoji;
  wasteName.textContent = soal.nama;
  wasteCounter.textContent =
    "Benda " + (indeksPilah + 1) + " dari " + soalPilah.length;

  sortFeedback.textContent = "Pilih kategori yang menurutmu tepat.";
  sortOptions.innerHTML = "";
  sudahMenjawabPilah = false;
  nextWaste.disabled = true;
  nextWaste.textContent = "Benda berikutnya →";

  const pilihan = [
    { nilai: "organik", teks: "🍂 Organik" },
    { nilai: "daurulang", teks: "📦 Dapat didaur ulang" },
    { nilai: "residu", teks: "🧻 Residu" },
    { nilai: "khusus", teks: "🔋 Khusus/berbahaya" }
  ];

  pilihan.forEach((item) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "sort-option";
    tombol.textContent = item.teks;

    tombol.addEventListener("click", () => {
      if (sudahMenjawabPilah) return;
      sudahMenjawabPilah = true;

      const benar = item.nilai === soal.benar;
      if (benar) skorPilah++;

      sortOptions.querySelectorAll("button").forEach((btn) => {
        btn.disabled = true;
        const nilaiBtn = pilihan.find(
          (p) => p.teks === btn.textContent
        )?.nilai;

        if (nilaiBtn === soal.benar) {
          btn.classList.add("correct");
        } else if (btn === tombol) {
          btn.classList.add("incorrect");
        }
      });

      sortFeedback.textContent =
        (benar ? "Benar! " : "Belum tepat. ") +
        soal.penjelasan;

      nextWaste.disabled = false;
      nextWaste.textContent =
        indeksPilah === soalPilah.length - 1
          ? "Lihat Hasil →"
          : "Benda berikutnya →";
    });

    sortOptions.appendChild(tombol);
  });
}

nextWaste.addEventListener("click", () => {
  if (!sudahMenjawabPilah) return;

  indeksPilah++;

  if (indeksPilah >= soalPilah.length) {
    wasteEmoji.textContent = "🌱";
    wasteName.textContent = "Aktivitas selesai!";
    wasteCounter.textContent = "Semua benda sudah dijawab";
    sortOptions.innerHTML = "";
    sortFeedback.textContent =
      "Skor kamu " + skorPilah + " dari " + soalPilah.length +
      ". " + (skorPilah >= 8
        ? "Hebat! Kamu sudah memahami dasar pemilahan sampah."
        : "Yuk, pelajari lagi materi pemilahan sampah dan coba ulangi.");

    nextWaste.textContent = "Ulangi Aktivitas";
    nextWaste.disabled = false;
    sudahMenjawabPilah = false;

    nextWaste.onclick = () => {
      indeksPilah = 0;
      skorPilah = 0;
      nextWaste.onclick = null;
      tampilkanSoalPilah();
    };
    return;
  }

  tampilkanSoalPilah();
});

tampilkanSoalPilah();

/* 4. PANDUAN DAUR ULANG */
const panduanDaurUlang = {
  kardus: {
    judul: "Membuat Tempat Penyimpanan dari Kardus",
    deskripsi: "Kardus yang masih kokoh bisa dimanfaatkan kembali sebagai tempat menyimpan alat tulis atau barang kecil.",
    langkah: [
      "Pilih kardus yang bersih dan masih kuat.",
      "Potong kardus sesuai ukuran yang dibutuhkan. Minta bantuan orang dewasa jika menggunakan alat tajam.",
      "Lipat dan rekatkan bagian yang terbuka menggunakan perekat.",
      "Hias bagian luar dengan kertas bekas yang masih layak.",
      "Gunakan untuk menyimpan barang kecil agar lebih rapi."
    ]
  },
  botol: {
    judul: "Membuat Pot Tanaman dari Botol",
    deskripsi: "Botol plastik yang bersih bisa digunakan kembali sebagai wadah tanaman kecil.",
    langkah: [
      "Cuci botol dan biarkan sampai kering.",
      "Minta bantuan orang dewasa untuk membuat lubang drainase jika diperlukan.",
      "Isi botol dengan media tanam secukupnya.",
      "Tanam bibit yang sesuai dengan ukuran wadah.",
      "Letakkan di tempat yang mendapat cahaya sesuai kebutuhan tanaman dan rawat secara rutin."
    ]
  },
  kertas: {
    judul: "Memanfaatkan Kertas Bekas",
    deskripsi: "Kertas yang masih memiliki sisi kosong bisa digunakan kembali sebelum akhirnya didaur ulang.",
    langkah: [
      "Kumpulkan kertas yang satu sisinya masih kosong.",
      "Pisahkan dari kertas yang basah atau terkena minyak.",
      "Satukan beberapa lembar menjadi buku catatan sederhana.",
      "Gunakan untuk latihan, catatan, atau membuat daftar kegiatan.",
      "Kumpulkan sisa kertas yang tidak terpakai untuk didaur ulang."
    ]
  },
  kaleng: {
    judul: "Membuat Tempat Alat Tulis dari Kaleng",
    deskripsi: "Kaleng yang aman dan sudah dibersihkan dapat digunakan kembali untuk menyimpan alat tulis.",
    langkah: [
      "Pilih kaleng yang bersih dan tidak berkarat.",
      "Pastikan tidak ada tepi tajam. Minta bantuan orang dewasa untuk memeriksanya.",
      "Jika tepinya tajam, jangan gunakan kaleng tersebut.",
      "Hias bagian luar dengan kertas bekas atau bahan yang tersedia.",
      "Gunakan untuk menyimpan pensil dan pulpen."
    ]
  }
};

const guideDetail = document.querySelector("#guideDetail");
const guideTitle = document.querySelector("#guideTitle");
const guideDescription = document.querySelector("#guideDescription");
const guideSteps = document.querySelector("#guideSteps");

document.querySelectorAll("[data-guide]").forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const panduan = panduanDaurUlang[tombol.dataset.guide];
    if (!panduan || !guideDetail || !guideTitle ||
        !guideDescription || !guideSteps) return;

    guideTitle.textContent = panduan.judul;
    guideDescription.textContent = panduan.deskripsi;
    guideSteps.innerHTML = "";

    panduan.langkah.forEach((langkah) => {
      const item = document.createElement("li");
      item.textContent = langkah;
      guideSteps.appendChild(item);
    });

    guideDetail.hidden = false;
    guideDetail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

const guideClose = document.querySelector("#guideClose");

if (guideClose && guideDetail) {
  guideClose.addEventListener("click", () => {
    guideDetail.hidden = true;
  });
}

/* 5. CHECKLIST AKSI HIJAU */
const checklistItems = document.querySelectorAll(".checklist input[type='checkbox']");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const resetChecklist = document.querySelector("#resetChecklist");

function perbaruiChecklist() {
  const total = checklistItems.length;
  const selesai = document.querySelectorAll(
    ".checklist input[type='checkbox']:checked"
  ).length;

  const persen = total ? Math.round((selesai / total) * 100) : 0;

  if (progressBar) {
    progressBar.style.width = persen + "%";
    progressBar.setAttribute("aria-valuenow", String(persen));
  }

  if (progressText) {
    progressText.textContent = selesai + " dari " + total +
      " kegiatan selesai (" + persen + "%)";
  }
}

checklistItems.forEach((item) => {
  item.addEventListener("change", perbaruiChecklist);
});

if (resetChecklist) {
  resetChecklist.addEventListener("click", () => {
    checklistItems.forEach((item) => {
      item.checked = false;
    });
    perbaruiChecklist();
  });
}

perbaruiChecklist();

/* 6. KUIS EDUKASI 10 SOAL */
const soalKuis = [
  {
    tanya: "Manakah contoh sampah organik?",
    opsi: ["Botol kaca", "Kulit buah", "Baterai bekas", "Kaleng minuman"],
    benar: 1,
    alasan: "Kulit buah berasal dari tumbuhan dan dapat dikelola sebagai sampah organik."
  },
  {
    tanya: "Apa tindakan yang paling tepat untuk mengurangi sampah plastik?",
    opsi: ["Memakai kantong baru setiap hari", "Membuang plastik ke sungai", "Membawa tas belanja pakai ulang", "Membakar plastik"],
    benar: 2,
    alasan: "Tas belanja pakai ulang membantu mengurangi kebutuhan kantong sekali pakai."
  },
  {
    tanya: "Sebelum botol plastik dikumpulkan untuk didaur ulang, sebaiknya...",
    opsi: ["Dibiarkan berisi minuman", "Dikosongkan dan dibersihkan bila diperlukan", "Dicampur dengan sisa makanan", "Dibakar dahulu"],
    benar: 1,
    alasan: "Botol yang kosong dan cukup bersih lebih mudah ditangani dalam proses pengumpulan."
  },
  {
    tanya: "Sampah daun kering yang dikelola dengan tepat dapat dimanfaatkan menjadi...",
    opsi: ["Kompos", "Bensin", "Kaca", "Logam"],
    benar: 0,
    alasan: "Daun kering dapat menjadi bahan kompos jika proses pengolahannya sesuai."
  },
  {
    tanya: "Ke mana baterai bekas sebaiknya disalurkan?",
    opsi: ["Ke tempat sampah organik", "Ke sungai", "Ke pengumpulan khusus yang sesuai", "Dikubur sembarangan"],
    benar: 2,
    alasan: "Baterai bekas perlu dipisahkan dan diserahkan ke tempat pengumpulan yang sesuai."
  },
  {
    tanya: "Apa arti menggunakan kembali atau reuse?",
    opsi: ["Membakar barang bekas", "Menggunakan barang kembali sesuai fungsinya", "Membuang semua barang", "Membeli barang baru terus-menerus"],
    benar: 1,
    alasan: "Reuse berarti menggunakan kembali barang agar masa pakainya lebih panjang."
  },
  {
    tanya: "Mengapa sampah perlu dipilah dari awal?",
    opsi: ["Agar sampah bertambah", "Agar semua sampah tercampur", "Agar pengolahan dan daur ulang lebih mudah", "Agar lingkungan semakin kotor"],
    benar: 2,
    alasan: "Pemilahan membantu bahan yang masih bermanfaat diproses dengan lebih tepat."
  },
  {
    tanya: "Manakah contoh kebiasaan hemat air?",
    opsi: ["Membiarkan keran menyala", "Memakai air seperlunya", "Mencuci kendaraan setiap jam", "Membuang sampah ke selokan"],
    benar: 1,
    alasan: "Menggunakan air seperlunya membantu mengurangi pemborosan air bersih."
  },
  {
    tanya: "Apa yang sebaiknya dilakukan terhadap kardus bersih yang masih layak?",
    opsi: ["Langsung dibakar", "Dibuang ke sungai", "Digunakan kembali atau dikumpulkan untuk didaur ulang", "Dicampur dengan baterai bekas"],
    benar: 2,
    alasan: "Kardus bersih dapat dimanfaatkan kembali atau disalurkan ke proses daur ulang."
  },
  {
    tanya: "Apa langkah sederhana menjaga lingkungan sekolah?",
    opsi: ["Membuang sampah sembarangan", "Membiarkan keran bocor", "Memilah sampah dan menjaga kebersihan kelas", "Merusak tanaman"],
    benar: 2,
    alasan: "Memilah sampah dan menjaga kebersihan kelas merupakan kebiasaan sederhana yang berdampak positif."
  }
];

let indeksKuis = 0;
let skorKuis = 0;
let jawabanTerpilih = false;

const quizQuestion = document.querySelector("#quizQuestion");
const quizAnswers = document.querySelector("#quizAnswers");
const quizNumber = document.querySelector("#quizNumber");
const quizProgressBar = document.querySelector("#quizProgressBar");
const quizFeedback = document.querySelector("#quizFeedback");
const quizNext = document.querySelector("#quizNext");
const quizResult = document.querySelector("#quizResult");
const quizScore = document.querySelector("#quizScore");
const quizRestart = document.querySelector("#quizRestart");

function tampilkanSoalKuis() {
  if (!quizQuestion || !quizAnswers) return;

  if (indeksKuis >= soalKuis.length) {
    quizQuestion.textContent = "Kuis selesai! Terima kasih sudah belajar.";
    quizAnswers.innerHTML = "";

    if (quizNumber) quizNumber.textContent = "Selesai";
    if (quizProgressBar) quizProgressBar.style.width = "100%";
    if (quizFeedback) {
      quizFeedback.textContent =
        "Kamu menjawab benar " + skorKuis + " dari " +
        soalKuis.length + " soal.";
    }

    if (quizNext) quizNext.hidden = true;
    if (quizResult) quizResult.hidden = false;
    if (quizScore) {
      quizScore.textContent = skorKuis + " / " + soalKuis.length;
    }
    return;
  }

  const soal = soalKuis[indeksKuis];
  quizQuestion.textContent = soal.tanya;
  quizAnswers.innerHTML = "";
  jawabanTerpilih = false;

  if (quizNumber) {
    quizNumber.textContent =
      "SOAL " + (indeksKuis + 1) + " DARI " + soalKuis.length;
  }

  if (quizProgressBar) {
    quizProgressBar.style.width =
      (indeksKuis / soalKuis.length * 100) + "%";
  }

  if (quizFeedback) quizFeedback.textContent = "";
  if (quizNext) {
    quizNext.hidden = false;
    quizNext.disabled = true;
    quizNext.textContent =
      indeksKuis === soalKuis.length - 1 ? "Lihat Hasil →" : "Soal Berikutnya →";
  }
  if (quizResult) quizResult.hidden = true;

  soal.opsi.forEach((opsi, nomor) => {
    const tombol = document.createElement("button");
    tombol.type = "button";
    tombol.className = "quiz-answer";
    tombol.textContent = String.fromCharCode(65 + nomor) + ". " + opsi;

    tombol.addEventListener("click", () => {
      if (jawabanTerpilih) return;
      jawabanTerpilih = true;

      const benar = nomor === soal.benar;
      if (benar) skorKuis++;

      quizAnswers.querySelectorAll("button").forEach((item, i) => {
        item.disabled = true;
        if (i === soal.benar) {
          item.classList.add("correct");
        } else if (i === nomor && !benar) {
          item.classList.add("incorrect");
        }
      });

      if (quizFeedback) {
        quizFeedback.textContent =
          (benar ? "Benar! " : "Belum tepat. ") + soal.alasan;
      }

      if (quizNext) quizNext.disabled = false;
    });

    quizAnswers.appendChild(tombol);
  });
}

if (quizNext) {
  quizNext.addEventListener("click", () => {
    if (!jawabanTerpilih) return;
    indeksKuis++;
    tampilkanSoalKuis();
  });
}

if (quizRestart) {
  quizRestart.addEventListener("click", () => {
    indeksKuis = 0;
    skorKuis = 0;
    jawabanTerpilih = false;
    tampilkanSoalKuis();
  });
}

tampilkanSoalPilah();
tampilkanSoalKuis();

/* 7. TAHUN FOOTER OTOMATIS */
const footerYear = document.querySelector("#footerYear");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}