import sys
import os

html_content = '''
  <!-- Section 10: Galeria -->
  <section class="gallery-section">
    <div class="container gallery-container">
      <h2 class="section-title text-center" style="width: 100%; text-align: center; margin-bottom: 64px;">Casos Clínicos</h2>
      <div class="gallery-grid">
'''
for i in range(54, 96):
    html_content += f'''        <div class="gallery-item" data-aos="zoom-in">
          <img src="/.netlify/images?url=/images/img{i}.png&w=400&q=80" alt="Caso Clínico" loading="lazy" width="400" class="gallery-img border-radius-shadow">
        </div>\n'''
html_content += '''      </div>
    </div>
  </section>
'''

with open('index.html', 'r', encoding='utf-8') as f:
    original = f.read()

# Replace the script tag completely with the injected section + script tag
replaced = original.replace('  <script src="./script.js" defer></script>', html_content + '  <script src="./script.js" defer></script>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(replaced)

print('HTML updated!')

css_content = '''

/* ----- SECTION 10: GALERIA ----- */
.gallery-section {
  padding: 120px 0;
  background-color: var(--color-white);
}

.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;
}

@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.gallery-item {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 24px rgba(3, 29, 94, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(3, 29, 94, 0.15);
}

.gallery-img {
  width: 100%;
  height: auto;
  display: block;
}
'''

with open('style.css', 'a', encoding='utf-8') as f:
    f.write(css_content)

print('CSS updated!')
