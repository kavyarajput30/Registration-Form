let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  //fetching all the information
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let dob = document.querySelector("#DOB").value;
  let mobile = document.querySelector("#mobile").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let qualification = document.querySelector("#qualification").value;

  if (
    email.includes("@") &&
    email.includes(".") &&
    mobile.length == 10 &&
    name.trim() === "" &&
    email.trim() === "" &&
    password.trim() === "" &&
    dob.trim() === "" &&
    mobile.trim() === "" &&
    gender === null &&
    qualification.trim() === ""
  ) {
    //get the table
    let tableBody = document.getElementById("tableBody");
    //insert new row
    let newRow = tableBody.insertAdjacentHTML(
      "beforeend",
      `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${dob}</td>
        <td>${mobile}</td>
        <td>${gender}</td>
        <td>${qualification}</td>
        <td><button id="delete" >Delete</button></td>
    </tr>
`
    );
    //get the buttons of id delete
    let deleteButtons = document.querySelectorAll("#delete");

    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        let row = this.parentNode.parentNode;
        row.parentNode.removeChild(row); // Remove the row from the table
      });
    });
  } else {
    alert("Please enter a valid input");
    return;
  }
});
