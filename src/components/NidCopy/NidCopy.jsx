

const NidCopy = () => {
  return (
    <div className="overflow-y-scroll px-5 md:px-20">
      <div className="bg-white p-5 rounded-md w-[380px] h-[250px] md:w-[600px] md:h-[360px]">
        <div className="flex items-center  border-2 border-black p-2">
          <img src="ngo.png" alt="" className="w-7 md:w-16" />
          <div>
            <div className="text-center">
              <h1 className="text-black font-nikosh text-md md:text-xl ">
                গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
              </h1>
              <h2 className="text-xs md:text-xl text-green-800 mx-1">
                Goverment of the People's Republic of Bangladesh
              </h2>
              <h1 className="text-xs md:text-xl text-red-600">
                NATIONAL ID CARD{" "}
                <span className="text-black font-nikosh">
                  / জাতীয় পরিচয় পত্র
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-l-2 border-r-2 border-black p-2 flex justify-around">
          <div className="flex flex-col space-y-1 md:space-y-3">
            <img
              className="w-16 h-16 md:w-28 md:h-28"
              src="me.jpg"
              alt="user image"
            />
            <img
              src="signature.jpg"
              className="w-16 h-5 md:w-28 md:h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col md:space-y-1">
            <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
              নাম: আব্দুল্লাহ আল নিরব
            </h1>
            <h1 className="text-xs md:text-xl text-black pr-8 ">
              Name: ABDULLAH AL NIROB
            </h1>
            <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
              পিতা: মোতালেব হোসেন
            </h1>
            <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
              মাতা: লাভলী বানু
            </h1>
            <h1 className="text-xs md:text-xl text-red-600 pr-8 ">
              Date of Birth: <span className="text-black">01 Nov 2007</span>
            </h1>
            <h1 className="text-xs md:text-2xl text-black pr-8 ">
              ID NO: <span className=" text-red-600">12345678901</span>
            </h1>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="overflow-y-scroll">
        <div className="bg-white p-5 rounded-md w-[380px] h-[260px] md:w-[600px] md:h-[360px]">
          <div className="border-2 border-black">
            <div>
              <h1 className="text-xs md:text-base font-nikosh text-black m-1 mx-3">
                এই কার্ডটি গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের সম্পত্তি । কার্ডটি
                ব্যবহারকারী ব্যতীত অন্য কোথাও পাওয়া গেলে নিকটস্থ পোস্ট অফিসে জমা
                দেবার জন্য অনুরধ করা হলো।
              </h1>
            </div>
            <div className="border-b-2 border-t-2  border-black space-y-2 md:space-y-6  p-1 px-3">
              <h1 className="text-black text-xs md:text-base">
                <div className="font-nikosh">
                  ঠিকানা: {""}
                  <span className="font-nikosh">
                    বাসা/হোল্ডিংঃ ভানোর ধনিবস্তী, গ্রাম/রাস্তা: ভানোর, ডাকঘর:
                    হলদিবাড়ী হাট - ৫১৪০,বাকিয়াডাংগী, ঠাকুরগাঁও
                  </span>
                </div>
              </h1>
              <div className="text-xs md:text-base flex items-center justify-between text-black">
                <h1 className="text-xs md:text-base font-nikosh text-black">
                  রক্তের গ্রুপ / Blood Group{" "}
                  <span
                    className="text-xs md:text-base font-nikosh
                
                text-red-600"
                  >
                    {"B+"}
                  </span>{" "}
                  জন্মস্থান: ঠাকুরগাঁও
                </h1>
                <h1 className="bg-black  text-white text-xs md:text-base font-nikosh">
                  মুদ্রণ:০১
                </h1>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <img src="signature.svg" alt="" className="w-20 md:w-32" />
              </div>
              <div className="flex items-center justify-between mx-4">
                <h1 className="text-xs md:text-base font-nikosh text-black">
                  প্রদানকারীর স্বক্ষর
                </h1>
                <div className="text-xs md:text-base font-nikosh text-black">
                  তারিখ:১৪/১২/২০২৪
                </div>
              </div>
              <div>
                <img
                  className="w-[450px] h-[40px] md:w-[560px] md:h-[60px]"
                  src="barcode.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NidCopy;
