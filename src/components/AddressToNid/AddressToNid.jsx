import { useState } from "react";
import { useForm } from "react-hook-form";

const AddressToNid = () => {
  const { register, handleSubmit, reset } = useForm();

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const data = {
    divisions: [
      { id: 1, name: "Dhaka" },
      { id: 2, name: "Chittagong" },
    ],
    districts: {
      Dhaka: [
        { id: 1, name: "Gazipur" },
        { id: 2, name: "Narsingdi" },
      ],
      Chittagong: [
        { id: 3, name: "Cox's Bazar" },
        { id: 4, name: "Rangamati" },
      ],
    },
    upazilas: {
      Gazipur: [
        { id: 1, name: "Tongi" },
        { id: 2, name: "Sreepur" },
      ],
      Narsingdi: [
        { id: 3, name: "Raipura" },
        { id: 4, name: "Belabo" },
      ],
      "Cox's Bazar": [
        { id: 5, name: "Chakaria" },
        { id: 6, name: "Teknaf" },
      ],
      Rangamati: [
        { id: 7, name: "Kaptai" },
        { id: 8, name: "Baghaichhari" },
      ],
    },
  };

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

  const onSubmit = (formData) => {
    console.log({
      ...formData,
      selectedDivision,
      selectedDistrict,
      selectedUpazila,
    });
    alert("Form submitted successfully!");
    reset();
    setSelectedDivision("");
    setSelectedDistrict("");
    setSelectedUpazila("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold leading-tight bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        নাম ঠিকানা দিয়ে এন আইডি অরডার করুন
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">নাম</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="নাম ঠিকানা দিয়ে  এন আইডি 650 টাকা
            "
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2"> </label>
          <select
            className="border rounded-md p-2 w-full"
            value={selectedDivision}
            onChange={handleDivisionChange}
          >
            <option value="">নাম ঠিকানা দিয়ে এন আইডি</option>
            {data.divisions.map((division) => (
              <option key={division.id} value={division.name}>
                {division.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">মোবাইল</label>
          <input
            type="text"
            className="border rounded-md p-2 w-full"
            placeholder="Enter your phone number"
            {...register("phone", { required: true })}
          />
        </div>

        {selectedDivision && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              District
            </label>
            <select
              className="border rounded-md p-2 w-full"
              value={selectedDistrict}
              onChange={handleDistrictChange}
            >
              <option value="">Select District</option>
              {data.districts[selectedDivision]?.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedDistrict && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Upazila
            </label>
            <select
              className="border rounded-md p-2 w-full"
              value={selectedUpazila}
              onChange={handleUpazilaChange}
            >
              <option value="">Select Upazila</option>
              {data.upazilas[selectedDistrict]?.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            NID Number
          </label>
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
