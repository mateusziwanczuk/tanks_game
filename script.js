
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
    function createColumn(startY, endY, x) {
        for (let y = startY; y <= endY; y += 50) {
            const building = document.createElement('div');
            building.classList.add('building');
            building.style.setProperty('top', `${y}px`);
            building.style.setProperty('left', `${x}px`);
            gameContainer.append(building);
        }
    }
    createRow(50,50,100);
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
    createRow(1150, 1350, 0); // 1st row top right
    createRow(1150, 1350, 50); // 2nd row top right
    createRow(1150, 1350, 100); // 3rd row top right
    createRow(1250, 1350, 600);
    createRow(1250, 1350, 400);
    createRow(1250, 1350, 500);
    createRow(1250, 1350, 300);
    createRow(1250, 1350, 200);
    createColumn(0, 100, 300);
    createColumn(50, 150, 900);
    createColumn(50, 150, 1050);
    createColumn(150, 250, 850);
    createColumn(150, 350, 950);
    createColumn(200, 250, 650);
    createColumn(200, 300, 0);
    createColumn(200, 250, 750);
    createColumn(250, 350, 1150);
    createColumn(400, 550, 50);
    createColumn(450, 650, 950);
    createColumn(500, 700, 150);
    createColumn(550, 700, 550);
    createColumn(600, 650, 250);
    createColumn(650, 700, 50);
    createColumn(650, 700, 850);

    // Beyond the map
    createRow(0, 1350, -50);
    createRow(0, 1350, 750);
    createColumn(0, 700, -50);
    createColumn(0, 700, 1400);

    let buildings = document.querySelectorAll('.building');
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

    function moveTank1(e){
        isMoveRightBlockedTank1 = buildingsPosition.some(building => {
            return building.positionX === tank1.positionX + 50 && building.positionY === tank1.positionY;
        })
        isMoveLeftBlockedTank1 = buildingsPosition.some(building => {
            return building.positionX === tank1.positionX - 50 && building.positionY === tank1.positionY;
        })
        isMoveUpBlockedTank1 = buildingsPosition.some(building => {
            return building.positionX === tank1.positionX && building.positionY === tank1.positionY - 50;
        })
        isMoveDownBlockedTank1 = buildingsPosition.some(building => {
            return building.positionX === tank1.positionX && building.positionY === tank1.positionY + 50;
        })
        if (e.keyCode === 13 ) {
            shoot();
        } else if (isMoveRightBlockedTank1 === false && e.keyCode === 39) { 
            tank1.node.style.transform = 'rotate(90deg)';
            tank1.positionX += 50;
            tank1.node.style.left = `${tank1.positionX}px`;
        } else if (isMoveLeftBlockedTank1 === false && e.keyCode === 37 ) { 
            tank1.node.style.transform = 'rotate(270deg)';
            tank1.positionX -= 50;
            tank1.node.style.left = `${tank1.positionX}px`;
        } else if (isMoveUpBlockedTank1 === false && e.keyCode === 38 ) { 
            tank1.node.style.transform = 'rotate(0deg)';
            tank1.positionY -= 50;
            tank1.node.style.top = `${tank1.positionY}px`;
        } else if (isMoveDownBlockedTank1 === false && e.keyCode === 40 ) { 
            tank1.node.style.transform = 'rotate(180deg)';
            tank1.positionY += 50;
            tank1.node.style.top = `${tank1.positionY}px`;
        // } else if (e.keyCode === 16 ) { // barricade
        //     const $barricade = document.createElement('div');
        //         $barricade.classList.add('barricade');
        //         gameContainer.prepend($barricade);
        //         $barricade.style.left = `${tank1.positionX}px`;
        //         $barricade.style.top = `${tank1.positionY}px`;
        }
    }
    window.addEventListener('keyup', moveTank1);

    function shoot(e) {
        console.log('FIRE!');
        let $missile = document.createElement('div');
            $missile.classList.add('missile');
            gameContainer.prepend($missile);
            $missile.style.left = `${tank1.positionX}px`;
            $missile.style.top = `${tank1.positionY}px`;
            $missilePositionX = tank1.positionX;
        function missileStrike() {
            const missileSpeed = 2;
            $missile.style.left = ++$missilePositionX * missileSpeed + "px";
            // console.log(Math.round(++$missilePositionX / 50) * 50 );
        };
        let isBuildingHit = buildingsPosition.some(building => {
            return Math.round(++$missilePositionX / 50) * 50 === building.positionX;
        })
        if (isBuildingHit) {
            clearInterval(missileStrike);
        }
        setInterval(missileStrike, 1);
    }

    /**************** Player 2 ****************/

    var tank2 = {
        armour: 1,
        positionX: 1350,
        positionY: 700,
        createTank() {
            const $tank2 = document.createElement('div');
            $tank2.classList.add('tank2');
            gameContainer.prepend($tank2);
            this.node = $tank2;
        },
        node: document.querySelector('.tank2'),
    }
    tank2.createTank();


    function moveTank2(e){
        isMoveRightBlockedTank2 = buildingsPosition.some(building => {
            return building.positionX === tank2.positionX + 50 && building.positionY === tank2.positionY;
        })
        isMoveLeftBlockedTank2 = buildingsPosition.some(building => {
            return building.positionX === tank2.positionX - 50 && building.positionY === tank2.positionY;
        })
        isMoveUpBlockedTank2 = buildingsPosition.some(building => {
            return building.positionX === tank2.positionX && building.positionY === tank2.positionY - 50;
        })
        isMoveDownBlockedTank2 = buildingsPosition.some(building => {
            return building.positionX === tank2.positionX && building.positionY === tank2.positionY + 50;
        })
        if (isMoveRightBlockedTank2 === false && e.keyCode === 68) { // move 50 px right
            tank2.node.style.transform = 'rotate(90deg)';
            tank2.positionX += 50;
            tank2.node.style.left = `${tank2.positionX}px`;
        } else if (isMoveLeftBlockedTank2 === false && e.keyCode === 65 ) { // move 50px left
            tank2.node.style.transform = 'rotate(270deg)';
            tank2.positionX -= 50;
            tank2.node.style.left = `${tank2.positionX}px`;
        } else if (isMoveUpBlockedTank2 === false && e.keyCode === 87 ) { // move 50px top
            tank2.node.style.transform = 'rotate(0deg)';
            tank2.positionY -= 50;
            tank2.node.style.top = `${tank2.positionY}px`;
        } else if (isMoveDownBlockedTank2 === false && e.keyCode === 83 ) { // move 50px down
            tank2.node.style.transform = 'rotate(180deg)';
            tank2.positionY += 50;
            tank2.node.style.top = `${tank2.positionY}px`;
        }
    }
    window.addEventListener('keyup', moveTank2);

};
tanksGame();