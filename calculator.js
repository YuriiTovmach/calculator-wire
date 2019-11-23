function calc(){
  'use strict';
      const PI = 3.14;
      let l, d, g, result;


    l = document.getElementById('n1').value;
  l = Number.parseFloat(l);
  l = l.toFixed(3);

    d = document.getElementById('n2').value;
  d = Number.parseFloat(d);
  d = d.toFixed(3);

  g = document.getElementById('n3').value;
  g = Number.parseFloat(g);
  g = g.toFixed(3);

    result = (Math.PI*l*d*d*(g/4))/1000000;
  document.getElementById('res').innerHTML = result.toFixed(3) + " кг" ;
  console.log(result);

}

function price(){
  'use strict';
      let m, pr;

    m = document.getElementById('n4').value;
  m = Number.parseFloat(m);
  m = m.toFixed(3);

    pr = document.getElementById('n5').value;
  pr = Number.parseFloat(pr);
  pr = pr.toFixed(2);

    result_price = m*pr;
  document.getElementById('res_2').innerHTML = result_price.toFixed(2) + " грн." ;
}

