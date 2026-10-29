# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Anyone: friends who got a link, strangers arriving from search or a share, and people looking at the developer's work. Most arrive on a phone. Their job is to find an app, decide it is worth installing, and download the APK.

## Product Purpose

Arboris is a single developer's personal shelf of free Android apps that are not on the Play Store. The site lists each app, explains what it does, and hands over the APK with install help. Success is a visitor who downloads and installs an app without getting stuck or feeling unsafe.

## Positioning

One person's own apps, free, distributed directly as APKs outside the Play Store.

## Operating Context

- Visitors install by sideloading: download APK, allow the browser as an install source, accept a Play Protect warning. `kurulum.html` walks through it.
- APK files are hosted on GitHub Releases (`paradoxTR-droid/arboris-arsiv`).
- Site is static HTML/CSS/JS on Firebase Hosting; app data lives in `data/apps.js`.

## Capabilities and Constraints

- Current apps: Varak (offline PDF), Arboris (nature and Turkish culture quiz and word game, a tree grows with right answers), CarPulse (OBD-II scanner), TamSana (listing/request matching), Harcama Takip (expense tracker).
- All apps are free; each has version, minimum Android version, size, features, changelog.
- Content language: Turkish.
- No screenshots or icons of the apps are in the repo yet.

## Brand Commitments

- The site name stays "Arboris" (also the name of one of the apps).
- Voice: first person, plain, informal Turkish ("sen" form).

## Evidence on Hand

App names, descriptions, feature lists, sizes in `data/apps.js`. No app screenshots, icons, download counts, reviews, or testimonials exist; do not invent them.

## Product Principles

- Getting the APK installed comes first; nothing stands between the visitor and the download.
- Honest about sideloading: say plainly why warnings appear.
- It is one person's work, not a company; it should read that way.
