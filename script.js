    /**************************************
     
                TANKS GAME

    **************************************/


function tanksGame() {
    const body = document.querySelector('body');
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-map');
    body.prepend(gameContainer);

    // Player 1
    const tank1 = document.createElement('div');
    tank1.classList.add('tank1');
    tank1.dataset.px = 'px';
    gameContainer.prepend(tank1);

    // Player 2 
    const tank2 = document.createElement('div');
    tank2.classList.add('tank2');
    tank2.dataset.px = 'px';
    gameContainer.prepend(tank2);


    /*********************************************
      
            CREATE BUILDINGS FUNCTION

    **********************************************/

    function createRow(startX, endX, y) {
        for (let x = startX; x <= endX; x += 50) {
            const building = document.createElement('div');
            building.classList.add('building');
            building.style.setProperty('left', `${x}px`);
            building.style.setProperty('top', `${y}px`);
            gameContainer.append(building);
        }
    }
    createRow(50, 200, 100);
    createRow(100, 400, 300);
    createRow(100, 300, 400);
    createRow(100, 200, 200);
    createRow(250, 400, 500);
    createRow(350, 450, 700);
    createRow(350, 450, 600);
    createRow(400, 600, 0);
    createRow(400, 700, 100);
    createRow(400, 600, 200);
    createRow(400, 450, 400);
    createRow(500, 550, 300);
    createRow(500, 550, 450);
    createRow(550, 600, 350);
    createRow(650, 850, 650);
    createRow(650, 850, 450);
    createRow(650, 850, 550);
    createRow(700, 800, 50);
    createRow(700, 850, 350);
    createRow(950, 1150, 650);
    createRow(1050, 1150, 550);
    createRow(1050, 1150, 450);
    createRow(1050, 1100, 350);
    createRow(1050, 1100, 250);
    createRow(1150, 1350, 100);
    createRow(1150, 1250, 0);
    createRow(1250, 1350, 600);
    createRow(1250, 1350, 400);
    createRow(1250, 1350, 500);
    createRow(1250, 1350, 300);
    createRow(1250, 1350, 200);

    function createColumn(startY, endY, x) {
        for (let y = startY; y <= endY; y += 50) {
            const building = document.createElement('div');
            building.classList.add('building');
            building.style.setProperty('top', `${y}px`);
            building.style.setProperty('left', `${x}px`);
            gameContainer.append(building);
        }
    }
    createColumn(200, 300, 0);
    createColumn(400, 550, 50);
    createColumn(650, 700, 50);
    createColumn(500, 700, 150);
    createColumn(600, 650, 250);
    createColumn(0, 100, 300);
    createColumn(550, 700, 550);
    createColumn(200, 250, 650);
    createColumn(200, 250, 750);
    createColumn(650, 700, 850);
    createColumn(150, 250, 850);
    createColumn(50, 150, 900);
    createColumn(150, 350, 950);
    createColumn(450, 650, 950);
    createColumn(50, 150, 1050);
    createColumn(250, 350, 1150);

};
tanksGame();