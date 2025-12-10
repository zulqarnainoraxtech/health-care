import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between px-20 h-18 bg-gray-200'>
        
        <div>
          <div className="flex items-center">
            <Image 
              src={"/images/logo.png"}
              alt="image loading..."
              height={80}
              width={80}
            />
            <p className="text-xl text-darkgreen font-semibold tracking-wide">
              Health <span className="text-[#6EAB36]">Care</span>
            </p>
          </div>
        </div>

        {/* FIX: added items-center here */}
        <div className="flex items-center space-x-10 tracking-wider text-lg">
          <Link href={"/"} className="hover:border-b hover:text-darkgreen">Home</Link>
          <Link href={"/service"} className="hover:border-b hover:text-darkgreen">Service</Link>
          <Link href={"/contact"} className="hover:border-b hover:text-darkgreen">Contact</Link>
          <Link href={"/help"} className="hover:border-b hover:text-darkgreen">Help</Link>
          <Link href={"/blogs"} className="hover:border-b hover:text-darkgreen">Blogs</Link>
          <Link href={"/signup"} className="text-darkgreen">Sign Up</Link>
          <Link href={"/login"} className="bg-darkgreen text-white rounded-sm cursor-pointer px-8 py-2 text-sm">
            Log In
          </Link>
        </div>

      </div>
    </>
  )
}

export default Navbar
