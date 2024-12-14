const SignCopyToNidPdf = () => {

  return (
    <div className="px-5 md:px-20 ">
      <div className="max-w-sm mx-auto">
        <button className="bg-green-700 hover:bg-green-800 px-10 py-3 rounded">
          Upload
        </button>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg space-y-3"
        >
          <label htmlFor="">Enter your name (Bengali):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Name.."
          />
          <label htmlFor="">Enter your name(English):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Name.."
          />
          <label htmlFor="">Enter your Father's Name (Bengali):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Father's Name"
          />
          <label htmlFor="">Enter your Mother's Name (Bengali):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Mother's Name"
          />
          <label htmlFor="">Enter your Date of Birth (English):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Date of Birth"
          />
          <label htmlFor="">Enter your ID Number(English):</label>
          <input
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Your ID Number"
          />
          <label htmlFor="">Upload your photo (Ratio 1:1):</label>
          <input
            className="px-5 py-2 rounded bg-black"
            type="file"
          />
          <label htmlFor="">Upload your Signiture:</label>
          <input
            className="px-5 py-2 rounded bg-black"
            type="file"
          />
          <a href="#view-id">
            <button
              type="button"
              className=" text-white w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
            >
              View the ID
            </button>
          </a>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SignCopyToNidPdf;












{/* <div className="overflow-y-scroll">
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
      </div> */}