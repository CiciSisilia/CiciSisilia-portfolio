import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

/* ── Mini SVG icons ── */

const icons = {
  html: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.49-5.625H5.745l1.264 14.426 5.011 1.396 4.996-1.396.688-7.89H9.528l.235 2.685h5.882l-.379 4.246L12 15.354v.001l-.014.004-3.274-.917-.212-2.381H6.18l.416 4.667L12 18.453l5.404-1.725L18.34 5.89H7.51z"/></svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12L18.59 4.414z"/></svg>
  ),
  js: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
  ),
  ts: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.06-.84.18C4.71 2.23 4.386 4.053 4.86 6.618c-2.56.756-4.36 1.977-4.36 3.386 0 1.41 1.8 2.63 4.36 3.386-.474 2.565-.149 4.388 1.403 5.283.248.12.53.18.84.18 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .592-.06.84-.18 1.553-.896 1.877-2.718 1.404-5.283 2.56-.756 4.36-1.977 4.36-3.386 0-1.41-1.8-2.63-4.36-3.386.474-2.565.149-4.388-1.403-5.283a1.714 1.714 0 00-.84-.18zM12 15.45c-1.904 0-3.45-1.545-3.45-3.45S10.096 8.55 12 8.55s3.45 1.545 3.45 3.45-1.546 3.45-3.45 3.45z"/></svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727zM16.8 7.2h-1.6v9.6h1.6z"/></svg>
  ),
  php: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 01-.305.847c-.143.255-.33.49-.56.7zm4.89.637h-1.367l.528-2.716c.08-.413.04-.706-.12-.879-.159-.172-.488-.26-.984-.26H10.6l-.704 3.617H8.52l1.23-6.326h1.377l-.327 1.681h1.218c.784 0 1.336.163 1.656.487.32.324.398.834.233 1.53zm5.791-2.19c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164h-1.18l-.327 1.681h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.418.477 1.002.331 1.752a2.836 2.836 0 01-.305.847c-.143.255-.33.49-.56.7zm-.46-1.084c.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049z"/></svg>
  ),
  laravel: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M23.642 5.43a.364.364 0 01.014.1v5.149a.339.339 0 01-.174.295l-4.323 2.49v4.934a.339.339 0 01-.174.295l-9.022 5.198a.372.372 0 01-.081.035.378.378 0 01-.186 0 .343.343 0 01-.081-.035L.573 18.694a.339.339 0 01-.174-.295V3.075a.344.344 0 01.014-.1.347.347 0 01.039-.09.31.31 0 01.028-.042.314.314 0 01.062-.062l.028-.02a.329.329 0 01.09-.038l4.498-2.593a.339.339 0 01.339 0l4.498 2.593a.337.337 0 01.09.038l.028.02a.283.283 0 01.062.062.318.318 0 01.028.042.351.351 0 01.039.09c.005.016.012.033.014.05.003.018.014.067.014.1v9.652l3.76-2.164V5.529a.344.344 0 01.013-.1.36.36 0 01.04-.09.346.346 0 01.027-.042c.007-.01.039-.045.063-.062l.027-.02a.341.341 0 01.09-.038l4.498-2.594a.339.339 0 01.339 0l4.498 2.594a.326.326 0 01.09.038l.028.02a.283.283 0 01.062.062.335.335 0 01.027.042.357.357 0 01.04.09zM23.14 10.476V5.928l-1.58.91-2.18 1.255v4.548zm-4.322 7.425V13.35l-2.145 1.228-6.502 3.721v4.584zM1.037 3.473v14.93l8.46 4.874v-4.585l-4.421-2.498-.003-.003-.004-.002a.329.329 0 01-.089-.038l-.027-.02a.304.304 0 01-.062-.062.299.299 0 01-.028-.041.36.36 0 01-.039-.092.33.33 0 01-.014-.098V6.076L2.618 4.82l-1.58-.91zm3.935-2.6L1.614 3.07l3.357 1.935 3.358-1.935zm2.08 14.793l2.179-1.255V3.473l-1.58.91-2.18 1.254v10.937zM18.476 3.27l-3.358 1.935L18.476 7.14l3.358-1.935zM17.913 7.841l-2.18-1.255-1.58-.91v4.548l2.18 1.254 1.58.91zm-8.835 11.08l5.642-3.228 2.812-1.609-3.354-1.932-4.326 2.491-3.138 1.809z"/></svg>
  ),
  mysql: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.063h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.468-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.822.616 1.42.616.26 0 .506-.044.735-.133l1.297.66.336-.477h.003zm-2.031-.824c-.596 0-.894-.656-.894-1.97 0-1.322.295-1.984.888-1.984.588 0 .882.66.882 1.98 0 1.32-.293 1.974-.876 1.974zm-2.143-3.758c0 .664-.234 1.14-.7 1.428-.335.207-.78.31-1.335.31h-.336v2.228h-.885v-5.53h1.26c.6 0 1.05.12 1.35.362.334.27.5.66.5 1.17l.002.032h.144zm-.992.025c0-.506-.273-.76-.82-.76h-.27v1.57h.218c.294 0 .513-.06.654-.182.13-.12.218-.32.218-.628z"/></svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.4-2.005l-2.48-2.48v6.528a1.84 1.84 0 11-1.5-.06V9.753a1.838 1.838 0 01-1-2.452l-2.72-2.72-7.18 7.193a1.55 1.55 0 000 2.188l10.48 10.477a1.55 1.55 0 002.186 0l10.44-10.42a1.55 1.55 0 00-.003-2.19z"/></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 00-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
  ),
  msoffice: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M22 2L11.21 4.5v15L22 22V2zm-12.79 3.1L2 7v10l7.21 1.9V5.1z"/></svg>
  ),
  msfabric: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M11.4 2.4L2.4 7.6v8.8l9 5.2 9-5.2V7.6l-9-5.2zM4.4 8.7l7-4 7 4v7.3l-7 4-7-4V8.7z"/></svg>
  ),
  canva: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9v-2h9v2zm0-4h-9V9h9v3z"/></svg>
  ),
  coreldraw: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L4.5 7 12 4.5 19.5 7 12 9.5zm0 12.5L2 17v-6l10 5 10-5v6l-10 5z"/></svg>
  ),
  tableau: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M11.37 0v2.73h1.26V0h-1.26zm0 21.27V24h1.26v-2.73h-1.26zm-9.1 0v-1.26H0v1.26h2.27zm19.46 0v-1.26H24v1.26h-2.27zm-14.8-4.73v-1.27H4.55v1.27h2.38zm10.14 0v-1.27h-2.38v1.27h2.38zm-5.07-5.07V6.09h-1.26v5.38H5.45v1.26h5.38v5.38h1.26v-5.38h5.38v-1.26h-5.38zm-7.46-5.07V5.13H2.27v1.27h2.27zm14.92 0V5.13h-2.27v1.27h2.27zM2.27 12.73v-1.26H0v1.26h2.27zm21.73 0v-1.26h-2.27v1.26H24z"/></svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="2" y="2" width="6" height="5" rx="1"/><rect x="16" y="2" width="6" height="5" rx="1"/><rect x="9" y="17" width="6" height="5" rx="1"/><path d="M5 7v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"/><path d="M12 13v4"/></svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  customerService: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
  ),
  telemarketing: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  pos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/><path d="M18 8h.01"/><path d="M6 12h.01"/><path d="M10 12h.01"/><path d="M14 12h.01"/><path d="M18 12h.01"/><path d="M6 16h12"/></svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  language: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
};

const CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development & Database",
    skills: [
      { name: "PHP", icon: icons.php, color: "#777BB4" },
      { name: "Laravel", icon: icons.laravel, color: "#FF2D20" },
      { name: "MySQL", icon: icons.mysql, color: "#4479A1" },
      { name: "Next.js", icon: icons.nextjs, color: "#ffffff" },
      { name: "React", icon: icons.react, color: "#61DAFB" },
      { name: "TypeScript", icon: icons.ts, color: "#3178C6" },
      { name: "JavaScript", icon: icons.js, color: "#F7DF1E" },
      { name: "HTML5 & CSS3", icon: icons.html, color: "#E34F26" },
      { name: "Tailwind CSS", icon: icons.tailwind, color: "#38BDF8" },
    ],
  },
  {
    title: "Data Administration & Office Productivity",
    skills: [
      { name: "Microsoft Excel", icon: icons.msoffice, color: "#107C41" },
      { name: "MS Office Suite", icon: icons.msoffice, color: "#D83B01" },
      { name: "Validasi Database", icon: icons.mysql, color: "#0078D4" },
      { name: "Data Entry", icon: icons.msoffice, color: "#2B579A" },
      { name: "Dokumentasi Laporan", icon: icons.msoffice, color: "#F25022" },
      { name: "Pengarsipan Data", icon: icons.msoffice, color: "#FFB900" },
    ],
  },
  {
    title: "Customer Service & Digital Marketing",
    skills: [
      { name: "Customer Service", icon: icons.customerService, color: "#F472B6" },
      { name: "Telemarketing", icon: icons.telemarketing, color: "#38BDF8" },
      { name: "WhatsApp Business", icon: icons.telemarketing, color: "#25D366" },
      { name: "Point of Sale (POS)", icon: icons.pos, color: "#F59E0B" },
      { name: "Digital Ads Property", icon: icons.canva, color: "#A78BFA" },
      { name: "Lead Segmentation", icon: icons.users, color: "#34D399" },
    ],
  },
  {
    title: "Networking & IT Support",
    skills: [
      { name: "Basic Networking", icon: icons.network, color: "#60A5FA" },
      { name: "Network Troubleshooting", icon: icons.support, color: "#EF4444" },
      { name: "Kabel LAN & Fiber Optik", icon: icons.network, color: "#10B981" },
      { name: "Alat Tes Jaringan", icon: icons.support, color: "#F97316" },
      { name: "IT Hardware Support", icon: icons.vscode, color: "#818CF8" },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", icon: icons.git, color: "#F05032" },
      { name: "VS Code", icon: icons.vscode, color: "#007ACC" },
      { name: "Figma", icon: icons.figma, color: "#F24E1E" },
      { name: "Tableau Public", icon: icons.tableau, color: "#E97627" },
      { name: "Microsoft Fabric", icon: icons.msfabric, color: "#0078D4" },
      { name: "Canva & CorelDRAW", icon: icons.canva, color: "#00C4CC" },
    ],
  },
  {
    title: "Soft Skills & Languages",
    skills: [
      { name: "Team Collaboration", icon: icons.users, color: "#4CAF50" },
      { name: "Problem Solving", icon: icons.support, color: "#F59E0B" },
      { name: "Ketelitian & Detail", icon: icons.pos, color: "#EC4899" },
      { name: "Cepat Beradaptasi", icon: icons.customerService, color: "#8B5CF6" },
      { name: "Bahasa Indonesia (Native)", icon: icons.language, color: "#EF4444" },
      { name: "English (TOEFL 553)", icon: icons.language, color: "#3B82F6" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Background glows */}
      <div className="animate-pulse-glow absolute left-[-150px] top-1/4 h-[350px] w-[350px] rounded-full bg-[var(--accent)]/10 blur-[160px]" />
      <div className="animate-pulse-glow absolute right-[-150px] bottom-1/4 h-[350px] w-[350px] rounded-full bg-[var(--sakura-300)]/10 blur-[160px]" />

      <Container>
        <SectionTitle
          title="Skills & Competencies"
          subtitle="Keahlian teknis, administratif, operasional, dan interpersonal yang saya miliki."
        />

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-[var(--sakura-300)]/15 hover:bg-[var(--surface)]/60"
              data-aos="fade-up"
              data-aos-delay={ci * 100}
            >
              <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-white sm:text-lg">
                <span className="h-2 w-2 rounded-full bg-[var(--sakura-300)] shadow-sm shadow-[var(--sakura-300)]" />
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sakura-300)]/20 hover:shadow-lg hover:shadow-[var(--sakura-300)]/5"
                  >
                    <div
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium leading-tight text-[var(--text-secondary)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
