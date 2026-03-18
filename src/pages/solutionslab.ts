import '../style.css'
import { initHeader } from '../components/header'

const proposal = {
  clientName: 'Anne Cliff',
  projectTitle: 'Headless Shopify subscription webshop',
  validUntil: '15 april 2026',
  hourlyRate: 110,
  paymentSplit: '50% vooraf, 50% bij oplevering',
  paymentDue: '14 dagen',
}

const basisModules = [
  { id: 'design-basis', label: 'Design (UI/UX)', hours: 20, description: 'Moodboard vertalen naar volledige UI: wireframes, visueel ontwerp in merkstijl, responsive voor mobiel en desktop. 2 revisierondes inbegrepen.', required: true },
  { id: 'headless-development', label: 'Headless Next.js development', hours: 40, description: 'Alle pagina\'s bouwen als headless front-end op Shopify: navigatie, footer, CMS-koppeling. 2 revisierondes inbegrepen.', required: true },
  { id: 'shopify-setup', label: 'Shopify backend setup', hours: 8, description: 'Shopify inrichten als headless backend: producten, betalingen, domein, belastingregels, Shopify Payments.', required: true },
  { id: 'payload-cms', label: 'Payload CMS integratie', hours: 8, description: 'Payload CMS koppelen voor eenvoudig contentbeheer van teksten, afbeeldingen en pagina\'s zonder technische kennis.', required: true },
  { id: 'subscription-integratie', label: 'Subscription tool integratie', hours: 10, description: 'Gekozen subscription tool koppelen aan Shopify en front-end (advies: Seal Subscriptions of Appstle voor launch, €0-10/m zonder % op omzet).', required: true },
  { id: 'logistiek-koppeling', label: 'Logistiek koppeling', hours: 6, description: 'Koppeling met fulfillment/logistieke partner via Shopify Shipping of directe API-integratie.', required: true },
  { id: 'seo-geo-basis', label: 'SEO & GEO setup', hours: 8, description: 'Technische SEO (meta tags, sitemap, schema markup, Core Web Vitals). GEO-optimalisatie: content gestructureerd voor AI-zoekmachines (ChatGPT, Perplexity). Meertalig-ready (NL/EN).', required: true },
]

const uitbreidingen = [
  { id: 'klaviyo-basis', label: 'E-mail automations (basis)', hours: 12, description: 'Basis flows in Klaviyo: welcome serie, post-purchase, abonnementsbevestiging, verzendupdates. Klaviyo account vereist (tot 10k profielen ~€150/m).' },
  { id: 'klaviyo-advanced', label: 'E-mail automations (advanced)', hours: 16, description: 'Geavanceerde flows: win-back, churn prevention, upgrade/upsell, verjaardagsflow. Vereist Klaviyo basis.' },
  { id: 'frontend-special', label: 'Front-end special (per stuk)', hours: 4, description: 'Geavanceerd front-end element naar keuze: 3D productviewer, scroll-animatie, interactief React component etc. Prijs per stuk, exclusief design.' },
  { id: 'gorgias-setup', label: 'Gorgias klantenservice koppeling', hours: 4, description: 'Gorgias instellen en koppelen aan Shopify voor gestroomlijnde klantenservice. Gorgias account vereist (vanaf ~$10/m).' },
  { id: 'design-ux-alexander', label: 'Design & UX — Alexander (GeenBureau)', hours: 16, description: 'Extra design en UX capaciteit via Alexander (GeenBureau). Geschikt voor uitbreiding van de UI, campagnepagina\'s of brand uitwerking.' },
  { id: 'copywriting-aris', label: 'Copywriting & merkstrategie — Aris (GeenBureau)', hours: 16, description: 'Copywriting en brand storytelling via Aris (GeenBureau). Tone of voice, pagina-copy, abonnementspagina, FAQ.' },
  { id: 'fotografie-pieter', label: 'Fotografie — Pieter Wouters (indicatie)', hours: 16, description: 'Productfotografie en lifestyle shoots via Pieter Wouters. Indicatieve raming — definitieve offerte op aanvraag.' },
  { id: 'seo-content-strategy', label: 'SEO content strategie & uitvoering', hours: 12, description: 'Keyword research, content kalender, 4 geoptimaliseerde blogposts, interne linkstructuur. Focus op subscription underwear, Tencel Lyocell, en vergelijkingszoekwoorden.' },
  { id: 'geo-optimization', label: 'GEO / AI-zoekmachine optimalisatie', hours: 8, description: 'Content optimaliseren voor AI Overviews, Perplexity en ChatGPT. FAQ schema, vergelijkingstabellen, authoritative content structuur zodat Anne Cliff als bron wordt geciteerd.' },
]

const hosting = [
  { id: 'hosting', label: 'Hosting', price: 50, description: 'Hosting, SSL, backups, uptime monitoring' },
  { id: 'beheer-support', label: 'Beheer & Support', price: 500, description: 'Proactief beheer, updates, security patches, prioriteit support, kleine content- en productwijzigingen' },
  { id: 'geen-hosting', label: 'Geen hosting', price: 0, description: 'Je regelt hosting en beheer zelf' },
]

const timeline = [
  { phase: 'Week 1–2', title: 'Discovery & Design', description: 'Merkfundament vertalen naar UI/UX. Moodboard, wireframes, visueel ontwerp. Subscription tool keuze finaliseren.' },
  { phase: 'Week 3–5', title: 'Development Sprint 1', description: 'Headless Next.js opzet, Shopify backend, Payload CMS. Homepage, productpagina, abonnementflow.' },
  { phase: 'Week 6–7', title: 'Development Sprint 2', description: 'Subscription integratie, logistiek koppeling, overige pagina\'s. SEO & GEO setup.' },
  { phase: 'Week 8', title: 'QA & Launch', description: 'Testing op alle devices, performance optimalisatie, content check. Soft launch met feedbackronde.' },
  { phase: 'Week 9+', title: 'Post-launch', description: 'Monitoring, eerste optimalisaties, eventuele Klaviyo setup en content publicatie.' },
]

// State
const selectedExtensions = new Set<string>()
let selectedHosting = 'hosting'

function calculateTotal(): { basisHours: number; extensionHours: number; basisCost: number; extensionCost: number; monthlyCost: number; totalCost: number } {
  const basisHours = basisModules.reduce((sum, m) => sum + m.hours, 0)
  const extensionHours = Array.from(selectedExtensions).reduce((sum, id) => {
    const ext = uitbreidingen.find(e => e.id === id)
    return sum + (ext ? ext.hours : 0)
  }, 0)
  const basisCost = basisHours * proposal.hourlyRate
  const extensionCost = extensionHours * proposal.hourlyRate
  const h = hosting.find(h => h.id === selectedHosting)
  const monthlyCost = h ? h.price : 0
  return { basisHours, extensionHours, basisCost, extensionCost, monthlyCost, totalCost: basisCost + extensionCost }
}

function render(): void {
  const totals = calculateTotal()

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <!-- SL Header -->
    <header class="bg-sl-black text-sl-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="/" class="inline-flex items-center gap-2">
          <span class="w-3.5 h-3.5 bg-sl-yellow rounded-full flex-shrink-0"></span>
          <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-xl font-bold tracking-tight">solutions lab</span>
        </a>
        <a href="/" class="text-sm text-sl-gray-muted hover:text-sl-white transition-colors">
          &larr; back to site
        </a>
      </div>
    </header>

    <!-- Hero -->
    <section class="bg-sl-black text-sl-white py-20 md:py-32 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="space-y-6">
          <p class="text-xs uppercase tracking-[0.2em] text-sl-gray-muted">Voorstel</p>
          <h1 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> ${proposal.projectTitle.toLowerCase()}
          </h1>
          <p class="text-sl-gray-muted text-lg max-w-2xl" style="font-family: 'DM Sans', system-ui, sans-serif">
            Voor ${proposal.clientName} &mdash; geldig tot ${proposal.validUntil}
          </p>
        </div>
      </div>
    </section>

    <!-- Intro letter -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white border-b border-sl-gray-border">
      <div class="max-w-3xl mx-auto space-y-6" style="font-family: 'DM Sans', system-ui, sans-serif">
        <p class="text-sl-gray-muted text-lg leading-relaxed">Hi Alain,</p>
        <p class="text-sl-gray-muted text-lg leading-relaxed">
          Goed om dit op te pakken. Het merkfundament van Anne Cliff staat. Nu moet de tech het waarmaken.
        </p>
        <div class="space-y-4 text-lg">
          <p><strong class="text-sl-black">Situatie</strong><br>
          <span class="text-sl-gray-muted">Anne Cliff is subscription-first: &eacute;&eacute;n product, &eacute;&eacute;n fit, terugkerende aankopen als kern van het businessmodel. De merkrichting is helder. Wat ontbreekt is de winkel.</span></p>

          <p><strong class="text-sl-black">Complicatie</strong><br>
          <span class="text-sl-gray-muted">De keuze voor subscription tool is meteen ook een strategische keuze. Firmhouse is goed gebouwd voor dit soort merken, maar het omzetpercentage telt op zodra je begint te groeien. Mijn advies: start met Seal Subscriptions of Appstle. Geen % op omzet, native Shopify integratie, en migreren naar Firmhouse of Recharge kan altijd als de schaal het vraagt.</span></p>

          <p><strong class="text-sl-black">Vraag</strong><br>
          <span class="text-sl-gray-muted">Hoe bouwen we een snelle, merkwaardige webshop die subscription als standaard behandelt en schaalbaar is zonder vendor lock-in?</span></p>

          <p><strong class="text-sl-black">Antwoord</strong><br>
          <span class="text-sl-gray-muted">Headless Next.js op Shopify als backend, Payload CMS voor beheer, de juiste subscription tool voor deze fase. Het voorstel is modulair &mdash; vink aan wat past, en de prijs past zich live aan.</span></p>
        </div>
        <div class="bg-gray-50 p-6 border border-sl-gray-border mt-8">
          <p class="text-sm text-sl-gray-muted"><strong class="text-sl-black">Aannames</strong></p>
          <ul class="text-sm text-sl-gray-muted mt-2 space-y-1 list-disc list-inside">
            <li>Subscription tool wordt in overleg gekozen (advies: Seal of Appstle voor launch)</li>
            <li>Shopify account actief of nieuw aan te maken</li>
            <li>UI/UX uitwerking zit in de basis (moodboard is aanwezig, full design wordt uitgewerkt)</li>
            <li>Logistieke partner is bekend of wordt tijdig aangeleverd</li>
          </ul>
        </div>
        <p class="text-sl-gray-muted text-lg">Groet,<br>Loek</p>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white border-b border-sl-gray-border">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.15em] text-sl-gray-muted font-semibold mb-2" style="font-family: 'DM Sans', system-ui, sans-serif">Planning</p>
          <h2 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-2xl md:text-4xl font-bold tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> tijdslijn
          </h2>
        </div>

        <div class="grid gap-0">
          ${timeline.map((t, i) => `
            <div class="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 py-6 ${i < timeline.length - 1 ? 'border-b border-sl-gray-border' : ''}">
              <div>
                <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-sm font-bold text-sl-black">${t.phase}</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-sl-black mb-1" style="font-family: 'DM Sans', system-ui, sans-serif">${t.title}</h3>
                <p class="text-sm text-sl-gray-muted" style="font-family: 'DM Sans', system-ui, sans-serif">${t.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Basis modules -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white border-b border-sl-gray-border">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.15em] text-sl-gray-muted font-semibold mb-2" style="font-family: 'DM Sans', system-ui, sans-serif">Scope</p>
          <h2 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-2xl md:text-4xl font-bold tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> basis
          </h2>
          <p class="text-sl-gray-muted mt-2" style="font-family: 'DM Sans', system-ui, sans-serif">Deze modules vormen de kern van het project.</p>
        </div>

        <div class="space-y-0">
          ${basisModules.map(m => `
            <div class="grid md:grid-cols-[1fr_80px_100px] gap-4 items-start py-5 border-b border-sl-gray-border">
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-semibold text-sl-black" style="font-family: 'DM Sans', system-ui, sans-serif">${m.label}</h3>
                  <span class="text-xs px-2 py-0.5 bg-sl-black text-sl-white">verplicht</span>
                </div>
                <p class="text-sm text-sl-gray-muted mt-1" style="font-family: 'DM Sans', system-ui, sans-serif">${m.description}</p>
              </div>
              <div class="text-right">
                <span class="text-sm text-sl-gray-muted">${m.hours}u</span>
              </div>
              <div class="text-right">
                <span class="font-semibold text-sl-black" style="font-family: 'DM Sans', system-ui, sans-serif">&euro;${(m.hours * proposal.hourlyRate).toLocaleString('nl-NL')}</span>
              </div>
            </div>
          `).join('')}

          <div class="grid md:grid-cols-[1fr_80px_100px] gap-4 items-center py-5 bg-gray-50 px-4 -mx-4">
            <div>
              <span class="font-bold text-sl-black" style="font-family: 'DM Sans', system-ui, sans-serif">Subtotaal basis</span>
            </div>
            <div class="text-right">
              <span class="text-sm text-sl-gray-muted">${totals.basisHours}u</span>
            </div>
            <div class="text-right">
              <span class="font-bold text-sl-black text-lg" style="font-family: 'DM Sans', system-ui, sans-serif">&euro;${totals.basisCost.toLocaleString('nl-NL')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Uitbreidingen -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white border-b border-sl-gray-border">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.15em] text-sl-gray-muted font-semibold mb-2" style="font-family: 'DM Sans', system-ui, sans-serif">Optioneel</p>
          <h2 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-2xl md:text-4xl font-bold tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> uitbreidingen
          </h2>
          <p class="text-sl-gray-muted mt-2" style="font-family: 'DM Sans', system-ui, sans-serif">Vink aan wat je wilt &mdash; de prijs past zich live aan.</p>
        </div>

        <div class="space-y-0" id="extensions-list">
          ${uitbreidingen.map(m => `
            <label class="grid md:grid-cols-[auto_1fr_80px_100px] gap-4 items-start py-5 border-b border-sl-gray-border cursor-pointer hover:bg-gray-50 transition-colors px-4 -mx-4" data-ext-id="${m.id}">
              <div class="flex items-center pt-1">
                <input type="checkbox" class="ext-checkbox w-5 h-5 accent-sl-yellow" data-id="${m.id}" ${selectedExtensions.has(m.id) ? 'checked' : ''} />
              </div>
              <div>
                <h3 class="font-semibold text-sl-black" style="font-family: 'DM Sans', system-ui, sans-serif">${m.label}</h3>
                <p class="text-sm text-sl-gray-muted mt-1" style="font-family: 'DM Sans', system-ui, sans-serif">${m.description}</p>
              </div>
              <div class="text-right">
                <span class="text-sm text-sl-gray-muted">${m.hours}u</span>
              </div>
              <div class="text-right">
                <span class="font-semibold ${selectedExtensions.has(m.id) ? 'text-sl-black' : 'text-sl-gray-muted'}" style="font-family: 'DM Sans', system-ui, sans-serif">&euro;${(m.hours * proposal.hourlyRate).toLocaleString('nl-NL')}</span>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Hosting -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white border-b border-sl-gray-border">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.15em] text-sl-gray-muted font-semibold mb-2" style="font-family: 'DM Sans', system-ui, sans-serif">Maandelijks</p>
          <h2 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-2xl md:text-4xl font-bold tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> hosting & beheer
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-4" id="hosting-list">
          ${hosting.map(h => `
            <label class="border ${selectedHosting === h.id ? 'border-sl-black bg-gray-50' : 'border-sl-gray-border'} p-6 cursor-pointer hover:border-sl-black transition-colors" data-hosting-id="${h.id}">
              <div class="flex items-center gap-3 mb-3">
                <input type="radio" name="hosting" class="hosting-radio accent-sl-yellow" data-id="${h.id}" ${selectedHosting === h.id ? 'checked' : ''} />
                <span class="font-semibold text-sl-black" style="font-family: 'DM Sans', system-ui, sans-serif">${h.label}</span>
              </div>
              <p class="text-sm text-sl-gray-muted mb-3" style="font-family: 'DM Sans', system-ui, sans-serif">${h.description}</p>
              <p class="font-bold text-sl-black text-lg" style="font-family: 'DM Sans', system-ui, sans-serif">&euro;${h.price}/m</p>
            </label>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- SEO/GEO Strategy -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-black text-sl-white">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <p class="text-xs uppercase tracking-[0.15em] text-sl-gray-muted font-semibold mb-2" style="font-family: 'DM Sans', system-ui, sans-serif">Strategie</p>
          <h2 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-2xl md:text-4xl font-bold tracking-tight lowercase">
            <span class="text-sl-yellow">&#9679;</span> SEO & GEO aanpak
          </h2>
          <p class="text-sl-gray-muted mt-2" style="font-family: 'DM Sans', system-ui, sans-serif">Zichtbaarheid in zowel Google als AI-zoekmachines.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-6">
            <h3 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-xl font-bold">SEO (traditioneel)</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">Technische basis</p>
                  <p class="text-sm text-sl-gray-muted">Schema markup (Product, Offer, FAQ), sitemap, robots.txt, Core Web Vitals optimalisatie via headless Next.js (SSR/ISR).</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">Content strategie</p>
                  <p class="text-sm text-sl-gray-muted">Focus keywords: "premium underwear subscription", "Tencel Lyocell boxer", "CDLP alternatief". Vergelijkingspagina's en educatieve content over materialen.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">Meertalig-ready</p>
                  <p class="text-sm text-sl-gray-muted">Hreflang tags, NL + EN content structuur. Klaar voor uitbreiding naar DE/FR.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-xl font-bold">GEO (AI-zoekmachines)</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">AI Overview optimalisatie</p>
                  <p class="text-sm text-sl-gray-muted">Gestructureerde FAQ's, vergelijkingstabellen, en "what is" content die LLMs gemakkelijk kunnen citeren als bron.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">Authoritative positioning</p>
                  <p class="text-sm text-sl-gray-muted">Anne Cliff positioneren als expert-bron voor Tencel underwear. Transparante vergelijkingen, materiaal-educatie, eerlijke pricing info.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-sl-yellow mt-1">&#9679;</span>
                <div>
                  <p class="font-medium">Perplexity & ChatGPT zichtbaarheid</p>
                  <p class="text-sm text-sl-gray-muted">Content structureren zodat AI-engines Anne Cliff noemen bij queries als "beste underwear subscription Europa" of "CDLP alternatief goedkoper".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Total -->
    <section class="py-16 md:py-24 px-6 md:px-12 bg-sl-white sticky bottom-0 z-50 border-t-2 border-sl-black shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" id="total-section">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div class="flex flex-wrap items-baseline gap-x-8 gap-y-2">
              <div>
                <span class="text-sm text-sl-gray-muted block" style="font-family: 'DM Sans', system-ui, sans-serif">Eenmalig</span>
                <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-3xl md:text-4xl font-bold text-sl-black" id="total-display">&euro;${totals.totalCost.toLocaleString('nl-NL')}</span>
              </div>
              ${totals.monthlyCost > 0 ? `
              <div>
                <span class="text-sm text-sl-gray-muted block" style="font-family: 'DM Sans', system-ui, sans-serif">Maandelijks</span>
                <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-3xl md:text-4xl font-bold text-sl-black">&euro;${totals.monthlyCost}/m</span>
              </div>
              ` : ''}
            </div>
            <p class="text-sm text-sl-gray-muted mt-2" style="font-family: 'DM Sans', system-ui, sans-serif">
              ${proposal.paymentSplit} &middot; ${proposal.paymentDue} &middot; &euro;${proposal.hourlyRate}/u
            </p>
          </div>
          <div>
            <a href="mailto:loek@solutionslab.nl?subject=Anne%20Cliff%20voorstel&body=Hi%20Loek%2C%0A%0AIk%20wil%20graag%20het%20voorstel%20bespreken." class="inline-flex items-center gap-3 px-10 py-4 bg-sl-black text-sl-white text-sm font-semibold tracking-wide hover:bg-sl-yellow hover:text-sl-black transition-colors duration-300" style="font-family: 'DM Sans', system-ui, sans-serif">
              Voorstel bespreken
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-sl-black text-sl-white/60 py-12 px-6 md:px-12">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="inline-flex items-center gap-2">
          <span class="w-3 h-3 bg-sl-yellow rounded-full"></span>
          <span style="font-family: 'Bricolage Grotesque', system-ui, sans-serif" class="text-lg font-bold text-sl-white">solutions lab</span>
        </div>
        <p class="text-sm" style="font-family: 'DM Sans', system-ui, sans-serif">
          <a href="mailto:loek@solutionslab.nl" class="hover:text-sl-white transition-colors">loek@solutionslab.nl</a>
          &middot; Hilversum & Barcelona
        </p>
      </div>
    </footer>
  `

  // Bind events
  document.querySelectorAll('.ext-checkbox').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const input = e.target as HTMLInputElement
      const id = input.dataset.id!
      if (input.checked) {
        selectedExtensions.add(id)
      } else {
        selectedExtensions.delete(id)
      }
      render()
    })
  })

  document.querySelectorAll('.hosting-radio').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const input = e.target as HTMLInputElement
      selectedHosting = input.dataset.id!
      render()
    })
  })
}

render()
