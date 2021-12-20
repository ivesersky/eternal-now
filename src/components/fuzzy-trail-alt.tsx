import '../styles/fuzzy-trail-alt.scss';
import Sketch from "react-p5";
import p5Types from "p5";

export const FuzzyTrailAlt = () => {
  
//Variables
let size = 100;


//Setup
const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
};

const draw = (p5: p5Types) => {
  p5.noStroke()
};

const mouseMoved = (p5: p5Types) => {
  p5.circle(p5.mouseX - size/2, p5.mouseY - size/2, size)
  p5.noStroke()
  p5.fill("#FF71EC")
};

return <Sketch setup={setup} mouseMoved={mouseMoved} draw={draw} className="fuzzy-trail-alt" />;
}