export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.itl.cat/pngfile/big/0-623_blue-nature-wallpaper-hd-cool-7-hd-wallpapers.jpg')",
      }}
    >
      {/* Profile Image */}
      <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="/profile.jpeg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <p className="text-4xl font-semibold text-white mt-6 drop-shadow-lg">
        Chanhthaphone Vongkhamxay
      </p>
      <p className="text-2xl font-semibold text-white mt-6 drop-shadow-lg">
        Full Stack Developer
      </p>
    </div>
  );
}
