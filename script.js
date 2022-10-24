window.onload = function() {
//Temperature converter 
  let c = document.getElementById("cels");
  let f = document.getElementById("fahr");
  let k = document.getElementById("kel");

    c.oninput = function() {
      f.value = (c.value * 9/5) + 32;
      k.value = (c.value + 273);
    }
    f.oninput = function() {
      c.value = (f.value - 32) * 5/9;
      k.value = (c.value + 273);
    }
    k.oninput = function() {
      c.value = (k.value - 273);
      f.value = 9/5 *(k.value - 273) + 32;
    }
//Temperature converter ends

//Length converter 
  let m = document.getElementById("met");
  let cm = document.getElementById("cent");
  let km = document.getElementById("kilo");
  let ft = document.getElementById("ft");
  let yd = document.getElementById("yd");
  let i = document.getElementById("inch");
  let mi = document.getElementById("miles");

    m.oninput = function() {
      cm.value = (m.value * 100);
      km.value = (m.value * 1000);
      ft.value = (m.value * 3.2808);
      yd.value = (m.value * 1.0936);
      i.value = (m.value * 100) / 2.54;
      mi.value = (m.value * 1000) * 0.6237;
    };
    cm.oninput = function() {
      m.value = (cm.value/100);
      km.value = (cm.value/1000)/100;
      ft.value = (cm.value/100)*3.2808;
      yd.value = (cm.value*0.010936);
      i.value = (cm.value/2.54);
      mi.value = (cm.value*0.0000062137)/10;
    };
    km.oninput = function() {
      m.value = (km.value*1000);
      cm.value = (km.value*1000)*100;
      ft.value = (km.value*3280.8);
      yd.value = (km.value*1093.6);
      i.value = (km.value*39370);
      mi.value = (km.value*0.62137);
    };
    ft.oninput = function () {
      m.value = (ft.value/3.2808);
      cm.value = (ft.value/3.2808)*100;
      km.value = (ft.value/3280.8);
      yd.value = (ft.value/3);
      i.value = (ft.value*12);
      mi.value = (ft.value*0.00018939);
    };
    yd.oninput = function () {
      m.value = (yd.value/1.0936);
      cm.value = (yd.value/1.0936)*100;
      km.value = (yd.value/1093.6);
      ft.value = (yd.value*3);
      i.value = (yd.value*36);
      mi.value = (yd.value/1760);
    };
    i.oninput = function () {
      m.value = (i.value/100)*2.54;
      cm.value = (i.value*2.54);
      km.value = (i.value/39370);
      ft.value = (i.value/12);
      yd.value = (i.value/36);
      mi.value = (i.value*0.000015783);
    };
    mi.oninput = function () {
      m.value = (mi.value*1000)/0.62137;
      cm.value = (mi.value/0.0000062137);
      km.value = (mi.value/0.62137);
      ft.value = (mi.value*5280);
      yd.value = (mi.value*1760);
      i.value = (mi.value/0.000015783);
    };
//Lenght converter ends

//Weight converter
  let gm = document.getElementById("gram");
  let kg = document.getElementById("kilogm");
  let h = document.getElementById("pd");

    gm.oninput = function () {
      kg.value = (gm.valueAsNumber/1000);
      h.value = (gm.valueAsNumber/454);
    };
    kg.oninput = function () {
      gm.value = (g.valueAsNumber*1000);
      h.value = (g.valueAsNumber/0.454);
    };
    h.oninput = function () {
      gm.value = (h.valueAsNumber*454);
      kg.value = (h.valueAsNumber*0.454);
    };
//Weight converter ends
};