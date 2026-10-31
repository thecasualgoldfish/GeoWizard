const flag = (countryCode) => `flags/${countryCode}.svg`;
const europeCountries = [
    "aland islands",
    "albania",
    "andorra",
    "austria",
    "belarus",
    "belgium",
    "bosnia and herzegovina",
    "bulgaria",
    "croatia",
    "czechia",
    "denmark",
    "england",
    "estonia",
    "faroe islands",
    "finland",
    "france",
    "georgia",
    "germany",
    "gibraltar",
    "greece",
    "guernsey",
    "hungary",
    "iceland",
    "ireland",
    "isle of man",
    "italy",
    "jersey",
    "kosovo",
    "latvia",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "malta",
    "moldova",
    "monaco",
    "montenegro",
    "netherlands",
    "north macedonia",
    "northern ireland",
    "norway",
    "poland",
    "portugal",
    "romania",
    "russia",
    "san marino",
    "scotland",
    "serbia",
    "slovakia",
    "slovenia",
    "spain",
    "svalbard and jan mayen",
    "sweden",
    "switzerland",
    "uk",
    "ukraine",
    "united kingdom",
    "vatican city",
    "wales"
];

const africaCountries = [
    "algeria",
    "angola",
    "benin",
    "botswana",
    "burkina faso",
    "burundi",
    "cabo verde",
    "cameroon",
    "cape verde",
    "central african republic",
    "chad",
    "comoros",
    "democratic republic of congo",
    "djibouti",
    "egypt",
    "equatorial guinea",
    "eritrea",
    "eswatini",
    "ethiopia",
    "gabon",
    "gambia",
    "ghana",
    "guinea",
    "guinea bissau",
    "ivory coast",
    "kenya",
    "lesotho",
    "liberia",
    "libya",
    "madagascar",
    "malawi",
    "mali",
    "mauritania",
    "mauritius",
    "mayotte",
    "morocco",
    "mozambique",
    "namibia",
    "niger",
    "nigeria",
    "republic of the congo",
    "reunion",
    "rwanda",
    "sao tome and principe",
    "senegal",
    "seychelles",
    "sierra leone",
    "saint helena",
    "somalia",
    "south africa",
    "south sudan",
    "sudan",
    "tanzania",
    "togo",
    "tunisia",
    "uganda",
    "western sahara",
    "zambia",
    "zimbabwe"
];

const asiaCountries = [
    "afghanistan",
    "armenia",
    "azerbaijan",
    "bahrain",
    "bangladesh",
    "bhutan",
    "british indian ocean territory",
    "brunei",
    "cambodia",
    "china",
    "christmas island",
    "cocos islands",
    "cyprus",
    "hong kong",
    "india",
    "indonesia",
    "iran",
    "iraq",
    "israel",
    "japan",
    "jordan",
    "kazakhstan",
    "kuwait",
    "kyrgyzstan",
    "laos",
    "lebanon",
    "malaysia",
    "maldives",
    "macau",
    "mongolia",
    "myanmar",
    "nepal",
    "north korea",
    "oman",
    "pakistan",
    "palestine",
    "philippines",
    "qatar",
    "saudi arabia",
    "singapore",
    "south korea",
    "sri lanka",
    "syria",
    "tajikistan",
    "thailand",
    "timor leste",
    "turkey",
    "turkmenistan",
    "taiwan",
    "uae",
    "united arab emirates",
    "uzbekistan",
    "vietnam",
    "yemen"
];

const northCountries = [
    "anguilla",
    "antigua and barbuda",
    "aruba",
    "bahamas",
    "barbados",
    "belize",
    "bermuda",
    "bonaire sint eustatius and saba",
    "british virgin islands",
    "canada",
    "cayman islands",
    "costa rica",
    "cuba",
    "curacao",
    "dominica",
    "dominican republic",
    "el salvador",
    "greenland",
    "grenada",
    "guadeloupe",
    "guatemala",
    "haiti",
    "honduras",
    "jamaica",
    "martinique",
    "mexico",
    "montserrat",
    "nicaragua",
    "panama",
    "puerto rico",
    "saint barthelemy",
    "saint kitts and nevis",
    "saint lucia",
    "saint martin",
    "saint pierre and miquelon",
    "saint vincent and the grenadines",
    "sint maarten",
    "trinidad and tobago",
    "turks and caicos islands",
    "united states",
    "united states minor outlying islands",
    "us",
    "us virgin islands"
];

const southCountries = [
    "argentina",
    "bolivia",
    "brazil",
    "chile",
    "colombia",
    "ecuador",
    "falkland islands",
    "french guiana",
    "guyana",
    "paraguay",
    "peru",
    "suriname",
    "uruguay",
    "venezuela"
];

const oceaniaCountries = [
    "american samoa",
    "australia",
    "cook islands",
    "fiji",
    "french polynesia",
    "guam",
    "heard island and mcdonald islands",
    "kiribati",
    "marshall islands",
    "micronesia",
    "nauru",
    "new zealand",
    "new caledonia",
    "niue",
    "norfolk island",
    "northern mariana islands",
    "palau",
    "papua new guinea",
    "pitcairn islands",
    "samoa",
    "solomon islands",
    "tokelau",
    "tonga",
    "tuvalu",
    "vanuatu",
    "wallis and futuna"
];

const stateOutlines = {
    Alabama: "https://borderly.dev/al.svg",
    Alaska: "https://borderly.dev/ak.svg",
    Arizona: "https://borderly.dev/az.svg",
    Arkansas: "https://borderly.dev/ar.svg",
    California: "https://borderly.dev/ca.svg",
    Colorado: "https://borderly.dev/co.svg",
    Connecticut: "https://borderly.dev/ct.svg",
    Delaware: "https://borderly.dev/de.svg",
    Florida: "https://borderly.dev/fl.svg",
    Georgia: "https://borderly.dev/ga.svg",
    Hawaii: "https://borderly.dev/hi.svg",
    Idaho: "https://borderly.dev/id.svg",
    Illinois: "https://borderly.dev/il.svg",
    Indiana: "https://borderly.dev/in.svg",
    Iowa: "https://borderly.dev/ia.svg",
    Kansas: "https://borderly.dev/ks.svg",
    Kentucky: "https://borderly.dev/ky.svg",
    Louisiana: "https://borderly.dev/la.svg",
    Maine: "https://borderly.dev/me.svg",
    Maryland: "https://borderly.dev/md.svg",
    Massachusetts: "https://borderly.dev/ma.svg",
    Michigan: "https://borderly.dev/mi.svg",
    Minnesota: "https://borderly.dev/mn.svg",
    Mississippi: "https://borderly.dev/ms.svg",
    Missouri: "https://borderly.dev/mo.svg",
    Montana: "https://borderly.dev/mt.svg",
    Nebraska: "https://borderly.dev/ne.svg",
    Nevada: "https://borderly.dev/nv.svg",
    New_Hampshire: "https://borderly.dev/nh.svg",
    New_Jersey: "https://borderly.dev/nj.svg",
    New_Mexico: "https://borderly.dev/nm.svg",
    New_York: "https://borderly.dev/ny.svg",
    North_Carolina: "https://borderly.dev/nc.svg",
    North_Dakota: "https://borderly.dev/nd.svg",
    Ohio: "https://borderly.dev/oh.svg",
    Oklahoma: "https://borderly.dev/ok.svg",
    Oregon: "https://borderly.dev/or.svg",
    Pennsylvania: "https://borderly.dev/pa.svg",
    Rhode_Island: "https://borderly.dev/ri.svg",
    South_Carolina: "https://borderly.dev/sc.svg",
    South_Dakota: "https://borderly.dev/sd.svg",
    Tennessee: "https://borderly.dev/tn.svg",
    Texas: "https://borderly.dev/tx.svg",
    Utah: "https://borderly.dev/ut.svg",
    Vermont: "https://borderly.dev/vt.svg",
    Virginia: "https://borderly.dev/va.svg",
    Washington: "https://borderly.dev/wa.svg",
    West_Virginia: "https://borderly.dev/wv.svg",
    Wisconsin: "https://borderly.dev/wi.svg",
    Wyoming: "https://borderly.dev/wy.svg"
};


const easyOutlines = {
    US: "https://borderly.dev/country/united-states.svg",
    Argentina: "https://borderly.dev/country/argentina.svg",
    France: "https://borderly.dev/country/france.svg",
    UK: "https://borderly.dev/country/united-kingdom.svg",
    Ireland: "https://borderly.dev/country/ireland.svg",
    Russia: "https://borderly.dev/country/russia.svg",
    Germany: "https://borderly.dev/country/germany.svg",
    Spain: "https://borderly.dev/country/spain.svg",
    Greece: "https://borderly.dev/country/greece.svg",
    Sweden: "https://borderly.dev/country/sweden.svg",
    Ukraine: "https://borderly.dev/country/ukraine.svg",
    Italy: "https://borderly.dev/country/italy.svg",
    Japan: "https://borderly.dev/country/japan.svg",
    North_Korea: "https://borderly.dev/country/north-korea.svg",
    South_Korea: "https://borderly.dev/country/south-korea.svg",
    India: "https://borderly.dev/country/india.svg",
    Egypt: "https://borderly.dev/country/egypt.svg",
    Mexico: "https://borderly.dev/country/mexico.svg",
    Australia: "https://borderly.dev/country/australia.svg",
    Brazil: "https://borderly.dev/country/brazil.svg"
};

const mediumOutlines = {
    Austria: "https://borderly.dev/country/austria.svg",
    Belgium: "https://borderly.dev/country/belgium.svg",
    Antarctica: "https://borderly.dev/country/antarctica.svg",
    UAE: "https://borderly.dev/country/united-arab-emirates.svg",
    Bahamas: "https://borderly.dev/country/bahamas.svg",
    Chile: "https://borderly.dev/country/chile.svg",
    Czechia: "https://borderly.dev/country/czechia.svg",
    Ecuador: "https://borderly.dev/country/ecuador.svg",
    Denmark: "https://borderly.dev/country/denmark.svg",
    Estonia: "https://borderly.dev/country/estonia.svg",
    Finland: "https://borderly.dev/country/finland.svg",
    Georgia: "https://borderly.dev/country/georgia.svg",
    Ghana: "https://borderly.dev/country/ghana.svg",
    Guatemala: "https://borderly.dev/country/guatemala.svg",
    Croatia: "https://borderly.dev/country/croatia.svg",
    Indonesia: "https://borderly.dev/country/indonesia.svg",
    Haiti: "https://borderly.dev/country/haiti.svg",
    Iceland: "https://borderly.dev/country/iceland.svg",
    Iran: "https://borderly.dev/country/iran.svg",
    Iraq: "https://borderly.dev/country/iraq.svg",
    Jamaica: "https://borderly.dev/country/jamaica.svg",
    Jordan: "https://borderly.dev/country/jordan.svg",
    Kenya: "https://borderly.dev/country/kenya.svg",
    Liechtenstein: "https://borderly.dev/country/liechtenstein.svg",
    Lithuania: "https://borderly.dev/country/lithuania.svg",
    Luxembourg: "https://borderly.dev/country/luxembourg.svg",
    Latvia: "https://borderly.dev/country/latvia.svg",
    Morocco: "https://borderly.dev/country/morocco.svg",
    Monaco: "https://borderly.dev/country/monaco.svg",
    Mongolia: "https://borderly.dev/country/mongolia.svg",
    Malta: "https://borderly.dev/country/malta.svg",
    Malaysia: "https://borderly.dev/country/malaysia.svg",
    Niger: "https://borderly.dev/country/niger.svg",
    Nigeria: "https://borderly.dev/country/nigeria.svg",
    Nicaragua: "https://borderly.dev/country/nicaragua.svg",
    Netherlands: "https://borderly.dev/country/netherlands.svg",
    Norway: "https://borderly.dev/country/norway.svg",
    Nepal: "https://borderly.dev/country/nepal.svg",
    New_Zealand: "https://borderly.dev/country/new-zealand.svg",
    Peru: "https://borderly.dev/country/peru.svg",
    Philippines: "https://borderly.dev/country/philippines.svg",
    Pakistan: "https://borderly.dev/country/pakistan.svg",
    Poland: "https://borderly.dev/country/poland.svg",
    Puerto_Rico: "https://borderly.dev/country/puerto-rico.svg",
    Palestine: "https://borderly.dev/country/palestine.svg",
    Portugal: "https://borderly.dev/country/portugal.svg",
    Paraguay: "https://borderly.dev/country/paraguay.svg",
    Romania: "https://borderly.dev/country/romania.svg",
    Serbia: "https://borderly.dev/country/serbia.svg",
    Sudan: "https://borderly.dev/country/sudan.svg",
    Singapore: "https://borderly.dev/country/singapore.svg",
    Slovenia: "https://borderly.dev/country/slovenia.svg",
    Slovakia: "https://borderly.dev/country/slovakia.svg",
    Syria: "https://borderly.dev/country/syria.svg",
    Thailand: "https://borderly.dev/country/thailand.svg",
    Turkmenistan: "https://borderly.dev/country/turkmenistan.svg",
    Taiwan: "https://borderly.dev/country/taiwan.svg",
    Uganda: "https://borderly.dev/country/uganda.svg",
    Venezuela: "https://borderly.dev/country/venezuela.svg",
    Vietnam: "https://borderly.dev/country/vietnam.svg",
    Yemen: "https://borderly.dev/country/yemen.svg",
    South_africa: "https://borderly.dev/country/south-africa.svg"
};

const hardOutlines = {
    Democratic_Republic_of_Congo: "https://borderly.dev/country/democratic-republic-of-the-congo.svg",
    Tanzania: "https://borderly.dev/country/tanzania.svg",
    Angola: "https://borderly.dev/country/angola.svg",
    Mozambique: "https://borderly.dev/country/mozambique.svg",
    Ivory_Coast: "https://borderly.dev/country/ivory-coast.svg",
    Cameroon: "https://borderly.dev/country/cameroon.svg",
    Mali: "https://borderly.dev/country/mali.svg",
    Malawi: "https://borderly.dev/country/malawi.svg",
    Zambia: "https://borderly.dev/country/zambia.svg",
    Guinea: "https://borderly.dev/country/guinea.svg",
    Namibia: "https://borderly.dev/country/namibia.svg",
    Gambia: "https://borderly.dev/country/gambia.svg",
    Guinea_bissau: "https://borderly.dev/country/guinea-bissau.svg",
    Western_Sahara: "https://borderly.dev/country/western-sahara.svg",
    Uzbekistan: "https://borderly.dev/country/uzbekistan.svg",
    Kazakhstan: "https://borderly.dev/country/kazakhstan.svg",
    Cambodia: "https://borderly.dev/country/cambodia.svg",
    Tajikistan: "https://borderly.dev/country/tajikistan.svg",
    Lebanon: "https://borderly.dev/country/lebanon.svg",
    Oman: "https://borderly.dev/country/oman.svg",
    Timor_Leste: "https://borderly.dev/country/timor-leste.svg",
    Macau: "https://borderly.dev/country/macau.svg",
    Brunei: "https://borderly.dev/country/brunei.svg",
    Maldives: "https://borderly.dev/country/maldives.svg",
    Romania: "https://borderly.dev/country/romania.svg",
    Belarus: "https://borderly.dev/country/belarus.svg",
    Hungary: "https://borderly.dev/country/hungary.svg",
    Bulgaria: "https://borderly.dev/country/bulgaria.svg",
    Wales: "https://borderly.dev/country/wales.svg",
    Moldova: "https://borderly.dev/country/moldova.svg",
    Montenegro: "https://borderly.dev/country/montenegro.svg",
    Isle_of_man: "https://borderly.dev/country/isle-of-man.svg",
    Vatican_City: "https://borderly.dev/country/vatican-city.svg",
    Trinidad_and_Tobago: "https://borderly.dev/country/trinidad-and-tobago.svg",
    Belize: "https://borderly.dev/country/belize.svg",
    Grenada: "https://borderly.dev/country/grenada.svg",
    Saint_Vincent_and_the_Grenadines: "https://borderly.dev/country/saint-vincent-and-the-grenadines.svg",
    Saint_Kitts_and_Nevis: "https://borderly.dev/country/saint-kitts-and-nevis.svg",
    Vanuatu: "https://borderly.dev/country/vanuatu.svg",
    Solomon_Islands: "https://borderly.dev/country/solomon-islands.svg",
    Samoa: "https://borderly.dev/country/samoa.svg",
    Kiribati: "https://borderly.dev/country/kiribati.svg",
    Tonga: "https://borderly.dev/country/tonga.svg",
    Marshall_Islands: "https://borderly.dev/country/marshall-islands.svg",
    Palau: "https://borderly.dev/country/palau.svg",
    Tuvalu: "https://borderly.dev/country/tuvalu.svg",
    Guyana: "https://borderly.dev/country/guyana.svg",
    Suriname: "https://borderly.dev/country/suriname.svg",
    North_Macedonia: "https://borderly.dev/country/north-macedonia.svg"
};

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
    Pitcairn_Islands: flag("pn"),
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
let previousFlags = [];


function sleep(time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

function getRandomCountry(dictionaryflag, previousFlags) 
{
    const entries = Object.entries(dictionaryflag);
    let image = entries[Math.floor(Math.random() * entries.length)];
    while (previousFlags.includes(image[0]))
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
    if (hint) {
        let hint = document.querySelector("#hint");
        hint.innerHTML = '';
        let buttonHint = document.createElement("button");
        buttonHint.id = 'hintButton';
        buttonHint.innerHTML = 'HINT';
        hint.appendChild(buttonHint);
    }
    container.appendChild(img);
}

function changeCountry(dictionaryflag, previousFlags) {
    let right = document.querySelector("#correct");
    let sorry = document.querySelector("#sorry");
    const guessInput = document.querySelector("#guess");
    const form = document.querySelector("#guessbox");
    const stop = document.querySelector("#stop");
    const change = document.querySelector("#change");
    const [country, url] = getRandomCountry(dictionaryflag, previousFlags);
    renderFlag(country, url);
    const hint = document.querySelector('#hint');
    const hintButton = document.querySelector("#hintButton");
    right.style.visibility = 'hidden';
    sorry.style.visibility = 'hidden';
    

    form.onsubmit = async function (event) {
        event.preventDefault();
        const answer = guessInput.value.trim().toLowerCase().replaceAll(" ", "_");
        if (answer == country.toLowerCase() || country == 'UAE' && answer == 'united_arab_emirates' || country == 'US' && (answer == 'united_states' || answer == 'united_states_of_america' || answer == 'usa') || country == 'UK' && answer == 'united_kingdom' || country == 'Democratic_Republic_of_Congo' && answer == "drc") {
            right.style.visibility = 'visible';
            await sleep(750);
            correct++;
        } 
        else 
        {
            sorry.style.visibility = 'visible';
            sorry.innerHTML = 'Incorrect, this is ' + country.replaceAll("_", " ");
            await sleep(2000);

        }
        total++;
        guessInput.value = "";
        previousFlags.push(country);
        if (previousFlags.length == (Object.keys(dictionaryflag).length))
        {
            sessionStorage.setItem('quizResult', JSON.stringify({correct , total}));
            sessionStorage.setItem('quizComplete', true);
            window.location.href = "congrats.html";
            return;
        }
        else
        {
            changeCountry(dictionaryflag, previousFlags);
        }
    }
    stop.onclick = async function (event) {
        if (total == 0)
        {
            alert("Please answer atleast 1 question.");
            return;
        }
        change.href = 'congrats.html';
        sessionStorage.setItem('quizResult', JSON.stringify({correct , total}));
    }
    hintButton.onclick = function (event){
        event.preventDefault();
        if (oceaniaCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = 'This country is in Oceania';
            hintButton.style.visibility = 'hidden';
            
        }
        else if (southCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = "This country is in South America";
            hintButton.style.visibility = "hidden";
        }
        else if (africaCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = 'This country is in Africa';
            hintButton.style.visibility = 'hidden';
            
        }
        else if (europeCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = 'This country is in Europe';
            hintButton.style.visibility = 'hidden';
            
        }
        else if (asiaCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = 'This country is in Asia';
            hintButton.style.visibility = 'hidden';
            
        }
        else if (northCountries.includes(country.toLowerCase().replaceAll("_", " ")))
        {
            hint.innerHTML = 'This country is in North America';
            hintButton.style.visibility = 'hidden';
            
        }
    }
}
  
if (isMedium)
{
    changeCountry(mediumflags, previousFlags);
}
else if (isEasy)
{
    changeCountry(easyflags, previousFlags); /// 20 flags 
}
else if (isHard)
{
    changeCountry(hardflags, previousFlags);
}
else if(isAfrica)
{
    changeCountry(africaFlags, previousFlags);
}
else if(isAsia)
{
    changeCountry(asiaFlags, previousFlags);
}
else if(isEurope)
{
    changeCountry(europeFlags, previousFlags);
}
else if(isNorthA)
{
    changeCountry(northFlags, previousFlags);
}
else if(isSouthA)
{
    changeCountry(southFlags, previousFlags);
}
else if (isOceania)
{
    changeCountry(oceaniaFlags, previousFlags);
}
else if (easyOutline)
{
    changeCountry(easyOutlines, previousFlags);
}
else if (mediumOutline)
{
    changeCountry(mediumOutlines, previousFlags);
}
else if (hardOutline)
{
    changeCountry(hardOutlines, previousFlags);
}
else if (stateOutline)
{
    changeCountry(stateOutlines, previousFlags);
}
else 
{

}
