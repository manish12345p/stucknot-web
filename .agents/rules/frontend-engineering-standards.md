# PROJECT ENGINEERING RULES — MANDATORY

From this point onward, work on this project as a **senior/principal-level frontend engineer**, not as a beginner or a code generator.

The project uses ONLY:
* HTML5
* CSS3
* Vanilla JavaScript

No React, Vue, Angular, Tailwind, Bootstrap, jQuery, or unnecessary frontend libraries.

These engineering principles apply to **all future work in this project**.

---

# 1. CLEAN ARCHITECTURE
The project must follow **Clean Architecture principles as much as reasonably possible within a vanilla HTML/CSS/JS application**. Keep responsibilities separated.

### HTML
Responsible for: Semantic structure, Page composition, Content structure, Accessibility, Connecting UI elements with existing classes/IDs/data attributes. HTML should NOT contain unnecessary business logic.

### CSS
Responsible for: Visual design, Layout, Responsive behavior, Animations, Transitions, Themes, Components, Design tokens.

### JavaScript
Responsible for: Behavior, Interactions, State, Event handling, Data manipulation, UI updates, Application logic.
Do not mix responsibilities unnecessarily.

---

# 2. SOLID PRINCIPLES
Apply SOLID principles to JavaScript wherever applicable.
* **Single Responsibility Principle**: Each module/function should have one clear responsibility. Avoid giant JavaScript files or functions that handle everything.
* **Open/Closed Principle**: Structure reusable functionality so new behavior can be added without constantly modifying existing core logic.
* **Liskov Substitution Principle**: When using abstractions or interchangeable components, implementations should remain compatible with the expected behavior.
* **Interface Segregation Principle**: Do not create unnecessarily large interfaces/configuration objects when smaller focused structures are sufficient.
* **Dependency Inversion Principle**: Keep core/application logic independent from specific DOM implementations wherever practical.

---

# 3. NO HARD-CODING
This is a VERY IMPORTANT project rule. Do NOT hardcode values unnecessarily throughout HTML and JavaScript. The application should be **configuration/theme/data driven wherever practical**.
Avoid scattering values such as colors, typography values, spacing, border radius, shadows, animation values, theme values, course categories, etc. If a value is part of the visual system, it should come from the existing theme/design system. If a value is repeated application data, centralize it rather than duplicating it.

---

# 4. THEME-DRIVEN DESIGN
The website must be controlled by the existing design/theme system. Do not randomly introduce new colors, gradients, shadows, typography, spacing, or border-radius.
First inspect the existing CSS. Understand its CSS variables, design tokens, color palette, typography, spacing, component system, responsive system, animation system, and glassmorphism system. Then reuse those existing systems.
**One design system → entire website**

---

# 5. EXISTING CSS AND JS ARE LOCKED
The existing CSS and JavaScript are already part of the project. Treat them as carefully designed assets. Before changing anything: inspect, understand, identify reusable components, dependencies, existing functionality, and expected HTML structure. Never modify them casually. Reuse existing code; do not recreate.

---

# 6. REUSABILITY
Build reusable structures wherever practical (Navigation, cards, buttons, badges, modals, etc.). Do not duplicate the same structure unnecessarily across pages.

---

# 7. DATA-DRIVEN UI
Where repeated content exists, prefer a data-driven approach. Instead of manually creating dozens of almost-identical course structures with inconsistent markup, use a consistent component structure and existing JavaScript/data mechanisms.

---

# 8. NO QUICK FIXES
Do not solve problems using hacks. Avoid excessive inline styles, random !important, duplicate classes, copy-pasted logic, arbitrary magic numbers, fragile selectors, etc. Implement the cleanest maintainable solution.

---

# 9. SENIOR ENGINEER BEHAVIOR
Before implementing any feature:
1. Understand the existing architecture.
2. Identify reusable components and functionality.
3. Consider how the change affects the rest of the application.
4. Implement the smallest clean solution.
5. Check for regressions.
6. Refactor only when necessary and only without violating the locked-file rules.

---

# 10. ACCESSIBILITY
Treat accessibility as part of the architecture, not an afterthought. Use semantic HTML, proper headings, labels, keyboard-accessible controls, ARIA attributes, meaningful alt text, sufficient contrast, focus states, and accessible forms.

---

# 11. PERFORMANCE
Build with performance in mind. Avoid unnecessary DOM operations, excessive event listeners, heavy animations, duplicate resources, and unnecessary dependencies.

---

# 12. RESPONSIVE ARCHITECTURE
The website must work across all devices (Mobile, Tablet, Laptop, Desktop, Large screens). Use the existing responsive design system. Do not create separate completely different implementations unless genuinely necessary.

---

# 13. GLASSMORPHISM
Use existing blur, transparency, borders, shadows, gradients, glass surfaces, and glow effects where available. Do NOT turn every element into glass. Glass should create **depth + hierarchy + atmosphere**, not visual noise.

---

# 14. EMOTIONAL DESIGN
The user experience should communicate curiosity, growth, achievement, confidence, possibility, belonging, career progression, and human connection. Visual storytelling should support the product's purpose.

---

# 15. HERO SECTION
The existing hero animation is important. Evaluate it and improve the implementation using the existing system rather than adding random animation.

---

# 16. CODE QUALITY
Every implementation should be readable, maintainable, modular, reusable, testable where practical, consistent, and self-explanatory. Prefer clear names over clever names. Avoid unnecessary abstraction.

---

# 17. BEFORE EVERY MAJOR CHANGE
Internally answer: What already exists? Can I reuse it? What is the cleanest architecture? Does this violate SOLID? Am I introducing duplication? Am I hardcoding? Does this belong in HTML, CSS, or JS? Could this break another page? Does this maintain the existing theme? Is this production-quality?

---

# 18. FINAL QUALITY GATE
Verify Architecture, Theme, Code, UX, and Compatibility before considering any feature complete. Build for maintainability, not just immediate visual output.

---

# 19. GLOBAL DESIGN CONSISTENCY — ALL PAGES MUST FEEL LIKE ONE PRODUCT
Every page of the website must look and feel like it belongs to the same product, same design system, and same brand. Do NOT design each page independently. Maintain page-to-page continuity, component consistency, spacing consistency, visual rhythm, and responsive consistency.
