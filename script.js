const easyflags = {
    US: "unitedstates.png",
    Argentina: "argentina.png",
    France: "france.png",
    UK: "unitedkingdom.png",
    Ireland: "ireland.png",
    Russia: "russia.png",
    Germany: "germany.png",
    Spain: "spain.png",
    Greece: "greece.png",
    Sweden: "https://tse4.mm.bing.net/th/id/OIP.qkUrMRc3ayMPvEb5wRNYVwHaE7?r=0&pid=Api&h=220&P=0",
    Ukraine: "https://tse4.mm.bing.net/th/id/OIP.6yAVidk6vUfjLFPo-dnVbAHaE7?r=0&pid=Api&h=220&P=0",
    Italy: "https://tse4.mm.bing.net/th/id/OIP.NmgcZMzgaU9Hd8eVk6Ua4AHaE8?r=0&pid=Api&h=220&P=0",
    Japan: "https://tse3.mm.bing.net/th/id/OIP.CQe2YZJTOcujPbi8F76ZIQHaEK?r=0&pid=Api&h=220&P=0",
    North_Korea: "https://tse1.mm.bing.net/th/id/OIP.0N2AtyiejT2F4lRviwBnvgHaE7?r=0&pid=Api&h=220&P=0",
    South_Korea: "https://tse2.mm.bing.net/th/id/OIP.P5kpQILueRwN9gSka3giwgHaE8?r=0&pid=Api&h=220&P=0",
    India: "https://static.vecteezy.com/system/resources/previews/016/591/159/original/national-flag-of-india-flat-color-icon-vector.jpg",
    Egypt: "egypt.png",
    Mexico: "mexico.png",
    Australia: "australia.png",
    Brazil: "brazil.png",
};

const mediumflags = {
    Austria: "https://up.yimg.com/ib/th/id/OIP.jD9X6SvWv85UFfZEq6rSmwHaFK?pid=Api&rs=1&c=1&qlt=95&w=151&h=105",
    Belgium: "https://i.pinimg.com/originals/1b/23/3f/1b233f2f6f4d3dfbf5d2ce6ea882ff99.png",
    Antarctica: "https://tse4.mm.bing.net/th/id/OIP.-5Z2HA199gTiT8R_snEdpAHaEc?r=0&pid=Api&h=220&P=0",
    UAE: "https://tse4.mm.bing.net/th/id/OIP.G-3ykFjR_WXiEgOdEET4PAHaE7?r=0&pid=Api&h=220&P=0",
    Bahamas: "https://tse2.mm.bing.net/th/id/OIP.M2RFXlycJCqGkXGmDDRBxQHaDt?r=0&pid=Api&h=220&P=0",
    Chile: "https://tse3.mm.bing.net/th/id/OIP.AfF2en4t_Gn0h9lsl0kO-wHaE8?r=0&pid=Api&h=220&P=0",
    Czechia: "https://tse3.mm.bing.net/th/id/OIP.8pfceUXK1mWfDkitkj0B2QHaEW?r=0&pid=Api&h=220&P=0",
    Ecuador: "https://tse3.mm.bing.net/th/id/OIP.ozi9j7YM5QFtof-vw9USpwHaE7?r=0&pid=Api&h=220&P=0",
    Denmark: "https://tse4.mm.bing.net/th/id/OIP.ZhzMQ4HmN8bquGc640U3dQHaE7?r=0&pid=Api&h=220&P=0",
    Estonia: "https://tse2.mm.bing.net/th/id/OIP.a0GNtwWvS1LlfwRQzyzGEAHaEK?r=0&pid=Api&h=220&P=0",
    Finland: "https://tse3.mm.bing.net/th/id/OIP.jtgwr8DzWeyiNICWSjtxdgHaEK?r=0&pid=Api&h=220&P=0",
    Georgia: "https://tse4.mm.bing.net/th/id/OIP.z7DL42cSGv7Udr5FR15ccAHaEK?r=0&pid=Api&h=220&P=0",
    Ghana: "https://tse2.mm.bing.net/th/id/OIP.SwQllH0x_s8vFaKg7QxzKwHaEK?r=0&pid=Api&h=220&P=0",
    Guatemala: "https://tse4.mm.bing.net/th/id/OIP.zUnls0Z1mITrUlKRbJ4E7QHaFj?r=0&pid=Api&h=220&P=0",
    Croatia: "https://tse2.mm.bing.net/th/id/OIP.NX7E9Xh0qM4tPFlkUtUG6AHaDt?r=0&pid=Api&h=220&P=0",
    Indonesia: "https://tse3.mm.bing.net/th/id/OIP.ElCOMqvy5nK0QHlAwZ5WowHaE7?r=0&pid=Api&h=220&P=0",
    Haiti: "https://tse1.mm.bing.net/th/id/OIP.NU0FLFhbdSUo7tPglQuTjQHaEK?r=0&pid=Api&h=220&P=0",
    Iceland: "https://tse1.mm.bing.net/th/id/OIP.OUM7VHS1SP4voKufZiLOdgHaEc?r=0&pid=Api&h=220&P=0",
    Iran: "https://tse3.mm.bing.net/th/id/OIP.7caLiBaqQ39kPCMbZb3daAHaEO?r=0&pid=Api&h=220&P=0",
    Iraq: "https://tse3.mm.bing.net/th/id/OIP.JadRPMlloO7gYr2SW80VKAHaEK?r=0&pid=Api&h=220&P=0",
    Jamaica: "https://tse1.mm.bing.net/th/id/OIP.aGWsuFY3MAjbwAXmiYm7VAHaEK?r=0&pid=Api&h=220&P=0",
    Jordan: "https://tse4.mm.bing.net/th/id/OIP.9IeYEQ2YxiWCidUeIgSexwHaEK?r=0&pid=Api&h=220&P=0",
    Kenya: "https://tse4.mm.bing.net/th/id/OIP.4DPttAY0HBZYDoUDNVOMzwHaE7?r=0&pid=Api&h=220&P=0",
    Liechtenstein: "https://tse3.mm.bing.net/th/id/OIP.qCBMWizh0q8njTeeNLkQHwHaEK?r=0&pid=Api&h=220&P=0",
    Lithuania: "https://tse1.mm.bing.net/th/id/OIP.VC6zFptxKAkEcH8ZtD9jEgHaEK?r=0&pid=Api&h=220&P=0",
    Luxembourg: "https://tse4.mm.bing.net/th/id/OIP.6ma5Nm5CiQTyZxoMXPcOJAHaEo?r=0&pid=Api&h=220&P=0",
    Latvia: "https://tse4.mm.bing.net/th/id/OIP.KIvazwzjUUCojVOB__dS3AHaE7?r=0&pid=Api&h=220&P=0",
    Morocco: "https://tse4.mm.bing.net/th/id/OIP.KTcaRM0I1VjA0i2cNIBg8gHaE7?r=0&pid=Api&h=220&P=0",
    Monaco: "https://tse4.mm.bing.net/th/id/OIP.w9FZek-bDyMBf2bI4Vj6RwHaE8?r=0&pid=Api&h=220&P=0",
    Mongolia: "https://tse3.mm.bing.net/th/id/OIP.nncUV_EvxJCSBM1NFX3qzAHaFj?r=0&pid=Api&h=220&P=0",
    Malta: "https://tse1.mm.bing.net/th/id/OIP.k9yuSEf7tZNXazfnTAkTNQHaFJ?r=0&pid=Api&h=220&P=0",
    Malaysia: "https://tse1.mm.bing.net/th/id/OIP.9VraLdYKQOcohUZZ9UN5lQHaDt?r=0&pid=Api&h=220&P=0",
    Niger: "https://tse3.mm.bing.net/th/id/OIP.ksES8OLxS3MT2AsPiyjBhgHaE7?r=0&pid=Api&h=220&P=0",
    Nigeria: "https://tse2.mm.bing.net/th/id/OIP.jEwzU1sIqeltF3HHff5xxQHaE8?r=0&pid=Api&h=220&P=0",
    Nicaragua: "https://tse2.mm.bing.net/th/id/OIP.4oMXlYYlYqvnaHKoIN4lGAHaEK?r=0&pid=Api&h=220&P=0",
    Netherlands: "https://tse2.mm.bing.net/th/id/OIP.3K7R7kS2RPjxaimAe6XtIwHaE8?r=0&pid=Api&h=220&P=0",
    Norway: "https://tse4.mm.bing.net/th/id/OIP.7KEzmCKJfoOioY5KHEs2vQHaEK?r=0&pid=Api&h=220&P=0",
    Nepal: "https://tse4.mm.bing.net/th/id/OIP.asHwn5c3qxOSdzlbhS92YwHaHa?r=0&pid=Api&h=220&P=0",
    New_Zealand: "https://tse1.mm.bing.net/th/id/OIP.zW1Txizsp5eFM9Acle0DcQHaDt?r=0&pid=Api&h=220&P=0",
    Peru: "https://tse1.mm.bing.net/th/id/OIP.lWGH24e-bfR5EgGAYWdwdgHaEo?r=0&pid=Api&h=220&P=0",
    Philippines: "https://tse2.mm.bing.net/th/id/OIP.eCvHPkxnjbmhKouSiEXMvQHaEK?r=0&pid=Api&h=220&P=0",
    Pakistan: "https://cdn.pixabay.com/photo/2015/01/14/22/42/pakistan-599684_1280.png",
    Poland: "https://tse1.mm.bing.net/th/id/OIP.9KQkJsY-FvBlc59pdyKVVgHaEo?r=0&pid=Api&h=220&P=0",
    Puerto_Rico: "https://tse2.mm.bing.net/th/id/OIP.MS5ekQMU6f_kjvxVSAIrKAHaE8?r=0&pid=Api&h=220&P=0",
    Palestine: "https://tse4.mm.bing.net/th/id/OIP.nueNU-FHb-iYI0pJJPQbzwHaEK?r=0&pid=Api&h=220&P=0",
    Portugal: "https://tse3.mm.bing.net/th/id/OIP.9LYt4LKisZ4EuQfgrfE6ewHaE8?r=0&pid=Api&h=220&P=0",
    Paraguay: "https://tse1.mm.bing.net/th/id/OIP.2bR5-F41nVmBBA0mmkLfggHaD5?r=0&pid=Api&h=220&P=0",
    Romania: "https://tse3.mm.bing.net/th/id/OIP.yGRJPrAjonm27rdfwnP31gHaE8?r=0&pid=Api&h=220&P=0",
    Serbia: "https://www.citypng.com/public/uploads/preview/hd-serbia-national-flag-png-11656557239bvfyz8u5je.png",
    Sudan: "https://tse2.mm.bing.net/th/id/OIP.b2odtSdaoNO5JBdKvxukFwHaE7?r=0&pid=Api&h=220&P=0",
    Singapore: "https://tse4.mm.bing.net/th/id/OIP.o1ipaicggZNI0RSst3vqJgHaEo?r=0&pid=Api&h=220&P=0",
    Slovenia: "https://tse4.mm.bing.net/th/id/OIP.UT5Y43L_I0KxXhIUk8vccAHaEF?r=0&pid=Api&h=220&P=0",
    Slovakia: "https://tse2.mm.bing.net/th/id/OIP.J61VKtGRdshJisPrf63uTwHaE8?r=0&pid=Api&h=220&P=0",
    Syria: "https://tse1.mm.bing.net/th/id/OIP.znvbCnFsw1QMQ6ui_hl7MAHaEu?r=0&pid=Api&h=220&P=0",
    Thailand: "https://tse1.mm.bing.net/th/id/OIP.9NZzrOEqH7UPqP7QO4J18AHaE8?r=0&pid=Api&h=220&P=0",
    Turkmenistan: "https://tse3.mm.bing.net/th/id/OIP.j_rkbq9C1myfUApi9vWUlAHaEC?r=0&pid=Api&h=220&P=0",
    Taiwan: "https://tse3.mm.bing.net/th/id/OIP.CEIzkm4c8sPNiF5oookeuAHaEj?r=0&pid=Api&h=220&P=0",
    Uganda: "https://tse2.mm.bing.net/th/id/OIP.gw5hq4XfPjg7bX_6fjkYWgHaE8?r=0&pid=Api&h=220&P=0",
    Venezuela: "https://tse1.mm.bing.net/th/id/OIP.9alWhV3SBLXPmg6rBqmqXgHaEK?r=0&pid=Api&h=220&P=0",
    Vietnam: "https://pixnio.com/free-images/flags-of-the-world/flag-of-vietnam.jpg",
    Yemen: "https://tse1.mm.bing.net/th/id/OIP.ZcluVYmASaZxLRncsWkGogHaD7?r=0&pid=Api&h=220&P=0",
    South_africa: "https://tse1.mm.bing.net/th/id/OIP.f8A9gVe_etPVSePCSoI7xQHaE8?r=0&pid=Api&h=220&P=0",
};
const hardflags = {
    Democratic_Republic_of_Congo: "https://up.yimg.com/ib/th/id/OIP.kJuocRLjvk7LGgLqkManhwHaFj?pid=Api&rs=1&c=1&qlt=95&w=162&h=121",
    Tanzania: "https://www.countryflags.com/countryflags-file/countryflags/tanzania/flag-webp-xs.webp?v=6aa82285-652",
    Angola: "https://up.yimg.com/ib/th/id/OIP.cmPMtv83z2id0tlpIyc4YgHaE8?pid=Api&rs=1&c=1&qlt=95&w=161&h=107",
    Mozambique: "https://www.countryflags.com/countryflags-file/countryflags/mozambique/flag-webp-xs.webp?v=6aa82293-1572",
    Ivory_Coast: "https://www.countryflags.com/countryflags-file/countryflags/ivoorkust/flag-png-medium.png?v=6aa1aa62-efa",
    Cameroon: "https://www.countryflags.com/countryflags-file/countryflags/kameroen/flag-webp-xs.webp?v=6aa82294-2f0",
    Mali: "https://www.countryflags.com/countryflags-file/countryflags/mali/flag-webp-xs.webp?v=6aa82298-74",
    Malawi: "https://www.countryflags.com/countryflags-file/countryflags/malawi/flag-webp-xs.webp?v=6aa8350c-df6",
    Zambia: "https://www.countryflags.com/countryflags-file/countryflags/zambia/flag-webp-xs.webp?v=6aa8350c-a8e",
    Guinea: "https://www.countryflags.com/countryflags-file/countryflags/guinee/flag-webp-xs.webp?v=6aa82298-74",
    Namibia: "https://www.countryflags.com/countryflags-file/countryflags/namibie/flag-webp-xs.webp?v=6aa822b5-ffc",
    Gambia: "https://www.countryflags.com/countryflags-file/countryflags/gambia/flag-webp-xs.webp?v=6aa83585-a2",
    Guinea_bissau: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/1280px-Flag_of_Guinea-Bissau.svg.png",
    Western_Sahara: "https://www.countryflags.com/countryflags-file/countryflags/westelijke-sahara/flag-webp-xs.webp?v=6aa835fb-5ee",
    Uzbekistan: "https://country-flags.org/downloads/uzbekistan-flag/raster/uzbekistan-flag-2560px-1280px.jpg",
    Kazakhstan: "https://www.countryflags.com/countryflags-file/countryflags/kazachstan/flag-webp-xs.webp?v=6aa82298-1c16",
    Cambodia: "https://www.worldatlas.com/upload/82/f9/1e/shutterstock-391563562.jpg",
    Tajikistan: "https://www.countryflags.com/countryflags-file/countryflags/tadzjikistan/flag-webp-xs.webp?v=6aa82298-634",
    Lebanon: "https://www.countryflags.com/countryflags-file/countryflags/libanon/flag-webp-xs.webp?v=6aa833ea-f28",
    Oman: "https://www.countryflags.com/countryflags-file/countryflags/oman/flag-webp-xs.webp?v=6aa833ea-732",
    Timor_Leste: "https://www.countryflags.com/countryflags-file/countryflags/oost-timor/flag-webp-xs.webp?v=6aa83585-5be",
    Macau: "https://www.countryflags.com/countryflags-file/countryflags/macau-sar-van-china/flag-webp-xs.webp?v=6aa835fb-302",
    Brunei: "https://www.countryflags.com/countryflags-file/countryflags/brunei/flag-webp-xs.webp?v=6aa83598-1b72",
    Maldives: "https://www.countryflags.com/countryflags-file/countryflags/maldiven/flag-png-medium.png?v=6aa1aae0-294c",
    Romania: "https://up.yimg.com/ib/th/id/OIP.Gsy04uBPPGr8x8eQTFZ1UAHaE8?pid=Api&rs=1&c=1&qlt=95&w=149&h=99",
    Belarus: "https://www.countryflags.com/countryflags-file/countryflags/belarus/flag-webp-xs.webp?v=6aa8202f-1196",
    Hungary: "https://www.countryflags.com/countryflags-file/countryflags/hongarije/flag-webp-xs.webp?v=6aa8352f-74",
    Bulgaria: "https://www.countryflags.com/countryflags-file/countryflags/bulgarije/flag-webp-xs.webp?v=6aa8202f-80",
    Wales: "https://www.countryflags.com/countryflags-file/countryflags/wales/flag-webp-xs.webp?v=6aa834ed-d1e",
    Moldova: "https://www.countryflags.com/countryflags-file/countryflags/moldavie/flag-webp-xs.webp?v=6aa822b5-18f6",
    Montenegro: "https://www.countryflags.com/countryflags-file/countryflags/montenegro/flag-webp-xs.webp?v=6aa83568-1df2",
    Isle_of_man: "https://www.countryflags.com/countryflags-file/countryflags/isle-of-man/flag-webp-xs.webp?v=6aa8358e-18a4",
    Vatican_City: "https://www.countryflags.com/countryflags-file/countryflags/vaticaanstad/flag-webp-xs.webp?v=6aa8358f-40a4",
    Trinidad_and_Tobago: "https://www.countryflags.com/countryflags-file/countryflags/trinidad-en-tobago/flag-webp-xs.webp?v=6aa83585-d20",
    Belize: "https://www.countryflags.com/countryflags-file/countryflags/belize/flag-webp-xs.webp?v=6aa83598-3bcc",
    Grenada: "https://www.countryflags.com/countryflags-file/countryflags/grenada/flag-png-large.png?v=6aa1aaa5-1667c",
    Saint_Vincent_and_the_Grenadines: "https://www.countryflags.com/countryflags-file/countryflags/saint-vincent-en-de-grenadines/flag-webp-xs.webp?v=6aa83617-3dc",
    Antigua_and_Barbuda: "https://www.countryflags.com/countryflags-file/countryflags/antigua-en-barbuda/flag-webp-xs.webp?v=6aa83598-d50",
    Saint_Kitts_and_Nevis: "https://www.countryflags.com/countryflags-file/countryflags/saint-kitts-en-nevis/flag-webp-xs.webp?v=6aa83626-a54",
    Vanuatu: "https://www.countryflags.com/countryflags-file/countryflags/vanuatu/flag-webp-xs.webp?v=6aa83617-35e",
    Solomon_Islands: "https://www.countryflags.com/countryflags-file/countryflags/salomonseilanden/flag-webp-xs.webp?v=6aa835fb-cee",
    Samoa: "https://www.countryflags.com/countryflags-file/countryflags/samoa/flag-webp-xs.webp?v=6aa83617-57a",
    Kiribati: "https://www.countryflags.com/countryflags-file/countryflags/kiribati/flag-webp-xs.webp?v=6aa835fe-204e",
    Tonga: "https://www.countryflags.com/countryflags-file/countryflags/tonga/flag-webp-xs.webp?v=6aa83617-146",
    Marshall_Islands: "https://www.countryflags.com/countryflags-file/countryflags/marshalleilanden/flag-webp-xs.webp?v=6aa835fe-2910",
    Palau: "https://www.countryflags.com/countryflags-file/countryflags/palau/flag-png-medium.png?v=6aa1ab1b-3ae0",
    Tuvalu: "https://www.countryflags.com/countryflags-file/countryflags/tuvalu/flag-webp-xs.webp?v=6aa83626-1752",
    Guyana: "https://www.countryflags.com/countryflags-file/countryflags/guyana/flag-webp-xs.webp?v=6aa8231c-15c2",
    Suriname: "https://www.countryflags.com/countryflags-file/countryflags/suriname/flag-webp-xs.webp?v=6aa835fb-434",
    North_Macedonia: "https://www.countryflags.com/countryflags-file/countryflags/noord-macedonie/flag-webp-xs.webp?v=6aa83568-b62",   
}
const europeFlags = {
    Romania: "https://www.countryflags.com/countryflags-file/countryflags/roemenie/flag-webp-xs.webp?v=6aa8350c-70",
    Belarus: "https://www.countryflags.com/countryflags-file/countryflags/belarus/flag-webp-xs.webp?v=6aa8202f-1196",
    Hungary: "https://www.countryflags.com/countryflags-file/countryflags/hongarije/flag-webp-xs.webp?v=6aa8352f-74",
    Bulgaria: "https://www.countryflags.com/countryflags-file/countryflags/bulgarije/flag-webp-xs.webp?v=6aa8202f-80",
    Wales: "https://www.countryflags.com/countryflags-file/countryflags/wales/flag-webp-xs.webp?v=6aa834ed-d1e",
    Moldova: "https://www.countryflags.com/countryflags-file/countryflags/moldavie/flag-webp-xs.webp?v=6aa822b5-18f6",
    Montenegro: "https://www.countryflags.com/countryflags-file/countryflags/montenegro/flag-webp-xs.webp?v=6aa83568-1df2",
    Isle_of_man: "https://www.countryflags.com/countryflags-file/countryflags/isle-of-man/flag-webp-xs.webp?v=6aa8358e-18a4",
    Vatican_City: "https://www.countryflags.com/countryflags-file/countryflags/vaticaanstad/flag-webp-xs.webp?v=6aa8358f-40a4",
    North_Macedonia: "https://www.countryflags.com/countryflags-file/countryflags/noord-macedonie/flag-webp-xs.webp?v=6aa83568-b62", 
    France: "france.png",
    UK: "unitedkingdom.png",
    Ireland: "ireland.png",
    Russia: "russia.png",
    Germany: "germany.png",
    Spain: "spain.png",
    Greece: "greece.png",
    Sweden: "https://tse4.mm.bing.net/th/id/OIP.qkUrMRc3ayMPvEb5wRNYVwHaE7?r=0&pid=Api&h=220&P=0",
    Ukraine: "https://tse4.mm.bing.net/th/id/OIP.6yAVidk6vUfjLFPo-dnVbAHaE7?r=0&pid=Api&h=220&P=0",
    Italy: "https://tse4.mm.bing.net/th/id/OIP.NmgcZMzgaU9Hd8eVk6Ua4AHaE8?r=0&pid=Api&h=220&P=0",
}
const africaFlags = {

}
const asiaFlags = {

}
const northFlags = {

}
const southFlags = {

}
const oceaniaFlags = {

}
let total = 0;
let correct = 0;

function sleep(time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

function getRandomCountry(dictionaryflag, previousflag) 
{
    const entries = Object.entries(dictionaryflag);
    let image = entries[Math.floor(Math.random() * entries.length)];
    while (image[0] == previousflag)
    {
        const entries = Object.entries(dictionaryflag);
        image = entries[Math.floor(Math.random() * entries.length)];
    }

    return image;
}

function renderFlag(country, url) 
{
    const container = document.querySelector("#flags");
    const img = document.createElement("img");
    img.src = url;
    img.alt = country + 'flag';
    img.style.width = '600px';
    img.style.height = '300px';
    container.innerHTML = "";
    container.appendChild(img);
}

function changeCountry(dictionaryflag) {
    let right = document.querySelector("#correct");
    let sorry = document.querySelector("#sorry");
    const guessInput = document.querySelector("#guess");
    const form = document.querySelector("#guessbox");
    const stop = document.querySelector("#stop");
    const change = document.querySelector("#change");
    
    const [country, url] = getRandomCountry(dictionaryflag);

    renderFlag(country, url);
    
    right.style.visibility = 'hidden';
    sorry.style.visibility = 'hidden';
    

    
    form.onsubmit = async function (event) {
        event.preventDefault();
        const answer = guessInput.value.trim().toLowerCase().replaceAll(" ", "_");
        let previousflag = country;

        if (answer == country.toLowerCase() || country == 'UAE' && answer == 'united_arab_emirates' || country == 'US' && answer == 'united_states' || country == 'UK' && answer == 'united_kingdom' || country == 'Democratic_Republic_of_Congo' && answer == "drc") {
            right.style.visibility = 'visible';
            correct++;
        } 
        else {
            sorry.style.visibility = 'visible';
            sorry.innerHTML = 'Incorrect, this is ' + country.replaceAll("_", " ");

        }
        total++;

        guessInput.value = "";
        
        await sleep(400);

        changeCountry(dictionaryflag, previousflag);
    }
    stop.onclick = async function (event) {
        if (total == 0)
        {
            alert("Please answer atleast 1 question.");
            await sleep(2000);
            changeCountry(dictionaryflag, previousflag);
            return;
        }
        change.href = 'congrats.html'
        sessionStorage.setItem('quizResult', JSON.stringify({correct , total}));
    }
    } 
if (isMedium)
{
    changeCountry(mediumflags);
}
else if (isEasy)
{
    changeCountry(easyflags); /// 20 flags 
}
else if (isHard)
{
    changeCountry(hardflags);
}
else if(isAfrica)
{
    changeCountry(africaFlags);
}
else if(isAsia)
{
    changeCountry(asiaFlags);
}
else if(isEurope)
{
    changeCountry(europeFlags);
}
else if(isNorthA)
{
    changeCountry(northFlags);
}
else if(isSouthA)
{
    changeCountry(southFlags);
}
else
{

}


