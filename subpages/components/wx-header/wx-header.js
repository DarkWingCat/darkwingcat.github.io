export class WxHeader extends HTMLElement {
  async connectedCallback() {

    const htmlUrl = new URL("./wx-header.html", import.meta.url);
    const cssUrl  = new URL("./wx-header.css", import.meta.url);

    const html = await fetch(htmlUrl).then(r => r.text());
    const css  = await fetch(cssUrl).then(r => r.text());

    this.innerHTML = `
      <style>${css}</style>
      ${html}
    `;
  }
}

customElements.define("wx-header", WxHeader);