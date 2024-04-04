import * as jsdom from "jsdom";

if(process.argv.length == 2) {
  console.error(`
    usage: node index.js <número do ponto>
    `)
  process.exit(1);
}
var ponto = process.argv[2];

var url = new URL("https://www.rmtcgoiania.com.br");
url.pathname = "index.php";
url.searchParams.append("option", "com_rmtclinhas");
url.searchParams.append("view", "pedhorarios");
url.searchParams.append("view", "pedhorarios");
url.searchParams.append("format", "raw");
url.searchParams.append("ponto", ponto);

fetch(url, {
  referrer: "https://www.rmtcgoiania.com.br",
})
  .then((res) => res.text())
  .then((html) => {
    const dom = new jsdom.JSDOM(html);
    const horarios = dom.window.document.querySelector("table.horariosRmtc");

    const linhas = horarios.querySelectorAll(
      'tr[bgcolor="#f7f7f7"], tr[bgcolor="#ffffff"]'
    );
    let v = [];
    for (const linha of linhas) {
      const colunas = linha.querySelectorAll("td");
      let a = [];
      for (const col of colunas) {
        a.push(col.innerHTML.replace(/<\/?strong>/g, ""));
      }
      v.push({
        linha: parseInt(a[0]),
        destino: a[1],
        proximo: parseInt(a[2]),
        seguinte: a[3] === "---" ? undefined : parseInt(a[3]),
      });
    }
    v = v.sort((a, b) => a.proximo - b.proximo);
    console.table(v);
  })
  .catch(() => console.error("Não foi possível conectar ao host"));
