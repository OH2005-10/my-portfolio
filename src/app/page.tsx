export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/06/79/24/04/360_F_679240422_SaoeBPCsh3SswLeGBN42MTPvm9n9I9JQ.jpg')",
      }}
    >
      {/* Profile Image */}
      <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="/pub.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <p className="text-4xl font-semibold text-white mt-6 drop-shadow-lg">
        Anothai Chitpasert
      </p>
      <p className="text-2xl font-semibold text-white mt-6 drop-shadow-lg">
        Full Stack Developer
      </p>
    </div>
  );
}
