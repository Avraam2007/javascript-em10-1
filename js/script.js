const responce = await fetch('../json/n_bands.json');
const data = await responce.json();

function minSec(sec) {
    let secFormula = sec-Math.floor(sec/60)*60;
    return `${Math.floor(sec/60)} min ${secFormula == 0 ? '' : `${secFormula} s`}`;
}

function elOrder(band, isFirstFirst) {
    let first = `
    <div class="first">
        <div class="logo" style="background: url(${band.icon != '' ? band.icon : `https://placehold.co/400?text=${band.bandName.replace(" ", "+")}`}); background-size: 100%; background-position: center; background-repeat: no-repeat;"></div>
        <h2 class="band-name" style="text-align:center;">${band.bandName}</h2>
    </div>
    `;
    let participantsSort = band.participants.filter(name => name != band.soloist && name.replace(" ", "") != "").join(', ');
    let trueTracks = band.tracks.filter(item => Object.keys(item).length !== 0 && item != null && item.name.replace(" ", "") != "" && item.duration != 0);
    let second = `
    <div class="second">
        <h2 class="soloist name">Soloist: ${band.soloist}</h2>
        <p class="participants">Participants: ${(participantsSort != null && participantsSort.replace(" ", "") != "") ? participantsSort : "Only solo"}</p>
        <div class="tracks">
            <h3 class="tracks-title">Tracks:</h3>
            <ul class="tracks-list">${trueTracks.map(item => `<li class="track-item"><p class="item-text">${item.name} — ${minSec(item.duration)}</p></li>`).join('')}</ul>
        </div>
    </div>
    `;
    
    if (isFirstFirst) {
        return `${first}${second}`;
    }
    else {
        return `${second}${first}`;
    }
}

function createItem(band, index) {
    return `
    <div class="band-info">
        ${elOrder(band, (index % 2 == 0 ? true : false))}
    </div>
    `;
}

const block = document.createElement('main');
block.classList.add('content');

block.innerHTML = data.map((band, index) => createItem(band, index)).join('<br>');
document.body.appendChild(block);

const styles = document.createElement('style');
styles.classList.add('style');

styles.innerHTML = `
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
    }

    p {
        font-weight: 400;
        font-size: 24px;
    }

    h2 {
        font-size: 36px;
    }

    h3 {
        font-size: 28px;
    }
  
    a {
        text-decoration: none;
        color: inherit;
        transition: 0.2s;
        cursor: pointer;
    }

    body {
        height: 2800px;
        background-color: #ffffef
    }

    main {
        width: 100%; 
        height: 2800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .band-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        height: 520px;
        background: linear-gradient(to bottom, rgba(189,195,199,1) 20%, rgba(150,166,179,1) 69%, rgba(135,158,181,1) 100%);
        border-radius: 10px;
        transition: 0.5s;
    }

    .band-info:hover {
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    }

    .first {
        width: 400px;
        height: 460px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        border-radius: 3px;
        width: 400px; 
        height: 400px; 
    }

    .second {
        width: 60%;
        height: 460px;
    }

    .tracks {
        position: relative;
        top: 40px;
    }

    .tracks-list {
        list-style: url(https://img.icons8.com/?size=15&id=apInxpMsS4Iq&format=png&color=000000);
    }

    @media(max-width: 1200px) {
        p {
            font-weight: 400;
            font-size: 18px;
        }
    
        h2 {
            font-size: 24px;
        }
    
        h3 {
            font-size: 20px;
        }
    
        body {
            height: 2500px;
        }
    
        main {
            height: 2500px;
        }
    
        .band-info {
            width: 90%;
            height: 400px;
            padding: 10px;
        }
    
        .band-info:focus {
            box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        }
    
        .first {
            width: 300px;
            height: 360px;
        }
    
        .logo {
            width: 300px; 
            height: 300px; 
        }
    
        .second {
            width: 60%;
            height: 360px;
        }
    }

    @media(max-width: 768px) {
        p {
            font-weight: 400;
            font-size: 16px;
        }

        body {
            height: 2300px;
        }
    
        main {
            height: 2300px;
        }
    
        .band-info {
            width: 90%;
            height: 400px;
        }

        .first {
            width: 250px;
            height: 320px;
        }
    
        .logo {
            width: 250px; 
            height: 250px; 
        }
    }

    @media(max-width: 600px) {
        body {
            height: 5200px;
        }
    
        main {
            height: 5200px;
        }
    
        .band-info {
            width: 90%;
            height: 950px;
            flex-direction: column;
        }

        .band-info:nth-of-type(even) {
            background-color: #000;
            flex-direction: column-reverse;
        }
    
        .first {
            width: 400px;
            height: 460px;
            display: flex;
        }
    
        .logo {
            width: 400px; 
            height: 400px; 
        }
    
        .second {
            width: 90%;
            height: 350px;
        }
    }

    @media(max-width: 450px) {
        p {
            font-weight: 400;
            font-size: 14px;
        }
    
        h2 {
            font-size: 24px;
        }
    
        h3 {
            font-size: 20px;
        }
    
        body {
            height: 3700px;
        }
    
        main {
            height: 3700px;
        }
    
        .band-info {
            width: 90%;
            height: 700px;
            flex-direction: column;
        }
    
        .first {
            width: 270px;
            height: 350px;
            display: flex;
        }
    
        .logo {
            width: 240px; 
            height: 240px; 
        }
    }
`;
document.body.appendChild(styles);