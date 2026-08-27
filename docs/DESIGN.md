## Lazy but Busy DESIGN.md

---
name: Efficient Paradox
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dcdddd'
  on-secondary-container: '#5f6161'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3a0b00'
  on-tertiary-container: '#ef4800'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#3a0b00'
  on-tertiary-fixed-variant: '#852400'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
spacing:
  base: 8px
  gutter: 24px
  margin: 32px
  container-max: 1200px
---

## Brand & Style

The brand personality is a calculated contradiction: high-performance engineering meets a relaxed, self-aware attitude. It targets "productive slackers"—developers and creators who optimize workflows specifically so they can spend more time doing nothing. The UI should evoke a sense of professional reliability through its structure, but trigger a smile through its micro-interactions and "aesthetic laziness."

The design style is a hybrid of **Neo-Brutalism** and **Minimalism**. It uses the raw, high-contrast structural elements of brutalism (thick borders, hard shadows) but executes them with the precision and cleanliness of high-end SaaS platforms. This creates a "premium-raw" aesthetic that feels intentional, humorous, and deeply sophisticated.

## Colors

The palette is strictly monochrome with a single, aggressive "Playful Accent" to break the monotony. 

- **Primary:** Pure Black (#000000) for all structural borders, primary text, and heavy lifting.
- **Secondary:** Off-White/Light Grey (#F0F0F0) for surface backgrounds to reduce eye strain while maintaining high contrast.
- **Accent:** "Lazy Orange" (#FF4D00). This is used sparingly for interactive elements, notifications, or "busy" states. It provides the "playful" spark against the serious grey backdrop.
- **Neutrals:** A range of mid-tone greys are used for secondary information and "muted" states where the UI is "resting."

## Typography

Typography is the primary driver of the "Busy" part of the brand. We use **Space Grotesk** for headlines to provide a technical, slightly quirky, and very bold presence. 

For body text, **Hanken Grotesk** offers a sharp, contemporary readability that feels professional and efficient. 

The "playful/lazy" touch comes from **JetBrains Mono** used for labels and metadata. This monospaced font suggests code and "work-in-progress" vibes, reinforcing the software company's roots. Large display type should use tight letter spacing to feel "compressed" and urgent, contrasting with generous whitespace in the layout.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy that is unapologetically structured. It uses a 12-column grid for desktop with wide 24px gutters.

The "Lazy" aspect is reflected in the margins: we use exaggerated white space (padding) inside containers to let content "breathe" excessively. This creates an airy, premium feel despite the heavy black borders. 

- **Desktop:** 12 columns, 32px outer margins.
- **Tablet:** 8 columns, 24px outer margins.
- **Mobile:** 4 columns, 16px outer margins.

Elements should often align to the "hard edges" of the grid, creating a blocky, architectural silhouette.

## Elevation & Depth

This design system rejects ambient shadows in favor of **Hard Brutalist Shadows**. 

Depth is communicated through "Offset Surfaces." Instead of soft blurs, elevated elements (like cards or buttons) feature a solid black offset shadow (usually 4px or 8px) that does not blur. This creates a "sticker-like" or "3D-blueprint" effect.

When an item is hovered, it should "depress" into the shadow (moving 2px down and right) to give tactile feedback that is both playful and mechanical.

## Shapes

To maintain the "Professional/Architectural" side of the brand, we use **Sharp (0px)** corners for almost all primary containers, buttons, and inputs. 

Sharp corners communicate precision and efficiency. The "Playful" element is introduced not through rounds, but through **asymmetric strokes**. For example, a card might have a 2px border on the top and left, but a 4px border on the bottom and right to simulate depth and character without needing soft curves.

## Components

- **Buttons:** Sharp 2px black borders. Primary buttons use a solid black background with white text. Secondary buttons are transparent with black text. On hover, they shift -4px offset with a solid "Lazy Orange" shadow.
- **Input Fields:** Thick 2px bottom border only (minimalist style) that turns into a full box with a 4px solid shadow when focused. 
- **Cards:** White or Secondary Grey background, 2px black border, and a persistent 8px black hard shadow.
- **Chips/Tags:** Monospaced JetBrains Mono text. Unlike other elements, chips can have a "pill" shape to provide a visual break from the rigid squares, acting as "soft" organizational markers.
- **Checkboxes:** Square, 2px stroke. When checked, they fill with a solid black "X" or "Check" that looks hand-drawn or stamped, adding to the humorous/aesthetic vibe.
- **Lazy Loaders:** Instead of a standard spinner, use a horizontal bar that grows very slowly, then jumps to 100%, mimicking a "lazy but then suddenly busy" workflow.

