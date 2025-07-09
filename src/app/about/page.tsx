import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-blue-200 min-h-screen w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-700">
            Learn more about my journey and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h2>
              <p className="text-gray-700 mb-4">
                I was born on October 31, 2005. Now, I am a beginner full-stack developer and just graduated in ICT from the Institute of Information and Communication Technology.
I am interested in programming, web design, and photography.I also enjoy graphic design and video editing.I have creative thinking skills and can create different types of content for the digital world today.
              </p>
              <p className="text-gray-700 mb-4">
                I am a responsible person who always comes to work on time and takes care of my duties.If I make a mistake, I can accept it and learn from it.However, I don’t really like strict rules or systems that are too controlling.

              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What I Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Frontend development with React, Next.js, and TypeScript</li>
                <li>• Backend development with Node.js and Python</li>
                <li>• Database design and optimization</li>
                <li>• Cloud deployment and DevOps</li>
                <li>• UI/UX design and prototyping</li>
                <li>• Photo graphic</li>
                <li>• Creating Content</li>
                <li>• Edit video</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interesting</h3>
              <p className="text-gray-700">
                I’m interested in video editing, coding, photography, and gaming.

I also enjoy playing music, even though I’m not very good at it — or maybe I don’t know how to play at all! But I still enjoy it a lot.

I love learning new things on the internet, especially topics about technology and creativity.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}