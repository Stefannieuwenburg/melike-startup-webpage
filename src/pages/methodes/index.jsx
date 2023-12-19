//import { motion } from "framer-motion";
export const Methodes = () => {
  return (
    <>
      {/* <!-- component --> */}
<div id="methodes" class="bg-gradient-to-bl from-blue-50 to-violet-50 flex items-center justify-center lg:h-screen">
      <div class="container  mx-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {/* <!-- Replace this with your grid items --> */}
          <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">B 1</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <button class="px-2 py-2 bg-slate-600 text-white rounded-xl hover:bg-gray-400">
              Read More
            </button>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">B 2</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">B 3</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img src="https://placehold.co/300x200/d1d4ff/352cb5.png" alt="Placeholder Image" class="w-full h-48 rounded-md object-cover"/>
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">B 4</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">Read More</a>
            </div>
          </div>
          {/* <!-- Add more items as needed --> */}
        </div>
      </div>
    </div>
    </>
  );
};
