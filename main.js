let scene;
let camera;
let renderer;
let cube;

function init(){
scene = new THREE.Scene();
scene.background = new THREE.Color( 0x8FBCD4 );

camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,10);


renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
scene.add( directionalLight );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
cube = new THREE.Mesh( geometry, material );
scene.add( cube );


};
function keyControls(){
    document.onkeydown = function(e) {
        switch (e.keyCode){
            case 37: //Left
                camera.rotateY(-0.1);
                break;
            case 38: //Up
                camera.rotateX(-0.1);
                break;
            case 39: //Right
                camera.rotateY(0.1);
                break;
            case 40: //Down
                camera.rotateX(0.1);
                break;
        }
    }
};

function update(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    keyControls();
}

function render(){
    renderer.render( scene, camera );
};
init();

renderer.setAnimationLoop( () => {
    update();
    render();
})
