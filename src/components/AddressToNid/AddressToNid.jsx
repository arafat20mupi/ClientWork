import { useState } from "react";
import { useForm } from "react-hook-form";

const AddressToNid = () => {
  const { register, handleSubmit, reset } = useForm();

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [selectedUnion, setSelectedUnion] = useState("");

  const data = {
    "Dhaka Division": {
      Dhaka: ["Dhamrai", "Dhanmondi", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
      Faridpur: ["Alfadanga", "Bhanga", "Boalmari", "Charbhadrasan", "Faridpur Sadar", "Madhukhali", "Nagarkanda", "Sadarpur", "Saltha"],
      Gazipur: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
      Gopalganj: ["Gopalganj Sadar", "Kashiani", "Kotalipara", "Muksudpur", "Tungipara"],
      Kishoreganj: ["Austagram", "Bajitpur", "Bhairab", "Hossainpur", "Itna", "Karimganj", "Katiadi", "Kishoreganj Sadar", "Kuliarchar", "Mithamain", "Nikli", "Pakundia", "Tarail"],
      Madaripur: ["Kalkini", "Madaripur Sadar", "Rajoir", "Shibchar"],
      Manikganj: ["Daulatpur", "Ghior", "Harirampur", "Manikganj Sadar", "Saturia", "Shivalaya", "Singair"],
      Munshiganj: ["Gazaria", "Lohajang", "Munshiganj Sadar", "Sirajdikhan", "Sreenagar", "Tongibari"],
      Narayanganj: ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj", "Sonargaon"],
      Narsingdi: ["Belabo", "Monohardi", "Narsingdi Sadar", "Palash", "Raipura", "Shibpur"],
      Rajbari: ["Baliakandi", "Goalanda", "Pangsha", "Rajbari Sadar", "Kalukhali"],
      Shariatpur: ["Bhedarganj", "Damudya", "Gosairhat", "Naria", "Shariatpur Sadar", "Zajira"],
      Tangail: ["Basail", "Bhuapur", "Delduar", "Dhanbari", "Ghatail", "Gopalpur", "Kalihati", "Madhupur", "Mirzapur", "Nagarpur", "Sakhipur", "Tangail Sadar"]
    },
    "Chattogram Division": {
      Bandarban: ["Bandarban Sadar", "Rowangchhari", "Ruma", "Thanchi", "Lama", "Alikadam", "Naikhongchhari"],
      Brahmanbaria: ["Bancharampur", "Bijoynagar", "Brahmanbaria Sadar", "Kasba", "Nabinagar", "Nasirnagar", "Sarail"],
      Chandpur: ["Chandpur Sadar", "Faridganj", "Haimchar", "Kachua", "Matlab Dakshin", "Matlab Uttar", "Shahrasti"],
      Chattogram: ["Anwara", "Banshkhali", "Boalkhali", "Chandanaish", "Fatikchhari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
      "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Kutubdia", "Maheshkhali", "Ramu", "Teknaf", "Ukhiya", "Pekua"],
      Cumilla: ["Barura", "Brahmanpara", "Burichang", "Chandina", "Cumilla Sadar Dakshin", "Cumilla Adarsha Sadar", "Daudkandi", "Debidwar", "Homna", "Laksham", "Meghna", "Monohorgonj", "Muradnagar", "Nangalkot", "Titas"],
      Feni: ["Chhagalnaiya", "Daganbhuiyan", "Feni Sadar", "Parshuram", "Sonagazi", "Fulgazi"],
      Khagrachari: ["Dighinala", "Guimara", "Khagrachari Sadar", "Lakshmichhari", "Mahalchhari", "Matiranga", "Panchhari", "Ramgarh"],
      Lakshmipur: ["Kamalnagar", "Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati"],
      Noakhali: ["Begumganj", "Companiganj", "Hatiya", "Noakhali Sadar", "Subarnachar", "Senbagh", "Chatkhil"],
      Rangamati: ["Baghaichhari", "Barkal", "Belaichhari", "Juraichhari", "Kaptai", "Langadu", "Naniarchar", "Rajasthali", "Rangamati Sadar"]
    },
    "Khulna Division": {
      Bagerhat: ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Morrelganj", "Rampal", "Sarankhola"],
      Chuadanga: ["Alamdanga", "Chuadanga Sadar", "Damurhuda", "Jibannagar"],
      Jashore: ["Abhaynagar", "Bagherpara", "Chaugachha", "Jashore Sadar", "Jhikargachha", "Keshabpur", "Manirampur", "Sharsha"],
      Jhenaidah: ["Harinakunda", "Jhenaidah Sadar", "Kaliganj", "Kotchandpur", "Maheshpur", "Shailkupa"],
      Khulna: ["Batiaghata", "Dacope", "Dighalia", "Dumuria", "Koyra", "Paikgachha", "Phultala", "Rupsa", "Terokhada"],
      Kushtia: ["Bheramara", "Daulatpur", "Khoksa", "Kumarkhali", "Kushtia Sadar", "Mirpur"],
      Magura: ["Magura Sadar", "Mohammadpur", "Shalikha", "Sreepur"],
      Meherpur: ["Gangni", "Meherpur Sadar", "Mujibnagar"],
      Narail: ["Kalia", "Lohagara", "Narail Sadar"],
      Satkhira: ["Assasuni", "Debhata", "Kaliganj", "Kalaroa", "Satkhira Sadar", "Shyamnagar", "Tala"]
    },
    "Barisal Division": {
      Barisal: ["Agailjhara", "Babuganj", "Bakerganj", "Banaripara", "Barisal Sadar", "Gournadi", "Hizla", "Mehendiganj", "Muladi", "Wazirpur"],
      Barguna: ["Amtali", "Bamna", "Barguna Sadar", "Betagi", "Patharghata", "Taltali"],
      Bhola: ["Bhola Sadar", "Burhanuddin", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
      Jhalokati: ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
      Patuakhali: ["Bauphal", "Dashmina", "Galachipa", "Kalapara", "Mirzaganj", "Patuakhali Sadar", "Rangabali"],
      Pirojpur: ["Bhandaria", "Kaukhali", "Mathbaria", "Nazirpur", "Nesarabad", "Pirojpur Sadar", "Zianagar"]
    },
    "Mymensingh Division": {
      Jamalpur: ["Bakshiganj", "Dewanganj", "Islampur", "Jamalpur Sadar", "Madarganj", "Melandaha", "Sarishabari"],
      Mymensingh: ["Bhaluka", "Dhobaura", "Fulbaria", "Gaffargaon", "Gouripur", "Haluaghat", "Ishwarganj", "Mymensingh Sadar", "Nandail", "Phulpur", "Trishal"],
      Netrokona: ["Atpara", "Barhatta", "Durgapur", "Kalmakanda", "Kendua", "Madan", "Mohanganj", "Netrokona Sadar", "Purbadhala"],
      Sherpur: ["Jhenaigati", "Nakla", "Nalitabari", "Sherpur Sadar", "Sreebardi"]
    },
    "Rajshahi Division": {
      Bogura: ["Adamdighi", "Bogura Sadar", "Dhunat", "Dupchanchia", "Gabtali", "Kahaloo", "Nandigram", "Sariakandi", "Sherpur", "Shibganj", "Sonatala"],
      Joypurhat: ["Akkelpur", "Joypurhat Sadar", "Kalai", "Khetlal", "Panchbibi"],
      Naogaon: ["Atrai", "Badalgachhi", "Dhamoirhat", "Mahadebpur", "Manda", "Naogaon Sadar", "Niamatpur", "Patnitala", "Porsha", "Raninagar", "Sapahar"],
      Natore: ["Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Natore Sadar", "Singra"],
      Chapainawabganj: ["Bholahat", "Gomostapur", "Nachole", "Nawabganj Sadar", "Shibganj"],
      Pabna: ["Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Pabna Sadar", "Santhia", "Sujanagar"],
      Rajshahi: ["Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Rajshahi Sadar", "Tanore"],
      Sirajganj: ["Belkuchi", "Chauhali", "Kamarkhanda", "Kazipur", "Raiganj", "Shahjadpur", "Sirajganj Sadar", "Tarash", "Ullahpara"]
    },
    "Rangpur Division": {
      Dinajpur: ["Birampur", "Birganj", "Biral", "Bochaganj", "Chirirbandar", "Dinajpur Sadar", "Ghoraghat", "Hakimpur", "Kaharole", "Khansama", "Nawabganj", "Parbatipur" , "Fulbari"],
      Gaibandha: ["Fulchhari", "Gaibandha Sadar", "Gobindaganj", "Palashbari", "Sadullapur", "Sughatta", "Sundarganj"],
      Kurigram: ["Bhurungamari", "Chilmari", "Kurigram Sadar", "Nageshwari", "Phulbari", "Rajarhat", "Raumari", "Ulipur"],
      Lalmonirhat: ["Aditmari", "Hatibandha", "Kaliganj", "Lalmonirhat Sadar", "Patgram"],
      Nilphamari: ["Dimla", "Domar", "Jaldhaka", "Kishoreganj", "Nilphamari Sadar", "Saidpur"],
      Panchagarh: ["Atwari", "Boda", "Debiganj", "Panchagarh Sadar", "Tetulia"],
      Rangpur: ["Badarganj", "Gangachhara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Rangpur Sadar", "Taraganj"],
      Thakurgaon: ["Baliadangi", "Haripur", "Pirganj", "Ranishankail", "Thakurgaon Sadar"]
    },
    "Sylhet Division": {
      Habiganj: ["Bahubal", "Baniachong", "Chunarughat", "Habiganj Sadar", "Lakhai", "Madhabpur", "Nabiganj", "Shayestaganj"],
      Moulvibazar: ["Barlekha", "Kamalganj", "Kulaura", "Moulvibazar Sadar", "Rajnagar", "Sreemangal"],
      Sunamganj: ["Bishwamvarpur", "Chhatak", "Derai", "Dharamapasha", "Dowarabazar", "Jagannathpur", "Jamalganj", "Sullah", "Sunamganj Sadar", "Tahirpur"],
      Sylhet: ["Balaganj", "Beanibazar", "Bishwanath", "Companiganj", "Dakshin Surma", "Fenchuganj", "Gowainghat", "Jaintiapur", "Kanaighat", "Sylhet Sadar", "Zakiganj"]
    }
  };
  

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict("");
    setSelectedUpazila("");
    setSelectedUnion(""); // Reset Union on Division change
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedUpazila("");
    setSelectedUnion(""); // Reset Union on District change
  };

  const handleUpazilaChange = (e) => {
    setSelectedUpazila(e.target.value);
    setSelectedUnion(""); // Reset Union on Upazila change
  };

  const handleUnionChange = (e) => {
    setSelectedUnion(e.target.value);
  };

  const onSubmit = (formData) => {
    console.log({
      ...formData,
      selectedDivision,
      selectedDistrict,
      selectedUpazila,
      selectedUnion,
    });
    alert("Form submitted successfully!");
    reset();
    setSelectedDivision("");
    setSelectedDistrict("");
    setSelectedUpazila("");
    setSelectedUnion("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold leading-tight bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        নাম ঠিকানা দিয়ে এন আই ডি অর্ডার করুন
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">নাম</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="নাম ঠিকানা দিয়ে এন আই ডি 650 টাকা"
            {...register("name", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">ডিভিশন</label>
          <select
            className="border rounded-md p-2 w-full"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            <option disabled value="">Select Division</option>
            {Object.keys(data).map((division) => (
              <option key={division} value={division}>
                {division}
              </option>
            ))}
          </select>
        </div>

        {selectedDivision && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">জেলা</label>
            <select
              className="border rounded-md p-2 w-full"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option disabled value="">Select District</option>
              {Object.keys(data[selectedDivision]).map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedDistrict && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">উপজেলা</label>
            <select
              className="border rounded-md p-2 w-full"
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
          </div>
        )}

        {selectedUpazila && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">ইউনিয়ন</label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              placeholder="Enter Union"
              value={selectedUnion}
              onChange={handleUnionChange}
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">মোবাইল</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Enter your phone number"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">NID Number</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Enter your NID number"
            {...register("nid", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddressToNid;
