import { CSALADTAGOK } from "./adatok.js";
import TablazatMegjelenit from "./megjelenit.js";

$(function () {
  const TARTALOM = $(".tartalom");
  new TablazatMegjelenit(CSALADTAGOK, TARTALOM);
})