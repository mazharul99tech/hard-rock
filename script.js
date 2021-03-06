
const getApi = "https://api.lyrics.ovh/suggest/";

const getLyrics = lyrics => {
    const apiUrl = `${getApi}${lyrics}`;
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const lyricData = document.getElementById('lyric-data');
        lyricData.innerHTML = "";
        let lyrics = data.data;
        lyrics = lyrics.slice(0, 10);
        for (let i = 0; i < lyrics.length; i++) {
            const lyric = lyrics[i];
            const artist = lyric.artist.name;
            const lyricTitle = lyric.title;
            const p = document.createElement('p');
            p.innerHTML = `
            <div class= "container-lyrics d-flex justify-content-around align-items-center">
                <div>
                    <h4 class="span-text">${lyricTitle}</h4> 
                    <p>Album By ${artist}</p>
                </div>
                <div>
                    <button onclick="loadLyricData('${artist}', '${lyricTitle}')" class ="get-lyric-button">Get Lyrics</button>
                </div>
            </div>
            `;
            lyricData.appendChild(p);
            
        }
    })
}

const loadLyricData = (artist, title)=>{
    console.log(artist, title)
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                document.getElementById("show-lyrics").innerHTML = `<h6>${data.lyrics}</h6>`;
            })
}


document.getElementById('search-btn').addEventListener('click', function(){
    const songTitle = document.getElementById('song-title').value;
    getLyrics(songTitle);
})