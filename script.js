
function tanksGame() {
    const body = document.querySelector('body');
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-map');
    body.prepend(gameContainer);
    var tanks = [tank1, tank2];


    /**************** Buildings ****************/

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

    const buildings = document.querySelectorAll('.building');
    let buildingsPosition = [];
    buildings.forEach((building, index) => {
        buildingsPosition.push({
            building: index,
            positionY: 
                Number(getComputedStyle(building)
                .getPropertyValue('top')
                .slice(0, -2)),
            positionX: 
                Number(getComputedStyle(building)
                .getPropertyValue('left')
                .slice(0, -2)),
        })
    })
    
    
    /**************** Player 1 ****************/

    var tank1 = {
        armour: 1,
        positionX: 0,
        positionY: 0,
        createTank() {
            const $tank1 = document.createElement('div');
            $tank1.classList.add('tank1');
            gameContainer.prepend($tank1);
            this.node = $tank1;
        },
        node: document.querySelector('.tank1'),
    }
    tank1.createTank();

    function tank1Control(e) {
        if (e.keyCode === 39) { // move 50px right
            tank1.node.style.transform = 'rotate(90deg)';
            tank1.positionX += 50;
            tank1.node.style.left = `${tank1.positionX}px`;
                console.log(tank1);
        } else if (e.keyCode === 37) { // move 50px left
            tank1.node.style.transform = 'rotate(270deg)';
            tank1.positionX -= 50;
            tank1.node.style.left = `${tank1.positionX}px`;
                console.log(tank1);
        } else if (e.keyCode === 38) { // move 50px top
            tank1.node.style.transform = 'rotate(0deg)';
            tank1.positionY -= 50;
            tank1.node.style.top = `${tank1.positionY}px`;
                console.log(tank1);
        } else if (e.keyCode === 40) { // move 50px down
            tank1.node.style.transform = 'rotate(180deg)';
            tank1.positionY += 50;
            tank1.node.style.top = `${tank1.positionY}px`;
                console.log(tank1);
        }
    }
    window.addEventListener('keydown', tank1Control);

 

    /**************** Player 2 ****************/

    var tank2 = {
        armour: 1,
        positionX: 0,
        positionY: 0,
        createTank() {
            const $tank2 = document.createElement('div');
            $tank2.classList.add('tank2');
            gameContainer.prepend($tank2);
            this.node = $tank2;
        },
        node: document.querySelector('.tank2'),
    }
    tank2.createTank();

    function tank2Control(e) {
        if (e.keyCode === 68) { // move 50px right
            tank2.positionX += 50;
            tank2.node.style.left = `${tank2.positionX}px`;
            tank2.node.style.transform = 'rotate(90deg)';
                console.log(tank2);
        } else if (e.keyCode === 65) { // move 50px left
            tank2.positionX -= 50;
            tank2.node.style.left = `${tank2.positionX}px`;
            tank2.node.style.transform = 'rotate(270deg)';
                console.log(tank2);
        } else if (e.keyCode === 83) { // move 50px top
            tank2.positionY += 50;
            tank2.node.style.top = `${tank2.positionY}px`;
            tank2.node.style.transform = 'rotate(180deg)';
                console.log(tank2);
        } else if (e.keyCode === 87) { // move 50px down
            tank2.positionY -= 50;
            tank2.node.style.top = `${tank2.positionY}px`;
            tank2.node.style.transform = 'rotate(360deg)';
                console.log(tank2);
        }
    }
    window.addEventListener('keydown', tank2Control);
   
    console.log(buildingsPosition);
    console.log(buildingsPosition[1].positionX);
    console.log(tank1.positionX, tank1.positionY);
};
tanksGame();