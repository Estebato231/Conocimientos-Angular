
interface AudioPlayer{
audioVolume: number,
songDuration: number,
song:string,
datails:Datails,
}

interface Datails{
    author: string,
    year: number,
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    datails:{
        author: "Arthur",
        year: 2021
    }
}

const song = 'New Song';

const{song:anotherSong, songDuration:duration}=audioPlayer;
const{author:author}=audioPlayer.datails; 


// console.log('Song: ',anotherSong ); 
// console.log('Song: ',duration ); 
// console.log('Author: ',author); 

const [, ,p3]:string[]=['Goku', 'Vegeta', 'Trunks'];

// console.log('Personaje 3:',p3);









export{};