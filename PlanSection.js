// import React from 'react'
// import plan from '../assests/plan.svg';
// import plantik from '../assests/plantik.svg';
// import './PlanSection.css';
// const PlanSection = () => {
//   return (
//     <div>
//        <div className="container mx-auto py-20">
//       <p className="text-3xl font-semibold text-center">Choose Your Plan</p>
//       <p className="text-center">Let's choose the package that is best for you and <br /> explore it happily and cheerfully.</p>
//       <div className="grid grid-cols-3 py-10 gap-16 items-center ">
//         <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
//           <img src={plan} alt="plan" />
//           <p className="text-xl font-semibold">Free Plan</p>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Unlimited Bandwidth</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Encrypted Connection</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>No Traffic Logs</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Works on All Devices</p>
//           </div>
//           <p className="text-2xl font-bold">free</p>
//           <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black">Select</button>
//         </div>
//         <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
//           <img src={plan} alt="plan" />
//           <p className="text-xl font-semibold">Standard Plan</p>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Unlimited Bandwidth</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Encrypted Connection</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>No Traffic Logs</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Works on All Devices</p>
//           </div>
//           <p className="text-2xl font-bold">$9 / mo</p>
//           <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black">Select</button>
//         </div>
//         <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
//           <img src={plan} alt="plan" />
//           <p className="text-xl font-semibold">Premium Plan</p>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Unlimited Bandwidth</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Encrypted Connection</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>No Traffic Logs</p>
//           </div>
//           <div className="flex gap-3 items-center">
//             <img src={plantik} alt="plantik" />
//             <p>Works on All Devices</p>
//           </div>
//           <p className="text-2xl font-bold">$12 / mo</p>
//           <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black">Select</button>
//         </div>
//       </div>
//     </div>
  
//     </div>
//   )
// }

// export default PlanSection



import React from 'react';
import plan from '../assests/plan.svg';
import plantik from '../assests/plantik.svg';
import './PlanSection.css';

const PlanSection = () => {
  const handleSelectPlan = (planName) => {
    alert(`Congratulations!! You have selected the ${planName} plan.`);
  };

  return (
    <div>
      <div className="container mx-auto py-20">
        <p className="text-3xl font-semibold text-center">Choose Your Plan</p>
        <p className="text-center">Let's choose the package that is best for you and <br /> explore it happily and cheerfully.</p>
        <div className="grid grid-cols-3 py-10 gap-16 items-center ">
          {/* Free Plan */}
          <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
            <img src={plan} alt="plan" />
            <p className="text-xl font-semibold">Free Plan</p>
            <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Unlimited Bandwidth</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Encrypted Connection</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>No Traffic Logs</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Works on All Devices</p>
          </div>
          <p className="text-2xl font-bold">free</p>
            {/* Plan Details */}
            {/* Select Button */}
            <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black" onClick={() => handleSelectPlan("Free")}>Select</button>
          </div>

          {/* Standard Plan */}
          <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
            <img src={plan} alt="plan" />
            <p className="text-xl font-semibold">Standard Plan</p>

            <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Unlimited Bandwidth</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Encrypted Connection</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>No Traffic Logs</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Works on All Devices</p>
          </div>
          <p className="text-2xl font-bold">$9 / mo</p>
            {/* Plan Details */}
            {/* Select Button */}
            <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black" onClick={() => handleSelectPlan("Standard")}>Select</button>
          </div>

          {/* Premium Plan */}
          <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl">
            <img src={plan} alt="plan" />
            <p className="text-xl font-semibold">Premium Plan</p>

            <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Unlimited Bandwidth</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Encrypted Connection</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>No Traffic Logs</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={plantik} alt="plantik" />
            <p>Works on All Devices</p>
          </div>
          <p className="text-2xl font-bold">$12 / mo</p>
            {/* Plan Details */}
            {/* Select Button */}
            <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-danger hover:text-black hover:border-none border-danger rounded-full text-black" onClick={() => handleSelectPlan("Premium")}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanSection;


