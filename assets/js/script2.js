let color = '';
document.addEventListener('keydown',
function (event) {
    document.getElementById('aColor').style.border = "2px solid black"
    if (event.key === 'a') {
            color = "pink";
            document.getElementById('aColor').style.backgroundColor = "pink";
    }else if(event.key === 's') {
            color = "orange";
            document.getElementById('aColor').style.backgroundColor = "orange";
    }else if(event.key === 'd'){
            color = "#4DD1FF";
            document.getElementById('aColor').style.backgroundColor = "#4DD1FF";
    }
    else if(event.key === 'q'){
        color = "Purple";
        document.getElementById('aColor').style.backgroundColor = "Purple";
    }

    else if(event.key === 'w'){
    color = "grey";
    document.getElementById('aColor').style.backgroundColor = "grey";
    }

    else if(event.key === 'e'){
    color = "brown";
    document.getElementById('aColor').style.backgroundColor = "brown";
    }
    
    else {
        color = '';
        document.getElementById('aColor').style.backgroundColor = 'white';
        document.getElementById('aColor').style.border = "2px solid lightgray"
    }
});
const pintar = (idDiv,color) => document.getElementById(idDiv).style.backgroundColor = color;
document.querySelectorAll('.div').forEach(element => {
    element.addEventListener("click", e => {
        const idDiv = e.target.getAttribute('id');
        e.currentTarget.style.border = (color === "white" || color === "")?'4px solid lightgray':'4px solid black';
        pintar(idDiv,color);
    });
});

const divs = document.querySelectorAll('div');

      divs.forEach((div) => {
        div.addEventListener('click', (event) => {
          event.target.style.backgroundColor = 'black';
        });
      });
