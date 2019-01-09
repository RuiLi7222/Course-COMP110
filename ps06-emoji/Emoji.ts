// TODO: ADD HONOR PLEDGE HERE
/**    
 * Author: Rui Li   
 * ONYEN: lirui
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

// TODO: Import the classes you need to work with your Emoji
import { Group, Color, Text, Circle, Path, Rectangle } from "introcs/graphics";

export class FaceShape {

    /**
     * The tone of the FaceShape class is a property so that you can
     * easily change the tone of an Emoji (i.e. red FaceShape tone is angry,
     * green sick, etc);
     */
    tone: Color;

    constructor(tone: Color) {
        this.tone = tone;
    }

    shapes(): Group {
        let shapes = new Group();

        // TODO #1: Remove the four lines of code below adding the text "Emoji"
        //          to the shapes group.
        // TODO #2: Import, construct, and add one or more Shape objects to the shapes
        //          group to design your FaceShape.
        // TODO #3: Ensure at least one shape is filled with the
        //          FaceShape's tone Color property. (Requirement A2!)
        
        let face = new Circle(30, 50, 50);
        face.fill = this.tone;
        shapes.add(face);

        let earLeft = new Circle(15, 50 - 20 * Math.sqrt(3), 30);
        earLeft.fill = Color.BLACK;
        shapes.add(earLeft);

        let earRight = new Circle(15, 50 + 20 * Math.sqrt(3), 30);
        earRight.fill = Color.BLACK;
        shapes.add(earRight);

        let nose: Path = new Path(50, 60);
        nose.lineTo(45, 50).lineTo(55, 50).lineTo(50, 60);
        nose.fill = Color.BLACK;
        shapes.add(nose);
        return shapes;
    }

}

// TODO: Eye class
export class Eye {

    irisColor: Color;

    constructor(irisColor: Color) {
        this.irisColor = irisColor;
    }

    shapes(): Group {
        let shapes = new Group();
        let eye = new Rectangle(10, 10, 31, 37);
        eye.fill = this.irisColor;
        shapes.add(eye);     
        return shapes;
    }
}
// TODO: Mouth class
export class Mouth {
    color: Color = Color.WHITE;

    shapes(): Group {
        let shapes = new Group();
        let mouth = new Circle(5, 50, 70);
        mouth.fill = this.color;
        shapes.add(mouth);
        return shapes;
    }

    }
// TODO: Emoji class
export class Emoji {
    faceShape: FaceShape;
    mouth: Mouth;
    leftEye: Eye;
    rightEye: Eye;

    constructor() {
        this.faceShape = new FaceShape(new Color(0.078, 0.407, 0.882));
        this.mouth = new Mouth();
        this.leftEye = new Eye(new Color(0.392, 0.882, 0.078));
        this.rightEye = new Eye(new Color(0.392, 0.882, 0.078));
    }

    shapes(): Group {
        let shapes = new Group();
        let rightEyeShapes: Group = this.rightEye.shapes();
        rightEyeShapes.transform = rightEyeShapes.transform.translate(20, 0);
        shapes.add(rightEyeShapes);
        let faceShapeShapes: Group = this.faceShape.shapes();
        shapes.add(faceShapeShapes);
        let mouthShapes: Group = this.mouth.shapes();
        shapes.add(mouthShapes);
        let leftEyeShapes: Group = this.leftEye.shapes();
        shapes.add(leftEyeShapes);
        return shapes;
    }
}