
function FormJS() {
  const formData = {
    id: parseInt(
      document.querySelector(".form-js input#id-formJS").value
    ),
    title: document.querySelector(".form-js input#title").value,
    body: document.querySelector(".form-js input#body").value,
    userId: parseInt(
      document.querySelector(".form-js input#userId").value
    ),
  };
  // const formData = new FormData();
  // formData.append("id",document.querySelector(".form-js input#id-formJS").value);
  // formData.append("title",document.querySelector(".form-js input#title").value);
  // formData.append("body", document.querySelector(".form-js input#body").value);
  // formData.append("userId",document.querySelector(".form-js input#userId").value);

  const response = axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    //   .then((response) => response.json())
    .then((json) => console.log(json));
}

  async function formDataImage() {
  const formData = new FormData()
  formData.append("image", document.querySelector('#fileInput').files[0])

  const response = await axios.post('http://localhost:9000/api/test/uploadImage', formData)
  console.log(response)

  const imgEle = document.querySelector('img');
  imgEle.setAttribute('src', `http://localhost:9000/${response.data.url}`)

  return false
}



// const btnImage = document.querySelector("button#btn-image");
// if(btnImage){
//   btnImage.addEventListener("click", formDataImage, false)
// }

const btnSubmit = document.querySelector("button#btn-JSsubmit");
//btnSubmit.addEventListener("click", FormJS);
//   FormJS();