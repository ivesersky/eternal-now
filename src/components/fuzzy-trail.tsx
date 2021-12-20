import '../styles/fuzzy-trail.scss';
import Sketch from "react-p5";
import * as p5Types from "p5";

export const FuzzyTrail = () => {
  
//Variables
let size = 100;


//Setup
const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  
};

const draw = (p5: p5Types) => {
  p5.noStroke()
  p5.rect(0, 0, p5.windowWidth, p5.windowHeight).fill("red")
};

const mouseMoved = (p5: p5Types) => {
  p5.noStroke()
  p5.circle(p5.mouseX - size/2, p5.mouseY - size/2, size)
  p5.fill("#FF71EC")

};

return <Sketch setup={setup} mouseMoved={mouseMoved} draw={draw} className="fuzzy-trail" />;
}