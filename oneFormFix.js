/*
Ideas from phones agents
kb on the side instead of inside the oneform
see requestor info on oneform
options popup for agents
be able to switch kbs easily (buttons?)
dark mode (probably not)
*/
const optionToKBDict = {
   "Academic Deadlines":
      "http://www.byui.edu/student-records/academic-deadlines",
   "Academic Petitions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2032",
   "Academic Standing":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2028",
   "Academic Success and Tutoring":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2772",
   "Accepting/Declining Offer":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2214",
   "ACT/SAT Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2148",
   "Add/Drop Course (FADD)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "Additional Class Fees":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2650",
   "Admissions Office Info":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3001",
   "Admissions Requirements":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2217",
   Advising: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=845",
   "Alumni Office":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2178",
   "Application Deadline":
      "http://www.byui.edu/admissions/application-deadlines",
   "Application Issues":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2204",
   "Application Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "Application Status": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2203",
   "Application Walkthrough":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2204",
   "Appointment-Cancellation":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9369 ",
   "Appointment-Scheduling":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1881",
   "Art Dept.": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=772",
   "Auto Access": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3165",
   "Automotive Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1818",
   "Award Adjustment":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Book Buy Back":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1103",
   "Book Dept. (Other)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=768",
   "Book Rentals":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1102",
   "Book Reservations":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1101",
   "Bowling/Skating": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2878",
   "BSC (about the support center)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2774",
   "BYUI Scholarship/Grant App Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "BYUI Scholarship/Grant App Status":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "BYU-Idaho Promotional Gear (SWAG)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=342",
   "Calling School Back":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5723",
   "Can't Add Course (Requirements)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2178",
   "Career Services":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=755",
   Catering: "http://td.byui.edu/TDClient/KB/ArticleDet?ID=755",
   "Cellular Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=767",
   "Center Stage":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5266",
   "Center Stage/Event Services":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5266",
   "Change/Declaring Major or Minor":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=517",
   "Charges / Payments":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "Class Planning":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1881",
   "Clothing Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=769",
   "College of Agriculture & Life Science (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=135",
   "College of Business & Communications (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=134",
   "College of Education & Human Development (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=801",
   "College of Language & Letters (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=800",
   "College of Performing & Visual Arts (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=802",
   "College of Physical Sciences & Engineering (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/?CategoryID=453",
   "Complaints or Grievances":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1478",
   "Concurrent Enrollment Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2221",
   "Counseling Center":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1034",
   "Course Audit":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2021",
   "Course Info/Retakes":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2014",
   "Course Materials":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "COVID-19 (Coronavirus) Concerns":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=6180",
   "Dean of Students":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5235",
   "Deferment: Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5708",
   "Deferment: Returning Missionary Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5708",
   "Degree Info": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2145",
   Devotional: "http://td.byui.edu/TDClient/KB/ArticleDet?ID=911",
   "Dining Dollars":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1403",
   "Diploma: Duplicate":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7703",
   "Diploma: Missing, Returned, or Damaged":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7703",
   "Diploma: When will I receive it?":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1467",
   "Direct to Employee": "http://web.byui.edu/Directory/Employees/",
   "Disability Services": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=9",
   Donations: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2178",
   "Download (Microsoft Office, Adobe)":
      "http://techguides.byui.edu/a/1151232-downloading-installing-microsoft-office-for-free",
   "Duo 2-Factor":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2895",
   "E-Books": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4773",
   "Echeck Failures/Failed Payment Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2340",
   "Email Issues":
      "http://td.byui.edu/TDClient/79/ITServicePortal/Requests/TicketRequests/NewForm?ID=fjIS982DLS0_",
   "Emergency Issue":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5674",
   "Endorsement Questions": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2206",
   "Endorsement Status": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2206",
   "Enrollment Verification":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2120",
   "Equipment/Printers":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=6597",
   "E-Refund/Tuition Refund":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2320",
   "Executive Offices":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2196",
   "Express Print and Copy (Small and Quick Jobs)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=5044",
   "FA Appointments":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7486",
   "FA Deadlines/Returns":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "FA Office Info":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "FA Petitions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7742",
   "FA Portal Walkthrough":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   "Facilities/Grounds": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=1546",
   "Faculty Technology Center":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4732",
   "FAFSA Amount Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "FAFSA Application":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "FAFSA Award Status":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "FAFSA Credit Requirement":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "FAFSA Marital Status Change":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8253",
   "Fast Grad": "http://www.byui.edu/admissions/current-students/fast-grad",
   "FERPA Restriction":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2124",
   "Field Services (Student Teaching Placement)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4152",
   "Financial Aid":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "Fitness/Wellness Center":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2448",
   "Food Services":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=779",
   "Foreign Language Test Out":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2771",
   "Former Student (No Show)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=180",
   "General University Store Hours & Location":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1252",
   "Gift Dept.": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1088",
   "Grade Change":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2142",
   "Grades & Credits Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2141",
   "Graduation: Check Application Status":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7701",
   "Graduation: Events":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2425",
   "Graduation: Forms":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9433",
   "Graduation: How to Apply":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7701",
   "Health Center":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=612",
   "Hold: Emergency Contact":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2097",
   "Hold: Financial Responsibility":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2326",
   "Hold: Graduation":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2096",
   "Hold: High Credit":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=41",
   "Hold: Past Due Debt":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2325",
   "Hold: Pre-Payment": "http://td.byui.edu/TDClient/75/Portal/KB/Artic...",
   "Hold: Registration Hold":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2098",
   Homeschool: "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2217",
   "Honor Office": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=463",
   Honors: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2076",
   "Hours of Operations": "http://www.byui.edu/contact-us/hours",
   "Housing Office":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3539",
   "How to Pay Online":
      "http://www.byui.edu/financial-services/student-financials/payments-and-refunds/payments",
   "HR: Employment Verification":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5800",
   "HR: Human Resources":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3566",
   "HR: Online Employment & Scheduling":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=495",
   "HR: Student Employment":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3681",
   "HR: Tuition Waiver": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=1914",
   "HR: Workday": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1384",
   "I-Card": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2270",
   "Idaho State Aid":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8231",
   "I-Learn Technical Issue":
      "http://community.canvaslms.com/t5/Canvas-Student/ct-p/canvas_student",
   "Incomplete Contract":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2121",
   "International Deposit":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2754",
   "International Online Certificate":
      "http://byui-help.screenstepslive.com/a/1286167-how-to-apply-for-a-certificate",
   "International Payments":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2288",
   "International Services":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2754",
   "International Student Application Questions":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2754",
   "International Study Program":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=1438",
   "International Textbooks":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1891",
   "Internship Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=30",
   "I-Plan Technical Issue":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2977",
   "I-Plan/Grad Plan Walkthrough":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=517",
   "IT After hours form":
      "http://td.byui.edu/TDClient/79/ITServicePortal/Requests/TicketRequests/NewForm?ID=fjIS982DLS0_",
   "Late Adds/Reinstatements":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2122",
   "Late Fees": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5413",
   Library: "http://td.byui.edu/TDClient/KB/ArticleDet?ID=3780",
   "Loan: Default/Discharge/Bankruptcy":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Loan: General Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Loan: MPN/Entrance Counseling":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Loan: Re-Offer":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Loan: Repayment":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=9844",
   "Lost and Found Questions (Not Transferred)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3902",
   "Mail Services/Stores & Receiving":
      "http://www.byui.edu/university-services/mail-services",
   "Mail Services/Stores & Receiving":
      "http://www.byui.edu/university-services/mail-services",
   "Math Dept.": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1239",
   "Missed Appointment":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7846",
   "Missionary Reassignment Refund":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2322",
   "NetID/Password for Application":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2204",
   "Non-BYUI Scholarship/Other Awards":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=10016",
   "Nursing-On Campus (Pre-Licensure BSN)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2467",
   "Office of General Education (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4349",
   "Office of Interdisciplinary Studies (NOT ADVISING)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=871",
   "ORC (Outdoor Resource Center)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2879",
   "Outside Collection Agency Info":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2360",
   "Outside Form Requests (NOT for Taxes)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=6816",
   "Outside Forms for BYU-Idaho":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5709",
   "Override Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5709",
   "Parking Services": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=1680",
   "pathway connect issues":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8359",
   "pathway- All other questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "Pathway Online Advising (PWOL)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=845",
   "PathwayConnect Issues":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8359",
   "Payment Deadlines":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2340",
   "Payment Plan":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2290",
   "Payment Walkthrough":
      "http://byu-idaho.screenstepslive.com/s/17563/a/953693-how-do-i-make-a-payment",
   "Plan for Success":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=41",
   Planetarium: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4232",
   "Positive Instructor Feedback":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1478",
   "Print & Copy Services":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1099",
   Proctorio: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2438",
   "Program Applicability":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1925",
   "Questions About Charges":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2650",
   "Radio/KBYUI": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=812",
   "Registration Issues":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8603",
   "Registration: Class is Full/Waitlist":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4724",
   "Registration: Pre-Requisites/Requirement Error":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4724",
   "Registration: Walkthrough":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4724",
   "Religion Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4091",
   "Return Missionary Program (RMP)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2210",
   ROTC: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3064",
   "Safety & Security":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5073",
   "SAP (Satisfactory Academic Progress)":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2045",
   "Scheduling Office": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=3724",
   "Scholarship/Aid Receipt Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2928",
   "SRR Office Location/Hours":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2647",
   "Student Activities": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=756",
   "Student Complaints & Grievances":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1478",
   "Student Info.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2123",
   "Student Support":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2515",
   "Student Type Status": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2218",
   "Substitutions/Waiver":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=226",
   "Summer Session Exceptions":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2219",
   "Supplies Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=770",
   "Surplus Sale":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1380",
   "Tax Forms (including 1098T)":
      "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2353",
   "Technical Issues":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8598",
   "Technology Dept.":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1097",
   "Testing Center":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1932",
   "Third Party Payments":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2405",
   "Tour Questions – Prospective Student":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=764",
   "Track Questions": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2207",
   "Transcript (BYUI) Request":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2029",
   "Transcript: Mailing Address":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2205",
   "Transcript: Status": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=2205",
   "Transfer Credit/Transcript Evaluation":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2100",
   "Transfer Evaluation: Current Status":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2029",
   "Transfer Evaluation: How It Works":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2103",
   "Transfer Evaluation: Questions About Results":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=4121",
   "Transferring Balance Between Accounts":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=306",
   "Travel Office":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3708",
   "Tuition: Amount(s)/Costs":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2346",
   "University Communications":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=5358",
   "University Relations": "http://td.byui.edu/TDClient/KB/ArticleDet?ID=342",
   "University Store (non-web) Charges":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1100",
   Vendor: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=800",
   "Verification Questions":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1975",
   "Veterans Affairs":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=8229",
   Waitlist: "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=7027",
   "Web Dept.": "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=1098",
   "Withdraw from a Class":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=2031",
   "Withdraw from School":
      "http://td.byui.edu/TDClient/75/Portal/KB/ArticleDet?ID=3355",
   "Zoom Help": "http://byui-ilearn.screenstepslive.com/m/71699",
};

var openOnSide = true;

function getKBLink(optionId) {
   var link = false;
   if (document.querySelector("option[value='" + optionId + "'")) {
      link =
         optionToKBDict[
            document.querySelector("option[value='" + optionId + "'")
               .textContent
         ][0];
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

function driver() {
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
}

// if the document isn't loaded wait until it is
document.body.onload = driver;
// if document is already loaded, run the driver
if (document.readyState === "complete") {
   driver();
}
