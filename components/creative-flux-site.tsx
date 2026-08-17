'use client'

import { ArrowUpRight, ChevronDown, Code2, Layers3, Menu, Network, ShieldCheck, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const logoUrl = '/creative-flux-logo.png'

const services = [
  { number: '01', icon: Code2, title: 'Mahsulot ishlab chiqish', text: 'G‘oyani aniq strategiya, kuchli UX va barqaror kod orqali ishlaydigan mahsulotga aylantiramiz.' },
  { number: '02', icon: Layers3, title: 'Raqamli platformalar', text: 'Biznesni tezlashtiradigan, kengayadigan va har qanday ekran uchun tayyor platformalar yaratamiz.' },
  { number: '03', icon: Sparkles, title: 'AI va avtomatlashtirish', text: 'Takroriy jarayonlarni soddalashtirib, jamoalar uchun aqlli va samarali vositalar quramiz.' },
]

const departments = [
  { icon: ShieldCheck, title: 'Creative Flux Raqamli xavfsizlik', text: 'Serverlar bilan muntazam aloqa, firibgarlikni aniqlash, shikoyatlarni qabul qilish, ma’lumotlarni qayta ishlash va email manzillarni tekshirish.', status: 'Bo‘lim yaratilish rejimida' },
  { icon: Network, title: 'Creative Flux Nexus', text: 'Web-saytlarni boshqarish, server statistikalarini nazorat qilish va favqulodda xabarnomalarni yuborish.', status: 'Bo‘lim yaratilish rejimida' },
]

export function CreativeFluxSite() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="animate-header-in fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" aria-label="Creative Flux bosh sahifa">
            <img src={logoUrl} alt="Creative Flux logotipi" className="size-9 object-contain" />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.2em]">Creative Flux</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Asosiy navigatsiya">
            <a className="transition-colors hover:text-foreground" href="#about">Biz haqimizda</a>
            <a className="transition-colors hover:text-foreground" href="#services">Yo‘nalishlar</a><a className="transition-colors hover:text-foreground" href="#departments">Bo‘limlar</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Aloqa</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent sm:flex">Loyiha boshlash <ArrowUpRight className="size-4" /></a>
          <button className="rounded-full border border-border p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}>{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-4 border-t border-border px-6 py-5 text-sm md:hidden"><a href="#about" onClick={() => setMenuOpen(false)}>Biz haqimizda</a><a href="#services" onClick={() => setMenuOpen(false)}>Yo‘nalishlar</a><a href="#departments" onClick={() => setMenuOpen(false)}>Bo‘limlar</a><a href="#contact" onClick={() => setMenuOpen(false)}>Aloqa</a></nav>}
      </header>

      <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-10">
        <div className="pointer-events-none absolute right-[-12rem] top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-accent/8 blur-3xl" />
        <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-hero-copy">
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-accent"><span className="size-2 animate-pulse rounded-full bg-accent" /> 2024 yildan beri raqamli kelajak</p>
            <h1 className="max-w-4xl text-balance text-6xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem]">Creative<br /><span className="text-muted-foreground">Flux.</span></h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">Creative Flux — murakkab g‘oyalarni sodda, tezkor va ta’sirli dasturiy mahsulotlarga aylantiradigan mustaqil texnologiya kompaniyasi.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#services" className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Nimalar qilamiz <ArrowUpRight className="size-4" /></a><a href="#about" className="flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground hover:text-foreground">Bizni tanishing <ChevronDown className="size-4" /></a></div>
          </div>
          <div className="relative flex justify-center lg:justify-end"><div className="animate-orbit absolute size-72 rounded-full border border-accent/20 lg:size-[30rem]" /><img src={logoUrl} alt="Creative Flux qalqon va qanot logotipi" className="relative z-10 w-64 drop-shadow-[0_0_45px_rgba(217,169,77,0.18)] sm:w-80 lg:w-[30rem]" /></div>
        </div>
        <div className="absolute bottom-8 left-6 right-6 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:left-10 lg:right-10"><span>Toshkent / Uzbekistan</span><span>Creative technology studio</span><span className="hidden sm:block">Scroll to explore ↓</span></div>
      </section>

      <section id="about" className="animate-section-in border-y border-border bg-card/30"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32"><p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">01 / Biz haqimizda</p><div><h2 className="max-w-3xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Texnologiya — bu vosita. <span className="text-muted-foreground">Ta’sir esa maqsad.</span></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Creative Flux 2024-yilda Sherzod Raxmatullayev tomonidan tashkil etilgan. Biz kelajakni kutib o‘tirmaymiz — uni bugun quramiz. Har bir mahsulotimizda aniqlik, tezlik va insoniy tajribani birlashtiramiz.</p><div className="mt-12 flex gap-12"><div><p className="font-mono text-4xl text-accent">24</p><p className="mt-2 text-sm text-muted-foreground">Boshlangan yil</p></div><div><p className="font-mono text-4xl text-accent">∞</p><p className="mt-2 text-sm text-muted-foreground">Imkoniyatlar</p></div></div></div></div></section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">02 / Yo‘nalishlar</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Biz nima qilamiz</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Har bir loyiha uchun to‘g‘ri texnologiya, toza dizayn va uzoq muddatli fikrlash.</p></div><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.number} className="group flex min-h-72 flex-col justify-between bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-card sm:p-9"><div className="flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">{service.number}</span><Icon className="size-6 text-accent transition-transform group-hover:rotate-12" /></div><div><h3 className="text-xl font-medium">{service.title}</h3><p className="mt-4 text-sm leading-6 text-muted-foreground">{service.text}</p></div></article>})}</div></section>

      <section id="departments" className="border-t border-border bg-card/30"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">03 / Creative Flux bo‘limlari</p><h2 className="mt-5 max-w-2xl text-balance text-4xl font-medium tracking-[-0.04em] sm:text-5xl">Yangi yo‘nalishlar<br /><span className="text-muted-foreground">yaratilmoqda.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Creative Flux ekotizimini xavfsizlik va infratuzilma yo‘nalishlari bilan kengaytiryapmiz.</p></div><div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">{departments.map((department) => { const Icon = department.icon; return <article key={department.title} className="group flex min-h-80 flex-col justify-between bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-card sm:p-9"><div className="flex items-start justify-between"><Icon className="size-7 text-accent transition-transform group-hover:scale-110" /><span className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">Rejalashtirilgan</span></div><div><h3 className="max-w-md text-2xl font-medium tracking-[-0.03em]">{department.title}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{department.text}</p><p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{department.status}</p></div></article>})}</div></div></section>

      <section id="contact" className="border-t border-border bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-32"><div><p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">03 / Aloqa</p><h2 className="mt-6 max-w-3xl text-balance text-5xl font-medium leading-[1] tracking-[-0.06em] sm:text-7xl">Keyingi katta<br />g‘oyangiz qaysi?</h2></div><a href="mailto:hello@creativeflux.uz" className="group flex items-center gap-3 self-start rounded-full border border-primary-foreground/30 px-6 py-4 text-sm transition-colors hover:border-accent hover:text-accent lg:self-end">hello@creativeflux.uz <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10"><span className="font-mono uppercase tracking-[0.18em]">© 2024–2026 Creative Flux</span><span>Egasi: Sherzod Raxmatullayev</span><span className="font-mono uppercase tracking-[0.18em]">Built with intent.</span></footer>
    </main>
  )
}
