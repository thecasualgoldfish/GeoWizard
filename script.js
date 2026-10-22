const flag = (countryCode) => `flags/${countryCode}.svg`;

const easyflags = {
    US: flag("us"),
    Argentina: flag("ar"),
    France: flag("fr"),
    UK: flag("gb"),
    Ireland: flag("ie"),
    Russia: flag("ru"),
    Germany: flag("de"),
    Spain: flag("es"),
    Greece: flag("gr"),
    Sweden: flag("se"),
    Ukraine: flag("ua"),
    Italy: flag("it"),
    Japan: flag("jp"),
    North_Korea: flag("kp"),
    South_Korea: flag("kr"),
    India: flag("in"),
    Egypt: flag("eg"),
    Mexico: flag("mx"),
    Australia: flag("au"),
    Brazil: flag("br"),
};

const mediumflags = {
    Austria: flag("at"),
    Belgium: flag("be"),
    Antarctica: flag("aq"),
    UAE: flag("ae"),
    Bahamas: flag("bs"),
    Chile: flag("cl"),
    Czechia: flag("cz"),
    Ecuador: flag("ec"),
    Denmark: flag("dk"),
    Estonia: flag("ee"),
    Finland: flag("fi"),
    Georgia: flag("ge"),
    Ghana: flag("gh"),
    Guatemala: flag("gt"),
    Croatia: flag("hr"),
    Indonesia: flag("id"),
    Haiti: flag("ht"),
    Iceland: flag("is"),
    Iran: flag("ir"),
    Iraq: flag("iq"),
    Jamaica: flag("jm"),
    Jordan: flag("jo"),
    Kenya: flag("ke"),
    Liechtenstein: flag("li"),
    Lithuania: flag("lt"),
    Luxembourg: flag("lu"),
    Latvia: flag("lv"),
    Morocco: flag("ma"),
    Monaco: flag("mc"),
    Mongolia: flag("mn"),
    Malta: flag("mt"),
    Malaysia: flag("my"),
    Niger: flag("ne"),
    Nigeria: flag("ng"),
    Nicaragua: flag("ni"),
    Netherlands: flag("nl"),
    Norway: flag("no"),
    Nepal: flag("np"),
    New_Zealand: flag("nz"),
    Peru: flag("pe"),
    Philippines: flag("ph"),
    Pakistan: flag("pk"),
    Poland: flag("pl"),
    Puerto_Rico: flag("pr"),
    Palestine: flag("ps"),
    Portugal: flag("pt"),
    Paraguay: flag("py"),
    Romania: flag("ro"),
    Serbia: flag("rs"),
    Sudan: flag("sd"),
    Singapore: flag("sg"),
    Slovenia: flag("si"),
    Slovakia: flag("sk"),
    Syria: flag("sy"),
    Thailand: flag("th"),
    Turkmenistan: flag("tm"),
    Taiwan: flag("tw"),
    Uganda: flag("ug"),
    Venezuela: flag("ve"),
    Vietnam: flag("vn"),
    Yemen: flag("ye"),
    South_africa: flag("za"),
};

const hardflags = {
    Democratic_Republic_of_Congo: flag("cd"),
    Tanzania: flag("tz"),
    Angola: flag("ao"),
    Mozambique: flag("mz"),
    Ivory_Coast: flag("ci"),
    Cameroon: flag("cm"),
    Mali: flag("ml"),
    Malawi: flag("mw"),
    Zambia: flag("zm"),
    Guinea: flag("gn"),
    Namibia: flag("na"),
    Gambia: flag("gm"),
    Guinea_bissau: flag("gw"),
    Western_Sahara: flag("eh"),
    Uzbekistan: flag("uz"),
    Kazakhstan: flag("kz"),
    Cambodia: flag("kh"),
    Tajikistan: flag("tj"),
    Lebanon: flag("lb"),
    Oman: flag("om"),
    Timor_Leste: flag("tl"),
    Macau: flag("mo"),
    Brunei: flag("bn"),
    Maldives: flag("mv"),
    Romania: flag("ro"),
    Belarus: flag("by"),
    Hungary: flag("hu"),
    Bulgaria: flag("bg"),
    Wales: flag("gb-wls"),
    Moldova: flag("md"),
    Montenegro: flag("me"),
    Isle_of_man: flag("im"),
    Vatican_City: flag("va"),
    Trinidad_and_Tobago: flag("tt"),
    Belize: flag("bz"),
    Grenada: flag("gd"),
    Saint_Vincent_and_the_Grenadines: flag("vc"),
    Antigua_and_Barbuda: flag("ag"),
    Saint_Kitts_and_Nevis: flag("kn"),
    Vanuatu: flag("vu"),
    Solomon_Islands: flag("sb"),
    Samoa: flag("ws"),
    Kiribati: flag("ki"),
    Tonga: flag("to"),
    Marshall_Islands: flag("mh"),
    Palau: flag("pw"),
    Tuvalu: flag("tv"),
    Guyana: flag("gy"),
    Suriname: flag("sr"),
    North_Macedonia: flag("mk"),
};

const europeFlags = {
    Albania: flag("al"),
    Aland_Islands: flag("ax"),
    Andorra: flag("ad"),
    Bosnia_and_Herzegovina: flag("ba"),
    Romania: flag("ro"),
    Belarus: flag("by"),
    Hungary: flag("hu"),
    Bulgaria: flag("bg"),
    Switzerland: flag("ch"),
    Czechia: flag("cz"),
    Faroe_Islands: flag("fo"),
    England: flag("gb-eng"),
    Northern_Ireland: flag("gb-nir"),
    Scotland: flag("gb-sct"),
    Wales: flag("gb-wls"),
    Guernsey: flag("gg"),
    Gibraltar: flag("gi"),
    Georgia: flag("ge"),
    Jersey: flag("je"),
    Moldova: flag("md"),
    Montenegro: flag("me"),
    Isle_of_man: flag("im"),
    Vatican_City: flag("va"),
    North_Macedonia: flag("mk"),
    Svalbard_and_Jan_Mayen: flag("sj"),
    San_Marino: flag("sm"),
    Kosovo: flag("xk"),
    France: flag("fr"),
    UK: flag("gb"),
    Ireland: flag("ie"),
    Russia: flag("ru"),
    Germany: flag("de"),
    Spain: flag("es"),
    Greece: flag("gr"),
    Sweden: flag("se"),
    Ukraine: flag("ua"),
    Italy: flag("it"),
    Austria: flag("at"),
    Belgium: flag("be"),
    Denmark: flag("dk"),
    Estonia: flag("ee"),
    Finland: flag("fi"),
    Croatia: flag("hr"),
    Iceland: flag("is"),
    Liechtenstein: flag("li"),
    Lithuania: flag("lt"),
    Luxembourg: flag("lu"),
    Latvia: flag("lv"),
    Monaco: flag("mc"),
    Netherlands: flag("nl"),
    Norway: flag("no"),
    Malta: flag("mt"),
    Poland: flag("pl"),
    Portugal: flag("pt"),
    Serbia: flag("rs"),
    Slovenia: flag("si"),
    Slovakia: flag("sk"),
};

const africaFlags = {
    Algeria: flag("dz"),
    Angola: flag("ao"),
    Benin: flag("bj"),
    Botswana: flag("bw"),
    Burkina_Faso: flag("bf"),
    Burundi: flag("bi"),
    Cameroon: flag("cm"),
    Cape_Verde: flag("cv"),
    Central_African_Republic: flag("cf"),
    Chad: flag("td"),
    Comoros: flag("km"),
    Democratic_Republic_of_Congo: flag("cd"),
    Republic_of_the_Congo: flag("cg"),
    Ivory_Coast: flag("ci"),
    Djibouti: flag("dj"),
    Egypt: flag("eg"),
    Equatorial_Guinea: flag("gq"),
    Eritrea: flag("er"),
    Eswatini: flag("sz"),
    Ethiopia: flag("et"),
    Gabon: flag("ga"),
    Gambia: flag("gm"),
    Ghana: flag("gh"),
    Guinea: flag("gn"),
    Guinea_bissau: flag("gw"),
    Kenya: flag("ke"),
    Lesotho: flag("ls"),
    Liberia: flag("lr"),
    Libya: flag("ly"),
    Madagascar: flag("mg"),
    Malawi: flag("mw"),
    Mali: flag("ml"),
    Mauritania: flag("mr"),
    Mauritius: flag("mu"),
    Mayotte: flag("yt"),
    Morocco: flag("ma"),
    Mozambique: flag("mz"),
    Namibia: flag("na"),
    Niger: flag("ne"),
    Nigeria: flag("ng"),
    Reunion: flag("re"),
    Rwanda: flag("rw"),
    Saint_Helena: flag("sh"),
    Sao_Tome_and_Principe: flag("st"),
    Senegal: flag("sn"),
    Seychelles: flag("sc"),
    Sierra_Leone: flag("sl"),
    Somalia: flag("so"),
    South_Africa: flag("za"),
    South_Sudan: flag("ss"),
    Sudan: flag("sd"),
    Tanzania: flag("tz"),
    Togo: flag("tg"),
    Tunisia: flag("tn"),
    Uganda: flag("ug"),
    Western_Sahara: flag("eh"),
    Zambia: flag("zm"),
    Zimbabwe: flag("zw"),
};

const asiaFlags = {
    Afghanistan: flag("af"),
    Armenia: flag("am"),
    Azerbaijan: flag("az"),
    Bahrain: flag("bh"),
    Bangladesh: flag("bd"),
    Bhutan: flag("bt"),
    British_Indian_Ocean_Territory: flag("io"),
    Brunei: flag("bn"),
    Cambodia: flag("kh"),
    China: flag("cn"),
    Christmas_Island: flag("cx"),
    Cocos_Islands: flag("cc"),
    Cyprus: flag("cy"),
    Hong_Kong: flag("hk"),
    India: flag("in"),
    Indonesia: flag("id"),
    Iran: flag("ir"),
    Iraq: flag("iq"),
    Israel: flag("il"),
    Japan: flag("jp"),
    Jordan: flag("jo"),
    Kazakhstan: flag("kz"),
    Kyrgyzstan: flag("kg"),
    Kuwait: flag("kw"),
    Laos: flag("la"),
    Lebanon: flag("lb"),
    Macau: flag("mo"),
    Malaysia: flag("my"),
    Maldives: flag("mv"),
    Mongolia: flag("mn"),
    Myanmar: flag("mm"),
    Nepal: flag("np"),
    North_Korea: flag("kp"),
    Oman: flag("om"),
    Pakistan: flag("pk"),
    Palestine: flag("ps"),
    Philippines: flag("ph"),
    Qatar: flag("qa"),
    Saudi_Arabia: flag("sa"),
    Singapore: flag("sg"),
    South_Korea: flag("kr"),
    Sri_Lanka: flag("lk"),
    Syria: flag("sy"),
    Taiwan: flag("tw"),
    Tajikistan: flag("tj"),
    Thailand: flag("th"),
    Timor_Leste: flag("tl"),
    Turkey: flag("tr"),
    Turkmenistan: flag("tm"),
    United_Arab_Emirates: flag("ae"),
    Uzbekistan: flag("uz"),
    Vietnam: flag("vn"),
    Yemen: flag("ye"),
};

const northFlags = {
    Anguilla: flag("ai"),
    Antigua_and_Barbuda: flag("ag"),
    Aruba: flag("aw"),
    Bahamas: flag("bs"),
    Barbados: flag("bb"),
    Belize: flag("bz"),
    Bermuda: flag("bm"),
    Bonaire_Sint_Eustatius_and_Saba: flag("bq"),
    Canada: flag("ca"),
    Cayman_Islands: flag("ky"),
    Costa_Rica: flag("cr"),
    Cuba: flag("cu"),
    Curacao: flag("cw"),
    Dominica: flag("dm"),
    Dominican_Republic: flag("do"),
    El_Salvador: flag("sv"),
    Greenland: flag("gl"),
    Grenada: flag("gd"),
    Guadeloupe: flag("gp"),
    Guatemala: flag("gt"),
    Haiti: flag("ht"),
    Honduras: flag("hn"),
    Jamaica: flag("jm"),
    Martinique: flag("mq"),
    Mexico: flag("mx"),
    Montserrat: flag("ms"),
    Nicaragua: flag("ni"),
    Panama: flag("pa"),
    Puerto_Rico: flag("pr"),
    Saint_Barthelemy: flag("bl"),
    Saint_Kitts_and_Nevis: flag("kn"),
    Saint_Lucia: flag("lc"),
    Saint_Martin: flag("mf"),
    Saint_Pierre_and_Miquelon: flag("pm"),
    Saint_Vincent_and_the_Grenadines: flag("vc"),
    Sint_Maarten: flag("sx"),
    Trinidad_and_Tobago: flag("tt"),
    Turks_and_Caicos_Islands: flag("tc"),
    United_States: flag("us"),
    United_States_Minor_Outlying_Islands: flag("um"),
    US_Virgin_Islands: flag("vi"),
    British_Virgin_Islands: flag("vg"),
};

const southFlags = {
    Argentina: flag("ar"),
    Bolivia: flag("bo"),
    Brazil: flag("br"),
    Chile: flag("cl"),
    Colombia: flag("co"),
    Ecuador: flag("ec"),
    Falkland_Islands: flag("fk"),
    French_Guiana: flag("gf"),
    Guyana: flag("gy"),
    Paraguay: flag("py"),
    Peru: flag("pe"),
    Pitcairn_Islands: flag("pn"),
    Suriname: flag("sr"),
    Uruguay: flag("uy"),
    Venezuela: flag("ve"),
};

const oceaniaFlags = {
    American_Samoa: flag("as"),
    Australia: flag("au"),
    Cook_Islands: flag("ck"),
    Fiji: flag("fj"),
    French_Polynesia: flag("pf"),
    Guam: flag("gu"),
    Heard_Island_and_McDonald_Islands: flag("hm"),
    Kiribati: flag("ki"),
    Marshall_Islands: flag("mh"),
    Micronesia: flag("fm"),
    Nauru: flag("nr"),
    New_Caledonia: flag("nc"),
    New_Zealand: flag("nz"),
    Niue: flag("nu"),
    Norfolk_Island: flag("nf"),
    Northern_Mariana_Islands: flag("mp"),
    Palau: flag("pw"),
    Papua_New_Guinea: flag("pg"),
    Samoa: flag("ws"),
    Solomon_Islands: flag("sb"),
    Tokelau: flag("tk"),
    Tonga: flag("to"),
    Tuvalu: flag("tv"),
    Vanuatu: flag("vu"),
    Wallis_and_Futuna: flag("wf"),
};

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
        
        await sleep(2000);

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
else if (isOceania)
{
    changeCountry(oceaniaFlags);
}
else 
{

}
