window.RufflePlayer = {
  config: {
    publicPath: "/ruffle/",
    autoplay: "on",
    splashScreen: false,
    wmode: "opaque",
    letterbox: "off",
  }
};

export class WxSwf extends HTMLElement {

  static get observedAttributes() {
    return ["game"];
  }

  constructor() {
    super();
  }

  async connectedCallback() {
    const htmlUrl = new URL("./wx-swf.html", import.meta.url);
    const cssUrl = new URL("./wx-swf.css", import.meta.url);

    const html = await fetch(htmlUrl).then(r => r.text());
    const css = await fetch(cssUrl).then(r => r.text());

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;

    this.updateEmbed();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "game" && oldValue !== newValue) {
      this.updateEmbed();
    }
  }

  updateEmbed() {
    const embed = this.querySelector("#wx-embed");
    if (!embed) return;

    const gameName = this.getAttribute("game") || "default";
    const url = `/assets/swf/${gameName}.swf`;

    embed.setAttribute("src", url);
  }
}

customElements.define("wx-swf", WxSwf);