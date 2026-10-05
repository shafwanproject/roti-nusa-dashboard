# Roti Nusa — AI Ordering & Admin Dashboard

Prototype sistem pemesanan berbasis AI untuk UMKM bakery.

## Overview

Roti Nusa memungkinkan pelanggan melakukan pemesanan melalui Telegram menggunakan chatbot AI.

Pesanan yang telah dikonfirmasi oleh pelanggan disimpan ke Botpress Tables dan ditampilkan pada admin dashboard. Admin kemudian dapat memeriksa pesanan dan menerima atau menolak pesanan.

## System Flow

Telegram  
↓  
Botpress AI  
↓  
Botpress Tables  
↓  
Node.js + Express API  
↓  
Admin Dashboard

## Features

### Customer
- Pemesanan melalui Telegram
- AI mengumpulkan detail pesanan
- Perhitungan total harga
- Konfirmasi pesanan
- Perubahan pesanan sebelum konfirmasi
- Permintaan pembatalan

### Admin
- Melihat pesanan
- Melihat detail pesanan
- Filter berdasarkan status
- Menerima pesanan
- Menolak pesanan
- Melihat permintaan pembatalan

## Tech Stack

- Botpress
- Telegram
- Botpress Tables
- Node.js
- Express.js
- JavaScript
- HTML
- CSS
- REST API

## Order Status

- `Pending` — menunggu pemeriksaan admin
- `Confirmed` — pesanan diterima admin
- `Rejected` — pesanan ditolak admin

## Project Purpose

Project ini dibuat sebagai portfolio project untuk menunjukkan implementasi AI chatbot yang terhubung dengan database dan admin dashboard.

AI membantu proses pemesanan, sementara keputusan akhir pesanan tetap berada pada admin.