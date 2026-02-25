<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import Button from 'primevue/button'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const hardwareViewer = ref(null)
const modelLoading = ref(true)
const modelError = ref(false)

let renderer
let scene
let camera
let clock
let modelRig
let frameId
let resizeObserver
let disposed = false
let revealStart = 0

const setupViewer = () => {
  const mountEl = hardwareViewer.value
  if (!mountEl) return

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
  camera.position.set(0, 0.15, 4)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  mountEl.appendChild(renderer.domElement)

  clock = new THREE.Clock()
  modelRig = new THREE.Group()
  modelRig.scale.set(1, 0.02, 1)
  scene.add(modelRig)

  const key = new THREE.DirectionalLight(0xffffff, 1.35)
  key.position.set(3, 4, 4)
  const fill = new THREE.DirectionalLight(0xa9b9ff, 0.7)
  fill.position.set(-3, 1, 2)
  const hemi = new THREE.HemisphereLight(0xe5e8ff, 0x1a1424, 0.65)
  scene.add(key, fill, hemi)

  const loader = new GLTFLoader()
  loader.load(withBase('/TunnelBox_GLTF.gltf'), (gltf) => {
    const model = gltf.scene
    const box = new THREE.Box3().setFromObject(model)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    const fit = 1.7 / maxDim

    model.scale.setScalar(fit)
    model.position.sub(center.multiplyScalar(fit))
    modelRig.add(model)
    const framed = new THREE.Box3().setFromObject(modelRig)
    const sphere = framed.getBoundingSphere(new THREE.Sphere())
    const dist = Math.max(2.8, sphere.radius * 2.6)
    camera.position.set(0, sphere.center.y + sphere.radius * 0.15, dist)
    camera.lookAt(sphere.center)
    camera.near = 0.01
    camera.far = Math.max(50, dist * 8)
    camera.updateProjectionMatrix()
    revealStart = clock.getElapsedTime()
    modelLoading.value = false
  }, undefined, () => {
    modelLoading.value = false
    modelError.value = true
  })

  const updateSize = () => {
    if (!mountEl || !renderer || !camera) return
    const width = mountEl.clientWidth || 640
    const height = mountEl.clientHeight || 360
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  resizeObserver = new ResizeObserver(updateSize)
  resizeObserver.observe(mountEl)
  updateSize()

  const animate = () => {
    if (disposed) return
    const t = clock.getElapsedTime()
    if (modelRig) {
      const reveal = Math.min(1, (t - revealStart) / 1.2)
      const eased = 1 - Math.pow(1 - reveal, 3)
      modelRig.scale.y = 0.02 + (1 - 0.02) * eased
      modelRig.rotation.y = 0.22 * Math.sin(t * 0.6)
    }
    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }
  animate()
}

onMounted(() => {
  modelLoading.value = true
  modelError.value = false
  // setupViewer()
})

// onBeforeUnmount(() => {
//   disposed = true
//   if (frameId) cancelAnimationFrame(frameId)
//   if (resizeObserver) resizeObserver.disconnect()
//   if (renderer) {
//     renderer.dispose()
//     renderer.forceContextLoss()
//     if (renderer.domElement?.parentNode) {
//       renderer.domElement.parentNode.removeChild(renderer.domElement)
//     }
//   }
//   scene = undefined
//   camera = undefined
//   renderer = undefined
// })
</script>

<template>
  <!-- Hero -->
  <section class="hero-section h-[90vh] flex justify-center items-center">
    <div id="hero">
      <div class="hero-content">
        <span class="tagline">TunnelBox is a Hardware Gateway To Expose Your Local Servers & AI Models Publicly </span>
        <span class="sub-tagline">
          A dedicated hardware gateway that connects your local services to the public internet without touching your router configurations.
        </span>
        <div class="hero-actions w-full justify-center items-center">
          <a
          class="btn"
          href="https://www.kickstarter.com"
          target="_blank"
          rel="noopener noreferrer"
          >View On Kickstarter</a>
          <!-- <a class="btn" href="/">Learn More</a> -->
        </div>
      </div>
      <div class="flex h-full w-full justify-center items-center">
        <img
        src="/box.png"
        alt="Hero"
        class="hero-image"
        />
      </div>

    </div>

  </section>
  

  <section id="other" class="pt-10">
    <section class="other-section core-flow-section">
      <div class="card">
        <span class="subsection-title">Expose Local Servers</span>
        <p class="subtitle">
          Put Your Local Service on A Public URL
        </p>
        <div
          class="diagram"
          role="img"
          aria-label="AI local model, webhooks, and localhost traffic are routed through TunnelBox and tunnel servers to a public URL"
        >
          <div class="diagram-local-panel">
            <div class="diagram-local-title">Localhost</div>
            <div class="diagram-local-stack">
              <div class="diagram-node diagram-node-with-icon">
                <span class="diagram-node-icon" aria-hidden="true">🤖</span>
                <span>AI Local Model</span>
              </div>
              <div class="diagram-node diagram-node-with-icon">
                <span class="diagram-node-icon" aria-hidden="true">🔗</span>
                <span>Services</span>
              </div>
              <div class="diagram-node diagram-node-with-icon">
                <span class="diagram-node-icon" aria-hidden="true">💻</span>
                <span>Local Servers</span>
              </div>
            </div>
          </div>
          <div class="diagram-curves" aria-hidden="true">
            <svg class="curve-layer" viewBox="0 0 260 220" preserveAspectRatio="none">
              <path class="curve-line" d="M 8 36 H 102 Q 130 36 130 64 V 110" />
              <path class="curve-line" d="M 8 110 H 270" />
              <path class="curve-line" d="M 8 184 H 102 Q 130 184 130 156 V 110" />
            </svg>
          </div>

          <div class="diagram-core-panel">
            <div class="diagram-core-title">Tunnel Stack</div>
            <div class="diagram-core-stack">
              <div class="diagram-node diagram-node-core">TunnelBox</div>
              <!-- <div class="diagram-core-bridge" aria-hidden="true">
                <div class="diagram-line diagram-line-vertical"></div>
                <div class="diagram-line diagram-line-vertical"></div>
              </div> -->
              <div class="diagram-node diagram-node-core">Servers</div>
            </div>
          </div>
          <div class="diagram-line" aria-hidden="true"></div>
          <div class="diagram-node diagram-node-with-icon">
            <span class="diagram-node-icon" aria-hidden="true">🌐</span>
            <span>Public URL</span>
          </div>
        </div>

      </div>
      <div class="card hardware-solution-card">
        <div class="hardware-solution-intro">
          <span class="subsection-title">Why a hardware solution?</span>
          <p class="subtitle">
            Developers should focus on what they love: building.
            A hardware ingress that handles all networking and traffic before it reaches your service. So, no need
            for complex network configurations or other headaches to get your local
            services to the public.
          </p>
        </div>
        <div class="hardware-grid">
          <!-- <div class="hardware-media"> -->
            <!-- <div class="image-placeholder"> -->
              <!-- <div
                ref="hardwareViewer"
                class="three-viewer"
                aria-label="3D preview of TunnelBox hardware"
              ></div>
              <div v-if="modelLoading && !modelError" class="viewer-status">Loading 3D model...</div>
              <div v-if="modelError" class="viewer-status viewer-status-error">Failed to load model</div> -->
              <img
              src="/box.png"
              />
            <!-- </div> -->
          <!-- </div> -->
          <div class="hardware-reason">
            <ul class="hardware-points">
              <li>
                Forwards traffic to your local machine automatically, so you don’t touch router rules.
              </li>
              <li>
                Keeps local development private by default, exposing only what you choose.
              </li>
              <li>
                Centralizes routing for multiple devices in one place.
              </li>
              <li>
                Lowers misconfiguration risk compared to manual network setup.
              </li>
            </ul>
          </div>
      </div>
    </div>
  </section>
  <!-- Value Prop -->
   <section class="other-section features-section">
    <div class="features-intro">
      <div class="subsection-title">
        <span>The features that make tunneling simplier</span>
      </div>
      <p class="subtitle">

        Tunnelbox offers an array of features in connecting your services to the world.
      </p>
    </div>


      <!-- Features -->
      <div class="features-grid">
        <div class="features-card">
          <img
          src="/plug.png"
          width="70"
          />
          <span class="card-header">Plug & Play</span>
          <p class="card-body">
            Plug it into power and your router, complete a quick setup, 
            and you’re live. No network configurations.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/globe.png"
          width="70"
          />
          <span class="card-header">Zero Touch Setup</span>
          <p class="card-body">
            No need to touch your router. Once the Box is plugged in 
            and setup, your local service is exposed to the public.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/domains.png"
          width="70"
          />
          <span class="card-header">Free Managed Domains</span>
          <p class="card-body">
            Depending on your subscription, create multiple public domains per port.
            <!-- Route each domain to a different local service or port. -->
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
          src="/secure.png"
          width="70"
          />
          <span class="card-header">End-to-End Encryption</span>
          <p class="card-body">
            All traffic is encrypted between TunnelBox and end user, ensuring secure
            communication.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/connect.png"
          width="70"
          />
          <span class="card-header">One Box To Connect Multiple Machines</span>
          <p class="card-body">
            Expose multiple local services from a single TunnelBox. 
            Route traffic to different ports, containers, or services without additional hardware
          </p>
        </div>
        <div class="features-card">
          <img
          src="/route.png"
          width="70"
          />
          <span class="card-header">Easily Control Where Your Traffic Goes</span>
          <p class="card-body">
            With a simple configuration on the <a
                href="https://console.tunnelbox.net"
                target="_blank"
                rel="noopener noreferrer"
                >TunnelBox Console</a>, easily manage where your traffic goes.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/developer.png"
          width="70"
          />
          <span class="card-header">Built for Developers</span>
          <p class="card-body">
            Designed for developers shipping fast. 
            Expose localhost for webhooks and APIs, share live demos,
            or publish AI inference endpoints in seconds.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/updates.png"
          width="70"
          />
          <span class="card-header">Regular Updates</span>
          <p class="card-body">
            Security patches, firmware upgrades, and new features are delivered
            keeping your gateway secure and optimized.
          </p>
        </div>
        <div class="features-card">
          <img
          src="/subscription.png"
          width="70"
          />
          <span class="card-header">One Year of Free Subscription</span>
          <p class="card-body">
              Every device includes one year of TunnelBox service — 
              including managed domains, SSL, and updates.
          </p>
        </div>

        

      </div>
      
  </section>
  <section class="other-section tunnelbox-who">

      <div class="subsection-title">
        <span>Who is Tunnelbox for?</span>
      </div>

      <div class="who-grid">
        <div class="hobbyist audience-card">
          <span>Hobbyists & Students</span>
        </div>
        <div class="team audience-card">
          <span>Developers</span>
        </div>
        <div class="pro audience-card">
          <span>Teams & Startups</span>
        </div>
      </div>

    
  </section>

  <section class="other-section getting-started-section" aria-labelledby="getting-started-title">
    <div class="getting-started-intro">
      <h2 id="getting-started-title" class="subsection-title">Getting Started</h2>
      <p class="subtitle">Three stages to getting started.</p>
    </div>

    <div class="getting-steps" role="list">
      <article class="getting-step" role="listitem">
        <div class="getting-step-num">01</div>
        <h3 class="getting-step-title">Plug in power</h3>
        <img
        src="/step1.png"
        />
      </article>

      <article class="getting-step" role="listitem">
        <div class="getting-step-num">02</div>
        <h3 class="getting-step-title">Connect ethernet</h3>        
        <img
        src="/step2.png"
        />
      </article>

      <article class="getting-step" role="listitem">
        <div class="getting-step-num">03</div>
        <h3 class="getting-step-title">Setup Account and Register TunnelBox and Domains</h3>
        <a
        href="https://console.tunnelbox.net"
        target="_blank"
        rel="noopener noreferrer"
        >

          <img
          src="/step3.png"
          />
        </a>
      </article>
    </div>
  </section>
  
  <!-- Use Cases -->
<section class="pricing-wrap" aria-labelledby="pricing-title">
  <h2 id="pricing-title" class="pricing-title">Pricing</h2>

  <div class="plans" role="list">
    <article class="pricing-card" role="listitem" aria-label="Starter plan">
      <header class="plan-head">
        <h3 class="plan-name">TunnelBox Price</h3>
        <div class="plan-price">
          $249 <small>one-time</small>
        </div>
        <div class="plan-pill" aria-hidden="true">
          Includes the full hardware package
        </div>
      </header>
      <ul class="plan-features">
        <li>1x TunnelBox</li>
        <li>1x Ethernet Cable</li>
        <li>1x Power Cable</li>
        <li>1x Power Adapter</li>
      </ul>
    </article>

    <!-- Pro -->
    <article class="pricing-card" role="listitem" aria-label="Pro plan">
      <header class="plan-head">
        <h3 class="plan-name">Yearly Subscription</h3>
        <div class="plan-price">
          $199 <small>/year</small>
        </div>
        <div class="plan-pill" aria-hidden="true">
          A once a year payment and we'll handle the rest
        </div>
      </header>
      <ul class="plan-features">
        <li>TLS support</li>
        <li>Rerouting</li>
        <li>Security</li>
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

        <a
          class="cta-pill"
          href="https://www.kickstarter.com"
          target="_blank"
          rel="noopener noreferrer"
        >

        Get TunnelBox</a>
      </div>

      <!-- Decorative product image -->
      <img
        class="hero-device"
        src="/box.png"
        alt="TunnelBox device"
        loading="eager"
        decoding="async"
      />
    </div>
  </section>
</template>

<style scoped>
section,
.card,
.features-card,
.pricing-card,
.plan-pill,
.cta-pill,
.btn {
  font-family: "Sora", "Avenir Next", "Segoe UI", sans-serif;
}

a {
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.3s ease;
}

a:hover {
  text-decoration: underline;

}

a:hover img {
  transform: scale(1.1); /* Makes it 10% bigger */
  border-color: #BB58FF;
  border-width: 2px;
}

#hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(260px, 0.9fr);
  align-items: center;
  text-align: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.hero-image {
  width: min(100%, 520px);
  height: auto;
  justify-self: end;

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
  width: min(1240px, 100%);
  margin-inline: auto;
  padding: 0 clamp(1rem, 4vw, 3.5rem);
}

.core-flow-section {
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.4rem);
}

.core-flow-section > .card:first-child .subtitle {
  margin-top: 0.4rem;
}

.hardware-reason {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  gap: 1.1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.14);
  padding-left: clamp(1rem, 2.4vw, 2rem);
}

.hardware-reason h1 {
  font-size: clamp(1.55rem, 2.9vw, 2.2rem);
  font-weight: 700;
  line-height: 1.2;
}

.hardware-reason p {
  font-size: clamp(1rem, 1.35vw, 1.12rem);
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.92);
}

.hardware-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.hardware-points li {
  position: relative;
  margin: 0;
  padding: 0.3rem 0 0.3rem 2.2rem;
  line-height: 1.55;
  font-size: clamp(0.94rem, 1.08vw, 1rem);
  color: rgba(255, 255, 255, 0.94);
}

.hardware-points li::before {
  content: "✓";
  position: absolute;
  left: 0.72rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1.05rem;
  height: 1.05rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #BB58FF 0%, #36BCFF 100%);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1;
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

.tunnelbox-who {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: clamp(1.2rem, 3vw, 2.2rem);
  width: 100%;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 24px;
  border: 1px solid rgba(187, 88, 255, 0.2);
  background:
    radial-gradient(80% 100% at 0% 100%, rgba(54, 188, 255, 0.14), rgba(54, 188, 255, 0) 65%),
    radial-gradient(90% 95% at 100% 0%, rgba(187, 88, 255, 0.2), rgba(187, 88, 255, 0) 60%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.97), rgba(20, 14, 30, 0.98));
  box-shadow:
    0 22px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.who-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: clamp(0.85rem, 2vw, 1.2rem);
}

.audience-card {
  position: relative;
  min-height: clamp(220px, 24vw, 280px);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: clamp(1rem, 2.4vw, 1.35rem);
  border-radius: 20px;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 14px 26px rgba(0, 0, 0, 0.3);
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.audience-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(12, 8, 18, 0.08) 20%, rgba(12, 8, 18, 0.84) 100%);
  z-index: -1;
}

.audience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(54, 188, 255, 0.4);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 18px 30px rgba(0, 0, 0, 0.34);
}

.getting-started-section {
  gap: clamp(1.2rem, 3vw, 2rem);
  margin-top: clamp(1rem, 3vw, 2rem);
}

.getting-started-intro .subsection-title,
.getting-started-intro .subtitle {
  text-align: left;
  margin: 0;
}

.getting-started-intro .subtitle {
  margin-top: 0.6rem;
  color: rgba(255, 255, 255, 0.88);
}

.getting-steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: clamp(0.85rem, 2vw, 1.2rem);
}

.getting-step {
  display: grid;
  gap: 0.85rem;
  padding: clamp(1rem, 2.2vw, 1.35rem);
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    radial-gradient(90% 95% at 100% 0%, rgba(187, 88, 255, 0.2) 0%, rgba(187, 88, 255, 0) 62%),
    radial-gradient(80% 110% at 0% 100%, rgba(54, 188, 255, 0.14) 0%, rgba(54, 188, 255, 0) 70%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.96), rgba(20, 14, 30, 0.98));
  box-shadow:
    0 12px 24px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.getting-step-num {
  width: 35px;
  height: 35px;
  padding: 0.28rem 0.55rem;
  text-align: center;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: rgba(255, 255, 255, 0.82);
}

.getting-step-title {
  margin: 0;
  font-size: clamp(1.02rem, 1.6vw, 1.18rem);
  font-weight: 700;
  line-height: 1.35;
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
  font-weight: 600;
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  line-height: 1.25;
  border-radius: 17.34px;
  background: #FFFFFF33;
}

.price span {
  font-size: 1rem;
  font-weight: 400;
}

.tagline {
  font-size: clamp(2.05rem, 5.8vw, 4.15rem);
  font-weight: 700;
  text-align: left;
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 800px;     /* slightly narrower improves wrapping */
  margin: 0;
}


.sub-tagline {
  font-size: clamp(1.05rem, 2.35vw, 1.75rem);
  font-weight: 500;
  text-align: left;
  line-height: 1.45;
  max-width: 820px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.subsection-title {
  text-align: center;
  /* padding: 3rem 1rem 1.5rem; */
  font-size: clamp(1.7rem, 4.3vw, 3.2rem);
  font-weight: 700;
  line-height: 1.15;
  
}

.subsection-title span {
  font-size: inherit;
  font-weight: inherit;
}

.subtitle {
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  margin: 1rem 0 0 0;
  text-align: center;
  line-height: 1.6;
}

.subtitle-left {
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  margin: 1rem 0 0 0;
  line-height: 1.6;
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
  gap: 1rem;
  padding: clamp(1.25rem, 2.5vw, 1.9rem);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    radial-gradient(100% 110% at 0% 100%, rgba(54, 188, 255, 0.14) 0%, rgba(54, 188, 255, 0) 68%),
    radial-gradient(90% 90% at 100% 0%, rgba(187, 88, 255, 0.2) 0%, rgba(187, 88, 255, 0) 60%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.96), rgba(28, 18, 34, 0.98));
  box-shadow:
    0 16px 30px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.card {
  display: flex;
  flex-direction: column;
  /* gap: clamp(1.1rem, 2.2vw, 1.8rem); */
  width: 100%;
  padding: clamp(1.4rem, 3vw, 2.2rem);
  margin: 0;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(95% 120% at 0% 100%, rgba(54, 188, 255, 0.14) 0%, rgba(54, 188, 255, 0) 70%),
    radial-gradient(90% 95% at 100% 0%, rgba(187, 88, 255, 0.16) 0%, rgba(187, 88, 255, 0) 62%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.95), rgba(28, 18, 34, 0.98));
  box-shadow:
    0 16px 30px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.features-card {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.9rem;
  width: 100%;
  min-height: 100%;
  padding: 1.35rem 1.2rem 1.2rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background:
    radial-gradient(95% 85% at 100% 0%, rgba(187, 88, 255, 0.16) 0%, rgba(187, 88, 255, 0) 65%),
    radial-gradient(80% 120% at 0% 100%, rgba(54, 188, 255, 0.14) 0%, rgba(54, 188, 255, 0) 70%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.96), rgba(28, 18, 34, 0.98));
  box-shadow:
    0 14px 26px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.features-card::before {
  content: counter(feature-index, decimal-leading-zero);
  position: absolute;
  right: 0.85rem;
  top: 0.7rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.55);
}

.features-card:hover {
  transform: translateY(-3px);
  border-color: rgba(54, 188, 255, 0.45);
  box-shadow:
    0 18px 30px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(54, 188, 255, 0.2) inset;
}

.features-grid {
  display: grid;
  counter-reset: feature-index;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 18px;
  width: 100%;
}

.features-grid .features-card {
  counter-increment: feature-index;
}

.features-section {
  gap: 2.5rem;
}

.features-section .card-header {
  font-size: clamp(1.18rem, 2.1vw, 1.5rem);
  font-weight: 700;
  line-height: 1.25;
  max-width: 28ch;
}

.features-section .card-body {
  font-size: clamp(0.95rem, 1.1vw, 1.02rem);
  margin-top: 0.35rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
}

.features-intro {
  padding: clamp(1rem, 2.6vw, 2rem) clamp(0.5rem, 1.6vw, 1rem);
}

.features-card img {
  width: 74px;
  height: 74px;
  object-fit: cover;
  padding: 0;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.hobbyist span,
.team span,
.pro span {
  font-family: "Sora", "Avenir Next", "Segoe UI", sans-serif;
  display: inline-flex;
  align-items: center;
  text-align: left;
  font-size: clamp(1.2rem, 2.25vw, 1.75rem) !important;
  font-weight: 700 !important;
  letter-spacing: -0.015em;
  line-height: 1.2;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
}

.hardware-grid {
  display: grid;
  gap: clamp(1.25rem, 3vw, 2.25rem);
  grid-template-columns: minmax(280px, 1fr) minmax(320px, 1.1fr);
}

.hardware-solution-card {
  position: relative;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  padding: clamp(2rem, 4vw, 3.25rem);
  overflow: hidden;
  border: 1px solid rgba(187, 88, 255, 0.24);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(80% 110% at 0% 100%, rgba(54, 188, 255, 0.13) 0%, rgba(54, 188, 255, 0) 62%),
    radial-gradient(70% 95% at 100% 0%, rgba(187, 88, 255, 0.2) 0%, rgba(187, 88, 255, 0) 56%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.97), rgba(20, 14, 30, 0.98));
}

.hardware-solution-card::after {
  content: "";
  position: absolute;
  right: -12%;
  top: -34%;
  width: min(420px, 38vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(54, 188, 255, 0.13), rgba(54, 188, 255, 0));
  pointer-events: none;
}

.hardware-solution-intro .subsection-title,
.hardware-solution-intro .subtitle {
  text-align: left;
}

.hardware-solution-intro .subtitle {
  max-width: 70ch;
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.88);
}

.hardware-solution-intro .subsection-title {
  margin: 0;
  letter-spacing: -0.015em;
}

.image-placeholder {
  width: 100%;
  min-height: 520px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    radial-gradient(70% 90% at 50% 95%, rgba(54, 188, 255, 0.2), rgba(54, 188, 255, 0) 63%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.015));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 10px 30px rgba(0, 0, 0, 0.28);
}

.hardware-media img {
  width: min(100%, 560px);
  max-height: 390px;
  height: auto;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.4));
}

.three-viewer {
  width: min(100%, 560px);
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background:
    radial-gradient(70% 80% at 50% 90%, rgba(58, 168, 255, 0.16), rgba(58, 168, 255, 0) 60%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
}

.three-viewer :deep(canvas) {
  display: block;
  width: 100%;
  height: 100%;
}

.viewer-status {
  position: absolute;
  inset: auto 0 1rem 0;
  margin: 0 auto;
  width: fit-content;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(18, 13, 24, 0.7);
  font-size: 0.85rem;
}

.viewer-status-error {
  border-color: rgba(255, 110, 110, 0.5);
  color: #ffb5b5;
}

.cta {
  text-align: center;
  padding: 4rem 1rem;
}

/* ====== Theme tokens (tweak to taste) ====== */

/* ====== Wrapper ====== */
.pricing-wrap {
  width: min(1240px, 100%);
  margin-inline: auto;
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: clamp(1.5rem, 3.2vw, 2.35rem);
  box-shadow:
    0 20px 42px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255,255,255,0.08);
  border: 1px solid rgba(187, 88, 255, 0.3);
  border-radius: 24px;
  background:
    radial-gradient(90% 120% at 0% 100%, rgba(54, 188, 255, 0.12) 0%, rgba(54, 188, 255, 0) 72%),
    radial-gradient(80% 95% at 100% 0%, rgba(187, 88, 255, 0.2) 0%, rgba(187, 88, 255, 0) 60%),
    linear-gradient(165deg, rgba(36, 24, 44, 0.96), rgba(20, 14, 30, 0.98));
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
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(0.9rem, 2vw, 1.2rem);
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
  margin-bottom: 1rem;
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
  padding: 0.5rem 0 0.8rem;
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
  min-height: 3.2rem;
  padding: 0.68rem 1.3rem;

  border-radius: 999px;
  font-weight: 700;
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  color: #fff;
  text-align: center;

  /* inner glass + color gradient */
  background: linear-gradient(180deg, rgba(187, 88, 255, 0.4) 0%, rgba(54, 188, 255, 0.4) 100%);

  border: 1px solid rgba(255,255,255,0.18);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    0 10px 24px rgba(0,0,0,0.25);
}

/* ====== Features list ====== */
.plan-features {
  margin: 0;
  list-style: none;
  padding-left: 0;
  display: grid;
  gap: 0.65rem;
  color: rgba(255, 255, 255, 0.92);
}
.plan-features li {
  position: relative;
  padding-left: 1.1rem;
  line-height: 1.45;
  font-size: clamp(0.92rem, 1.8vw, 1rem);
  opacity: 0.95;
}
.plan-features li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: linear-gradient(180deg, #BB58FF 0%, #36BCFF 100%);
}
/* ===== Theme tokens ===== */

/* ===== Capsule container ===== */
.hero-capsule{
  padding-block: clamp(2.5rem, 6vw, 4.25rem);
  background: transparent;
}

.hero-inner{
  position: relative;
  width: min(1240px, 100%);
  margin-inline: auto;
  background:
    radial-gradient(95% 95% at 100% 0%, rgba(187, 88, 255, 0.28) 0%, rgba(187, 88, 255, 0) 65%),
    radial-gradient(80% 110% at 0% 100%, rgba(54, 188, 255, 0.17) 0%, rgba(54, 188, 255, 0) 70%),
    linear-gradient(165deg, rgba(28, 18, 34, 0.97), rgba(20, 14, 30, 0.98));
  border-radius: 28px;
  border: 1px solid rgba(187, 88, 255, 0.24);
  min-height: clamp(290px, 40vw, 380px);
  overflow: hidden;
  box-shadow:
    0 22px 40px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);

  display: grid;
  align-items: center;
  padding: clamp(1.25rem, 3.5vw, 2.4rem) clamp(1.25rem, 3.5vw, 2.4rem);
}

/* ===== Copy block (centered) ===== */
.hero-copy{
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 0.95rem;
  margin-inline: auto;
  padding-left: clamp(0rem, 5vw, 1.5rem);
  max-width: 760px;
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
  color: rgba(255, 255, 255, 0.86);
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
    0 14px 28px rgba(0,0,0,0.28);
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

.diagram {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(90px, 0.9fr) minmax(0, 1.2fr) minmax(48px, 0.45fr) minmax(120px, 1fr);
  align-items: center;
  justify-content: stretch;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: clamp(0.5rem, 2vw, 1rem) 0;
  gap: clamp(0.25rem, 1vw, 0.5rem);
}

.diagram-node {
  display: inline-flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  min-height: clamp(70px, 7vw, 74px);
  min-width: 0;
  padding: 1rem 1.15rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
  text-align: center;
  font-size: clamp(0.88rem, 1.25vw, 1rem);
  font-weight: 600;
  line-height: 1.3;
}

.diagram-node-with-icon {
  flex-direction: column;
  gap: 0.35rem;
}

.diagram-node-icon {
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  font-size: 1.35rem;
  line-height: 1;
}

.diagram-node-core {
  border-color: rgba(187, 88, 255, 0.55);
  background: linear-gradient(180deg, rgba(187, 88, 255, 0.24) 0%, rgba(54, 188, 255, 0.2) 100%);
}

.diagram-local-stack {
  display: grid;
  gap: 1rem;
}

.diagram-local-panel {
  display: grid;
  gap: 0.75rem;
  min-width: 0;
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
}

.diagram-local-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: left;
  color: rgba(255, 255, 255, 0.85);
}

.diagram-local-stack .diagram-node {
  min-height: 52px;
  min-width: 0;
  padding: 0.75rem 0.95rem;
  font-size: clamp(0.8rem, 1.05vw, 0.92rem);
}

.diagram-core-panel {
  display: grid;
  gap: 0.75rem;
  min-width: 0;
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
}

.diagram-core-title {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: left;
  color: rgba(255, 255, 255, 0.85);
}

.diagram-core-stack {
  display: grid;
  gap: 1rem;
}

.diagram-core-stack .diagram-node {
  min-width: 0;
  min-height: 52px;
  width: 100%;
  padding: 0.75rem 0.95rem;
  font-size: clamp(0.8rem, 1.05vw, 0.92rem);
}

.diagram-core-bridge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

.diagram-line-vertical {
  width: 3px;
  height: 36px;
  margin: 0 auto;
  background-repeat: repeat-y;
  background-size: 3px 12px;
  animation: flow-dots-vertical 0.95s linear infinite;
}

.diagram-curves {
  height: 220px;
  align-self: center;
}

.curve-layer {
  width: 100%;
  height: 100%;
  display: block;
}

.curve-line {
  fill: none;
  stroke: rgba(255, 255, 255, 0.9);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 1 11;
  animation: curve-flow 0.95s linear infinite;
}

.diagram-line {
  height: 3px;
  border-radius: 999px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.85) 1.4px, transparent 1.6px);
  background-size: 12px 3px;
  background-repeat: repeat-x;
  animation: flow-dots 0.95s linear infinite;
}

@keyframes flow-dots {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 12px;
  }
}

@keyframes curve-flow {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -12;
  }
}

@media (max-width: 760px) {
  .diagram {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .diagram-curves {
    display: none;
  }

  .diagram-line {
    width: 3px;
    height: 36px;
    margin: 0 auto;
    background-repeat: repeat-y;
    background-size: 3px 12px;
    animation: flow-dots-vertical 0.95s linear infinite;
  }
}

@keyframes flow-dots-vertical {
  from {
    background-position-y: 0;
  }
  to {
    background-position-y: 12px;
  }
}


/* ===== Device image (lower-left anchored) ===== */
.hero-device{
  position: absolute;
  left: clamp(0.8rem, 2.4vw, 1.35rem);
  bottom: clamp(0.6rem, 2vw, 1.1rem);
  width: clamp(210px, 33vw, 300px);
  height: auto;
  pointer-events: none;   /* decorative */
  user-select: none;
  filter: drop-shadow(0 18px 26px rgba(0, 0, 0, 0.38));
}

/* Tweak image behavior on very small screens */
@media (max-width: 680px){
  .hero-device{
    width: clamp(180px, 50vw, 240px);
    bottom: 0.45rem;
    opacity: 0.95;
  }
  .hero-copy{
    padding-left: 0;
  }
}
/* ====== Responsiveness ====== */
@media (max-width: 900px) {
  #hero {
    grid-template-columns: 1fr;
    padding: 3rem 1rem;
  }

  .hero-content {
    align-items: center;
  }

  .hero-image {
    justify-self: center;
    width: min(100%, 420px);
  }

  .tagline,
  .sub-tagline {
    text-align: center;
  }

  .other-section {
    padding: 0 1rem;
  }

  .hardware-grid {
    grid-template-columns: 1fr;
  }

  .hardware-reason {
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    padding-left: 0;
    padding-top: 1rem;
  }

  .features-section {
    gap: 1.5rem;
  }

  .features-intro {
    padding: 0.5rem 0;
  }

  .features-grid {
    gap: 14px;
  }

  .features-card {
    padding: 1.1rem 1rem 1rem;
  }

  .features-card img {
    width: 64px;
    height: 64px;
    padding: 0;
  }

  .who-grid {
    grid-template-columns: 1fr;
  }

  .audience-card {
    min-height: 200px;
  }

  .getting-started-intro .subsection-title,
  .getting-started-intro .subtitle {
    text-align: center;
  }

  .getting-steps {
    grid-template-columns: 1fr;
  }

  .hardware-solution-intro .subsection-title,
  .hardware-solution-intro .subtitle {
    text-align: center;
  }

  .plans {
    grid-template-columns: 1fr;
  }
  .plan + .plan {
    border-left: none;
    border-top: 1px solid;
  }
}
</style>
