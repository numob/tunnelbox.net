<script setup lang="ts">
</script>

<template>
  <main class="features-page">
    <!-- Hero -->
    <section class="hero">
      <h1>Expose local services. Securely. Instantly.</h1>
      <p class="hero-subtitle">
        Tunnelbox is a hardware tunneling device that lets developers
        expose local apps and services to the internet without network configuration
        or TLS headaches.
      </p>
      <div class="hero-actions">
        <button class="primary btn">View Kickstarter</button>
        <button class="secondary btn">Learn More</button>
      </div>
    </section>

    <!-- What is Tunnelbox -->
    <section class="section two-col">
      <div>
        <h2>Built for developers</h2>
        <p>
          Tunnelbox creates a hardware gateway from your local machine or on-premise
          environment to the public internet.
          <!-- Because connections are outbound only, -->
          <!-- it works behind NATs, firewalls, and restrictive networks. -->
        </p>
        <p>
          No CLI daemons. No background agents. No brittle configs.
          Just hardware that does one job extremely well.
        </p>
      </div>
      <div class="callout">
        <ul>
          <li>✔ Zero inbound ports</li>
          <li>✔ Quick and Easy Setup</li>
          <li>✔ Cloud-managed DNS</li>
          <li>✔ Designed for local-first workflows</li>
        </ul>
      </div>
    </section>

    <!-- Core Features -->
    <section class="section">
      <h2 class="center">Core features</h2>

      <div class="feature-grid">
        <article>
          <h3>No network configuration</h3>
          <p>
            Tunnelbox works out of the box. Connect your box to a router
            and your set.
          </p>
          <p>
            Plug it into any network and it connects securely using outbound-only traffic.
            No NAT. No cable mess.
          </p>
        </article>

        <article>
          <h3>Automatic SSL / TLS</h3>
          <p>
            Every exposed service is protected with HTTPS by default.
            Certificates are provisioned and renewed automatically.
          </p>
          <p>
            No certbot. No manual renewals. No broken demos.
          </p>
        </article>

        <article>
          <h3>True plug & play</h3>
          <p>
            Power it on, claim it, and you’re live.
            Tunnelbox self-registers and provisions itself
            without local setup or configuration files.
          </p>
        </article>
      </div>
    </section>
        <section class="section">
            <div>
        <h2>Free managed domains</h2>
        <p>
          Instantly expose services using built-in managed domains.
          Route multiple domains to different local ports and services
          on the same Tunnelbox device.
        </p>
        <ul>
          <li>One domain per service</li>
          <li>HTTPS included</li>
          <li>Public or restricted access</li>
        </ul>
      </div>
    </section>

    <!-- Domains -->
    <section class="section two-col">

      <div>
        <h2>Made for real dev workflows</h2>
        <p>
          Perfect for live demos, webhooks, dashboards, internal tools,
          staging environments, and customer previews.
        </p>
        <p>
          Tunnelbox keeps your local setup intact while making it reachable
          from anywhere.
        </p>
      </div>
    </section>


    <!-- Use Cases -->
    <section class="section">
      <h2 class="center">Who uses Tunnelbox?</h2>
      <div class="use-cases">
        <div>
          <h4>Hobbyists</h4>
          <p>Expose side projects and personal tools without touching your router.</p>
        </div>
        <div>
          <h4>Professional developers</h4>
          <p>Share live demos, receive webhooks, and test integrations locally.</p>
        </div>
        <div>
          <h4>Teams & startups</h4>
          <p>Standardize tunneling without relying on developer machines.</p>
        </div>
        <div>
          <h4>Edge & on-premise systems</h4>
          <p>Secure access to services deployed outside traditional cloud setups.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <h2>Stop fighting your network</h2>
      <p>
        Tunnelbox gives developers a clean, secure path
        from localhost to the internet without complexity.
      </p>
      <button class="primary large">Get Tunnelbox</button>
    </section>
  </main>
</template>

<style scoped>
.features-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.hero {
  text-align: center;
  margin-bottom: 5rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  max-width: 720px;
  margin: 0 auto 2rem;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* .btn{
  border: 2px;  
  background: whitesmoke;
  padding: 12px 16px;
  font-weight: 600;
  border-radius: 15px;
} */

.section {
  margin-bottom: 5rem;
}

.center {
  text-align: center;
  font-size: 30px;
}

.two-col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
}

.callout {
  border: 1px solid var(--vp-c-divider);
  padding: 2rem;
  border-radius: 12px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.use-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.cta {
  text-align: center;
  padding: 4rem 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

button.primary {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
}

button.large {
  font-size: 1.1rem;
}
</style>