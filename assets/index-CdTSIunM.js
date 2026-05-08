(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=()=>`
  <!-- HERO SECTION -->
  <section id="hero-section" style="position: relative; color: white; padding: 100px 0; text-align: left; min-height: 80vh; display: flex; align-items: center; overflow: hidden;">
    <!-- Animated Background Canvas -->
    <canvas id="hero-bg-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;"></canvas>
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); z-index: 1;"></div>
    <div class="container" style="position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      
      <h1 style="font-size: 64px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; letter-spacing: -1px; max-width: 800px;">
        We Fill Your Crews <br/>
        With Real <span style="color: #FF7A00;">Plumbers <br/>And Electricians.</span>
      </h1>
      
      <p style="font-size: 20px; font-weight: 500; margin-bottom: 30px; letter-spacing: 0.5px;">
        Trades-Only Recruiting. Flat Fees. You Pay Only When You Hire.
      </p>
      
      <ul style="list-style: none; padding: 0; margin-bottom: 40px; font-size: 16px; line-height: 1.8;">
        <li style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF7A00; font-size: 20px;">•</span> Plumbers & electricians only.
        </li>
        <li style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF7A00; font-size: 20px;">•</span> Flat fees below typical agency percentages.
        </li>
        <li style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF7A00; font-size: 20px;">•</span> 60-day backup on every hire.
        </li>
        <li style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF7A00; font-size: 20px;">•</span> Curated shortlists. No public browsing.
        </li>
        <li style="display: flex; align-items: center; gap: 8px;">
          <span style="color: #FF7A00; font-size: 20px;">•</span> Shortlists typically delivered within a few business days.
        </li>
      </ul>

      <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
        <a href="#/request-candidates" style="background: #3a6b88; color: white; padding: 15px 30px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px;">
          Request Candidates &rarr;
        </a>
        <a href="#/find-a-job" style="background: transparent; color: white; border: 1px solid #FF7A00; padding: 15px 30px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 4px; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
          Find A Job &rarr;
        </a>
      </div>

      <div style="display: flex; gap: 20px; flex-wrap: wrap;">
        <a href="#/employers" style="background: #3a6b88; color: white; padding: 10px 20px; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 4px;">
          How it works for Employers
        </a>
        <a href="#/candidates" style="background: transparent; color: white; border: 1px solid #FF7A00; padding: 10px 20px; font-size: 14px; font-weight: 500; text-decoration: none; border-radius: 4px;">
          How it works for Candidates
        </a>
      </div>

    </div>
  </section>

  <!-- WHO WE PLACE SECTION -->
  <section style="background: url('plumber_img.png') center/cover no-repeat; position: relative; padding: 80px 0; color: white; text-align: center;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(30, 30, 30, 0.85); z-index: 1;"></div>
    <div class="container" style="position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      
      <h2 style="font-size: 42px; font-weight: 700; margin-bottom: 10px;">Who We Place</h2>
      <p style="font-size: 18px; opacity: 0.9; margin-bottom: 50px;">We connect skilled plumbers and electricians with contractors nationwide - here's who we place most often</p>
      
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
        <!-- Card 1 -->
        <div style="background: #0a0a0a; border-radius: 12px; padding: 40px 20px; text-align: center; border: 1px solid #222;">
          <div style="color: #FF7A00; margin-bottom: 20px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 18l10-5v-6l-10 5-10-5v6l10 5z"/></svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; letter-spacing: 1px; margin-bottom: 15px;">PLUMBERS</h3>
          <p style="font-size: 13px; color: #aaa; line-height: 1.6;">Residential and commercial installs, service, and repairs — dependable pros who keep water moving.</p>
        </div>
        <!-- Card 2 -->
        <div style="background: #0a0a0a; border-radius: 12px; padding: 40px 20px; text-align: center; border: 1px solid #222;">
          <div style="color: #FF7A00; margin-bottom: 20px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; letter-spacing: 1px; margin-bottom: 15px;">ELECTRICIANS</h3>
          <p style="font-size: 13px; color: #1e90ff; line-height: 1.6;">Licensed electricians for wiring, troubleshooting, and safe, code-compliant installs.</p>
        </div>
        <!-- Card 3 -->
        <div style="background: #0a0a0a; border-radius: 12px; padding: 40px 20px; text-align: center; border: 1px solid #222;">
          <div style="color: #FF7A00; margin-bottom: 20px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; letter-spacing: 1px; margin-bottom: 15px;">LEADERS & SUPERVISORS</h3>
          <p style="font-size: 13px; color: #aaa; line-height: 1.6;">Experienced foremen and site leaders who manage crews, ensure quality, and hit deadlines.</p>
        </div>
        <!-- Card 4 -->
        <div style="background: #0a0a0a; border-radius: 12px; padding: 40px 20px; text-align: center; border: 1px solid #222;">
          <div style="color: #FF7A00; margin-bottom: 20px;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </div>
          <h3 style="font-size: 18px; font-weight: 700; letter-spacing: 1px; margin-bottom: 15px;">PROJECT ROLES</h3>
          <p style="font-size: 13px; color: #aaa; line-height: 1.6;">Project managers and estimators who plan, budget, and deliver jobs on schedule.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US SECTION -->
  <section style="background: white; padding: 80px 0; text-align: center;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      
      <h2 style="font-size: 42px; font-weight: 700; color: #426A82; margin-bottom: 50px;">Why Choose Us</h2>
      
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;">
        <!-- Card 1 -->
        <div style="border: 2px solid #426A82; border-radius: 12px; padding: 40px 20px; background: white;">
          <div style="position: relative; width: 60px; height: 60px; margin: 0 auto 20px; border: 2px solid #C07044; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #C07044;">
            <div style="position: absolute; top: -12px; background: #C07044; color: white; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">1</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <h3 style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 15px;">Industry Experts</h3>
          <p style="font-size: 14px; color: #666; line-height: 1.6;">We specialize exclusively in plumbers and electricians.</p>
        </div>
        <!-- Card 2 -->
        <div style="border: 2px solid #426A82; border-radius: 12px; padding: 40px 20px; background: white;">
          <div style="position: relative; width: 60px; height: 60px; margin: 0 auto 20px; border: 2px solid #C07044; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #C07044;">
            <div style="position: absolute; top: -12px; background: #C07044; color: white; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">2</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3 style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 15px;">Hire First, Pay After</h3>
          <p style="font-size: 14px; color: #666; line-height: 1.6;">Only pay once your new hire is onboard.</p>
        </div>
        <!-- Card 3 -->
        <div style="border: 2px solid #426A82; border-radius: 12px; padding: 40px 20px; background: white;">
          <div style="position: relative; width: 60px; height: 60px; margin: 0 auto 20px; border: 2px solid #C07044; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #C07044;">
            <div style="position: absolute; top: -12px; background: #C07044; color: white; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">3</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3 style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 15px;">Fast & Reliable</h3>
          <p style="font-size: 14px; color: #666; line-height: 1.6;">We match certified tradespeople to open roles within days.</p>
        </div>
        <!-- Card 4 -->
        <div style="border: 2px solid #426A82; border-radius: 12px; padding: 40px 20px; background: white;">
          <div style="position: relative; width: 60px; height: 60px; margin: 0 auto 20px; border: 2px solid #C07044; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #C07044;">
            <div style="position: absolute; top: -12px; background: #C07044; color: white; width: 24px; height: 24px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">4</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3 style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 15px;">60-Day Backup Guarantee</h3>
          <p style="font-size: 14px; color: #666; line-height: 1.6;">If a placement doesn't work out, we provide a replacement at no extra cost - peace of mind included.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW IT WORKS SECTION -->
  <section style="background: #F4EFE9; padding: 80px 0; text-align: center;">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
      
      <h2 style="font-size: 42px; font-weight: 700; color: #426A82; margin-bottom: 50px;">How It Works</h2>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
        <!-- Card 1 -->
        <div style="background: #FDFCFB; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; align-items: flex-start; gap: 20px; text-align: left;">
          <div style="position: relative; flex-shrink: 0; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 24 24" fill="#EE9440"><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z"/></svg>
            <span style="position: relative; z-index: 2;">1</span>
          </div>
          <div>
            <h3 style="font-size: 20px; font-weight: 700; color: #426A82; margin-bottom: 10px;">Submit Your Request</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.6;">Fill out our simple form with your staffing needs — role, experience, location, and urgency.</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div style="background: #FDFCFB; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; align-items: flex-start; gap: 20px; text-align: left;">
          <div style="position: relative; flex-shrink: 0; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 24 24" fill="#EE9440"><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z"/></svg>
            <span style="position: relative; z-index: 2;">2</span>
          </div>
          <div>
            <h3 style="font-size: 20px; font-weight: 700; color: #426A82; margin-bottom: 10px;">We Source Candidates</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.6;">Our network of vetted plumbers and electricians ensures we find qualified, work-ready professionals fast.</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div style="background: #FDFCFB; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; align-items: flex-start; gap: 20px; text-align: left;">
          <div style="position: relative; flex-shrink: 0; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 24 24" fill="#EE9440"><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z"/></svg>
            <span style="position: relative; z-index: 2;">3</span>
          </div>
          <div>
            <h3 style="font-size: 20px; font-weight: 700; color: #426A82; margin-bottom: 10px;">Review & Select</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.6;">We present top candidates for your approval. You choose who fits your team best.</p>
          </div>
        </div>
        <!-- Card 4 -->
        <div style="background: #FDFCFB; border-radius: 16px; padding: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); display: flex; align-items: flex-start; gap: 20px; text-align: left;">
          <div style="position: relative; flex-shrink: 0; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" viewBox="0 0 24 24" fill="#EE9440"><path d="M12 2L22 7V17L12 22L2 17V7L12 2Z"/></svg>
            <span style="position: relative; z-index: 2;">4</span>
          </div>
          <div>
            <h3 style="font-size: 20px; font-weight: 700; color: #426A82; margin-bottom: 10px;">Hire & Get Support</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.6;">Hire the candidate and start your project. Our 60-day backup guarantee gives extra peace of mind.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="if(window.initHeroAnimation) window.initHeroAnimation()" style="display:none;">
`,t=(e,t,n=[])=>`
  <section style="background: url('hero_bg.png') center/cover no-repeat; position: relative; color: white; padding: var(--space-4xl) 0; text-align: center; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 41, 0.7); pointer-events: none;"></div>
    <div class="container" style="position: relative; z-index: 1;">
      <h1 style="font-size: var(--font-size-5xl); font-weight: 800; margin-bottom: var(--space-lg); max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.1; letter-spacing: -0.02em;">${e}</h1>
      <p style="font-size: var(--font-size-xl); color: rgba(255, 255, 255, 0.85); max-width: 650px; margin-left: auto; margin-right: auto; margin-bottom: var(--space-xl);">${t}</p>
      ${n.length>0?`
        <div style="display: flex; gap: var(--space-md); justify-content: center; flex-wrap: wrap;">
          ${n.map(e=>`<a href="${e.href}" class="btn ${e.primary?`btn-primary`:`btn-secondary`}" style="${e.primary?``:`color: white; border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.1);`} min-width: 200px;">${e.text}</a>`).join(``)}
        </div>
      `:``}
    </div>
  </section>
`,n={"/":e,"/home":e,"/employers":()=>`
  ${t(`Employer Solutions`,`Why hire through us`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Employers</h2>
  </section>
`,"/candidates":()=>`
  ${t(`Candidate Opportunities`,`Why join our network`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Candidates</h2>
  </section>
`,"/pricing":()=>`
  ${t(`Simple, Flat-Fee Pricing`,`No percentages. No hidden costs. Pay only when you hire.`,[])}
  
  <section class="container" style="padding: var(--space-4xl) 0;">
    <div style="max-width: 900px; margin: 0 auto;">
      <h2 style="text-align: center; font-size: var(--font-size-3xl); margin-bottom: var(--space-2xl);">Placement Fee Structure</h2>
      
      <div style="background: white; border: 1px solid var(--color-border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-lg);">
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 20px; font-weight: 700; color: var(--color-text);">Role Level</th>
              <th style="padding: 20px; font-weight: 700; color: var(--color-text); text-align: right;">Placement Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 20px;">
                <div style="font-weight: 600;">Apprentice</div>
                <div style="font-size: 14px; color: var(--color-text-secondary);">Entry-level plumbing or electrical support.</div>
              </td>
              <td style="padding: 20px; text-align: right; font-size: 20px; font-weight: 700; color: var(--color-primary);">$3,500</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 20px;">
                <div style="font-weight: 600;">Journeyman / Service</div>
                <div style="font-size: 14px; color: var(--color-text-secondary);">Licensed plumbers or electricians for installs and service.</div>
              </td>
              <td style="padding: 20px; text-align: right; font-size: 20px; font-weight: 700; color: var(--color-primary);">$6,500</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border);">
              <td style="padding: 20px;">
                <div style="font-weight: 600;">Lead / Master / Foreman / Estimator</div>
                <div style="font-size: 14px; color: var(--color-text-secondary);">Highly skilled supervisors and technical estimators.</div>
              </td>
              <td style="padding: 20px; text-align: right; font-size: 20px; font-weight: 700; color: var(--color-primary);">$8,500</td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <div style="font-weight: 600;">Project Manager</div>
                <div style="font-size: 14px; color: var(--color-text-secondary);">Large-scale commercial or residential oversight.</div>
              </td>
              <td style="padding: 20px; text-align: right; font-size: 20px; font-weight: 700; color: var(--color-primary);">$12,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="margin-top: var(--space-3xl); display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-xl);">
        <div style="background: var(--color-surface); padding: var(--space-xl); border-radius: var(--radius-md); border-left: 4px solid var(--color-primary);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Contingency Basis</h3>
          <p style="font-size: 14px; color: var(--color-text-secondary);">You only pay when a candidate starts work. No retainers, no upfront costs, and no risk to your business.</p>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-xl); border-radius: var(--radius-md); border-left: 4px solid var(--color-primary);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">60-Day Guarantee</h3>
          <p style="font-size: 14px; color: var(--color-text-secondary);">Every hire is backed by a 60-day replacement guarantee. If they leave or are let go, we find a replacement for free.</p>
        </div>
        <div style="background: var(--color-surface); padding: var(--space-xl); border-radius: var(--radius-md); border-left: 4px solid var(--color-primary);">
          <h3 style="font-size: 18px; margin-bottom: 10px;">Net 7 Terms</h3>
          <p style="font-size: 14px; color: var(--color-text-secondary);">Invoices are issued on the candidate's start date with Net 7 payment terms from the invoice date.</p>
        </div>
      </div>
    </div>
  </section>

  <section style="background: var(--color-dark-bg); color: white; padding: var(--space-4xl) 0; text-align: center;">
    <div class="container">
      <h2 style="font-size: var(--font-size-3xl); margin-bottom: var(--space-md);">Ready to hire?</h2>
      <p style="margin-bottom: var(--space-xl); opacity: 0.8;">Get a curated shortlist of vetted tradespeople in 3-7 business days.</p>
      <a href="#/request-candidates" class="btn btn-primary" style="padding: 14px 40px; font-size: 18px;">Start Hiring Process</a>
    </div>
  </section>
`,"/about":()=>`
  <section style="position: relative; color: white; padding: 100px 0; background: #2c3e50; overflow: hidden; display: flex; align-items: center;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('hero_bg.png') center/cover no-repeat; opacity: 0.5;"></div>
    <div class="container" style="position: relative; z-index: 1; padding-left: 5vw;">
      <h1 style="font-size: 52px; font-weight: 700; line-height: 1.2; max-width: 600px;">About Wrench & Wire</h1>
    </div>
  </section>

  <section class="container" style="padding: 60px 5vw; max-width: 1000px; margin: 0 auto;">
    <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); margin-bottom: 40px;">
      <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 24px;">Our Mission</h2>
      <p style="color: #444; margin-bottom: 16px; font-size: 16px; line-height: 1.6;">At Wrench & Wire Recruiting, our mission is simple: to connect the best plumbers and electricians with the nation's top contractors. We believe that the skilled trades are the backbone of our infrastructure, and that finding the right talent shouldn't be a bottleneck for your business.</p>
      <p style="color: #444; margin-bottom: 16px; font-size: 16px; line-height: 1.6;">Unlike generic staffing agencies, we don't recruit for administrative or IT roles. We speak the language of the job site. We know the difference between a journeyman and a master, and we understand the unique demands of commercial, residential, and industrial projects.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="font-size: 32px; margin-bottom: 16px;">🤝</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">For Employers</h3>
        <p style="color: #666; margin-bottom: 16px;">We offer a transparent, flat-fee, pay-on-hire model. No retainers, no risk. You only pay when your new hire starts, and every placement is backed by a 60-day guarantee.</p>
        <a href="#/employers" style="font-weight: 600; color: #0066cc; text-decoration: none;">Learn more →</a>
      </div>

      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="font-size: 32px; margin-bottom: 16px;">🔧</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">For Candidates</h3>
        <p style="color: #666; margin-bottom: 16px;">Our service is 100% free for trade professionals. We provide access to unadvertised opportunities, negotiate top pay rates, and keep your job search strictly confidential.</p>
        <a href="#/candidates" style="font-weight: 600; color: #0066cc; text-decoration: none;">Learn more →</a>
      </div>
    </div>
  </section>

  <!-- Bottom Callout -->
  <section style="background: #f4efea; padding: 60px 20px; text-align: center;">
    <h2 style="font-size: 32px; font-weight: 700; color: #111; margin-bottom: 16px;">Ready to get to work?</h2>
    <p style="font-size: 15px; color: #444; margin-bottom: 32px;">Whether you're hiring or looking for a job, we're ready to partner with you.</p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <a href="#/request-candidates" style="display: inline-block; background: #0066cc; color: white; padding: 14px 32px; border-radius: 6px; font-weight: 600; text-decoration: none;">Request Candidates</a>
      <a href="#/find-a-job" style="display: inline-block; background: white; color: #0066cc; border: 2px solid #0066cc; padding: 14px 32px; border-radius: 6px; font-weight: 600; text-decoration: none;">Find A Job</a>
    </div>
  </section>
`,"/process":()=>`
  ${t(`How It Works for Employers`,`Our 3-step process`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Process</h2>
  </section>
`,"/process-candidates":()=>`
  ${t(`How It Works for Candidates`,`Get hired in 3 steps`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Candidate Process</h2>
  </section>
`,"/coverage":()=>`
  ${t(`Nationwide Coverage`,`We place in all 50 states`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Coverage</h2>
  </section>
`,"/contact":()=>`
  <section style="position: relative; color: white; padding: 100px 0; background: #2c3e50; overflow: hidden; display: flex; align-items: center;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('/hero_bg.png') center/cover no-repeat; opacity: 0.5;"></div>
    <div class="container" style="position: relative; z-index: 1; padding-left: 5vw;">
      <h1 style="font-size: 52px; font-weight: 700; line-height: 1.2; max-width: 600px;">Get in Touch</h1>
    </div>
  </section>

  <section class="container" style="padding: 60px 5vw; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
    
    <!-- Contact Info Cards -->
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="font-size: 32px; margin-bottom: 16px;">📞</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Call Us</h3>
        <p style="color: #666; margin-bottom: 16px;">Speak directly with a recruiter.</p>
        <a href="tel:9015006000" style="font-size: 18px; font-weight: 600; color: #0066cc; text-decoration: none;">901-500-6000</a>
      </div>

      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="font-size: 32px; margin-bottom: 16px;">✉️</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Email Us</h3>
        <p style="color: #666; margin-bottom: 16px;">We respond to all inquiries within 24 hours.</p>
        <a href="mailto:info@wrenchandwirerecruiting.com" style="font-size: 18px; font-weight: 600; color: #0066cc; text-decoration: none;">info@wrenchandwirerecruiting.com</a>
      </div>

      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="font-size: 32px; margin-bottom: 16px;">📍</div>
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Mailing Address</h3>
        <p style="color: #666; margin-bottom: 0;">P.O. Box 172184<br/>Memphis, TN 38187</p>
      </div>
    </div>

    <!-- Contact Form -->
    <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Send a Message</h2>
      <p style="color: #666; margin-bottom: 32px; font-size: 15px;">Have a general question? Drop us a line below.</p>
      
      <form onsubmit="event.preventDefault(); alert('Message sent!');" style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Name *</label>
          <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="John Doe" />
        </div>
        
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Email *</label>
          <input type="email" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="john@example.com" />
        </div>

        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Message *</label>
          <textarea rows="5" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; resize: vertical;" placeholder="How can we help you?"></textarea>
        </div>

        <button type="submit" style="width: 100%; padding: 14px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px;">Send Message</button>
      </form>
    </div>

  </section>
`,"/jobs":()=>`
  ${t(`Explore Open Trade Roles`,`Find your next opportunity`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Jobs</h2>
  </section>
`,"/blog":()=>`
  ${t(`Insights & Resources`,`Read our latest blog posts`)}
  <section class="container" style="padding: var(--space-4xl) 0;">
    <h2>Blog</h2>
  </section>
`,"/request-candidates":()=>`
  <section style="position: relative; color: white; padding: 100px 0; background: #2c3e50; overflow: hidden; display: flex; align-items: center;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('plumber_img.png') left center/cover no-repeat; opacity: 0.3;"></div>
    <div class="container" style="position: relative; z-index: 1; padding-left: 5vw;">
      <h1 style="font-size: 52px; font-weight: 700; line-height: 1.2; max-width: 600px;">Request Skilled<br/>Candidates</h1>
    </div>
  </section>

  <section class="container" style="padding: 60px 5vw; max-width: 1000px; margin: 0 auto;">
    <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">Employer Request & Agreement</h2>
      <p style="color: #666; margin-bottom: 32px; font-size: 15px;">Plumbers & electricians only. Flat fees. 60-day backup. Curated shortlists. No public browsing.</p>
      
      <form onsubmit="event.preventDefault(); alert('Request submitted successfully!');" style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Company Name *</label>
            <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="e.g. Acme Plumbing" />
          </div>
          <div style="flex: 1; min-width: 250px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Contact Name *</label>
            <input type="text" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="John Doe" />
          </div>
        </div>

        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Email Address *</label>
            <input type="email" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="john@example.com" />
          </div>
          <div style="flex: 1; min-width: 250px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Phone Number *</label>
            <input type="tel" required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px;" placeholder="(555) 123-4567" />
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Role Needed *</label>
          <select required style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; appearance: none; background: white url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') right 10px center / 16px no-repeat;">
            <option value="">Select a role</option>
            <option>Apprentice Plumber/Electrician</option>
            <option>Journeyman / Service</option>
            <option>Lead / Master / Foreman</option>
            <option>Project Manager / Estimator</option>
          </select>
        </div>

        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />

        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 16px; color: #111;">Service Agreement</h3>
          <div style="height: 250px; overflow-y: auto; background: white; border: 1px solid #ddd; padding: 16px; font-size: 13px; color: #444; line-height: 1.5; border-radius: 4px; margin-bottom: 20px;">
            <p><strong>This Agreement is between Wrench & Wire Recruiting (“Agency”) and the undersigned employer (“Employer”). By accepting below, Employer agrees to these terms.</strong></p>
            <p><strong>1. Services.</strong> Agency sources and presents qualified candidates for Employer’s open roles (plumbing and electrical trades).</p>
            <p><strong>2. Fees.</strong> Per-placement flat fees, payable only after the placed candidate’s start date:</p>
            <ul>
              <li>Apprentice: $3,500</li>
              <li>Journeyman/Service: $6,500</li>
              <li>Lead/Master/Foreman/Estimator: $8,500</li>
              <li>Project Manager: $12,500</li>
              <li>Priority Search add-on: +$1,500 (optional)</li>
            </ul>
            <p><strong>3. Payment Timing.</strong> Invoice is issued on the candidate’s start date and due NET 7 days.</p>
            <p><strong>4. Replacement Guarantee.</strong> If a placed candidate leaves for any reason within 60 calendar days of the start date, Agency will provide one replacement candidate at no additional placement fee.</p>
            <p><strong>5. Non-Circumvention.</strong> For 12 months after Agency first submits a candidate, Employer will not hire, contract with, or otherwise engage that candidate (including through affiliates or referrals) without paying the applicable Agency fee.</p>
            <p><strong>6. Candidate Ownership.</strong> A candidate is deemed “submitted” when the Agency first delivers the candidate profile/resume/contact info to the Employer. If Employer was already actively interviewing that candidate for the same role before Agency’s submission, Employer must notify Agency within 48 hours with written proof to avoid fee liability.</p>
            <p><strong>7. Compliance.</strong> Employer is responsible for all employment decisions and compliance with applicable laws (e.g., background checks, I-9, wage/hour, EEO).</p>
            <p><strong>8. Confidentiality.</strong> Both parties will keep nonpublic information and candidate data confidential and use it only for evaluating/performing this Agreement.</p>
            <p><strong>9. Limitation of Liability.</strong> Agency is not liable for indirect, incidental, or consequential damages. Agency’s aggregate liability will not exceed the fee paid for the placement giving rise to the claim.</p>
            <p><strong>10. Governing Law.</strong> Tennessee law governs. Venue: Shelby County, Tennessee.</p>
            <p><strong>11. Entire Agreement & E-Sign.</strong> This is the entire agreement and may be accepted electronically. A checked consent box and submitted form constitute a signed writing.</p>
          </div>

          <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px;">
            <input type="checkbox" id="agree_terms" required style="margin-top: 4px; width: 18px; height: 18px;" />
            <label for="agree_terms" style="font-size: 14px; color: #333; cursor: pointer; user-select: none;">
              I have read the agreement and I adhere to the rules and terms stated above. *
            </label>
          </div>

          <div style="margin-bottom: 10px;">
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Signature Upload *</label>
            <div style="border: 2px dashed #ccc; padding: 20px; text-align: center; border-radius: 6px; background: white;">
              <input type="file" required accept="image/*,.pdf" style="display: block; margin: 0 auto;" />
              <p style="font-size: 12px; color: #999; margin-top: 8px;">Upload image of your signature or official document (JPG, PNG, PDF)</p>
            </div>
          </div>
        </div>

        <button type="submit" style="width: 100%; padding: 14px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px; margin-top: 8px;">Submit Request & Sign Agreement</button>
      </form>
    </div>
  </section>

  <!-- Bottom Callout -->
  <section style="background: #f4efea; padding: 60px 20px; text-align: center;">
    <h2 style="font-size: 32px; font-weight: 700; color: #111; margin-bottom: 16px;">Need to speak with a recruiter?</h2>
    <p style="font-size: 15px; color: #444; margin-bottom: 32px;">Call us directly to discuss your hiring needs.</p>
    <a href="tel:9015006000" style="display: inline-block; background: white; color: #0066cc; border: 2px solid #0066cc; padding: 14px 40px; border-radius: 6px; font-weight: 600; text-decoration: none;">Call 901-500-6000</a>
  </section>
`,"/find-a-job":()=>`
  <section style="position: relative; color: white; padding: 100px 0; background: #2c3e50; overflow: hidden; display: flex; align-items: center;">
    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('/electrician_img.png') right center/cover no-repeat; opacity: 0.5;"></div>
    <div class="container" style="position: relative; z-index: 1; padding-left: 5vw;">
      <h1 style="font-size: 52px; font-weight: 700; line-height: 1.2; max-width: 600px;">Explore Plumbing &<br/>Electrical Careers</h1>
    </div>
  </section>

  <section class="container" style="padding: 40px 5vw; max-width: 1400px; margin: 0 auto;">
    <!-- Filters Row -->
    <div style="display: flex; gap: 20px; margin-bottom: 40px; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Trade</label>
        <select style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; appearance: none; background: white url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') right 10px center / 16px no-repeat;">
          <option>Plumbing, Electrical</option>
        </select>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Experience</label>
        <select style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; appearance: none; background: white url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') right 10px center / 16px no-repeat;">
          <option>Entry, Mid, Senior</option>
        </select>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">State</label>
        <select style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; appearance: none; background: white url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') right 10px center / 16px no-repeat;">
          <option>All States, etc.</option>
        </select>
      </div>
      <div style="flex: 1; min-width: 200px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Pay Range</label>
        <select style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; appearance: none; background: white url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>') right 10px center / 16px no-repeat;">
          <option>$50k+, $80k+, $100k+</option>
        </select>
      </div>
    </div>

    <!-- Job Cards Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 60px;">
      <!-- Card 1 -->
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 16px;">Master Plumber</h3>
        <p style="font-size: 14px; color: #555; margin-bottom: 4px;">Austin, TX</p>
        <p style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 24px;">$80k - $100k/yr</p>
        <div style="flex: 1;"></div>
        <button style="width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Apply</button>
      </div>

      <!-- Card 2 -->
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 16px;">Industrial Electrician</h3>
        <p style="font-size: 14px; color: #555; margin-bottom: 4px;">Phoenix, AZ</p>
        <p style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 24px;">$90k - $110k/yr</p>
        <div style="flex: 1;"></div>
        <button style="width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Apply</button>
      </div>

      <!-- Card 3 -->
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 16px;">Journeyman Plumber</h3>
        <p style="font-size: 14px; color: #555; margin-bottom: 4px;">Denver, CO</p>
        <p style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 24px;">$70k - $90k/yr</p>
        <div style="flex: 1;"></div>
        <button style="width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Apply</button>
      </div>

      <!-- Card 4 -->
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 16px;">Commercial Electrical Foreman</h3>
        <p style="font-size: 14px; color: #555; margin-bottom: 4px;">Miami, FL</p>
        <p style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 24px;">$100k - $120k/yr</p>
        <div style="flex: 1;"></div>
        <button style="width: 100%; padding: 12px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer;">Apply</button>
      </div>
    </div>

    <!-- Agreement Form Section -->
    <div style="max-width: 1000px; margin: 0 auto 60px auto; background: #f9f9f9; padding: 40px; border: 1px solid #e0e0e0; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Candidate Agreement</h2>
      <p style="color: #666; margin-bottom: 32px; font-size: 15px;">Please review and sign the agreement to complete your application profile.</p>

      <div style="height: 250px; overflow-y: auto; background: white; border: 1px solid #ddd; padding: 16px; font-size: 13px; color: #444; line-height: 1.5; border-radius: 4px; margin-bottom: 24px;">
        <p><strong>This Agreement is between Wrench & Wire Recruiting (“Agency”) and the undersigned candidate (“Candidate”). By accepting below, Candidate agrees to these terms.</strong></p>
        <p><strong>1. Services.</strong> Agency provides job placement assistance for Candidate in the plumbing and electrical trades. This service is 100% free for the Candidate.</p>
        <p><strong>2. Confidentiality.</strong> Agency will keep Candidate's personal information and job search confidential. Candidate's resume will only be shared with prospective employers after consultation.</p>
        <p><strong>3. Non-Circumvention.</strong> For 12 months after Agency first submits Candidate to an Employer, Candidate will not accept a position (full-time, part-time, or contract) with that Employer without the involvement and knowledge of the Agency.</p>
        <p><strong>4. Truthfulness.</strong> Candidate warrants that all information provided in their resume and application is truthful and accurate to the best of their knowledge.</p>
        <p><strong>5. Entire Agreement & E-Sign.</strong> This is the entire agreement and may be accepted electronically. A checked consent box and submitted form constitute a signed writing.</p>
        <hr/>
        <p style="font-size: 11px; color: #999;">[Note: Employer-specific terms for fees and billing were removed as they apply to the hiring company, not the individual applicant.]</p>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 24px;">
        <input type="checkbox" id="agree_terms_job" required style="margin-top: 4px; width: 18px; height: 18px;" />
        <label for="agree_terms_job" style="font-size: 14px; color: #333; cursor: pointer; user-select: none;">
          I have read the agreement and I adhere to the rules and terms stated above. *
        </label>
      </div>

      <div style="margin-bottom: 30px;">
        <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px; color: #333;">Signature Upload *</label>
        <div style="border: 2px dashed #ccc; padding: 20px; text-align: center; border-radius: 6px; background: white;">
          <input type="file" required accept="image/*,.pdf" style="display: block; margin: 0 auto;" />
          <p style="font-size: 12px; color: #999; margin-top: 8px;">Upload image of your signature (JPG, PNG, PDF)</p>
        </div>
      </div>
      
      <button onclick="alert('Agreement Signed!')" style="width: 100%; padding: 14px; background: #0066cc; color: white; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 16px;">Sign & Save Agreement</button>
    </div>
  </section>

  <!-- Bottom Callout -->
  <section style="background: #f4efea; padding: 60px 20px; text-align: center;">
    <h2 style="font-size: 32px; font-weight: 700; color: #111; margin-bottom: 16px;">Don't see the right fit? Let us find you.</h2>
    <p style="font-size: 15px; color: #444; margin-bottom: 32px;">Submit your resume and we'll match you with future opportunities.</p>
    <a href="#/find-a-job" style="display: inline-block; background: #0066cc; color: white; padding: 14px 40px; border-radius: 6px; font-weight: 600; text-decoration: none;">Submit Resume</a>
  </section>
`};function r(){let t=()=>{let t=window.location.hash.slice(1)||`/`;t.startsWith(`/`)||(t=`/`+t);let r=n[t]||e;document.getElementById(`main-content`).innerHTML=r(),window.scrollTo(0,0)};window.addEventListener(`hashchange`,t),t()}var i=()=>`
<header style="height: 100px; background: white; display: flex; align-items: stretch; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
  <div style="flex: 1; display: flex; align-items: center; padding-left: 5vw;">
    <a href="#/home" style="display: flex; align-items: center;">
      <img src="https://wrenchandwirerecruiting.com/wp-content/uploads/2025/11/DAA4762E-1E16-40E8-951A-3F6E4D6C46DA-removebg-preview-1.png" alt="Wrench & Wire Logo" style="height: 75px; object-fit: contain;" />
    </a>
  </div>
  
  <nav style="display: flex; gap: 24px; align-items: center; font-weight: 600; font-size: 14px; color: #333;">
    <a href="#/home" class="nav-link">Home</a>
    <span style="color: #ccc;">|</span>
    <a href="#/find-a-job" class="nav-link">Find a Job</a>
    <span style="color: #ccc;">|</span>
    <a href="#/about" class="nav-link">About Us</a>
    <span style="color: #ccc;">|</span>
    <a href="#/contact" class="nav-link">Contact</a>
  </nav>

  <div style="flex: 1; display: flex; justify-content: flex-end;">
    <a href="#/request-candidates" style="background: #3a5c76; color: white; display: flex; align-items: center; justify-content: center; padding: 0 40px; font-weight: 600; text-decoration: none; transition: background 0.2s;">
      Request Candidates
    </a>
  </div>
</header>
<style>
  .nav-link { text-decoration: none; color: #555; transition: color 0.2s; position: relative; }
  .nav-link:hover { color: var(--color-primary); }
  .nav-link.active { color: #000; }
  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-primary);
  }
</style>
`,a=()=>`
<footer style="background: white; padding-top: 60px; font-size: 14px; color: #333; position: relative;">
  <div class="container" style="display: flex; justify-content: space-between; max-width: 1000px; margin: 0 auto; padding-bottom: 40px;">
    <!-- Logo Column -->
    <div style="flex: 1;">
      <img src="https://wrenchandwirerecruiting.com/wp-content/uploads/2025/11/DAA4762E-1E16-40E8-951A-3F6E4D6C46DA-removebg-preview-1.png" alt="Wrench & Wire Logo" style="height: 90px; margin-bottom: 16px;" />
      <p style="color: #666; font-size: 12px; margin-top: 8px;">We connect skilled plumbers and electricians</p>
    </div>
    
    <!-- Quick Links Column -->
    <div style="flex: 1; padding-left: 40px;">
      <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 0.5px;">Quick Links</h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
        <li style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">⌂</span> <a href="#/home" style="color: #333; text-decoration: none;">Home</a>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">💼</span> <a href="#/request-candidates" style="color: #333; text-decoration: none;">Request Candidates</a>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">🔍</span> <a href="#/find-a-job" style="color: #333; text-decoration: none;">Find A Job</a>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">ℹ️</span> <a href="#/about" style="color: #333; text-decoration: none;">About Us</a>
        </li>
        <li style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">📞</span> <a href="#/contact" style="color: #333; text-decoration: none;">Contact Us</a>
        </li>
      </ul>
    </div>
    
    <!-- Contact Us Column -->
    <div style="flex: 1; padding-left: 40px;">
      <h4 style="font-size: 13px; font-weight: 800; text-transform: uppercase; margin-bottom: 20px; letter-spacing: 0.5px;">Contact Us</h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; font-size: 13px;">
        <li style="display: flex; gap: 10px; align-items: flex-start; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">🏢</span>
          <span>Wrench & Wire Recruiting</span>
        </li>
        <li style="display: flex; gap: 10px; align-items: flex-start; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">📍</span>
          <span>P.O. Box 172184, Memphis, TN 38187</span>
        </li>
        <li style="display: flex; gap: 10px; align-items: flex-start; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">📞</span>
          <span>901-500-6000</span>
        </li>
        <li style="display: flex; gap: 10px; align-items: flex-start; border-bottom: 1px solid #eee; padding-bottom: 8px;">
          <span style="color: #999;">✉️</span>
          <span>info@wrenchandwirerecruiting.com</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Back to top button -->
  <a href="#" style="position: absolute; right: 40px; bottom: 60px; width: 36px; height: 36px; background: #0066cc; color: white; display: flex; align-items: center; justify-content: center; border-radius: 4px; text-decoration: none; font-weight: bold;">^</a>

  <!-- Bottom Bar -->
  <div style="background: #3a5c76; color: rgba(255,255,255,0.7); text-align: center; padding: 12px 0; font-size: 12px;">
    &copy; 2023 Wrench & Wire Recruiting. All Rights Reserved.
  </div>
</footer>
`,o=()=>{let e=`https://wrenchandwirerecruiting.com/wp-content/uploads/2025/11/DAA4762E-1E16-40E8-951A-3F6E4D6C46DA-removebg-preview-1.png`;return`
<div id="wrench-chat-root" style="position: fixed; bottom: 30px; right: 30px; z-index: 99999; font-family: 'Inter', -apple-system, sans-serif;">
  <!-- Toggle Button -->
  <button id="chat-toggle-btn" style="width: 65px; height: 65px; border-radius: 50%; background: #0b1f33; border: none; cursor: pointer; box-shadow: 0 10px 25px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; padding: 0;">
    <div style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background: #0b1f33; opacity: 0.4; animation: chatPulse 2s infinite; pointer-events: none;"></div>
    <img src="${e}" style="width: 40px; height: 40px; object-fit: contain; position: relative; z-index: 2; filter: brightness(0) invert(1);" />
  </button>

  <!-- Chat Panel -->
  <div id="chat-window-panel" style="display: none; position: absolute; bottom: 80px; right: 0; width: 380px; height: 550px; background: white; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); border: 1px solid #ddd; flex-direction: column; overflow: hidden; transform-origin: bottom right; transition: transform 0.3s ease;">
    <!-- Header -->
    <div style="background: #0b1f33; padding: 20px; color: white; display: flex; align-items: center; gap: 12px;">
      <div style="width: 40px; height: 40px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; padding: 4px; flex-shrink: 0;">
        <img src="${e}" style="width: 30px; height: 30px; object-fit: contain;" />
      </div>
      <div style="flex: 1;">
        <h4 style="margin: 0; font-size: 15px; font-weight: 700;">Wrench & Wire Concierge</h4>
        <div style="display: flex; align-items: center; gap: 5px; margin-top: 2px;">
          <div style="width: 7px; height: 7px; background: #4CAF50; border-radius: 50%;"></div>
          <span style="font-size: 11px; opacity: 0.8;">Active Now</span>
        </div>
      </div>
      <button id="chat-close-btn" style="background: none; border: none; color: white; cursor: pointer; font-size: 24px; line-height: 1; padding: 5px; opacity: 0.7;">&times;</button>
    </div>

    <!-- Message Area -->
    <div id="chat-body" style="flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; background: #fcfcfc;">
      <div style="background: #f0f4f8; padding: 12px 16px; border-radius: 12px 12px 12px 4px; font-size: 14px; color: #333; align-self: flex-start; max-width: 85%;">
        Hello! I'm here to help with pricing, our 60-day guarantee, or any trade recruiting questions.
      </div>
    </div>

    <!-- Suggestions -->
    <div style="padding: 10px; border-top: 1px solid #eee; display: flex; gap: 6px; overflow-x: auto; background: white;">
      <button class="chat-chip" data-val="pricing">Fees/Pricing</button>
      <button class="chat-chip" data-val="guarantee">Guarantee</button>
      <button class="chat-chip" data-val="contact">Contact</button>
    </div>

    <!-- Input Box -->
    <div style="padding: 15px; border-top: 1px solid #eee; display: flex; gap: 10px; background: white; align-items: center;">
      <input id="chat-msg-input" type="text" placeholder="Type your question..." style="flex: 1; border: 1px solid #eee; background: #f8f9fa; padding: 10px 15px; border-radius: 20px; font-size: 14px; outline: none; color: #333;" />
      <button id="chat-send-btn" style="background: #1e90ff; color: white; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </div>
  </div>
</div>

<style>
  @keyframes chatPulse {
    0% { transform: scale(1); opacity: 0.4; }
    70% { transform: scale(1.6); opacity: 0; }
    100% { transform: scale(1); opacity: 0; }
  }
  .chat-chip {
    background: #f0f7ff;
    border: 1px solid #1e90ff;
    color: #1e90ff;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
  }
  .chat-chip:hover { background: #1e90ff; color: white; }
</style>
`},s=()=>{let e=document.getElementById(`chat-toggle-btn`),t=document.getElementById(`chat-window-panel`),n=document.getElementById(`chat-close-btn`),r=document.getElementById(`chat-msg-input`),i=document.getElementById(`chat-send-btn`),a=document.getElementById(`chat-body`),o=document.querySelectorAll(`.chat-chip`);if(!e||!t||!r||!i){console.error(`Chat elements missing!`);return}let s={pricing:`Our flat fees are: Apprentice ($3,500), Journeyman ($6,500), Lead/Master ($8,500), Project Manager ($12,500). Priority search is +$1,500.`,guarantee:`We offer a 60-Day Backup Guarantee. If a hire leaves within 60 days, we'll provide one replacement candidate at no additional fee.`,contact:`Call us at 901-500-6000 or email info@wrenchandwirerecruiting.com. Located in Memphis, TN.`,terms:`Payment terms are Net 7 from the hire's start date. We operate on a contingency (pay-on-hire) basis.`},c=(e,t=!0)=>{let n=document.createElement(`div`);n.style.padding=`10px 14px`,n.style.borderRadius=t?`12px 12px 12px 4px`:`12px 12px 4px 12px`,n.style.fontSize=`14px`,n.style.maxWidth=`85%`,n.style.lineHeight=`1.4`,t?(n.style.background=`#f0f4f8`,n.style.color=`#333`,n.style.alignSelf=`flex-start`):(n.style.background=`#1e90ff`,n.style.color=`white`,n.style.alignSelf=`flex-end`),n.textContent=e,a.appendChild(n),a.scrollTop=a.scrollHeight},l=()=>{let e=r.value.trim();e&&(c(e,!1),r.value=``,setTimeout(()=>{let t=`Wrench & Wire Recruiting specializes in plumbers and electricians. We charge flat fees (starting at $3,500), offer a 60-day replacement guarantee, and you only pay when your hire starts working. How can I help you today?`,n=e.toLowerCase();n.includes(`price`)||n.includes(`fee`)||n.includes(`cost`)||n.includes(`how much`)||n.includes(`pay`)||n.includes(`charge`)?t=s.pricing:n.includes(`guarantee`)||n.includes(`replace`)||n.includes(`backup`)||n.includes(`fire`)||n.includes(`quit`)||n.includes(`leave`)?t=s.guarantee:n.includes(`contact`)||n.includes(`phone`)||n.includes(`address`)||n.includes(`email`)||n.includes(`call`)||n.includes(`where`)||n.includes(`location`)?t=s.contact:n.includes(`term`)||n.includes(`bill`)||n.includes(`invoice`)||n.includes(`when`)?t=s.terms:n.includes(`trade`)||n.includes(`who`)||n.includes(`plumber`)||n.includes(`electrician`)||n.includes(`role`)||n.includes(`job`)?t=`We recruit exclusively for the plumbing and electrical trades, from Apprentices all the way to Project Managers.`:(n.includes(`hello`)||n.includes(`hi `)||n.includes(`hey`)||n===`hi`)&&(t=`Hello! I can answer questions about our flat fees, 60-day guarantee, or the trades we place. What do you need help with?`),c(t,!0)},500))};e.addEventListener(`click`,e=>{e.stopPropagation();let n=t.style.display===`none`;t.style.display=n?`flex`:`none`,n&&r.focus()}),n.addEventListener(`click`,e=>{e.stopPropagation(),t.style.display=`none`}),i.addEventListener(`click`,l),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),l())}),o.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-val`);c(e.textContent,!1),setTimeout(()=>c(s[t],!0),400)})}),r.addEventListener(`click`,e=>e.stopPropagation())};document.querySelector(`#app`).innerHTML=`
  <div id="header-container"></div>
  <main id="main-content"></main>
  <div id="footer-container"></div>
  <div id="chat-widget-container"></div>
`,document.getElementById(`header-container`).innerHTML=i(),document.getElementById(`footer-container`).innerHTML=a(),document.getElementById(`chat-widget-container`).innerHTML=o(),s(),r();