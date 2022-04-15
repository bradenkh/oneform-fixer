/*
Ideas from phones agents
kb on the side instead of inside the oneform
see requestor info on oneform
options popup for agents
be able to switch kbs easily (buttons?)
dark mode (probably not)
*/

const optionToKBDict = {
   "Abandoned Chat": "",
   "Academic Deadlines": "",
   "Academic Petitions": "",
   "Academic Standing": "",
   "Academic Success and Tutoring": "",
   "Accepting/Declining Offer": "",
   "Access Control/Locks & Keys": "",
   "ACT/SAT Questions": "",
   "Add/Drop Course (FADD)":
      "https://www.byui.edu/financial-aid/resources/dates-and-deadlines",
   "Admissions Office Info": "",
   "Additional Class Fees": "",
   "Admissions Requirements": "",
   Advising: "",
   "Alumni Office": "",
   "Application Deadline": "",
   "Application Issues": "",
   "Application Questions": "",
   "Application Status": "",
   "Application Walkthrough": "",
   "Appointment-Cancellation": "",
   "Appointment-Scheduling": "",
   "Art Dept.": "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=772",
   "Auto Access": "",
   "Automotive Dept.":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1818",
   "Award Adjustment":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "BYUI Scholarship/Grant App Questions":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "BYUI Scholarship/Grant App Status":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "BYU-Idaho Promotional Gear (SWAG)": "",
   "Calling School Back": "",
   "Can't Add Course (Requirements)": "",
   "Career Services":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2178",
   "College of Agriculture & Life Science (NOT ADVISING)":
      "https://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=135",
   "College of Business & Communications (NOT ADVISING)":
      "https://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=134",
   "Emergency Issue":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",

   "FA Appointments":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7486",
   "FA Deadlines/Returns":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "FA Office Info":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "FA Petitions":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7742",
   "FA Portal Walkthrough":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "Facilities/Grounds": "",
   "Faculty Technology Center": "",
   "FAFSA Amount Questions":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "FAFSA Application":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "FAFSA Award Status":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "FAFSA Credit Requirement":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "FAFSA Marital Status Change":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "Idaho State Aid":
      "https://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "All Other Questions": "https://td.byui.edu/TDClient/75/Portal/KB/",
   "Tag Not Found": "https://td.byui.edu/TDClient/75/Portal/KB/",
};

var openOnSide = true;

function openKBInTab(KBLink) {
   window.open(KBLink, "");
}

function getKBLink(optionId) {
   var link = false;
   if (document.querySelector("option[value='" + optionId + "'")) {
      link =
         optionToKBDict[
            document.querySelector("option[value='" + optionId + "'")
               .textContent
         ];
   }
   return link;
}

function deleteElement(elemId) {
   if (document.getElementById(elemId)) {
      var elem = document.getElementById(elemId);
      elem.remove();
   }
}

function setKbSrc(link) {
   document.getElementById("kb_iFrame").src = link;
}

function replaceRequestorInfoWithiFrame() {}

function fixCSS() {
   document.getElementById("divContent").classList.remove("col-sm-8");
   document.getElementById("divContent").classList.add("col-sm-5");
}

function updateKBiFrame(link) {
   // if the kb is not already in the document create it
   if (!document.getElementById("kb_container")) {
      // create kb elements wrapper
      var kbDiv = document.createElement("div");
      kbDiv.id = "kb_container";

      // create the iframe and inset them
      var kbIFrame = document.createElement("iframe");
      kbIFrame.id = "kb_iFrame";
      kbIFrame.width = "58.33333333%";
      kbIFrame.height = "2000";
      // kbIFrame.style.margin = "20px";
      // kbIFrame.classList.add("col-sm-7");
      kbIFrame.style.border = "1px solid #ddd";
      kbDiv.appendChild(kbIFrame);
      fixCSS();
      document.querySelector(".row").appendChild(kbDiv);

      // old code used to put the kb in the form
      // document
      //    .getElementById("attribute10367-grp")
      //    .parentNode.insertBefore(
      //       kbDiv,
      //       document.getElementById("attribute10367-grp")
      //    );
   }
   // then set the source to the new link
   setKbSrc(link);
}

document.body.onload = function () {
   // add observer for tags
   const tagObserver = new MutationObserver(function () {
      var optionId = document.getElementById("attribute10333").value;
      var kbLink = getKBLink(optionId);
      if (kbLink) {
         updateKBiFrame(kbLink);
      }
   });

   tagObserver.observe(document.getElementById("attribute10333-grp"), {
      subtree: true,
      childList: true,
   });

   //Remove needless html on the page
   document.querySelector(".form-group.gutter-top").remove();
   document.querySelector("#attribute12375Choice38015").remove();
   document.querySelector("#static-1676498-grp").remove();
   document.querySelector("#static-1676550-grp").remove();
   document.querySelector("#attribute12375-grp").remove();
   document.querySelector("#static-1676550-grp").remove();
   document.querySelector("#attribute12375-grp").remove();
   document.querySelector("#attribute11452-grp").remove();
   document.querySelector("#attribute50-grp").remove();

   // insert kb on the side
   // document
   //     .querySelector("main")
   //     .setAttribute("style", "display: grid; grid-template-columns: auto auto;");
};
