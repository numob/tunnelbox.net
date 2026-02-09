<script setup>
import Button from 'primevue/button'
</script>

<template>
  <!-- Hero -->
  <section class="highlight-section">
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
    </div>

  </section>
  

  <section class="highlight-section">
    <div class="subsection-title">
      <span>Why a hardware solution?</span>
      <p class="subtitle">
        Developers should focus on what they love: building.
        A hardware ingress removes the complexity of network configurations
        like NAT and firewall rules, while providing an additional security
        layer before traffic reaches your application.
      </p>
    </div>

    <div class="hardware-container">
      <div class="card w-full">
        <div class="hardware-grid">
          <div class="hardware-media">
            <div class="image-placeholder">Device image / diagram</div>
          </div>
          <div class="hardware-copy">
            <h3>Made To Be Secure, Used Reliably</h3>
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
              <!-- <li>Device-level identity</li>
              <li>Consistent behavior across environments</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Value Prop -->
   <section class="highlight-section">
    <div class="subsection-title">
    <span>The features that make tunneling simplier</span>
    <p class="subtitle">

      Tunnelbox offers an array of services in connecting your services to the world.
    </p>
  </div>

  <!-- Features -->
  <div class="features-container">
    <div class="card">
      <span class="card-header">Zero Network Configuration</span>
      <p class="card-body">
        
        Tunnelbox works anywhere by creating outbound-only secure tunnels.
      </p>
    </div>

    <div class="card">
      <span class="card-header">Automatic SSL / TLS</span>
      <p class="card-body">
        Every domain comes with HTTPS out of the box.
        Certificates are issued and renewed automatically.
      </p>
    </div>

    <div class="card">
      <span class="card-header">Free Managed Domains</span>
      <p class="card-body">
        Create multiple public domains per device.
        Route each domain to a different local service or port.
      </p>
    </div>
<!-- 
    <div class="card">
      <span class="card-header">True Plug & Play</span>
      <p class="card-body">
        Plug it in, claim it, and go live.
        No software agents or local configuration required.
      </p>
    </div> -->

    <div class="card">
      <span class="card-header">Built for Developers</span>
      <p class="card-body">
        Perfect for webhooks, demos, dashboards, staging environments,
        and internal tools running on localhost.
      </p>
    </div>

    <div class="card">
      <span class="card-header">Hardware-Backed Security</span>
      <p class="card-body">
        Your tunnels are tied to a physical device,
        reducing attack surface and credential leakage.
      </p>
    </div>
  </div>

  </section>
  <section class="hardware-pricing">
      <h2>Hardware pricing</h2>
      <p>
        Tunnelbox is a purpose-built device designed for reliability and security.
      </p>
      <div class="hardware-card">
        <h3>Tunnelbox Device</h3>
        <div class="price">$---<span> one-time</span></div>
        <ul class="nah">
          <li>Pre-provisioned & ready to claim</li>
          <li>Automatic updates</li>
          <li>Secure device identity</li>
        </ul>
      </div>
    </section>
  
  <!-- Use Cases -->
   <section class="highlight-section">
      <div class="subsection-title">
        <span>Who is Tunnelbox for?</span>
      </div>

      <div class="features-container">
        <div class="card">
          <span class="card-header">Hobbyists</span>
          <p class="card-body">
            Share side projects, personal dashboards, or home services
            without touching your router.
          </p>
        </div>
        <div class="card">
          <span class="card-header">Professional Developers</span>
          <p class="card-body">
            Receive webhooks, demo live features, and test integrations
            directly against localhost.
          </p>
        </div>
        <div class="card">
          <span class="card-header">Teams & Startups</span>
          <p class="card-body">
            Standardize tunneling without relying on personal machines
            or fragile dev setups.
          </p>
        </div>
      </div>

  </section>

  <section class="highlight-section">
    <div class="subsection-title">
      <span>Subscription Pricing</span>
    </div>

    <div class="pricing-container">
      <div class="card">
        <span class="card-header">Starter</span>
        <p class="card-body">For hobby projects and experimentation</p>
        <ul>
          <li>Something</li>
          <li>Limited domains</li>
          <li>Community support</li>
        </ul>
      </div>
      <div class="card">
        <span class="card-header">Pro</span>
        <p class="card-body">For serious development work</p>
        <ul>
          <li>Somethign</li>
          <li>Unlimited domains</li>
          <li>Priority support</li>
        </ul>
      </div>
      <div class="card">
        <span class="card-header">Team</span>
        <p class="card-body">For teams and companies</p>
        <ul>
          <li>Somethings</li>
          <li>Access controls</li>
          <li>SLA & support</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Final CTA -->
  <section class="cta">
    <h2>Focus on building, not complicated network configurations.</h2>
    <p>Ship, demo, and test your applications without friction.</p>
    <Button class="btn" label="Get Tunnelbox" size="large" />
  </section>
</template>

<style scoped>
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 1rem;
}

html, body {
  min-height: 100%;
}

body {
  margin: 0;
}


.price {
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1.25rem 0 0 0;
}

.nah{
  list-style: none;
}

.hardware-pricing {
  text-align: center;
  margin-bottom: 5rem;
}

.hardware-card {
  list-style: none;
  max-width: 420px;
  margin: 2rem auto 0;
  background: whitesmoke;
  padding: 2rem;
  border-radius: 16px;
}


.highlight-section {
  width: 100vw;
  min-height: 100vh;

  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  background: linear-gradient(
    to bottom,
    #000000,
    #653D81
  );
}

.btn{
  border: 2px;  
  background: whitesmoke;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 15px;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
}

.tagline {
  font-size: 64px;
  font-weight: 800;
  text-align: center;
  letter-spacing: -1px;
  line-height: 1.08;
  max-width: 600px;     /* slightly narrower improves wrapping */
  margin: 0 auto;
}


.sub-tagline {
  font-size: 28px;
  text-align: center;
  max-width: 980px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.subsection-title {
  text-align: center;
  padding: 3rem 1rem 1.5rem;
}

.subsection-title span {
  font-size: 50px;
  font-weight: 800;
}

.subtitle {
  font-size: 18px;
  margin-top: 0.5rem;
}

.features-container,
.pricing-container {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.card {
  background: whitesmoke;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
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
  height: 200px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.cta {
  text-align: center;
  padding: 4rem 1rem;
}
</style>