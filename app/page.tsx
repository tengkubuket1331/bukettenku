'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Camera,
  Leaf,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from 'lucide-react'

const bouquets = [
  {
    id: 'wisuda',
    label: 'Wisuda',
    name: 'The Graduate',
    description: 'Untuk merayakan babak baru dengan manis.',
    note: 'Paling disukai',
    color: 'yellow',
    imagePosition: 'center 22%',
  },
  {
    id: 'snack',
    label: 'Snack bouquet',
    name: 'Sweet Treats',
    description: 'Kejutan playful untuk teman tersayang.',
    note: 'Fun & playful',
    color: 'purple',
    imagePosition: '70% 52%',
  },
  {
    id: 'custom',
    label: 'Custom',
    name: 'Made for You',
    description: 'Cerita kamu, dirangkai jadi satu.',
    note: '100% personal',
    color: 'green',
    imagePosition: '30% 78%',
  },
]

export default function Page() {
  const [activeBouquet, setActiveBouquet] = useState('wisuda')
  const [menuOpen, setMenuOpen] = useState(false)

  const selected = bouquets.find((bouquet) => bouquet.id === activeBouquet) ?? bouquets[0]

  return (
    <main className="site-shell">
      <div className="announcement">
        <span>Pre-order wisuda dibuka sampai 20 Juni</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Pesan sekarang <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>

      <header className="navbar">
        <a className="brand" href="#top" aria-label="Rangkai ke halaman utama">
          <span className="brand-mark"><Leaf size={17} strokeWidth={1.8} /></span>
          <span>rangkai<span className="brand-dot">.</span></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navigasi utama">
          <a href="#koleksi" onClick={() => setMenuOpen(false)}>Koleksi</a>
          <a href="#cara-pesan" onClick={() => setMenuOpen(false)}>Cara pesan</a>
          <a href="#custom" onClick={() => setMenuOpen(false)}>Custom buket</a>
          <a href="#cerita" onClick={() => setMenuOpen(false)}>Cerita kami</a>
        </nav>
        <a className="nav-cta" href="https://instagram.com/riskialft_" target="_blank" rel="noreferrer">
          <Camera size={16} aria-hidden="true" /> DM Instagram
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> dibuat dengan niat baik</p>
          <h1>Bukan cuma<br /><em>buket.</em></h1>
          <p className="hero-text">Rangkaian kecil untuk momen-momen yang ingin kamu ingat lebih lama. Dari bunga, camilan, sampai cerita yang cuma kamu yang tahu.</p>
          <div className="hero-actions">
            <a className="primary-button" href="https://instagram.com/riskialft_" target="_blank" rel="noreferrer">Mulai merangkai <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#koleksi">Lihat koleksi <ChevronDown size={16} /></a>
          </div>
        </div>
        <div className="hero-art">
          <div className="sun-disc" />
          <div className="hero-image-wrap">
            <img src="/bouquet-hero.png" alt="Buket wisuda dengan bunga ungu, kuning, dan dedaunan hijau" />
          </div>
          <div className="hero-tag tag-top"><span className="tag-line" /> fresh <strong>01</strong></div>
          <div className="hero-tag tag-bottom"><span>dirangkai satu per satu</span><ArrowUpRight size={15} /></div>
          <div className="scribble" aria-hidden="true">for your<br /><i>special</i> day</div>
        </div>
      </section>

      <section className="collection-section" id="koleksi">
        <div className="section-heading">
          <div><p className="eyebrow">pilih suasananya</p><h2>Rangkai sesuai <em>momen.</em></h2></div>
          <p className="section-intro">Setiap buket punya caranya sendiri untuk bilang, "aku ingat kamu."</p>
        </div>
        <div className="collection-layout">
          <div className="bouquet-list" role="tablist" aria-label="Pilihan koleksi buket">
            {bouquets.map((bouquet, index) => (
              <button className={activeBouquet === bouquet.id ? `bouquet-tab active ${bouquet.color}` : 'bouquet-tab'} key={bouquet.id} onClick={() => setActiveBouquet(bouquet.id)} role="tab" aria-selected={activeBouquet === bouquet.id}>
                <span className="tab-number">0{index + 1}</span><span className="tab-label">{bouquet.label}</span><span className="tab-arrow"><ArrowUpRight size={18} /></span>
              </button>
            ))}
            <a className="all-link" href="https://instagram.com" target="_blank" rel="noreferrer">Lihat semua di Instagram <ArrowUpRight size={15} /></a>
          </div>
          <div className={`featured-bouquet ${selected.color}`}>
            <div className="featured-copy"><span className="featured-note">{selected.note}</span><h3>{selected.name}</h3><p>{selected.description}</p><a href="https://instagram.com" target="_blank" rel="noreferrer">Tanya ketersediaan <ArrowUpRight size={16} /></a></div>
            <div className="featured-photo"><img src="/bouquet-hero.png" alt="Detail rangkaian buket" style={{ objectPosition: selected.imagePosition }} /></div>
          </div>
        </div>
      </section>

      <section className="custom-section" id="custom">
        <div className="custom-card">
          <div><p className="eyebrow">punya ide sendiri?</p><h2>Yang paling berarti,<br /><em>dibuat khusus.</em></h2><p className="custom-text">Ceritakan orangnya, momennya, atau warna favoritnya. Kami bantu wujudkan jadi buket yang tidak ada duanya.</p><a className="outline-button" href="https://instagram.com/riskialft_" target="_blank" rel="noreferrer"><Camera size={17} /> Ceritakan idemu via DM</a></div>
          <div className="custom-quote"><span className="quote-mark">"</span><p>Hal kecil yang dipikirkan dengan baik selalu terasa besar.</p><span className="quote-line" /></div>
        </div>
      </section>

      <section className="steps-section" id="cara-pesan">
        <div className="section-heading compact"><div><p className="eyebrow">semudah itu</p><h2>Dari ide jadi <em>nyata.</em></h2></div><a className="text-link" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Atau chat via WhatsApp <ArrowUpRight size={16} /></a></div>
        <div className="steps-grid"><div className="step"><span>01</span><h3>Kirim referensi</h3><p>DM kami foto, warna, atau cerita yang kamu mau.</p></div><div className="step"><span>02</span><h3>Kami rangkai</h3><p>Kamu dapat preview dan update prosesnya.</p></div><div className="step"><span>03</span><h3>Siap jadi kejutan</h3><p>Diantar atau diambil sesuai waktu yang kamu pilih.</p></div></div>
      </section>

      <footer className="footer" id="cerita"><div className="brand"><span className="brand-mark"><Leaf size={17} strokeWidth={1.8} /></span><span>rangkai<span className="brand-dot">.</span></span></div><p>Small gestures, thoughtfully made.</p><div className="footer-links"><a href="https://instagram.com/riskialft_" target="_blank" rel="noreferrer"><Camera size={16} /> Instagram</a><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a></div></footer>
      <a className="floating-dm" href="https://instagram.com/riskialft_" target="_blank" rel="noreferrer"><Camera size={18} /> <span>DM untuk pesan</span></a>
    </main>
  )
}
