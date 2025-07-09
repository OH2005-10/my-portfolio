export default function Experience() {
  return (
    <div className="min-h-screen w-full bg-blue-200 py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience</h1>
        <p className="text-xl text-gray-700">
          My educational background and learning experiences
        </p>
      </div>

      {/* Education Blocks */}
      <section className="max-w-4xl mx-auto space-y-6">
        {/* Block 1 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Institute of Information and Communication Technology
          </h2>
          <p className="text-blue-600">Bachelor's Degree in ICT</p>
          <p className="text-gray-500 text-sm">2022 - 2026</p>
        </div>

        {/* Block 2 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Sonephithak Laos College
          </h2>
          <p className="text-blue-600">High Vocational Certificate in English Business</p>
          <p className="text-gray-500 text-sm">2023 - 2026</p>
        </div>

        {/* Block 3 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            KOREA-ASIAN DIGITAL ACADEMY [KADA]
          </h2>
          <p className="text-blue-600">Class B - Full Stack Development</p>
        </div>
      </section>
    </div>
  );
}
