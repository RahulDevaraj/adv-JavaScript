// CSIS 3380 Quiz 2
// Student Name: Rahul Devarajan Raj

const api_key =
  "15043f7afb5100526069aecf17ded5029e0490d7a43af1618a31871579642f2a";
const url =
  "https://min-api.cryptocompare.com/data/v2/pair/mapping/exchange?e=Bitso&api_key=15043f7afb5100526069aecf17ded5029e0490d7a43af1618a31871579642f2a";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const current = data.Data.current;
    //get all fsym from current array
    const fsyms = current.map((item) => item.fsym);
    const tsyms = current.map((item) => item.tsym);

    const fsym = [...new Set(fsyms)];
    console.log("Unique" + fsym);

    //add these fsyms to the select element id=fsym
    const fsymSelect = document.getElementById("fsym");
    fsym.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.text = item;
      fsymSelect.appendChild(option);
    });

    const tsym = [...new Set(tsyms)];
    // console.log("Unique" + tsym);

    const tsymSelect = document.getElementById("tsym");
    tsym.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.text = item;
      tsymSelect.appendChild(option);
    });
  });

//get button click with no id
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const fsym = document.getElementById("fsym").value;
  const tsym = document.getElementById("tsym").value;

  const url2 = `
  https://min-api.cryptocompare.com/data/price?fsym=${fsym}&tsyms=${tsym}&api_key=${api_key}
`;

  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);

      const value = Object.values(data);
      console.log(value);

      const resultString = `1 ${fsym} is equal to ${value} ${tsym}`;
      console.log(resultString);

      const answer = document.getElementById("answer");
      answer.value = resultString;
    });
});
