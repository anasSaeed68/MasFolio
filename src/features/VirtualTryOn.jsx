import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { MaleModel } from "../components/model_components/MaleModel";
import { DirectionalLight } from "three";
import { Loader } from "../components/Loader";
import {mPant, mShirt } from "../utils";



export const VirtualTryOn = () => {


  const [adjustCloth, setAdjustCloth] = useState(false);
  const [height, setHeight] = useState(120);
  const [waist, setWaist] = useState(40);
  const [selectedColor, setSelectedColor] = useState("");
  const availableColors = ["red", "blue", "yellow", "green"];
  const [category, setCategory] = useState("Bottomwear");
// useEffect(() => {
//   const refreshedKey = `refreshed-${productId}`;

//   if (!sessionStorage.getItem(refreshedKey)) {
//     sessionStorage.setItem(refreshedKey, "true");
//     window.location.reload(); // forces reload once per product
//   }
// }, [productId]);


//  const fetchProductData = async () =>{
//     products.map((item)=>{
//       if(item._id === productId){
//           setProductData(item);
//           setImage(item.image?.[0] ?? '');
//           return null;
//       }
//     })

//  } 
//  useEffect(()=>{
//   fetchProductData();
//  },[productId,products]);



function ErrorFallback({ error }) {
  return <div className="text-red-500">Something went wrong: {error.message}</div>;
}
  const handleInputChange = (e, setter) => {
    const value = parseInt(e.target.value) || 0;
    setter(value);
  };

  const increment = (setter, value, max) =>{ 
    if(value < max)
    {
     setter(value + 1); 
    }
    }
  const decrement = (setter, value, min) => { 
    if(value > min){
setter(value -1 );
    }
    }
  return (
    <div className="flex flex-col w-full min-h-screen gap-4 p-4 sm:flex-row bg-slate-700 sm:p-10">
  {/* Canvas */}
 <div className="bg-slate-400 w-full sm:w-1/2 h-[600px] sm:h-screen items-center flex justify-center rounded-md shadow-md">

   
      <Canvas
        camera={{ position: [1, 5, 14], fov: 18 }}
        shadows
        className="bg-black"
      >
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={3} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
        <pointLight position={[-1, 1, 1]} intensity={8} />
        <Environment preset="studio" />

        <Suspense fallback={<Loader/>}>
          <MaleModel
            key={`${height}-${waist}-${selectedColor}-${adjustCloth}`}
            adjustCloth={adjustCloth}
            height={height}
            waist={waist}
            shirtColor={selectedColor}
            category={category}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
  
  </div>

  {/* Form Section */}
  <div className="flex items-center justify-center w-full p-4 bg-red-900 rounded-md shadow-md sm:w-1/2 sm:p-10">
    <form
      className={`space-y-6 max-w-md w-full`}
    >
      <fieldset>
        <legend className="mb-3 text-xl font-bold">
          Add your requirements
        </legend>

        {/* Height */}
        <div className="mb-4">
          <label htmlFor="height" className="block mb-1">
            Height (cm)
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => decrement(setHeight, height, 120)}
              className="px-3 py-2 font-bold text-white bg-gray-600 hover:bg-black active:bg-blue-500"
            >
              -
            </button>
            <input
              type="number"
              name="height"
              id="height"
              value={height}
              max={200}
              min={120}
              onChange={(e) => handleInputChange(e, setHeight)}
              onKeyDown={(e) => e.preventDefault()}
              className="w-24 text-center border sm:w-44 border-b-sky-200"
            />
            <button
              type="button"
              onClick={() => increment(setHeight, height, 200)}
              className="px-3 py-2 font-bold text-white bg-gray-600 hover:bg-black active:bg-blue-500"
            >
              +
            </button>
          </div>
        </div>

        {/* Waist */}
        <div className="mb-4">
          <label htmlFor="waist" className="block mb-1">
            Waist (cm)
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => decrement(setWaist, waist, 40)}
              className="px-3 py-2 font-bold text-white bg-gray-600 hover:bg-black active:bg-blue-500"
            >
              -
            </button>
            <input
              type="number"
              name="waist"
              id="waist"
              value={waist}
              max={110}
              min={40}
              onChange={(e) => handleInputChange(e, setWaist)}
              onKeyDown={(e) => e.preventDefault()}
              className="w-24 text-center border sm:w-44 border-b-sky-200"
            />
            <button
              type="button"
              onClick={() => increment(setWaist, waist, 110)}
              className="px-3 py-2 font-bold text-white bg-gray-600 hover:bg-black active:bg-blue-500"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
              <h2 className="text-lg">Select a Category:</h2>
              <div className="flex gap-15 md:gap-25">
                  <p className={`p-2 rounded-xl md:w-20 w-15 overflow-hidden text-center font-extrabold border-2 border-r-amber-400 cursor-pointer shadow hover:shadow-amber-300 ${category !== "Bottomwear" ? 'bg-cyan-600': 'bg-black-50'}`} onClick={() => setCategory("Upperwear")}>Shirt</p>
              <p className={`p-2 rounded-xl md:w-20 w-15 overflow-hidden text-center font-extrabold border-2 border-r-amber-400 cursor-pointer shadow hover:shadow-amber-300 ${category === "Bottomwear" ? 'bg-cyan-600': 'bg-black-50'}`} onClick={()=> setCategory("Bottomwear")}>Pant</p>
              </div>
             
        </div>

        {/* Image select */}
        <div className="mb-4">
          <label className="block mb-1 text-lg">
            Select given garment to fit:
          </label>
         {mShirt && mPant ? (
    <img
      src={category === "Bottomwear" ? mPant : mShirt}
      alt="Image Adjustment"
      className={`w-28 h-28 sm:w-32 sm:h-32 object-contain cursor-pointer border hover:shadow-md bg-black-200  ${
        adjustCloth
          ? 'border-red-500 shadow-red-500'
          : 'border-black hover:border-blue-500'
      }`}
      onClick={() => setAdjustCloth(true)}
    />
  ) : (
    <div className="w-28 h-28 sm:w-32 sm:h-32 border border-dashed border-gray-400 flex items-center justify-center text-xs text-gray-400">
      No image
    </div>
  )}
        </div>

        {/* Color selection */}
        <div className="mb-4">
          <label className="block mb-1">Select a Color:</label>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <div
                key={color}
                className={`w-10 h-10 rounded-full border-4 cursor-pointer ${
                  selectedColor === color
                    ? 'border-slate-700'
                    : 'border-transparent'
                }`}
                style={{ background: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>

      </fieldset>
    </form>
  </div>
</div>

  );
};
