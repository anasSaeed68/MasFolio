import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useRef, useEffect} from 'react';
import * as THREE from 'three'

useGLTF.preload(import.meta.env.VITE_MALE_MODEL_API_URL);
useGLTF.preload(import.meta.env.VITE_MALE_SHIRT_API_URL);
useGLTF.preload(import.meta.env.VITE_MALE_PANT_API_URL);

export default function MaleModel({ adjustCloth, height, waist, shirtColor,   category }) {

  const humanModel = useGLTF(import.meta.env.VITE_MALE_MODEL_API_URL) ;
  const clothingModel = useGLTF(
    category === "Bottomwear" ? 
    import.meta.env.VITE_MALE_PANT_API_URL :
    import.meta.env.VITE_MALE_SHIRT_API_URL
  );
  
   const scene = humanModel.scene;
  const humanRef = useRef();
  const clothingRef = useRef();



// For centering model on canvas
  useEffect(() => {

    if(!scene) return;
   const box = new THREE.Box3().setFromObject(scene);
   const center = new THREE.Vector3();
   box.getCenter(center);
   scene.position.sub(center);
  }, [scene]);




// For Handling height and waist on Human Model
useEffect(() => {

  const spine = scene.getObjectByName('spine');
  
  if (!spine) {
    console.warn('❌ Could not find "Spine" object');
    return;
  }

  const DEFAULT_HEIGHT = 165;
  const DEFAULT_WAIST = 90;

  const heightScale = height / DEFAULT_HEIGHT;
  const waistScale = waist / DEFAULT_WAIST;

  const newX = 1 + waistScale * 0.3;
  const newY = 1 + heightScale * 0.1;
  const newZ = 1 + waistScale * 0.3;

  spine.scale.set(newX, newY, newZ);
  console.log("Adjust: ", adjustCloth);

  // setHeights(newY);
  // setWaists(newX);
}, [height, waist, scene]);


// Function to Handle Colors on shirt
const handleColorChange = (object) => {
  object.traverse((child) => {
    if (child.isMesh && child.material) {
      // Avoid modifying shared material
      child.material = child.material.clone();
      child.material.color.set(shirtColor);
    }
  });
};

// For Adjusting Cloth on Human Model
  useEffect(() => {
    
 if(!adjustCloth) return;

  const suit = category === "Bottomwear"
    ? scene.getObjectByName("Pants")
    : scene.getObjectByName("Cloth");

  if (!suit) {
    console.warn('❌ Could not find suit object');
    return;
  }

  const parent = suit.parent;
  parent.remove(suit);

  const cloth = clothingModel.scene.clone(true);
  cloth.name = category === "Bottomwear" ? "RePants" : "ReCloth";
  clothingRef.current = cloth;
  parent.add(cloth);

  const skinnedMesh = [];
  cloth.traverse((child) =>{
    if(child.type === "SkinnedMesh"){
      skinnedMesh.push(child);
    }
  })
 // const shirtMesh = cloth.getObjectByProperty('type','SkinnedMesh');
  const humanMesh = scene.getObjectByProperty('type','SkinnedMesh');

  const humanSkeleton = humanMesh?.skeleton;

  if(skinnedMesh.length > 0 && humanSkeleton){
    skinnedMesh.forEach((mesh)=>{
      mesh.bind(humanSkeleton, mesh.matrixWorld);
    })
    
  }else{
     console.warn("Could not find shirt mesh or human skeleton", { skinnedMesh, humanSkeleton });
  }


  }, [adjustCloth, clothingModel]);

  // For Applying color on shirt
useEffect(()=>{
  if(!adjustCloth || !scene) return ;
  const cloth = category === "Bottomwear" ? scene.getObjectByName("RePants") : scene.getObjectByName("ReCloth");

   if(!cloth){
    console.warn("Cloth was not found.");
    return;
   }
   if(shirtColor !==""){
    handleColorChange(cloth);
   }
    // cloth.scale.set(waists, heights, waists);

},[shirtColor,adjustCloth]);


 

  return (
 scene ?(
    <group ref={humanRef}>
      <primitive object={scene} />
    </group>
 ): 'undefined'
  );
}


// MaleModel.propTypes = {
//   adjustCloth: PropTypes.bool.isRequired,
//   height: PropTypes.number.isRequired,
//   waist: PropTypes.number.isRequired,
//   shirtColor: PropTypes.string.isRequired,
// }
