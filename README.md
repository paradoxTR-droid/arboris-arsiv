# Arboris

Android uygulamalarımın ücretsiz APK arşivi. Saf HTML/CSS/JS, build adımı yok. GitHub Pages'te yayınlanır.

## Yapı

- `index.html`: katalog (arama ve tür filtresi)
- `app.html?id=...`: uygulama sayfası
- `kurulum.html`: APK kurulum kılavuzu
- `data/apps.js`: tüm uygulama bilgileri (tek düzenlenecek dosya)

## Yeni sürüm / uygulama ekleme

1. Uygulama reposunda APK'yı üret: `flutter build apk --release`
2. Bu reponun **Releases** bölümünde yeni release aç (örn. etiket `varak-v1.0.0`) ve `build/app/outputs/flutter-apk/app-release.apk` dosyasını `varak-1.0.0.apk` adıyla ekle.
3. `data/apps.js` içinde ilgili kaydın `apk` alanına dosya adresini yaz:
   `https://github.com/paradoxTR-droid/arboris-arsiv/releases/download/varak-v1.0.0/varak-1.0.0.apk`
   `version`, `size` ve `changelog` alanlarını da güncelle.

Bu repo **public** olmalı. Uygulama kodları kendi private repolarında kalır, burada sadece APK'lar paylaşılır.

## Yerelde açma

```bash
python -m http.server 8765
```
