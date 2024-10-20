
const countryList = {
AED: "AE",
AFN: "AF",
XCD: "AG",
ALL: "AL",
AMD: "AM",
ANG: "AN",
AOA: "AO",
AQD: "AQ",
ARS: "AR",
AUD: "AU",
AZN: "AZ",
BAM: "BA",
BBD: "BB",
BDT: "BD",
XOF: "BE",
BGN: "BG",
BHD: "BH",
BIF: "BI",
BMD: "BM",
BND: "BN",
BOB: "BO",
BRL: "BR",
BSD: "BS",
NOK: "BV",
BWP: "BW",
BYR: "BY",
BZD: "BZ",
CAD: "CA",
CDF: "CD",
XAF: "CF",
CHF: "CH",
CLP: "CL",
CNY: "CN",
COP: "CO",
CRC: "CR",
CUP: "CU",
CVE: "CV",
CYP: "CY",
CZK: "CZ",
DJF: "DJ",
DKK: "DK",
DOP: "DO",
DZD: "DZ",
ECS: "EC",
EEK: "EE",
EGP: "EG",
ETB: "ET",
EUR: "FR",
FJD: "FJ",
FKP: "FK",
GBP: "GB",
GEL: "GE",
GGP: "GG",
GHS: "GH",
GIP: "GI",
GMD: "GM",
GNF: "GN",
GTQ: "GT",
GYD: "GY",
HKD: "HK",
HNL: "HN",
HRK: "HR",
HTG: "HT",
HUF: "HU",
IDR: "ID",
ILS: "IL",
INR: "IN",
IQD: "IQ",
IRR: "IR",
ISK: "IS",
JMD: "JM",
JOD: "JO",
JPY: "JP",
KES: "KE",
KGS: "KG",
KHR: "KH",
KMF: "KM",
KPW: "KP",
KRW: "KR",
KWD: "KW",
KYD: "KY",
KZT: "KZ",
LAK: "LA",
LBP: "LB",
LKR: "LK",
LRD: "LR",
LSL: "LS",
LTL: "LT",
LVL: "LV",
LYD: "LY",
MAD: "MA",
MDL: "MD",
MGA: "MG",
MKD: "MK",
MMK: "MM",
MNT: "MN",
MOP: "MO",
MRO: "MR",
MTL: "MT",
MUR: "MU",
MVR: "MV",
MWK: "MW",
MXN: "MX",
MYR: "MY",
MZN: "MZ",
NAD: "NA",
XPF: "NC",
NGN: "NG",
NIO: "NI",
NPR: "NP",
NZD: "NZ",
OMR: "OM",
PAB: "PA",
PEN: "PE",
PGK: "PG",
PHP: "PH",
PKR: "PK",
PLN: "PL",
PYG: "PY",
QAR: "QA",
RON: "RO",
RSD: "RS",
RUB: "RU",
RWF: "RW",
SAR: "SA",
SBD: "SB",
SCR: "SC",
SDG: "SD",
SEK: "SE",
SGD: "SG",
SKK: "SK",
SLL: "SL",
SOS: "SO",
SRD: "SR",
STD: "ST",
SVC: "SV",
SYP: "SY",
SZL: "SZ",
THB: "TH",
TJS: "TJ",
TMT: "TM",
TND: "TN",
TOP: "TO",
TRY: "TR",
TTD: "TT",
TWD: "TW",
TZS: "TZ",
UAH: "UA",
UGX: "UG",
USD: "US",
UYU: "UY",
UZS: "UZ",
VEF: "VE",
VND: "VN",
VUV: "VU",
YER: "YE",
ZAR: "ZA",
ZMK: "ZM",
ZWD: "ZW",
};
let URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let select1 = document.querySelector("#drop_down1");
let select2 = document.querySelector("#drop_down2")
let button = document.querySelector("button");
let country_code1  = "IN";
let country_code2  = "US";  
let currancycode1  = "inr";
let currancycode2  = "usd";

for(let currancycode in countryList)
{
  let newOption = document.createElement("option");
  newOption.innerText = currancycode;
  newOption.value = currancycode;
  if(newOption.innerText === "INR")
  {
       newOption.selected = "selected";
  }
  select1.append(newOption);
  
}

select1.addEventListener("change",(evt)=>{
       flagchange1(evt.target,1);
   });

   flagchange1 = (ele,logo_no)=>{
    
    currancycode1 = ele.value.toLowerCase();
   country_code1 = countryList[ele.value];

   let flag_link = `https://flagsapi.com/${country_code1}/flat/64.png` ;
   let logo = document.querySelector(`#logo${logo_no}`);
   logo.src = flag_link;
}

for(let currancycode in countryList)
{
  let newOption = document.createElement("option");
  newOption.innerText = currancycode;
  newOption.value = currancycode;
  if(newOption.innerText === "USD")
  {
       newOption.selected = "selected";
  }
  select2.append(newOption);

}
select2.addEventListener("change",(evt)=>{
   
       flagchange2(evt.target,2);
   });

   flagchange2 = (ele,logo_no)=>{
    
    currancycode2 = ele.value.toLowerCase();
   country_code2 = countryList[ele.value];

   let flag_link = `https://flagsapi.com/${country_code2}/flat/64.png` ;
   let logo = document.querySelector(`#logo${logo_no}`);
   logo.src = flag_link;
}

   

button.addEventListener("click",async (evt)=>{
   evt.preventDefault();
   let input =  document.querySelector("#text_box1");
   let output_box = document.querySelector("#text_box2");
   console.log(input.value);
   // let respose = await fetch(URL);
   console.log(currancycode1);
   console.log(currancycode2);
   let respose = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currancycode1}.json`);


   console.log(respose);
   //  console.log(respose.json());
  let data = await respose.json();
 console.log(data);
 let output = data[currancycode1][currancycode2];
  console.log(output);
  output_box.value = output;
   
  console.log("\n ");
   
})

// let student = {
//     name: "viram",

//     ht :{
//         name1 : "vicky",
//         k: "kushwaha1",
//     },
   
//  }
//     console.log(student.ht.name1);

