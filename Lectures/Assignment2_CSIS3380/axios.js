const apikey = "24654365-43d3af0888c129eaa80439c84";

document.getElementsByTagName("button")[0].onclick = function myfunction() {
  input1 = document.getElementById("input1").value.replace(" ", "+");
  input2 = document.getElementById("input2").value;
  const url = `https://pixabay.com/api/?key=${apikey}&q=${input1}`;
  axios(url)
    .then((res) => {
      console.log("RESOLVED: ", res.data);
      document.getElementById(
        "content"
      ).innerHTML += `<table id="imgTable"></table>`;
      for (let index = 0; index < parseInt(input2); index++) {
        document.getElementById("imgTable").innerHTML += `<tr>
            <td><img src=${res.data.hits[index].webformatURL}/></td>
            <td><h1>Image Details</h1>
            <span>Downloads:</span> ${res.data.hits[index].downloads}</br>
            <span>LargeImageURL:</span> <a href=${res.data.hits[index].largeImageURL}>${res.data.hits[index].largeImageURL}</a></br>
            <span>Image Likes:</span> ${res.data.hits[index].likes}</br>
            <span>Tags:</span> ${res.data.hits[index].tags}</br>
            <span>Image Type:</span> ${res.data.hits[index].type}</br>
            <span>User Name:</span> ${res.data.hits[index].user}</br>
            <span>URL:</span> <a href=${res.data.hits[index].webformatURL}>${res.data.hits[index].webformatURL}</a></br>
            </td></tr>`;
      }
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
};
