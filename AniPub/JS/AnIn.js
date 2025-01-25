import {OP} from "./data/data.js";

let videohtml = '';


export let AnimeID =    Number(JSON.parse(localStorage.getItem("iD"))) || 0;

if (OP[AnimeID] === undefined) {
  document.body.innerHTML=`<h1>Hey Man ! It seems it desnot exit in our Server
  report it to our admin ! 
  You will be redirected to our main page!
  Withing <span class="time">0</span>s ! 
  
  </h1>`
  
  let time = 0 ;
  setInterval(() => {
    document.querySelector(".time").innerText = time+1;    
    time ++;
    if (time === 10) {
      window.location.href = "index.html"
      time = -1;
    }
  }, 1000);

  document.body.style.background = 'red'

  console.clear()

}
Change(AnimeID);



function Change (AnimeID) {

let Ref = JSON.parse(localStorage.getItem("Alu")) || false;

localStorage.setItem("Alu",JSON.stringify(Ref));

CheckPlayer ();
function CheckPlayer () {
    if (Ref === false) {
     VideoDisplay (OP[AnimeID][0].link);
}
else {
    VideoDisplay (JSON.parse(localStorage.getItem("Src")));
}
}















 

function VideoDisplay (Source) {
    videohtml = `<video  id="my-video"
    class="video-js vjs-matrix video-js2"
    controls
    autoplay
    preload="auto"
    
    
    data-setup="{}">
<source src="${Source}" type="video/mp4">
<source src="${Source}" type="video/webm">
</video>`;


document.querySelector(".con-tainer").innerHTML = videohtml;
}



videojs('#my-video', {
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      }
     },
    playbackRates: [0.5, 1, 1.5, 2], 
    enableSmoothSeeking: true,

  });



let buttonS = '';
OP[AnimeID].forEach((value,i) => {
 buttonS += `<button selected type="radio" name="1" class="ep-button" data-id="${i}" title="${value.title}">${value.name}</button>`;

})


document.querySelector(".ep-list").innerHTML = buttonS ;

document.querySelectorAll(".ep-button").forEach(value => {
    value.addEventListener('click',()=>{
        
        const ID = value.dataset.id;
        const Source = OP[AnimeID][ID].link;
        localStorage.setItem("Src",JSON.stringify(Source))
        Ref = true;
        localStorage.setItem("Alu",JSON.stringify(Ref));
        document.querySelector("video").src =  JSON.parse(localStorage.getItem("Src"));
        CheckPlayer ();
        window.location.reload();
              
    })
 



})

Info();
function Info() {
  document.querySelector(".a-pic").src = OP[AnimeID][0].poster;
  document.querySelector(".NAme").innerText = OP[AnimeID][0].Name;

document.querySelector(".Synonyms").innerText = OP[AnimeID][0].Synonyms;

document.querySelector(".Aired").innerText = OP[AnimeID][0].Aired;

document.querySelector(".Premiered").innerText = OP[AnimeID][0].Premiered;

document.querySelector(".Duration").innerText = OP[AnimeID][0].Duration;

document.querySelector(".Status").innerText = OP[AnimeID][0].Status;

document.querySelector(".MALScore").innerText = OP[AnimeID][0].MALScore;

document.querySelector(".Genres").innerText = OP[AnimeID][0].Genres;

document.querySelector(".Studios").innerText = OP[AnimeID][0].Studios;

document.querySelector(".Producers").innerText = OP[AnimeID][0].Producers;

document.querySelector(".DescriptioN").innerText = OP[AnimeID][0].DescripTion;


}




document.querySelectorAll(".profile").forEach(
  value => {
    value.addEventListener('click',()=> {
     
      AnimeID = value.dataset.anime ;
      
      localStorage.setItem("iD",JSON.stringify(AnimeID));
      const Source = OP[AnimeID][0].link;
        localStorage.setItem("Src",JSON.stringify(Source))
        Ref = true;
        localStorage.setItem("Alu",JSON.stringify(Ref));
      document.querySelector("video").src =  JSON.parse(localStorage.getItem("Src"));
      CheckPlayer ();
      window.location.reload();

      
    })
  }
)



document.querySelector(".Play-b").addEventListener(
  'click',()=> {
    const Source = OP[AnimeID][0].link;
    localStorage.setItem("Src",JSON.stringify(Source))
    Ref = true;
    localStorage.setItem("Alu",JSON.stringify(Ref));
   document.querySelector("video").src =  JSON.parse(localStorage.getItem("Src"));
    CheckPlayer (); 
    document.querySelector("video").play();
  }
)  


}




