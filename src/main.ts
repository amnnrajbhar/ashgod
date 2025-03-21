import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  template: `
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-[var(--primary)]/80 backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <span class="text-xl font-bold gradient-text">Aashish Gaud</span>
          <div class="flex space-x-8">
            <a href="#work" class="nav-link">Work</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div class="flex flex-col items-center text-center animate-slide-up">
          <div class="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img 
              src="https://storage.googleapis.com/creatorspace-public/users%2Fclkgp90zh09vzp1014qmiqga2%2Ff2tGAbKWtPUZxT1c-VIDEO_6fd99bbc-a190-44d9-be9d-6bc66f320714.gif" 
              alt="Profile" 
              class="w-full h-full object-cover"
            >
          </div>
          <h1 class="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span #typedElement class="gradient-text block mb-4"></span>
            <!-- <span class="gradient-text">VFX Artist</span>
            <br />
            & Compositor -->
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl">
            Passionate VFX Artist with expertise in compositing, rotoscoping, and creating stunning visual effects for films and commercials
          </p>
          <div class="profile-stats">
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">40+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">25+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
          </div>
          <div class="flex gap-4">
            <a href="#work" class="button-primary">View Portfolio</a>
            <a href="#contact" class="button-secondary">Get in Touch</a>
          </div>
        </div>
      </section>

     <!-- Featured Work -->
<section id="work" class="py-12 sm:py-20 px-4 max-w-7xl mx-auto">
  <h2 class="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Selected Works</h2>
  <div class="bento-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <!-- Item 1 -->
    <div class="bento-item group col-span-1 sm:col-span-2">
      <div class="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <iframe 
          src="https://www.youtube.com/embed/IqRCPgvxa2A" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=IqRCPgvxa2A" target="_blank">
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <span class="text-white text-base sm:text-lg font-medium">View Video</span>
          </div>
        </a>
      </div>
      <h3 class="text-lg sm:text-xl font-bold mb-2 truncate">ICC Champions Trophy 2025</h3>
      <p class="text-gray-400 text-sm sm:text-base">Showcasing advanced compositing, CGI, and visual effects</p>
    </div>
    <!-- Item 2 -->
    <div class="bento-item group">
      <div class="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <iframe 
          src="https://www.youtube.com/embed/x1EOZ6cnkvQ" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=x1EOZ6cnkvQ" target="_blank">
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <span class="text-white text-base sm:text-lg font-medium">View Video</span>
          </div>
        </a>
      </div>
      <h3 class="text-lg sm:text-xl font-bold mb-2 truncate">Choice FinX Promo</h3>
      <p class="text-gray-400 text-sm sm:text-base">VFX compositing and motion graphics</p>
    </div>
    <!-- Item 3 -->
    <div class="bento-item group">
      <div class="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <iframe 
          src="https://www.youtube.com/embed/sDbzTJcdV9M" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=sDbzTJcdV9M" target="_blank">
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <span class="text-white text-base sm:text-lg font-medium">View Video</span>
          </div>
        </a>
      </div>
      <h3 class="text-lg sm:text-xl font-bold mb-2 truncate">Asian Paints</h3>
      <p class="text-gray-400 text-sm sm:text-base">VFX compositing and cleanup work</p>
    </div>
    <!-- Item 4 -->
    <div class="bento-item group col-span-1 sm:col-span-2">
      <div class="relative overflow-hidden rounded-lg mb-4 aspect-video">
        <iframe 
          src="https://www.youtube.com/embed/WsoH-6AkIR0" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=WsoH-6AkIR0" target="_blank">
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <span class="text-white text-base sm:text-lg font-medium">View Video</span>
          </div>
        </a>
      </div>
      <h3 class="text-lg sm:text-xl font-bold mb-2 truncate">CookieRun Ft. Khali</h3>
      <p class="text-gray-400 text-sm sm:text-base">Rotoscoping and compositing for action sequences</p>
    </div>
    <!-- Item 5 -->
    <div class="bento-item group">
      <div class="relative overflow-hidden rounded-lg mb-4 aspect-square">
        <iframe 
          src="https://www.youtube.com/embed/V39JJb5JPUc" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=V39JJb5JPUc" target="_blank">
          <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <span class="text-white text-base sm:text-lg font-medium">View Video</span>
          </div>
        </a>
      </div>
      <h3 class="text-lg sm:text-xl font-bold mb-2 truncate">SBI Life Insurance</h3>
      <p class="text-gray-400 text-sm sm:text-base">VFX work for various TV commercials</p>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-12 sm:py-20 px-4 max-w-7xl mx-auto">
  <div class="bento-grid grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- About Me -->
    <div class="bento-item">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p class="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
        VFX Artist with over 3 years of experience in the film and advertising industry. Specialized in compositing, rotoscoping, and creating high-quality visual effects. Proficient in industry-standard software and committed to delivering exceptional results that enhance storytelling through visual excellence.
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">Nuke</span>
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">Silhouette</span>
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">Mocha Pro</span>
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">After Effects</span>
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">Photoshop</span>
        <span class="skill-tag bg-gray-800 text-gray-200 text-xs sm:text-sm px-2 py-1 rounded">DaVinci Resolve</span>
      </div>
    </div>
    <!-- Experience -->
    <div class="bento-item">
      <h3 class="text-xl sm:text-2xl font-bold mb-4">Experience</h3>
      <div class="space-y-6">
        <div>
          <h4 class="font-bold text-lg">Compositor</h4>
          <p class="text-gray-400 text-sm sm:text-base">PINCROWD Studio • 2024 - Present</p>
          <ul class="text-gray-400 mt-2 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>VFX artist and Motion Graphics for commercial TVC brands including Asian Paints, Himalaya, KFC, Xiaomi, Classmate Pen, Bajaj Almond Drop, Choice FinX, Fun Foods, NewMe, Jimmy’s AV, and ICC Champions Trophy 2025</li>
            <li>Complex compositing and rotoscoping</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg">Motion Graphic Artist & Compositor</h4>
          <p class="text-gray-400 text-sm sm:text-base">Artha Animation • 2023 - 2024</p>
          <ul class="text-gray-400 mt-2 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>Worked on an unreleased CG animation series as a VFX artist</li>
            <li>Contributed to commercial TVC ads for brands like SBI, Prince Pipes, and Yokohama</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg">Motion Graphics Artist</h4>
          <p class="text-gray-400 text-sm sm:text-base">4DVFX Studio • 2022 - 2023</p>
          <ul class="text-gray-400 mt-2 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>TV commercials and music videos</li>
            <li>Basic compositing and rotoscoping</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg">Motion Graphics Artist Intern</h4>
          <p class="text-gray-400 text-sm sm:text-base">Digi Mad Studio • 2022</p>
          <ul class="text-gray-400 mt-2 text-sm sm:text-base list-disc list-inside space-y-1">
            <li>Created social media posts and reels for local brands</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      <!-- Contact Section -->
      <section id="contact" class="py-20 px-4 max-w-7xl mx-auto">
        <h2 class="section-title">Let's Create Something Amazing</h2>
        <div class="bento-grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div class="bento-item">
            <h3 class="text-2xl font-bold mb-4">Get in Touch</h3>
            <p class="text-gray-400 mb-6">
              Available for freelance projects and exciting opportunities in VFX and compositing
            </p>
            <a 
  href="mailto:gaudashish6@gmail.com" 
  class="social-link mb-4"
>
  📧  gaudashish6
</a>
            <a 
              href="tel:+919987970669" 
              class="social-link"
            >
              📱 +91 9987970669
            </a>
          </div>
          <div class="bento-item">
            <h3 class="text-2xl font-bold mb-4">Social Links</h3>
            <div class="space-y-4">
              <a href="https://www.linkedin.com/in/aashish-gaud-8b3646169" target="_blank" class="social-link">
                <span class="text-2xl">🔗</span> LinkedIn
              </a>
              <a href="https://bento.me/aashishgaud" target="_blank" class="social-link">
                <span class="text-2xl">🎨</span> Bento
              </a>
              <a href="https://instagram.com/aashishgaud" target="_blank" class="social-link">
                <span class="text-2xl">📸</span> Instagram
              </a>
              <a href="https://twitter.com/aashishgaud" target="_blank" class="social-link">
                <span class="text-2xl">🐦</span> Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
      <!-- Copyright Section -->
      <footer class="py-6 bg-gray-900 text-gray-400 text-center">
      <div class="max-w-7xl mx-auto px-4">
        <p>
          <a 
            href="https://amnnrajbhar.github.io/info/" 
            target="_blank" 
            class="hover:text-white"
          >
            © 2025 Aman Rajbhar | All Rights Reserved
          </a>
        </p>
      </div>
    </footer>
    </div>
  `,
})
export class App implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit() {
    new Typed(this.typedElement.nativeElement, {
      strings: [
        'Aashish',
        'VFX Artist',
        'Compositor',
        '3D Artist',
        'Photographer',
        'Motion Graphic',
        'Freelancer',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: false,
      cursorChar: '|',
      loop: true,
    });
  }
}

bootstrapApplication(App);
