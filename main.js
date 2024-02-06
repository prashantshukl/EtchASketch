const container = document.querySelector(".container");
create(100, container);
function create(box, container) {
    for (let i = 0;i < box; i++) {
        for (let j = 0;j < box; j++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'grid');
            container.appendChild(div);
        }
    }

    const blocks = document.querySelectorAll('.grid');
    blocks.forEach(block => {
        block.addEventListener('mouseover', changeColor);
        function changeColor(){
            block.setAttribute('style', 'background-color: white;');
          }
      });

      
}

