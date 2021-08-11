const perimetroCuadrado = (lado) => {
  return lado * 4;
};

const areaCuadrado = (lado) => {
  return lado * lado;
};

const perimetroTriangulo = (lado1, lado2, base) => {
  return lado1 + lado2 + base;
};

const areaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};

const perimetroCirculo = (radio) => {
  const PI = Math.PI;
  return radio * 2 * PI;
};

const areaCirculo = (radio) => {
  const PI = Math.PI;
  return radio * radio * PI;
};

const nodoResPerimetro = document.getElementById("resPerimetro");
const nodoResArea = document.getElementById("resArea");

const mostrarResultado = (valor, nodo) => {
  const res = document.createElement("span");
  res.classList = "mostrarResultado";
  res.textContent = valor;
  const addResultado = nodo.appendChild(res);
  return addResultado;
};

//Cuadrado

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("inputCuadrado");
  const valorCuadrado = input.value;
  const perimetro = perimetroCuadrado(valorCuadrado);

  const res = mostrarResultado(perimetro, nodoResPerimetro);
  return res;
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById("inputCuadrado");
  const valorCuadrado = input.value;
  const area = areaCuadrado(valorCuadrado);

  const res = mostrarResultado(area, nodoResArea);
  return res;
};
