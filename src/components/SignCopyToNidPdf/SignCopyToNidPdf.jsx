import { useState } from "react";

const SignCopyToNidPdf = () => {
  const [profileImgPreview, setProfileImgPreview] = useState("u-place.jpg");
  const [signaturePreview, setsignaturePreview] = useState("signature.svg");
  const [banglaname, setBanglaName] = useState("");
  const [englishname, setEnglishName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [mothername, setMothername] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [idNumber, setidNumber] = useState("");

  return (
    <div className="px-5 md:px-20">
      <div>
        <button className="bg-green-700 hover:bg-green-800 px-10 py-3 rounded">
          Upload
        </button>
      </div>
      <br />
      <br />
      <div>
        <form
          action=""
          className="bg-white p-6 rounded-md flex flex-col space-y-2 md:w-1/2"
        >
          <label htmlFor="">Enter your name (Bengali):</label>
          <input
            onChange={(event) => setBanglaName(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Name.."
          />
          <label htmlFor="">Enter your name(English):</label>
          <input
            onChange={(event) => setEnglishName(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Name.."
          />
          <label htmlFor="">Enter your Father's Name (Bengali):</label>
          <input
            onChange={(event) => setFatherName(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Father's Name"
          />
          <label htmlFor="">Enter your Mother's Name (Bengali):</label>
          <input
            onChange={(event) => setMothername(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Mother's Name"
          />
          <label htmlFor="">Enter your Date of Birth (English):</label>
          <input
            onChange={(event) => setdateofBirth(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Date of Birth"
          />
          <label htmlFor="">Enter your ID Number(English):</label>
          <input
            onChange={(event) => setidNumber(event.target.value)}
            className="px-5 py-2 rounded"
            type="text"
            placeholder="Your ID Number"
          />
          <label htmlFor="">Upload your photo (Ratio 1:1):</label>
          <input
            onChange={(e) =>
              setProfileImgPreview(URL.createObjectURL(e.target.files[0]))
            }
            // onChange={(event) => setProfilePic(event.target.value)}
            className="px-5 py-2 rounded bg-black"
            type="file"
          />
          <label htmlFor="">Upload your Signiture:</label>
          <input
            onChange={(e) =>
              setsignaturePreview(URL.createObjectURL(e.target.files[0]))
            }
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
      <div className="overflow-y-scroll" id="view-id">
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
                // src="me.jpg"
                src={profileImgPreview}
                alt="user image"
              />
              <img
                // src="signature.jpg"
                src={signaturePreview}
                className="w-16 h-5 md:w-28 md:h-10"
                alt=""
              />
            </div>
            <div className="flex flex-col md:space-y-1">
              <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
                {/* নাম: আব্দুল্লাহ আল নিরব */}
                নাম:{" "}
                <span className="font-semibold font-nikosh">{banglaname}</span>
              </h1>
              <h1 className="text-xs md:text-xl text-black pr-8 ">
                {/* Name: ABDULLAH AL NIROB */}
                Name: <span className="font-semibold">{englishname}</span>
              </h1>
              <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
                {/* পিতা: মোতালেব হোসেন */}
                পিতা:{" "}
                <span className="font-semibold font-nikosh">{fathername}</span>
              </h1>
              <h1 className="text-xs md:text-xl font-nikosh text-black pr-8 ">
                মাতা:{" "}
                <span className="font-semibold font-nikosh">{mothername}</span>
              </h1>
              <h1 className="text-xs md:text-xl text-red-600 pr-8 ">
                Date of Birth: <span className="text-black">{dateofBirth}</span>
              </h1>
              <h1 className="text-xs md:text-2xl text-black pr-8 ">
                ID NO: <span className=" text-red-600">{idNumber}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignCopyToNidPdf;
