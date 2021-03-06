import * as THREE from '/lib/three.module.js'
import physicsObject from '/physicsEngine.js'

export default class Player extends physicsObject{
    constructor(x, y, z) {
        super(true)
        this.spawn = new THREE.Vector3(x, y, z)
        this.position.copy(this.spawn)
        this.rotation.copy(new THREE.Euler(0,0,0,'YXZ'))
        this.mass = 20
        this.radius = 1
        this.player = true
    }
}
