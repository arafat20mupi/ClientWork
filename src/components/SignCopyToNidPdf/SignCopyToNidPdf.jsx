

const SignCopyToNidPdf = () => {
  return (
    <div className="px-20">
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
          className="bg-slate-500 p-6 rounded-md flex flex-col space-y-7 w-1/2"
        >
          <input className="px-5 py-2 rounded" type="text" placeholder="Name" />
          <input className="px-5 py-2 rounded" type="text" placeholder="Name" />
          <input className="px-5 py-2 rounded" type="text" placeholder="Name" />
          <input className="px-5 py-2 rounded" type="text" placeholder="Name" />
          <input className="px-5 py-2 rounded" type="text" placeholder="Name" />
        </form>
      </div>
    </div>
  );
};

export default SignCopyToNidPdf;