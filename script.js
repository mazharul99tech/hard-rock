
const getApi = "https://api.lyrics.ovh/suggest/";

const getLyrics = lyrics => {
    const apiUrl = `${getApi}${lyrics}`
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const lyricData = document.getElementById('lyric-data');
        lyricData.innerHTML = "";
        let lyrics = data.data;
        lyrics = lyrics.slice(0, 10);
        for (let i = 0; i < lyrics.length; i++) {
            const lyric = lyrics[i];
            const album = lyric.album.title;
            const lyricTitle = lyric.title;
            const p = document.createElement('p');
            p.innerHTML = `
            <span class="span-text">${lyricTitle} Album By ${album}</span> 
            <button class ="get-lyric-button">Get Lyrics</button>
            `;
            lyricData.appendChild(p);
            
        }
    })
}



document.getElementById('search-btn').addEventListener('click', function(){
    const songTitle = document.getElementById('song-title').value;
    getLyrics(songTitle);
})