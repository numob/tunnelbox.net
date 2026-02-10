<script setup>
import Button from 'primevue/button'
</script>

<template>
  <!-- Hero -->
  <section class="hero-section">
    <div id="hero">
      <span class="tagline">Hardware Gateway To Expose Your Apps Worldwide</span>
      <span class="sub-tagline">

      You love building. We love building too. So we made TunnelBox 
      to get your application to the world easier, simpler, and faster. 
      We'll handle everything, securely.
      </span>
      <div class="hero-actions">
        <Button class="btn" href="" label="View On Kickstarter" />
        <Button class="btn" href="/docs/docs/setup.md" label="Learn More" severity="secondary" />
      </div>

      <img
      src="/Front View.png"
      alt="Hero"
      class="rounded-xl shadow-xl mx-auto"
      />

      <span class="disclaimer">Images include AI-generated renders derived from real 3D mockups*</span>
    </div>

  </section>
  

  <section id="other">
    <section class="other-section">
      <div class="card">
        <span class="subsection-title">Why a hardware solution?</span>
        <p class="subtitle">
          Developers should focus on what they love: building.
          A hardware ingress removes the complexity of network configurations
          like NAT and firewall rules, while providing an additional security
          layer before traffic reaches your application.
        </p>
      </div>

      <div class="card">
        <div class="hardware-grid">
          <div class="hardware-media">
            <div class="image-placeholder">
              
              <img
                src="/3:4 View.png"
                alt="Product Showcase"
                class="rounded-xl shadow-xl mx-auto"
              />
            </div>
          </div>
          <div class="hardware-reason">
            <h1>Made To Be Secure, Used Reliably</h1>
            <p>
              Tunnelbox is a single-purpose device designed to handle
              tunneling, securely and reliably.
            </p>
            <p>
              Unlike CLI tools or VPNs, Tunnelbox doesn’t depend on your
              laptop staying awake, logged in, or correctly configured.
            </p>
            <ul>
              <li>Outbound-only connections</li>
            </ul>
          </div>
      </div>
    </div>
  </section>
  <!-- Value Prop -->
   <section class="other-section">
    <div style="padding: 2rem;">
      <div class="subsection-title">
        <span>The features that make tunneling simplier</span>
      </div>
      <p class="subtitle">

        Tunnelbox offers an array of services in connecting your services to the world.
      </p>
    </div>


      <!-- Features -->
      <div class="features-grid">
        <div class="features-card">
          <img
          src="/globe.png"
          width="70"
          />
          <span class="card-header">Zero Network Configuration</span>
          <p class="card-body">
            Tunnelbox works anywhere by creating outbound-only secure tunnels.
          </p>
        </div>

        <div class="features-card">
          <img
          src="/automatic.png"
          width="70"
          />
          <span class="card-header">Automatic SSL / TLS</span>
          <p class="card-body">
            Every domain comes with HTTPS out of the box.
            Certificates are issued and renewed automatically.
          </p>
        </div>

        <div class="features-card">
          <img
          src="/domains.png"
          width="70"
          />
          <span class="card-header">Free Managed Domains</span>
          <p class="card-body">
            Create multiple public domains per device.
            Route each domain to a different local service or port.
          </p>
        </div>

        <div class="features-card">
          <img
          src="/developer.png"
          width="70"
          />
          <span class="card-header">Built for Developers</span>
          <p class="card-body">
            Perfect for webhooks, demos, dashboards, staging environments,
            and internal tools running on localhost.
          </p>
        </div>

        <div class="features-card">
          <img
          src="/security.png"
          width="70"
          />
          <span class="card-header">Hardware-Backed Security</span>
          <p class="card-body">
            Your tunnels are tied to a physical device,
            reducing attack surface and credential leakage.
          </p>
        </div>

      </div>
  </section>
  <section class="other-section tunnelbox-who">

      <div class="subsection-title">
        <span>Who is Tunnelbox for?</span>
      </div>

      <div class="features-container">
        <div class="hobbyist">
          <span style="display: flex; justify-content: center; align-items: center;  font-size: 40px; font-weight: 650;">Hobbyists</span>
        </div>
        <div class="team">
          <span style="display: flex; justify-content: center; align-items: center;  font-size: 40px; font-weight: 650;">Professional Developers</span>
        </div>
        <div class="pro">
          <span style="display: flex; justify-content: center; align-items: center; font-size: 40px; font-weight: 650;">Teams & Startups</span>
        </div>
      </div>

    
  </section>
  
  <!-- Use Cases -->
<section class="pricing-wrap" aria-labelledby="pricing-title">
  <h2 id="pricing-title" class="pricing-title">Subscription Pricing</h2>

  <div class="plans" role="list">
    <!-- Starter -->
    <article class="pricing-card" role="listitem" aria-label="Starter plan">
      <header class="plan-head">
        <h3 class="plan-name">Starter</h3>
        <div class="plan-price">
          $## <small>/month</small>
        </div>
        <div class="plan-pill" aria-hidden="true">
          For hobby projects &amp; experimentation
        </div>
      </header>
      <ul class="plan-features">
        <li>Something</li>
        <li>Limited domains</li>
        <li>Community support</li>
      </ul>
    </article>

    <!-- Pro -->
    <article class="pricing-card" role="listitem" aria-label="Pro plan">
      <header class="plan-head">
        <h3 class="plan-name">Pro</h3>
        <div class="plan-price">
          $## <small>/month</small>
        </div>
        <div class="plan-pill" aria-hidden="true">
          For serious development work
        </div>
      </header>
      <ul class="plan-features">
        <li>Something</li>
        <li>Unlimited domains</li>
        <li>Priority support</li>
      </ul>
    </article>

    <!-- Team -->
    <article class="pricing-card" role="listitem" aria-label="Team plan">
      <header class="plan-head">
        <h3 class="plan-name">Team</h3>
        <div class="plan-price">
          $## <small>/month</small>
        </div>
        <div class="plan-pill" aria-hidden="true">
          For teams &amp; companies
        </div>
      </header>
      <ul class="plan-features">
        <li>Something</li>
        <li>Access controls</li>
        <li>SLA &amp; Support</li>
      </ul>
    </article>
  </div>
</section>

  </section>

  <!-- Final CTA -->
  <section class="hero-capsule" aria-labelledby="hero-title">
    <div class="hero-inner">
      <div class="hero-copy">
        <h1 id="hero-title" class="hero-title">
          Focus on building, not complicated<br class="br-hide-sm" />
          network configurations.
        </h1>
        <p class="hero-sub">
          Ship, demo, and test your applications without friction.
        </p>

        <Button 
        class="cta-pill">
        Get TunnelBox</Button>
      </div>

      <!-- Decorative product image -->
      <!-- <img
        class="hero-device"
        src="/img/device.png"
        alt="TunnelBox device"
        loading="eager"
        decoding="async"
      /> -->
    </div>
  </section>
</template>

<style>
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 4rem 1rem;

}

#other {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 6rem;
  /* padding: 4rem 1rem;s */
}

.hobbyist{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-image: url('/Hobbyists.png');

  /* padding: 20px; */
  /* object-fit: contain; */
  /* height: 100vh; */
  background-size: cover;   /* fill container */
  background-position: center;
  background-repeat: no-repeat;
}

.team{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-image: url('/Teams&Startups.png');
  border-radius: 30px;
  /* padding: 20px; */
  object-fit: fill;
  /* height: 100vh; */
  background-size: cover;   /* fill container */
  background-position: center;
  background-repeat: no-repeat;
}


.pro{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-image: url('/Professional Devs.png');
  border-radius: 30px;
  /* padding: 20px; */
  object-fit: fill;
  /* height: 100vh; */
  background-size: cover;   /* fill container */
  background-position: center;
  background-repeat: no-repeat;
}


.other-section{
  padding: 0 150px;
}

.hardware-reason {
  display: flex;
  flex-direction: column;

  /* make the content fill the card */
  height: 100%;

  /* center content vertically and horizontally */
  justify-content: center; /* vertical centering */

  font-weight: 450;
  gap: 2rem;
}

.hardware-reason h1 {
  font-size: 30px;
  font-weight: 650;
}


.price {
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1.25rem 0 0 0;
}

.disclaimer {
  font-style: italic;
  font-size: 20px;
  font-weight: 450;
}

.nah{
  list-style: none;
}

.hardware-pricing {
  text-align: center;
  margin-bottom: 5rem;
}

.tunnelbox-who{
  min-height: 40rem;
  background-image: url('/who_tunnelbox.png');
  padding: 20px;
  object-fit: fill;
  width: 100vw;
  background-size: cover;   /* fill container */
  background-position: center;
  background-repeat: no-repeat;
  /* height: 100vh; */
}

.hardware-card {
  list-style: none;
  max-width: 420px;
  margin: 2rem auto 0;
  padding: 2rem;

  border-radius: 16px;
  background:
    /* left-bottom blue glow */
    radial-gradient(
      41.52% 107.46% at 0% 100%,
      rgba(49, 64, 159, 0.2) 0%,
      rgba(49, 64, 159, 0) 100%
    ),

    /* top-right purple glow */
    radial-gradient(
      83.71% 142.98% at 102.14% -21.72%,
      rgba(187, 88, 255, 0.2) 0%,
      rgba(187, 88, 255, 0) 100%
    ),

    /* base color */
    linear-gradient(
      0deg,
      #24182C,
      #24182C
    );
}


.hero-section {
  /* width: 100vw;
  min-height: 100vh; */
  background-size: cover;
  background-position: center;

  /* margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw); */


  background: linear-gradient(
    to bottom,
    #1C1222 0%,
    #653D81 50%,
    #1C1222 100%
  );
}


.btn{
  border: 2px;  
  /* background: whitesmoke; */
  padding: 7px 24px;
  font-weight: 450;
  font-size: 18.9px;
  border-radius: 17.34px;
  background: #FFFFFF33;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
}

.tagline {
  font-size: 60px;
  font-weight: 650;
  text-align: center;
  letter-spacing: -1px;
  line-height: 1.08;
  max-width: 800px;     /* slightly narrower improves wrapping */
  margin: 0 auto;
}


.sub-tagline {
  font-size: 28px;
  font-weight: 450;
  text-align: center;
  max-width: 1042px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 6rem;
}

.subsection-title {
  text-align: center;
  /* padding: 3rem 1rem 1.5rem; */
  font-size: 53.39px;
  font-weight: 656;
  
}

.subsection-title span {
  font-size: 50px;
  font-weight: 800;
}

.subtitle {
  font-size: 18px;
  margin: 1rem 0 0 0;
  text-align: center;
}

.subtitle-left {
  font-size: 18px;
  margin: 1rem 0 0 0;
}

.features-container,
.pricing-container {
  min-height: 30rem;
  padding: 0 6rem;
  display: grid;
  align-items: stretch;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  width: 100%;
  margin: 4rem auto;
}

.pricing-card{
  display: flex;
  flex-direction: column;
  background: linear-gradient(0deg, #24182C, #24182C);

  gap: 1rem;
  padding: 2rem;

  width: 100%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  border: 3.67px solid #56346D
}

.card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* width: 100%; */
  background:
    /* left-bottom blue glow */
    radial-gradient(
      41.52% 107.46% at 0% 100%,
      rgba(49, 64, 159, 0.2) 0%,
      rgba(49, 64, 159, 0) 100%
    ),

    /* top-right purple glow */
    radial-gradient(
      83.71% 142.98% at 102.14% -21.72%,
      rgba(187, 88, 255, 0.2) 0%,
      rgba(187, 88, 255, 0) 100%
    ),

    /* base color */
    linear-gradient(
      0deg,
      #24182C,
      #24182C
    );

  padding: 2rem;
  margin: 36px;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.features-card {
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  width: 100%;
  background:
    /* left-bottom blue glow */
    radial-gradient(
      41.52% 107.46% at 0% 100%,
      rgba(49, 64, 159, 0.2) 0%,
      rgba(49, 64, 159, 0) 100%
    ),

    /* top-right purple glow */
    radial-gradient(
      83.71% 142.98% at 102.14% -21.72%,
      rgba(187, 88, 255, 0.2) 0%,
      rgba(187, 88, 255, 0) 100%
    ),

    /* base color */
    linear-gradient(
      0deg,
      #24182C,
      #24182C
    );

  padding: 2rem;
  /* margin: 36px; */
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, max-content));
  gap: 22px;
  width: 100%;
  justify-content: center; /* 🔑 centers incomplete rows */
  align-items: stretch;
  margin-inline: auto;
}

@media (min-width: 980px) {
  .features-grid {
    grid-auto-rows: 1fr;
    width: 100%;
    max-width: 900px;
    justify-content: center; /* 🔑 centers incomplete rows */
    align-items: stretch;
    margin-inline: auto;
  }
}

.card-header {
  font-size: 20px;
  font-weight: 600;
}

.card-body {
  font-size: 15px;
  margin-top: 0.5rem;
}

.hardware-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.image-placeholder {
  /* height: 200px; */
  /* background: #e5e5e5; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.cta {
  text-align: center;
  padding: 4rem 1rem;
}

/* ====== Theme tokens (tweak to taste) ====== */

/* ====== Wrapper ====== */
.pricing-wrap {
  /* width: min(1100px, 100%); */
  margin-inline: auto;
  padding: clamp(1.25rem, 3vw, 2rem);
  box-shadow:
    0 10px 30px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.06);
  border: 3.67px solid #56346D;
  border-radius: 30px;
}

.pricing-title {
  text-align: center;
  font-size: clamp(1.25rem, 3.6vw, 2rem);
  line-height: 1.2;
  letter-spacing: 0.2px;
  margin: 0 0 clamp(1rem, 3vw, 1.5rem);
  font-weight: 800;
}

/* ====== Plans grid ====== */
.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* separators provide the “gap” visually */
  background: transparent;
  overflow: hidden; /* clip inner separators on small screens */
}

/* Each plan column */
.plan {
  padding: clamp(1rem, 3vw, 1.75rem);
  position: relative;
}

/* Vertical separators between columns (hide on first; appear on 2 and 3) */
/* ====== Plan header ====== */
.plan-head {
  display: grid;
  align-content: start;
  gap: 0.9rem;
  margin-bottom: 1.25rem;
}

.plan-name {
  margin: 0;
  font-weight: 700;
  font-size: clamp(1rem, 2.4vw, 1.25rem);
}

.plan-price {
  font-weight: 800;
  font-size: clamp(1.8rem, 4.6vw, 2.5rem);
  letter-spacing: 0.3px;
  display: flex;
  padding: 1rem 0;
  align-items: baseline;
  gap: 0.35rem;
}


.plan-price small {
  font-weight: 600;
  font-size: 0.45em;
}

/* ====== Gradient pill ====== */
.plan-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  padding: 0.75rem 3rem;

  border-radius: 999px;
  font-weight: 700;
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  color: #fff;
  text-align: center;

  /* inner glass + color gradient */
  border: 2px solid;

  border-image-source: linear-gradient(180deg, #BB58FF 0%, #36BCFF 100%);
  background: linear-gradient(180deg, rgba(187, 88, 255, 0.4) 0%, rgba(54, 188, 255, 0.4) 100%);

  border: 1px solid rgba(255,255,255,0.18);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    0 10px 24px rgba(0,0,0,0.25);
}

/* ====== Features list ====== */
.plan-features {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.65rem;
  color: var(--ink);
}
.plan-features li {
  line-height: 1.45;
  font-size: clamp(0.92rem, 1.8vw, 1rem);
  opacity: 0.95;
}
/* ===== Theme tokens ===== */

/* ===== Capsule container ===== */
.hero-capsule{
  /* let it float with whitespace under like the image shows */
  padding-block: clamp(2rem, 6vw, 4rem);
  /* let it extend full width while holding a centered inner layout */
  background: transparent;
}

.hero-inner{
  position: relative;
  width: min(1160px, 92vw);
  margin-inline: auto;

  background: linear-gradient(90deg, #1C1222 5.59%, rgba(131, 34, 195, 0.5) 133.65%);
  border-top-right-radius: 419.18px;
  border-bottom-right-radius: 419.18px;
  overflow: clip; /* clip the child glow and image */
  min-height: clamp(280px, 40vw, 380px);

  display: grid;
  align-items: center;
  /* leave space left for the device image to “sit” */
  padding: clamp(1.25rem, 3.5vw, 2.25rem) clamp(1.25rem, 3.5vw, 2.25rem);
}

/* ===== Copy block (centered) ===== */
.hero-copy{
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 0.9rem;
  margin-inline: auto;
  /* push content a bit right so it visually centers vs image */
  padding-left: clamp(0rem, 5vw, 2rem);
  max-width: 780px;
}

.hero-title{
  margin: 0;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.2px;
  font-size: clamp(1.4rem, 3.2vw, 2.1rem);
}

.hero-sub{
  margin: 0;
  color: var(--muted);
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
}

/* force line break to hide on small screens */
.br-hide-sm{ display: inline; }
@media (max-width: 560px){
  .br-hide-sm{ display: none; }
}

/* ===== CTA pill button ===== */
.cta-pill{
  margin-top: clamp(0.5rem, 2vw, 1rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.35rem;
  border-radius: 999px;
  color: #fff;
  font-weight: 800;
  text-decoration: none;
  letter-spacing: 0.1px;

  background: linear-gradient(180deg, #BB58FF 0%, #36BCFF 100%);

  /* border: 1px solid var(--pill-stroke); */
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    0 10px 24px rgba(0,0,0,0.25);
  transition: transform .15s ease, filter .15s ease;
}

.cta-pill:hover{
  transform: translateY(-1px);
  filter: brightness(1.05);
}
.cta-pill:active{
  transform: translateY(0);
  filter: brightness(0.98);
}

/* ===== Device image (lower-left anchored) ===== */
.hero-device{
  position: absolute;
  left: clamp(0.5rem, 2.25vw, 1.25rem);
  bottom: -14%;           /* hang slightly below the capsule */
  width: clamp(220px, 36vw, 320px);
  height: auto;
  pointer-events: none;   /* decorative */
  user-select: none;
}

/* Tweak image behavior on very small screens */
@media (max-width: 680px){
  .hero-device{
    width: clamp(180px, 50vw, 240px);
    bottom: -10%;
    opacity: 0.95;
  }
  .hero-copy{
    padding-left: 0;
  }
}
/* ====== Responsiveness ====== */
@media (max-width: 900px) {
  .plans {
    grid-template-columns: 1fr;
  }
  .plan + .plan {
    border-left: none;
    border-top: 1px solid;
  }
}
</style>