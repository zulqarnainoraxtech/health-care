import Image from "next/image";
const page = () => {
  return (
    <div className="text-4xl tracking-wider px-20">
      <div className="flex  h-[calc(100vh-72px)] items-center">
        <div className="flex-1 ">
          <h1 className="capitalize">
            Providing Quality <span className="text-darkgreen">Healthcare</span> for a  <span className="text-[#6EAB36]">Brighter</span> and <span className="text-[#6EAB36]">Healthy</span> Future
          </h1>
          <p className="mt-10 text-sm">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionals, cutting-edge technology, and compassionate
            approach make us a leader in the healthcare industry Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis perspiciatis enim quos facere, delectus, unde nostrum magni porro reiciendis, aperiam ipsum molestiae ea quaerat? Ipsa eum ut dolores, odio cumque quod rerum corrupti aut distinctio, quisquam adipisci, alias amet magnam reiciendis dolor ullam 
          </p>
          <button className="bg-darkgreen text-white rounded-sm px-8 py-2 text-sm mt-20 ">
            Appointments
          </button>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <div className="w-[550px] h-[550px] rounded-full bg-darkgreen overflow-hidden relative">
            <Image
              src="/images/home-img.png"
              alt="home"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
