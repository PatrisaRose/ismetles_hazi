class TablazatMegjelenit {
  constructor(CSALADTAGOK, TARTALOM) {
    this.CSALADTAGOK = CSALADTAGOK;
    this.TARTALOM = TARTALOM;
    let Tablazat = this.htmlOsszeallit(CSALADTAGOK);
    this.TARTALOM.html(Tablazat);
  }

  htmlOsszeallit(CSALADTAGOK) {
    let Tablazat = "<table>";
    Tablazat += "<tr>";
    Tablazat += "<th>Családom</th>";
    Tablazat += "</tr>";
    for (let i = 0; i < CSALADTAGOK.length; i++) {
      Tablazat += "<tr>";
      Tablazat += "<td>" + CSALADTAGOK[i] + "</td>";
      Tablazat += "</tr>";
    }
    Tablazat += "</table>";
    return Tablazat;
  }
}

export default TablazatMegjelenit;
