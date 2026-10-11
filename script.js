const easyflags = {
    us: "unitedstates.png",
    argentina: "https://flagsapi.com/AR/flat/64.png",
    france: "france.png",
    uk: "unitedkingdom.png",
    ireland: "https://flagsapi.com/IE/flat/64.png",
    russia: "https://flagsapi.com/RU/flat/64.png",
    mexico: "https://flagsapi.com/MX/flat/64.png",
    australia: "https://flagsapi.com/AU/flat/64.png",
    brazil: "https://flagsapi.com/BR/flat/64.png",
    germany: "https://flagsapi.com/DE/flat/64.png",
    egypt: "https://flagsapi.com/EG/flat/64.png",
    spain: "https://flagsapi.com/ES/flat/64.png",
    greece: "https://flagsapi.com/GR/flat/64.png",
    india: "https://flagsapi.com/IN/flat/64.png",
    italy: "https://flagsapi.com/IT/flat/64.png",
    japan: "https://flagsapi.com/JP/flat/64.png",
    north_korea: "https://flagsapi.com/KP/flat/64.png",
    south_korea: "https://flagsapi.com/KR/flat/64.png",
    sweden: "https://flagsapi.com/SE/flat/64.png",
    ukraine: "https://flagsapi.com/UA/flat/64.png",
};

const mediumflags = {
    austria: "https://flagsapi.com/AT/flat/64.png",
    belgium: "https://flagsapi.com/BE/flat/64.png",
    antarctica: "https://flagsapi.com/AQ/flat/64.png",
    uae: "https://flagsapi.com/AE/flat/64.png",
    bahamas: "https://flagsapi.com/BS/flat/64.png",
    chile: "https://flagsapi.com/CL/flat/64.png",
    czechia: "https://flagsapi.com/CZ/flat/64.png",
    ecuador: "https://flagsapi.com/EC/flat/64.png",
    denmark: "https://flagsapi.com/DK/flat/64.png",
    estonia: "https://flagsapi.com/EE/flat/64.png",
    finland: "https://flagsapi.com/FI/flat/64.png",
    georgia: "https://flagsapi.com/GE/flat/64.png",
    ghana: "https://flagsapi.com/GH/flat/64.png",
    guatemala: "https://flagsapi.com/GT/flat/64.png",
    croatia: "https://flagsapi.com/HR/flat/64.png",
    indonesia: "https://flagsapi.com/ID/flat/64.png",
    haiti: "https://flagsapi.com/HT/flat/64.png",
    iceland: "https://flagsapi.com/IS/flat/64.png",
    iran: "https://flagsapi.com/IR/flat/64.png",
    iraq: "https://flagsapi.com/IQ/flat/64.png",
    jamaica: "https://flagsapi.com/JM/flat/64.png",
    jordan: "https://flagsapi.com/JO/flat/64.png",
    kenya: "https://flagsapi.com/KE/flat/64.png",
    liechtenstein: "https://flagsapi.com/LI/flat/64.png",
    lithuania: "https://flagsapi.com/LT/flat/64.png",
    luxembourg: "https://flagsapi.com/LU/flat/64.png",
    latvia: "https://flagsapi.com/LV/flat/64.png",
    morocco: "https://flagsapi.com/MA/flat/64.png",
    monaco: "https://flagsapi.com/MC/flat/64.png",
    mongolia: "https://flagsapi.com/MN/flat/64.png",
    malta: "https://flagsapi.com/MT/flat/64.png",
    malaysia: "https://flagsapi.com/MY/flat/64.png",
    niger: "https://flagsapi.com/NE/flat/64.png",
    nigeria: "https://flagsapi.com/NG/flat/64.png",
    nicaragua: "https://flagsapi.com/NI/flat/64.png",
    netherlands: "https://flagsapi.com/NL/flat/64.png",
    norway: "https://flagsapi.com/NO/flat/64.png",
    nepal: "https://flagsapi.com/NP/flat/64.png",
    new_zealand: "https://flagsapi.com/NZ/flat/64.png",
    peru: "https://flagsapi.com/PE/flat/64.png",
    philippines: "https://flagsapi.com/PH/flat/64.png",
    pakistan: "https://flagsapi.com/PK/flat/64.png",
    poland: "https://flagsapi.com/PL/flat/64.png",
    puertorico: "https://flagsapi.com/PR/flat/64.png",
    palestine: "https://flagsapi.com/PS/flat/64.png",
    portugal: "https://flagsapi.com/PT/flat/64.png",
    paraguay: "https://flagsapi.com/PY/flat/64.png",
    romania: "https://flagsapi.com/RO/flat/64.png",
    serbia: "https://flagsapi.com/RS/flat/64.png",
    sudan: "https://flagsapi.com/SD/flat/64.png",
    singapore: "https://flagsapi.com/SG/flat/64.png",
    slovenia: "https://flagsapi.com/SI/flat/64.png",
    slovakia: "https://flagsapi.com/SK/flat/64.png",
    syria: "https://flagsapi.com/SY/flat/64.png",
    thailand: "https://flagsapi.com/TH/flat/64.png",
    turkmenistan: "https://flagsapi.com/TM/flat/64.png",
    taiwan: "https://flagsapi.com/TW/flat/64.png",
    uganda: "https://flagsapi.com/UG/flat/64.png",
    venezuela: "https://flagsapi.com/VE/flat/64.png",
    vietnam: "https://flagsapi.com/VN/flat/64.png",
    yemen: "https://flagsapi.com/YE/flat/64.png",
    south_africa: "https://flagsapi.com/ZA/flat/64.png",
};
const hardflags = {
    venezuela: "https://flagsapi.com/VE/flat/64.png",
    vietnam: "https://flagsapi.com/VN/flat/64.png",
    yemen: "https://flagsapi.com/YE/flat/64.png",
    south_africa: "https://flagsapi.com/ZA/flat/64.png",
}

let total = 0;
let correct = 0;

function getRandomCountry(dictionaryflag) {
    const entries = Object.entries(dictionaryflag || easyflags);
    return entries[Math.floor(Math.random() * entries.length)];
}

function renderFlag(country, url) {
    const container = document.querySelector("#flags");
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${country} flag`;
    img.style.width = '380px';
    img.style.height = '190px';
    img.style.marginLeft = '545px';
    container.innerHTML = "";
    container.appendChild(img);
}

function changeCountry(dictionaryflag) {
    const guessInput = document.querySelector("#guess");
    const form = document.querySelector("#guessbox");
    const [country, url] = getRandomCountry(dictionaryflag);

    renderFlag(country, url);
    
    form.onsubmit = function (event) {
        event.preventDefault();

        const answer = guessInput.value.trim().toLowerCase();

        if (answer === country.toLowerCase()) {
            alert("Correct!");
            correct++;
        } 
        else {
            alert("Incorrect! This is " + country);
        }
        total++;
        guessInput.value = "";
        const percentCorrect = total ? (correct / total) * 100 : 0;
        console.log(`Score: ${correct}/${total} (${percentCorrect.toFixed(1)}%)`);

        changeCountry(dictionaryflag);
    };
    } 
if (isMedium)
{
    changeCountry(mediumflags);
}
else if (isEasy)
{
    changeCountry(easyflags);
}
else if (isHard)
{
    changeCountry(hardflags);
}
else
{
    
}



