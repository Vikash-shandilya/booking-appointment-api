window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:3000/");

    for (let i = 0; i < response.data.length; i++) {
      let newdiv = document.createElement("div");
      let newli = document.createElement("li");
      let delete_btn = document.createElement("button");
      let edit_btn = document.createElement("button");

      edit_btn.type = "submit";
      edit_btn.textContent = "edit";
      edit_btn.onclick = edited;
      delete_btn.onclick = deleted;
      delete_btn.type = "submit";
      delete_btn.textContent = "delete";
      edit_btn.setAttribute("productid", response.data[i].id);
      delete_btn.setAttribute("productid", response.data[i].id);
      newli.textContent =
        "name = " +
        response.data[i].name +
        " email = " +
        response.data[i].email +
        " phone: = " +
        response.data[i].phone;

      //newli.textContent = JSON.stringify(response.data[i]);
      newli.appendChild(delete_btn);
      newli.appendChild(edit_btn);
      newdiv.appendChild(newli);
      document.getElementById("details").appendChild(newdiv);

      // Append the new div to the desired container in your HTML
      // e.g., document.getElementById("container").appendChild(newdiv);
    }
  } catch (error) {
    console.log(error);
    // Handle the error
  }
});

async function submitform() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  myobj = {
    name,
    email,
    phone,
  };

  let res = await axios.post("http://localhost:3000/submitform", myobj);

  let newdiv = document.createElement("div");
  let newli = document.createElement("li");
  let delete_btn = document.createElement("button");

  let edit_btn = document.createElement("button");
  edit_btn.type = "submit";
  edit_btn.textContent = "edit";
  edit_btn.onclick = edited;
  delete_btn.onclick = deleted;
  delete_btn.type = "submit";
  delete_btn.textContent = "delete";
  newli.textContent =
    "name = " + name + " email = " + email + " phone: = " + phone;

  newli.appendChild(delete_btn);
  newli.appendChild(edit_btn);
  newdiv.appendChild(newli);

  document.getElementById("details").appendChild(newdiv);

  // Reset form fields
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  window.location.reload();
}

async function edited(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  let res = await axios.get(`http://localhost:3000/getuser/${id}`);
  console.log(res.data);

  let item = e.target.parentElement;
  item.remove();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  nameInput.value = res.data.name;
  emailInput.value = res.data.email;
  phoneInput.value = res.data.phone;
  let editeduser = await axios.get(`http://localhost:3000/edituser/${id}`);
  window.location.reload();
}

async function deleted(e) {
  e.preventDefault();
  let id = e.target.getAttribute("productid");
  try {
    await axios.get(`http://localhost:3000/delete/${id}`);
    // Redirect to the homepage after successful deletion
    let item = e.target.parentElement;
    item.remove();
    window.location.reload();
  } catch (error) {
    console.error(error);
    // Handle the error
  }
}
