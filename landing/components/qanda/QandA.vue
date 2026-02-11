<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'What is Tunnelbox?',
    answer: 'Tunnelbox is a hardware-based tunneling solution that securely exposes local services to the public internet without requiring firewall rules or network reconfiguration.'
  },
  {
    question: 'How is Tunnelbox different from ngrok or Cloudflare Tunnel?',
    answer: 'Tunnelbox runs on dedicated hardware you own. There is no background agent, no daemon installed on your machine, and no dependency on developer laptops staying online. It is designed for stability, long-lived services, and production use.'
  },
  {
    question: 'Do I need to configure my router or firewall?',
    answer: 'No. Tunnelbox establishes an outbound secure tunnel, which works behind NAT, firewalls, and restrictive networks without any manual configuration.'
  },
  {
    question: 'Is TLS/SSL included?',
    answer: 'Yes. All public endpoints are secured with TLS by default. Certificates are automatically managed for you.'
  },
  {
    question: 'Who is Tunnelbox for?',
    answer: 'Tunnelbox is built for developers, hobbyists, startups, and professionals who need reliable external access to internal services without operational complexity.'
  },
  {
    question: 'Can I use Tunnelbox in production?',
    answer: 'Yes. Tunnelbox is designed for long-running services and production workloads, not just temporary development tunnels.'
  },
  {
    question: 'What protocols are supported?',
    answer: 'HTTP, HTTPS, and TCP-based services are supported. Additional protocols can be added over time.'
  },
  // {
  //   question: 'Does Tunnelbox phone home or inspect traffic?',
  //   answer: 'No. Tunnelbox acts purely as a tunnel endpoint. Traffic is encrypted and routed without inspection or modification.'
  // }
])

const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="qa-page">
    <header class="qa-header">
      <h1>Questions & Answers</h1>
      <p>
        Answers to all you tunnelbox questions.
      </p>
    </header>

    <div class="qa-list">
      <div
        v-for="(item, index) in faqs"
        :key="index"
        class="qa-item"
      >
        <button class="qa-question" @click="toggle(index)">
          <span>{{ item.question }}</span>
          <span class="indicator">{{ openIndex === index ? '−' : '+' }}</span>
        </button>

        <div v-if="openIndex === index" class="qa-answer">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
<!-- 
    <footer class="qa-footer">
      <p>
        Still have questions?
        <a href="/docs/setup">Read the docs</a>
        or
        <a href="/pricing">view pricing</a>.
      </p>
    </footer> -->
  </section>
</template>

<style scoped>
.qa-page {
  max-width: 820px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.qa-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.qa-header p {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
}

.qa-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.qa-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.qa-question {
  width: 100%;
  background: none;
  border: none;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--vp-c-text-1);
}

.qa-question:hover {
  background: var(--vp-c-bg-soft);
}

.indicator {
  font-size: 1.25rem;
  line-height: 1;
}

.qa-answer {
  padding: 0 1.25rem 1.25rem;
  color: var(--vp-c-text-2);
}

.qa-answer p {
  margin: 0.5rem 0 0;
}

.qa-footer {
  margin-top: 3.5rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

.qa-footer a {
  color: var(--vp-c-brand);
  font-weight: 500;
}
</style>
