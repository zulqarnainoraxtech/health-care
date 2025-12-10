import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="tracking wider mt-20 w-[90%] mx-auto ">
      <h1 className="text-center text-darkgreen font-semibold text-4xl">
        Services we provide
      </h1>
      <p className="text-center w-1/2 mx-auto mt-6 text-gray-700">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ab libero
        enim ex qui vitae quaerat doloremque molestias, aspernatur facilis
        pariatur explicabo reprehenderit unde animi asperiores, nemo, illum
        saepe? Magni?
      </p>
      {/* six box  */}
      <div className="mt-16  grid grid-cols-3 gap-x-50 gap-y-20">
        <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            src={"/images/dental-treatment-img.jpg"}
            alt="teeth image loading..."
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Dental Treatment
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
         <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            src={"/images/bone-img.jpg"}
            alt="teeth image loading..."
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Bones Treatment
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
         <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            src={"/images/diagnosis-img.jpg"}
            alt="teeth image loading..."
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Diognois
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
         <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            src={"/images/cardiology-img.jpg"}
            alt="teeth image loading..."
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Cardiology
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
         <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            // src={"/images/surgery-img.jpg"}
            src={"/images/bone-img.jpg"}
            alt="teeth image loading..."
            height={400}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Surgery
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
         <div className="shadow-lg bg-gray-200 p-8 rounded-lg">
          <Image
            src={"/images/eye-care-img.jpg"}
            alt="teeth image loading..."
            height={500}
            width={500}
            className="w-full rounded-lg"
          />
          <h2 className="text-darkgreen font-semibold mt-6 text-xl">
            Eye Care
          </h2>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            maiores optio consequuntur pariatur vero voluptas quas ex at quidem
            obcaecati hello how mahy ia ssis tyou .
          </p>
          <p className="text-darkgreen font-extrabold mb-10">
            Learn More --{">"}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default page;
