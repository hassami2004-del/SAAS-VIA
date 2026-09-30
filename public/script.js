/* ========== CONFIG: edit these ========== */
// International format, digits only. Replace with the real SaaS Via number.
const NUMBER = "923001234567";
// Contact links shown next to the form. Edit or delete any line. Leave a url "" to hide it.
const CONTACTS = [
  { name: "WhatsApp",  label: "Chat now",           url: "wa", color: "#25d366", icon: "wa" },
  { name: "Gmail",     label: "hello@saasvia.com",   url: "mailto:hello@saasvia.com", color: "linear-gradient(135deg,#ea4335,#fbbc04)", glow: "#ea4335", icon: "mail" },
  { name: "LinkedIn",  label: "SaaS Via",            url: "https://linkedin.com/company/saasvia", color: "#0a66c2", icon: "in" },
  { name: "Instagram", label: "@saasvia",            url: "https://instagram.com/saasvia", color: "linear-gradient(45deg,#f9ce34,#ee2a7b 55%,#6228d7)", glow: "#ee2a7b", icon: "ig" }
];
 
// Optional: paste a Formspree/Getform/your API URL to also save each lead. Leave "" to skip.
const FORM_ENDPOINT = "";
const MESSAGE = "Hi! I'd like help growing my online product.";
 
// Real conversation shown in the hero. who: "me" = visitor, "bot" = SaaS Via. "gap" = skipped part.
const CHAT = [
  { day: "12 September 2026" },
  { who: "me",  t: "Hello", time: "3:19 pm" },
  { who: "me",  t: "Hello can I get more info!", time: "3:20 pm" },
  { who: "bot", t: "Of course! What kind of business do you run, and how long have you been in operation? Are you currently doing everything manually, or are you using any tools?", time: "3:20 pm" },
  { who: "me",  t: "I'm going manually", time: "3:21 pm" },
  { who: "bot", t: "Got it! Running things manually can be tough, especially as your business grows. What are some of the biggest time sinks for you right now? Is it in marketing, follow-ups, website management, or maybe customer support?", time: "3:21 pm" },
  { who: "me",  t: "My business model is monthly subscription based", time: "3:21 pm" },
  { who: "bot", t: "That's an interesting model and definitely trending! Subscription-based businesses can have great potential for consistent revenue. What specific tasks are taking up most of your time? For example, is it managing…", time: "3:22 pm" },
  { gap: "· · ·" },
  { who: "bot", t: "…situations where it feels like you're losing potential customers?", time: "3:23 pm" },
  { who: "me",  t: "Yes", time: "3:24 pm" },
  { who: "bot", t: "I understand. Customer support can be a heavy load, especially with frequent inquiries. Have you ever experienced a situation where a tool gap cost you a client or a sale? Feel free to share your experience if you'd like!", time: "3:24 pm" },
  { who: "bot", t: "Of course! I'd love to help. What kind of business do you run? How long have you been in business, and are you currently using any tools or handling everything manually?", time: "3:26 pm" },
  { who: "me",  t: "Yes suggest me better", time: "3:27 pm" },
  { who: "bot", t: "Thanks for sharing. It sounds like having an efficient customer support tool could really help streamline your business and improve client satisfaction.\n\nWhat's your comfortable monthly budget for a customer support tool? That way, I can recommend something that fits within your range.", time: "3:27 pm" },
  { who: "me",  t: "5000 pkr", time: "3:27 pm" },
  { who: "bot", t: "It looks like I need to gather more information to find the best customer…", time: "3:28 pm" }
];
 
// Blog: add a post by adding one object. Newest first. First post is shown as featured.
const POSTS = [
  { title: "Automate follow-ups before you buy any tool", cat: "Guides", date: "Sep 25, 2026", read: 4, icon: "⚡", g: "linear-gradient(135deg,#4f46e5,#0ea5d9)",
    excerpt: "Most lost sales happen after the first reply. Here is how to fix that with what you already have.",
    body: ["Write down every point where a lead waits on you: first reply, pricing question, renewal reminder.", "Fix the slowest one first with a saved reply or a scheduled message. Tools come after the process is clear.", "Measure one number: how long a lead waits. Cut it in half before you spend anything."] },
  { title: "Pricing a monthly subscription from zero", cat: "Pricing", date: "Sep 18, 2026", read: 5, icon: "💰", g: "linear-gradient(135deg,#f59e0b,#ef4444)",
    excerpt: "Start simple, then adjust with real usage.",
    body: ["Begin with one plan and one price. Complexity can wait until customers ask for it.", "Review churn monthly. If people leave in month one, the problem is onboarding, not price."] },
  { title: "Support without a support team", cat: "Support", date: "Sep 10, 2026", read: 3, icon: "💬", g: "linear-gradient(135deg,#10b981,#0ea5d9)",
    excerpt: "Answer the top five questions once, reuse forever.",
    body: ["List the five questions you answer most. Write the best answer to each once.", "Put them where customers already are, like WhatsApp quick replies, before adding a helpdesk."] },
  { title: "Your first 10 customers: where to find them", cat: "Growth", date: "Sep 3, 2026", read: 6, icon: "🚀", g: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    excerpt: "Skip ads. Go where your buyers already talk.",
    body: ["Pick one community where your buyers ask for help. Answer questions there for two weeks.", "Offer the first ten customers a direct line to you. Their feedback is worth more than their fee."] },
  { title: "Using AI tools strategically, not everywhere", cat: "AI", date: "Aug 27, 2026", read: 4, icon: "🤖", g: "linear-gradient(135deg,#6366f1,#22d3ee)",
    excerpt: "Pick one repetitive task and automate it well.",
    body: ["Choose the task you repeat daily and dislike most. That is your first AI candidate.", "Keep a human check on anything a customer sees until the output is consistently right."] },
  { title: "Five metrics that show your product is healthy", cat: "Growth", date: "Aug 20, 2026", read: 5, icon: "📈", g: "linear-gradient(135deg,#14b8a6,#3b82f6)",
    excerpt: "Track these weekly and ignore the rest.",
    body: ["Track new customers, churn, revenue per customer, response time and repeat usage.", "Write them in one place every Friday. Trends matter more than any single number."] }
];
 
/* ========== WHATSAPP LINKS ========== */
const dlg = document.getElementById("dlg");
const wa = "https://wa.me/" + NUMBER + "?text=" + encodeURIComponent(MESSAGE);
const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
function bindWa() { document.querySelectorAll(".wa").forEach(a => { a.href = wa; a.target = "_blank"; a.rel = "noopener"; }); }
bindWa();
document.getElementById("yr").textContent = new Date().getFullYear();
 
/* ========== HERO CHAT ========== */
document.getElementById("msgs").innerHTML = CHAT.map((c, i) => {
  if (c.day) return `<div class="day">${c.day}</div>`;
  if (c.gap) return `<div class="m gap">${c.gap}</div>`;
  return `<div class="m ${c.who === "me" ? "me" : ""}" style="animation-delay:${i * 60}ms">${esc(c.t).replace(/\n/g, "<br>")}<time>${c.time}</time></div>`;
}).join("");
 
/* ========== BLOG ========== */
const postsEl = document.getElementById("posts"), filtersEl = document.getElementById("filters");
const cats = ["All", ...new Set(POSTS.map(p => p.cat))];
let active = "All";
 
function card(p, i, feat) {
  return `<button class="pc ${feat ? "feat" : ""}" data-i="${i}" style="animation-delay:${i * 60}ms">
    <div class="cover" style="--g:${p.g}"><span class="chip">${p.cat}</span><b aria-hidden="true">${p.icon}</b></div>
    <div class="pb"><div class="meta">${p.date} · ${p.read} min read</div><h3>${p.title}</h3><p>${p.excerpt}</p>
    <div class="more">Read article <span>→</span></div></div></button>`;
}
function renderPosts() {
  const list = POSTS.map((p, i) => ({ p, i })).filter(x => active === "All" || x.p.cat === active);
  postsEl.className = "bgrid";
  postsEl.innerHTML = list.length ? list.map((x, k) => card(x.p, x.i, k === 0 && list.length > 1)).join("") : `<p class="empty">No posts yet.</p>`;
}
function renderFilters() {
  filtersEl.innerHTML = cats.map(c => `<button role="tab" aria-selected="${c === active}" data-c="${c}">${c}</button>`).join("");
}
filtersEl.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; active = b.dataset.c; renderFilters(); renderPosts(); });
postsEl.addEventListener("click", e => {
  const b = e.target.closest(".pc"); if (!b) return;
  const p = POSTS[b.dataset.i];
  document.getElementById("art").innerHTML = `<div class="cover" style="--g:${p.g}"><span class="chip">${p.cat}</span><b aria-hidden="true">${p.icon}</b></div>
    <div class="body"><div class="meta">${p.date} · ${p.read} min read</div><h2>${p.title}</h2>${p.body.map(t => `<p>${t}</p>`).join("")}</div>`;
  dlg.showModal();
});
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
renderFilters(); renderPosts();
 
/* ========== CONTACT FORM ========== *//* ========== CONTACT FORM ========== */

document.getElementById("form").addEventListener("submit", async e => {
  e.preventDefault();

  const f = e.target;
  const st = document.getElementById("status");

  if (!f.checkValidity()) {
    f.reportValidity();
    return;
  }

  const d = Object.fromEntries(new FormData(f));

  st.textContent = "Sending...";

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(d)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Email could not be sent");
    }

    st.textContent = "Thank you! Your request has been sent successfully.";
    f.reset();

  } catch (error) {
    console.error(error);
    st.textContent = "Could not send your request. Please try again.";
  }
});
 
/* ========== SOCIAL LINKS ========== */
const ICONS = {
  wa: '<svg viewBox="0 0 32 32"><path d="M16 4A12 12 0 0 0 5.700 22.200L4.500 27.500l5.500-1.300A12 12 0 1 0 16 4z" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round"/><path d="M12.200 10.500c-1 .9-1 2.500.5 4.600 1.600 2.200 3.500 3.400 5 3.700 1 .3 1.900-.3 2.200-1.200l-1.900-1.100-.9.800c-1.200-.6-2.300-1.600-2.900-2.900l.8-.9-.8-3z" fill="#fff"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.500"/><path d="M3.500 7.500L12 13.500l8.500-6"/></svg>',
  in: '<svg viewBox="0 0 24 24" fill="#fff"><circle cx="6.500" cy="6.500" r="1.900"/><rect x="4.800" y="10" width="3.400" height="9.500" rx=".6"/><path d="M11 10h3.200v1.400c.5-.9 1.600-1.700 3.100-1.700 2.800 0 3.700 1.800 3.700 4.300v5.500h-3.300v-4.900c0-1.200-.4-2-1.500-2-1.200 0-1.900.9-1.900 2.100v4.800H11z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="3.500" y="3.500" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.800"/><circle cx="17.200" cy="6.800" r="1" fill="#fff" stroke="none"/></svg>'
};
document.getElementById("socials").innerHTML = CONTACTS.filter(c => c.url).map(c =>
  `<a class="soc" style="--c:${c.glow || c.color}" href="${c.url === "wa" ? wa : c.url}" target="_blank" rel="noopener" aria-label="${c.name}"><i style="background:${c.color}">${ICONS[c.icon]}</i><span><strong>${c.name}</strong><small>${c.label}</small></span><em aria-hidden="true">→</em></a>`).join("");
 
/* ========== MOBILE MENU ========== */
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", e => { if (e.target.closest("a")) { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
 
/* ========== SMOOTH UX: reveal on scroll, progress bar, active nav ========== */
(function () {
  const sel = ".hero .wrap>div,.center,.step,.faq>h2,.faq details,.blog-head,#posts,.contact .wrap>div>:not(#socials),.soc,.form,.cta";
  const els = document.querySelectorAll(sel);
  els.forEach(el => {
    const i = Math.min([...el.parentNode.children].indexOf(el), 5);
    el.classList.add("rv"); el.style.setProperty("--d", i * 90 + "ms");
  });
  const show = el => { el.classList.add("in"); setTimeout(() => { el.classList.remove("rv", "in"); el.style.removeProperty("--d"); }, 1100); };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { show(x.target); io.unobserve(x.target); } }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(el => io.observe(el));
  } else els.forEach(show);
 
  const prog = document.getElementById("prog"), nav = document.querySelector(".nav");
  let tick = false;
  addEventListener("scroll", () => {
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      nav.classList.toggle("scrolled", scrollY > 10);
      tick = false;
    });
  }, { passive: true });
 
  const links = [...document.querySelectorAll('#menu a[href^="#"]:not(.btn)')];
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver(es => es.forEach(x => {
      if (x.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + x.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(a => { const s = document.querySelector(a.getAttribute("href")); if (s) so.observe(s); });
  }
})();

const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  status.textContent = "Sending...";

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    type: formData.get("type"),
    budget: formData.get("budget"),
    msg: formData.get("msg")
  };

  try {

    const response = await fetch("/send-email", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (response.ok) {

      status.textContent = "Request sent successfully!";

      form.reset();

    } else {

      status.textContent = result.message;

    }

  } catch (error) {

    console.error(error);

    status.textContent = "Could not connect to server.";

  }

});