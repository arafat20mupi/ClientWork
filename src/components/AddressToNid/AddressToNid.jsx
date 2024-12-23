import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import toast from "react-hot-toast";

const AddressToNid = () => {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();


  const data = {
    "ঢাকা বিভাগ": {
      ঢাকা: ["ধামরাই", "ধানমন্ডি", "দোহার", "কেরানীগঞ্জ", "নবাবগঞ্জ", "সাভার"],
      ফরিদপুর: [
        "আলফাডাঙ্গা",
        "ভাঙ্গা",
        "বোয়ালমারী",
        "চরভদ্রাসন",
        "ফরিদপুর সদর",
        "মধুখালী",
        "নগরকান্দা",
        "সদরপুর",
        "সালথা",
      ],
      গাজীপুর: [
        "গাজীপুর সদর",
        "কালিয়াকৈর",
        "কালীগঞ্জ",
        "কাপাসিয়া",
        "শ্রীপুর",
      ],
      গোপালগঞ্জ: [
        "গোপালগঞ্জ সদর",
        "কাশিয়ানী",
        "কোটালীপাড়া",
        "মুকসুদপুর",
        "টুঙ্গিপাড়া",
      ],
      কিশোরগঞ্জ: [
        "অষ্টগ্রাম",
        "বাজিতপুর",
        "ভৈরব",
        "হোসেনপুর",
        "ইটনা",
        "করিমগঞ্জ",
        "কটিয়াদী",
        "কিশোরগঞ্জ সদর",
        "কুলিয়ারচর",
        "মিঠামইন",
        "নিকলী",
        "পাকুন্দিয়া",
        "তাড়াইল",
      ],
      মাদারীপুর: ["কালকিনি", "মাদারীপুর সদর", "রাজৈর", "শিবচর"],
      মানিকগঞ্জ: [
        "দৌলতপুর",
        "ঘিওর",
        "হরিরামপুর",
        "মানিকগঞ্জ সদর",
        "সাটুরিয়া",
        "শিবালয়",
        "সিংগাইর",
      ],
      মুন্সিগঞ্জ: [
        "গজারিয়া",
        "লৌহজং",
        "মুন্সিগঞ্জ সদর",
        "সিরাজদিখান",
        "শ্রীনগর",
        "টঙ্গীবাড়ী",
      ],
      নারায়ণগঞ্জ: [
        "আড়াইহাজার",
        "বন্দর",
        "নারায়ণগঞ্জ সদর",
        "রূপগঞ্জ",
        "সোনারগাঁও",
      ],
      নরসিংদী: [
        "বেলাবো",
        "মনোহরদী",
        "নরসিংদী সদর",
        "পলাশ",
        "রায়পুরা",
        "শিবপুর",
      ],
      রাজবাড়ী: [
        "বালিয়াকান্দি",
        "গোয়ালন্দ",
        "পাংশা",
        "রাজবাড়ী সদর",
        "কালুখালী",
      ],
      শরীয়তপুর: [
        "ভেদরগঞ্জ",
        "ডামুড্যা",
        "গোসাইরহাট",
        "নড়িয়া",
        "শরীয়তপুর সদর",
        "জাজিরা",
      ],
      টাঙ্গাইল: [
        "বাসাইল",
        "ভূয়াপুর",
        "দেলদুয়ার",
        "ধনবাড়ী",
        "ঘাটাইল",
        "গোপালপুর",
        "কালিহাতী",
        "মধুপুর",
        "মির্জাপুর",
        "নাগরপুর",
        "সখিপুর",
        "টাঙ্গাইল সদর",
      ],
    },
    "চট্টগ্রাম বিভাগ": {
      বান্দরবান: [
        "বান্দরবান সদর",
        "রোয়াংছড়ি",
        "রুমা",
        "থানচি",
        "লামা",
        "আলীকদম",
        "নাইক্ষ্যংছড়ি",
      ],
      ব্রাহ্মণবাড়িয়া: [
        "বাঞ্ছারামপুর",
        "বিজয় নগর",
        "ব্রাহ্মণবাড়িয়া সদর",
        "কসবা",
        "নবীনগর",
        "নাসিরনগর",
        "সরাইল",
      ],
      চাঁদপুর: [
        "চাঁদপুর সদর",
        "ফরিদগঞ্জ",
        "হাইমচর",
        "কচুয়া",
        "মতলব দক্ষিণ",
        "মতলব উত্তর",
        "শাহরাস্তি",
      ],
      চট্টগ্রাম: [
        "আনোয়ারা",
        "বাঁশখালী",
        "বোয়ালখালী",
        "চন্দনাইশ",
        "ফটিকছড়ি",
        "লোহাগাড়া",
        "মিরসরাই",
        "পটিয়া",
        "রাঙ্গুনিয়া",
        "রাউজান",
        "সন্দ্বীপ",
        "সাতকানিয়া",
        "সীতাকুণ্ড",
      ],
      কক্সবাজার: [
        "চকোরিয়া",
        "কক্সবাজার সদর",
        "কুতুবদিয়া",
        "মহেশখালী",
        "রামু",
        "টেকনাফ",
        "উখিয়া",
        "পেকুয়া",
      ],
      কুমিল্লা: [
        "বরুড়া",
        "ব্রাহ্মণপাড়া",
        "বুরিচং",
        "চান্দিনা",
        "কুমিল্লা সদর দক্ষিণ",
        "কুমিল্লা আদর্শ সদর",
        "দাউদকান্দি",
        "দেবিদ্বার",
        "হোমনা",
        "লাকসাম",
        "মেঘনা",
        "মনোহরগঞ্জ",
        "মুরাদনগর",
        "নাঙ্গলকোট",
        "তিতাস",
      ],
      ফেনী: [
        "ছাগলনাইয়া",
        "দাগনভূইয়া",
        "ফেনী সদর",
        "পরশুরাম",
        "সোনাগাজী",
        "ফুলগাজী",
      ],
      খাগড়াছড়ি: [
        "দীঘিনালা",
        "গুইমারা",
        "খাগড়াছড়ি সদর",
        "লক্ষ্মীছড়ি",
        "মহালছড়ি",
        "মাটিরাঙ্গা",
        "পানছড়ি",
        "রামগড়",
      ],
      লক্ষ্মীপুর: ["কমলনগর", "লক্ষ্মীপুর সদর", "রায়পুর", "রামগঞ্জ", "রামগতি"],
      নোয়াখালী: [
        "বেগমগঞ্জ",
        "কোম্পানীগঞ্জ",
        "হাতিয়া",
        "নোয়াখালী সদর",
        "সুবর্ণচর",
        "সেনবাগ",
        "চাটখিল",
      ],
      রাঙ্গামাটি: [
        "বাঘাইছড়ি",
        "বরকল",
        "বেলাইছড়ি",
        "জুরাইছড়ি",
        "কাপ্তাই",
        "লংগদু",
        "নানিয়ারচর",
        "রাজস্থলী",
        "রাঙ্গামাটি সদর",
      ],
    },
    "খুলনা বিভাগ": {
      বাগেরহাট: [
        "বাগেরহাট সদর",
        "চিতলমারী",
        "ফকিরহাট",
        "কচুয়া",
        "মোল্লাহাট",
        "মোংলা",
        "মোড়েলগঞ্জ",
        "রামপাল",
        "শরণখোলা",
      ],
      চুয়াডাঙ্গা: ["আলমডাঙ্গা", "চুয়াডাঙ্গা সদর", "দামুড়হুদা", "জীবননগর"],
      যশোর: [
        "অভয়নগর",
        "বাঘেরপাড়া",
        "চৌগাছা",
        "যশোর সদর",
        "ঝিকরগাছা",
        "কেশবপুর",
        "মনিরামপুর",
        "শার্শা",
      ],
      ঝিনাইদহ: [
        "হরিণাকুণ্ডু",
        "ঝিনাইদহ সদর",
        "কালীগঞ্জ",
        "কোটচাঁদপুর",
        "মহেশপুর",
        "শৈলকুপা",
      ],
      খুলনা: [
        "বটিয়াঘাটা",
        "ডুমুরিয়া",
        "দিঘলিয়া",
        "ডুমুরিয়া",
        "কয়রা",
        "পাইকগাছা",
        "ফুলতলা",
        "রূপসা",
        "তেরখাদা",
      ],
      কুষ্টিয়া: [
        "ভেরামারা",
        "দৌলতপুর",
        "খোকসা",
        "কুমারখালী",
        "কুষ্টিয়া সদর",
        "মিরপুর",
      ],
      মাগুরা: ["মাগুরা সদর", "মহম্মদপুর", "শালিখা", "শ্রীপুর"],
      মেহেরপুর: ["গাংনী", "মেহেরপুর সদর", "মুজিবনগর"],
      নড়াইল: ["কালিয়া", "লোহাগড়া", "নড়াইল সদর"],
      সাতক্ষীরা: [
        "আশাশুনি",
        "দেবহাটা",
        "কালীগঞ্জ",
        "কলারোয়া",
        "সাতক্ষীরা সদর",
        "শ্যামনগর",
        "তালা",
      ],
    },
    "বরিশাল বিভাগ": {
      বরিশাল: [
        "আগৈলঝাড়া",
        "বাবুগঞ্জ",
        "বাকেরগঞ্জ",
        "বানারীপাড়া",
        "বরিশাল সদর",
        "গৌরনদী",
        "হিজলা",
        "মেহেন্দিগঞ্জ",
        "মুলাদী",
        "ওয়াজিরপুর",
      ],
      বরগুনা: ["আমতলী", "বামনা", "বরগুনা সদর", "বেতাগী", "পাথরঘাটা", "তালতলী"],
      ভোলা: [
        "ভোলা সদর",
        "বোরহানউদ্দিন",
        "চরফ্যাশন",
        "দৌলতখান",
        "লালমোহন",
        "মনপুরা",
        "তজুমুদ্দিন",
      ],
      ঝালকাঠি: ["ঝালকাঠি সদর", "কাঠালিয়া", "নলছিটি", "রাজাপুর"],
      পটুয়াখালী: [
        "বাউফল",
        "দশমিনা",
        "গলাচিপা",
        "কলাপাড়া",
        "মির্জাগঞ্জ",
        "পটুয়াখালী সদর",
        "রাঙ্গাবালী",
      ],
      পিরোজপুর: [
        "ভাণ্ডারিয়া",
        "কাউখালী",
        "মঠবাড়িয়া",
        "নাজিরপুর",
        "নেছারাবাদ",
        "পিরোজপুর সদর",
        "জিয়ানগর",
      ],
    },
    "ময়মনসিংহ বিভাগ": {
      জামালপুর: [
        "বক্সীগঞ্জ",
        "দেওয়ানগঞ্জ",
        "ইসলামপুর",
        "জামালপুর সদর",
        "মাদারগঞ্জ",
        "মেলান্দহ",
        "সরিষাবাড়ী",
      ],
      ময়মনসিংহ: [
        "ভালুকা",
        "ধোবাউড়া",
        "ফুলবাড়ীয়া",
        "গফরগাঁও",
        "গৌরীপুর",
        "হালুয়াঘাট",
        "ঈশ্বরগঞ্জ",
        "ময়মনসিংহ সদর",
        "নান্দাইল",
        "ফুলপুর",
        "ত্রিশাল",
      ],
      নেত্রকোণা: [
        "আটপাড়া",
        "বারহাট্টা",
        "দুর্গাপুর",
        "কলমাকান্দা",
        "কেন্দুয়া",
        "মদন",
        "মোহনগঞ্জ",
        "নেত্রকোণা সদর",
        "পূর্বধলা",
      ],
      শেরপুর: ["ঝিনাইগাতী", "নকলা", "নালিতাবাড়ী", "শেরপুর সদর", "শ্রীবর্দী"],
    },
    "রাজশাহী বিভাগ": {
      বগুড়া: [
        "আদমদীঘি",
        "বগুড়া সদর",
        "ধুনট",
        "দুপচাঁচিয়া",
        "গাবতলী",
        "কাহালু",
        "নন্দীগ্রাম",
        "সারিয়াকান্দি",
        "শেরপুর",
        "শিবগঞ্জ",
        "সোনাতলা",
      ],
      জয়পুরহাট: [
        "আক্কেলপুর",
        "জয়পুরহাট সদর",
        "কালাই",
        "ক্ষেতলাল",
        "পাঁচবিবি",
      ],
      নওগাঁ: [
        "আত্রাই",
        "বদলগাছী",
        "ধামইরহাট",
        "মহাদেবপুর",
        "মান্দা",
        "নওগাঁ সদর",
        "নিয়ামতপুর",
        "পত্নীতলা",
        "পোরশা",
        "রাণীনগর",
        "সাপাহার",
      ],
      নাটোর: [
        "বাগাতিপাড়া",
        "বড়াইগ্রাম",
        "গুরুদাসপুর",
        "লালপুর",
        "নাটোর সদর",
        "সিংড়া",
      ],
      চাঁপাইনবাবগঞ্জ: [
        "ভোলাহাট",
        "গোমস্তাপুর",
        "নাচোল",
        "নবাবগঞ্জ সদর",
        "শিবগঞ্জ",
      ],
      পাবনা: [
        "আটঘরিয়া",
        "বেড়া",
        "ভাঙ্গুড়া",
        "চাটমোহর",
        "ফরিদপুর",
        "ঈশ্বরদী",
        "পাবনা সদর",
        "সাঁথিয়া",
        "সুজানগর",
      ],
      রাজশাহী: [
        "বাঘা",
        "বাগমারা",
        "চারঘাট",
        "দুর্গাপুর",
        "গোদাগাড়ী",
        "মোহনপুর",
        "পবা",
        "পুঠিয়া",
        "রাজশাহী সদর",
        "তানোর",
      ],
      সিরাজগঞ্জ: [
        "বেলকুচি",
        "চৌহালী",
        "কামারখন্দ",
        "কাজিপুর",
        "রায়গঞ্জ",
        "শাহজাদপুর",
        "সিরাজগঞ্জ সদর",
        "তাড়াশ",
        "উল্লাপাড়া",
      ],
    },
    "রংপুর বিভাগ": {
      দিনাজপুর: [
        "বিরামপুর",
        "বীরগঞ্জ",
        "বিরাম",
        "বোচাগঞ্জ",
        "চিরিরবন্দর",
        "দিনাজপুর সদর",
        "ঘোড়াঘাট",
        "হাকিমপুর",
        "কাহারোল",
        "খানসামা",
        "নবাবগঞ্জ",
        "পার্বতীপুর",
        "ফুলবাড়ী",
      ],
      গাইবান্ধা: [
        "ফুলছড়ি",
        "গাইবান্ধা সদর",
        "গোবিন্দগঞ্জ",
        "পলাশবাড়ী",
        "সাদুল্লাপুর",
        "সুঘাটা",
        "সুন্দরগঞ্জ",
      ],
      কুড়িগ্রাম: [
        "ভুরুঙ্গামারী",
        "চিলমারী",
        "কুড়িগ্রাম সদর",
        "নাগেশ্বরী",
        "ফুলবাড়ী",
        "রাজারহাট",
        "রৌমারী",
        "উলিপুর",
      ],
      লালমনিরহাট: [
        "আদিতমারী",
        "হাতীবান্ধা",
        "কালীগঞ্জ",
        "লালমনিরহাট সদর",
        "পাটগ্রাম",
      ],
      নীলফামারী: [
        "ডিমলা",
        "ডোমার",
        "জলঢাকা",
        "কিশোরগঞ্জ",
        "নীলফামারী সদর",
        "সৈয়দপুর",
      ],
      পঞ্চগড়: ["আটোয়ারী", "বোদা", "দেবীগঞ্জ", "পঞ্চগড় সদর", "তেঁতুলিয়া"],
      রংপুর: [
        "বদরগঞ্জ",
        "গঙ্গাচড়া",
        "কাউনিয়া",
        "মিঠাপুকুর",
        "পীরগাছা",
        "পীরগঞ্জ",
        "রংপুর সদর",
        "তারাগঞ্জ",
      ],
      ঠাকুরগাঁও: [
        "বালিয়াডাঙ্গী",
        "হরিপুর",
        "পীরগঞ্জ",
        "রাণীশংকৈল",
        "ঠাকুরগাঁও সদর",
      ],
    },
    "সিলেট বিভাগ": {
      হবিগঞ্জ: [
        "বাহুবল",
        "বানিয়াচং",
        "চুনারুঘাট",
        "হবিগঞ্জ সদর",
        "লাখাই",
        "মাধবপুর",
        "নবীগঞ্জ",
        "শায়েস্তাগঞ্জ",
      ],
      মৌলভীবাজার: [
        "বড়লেখা",
        "কমলগঞ্জ",
        "কুলাউড়া",
        "মৌলভীবাজার সদর",
        "রাজনগর",
        "শ্রীমঙ্গল",
      ],
      সুনামগঞ্জ: [
        "বিশ্বম্ভরপুর",
        "ছাতক",
        "দেরাই",
        "ধর্মপাশা",
        "দোয়ারাবাজার",
        "জগন্নাথপুর",
        "জামালগঞ্জ",
        "শাল্লা",
        "সুনামগঞ্জ সদর",
        "তাহিরপুর",
      ],
      সিলেট: [
        "বালাগঞ্জ",
        "বিয়ানীবাজার",
        "বিশ্বনাথ",
        "কোম্পানীগঞ্জ",
        "দক্ষিণ সুরমা",
        "ফেঞ্চুগঞ্জ",
        "গোয়াইনঘাট",
        "জৈন্তাপুর",
        "কানাইঘাট",
        "সিলেট সদর",
        "জকিগঞ্জ",
      ],
    },
  };

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");


  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedUpazila("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedUpazila("");
  };

  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
  };
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const onSubmit = (formData) => {
    console.log({
      ...formData,
      selectedDivision,
      selectedDistrict,
      selectedUpazila,
    });
    setLoading(true);
    axios
      .post("/api/AddressToNID", {
        ...formData,
        selectedDivision,
        selectedDistrict,
        selectedUpazila,
        userId: user && user.user._id
      })
      .then((response) => {
        console.log(response.data);
        toast.success("Form submitted successfully");
        reset();
        setSelectedDivision("");
        setSelectedDistrict("");
        setSelectedUpazila("");
      })
      .catch((error) => {
        console.error("Error:", error.response?.data || error.message);
        toast.error(
          error.response?.data?.error || "An error occurred while submitting the form"
        );
      })
      .finally(() => {
        setLoading(false);
      });


  };

  return (
    <div className="px-5">
      <div className="max-w-md md:max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold leading-tight bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
          নাম ঠিকানা দিয়ে এন আইডি অর্ডার করুন
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">নাম</label>
            <input
              type="text"
              className={`border rounded-md p-2 w-full ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="নাম ঠিকানা দিয়ে এন আই ডি 350 টাকা"
              {...register("name", { required: "নামটি দেওয়া আবশ্যক।" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ডিভিশন</label>
            <select
              className={`border rounded-md p-2 w-full ${errors.division ? "border-red-500" : "border-gray-300"
                }`}
              {...register("division", { required: "ডিভিশন নির্বাচন আবশ্যক।" })}
              value={selectedDivision}
              onChange={handleDivisionChange}
            >
              <option disabled value="">
                Select Division
              </option>
              {Object.keys(data).map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
            {errors.division && (
              <p className="text-red-500 text-sm mt-1">
                {errors.division.message}
              </p>
            )}
          </div>
          {selectedDivision && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">জেলা</label>
              <select
                className={`border rounded-md p-2 w-full ${errors.district ? "border-red-500" : "border-gray-300"
                  }`}
                {...register("district", { required: "জেলা নির্বাচন আবশ্যক।" })}
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option disabled value="">
                  Select District
                </option>
                {Object.keys(data[selectedDivision]).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.district.message}
                </p>
              )}
            </div>
          )}
          {selectedDistrict && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">উপজেলা</label>
              <select
                className={`border rounded-md p-2 w-full ${errors.upazila ? "border-red-500" : "border-gray-300"
                  }`}
                {...register("upazila", { required: "উপজেলা নির্বাচন আবশ্যক।" })}
                value={selectedUpazila}
                onChange={handleUpazilaChange}
              >
                <option value="">Select Upazila</option>
                {data[selectedDivision][selectedDistrict].map((upazila) => (
                  <option key={upazila} value={upazila}>
                    {upazila}
                  </option>
                ))}
              </select>
              {errors.upazila && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.upazila.message}
                </p>
              )}
            </div>
          )}
          {selectedUpazila && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">ইউনিয়ন</label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.union ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="ইউনিয়ন লিখুন।"
                  {...register("union", { required: "ইউনিয়ন লিখুন।" })}
                />
                {errors.union && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.union.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">ওয়ার্ড</label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.ward ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="ওয়ার্ড লিখুন"
                  {...register("ward", { required: "ওয়ার্ড লিখুন।" })}
                />
                {errors.ward && (
                  <p className="text-red-500 text-sm mt-1">{errors.ward.message}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">গ্রামঃ</label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.village ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="গ্রাম লিখুন।"
                  {...register("village", { required: "গ্রাম লিখুন।" })}
                />
                {errors.village && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.village.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  ভোটার এলাকার নাম
                </label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.areaName ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="ভোটার এলাকার নাম লিখুন।"
                  {...register("areaName", { required: "ভোটার এলাকার নাম লিখুন।" })}
                />
                {errors.areaName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.areaName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">পিতার নাম</label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.fatherName ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="পিতার নাম লিখুন।"
                  {...register("fatherName", { required: "পিতার নাম লিখুন।" })}
                />
                {errors.fatherName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.fatherName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">মাতার নাম</label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full ${errors.motherName ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="মাতার নাম লিখুন।"
                  {...register("motherName", { required: "মাতার নাম লিখুন।" })}
                />
                {errors.motherName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.motherName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  স্বামী/স্ত্রীর নাম (Optional)
                </label>
                <input
                  type="text"
                  className={`border rounded-md p-2 w-full`}
                  placeholder="স্বামী/স্ত্রীর নাম (Optional)"
                  {...register("spouseName")}
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              WhatsApp নাম্বার
            </label>
            <input
              type="text"
              className={`border rounded-md p-2 w-full ${errors.whatsApp ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="WhatsApp নাম্বার লিখুন।"
              {...register("whatsApp", {
                required: "WhatsApp নাম্বার লিখুন।",
                pattern: {
                  value: /^\d{11}$/,
                  message: "Please enter a valid 11-digit WhatsApp number.",
                },
              })}
            />
            {errors.whatsApp && (
              <p className="text-red-500 text-sm mt-1">{errors.whatsApp.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="text-md bg-green-500 hover:bg-green-600 duration-200 text-white px-7 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressToNid;
