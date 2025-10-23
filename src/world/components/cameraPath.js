import {
 CubicBezierCurve3,
 LineBasicMaterial,
 Line,
 BufferGeometry,
 Vector3
} from 'three';

class cameraPath{
    constructor(){
        let curve;
        let curve2;

    }

createPaths(){
    curve = new CubicBezierCurve3(
        new Vector3( -100, 0, 20 ),
        new Vector3( -50, -150, 20 ),
        new Vector3( 200, 150, 20 ),
        new Vector3( 100, 0, 20 )
    );

    var pathTarget = new Vector3(0,0,0)

    var points = curve.getPoints( 500 );
    var geometry = new BufferGeometry().setFromPoints( points );

    var material = new LineBasicMaterial( { color : 0xffffff } );

    // Create the final object to add to the scene
    var curveObject = new Line( geometry, material );

    scene.add(curveObject);

    
    curve2 = new CubicBezierCurve3(
        new Vector3( -100, 0, 90 ),
        new Vector3( -50, -150, 90 ),
        new Vector3( 200, 150, 90 ),
        new Vector3( 100, 0, 90 )
    );

    var pathTarget2 = new Vector3( -100, 0, 90 )

    var points2 = curve.getPoints( 500 );
    var geometry2 = new BufferGeometry().setFromPoints( points2 );

    var material2 = new LineBasicMaterial( { color : 0xffffff } );

    // Create the final object to add to the scene
    var curveObject2 = new Line( geometry2, material2 );

    scene.add(curveObject2);
}
startPath(clock){

    var speed = 0.1 

    var scale = (Math.sqrt(((clock.getElapsedTime() * speed) % 1.0)))
    console.log(scale)
    this.curve.getPoint(scale, this.pathTarget)
    this.curve2.getPoint(((clock.getElapsedTime() * speed) % 1.0)**2, this.pathTarget2)

    // cube.position.copy(pathTarget)
    this.camera.position.copy(this.pathTarget2)
    this.camera.lookAt(this.pathTarget)

}
}