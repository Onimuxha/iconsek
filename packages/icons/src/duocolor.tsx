import { createIcon } from "./factory";
import type { IconData } from "./types/icon";

export const iconsDuocolorData: IconData[] = [
  {
    name: "AlignCenterDuo",
    category: "interface",
    keywords: ["align",],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M22 3L2 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path opacity="0.5" d="M22 21L2 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20 12C20 10.1144 20 9.17157 19.4142 8.58579C18.8284 8 17.8856 8 16 8L8 8C6.11438 8 5.17157 8 4.58579 8.58579C4 9.17157 4 10.1144 4 12C4 13.8856 4 14.8284 4.58579 15.4142C5.17157 16 6.11438 16 8 16H16C17.8856 16 18.8284 16 19.4142 15.4142C20 14.8284 20 13.8856 20 12Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Archive Down",
    category: "interface",
    keywords: ["save"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 7L12 16M12 16L15 12.6667M12 16L9 12.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Archive Up",
    category: "interface",
    keywords: ["save"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M12 21L12 12M12 12L15 15.3333M12 12L9 15.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.5" d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "FolderDuo",
    category: "files",
    keywords: ["directory"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M3 10V17C3 20 4 21 7 21H17C20 21 21 20 21 17V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 3H17C20 3 21 4 21 7V10H3V7C3 4 4 3 7 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.43 12L15 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "UserDuo",
    category: "interface",
    keywords: ["person"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <circle opacity="0.5" cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/>
      <path d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "HeartDuo",
    category: "interface",
    keywords: ["love"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5" d="M12 5.50063C16.4998 0.825464 22 4.27416 22 9.1371C22 14 17.9806 16.5914 15.0383 18.9109C14 19.7294 13 20.5 12 20.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "HeartAngleDuo",
    category: "interface",
    keywords: ["love"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path opacity="0.5" d="M12 5.50098L14 7.5004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="currentColor"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "SettingsMinimalisticDuo",
    category: "system",
    keywords: ["config"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "SettingsDuo",
    category: "system",
    keywords: ["config"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5" d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Shield",
    category: "security",
    keywords: ["protect"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M12 2L3 7V12C3 16.55 6.84 20.74 12 22C17.16 20.74 21 16.55 21 12V7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Calendar",
    category: "interface",
    keywords: ["date", "schedule", "time", "event"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M3 10V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V10H3Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M21 10V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V10H21Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M7 3V6M17 3V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Bells",
    category: "interface",
    keywords: ["notification", "alert", "ring", "sound"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M18.7491 9V9C18.7491 5.13401 15.6151 2 11.7491 2C7.88312 2 4.74914 5.13401 4.74914 9V9C4.74914 13.5915 3.40638 14.7277 2.04114 15.8632C0.762845 16.9205 2.02441 18.6757 3.17781 18.6757H20.3204C21.4738 18.6757 22.7354 16.9205 21.4571 15.8632C20.0918 14.7277 18.7491 13.5915 18.7491 9V9Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Lock",
    category: "security",
    keywords: ["secure", "password", "private", "protected"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5 11H19C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Database",
    category: "development",
    keywords: ["data", "storage", "server", "sql"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <ellipse opacity="0.5" cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="1.5"/>
      <path opacity="0.5" d="M3 5V12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12V5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M3 12V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V12" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "CreditCard",
    category: "commerce",
    keywords: ["payment", "money", "bank", "finance"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M2 10H22V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V10Z" stroke="currentColor" stroke-width="1.5"/>
      <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M7 15H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Microphone",
    category: "media",
    keywords: ["audio", "record", "voice", "sound"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <rect opacity="0.5" x="9" y="2" width="6" height="11" rx="3" stroke="currentColor" stroke-width="1.5"/>
      <path d="M5 10V12C5 16.4183 8.58172 20 13 20H11C15.4183 20 19 16.4183 19 12V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12 20V22M8 22H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Laptop",
    category: "development",
    keywords: ["computer", "device", "screen", "technology"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M4 4H20C21.1046 4 22 4.89543 22 6V16H2V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M2 16H22L23 18C23.2652 18.5304 22.8652 19 22.2857 19H1.71429C1.13477 19 0.734765 18.5304 1 18L2 16Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 13H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Lightbulb",
    category: "interface",
    keywords: ["idea", "creative", "innovation", "bright"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M12 2C8.13401 2 5 5.13401 5 9C5 11.3899 6.40929 13.4616 8.5 14.6318V17C8.5 18.3807 9.61929 19.5 11 19.5H13C14.3807 19.5 15.5 18.3807 15.5 17V14.6318C17.5907 13.4616 19 11.3899 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9.5 21.5H14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M10.5 19.5H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Envelope",
    category: "communication",
    keywords: ["email", "message", "mail", "letter"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M2 6L12 13L22 6" stroke="currentColor" stroke-width="1.5"/>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Puzzle",
    category: "interface",
    keywords: ["game", "solve", "piece", "connect"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M3 8.5V15.5C3 16.6046 3.89543 17.5 5 17.5H8.5C9.32843 17.5 10 16.8284 10 16V13.5C10 12.6716 10.6716 12 11.5 12C12.3284 12 13 12.6716 13 13.5V16C13 16.8284 13.6716 17.5 14.5 17.5H19C20.1046 17.5 21 16.6046 21 15.5V8.5C21 7.39543 20.1046 6.5 19 6.5H14.5C13.6716 6.5 13 7.17157 13 8V10.5C13 11.3284 12.3284 12 11.5 12C10.6716 12 10 11.3284 10 10.5V8C10 7.17157 9.32843 6.5 8.5 6.5H5C3.89543 6.5 3 7.39543 3 8.5Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 3V5C10 5.55228 10.4477 6 11 6C11.5523 6 12 5.55228 12 5V3C12 2.44772 11.5523 2 11 2C10.4477 2 10 2.44772 10 3Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Gift",
    category: "interface",
    keywords: ["present", "surprise", "box", "celebration"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M19.9707 10H3.9707V18C3.9707 21 4.9707 22 7.9707 22H15.9707C18.9707 22 19.9707 21 19.9707 18V10Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M11.6408 4.99994H6.12076C5.78076 4.62994 5.79076 4.05994 6.15076 3.69994L7.57076 2.27994C7.94076 1.90994 8.55076 1.90994 8.92076 2.27994L11.6408 4.99994Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M17.8696 4.99994H12.3496L15.0696 2.27994C15.4396 1.90994 16.0496 1.90994 16.4196 2.27994L17.8396 3.69994C18.1996 4.05994 18.2096 4.62994 17.8696 4.99994Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.4" d="M8.93945 10V15.14C8.93945 15.94 9.81945 16.41 10.4895 15.98L11.4295 15.36C11.7695 15.14 12.1995 15.14 12.5295 15.36L13.4195 15.96C14.0795 16.4 14.9695 15.93 14.9695 15.13V10H8.93945Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Trophy",
    category: "interface",
    keywords: ["award", "winner", "achievement", "prize"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <path opacity="0.5" d="M17 10C18.6569 10 20 8.65685 20 7V5H17V10ZM7 10C5.34315 10 4 8.65685 4 7V5H7V10Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M17 5H7V9C7 12.3137 9.68629 15 13 15H11C14.3137 15 17 12.3137 17 9V5Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 15V18M8 21H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Target",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
      <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
      <circle opacity="0.7" cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Backpack",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M3 10.9112C3 10.8182 3 10.7717 3.00057 10.7303C3.0385 7.98021 4.94139 5.60803 7.61778 4.97443C7.65803 4.9649 7.70344 4.95481 7.79425 4.93463C7.87787 4.91605 7.91968 4.90675 7.96109 4.89775C10.6226 4.31875 13.3774 4.31875 16.0389 4.89775C16.0803 4.90675 16.1221 4.91605 16.2057 4.93463C16.2966 4.95481 16.342 4.9649 16.3822 4.97443C19.0586 5.60803 20.9615 7.98021 20.9994 10.7303C21 10.7717 21 10.8182 21 10.9112V16.3752C21 18.4931 19.529 20.3269 17.4615 20.7864C13.8644 21.5857 10.1356 21.5857 6.53853 20.7864C4.47101 20.3269 3 18.4931 3 16.3752V10.9112Z" stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5" d="M17.5 15.5V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5" d="M15.9585 4.5C15.7205 3.08114 14.4865 2 13 2H11C9.51353 2 8.27954 3.08114 8.0415 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M3 14C8.72979 16.5466 15.2702 16.5466 21 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5" d="M10 13H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "ArrowToDownRight",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M7 14.5L12 19.5L17 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.5" d="M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 13 4.5 17 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "ArrowToDownLeft",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M17 14.5L12 19.5L7 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.5" d="M12 19.5C12 19.5 12 11.1667 12 9.5C12 7.83333 11 4.5 7 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "ArrowToTopLeft",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M7 9.5L12 4.5L17 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.5" d="M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 13 19.5 17 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "ArrowToTopRight",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M17 9.5L12 4.5L7 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path opacity="0.5" d="M12 4.5C12 4.5 12 12.8333 12 14.5C12 16.1667 11 19.5 7 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Pulse",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M5 14.9999H6.39445C7.1804 14.9999 7.57337 14.9999 7.90501 15.1774C8.23665 15.3549 8.45463 15.6819 8.8906 16.3358L9.05039 16.5755C9.47306 17.2095 9.68439 17.5265 9.97087 17.5095C10.2573 17.4925 10.4297 17.1527 10.7743 16.4731L12.7404 12.5964C13.0987 11.8898 13.2779 11.5365 13.5711 11.5247C13.8642 11.5129 14.0711 11.8508 14.485 12.5264L15.1222 13.5668C15.5512 14.2671 15.7656 14.6172 16.1072 14.8086C16.4487 14.9999 16.8593 14.9999 17.6805 14.9999H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "SadSquare",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg  viewBox="0 0 24 24" fill="none">
    <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
    <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor"/>
    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "CompassBig",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none" >
    <path opacity="0.5" d="M14.7898 18.9746C8.49749 21.4915 5.35132 22.75 3.55428 21.5288C3.1282 21.2393 2.76071 20.8718 2.47117 20.4457C1.25001 18.6487 2.50848 15.5025 5.02542 9.21017C5.56228 7.86802 5.8307 7.19695 6.29238 6.67048C6.41002 6.53633 6.53633 6.41002 6.67048 6.29238C7.19695 5.8307 7.86802 5.56228 9.21017 5.02542C15.5025 2.50848 18.6487 1.25001 20.4457 2.47117C20.8718 2.7607 21.2393 3.1282 21.5288 3.55428C22.75 5.35132 21.4915 8.49749 18.9746 14.7898C18.4377 16.132 18.1693 16.8031 17.7076 17.3295C17.59 17.4637 17.4637 17.59 17.3295 17.7076C16.8031 18.1693 16.132 18.4377 14.7898 18.9746Z" stroke="currentColor" stroke-width="1.5"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "CompassSquare",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <path d="M13.024 14.5601C10.7142 15.484 9.5593 15.946 8.89964 15.4977C8.74324 15.3914 8.60834 15.2565 8.50206 15.1001C8.0538 14.4405 8.51575 13.2856 9.43967 10.9758C9.63673 10.4831 9.73527 10.2368 9.90474 10.0435C9.94792 9.99429 9.99429 9.94792 10.0435 9.90474C10.2368 9.73527 10.4831 9.63673 10.9758 9.43966C13.2856 8.51575 14.4405 8.0538 15.1001 8.50206C15.2565 8.60834 15.3914 8.74324 15.4977 8.89964C15.946 9.5593 15.484 10.7142 14.5601 13.024C14.363 13.5166 14.2645 13.763 14.095 13.9562C14.0518 14.0055 14.0055 14.0518 13.9562 14.095C13.763 14.2645 13.5166 14.363 13.024 14.5601Z" stroke="currentColor" stroke-width="1.5"/>
    <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
  {
    name: "Compass",
    category: "interface",
    keywords: ["goal", "aim", "objective", "focus"],
    svgContent: `<svg viewBox="0 0 24 24" fill="none">
    <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
    <path d="M13.024 14.5601C10.7142 15.484 9.5593 15.946 8.89964 15.4977C8.74324 15.3914 8.60834 15.2565 8.50206 15.1001C8.0538 14.4405 8.51575 13.2856 9.43967 10.9758C9.63673 10.4831 9.73527 10.2368 9.90474 10.0435C9.94792 9.99429 9.99429 9.94792 10.0435 9.90474C10.2368 9.73527 10.4831 9.63673 10.9758 9.43966C13.2856 8.51575 14.4405 8.0538 15.1001 8.50206C15.2565 8.60834 15.3914 8.74324 15.4977 8.89964C15.946 9.5593 15.484 10.7142 14.5601 13.024C14.363 13.5166 14.2645 13.763 14.095 13.9562C14.0518 14.0055 14.0055 14.0518 13.9562 14.095C13.763 14.2645 13.5166 14.363 13.024 14.5601Z" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
    weights: ["all", "duocolor"],
  },
];

export const HomeDuocolor = createIcon(
  "HomeDuocolor",
  iconsDuocolorData[0].svgContent,
);
export const StarDuocolor = createIcon(
  "StarDuocolor",
  iconsDuocolorData[1].svgContent,
);
