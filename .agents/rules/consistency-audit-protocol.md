# PROJECT-WIDE CONSISTENCY AUDIT PROTOCOL

When instructed to perform a consistency audit, or before finalizing major feature development, use this protocol to systematically inspect, compare, identify, and fix inconsistencies across the entire project.

## PRIMARY OBJECTIVE
The entire website must look like it was designed and developed by **one senior frontend team using one design system.**
Identify and fix issues such as: wrong themes, different padding/spacing, inconsistent footers/headers, varying card styling/border-radius/typography/colors/gradients/glassmorphism, and inconsistent responsive behavior.

## STEP 1 — INSPECT THE EXISTING DESIGN SYSTEM
Identify the source of truth from the existing CSS for:
* **Theme**: Colors, gradients, borders, shadows, glassmorphism.
* **Typography**: Font family, headings, body, labels, weights, line heights.
* **Layout**: Container/section widths, padding, grids, flex layouts, gaps.
* **Components**: Header, footer, buttons, cards, forms, badges, modals, etc.
* **Responsive**: Breakpoints and layout shifts.
Do NOT invent values when the design system already defines them.

## STEP 2 — CREATE A CONSISTENCY MATRIX
Internally compare every page across these elements: Theme, Header, Footer, Typography, Buttons, Cards, Spacing, Glassmorphism, and Responsive behavior.

## STEP 3 — HEADER & FOOTER CONSISTENCY
Headers and footers are GLOBAL components. They should not be independently redesigned per page. Ensure identical structure, styling, spacing, and responsive behavior unless a page genuinely requires a specific state.

## STEP 4 — PADDING AND SPACING AUDIT
Compare padding and spacing across all sections, containers, cards, grids, headings, and CTAs. Do not randomly change padding page-by-page. Use the established spacing system consistently.

## STEP 5 — THEME & COMPONENT AUDIT
* **Theme**: Look for wrong backgrounds, text colors, accent colors, gradients, and glass effects.
* **Components**: Identify duplicated versions of the same component (e.g., multiple button styles). Standardize using the established design system.

## STEP 6 — GLASSMORPHISM AUDIT
Ensure consistent blur, transparency, borders, shadows, and surface opacity. Glass should be intentional, not random.

## STEP 7 — RESPONSIVE & HIERARCHY AUDIT
Check all pages at Mobile, Tablet, Laptop, Desktop, and Large Desktop. Ensure consistent heading scale, section hierarchy, CTA hierarchy, and visual density.

## CRITICAL FILE RULES
* **CSS is LOCKED**: DO NOT modify existing CSS.
* **JavaScript is LOCKED**: DO NOT modify existing JavaScript.
* **Correction Layer**: Fix inconsistencies via HTML structure, correct component reuse, and correct CSS class usage.

## FIXING STRATEGY
1. Identify the correct existing implementation.
2. Reuse the correct existing structure/class.
3. Remove unnecessary duplication from HTML.
4. Verify fixes do not break other pages.
5. Fix the ROOT CAUSE rather than applying visual band-aids. Preserve what works.

## DELIVERABLES FOR AUDIT COMPLETION
Provide a summary including:
1. Inconsistencies found.
2. What was fixed.
3. Affected pages.
4. Standardized global components.
5. Remaining issues.
6. Confirmation that CSS and JS were not modified.
