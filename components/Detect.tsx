import Link from "next/link";

export default function Detect() {
  return (
    <div className="grid h-screen w-screen justify-center content-center bg-white text-black text-2xl font-bold">
      <p>Go to the detection page</p>
      <div className="flex justify-center">
        <Link
          href="/detect"
          className="bg-green-500 inline-block py-4 px-8 rounded-xl mt-8 text-center font-bold text-white hover:bg-green-600 transition duration-150"
        >
          Detect
        </Link>
      </div>
    </div>
  );
}
