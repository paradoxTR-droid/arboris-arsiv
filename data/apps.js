// Arşivdeki uygulamalar. Yeni uygulama eklemek için listeye bir kayıt ekle.
//
// id        : adres satırında kullanılır (app.html?id=...)
// apk       : GitHub Releases'taki dosya adresi. Boş bırakılırsa "hazırlanıyor" görünür.
// size      : APK boyutu, örn. "18 MB"
// features  : kısa madde listesi
// changelog : en yeni sürüm en üstte
window.ARCHIVE = {
  siteName: "Arboris",
  updated: "2026-10-29",
  apps: [
    {
      id: "varak",
      name: "Varak",
      category: "Belge",
      version: "1.0.1",
      minAndroid: "6.0",
      size: "121 MB",
      apk: "https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/varak-v1.0.1/varak-1.0.1.apk",
      description:
        "Ücretsiz ve tamamen çevrimdışı çalışan PDF uygulaması. Belgelerin cihazında kalır, hiçbir yere gönderilmez.",
      features: ["İnternetsiz çalışır", "Ücretsiz, reklamsız"],
      changelog: [
        { version: "1.0.1", notes: "Güvenlik ve kararlılık güncellemesi: dışarıdan gelen dosyalar daha güvenli açılır, büyük dosyalarda donma giderildi, tarama metin tanıma başarısız olsa da kaydedilir, dosyalar ve imza bulut yedeğine gitmez." },
        { version: "1.0.0", notes: "İlk yayın." }
      ]
    },
    {
      id: "arboris",
      name: "Arboris",
      category: "Oyun",
      version: "1.0.1",
      minAndroid: "6.0",
      size: "60 MB",
      apk: "https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/arboris-v1.0.1/arboris-1.0.1.apk",
      description:
        "Doğa sevgisi ve Türkiye kültürü temalı bilgi yarışması ve kelime oyunu. Doğru cevap verdikçe ağacın büyür.",
      features: [
        "Kültür, tarih, coğrafya ve edebiyat soruları",
        "Büyüyen ağaç mekaniği",
        "Kelime oyunu modu"
      ],
      changelog: [
        { version: "1.0.1", notes: "Güvenlik güncellemesi: puan hilesine karşı koruma, gizli profiller liderlikte görünmez." },
        { version: "1.0.0", notes: "İlk yayın." }
      ]
    },
    {
      id: "carpulse",
      name: "CarPulse",
      category: "Araç",
      version: "1.0.0",
      minAndroid: "6.0",
      size: "56 MB",
      apk: "https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/carpulse-v1.0.0/carpulse-1.0.0.apk",
      description:
        "OBD-II adaptörüyle aracına bağlanan modern tarayıcı ve gösterge paneli. Aracının verilerini anlık olarak takip et.",
      features: ["OBD-II bağlantısı", "Canlı gösterge paneli"],
      changelog: [{ version: "1.0.0", notes: "İlk yayın." }]
    },
    {
      id: "tamsana",
      name: "TamSana",
      category: "Sosyal",
      version: "1.0.0",
      minAndroid: "6.0",
      size: "60 MB",
      apk: "https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/tamsana-v1.0.0/tamsana-1.0.0.apk",
      description:
        "İlan verenlerle o ürünü arayanları bir araya getirir. Talebini yaz, sana uyan ilanlarla eşleş, doğrudan mesajlaş.",
      features: ["İlan ve talep oluşturma", "Otomatik eşleşme", "Uygulama içi mesajlaşma", "Şehre göre filtreleme"],
      changelog: [{ version: "1.0.0", notes: "İlk yayın." }]
    },
    {
      id: "harcama-takip",
      name: "Harcama Takip",
      category: "Finans",
      version: "1.0.0",
      minAndroid: "6.0",
      size: "52 MB",
      apk: "https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/harcama-takip-v1.0.0/harcama-takip-1.0.0.apk",
      description: "Günlük harcamalarını kaydet, paranın nereye gittiğini gör.",
      features: ["Harcama kaydı", "Kategoriye göre takip"],
      changelog: [{ version: "1.0.0", notes: "İlk yayın." }]
    }
  ]
};
