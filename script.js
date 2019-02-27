function tanksGame() {
    const mapContainer = document.querySelector('.game-map');
    let pointsPlayer1 = document.querySelector('#pointsPlayer1');
    let pointsPlayer2 = document.querySelector('#pointsPlayer2');
    let armourPlayer1 = document.querySelector('#armourPlayer1');
    let armourPlayer2 = document.querySelector('#armourPlayer2');


    /***********************************************************************************************************/
    /************************************************ Buildings ************************************************/
    /***********************************************************************************************************/

    function createRow(startX, endX, y) {
        for (let x = startX; x <= endX; x += 50) {
            const building = document.createElement('div');
            building.classList.add('building');
            building.style.setProperty('left', `${x}px`);
            building.style.setProperty('top', `${y}px`);
            mapContainer.append(building);
        }
    }
    function createColumn(startY, endY, x) {
        for (let y = startY; y <= endY; y += 50) {
            const building = document.createElement('div');
            building.classList.add('building');
            building.style.setProperty('top', `${y}px`);
            building.style.setProperty('left', `${x}px`);
            mapContainer.append(building);
        }
    }
    createRow(50,50,100);
    createRow(50, 200, 100);
    createRow(100, 400, 300);
    createRow(100, 300, 400);
    createRow(100, 200, 200);
    createRow(200, 250, 0);
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
    createRow(1050, 1150, 450);
    createRow(1050, 1100, 350);
    createRow(1050, 1100, 250);
    createRow(1150, 1200, 0); 
    createRow(1150, 1200, 50); 
    createRow(1150, 1200, 100); 
    createColumn(0, 100, 300);
    createColumn(50, 150, 900);
    createColumn(50, 150, 1050);
    createColumn(150, 250, 850);
    createColumn(150, 350, 950);
    createColumn(200, 250, 650);
    createColumn(200, 300, 0);
    createColumn(200, 250, 750);
    createColumn(250, 350, 1150);
    createColumn(400, 500, 50);
    createColumn(450, 500, 950);
    createColumn(500, 600, 150);
    createColumn(550, 600, 550);
        // Beyond the map
        createRow(0, 1200, -50);
        createRow(0, 1200, 600);
        createColumn(0, 550, -50);
        createColumn(0, 550, 1200);

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


    /**************************************************************************************************************/
    /************************************************ Create tanks ************************************************/
    /**************************************************************************************************************/

    var tank1 = {
        armour: 100,
        positionX: 0,
        positionY: 0,
        points: 0,
        node: document.querySelector('.tank1'),
        createTank() {
            const $tank1 = document.createElement('div');
            $tank1.classList.add('tank1');
            mapContainer.prepend($tank1);
            this.node = $tank1;
        },
        setStartPosition() {
            tank1.node.style.transform = 'rotate(90deg)';
            tank1.node.style.left = `${tank1.positionX}px`;
            tank1.node.style.top = `${tank1.positionY}px`;
        },
    }
    tank1.createTank();
    tank1.setStartPosition();
    pointsPlayer1.innerHTML = `${tank1.points}`;

    var tank2 = {
        armour: 100,
        positionX: 1150,
        positionY: 550,
        points: 0,
        node: document.querySelector('.tank2'),
        createTank() {
            const $tank2 = document.createElement('div');
            $tank2.classList.add('tank2');
            mapContainer.prepend($tank2);
            this.node = $tank2;
        },
        setStartPosition() {
            tank2.node.style.transform = 'rotate(270deg)';
            tank2.node.style.left = `${tank2.positionX}px`;
            tank2.node.style.top = `${tank2.positionY}px`;
        },
    }
    tank2.createTank();
    tank2.setStartPosition();
    pointsPlayer2.innerHTML = `${tank2.points}`;


    /***************************************************************************************************************/
    /************************************************ Tanks control ************************************************/
    /***************************************************************************************************************/

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
        if (e.keyCode === 32 ) {
            shootTank1();
        } else if (isMoveRightBlockedTank1 === false && e.keyCode === 68) { // move 50 px right
            tank1.node.style.transform = 'rotate(90deg)';
            tank1.positionX += 50;
            tank1.node.style.left = `${tank1.positionX}px`;
        } else if (isMoveLeftBlockedTank1 === false && e.keyCode === 65 ) { // move 50px left
            tank1.node.style.transform = 'rotate(270deg)';
            tank1.positionX -= 50;
            tank1.node.style.left = `${tank1.positionX}px`;
        } else if (isMoveUpBlockedTank1 === false && e.keyCode === 87 ) { // move 50px top
            tank1.node.style.transform = 'rotate(0deg)';
            tank1.positionY -= 50;
            tank1.node.style.top = `${tank1.positionY}px`;
        } else if (isMoveDownBlockedTank1 === false && e.keyCode === 83 ) { // move 50px down
            tank1.node.style.transform = 'rotate(180deg)';
            tank1.positionY += 50;
            tank1.node.style.top = `${tank1.positionY}px`;
        }
    }
    window.addEventListener('keyup', moveTank1);

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
        if (e.keyCode === 13 ) {
            shootTank2();
        } else if (isMoveRightBlockedTank2 === false && e.keyCode === 39) { 
            tank2.node.style.transform = 'rotate(90deg)';
            tank2.positionX += 50;
            tank2.node.style.left = `${tank2.positionX}px`;
        } else if (isMoveLeftBlockedTank2 === false && e.keyCode === 37 ) { 
            tank2.node.style.transform = 'rotate(270deg)';
            tank2.positionX -= 50;
            tank2.node.style.left = `${tank2.positionX}px`;
        } else if (isMoveUpBlockedTank2 === false && e.keyCode === 38 ) { 
            tank2.node.style.transform = 'rotate(0deg)';
            tank2.positionY -= 50;
            tank2.node.style.top = `${tank2.positionY}px`;
        } else if (isMoveDownBlockedTank2 === false && e.keyCode === 40 ) { 
            tank2.node.style.transform = 'rotate(180deg)';
            tank2.positionY += 50;
            tank2.node.style.top = `${tank2.positionY}px`;
        // } else if (e.keyCode === 16 ) { // barricade
        //     const $barricade = document.createElement('div');
        //         $barricade.classList.add('barricade');
        //         mapContainer.prepend($barricade);
        //         $barricade.style.left = `${tank2.positionX}px`;
        //         $barricade.style.top = `${tank2.positionY}px`;
        }
    }
    window.addEventListener('keyup', moveTank2);


    /**********************************************************************************************************/
    /************************************************ Shooting ************************************************/
    /**********************************************************************************************************/

    function shootTank1() {
        let $missile = document.createElement('div');
            $missile.classList.add('missile');
            mapContainer.prepend($missile);
            $missile.style.left = `${tank1.positionX + 20}px`;
            $missile.style.top = `${tank1.positionY + 20}px`;
        let $missilePositionX = tank1.positionX;
        let $missilePositionY = tank1.positionY;
        let $missilePositionEven50;

        function missileStrikeRight() {
            $missilePositionX += 50;
            $missilePositionEven50 = Math.round(++$missilePositionX / 50) * 50;
            $missile.style.left = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionX && building.positionY === $missilePositionY;
            });
            let isTankHit = $missilePositionEven50 === tank2.positionX && $missilePositionY === tank2.positionY;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeRightInterval);
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeRightInterval);
                tank2.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer2.innerHTML = `${tank2.armour}`;
                if (tank2.armour < 0){
                    ++tank1.points;
                    pointsPlayer1.innerHTML = `${tank1.points}`;
                    tank2.armour = 100;
                    armourPlayer2.innerHTML = `${tank2.armour}`;
                    tank2.positionX = 1150;
                    tank2.positionY = 550;
                    tank2.setStartPosition();
                }
            }
        };
        function missileStrikeLeft() {
            $missilePositionX -= 50;
            $missilePositionEven50 = Math.round(--$missilePositionX / 50) * 50;
            $missile.style.left = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionX && building.positionY === $missilePositionY;
            });
            let isTankHit = $missilePositionEven50 === tank2.positionX && $missilePositionY === tank2.positionY;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeLeftInterval);
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeLeftInterval);
                tank2.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer2.innerHTML = `${tank2.armour}`;
                if (tank2.armour < 0){
                    ++tank1.points;
                    pointsPlayer1.innerHTML = `${tank1.points}`;
                    tank2.armour = 100;
                    armourPlayer2.innerHTML = `${tank2.armour}`;
                    tank2.positionX = 1150;
                    tank2.positionY = 550;
                    tank2.setStartPosition();
                }
            }
        };
        function missileStrikeUp() {
            $missilePositionY -= 50;
            $missilePositionEven50 = Math.round(--$missilePositionY / 50) * 50;
            $missile.style.top = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionY && building.positionX === $missilePositionX;
            });
            let isTankHit = $missilePositionEven50 === tank2.positionY && $missilePositionX === tank2.positionX;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeUpInterval);
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeUpInterval);
                tank2.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer2.innerHTML = `${tank2.armour}`;
                if (tank2.armour < 0){
                    ++tank1.points;
                    pointsPlayer1.innerHTML = `${tank1.points}`;
                    tank2.armour = 100;
                    armourPlayer2.innerHTML = `${tank2.armour}`;
                    tank2.positionX = 1150;
                    tank2.positionY = 550;
                    tank2.setStartPosition();
                }
            }
        };
        function missileStrikeDown() {
            $missilePositionY += 50;
            $missilePositionEven50 = Math.round(++$missilePositionY / 50) * 50;
            $missile.style.top = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionY && building.positionX === $missilePositionX;
            });
            let isTankHit = $missilePositionEven50 === tank2.positionY && $missilePositionX === tank2.positionX;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeDownInterval);
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeDownInterval);
                tank2.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer2.innerHTML = `${tank2.armour}`;
                if (tank2.armour < 0){
                    ++tank1.points;
                    pointsPlayer1.innerHTML = `${tank1.points}`;
                    tank2.armour = 100;
                    armourPlayer2.innerHTML = `${tank2.armour}`;
                    tank2.positionX = 1150;
                    tank2.positionY = 550;
                    tank2.setStartPosition();
                }
            }
        };

        if (tank1.node.style.transform == 'rotate(90deg)'){
            var missileStrikeRightInterval = setInterval(missileStrikeRight, 10);
        }
        else if (tank1.node.style.transform == 'rotate(270deg)'){
            var missileStrikeLeftInterval = setInterval(missileStrikeLeft, 10);
        }
        else if (tank1.node.style.transform == 'rotate(0deg)'){
            var missileStrikeUpInterval = setInterval(missileStrikeUp, 10);
        }
        else if (tank1.node.style.transform = 'rotate(180deg)'){
            var missileStrikeDownInterval = setInterval(missileStrikeDown, 10);
        }
    }

    function shootTank2() {
        let $missile = document.createElement('div');
            $missile.classList.add('missile');
            mapContainer.prepend($missile);
            $missile.style.left = `${tank2.positionX + 20}px`;
            $missile.style.top = `${tank2.positionY + 20}px`;
        let $missilePositionX = tank2.positionX;
        let $missilePositionY = tank2.positionY;
        let $missilePositionEven50;

        function missileStrikeRight() {
            $missilePositionX += 50;
            $missilePositionEven50 = Math.round($missilePositionX / 50) * 50;
            $missile.style.left = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionX && building.positionY === $missilePositionY;
            });
            let isTankHit = $missilePositionEven50 === tank1.positionX && $missilePositionY === tank1.positionY;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeRightInterval);
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeRightInterval);
                tank1.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer1.innerHTML = `${tank1.armour}`;
                if (tank1.armour < 0){
                    ++tank2.points;
                    pointsPlayer2.innerHTML = `${tank2.points}`;
                    tank1.armour = 100;
                    armourPlayer1.innerHTML = `${tank1.armour}`;
                    tank1.positionX = 0;
                    tank1.positionY = 0;
                    tank1.setStartPosition();
                }
            }
        };
        function missileStrikeLeft() {
            $missilePositionX -= 50;
            $missilePositionEven50 = Math.round(--$missilePositionX / 50) * 50;
            $missile.style.left = $missilePositionEven50 + "px";
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionX && building.positionY === $missilePositionY;
            });
            let isTankHit = $missilePositionEven50 === tank1.positionX && $missilePositionY === tank1.positionY;
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeLeftInterval);            
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeLeftInterval);
                tank1.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer1.innerHTML = `${tank1.armour}`;
                if (tank1.armour < 0){
                    ++tank2.points;
                    pointsPlayer2.innerHTML = `${tank2.points}`;
                    tank1.armour = 100;
                    armourPlayer1.innerHTML = `${tank1.armour}`;
                    tank1.positionX = 0;
                    tank1.positionY = 0;
                    tank1.setStartPosition();
                }
            }
        };
        function missileStrikeUp() {
            $missilePositionY -= 50;
            $missilePositionEven50 = Math.round(--$missilePositionY / 50) * 50;
            $missile.style.top = $missilePositionEven50 + "px";
            let isTankHit = $missilePositionEven50 === tank1.positionY && $missilePositionX === tank1.positionX;
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionY && building.positionX === $missilePositionX;
            });
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeUpInterval); 
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeUpInterval);
                tank1.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer1.innerHTML = `${tank1.armour}`;
                if (tank1.armour < 0){
                    ++tank2.points;
                    pointsPlayer2.innerHTML = `${tank2.points}`;
                    tank1.armour = 100;
                    armourPlayer1.innerHTML = `${tank1.armour}`;
                    tank1.positionX = 0;
                    tank1.positionY = 0;
                    tank1.setStartPosition();
                }
            }
            
        };
        function missileStrikeDown() {
            $missilePositionY += 50;
            $missilePositionEven50 = Math.round(++$missilePositionY / 50) * 50;
            $missile.style.top = $missilePositionEven50 + "px";
            let isTankHit = $missilePositionEven50 === tank1.positionY && $missilePositionX === tank1.positionX;
            let isBuildingHit = buildingsPosition.some(building => {
                return $missilePositionEven50 === building.positionY && building.positionX === $missilePositionX;
            });
            if (isBuildingHit) {
                $missile.remove();
                clearInterval(missileStrikeDownInterval); 
            }
            if (isTankHit){
                $missile.remove();
                clearInterval(missileStrikeDownInterval);
                tank1.armour -= (Math.random(1) * 50).toFixed();
                armourPlayer1.innerHTML = `${tank1.armour}`;
                if (tank1.armour < 0){
                    ++tank2.points;
                    pointsPlayer2.innerHTML = `${tank2.points}`;
                    tank1.armour = 100;
                    armourPlayer1.innerHTML = `${tank1.armour}`;
                    tank1.positionX = 0;
                    tank1.positionY = 0;
                    tank1.setStartPosition();
                }
            }
        };

        if (tank2.node.style.transform == 'rotate(90deg)'){
            var missileStrikeRightInterval = setInterval(missileStrikeRight, 10);
        }
        else if (tank2.node.style.transform == 'rotate(270deg)'){
            var missileStrikeLeftInterval = setInterval(missileStrikeLeft, 10);
        }
        else if (tank2.node.style.transform == 'rotate(0deg)'){
            var missileStrikeUpInterval = setInterval(missileStrikeUp, 10);
        }
        else if (tank2.node.style.transform = 'rotate(180deg)'){
            var missileStrikeDownInterval = setInterval(missileStrikeDown, 10);
        }
    }


    /***************************************************************************************************************/
    /************************************************ Repair armour ************************************************/
    /***************************************************************************************************************/

    function createRepairIcon() {
        let randomIconPositionX = Math.round((Math.random(1) * 1150) / 50) * 50;
        let randomIconPositionY = Math.round((Math.random(1) * 550) / 50) * 50;
        // isIconOnBuilding = buildingsPosition.some(building => {
        //     return building.positionX === randomIconPositionX && building.positionY === randomIconPositionY;
        // })
        const repairIcon = document.createElement('div');
            repairIcon.classList.add('repairIcon');
            repairIcon.style.setProperty('left', `${randomIconPositionX}px`);
            repairIcon.style.setProperty('top', `${randomIconPositionY}px`);
            mapContainer.append(repairIcon);
    } 
    setInterval(createRepairIcon, 30000);

};
tanksGame();
