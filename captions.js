/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 8. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.2, tr: 'Kaç dakikada 50 L kalır?', en: 'When are 50 L left?',
      note: 'Bir depoda 200 litre su var ve dakikada 15 litre boşalıyor. Kaç dakika sonra depoda 50 litre kalır?' },
    { scene: 2, start: 10.8, end: 19.4, tr: 'Adım adım çözüm', en: 'A step-by-step solution',
      note: 'Önce değişkenleri belirleyelim: x geçen dakika, y kalan su. Fonksiyon: y eşittir 200 eksi 15x. 50 eşittir 200 eksi 15x; 15x eşittir 150; x eşittir 10.' },
    { scene: 2, start: 19.6, end: 27.8, tr: 'Kontrol', en: 'A check',
      note: 'Kontrol edelim: 200 eksi 15 çarpı 10, 50. Her adım bir öncekine dayanıyor: 10 dakika sonra 50 litre kalır.' },
    { scene: 3, start: 28.8, end: 35.2, tr: 'Farklı hedefler', en: 'Other targets',
      note: 'Hedef 20 litre olursa x eşittir 12. Hedef 250 litre olursa x eksi 3,3 çıkıyor.' },
    { scene: 3, start: 35.4, end: 45.8, tr: 'Karar adımı', en: 'A decision step',
      note: 'Zaman negatif olamaz; depo boşalırken 250 litreye ulaşılmaz. Algoritmaya bir karar adımı gerekiyor: x sıfırdan büyük ya da eşit mi?' },
    { scene: 4, start: 46.8, end: 56.8, tr: 'Adım listesi', en: 'Numbered steps',
      note: 'Algoritmayı adım adım yazalım: başla; başlangıç değerini ve değişimi al; fonksiyonu yaz; hedefi yerine koyup x’i çöz.' },
    { scene: 4, start: 57.0, end: 63.8, tr: 'Uyumlu bir bütün', en: 'A coherent whole',
      note: 'x sıfırdan küçükse bu değere ulaşılmaz; değilse sonucu yaz ve bitir. Bu adımlar her depo sorusunda işler.' },
    { scene: 5, start: 64.8, end: 73.2, tr: 'Akış şeması', en: 'A flowchart',
      note: 'Aynı algoritmayı akış şemasıyla gösterelim. Hedef 50 litre: x eşittir 10, evet yolundan sonuç yazılır.' },
    { scene: 5, start: 73.4, end: 79.8, tr: 'İki yol', en: 'Two paths',
      note: 'Hedef 250 litre: x negatif, hayır yolundan ulaşılamaz diye yazılır. Aynı algoritma, iki ifade biçimi.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Adımları ve ilişkileri açıkla', en: 'Explain the steps and relations',
      note: 'Aklında kalsın: adımları ve ilişkileri açıkla, kontrol ekle, adım listesi ya da akış şemasıyla yaz.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Sıralı, açık, eksiksiz!', en: 'Ordered, clear, complete!',
      note: 'Algoritma: sıralı, açık, eksiksiz!' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
