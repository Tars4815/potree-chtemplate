//Redirect functions
function redirectFunc() {
    window.top.location.reload();
}

function refreshButton() {
    window.top.location.reload();
}

function refreshPopup(){
    location.reload();
}

function redirectHomeFunc() {
    window.top.location.href = "../index.html";
}


/* Zoom In
*****************************************************/
function zoomIn() {
    viewer.controls.scene.cameraP.zoom += 0.1;
}

/* Zoom Out
*****************************************************/
function zoomOut() {
    viewer.controls.scene.cameraP.zoom -= 0.1;
}

/* Tween function used with camera movement - arrow buttons
*****************************************************/
function tweenFunction(direction, target, currentAmountObject, newAmountObject) {
    // Setup the animation loop.
    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);

    // declare and initalize tween
    const tween = new TWEEN.Tween(currentAmountObject)
        .to(newAmountObject, 1000)
        .easing(TWEEN.Easing.Quintic.Out)
        .onUpdate(function() {
            if(direction == 'up' || direction == 'down') {
                viewer.scene.view.pitch = currentAmountObject.amount;
            } else if (direction == 'left' || direction == 'right') {
                viewer.scene.view.yaw = currentAmountObject.amount;
            }
        })
        .start(); // Start the tween immediately.
}

/* Move Up
*****************************************************/
function moveUp() {

    // movement direction
    const direction = 'down';

    // set target element
    const targetElement = viewer.scene.view.pitch;

    // NOTE: we need values as a property in an object for tween to work
    const currentPitchObject = {
        'amount': viewer.scene.view.pitch
    };
    const newPitchObject = {
        'amount': viewer.scene.view.pitch + .25
    };

    // call tween function
    tweenFunction(direction, targetElement, currentPitchObject, newPitchObject);
    
}

/* Move Down
*****************************************************/
function moveDown(){
    // movement direction
    const direction = 'up';

    // set target element
    const targetElement = viewer.scene.view.pitch;

    // NOTE: we need values as a property in an object for tween to work
    const currentPitchObject = {
        'amount': viewer.scene.view.pitch
    };
    const newPitchObject = {
        'amount': viewer.scene.view.pitch - .25
    };

    // call tween function
    tweenFunction(direction, targetElement, currentPitchObject, newPitchObject);
}

/* Move Left
*****************************************************/
function moveLeft() {

    // movement direction
    const direction = 'right';

    // set target element
    const targetElement = viewer.scene.view.yaw;

    // NOTE: we need values as a property in an object for tween to work
    const currentPitchObject = {
        'amount': viewer.scene.view.yaw
    };
    const newPitchObject = {
        'amount': viewer.scene.view.yaw + .25
    };

    // call tween function
    tweenFunction(direction, targetElement, currentPitchObject, newPitchObject);
    
}

/* Move Right
*****************************************************/
function moveRight() {
    // movement direction
    const direction = 'left';

    // set target element
    const targetElement = viewer.scene.view.yaw;

    // NOTE: we need values as a property in an object for tween to work
    const currentPitchObject = {
        'amount': viewer.scene.view.yaw
    };
    const newPitchObject = {
        'amount': viewer.scene.view.yaw - .25
    };

    // call tween function
    tweenFunction(direction, targetElement, currentPitchObject, newPitchObject);
}

/* HTML5 Fullscreen API
*****************************************************/
function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

//Function to change Touch to HotspotName
function changeHotspotName(newName){
	document.getElementById('hotspotName').innerHTML = newName;
}