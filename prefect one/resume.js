const tx = document.getElementsByTagName("textarea");
function OnInput() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

//////////////////////////////
///input photo///
const imginput = document.getElementById("filefeild");
const imgf = document.getElementById("img-f");
// const imgtemp = document.getElementById("imgtemp");
imginput.addEventListener("change", function (e) {
  if (e.target.files.length == 0) {
    return;
  }
  let tempUrl = URL.createObjectURL(e.target.files[0]);
  // console.log(tempUrl);
  imgf.setAttribute("src", tempUrl);
  // imgtemp.setAttribute("src", tempUrl);
});
///////////////////////////
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}
////
const overlay = document.getElementsByClassName("overlay")[0]
const Close =document.getElementsByClassName("check-feild")[0]
const addfeild = document.getElementById("add-more")
addfeild.addEventListener("click",function(){
  overlay.style.display = "inherit"
 Close.style.display ="grid"
})
document.getElementById("close").addEventListener("click",function(){
  overlay.style.display = "none"
  Close.style.display ="none"
})
///////////////

const addressp =document.getElementById("addressp")
const addressB =document.getElementById("addressB")
const emailCheckBox =document.getElementById("Email-check")
const emailp =document.getElementById("emailp")
const numberCheckBox =document.getElementById("number-check")
const numberp =document.getElementById("numberp")
const websiteCheckBox =document.getElementById("website-check")
const websitep =document.getElementById("websitep")
const linkedinCheckBox =document.getElementById("linkedin-check")
const linkedinp =document.getElementById("linkedinp")
const twitterCheckBox =document.getElementById("twitter-check")
const twitterp =document.getElementById("twitterp")
const githubCheckBox =document.getElementById("github-check")
const githubp =document.getElementById("githubp")
const facebookCheckBox =document.getElementById("facebook-check")
const facebookp =document.getElementById("facebookp")
const instagramCheckBox =document.getElementById("instagram-check")
const instagramp =document.getElementById("instagramp")
function checkedfeild(){
  if (addressB.checked == true) {
    addressp.style.display ="inherit"
  } else {
    addressp.style.display ="none"
  }
  if (emailCheckBox.checked == true) {
    emailp.style.display ="inherit"
  } else {
    emailp.style.display ="none"
  }
  if (numberCheckBox.checked == true) {
    numberp.style.display ="inherit"
  } else {
    numberp.style.display ="none"
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display ="inherit"
  } else {
    websitep.style.display ="none"
  }
  if (websiteCheckBox.checked == true) {
    websitep.style.display ="inherit"
  } else {
    websitep.style.display ="none"
  }
  if (twitterCheckBox.checked == true) {
    twitterp.style.display ="inherit"
  } else {
    twitterp.style.display ="none"
  }
  if (linkedinCheckBox.checked == true) {
    linkedinp.style.display ="inherit"
  } else {
    linkedinp.style.display ="none"
  }
  if (githubCheckBox.checked == true) {
    githubp.style.display ="inherit"
  } else {
    githubp.style.display ="none"
  }
  if (facebookCheckBox.checked == true) {
    facebookp.style.display ="inherit"
  } else {
    facebookp.style.display ="none"
  }
  if (instagramCheckBox.checked == true) {
    instagramp.style.display ="inherit"
  } else {
    instagramp.style.display ="none"
  }
}
///////////////////
const skillContainer = document.getElementById("skill-container")
const addbtn = document.getElementsByClassName("skill-btn-add")
function addli(){
  html =`
  <li class="skilldes"><textarea name="" id="" class="skills" cols="38" rows="1" placeholder="Skill"></textarea>  <button class="skill-btn-add" onclick="addli()" >+</button> <button class="subskill" onclick="subli()">-</button></li>`
  skillContainer.insertAdjacentHTML("beforeend",html)
}
// sub skills
function subli(){
  event.target.parentElement.style.display="none"
}
//////////
// document.getElementById("btn-address").addEventListener("click", function () {
//   document.getElementById("addressp").style.display = "none";
// });
// document.getElementById("btn-email").addEventListener("click", function () {
//   document.getElementById("emailp").style.display = "none";
// });
// document.getElementById("btn-number").addEventListener("click", function () {
//   document.getElementById("numberp").style.display = "none";
// });

// const addBtnskill = document.getElementById("skill-btn-add");
// const skillContainer = document.getElementById("skill-container");
// addBtnskill.addEventListener("click", function () {
//   let html = `<li><textarea name="" id="" class="skills" cols="43" rows="1" placeholder="Skill"></textarea> <button id="subSkill" class="subskill">-</button></li>`;
//   skillContainer.insertAdjacentHTML("beforeend", html);
// });
// ///////remove skill

// let btn = document.querySelector("ul");
// btn.addEventListener("click", function (e) {
//   let li = e.target.parentElement.addEventListener("click", function () {
//     let list = e.target.parentElement;
//     let box = document.querySelector("#skill-container");
//     box.removeChild(list);
//   });
// });

// /////////////////////////////////////
// let inp = 0;
// const btnExp = document.getElementById("btn-exp");

// const expCont = document.getElementById("exp-cont");
// btnExp.addEventListener("click", function () {
//   inp++;
//   let html = ` <h2 class='edit'><input type="text"   placeholder="compnay"  name="" class="compnay"  > <span class=" edit"> <input type="text"  placeholder="post" name="" class="comp-post"></span></h2>
//   <p class="date edit"><input type="text" placeholder="Duration"></p>
//   <button id="btn-exp" onclick="exp${inp}()">+</button>
//   <ul class="exp-container" onclick ="subFun(event)">
//   <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li> `;
//   expCont.insertAdjacentHTML("beforeend", html);
// });
// const ulCont = document.getElementsByClassName("exp-container");
// let ex = 0;
// function exp() {
//   let html = `  <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[0].insertAdjacentHTML("beforeend", html);
//   ex++;
// }
// function exp1() {
//   let html = ` <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[1].insertAdjacentHTML("beforeend", html);
//   ex++;
// }

// function exp2() {
//   let html = `  <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[2].insertAdjacentHTML("beforeend", html);
// }
// function exp3() {
//   let html = ` <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[3].insertAdjacentHTML("beforeend", html);
// }
// function exp4() {
//   let html = ` <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[4].insertAdjacentHTML("beforeend", html);
// }
// function exp5() {
//   let html = ` <li><textarea name="" id="" placeholder="Work Experince" cols="43" rows="1" class="skills"></textarea><button>-</button> </li>`;
//   ulCont[4].insertAdjacentHTML("beforeend", html);
// }
// /////
// let workbtn = document.getElementsByClassName(".exp-container");

// for (const ele of ulCont) {
//   ulCont[0].addEventListener("click", function (e) {
//     let li = e.target.parentElement.addEventListener("click", function () {
//       let list = e.target.parentElement;
//       console.log(list);
//       let parentel = list.parentElement;
//       parentel.removeChild(list);
//       console.log(ulCont);
//     });
//   });
// }

// function subFun(event) {
//   let li = event.target.parentElement.addEventListener("click", function () {
//     let list = event.target.parentElement;
//     console.log(list);
//     let parentel = list.parentElement;
//     parentel.removeChild(list);
//     console.log(ulCont);
//   });
// }
//////////////////////////////////
const btnPdf = document.getElementById("pdf-btn");
btnPdf.addEventListener("click", function (e) {
  e.preventDefault();
  const btnarray = document.getElementsByTagName("button");
  for (const ele of btnarray) {
    ele.style.display = "none";
  }
  btnPdf.style.display = "none";
  window.print();
  for (const ele of btnarray) {
    ele.style.display = "inline";
  }
  btnPdf.style.display = "block";

});

//////////////////////////////////////////
const input = document.getElementsByTagName("input");
for (const ele of input) {
  ele.addEventListener(
    "input",
    (event) => (event.target.style.width = event.target.scrollWidth + "px")
  );
}
