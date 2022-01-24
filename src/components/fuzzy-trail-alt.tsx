import '../styles/fuzzy-trail-alt.scss';
import Sketch from "react-p5";
import p5Types from "p5";

export const FuzzyTrailAlt = () => {
  
//Variables
let size = 350;


//Setup
const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  p5.background(0, 0, 0);
};

const draw = (p5: p5Types) => {
  p5.noStroke()
};

const mouseMoved = (p5: p5Types) => {
  // @ts-ignore
  p5.erase(255, 0)
  p5.circle(p5.mouseX - size/2, p5.mouseY - size/2, size) 
   // @ts-ignore
  p5.noErase()
  p5.noStroke()
};

return <Sketch setup={setup} mouseMoved={mouseMoved} draw={draw} className="fuzzy-trail-alt" />;
}