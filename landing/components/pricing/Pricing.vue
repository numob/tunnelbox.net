<script setup>
import Button from 'primevue/button'
</script>

<template>
  <main class="pricing-page">
    <!-- Hero -->
    <section class="pricing-hero">
      <h1>Simple, developer-friendly pricing</h1>
      <p>
        Buy the hardware once. Choose the plan that fits your workflow.
        No surprises. No lock-in.
      </p>
    </section>

    <!-- Pricing Tiers -->
    <section class="pricing-grid">
      <!-- Starter -->
      <div class="pricing-card">
        <h2>Starter</h2>
        <p class="tier-desc">Perfect for hobbyists and personal projects</p>
        <div class="price">$0<span>/mo</span></div>
        <p class="hardware-note">+ one-time hardware purchase</p>
        <ul>
          <li>Something</li>
          <!-- <li>Up to 2 active domains</li>
          <li>HTTPS included</li>
          <li>Community support</li> -->
        </ul>
        <Button label="Get Started" class="w-full" />
      </div>

      <!-- Pro -->
       <!-- featured -->
      <div class="pricing-card ">
        <!-- <div class="badge">Most Popular</div> -->
        <h2>Pro</h2>
        <p class="tier-desc">For serious development and freelancers</p>
        <div class="price">$--<span>/mo</span></div>
        <!-- <p class="hardware-note">+ one-time hardware purchase</p> -->
        <ul>
          <li>Something</li>
          <!-- <li>Unlimited domains</li>
          <li>Custom subdomains</li>
          <li>Priority email support</li>
          <li>Access controls</li> -->
        </ul>
        <Button label="Go Pro" severity="primary" class="w-full" />
      </div>

      <!-- Team -->
      <div class="pricing-card">
        <h2>Team</h2>
        <p class="tier-desc">For teams and growing companies</p>
        <div class="price">$--<span>/mo</span></div>
        <!-- <p class="hardware-note">+ hardware per device</p> -->
        <ul>
          <li>Somethin</li>
          <!-- <li>Team & role management</li>
          <li>Private domains</li>
          <li>SLA-backed uptime</li>
          <li>Priority support</li> -->
        </ul>
        <Button label="Contact Sales" severity="secondary" class="w-full" />
      </div>
    </section>

    <!-- Hardware Pricing -->
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

    <!-- FAQ -->
    <section class="pricing-faq">
      <h2>Frequently asked questions</h2>

      <div class="faq-item">
        <h4>Do I need a subscription to use Tunnelbox?</h4>
        <p>
          Yes. The subscription covers secure tunneling infrastructure,
          domain management, and TLS certificates.
        </p>
      </div>

      <div class="faq-item">
        <h4>Can I upgrade or downgrade at any time?</h4>
        <p>
          Absolutely. Plans are flexible and can be changed at any time
          from your dashboard.
        </p>
      </div>

      <div class="faq-item">
        <h4>Does Tunnelbox work behind NATs and firewalls?</h4>
        <p>
          Yes. Tunnelbox uses outbound-only connections, so no inbound ports
          or router configuration are required.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <section class="pricing-cta">
      <h2>Ready to get started?</h2>
      <p>Expose your services securely in minutes.</p>
      <Button label="Get Tunnelbox" size="large" />
    </section>
  </main>
</template>

<style scoped>
.pricing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.nah{
  list-style: none;
}

.pricing-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.pricing-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.pricing-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 5rem;
}

.pricing-card {
  background: whitesmoke;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.pricing-card.featured {
  border: 2px solid #3b82f6;
}

.badge {
  position: absolute;
  top: -12px;
  right: 16px;
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 12px;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  padding: 1.25rem 0 0 0;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
}

.hardware-note {
  font-size: 14px;
  opacity: 0.7;
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

.pricing-faq {
  max-width: 800px;
  margin: 0 auto 5rem;
}

.faq-item {
  margin-bottom: 1.5rem;
}

.pricing-cta {
  text-align: center;
}
</style>