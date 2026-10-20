// twind.config.ts
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

export default {
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    extend: {
      colors: {
        /* ===== Base ===== */
        brand: '#2A3440',              // --primary-blue (ChooseCafe / MyCart footer)
        accent: '#E74C3C',             // --accent-red
        ink: '#1F2937',                // --text-dark
        muted: '#061c49',              // --text-grey (ChooseCafe)
        line: '#E5E7EB',               // --border-color

        /* ===== Azules ===== */
        ocean: '#35536B',              // --primary-blue (DeliveryMethod, Profile, ReviewOrder)
        'ocean-dark': '#1F2A42',       // --primary-blue-dark (ReviewOrder)
        'blue-grey': '#51768C',        // --text-blue-grey (ReviewOrder)

        /* ===== Texto oscuro alternativo ===== */
        carbon: '#0e1013',             // --text-dark (MyCart)

        /* ===== Timeline (OrderTracking) ===== */
        'timeline-dark': '#2E3A59',
        'timeline-active': '#6B8CAE',
        'timeline-light': '#C5D3E8',

        /* ===== Coral / Payment (PaymentMethod) ===== */
        coral: '#e05a3a',
        'coral-soft': '#fde8e0',
        link: '#2b6cb0',

        /* ===== Iconos (Profile) ===== */
        icon: '#8198A6',
        'icon-active': '#E65737',

        /* ===== Toggles (Profile) ===== */
        'toggle-on-bg': '#FCE9E4',
        'toggle-on-border': '#F5B8AC',
        'toggle-on-knob': '#E85D4A',
        'toggle-off-bg': '#E3E7EA',
        'toggle-off-border': '#B6C4CE',
        'toggle-off-knob': '#5F7484',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}