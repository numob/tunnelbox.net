<script setup>
import Button from 'primevue/button'
</script>

<template>
  <main class="blog-page">
    <!-- Header -->
    <section class="blog-hero">
      <h1>The Tunnelbox Blog</h1>
      <p>
        Engineering notes, product updates, and deep dives into tunneling,
        networking, and developer infrastructure.
      </p>
    </section>

    <!-- Featured Post -->
    <section class="featured-post">
      <div class="featured-card">
        <span class="badge">Featured</span>
        <h2>Why Hardware Beats Software for Secure Tunneling</h2>
        <p class="excerpt">
          Software tunnels are convenient — until they’re not. In this post,
          we explore why purpose-built hardware creates more reliable,
          secure, and predictable tunnels.
        </p>
        <div class="meta">
          <span>Product</span>
          <span>•</span>
          <span>6 min read</span>
        </div>
        <Button label="Read Article" />
      </div>
    </section>

    <!-- Blog List -->
    <section class="blog-list">
      <article class="blog-card">
        <h3>From Localhost to Production: The Modern Dev Tunnel</h3>
        <p class="excerpt">
          A practical look at how developers expose local services today,
          and where traditional tools fall short.
        </p>
        <div class="meta">
          <span>Engineering</span>
          <span>•</span>
          <span>8 min read</span>
        </div>
        <Button label="Read" severity="secondary" />
      </article>

      <article class="blog-card">
        <h3>Understanding NAT, Firewalls, and Outbound-Only Connections</h3>
        <p class="excerpt">
          Why most home and office networks block inbound traffic — and how
          outbound tunneling gets around it safely.
        </p>
        <div class="meta">
          <span>Networking</span>
          <span>•</span>
          <span>10 min read</span>
        </div>
        <Button label="Read" severity="secondary" />
      </article>

      <article class="blog-card">
        <h3>Automatic TLS: How Tunnelbox Handles Certificates</h3>
        <p class="excerpt">
          A behind-the-scenes look at certificate provisioning,
          renewals, and zero-downtime HTTPS.
        </p>
        <div class="meta">
          <span>Security</span>
          <span>•</span>
          <span>7 min read</span>
        </div>
        <Button label="Read" severity="secondary" />
      </article>

      <article class="blog-card">
        <h3>Building Developer Tools That Don’t Fight Developers</h3>
        <p class="excerpt">
          Lessons learned while designing Tunnelbox for real-world dev workflows.
        </p>
        <div class="meta">
          <span>Culture</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <Button label="Read" severity="secondary" />
      </article>
    </section>

    <!-- Newsletter -->
    <section class="blog-cta">
      <h2>Stay in the loop</h2>
      <p>
        Product updates, deep dives, and engineering write-ups.
        No spam. Ever.
      </p>
      <div class="newsletter">
        <input type="email" placeholder="you@domain.com" />
        <Button label="Subscribe" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.blog-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.blog-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.featured-post {
  margin-bottom: 4rem;
}

.featured-card {
  background: whitesmoke;
  padding: 3rem;
  border-radius: 20px;
  position: relative;
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: black;
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 12px;
  border-radius: 999px;
}

.blog-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 5rem;
}

.blog-card {
  background: whitesmoke;
  padding: 2rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.excerpt {
  font-size: 15px;
}

.meta {
  font-size: 13px;
  opacity: 0.7;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.blog-cta {
  text-align: center;
}

.newsletter {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.newsletter input {
  padding: 0.75rem;
  font-size: 14px;
  width: 260px;
}
</style>