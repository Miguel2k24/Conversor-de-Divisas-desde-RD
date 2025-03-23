const PESO = document.querySelector("#peso");
PESO.addEventListener("keyup", calcularPeso);
const DIVISA = document.querySelector("#divisa");
const SELECT = document.querySelector("select");
const BTN = document.querySelector("#donar");
const DONACION = document.querySelector("#donacion");
const MENSAJE = document.querySelector(".caja2");
const NODONADO = document.querySelector(".NoDonado");
const DONADO = document.querySelector(".donado");

SELECT.insertAdjacentHTML("beforeend", `
    <option value="0.016">Dólares USA</option>
    <option value="0.012">Libras esterlinas</option>
    <option value="16.81">Pesos argentinos</option>
    <option value="65.79">Pesos colombianos</option>
    <option value="0.32">Pesos mexicanos</option>
`);

SELECT.addEventListener("click", cambio);

function cambio(){
    document.querySelector("#cambio").innerHTML = `1 DOP peso es ${SELECT.value} ${SELECT.options[SELECT.selectedIndex].text}`;
    if(PESO.value === ""){
        DIVISA.value = "";
    }else{
        calcularPeso();
    }
}

function calcularPeso(){
    let divisa = PESO.value * SELECT.value;
    DIVISA.value = divisa.toFixed(2);
    DONACION.value = PESO.value * 0.05;
    BTN.disabled = false;
}

BTN.addEventListener("click", ()=>{
    PESO.value = "";
    DIVISA.value = "";
    donacion();

})

function donacion(){
    if(DONACION.value === ""){
        MENSAJE.insertAdjacentHTML("afterend", `<span class="NoDonado">No se ha donado.</span>`)
        DONACION.value = "";
        BTN.disabled = true;
        setTimeout(()=>{
            document.querySelector(".NoDonado").style.display = "none";
            BTN.disabled = false;
        },3000);
    }else{
        MENSAJE.insertAdjacentHTML("afterend", `<span class="donado">Se ha donado la cantidad de $${DONACION.value} pesos.</span>`);
        DONACION.value = "";
        BTN.disabled = true;
        setTimeout(()=>{
            document.querySelector(".donado").style.display = "none";
            BTN.disabled = false;
        },3000);
    }
}


MENSAJE.insertAdjacentHTML("afterend", `<div class="caja contededorFooter"><span class="footer">Creador: Ing. Miguel Bonilla</span></div>`);
