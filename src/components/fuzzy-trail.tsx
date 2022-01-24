import '../styles/fuzzy-trail.scss';
import Sketch from "react-p5";
import * as p5Types from "p5";

export const FuzzyTrail = () => {
  //Variables
let size = 175;
let time = 0;

//Setup
const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  
};

let easing = function (t: any) { return t*t*t }

const draw = (p5: p5Types) => {
  time = time + 0.005
  let alpha = 255 - 255 * easing(time)

  p5.fill(99,55,224, alpha)
  p5.noStroke()
  p5.circle(p5.mouseX - size/2, p5.mouseY - size/2, size)
};


return <Sketch setup={setup} draw={draw} className="fuzzy-trail" />;
}