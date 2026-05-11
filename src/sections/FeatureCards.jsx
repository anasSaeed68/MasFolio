import { useRef } from "react";
import { abilities } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function FeatureCards() {
  const cardsRef = useRef([]);

  useGSAP(()=>
  {
gsap.utils.toArray('.timeline-card').forEach((card, i)=>{

    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:card,
        start:"top 80%",
        toggleActions:'play reverse play reverse'
      }
    });

    t1.from(card, {
      y:50,
      opacity:0,
      
    }).to(card, {
      y:0,
      opacity:1,
      ease:"power2.inOut",
      duration: 1,
      delay: i * 0.2,
    })
  

  });
},[]);



  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardsRef.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };
  return (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc}) => (
        <div
        ref={(el)=>(cardsRef.current[title]=el)}
          key={title}
           onMouseMove={handleMouseMove(title)}
          className="card-border card timeline-card rounded-xl p-8 flex flex-col gap-4 break-inside-avoid-column "
        >
          <div className="glow"></div>
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);
}
