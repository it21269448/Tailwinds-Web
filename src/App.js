import React from 'react';
import './output.css';
import Header from './Header';
import image1 from './images/p1.jpg';
import image2 from './images/p2.jpg';
import image3 from './images/p3.jfif';
import image4 from './images/p4.jfif';

const App = () => {
  return (
    <div className="bg-purple-100">
      <Header />
      
      {/* Latest stories header */}
      <div className="bg-purple-300 bg-gradient-to-r from-purple-400 to-white flex justify-center h-5 w-[200px] mt-[40px] font-bold text-2xl mx-60 text-purple-700">
        Latest stories
      </div>

      {/* Container for story boxes */}
      <div className="mt-[50px]">
      <div className='flex justify-center space-x-0 '>
      <div className="flex justify-center mx-auto">
          <div className="w-52">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-2">
              
              {/* Story 1 */}
              <div className="flex items-center justify-between p-6 space-x-4 rounded-lg shadow-md bg-purple-50">              
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Dribbble's Latest Features: Designers to Close Deals </h2>
                  <p className="mt-2 text-gray-600">Dribbble's mission is to help professional designers earn a living doing .</p>
                  <p className="mt-2 text-gray-600">In the sprawling cosmos of design, typography holds a unique pull.</p>

                  <div className='grid  mt-[30px]'><p className="mt-4 font-semibold text-purple-500">DRIBBBLE.COM / 54 SECS AGO / SHARE</p></div>
                  </div>
                <img 
                  src={image1} 
                  alt="Story 1" 
                  className="w-[150px] h-[100px] rounded-lg object-cover ml-6" 
                />
              </div>

              {/* Story 2 */}
              <div className="flex items-center justify-between p-6 space-x-4 rounded-lg shadow-md bg-purple-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Embrace Fear and Experimentation in Design</h2>
                  <p className="mt-2 text-gray-600">In the sprawling cosmos of design, typography holds a unique pull.</p>
                  <p className="mt-2 text-gray-600">Dribbble's mission is to help professional designers earn a living doing .</p>

                  <div className='grid  mt-[30px]'><p className="mt-4 font-semibold text-purple-500">BLOG.ADOBE.COM / 2 MINS AGO / SHARE</p></div>
                </div>
                <img 
                  src={image2} 
                  alt="Story 2" 
                  className="w-[150px] h-[100px] rounded-lg object-cover ml-6" 
                />
              </div>

              {/* Story 3 */}
              <div className="flex items-center justify-between p-6 space-x-4 rounded-lg shadow-md bg-purple-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">The Concept Behind UX Research Bingo</h2>
                  <p className="mt-2 text-gray-600">The key aspects of UX Research is the dissemination of insights.</p>
                  <div className='grid  mt-[30px]'><p className="mt-4 font-semibold text-purple-500">UXPSYCHOLOGY.SUBSTACK.COM / 4 MINS AGO / SHARE</p>
                </div></div>
                <img 
                  src={image3} 
                  alt="Story 3" 
                  className="w-[150px] h-[100px] rounded-lg object-cover ml-6" 
                />
              </div>

              {/* Story 4 */}
              <div className="flex items-center justify-between p-6 space-x-4 rounded-lg shadow-md bg-purple-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Practical Guide to Icon Design</h2>
                  <p className="mt-2 text-gray-600">Icon design is a balance between clarity, simplicity, and visual appeal.</p>
                  <div className='grid  mt-[30px]'><p className="mt-4 font-semibold text-purple-500">UXPLANET.ORG / 6 MINS AGO / SHARE</p>
                </div></div>
                <img 
                  src={image4} 
                  alt="Story 4" 
                  className="w-[150px] h-[100px] rounded-lg object-cover ml-6" 
                />
              </div>
              
            </div>
          </div>
        </div>

        

       
        <div className='flex-col justify-center p-6 mx-auto rounded-lg shadow-md bg-purple-50 '>
          <div className='flex-col w-1/2 '>

        <div className="flex items-start h-16 ">              
                <div >
                  <h2 className="flex-row text-xl font-bold text-gray-800 basis-1/ ">Dribbble's Latest Features: Designers to Close Deals </h2>
   </div>
                 
                <img 
                  src={image1} 
                  alt="Story 1" 
                  className="w-[100px] h-[100px] rounded-lg object-cover ml-6" />

              </div>

              <div className="flex items-start mt-[40px] ">              
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Dribbble's Latest Features: Designers to Close Deals </h2>
   
                  </div>
                <img 
                  src={image1} 
                  alt="Story 1" 
                  className="w-[100px] h-[100px] rounded-lg object-cover ml-6" />

              </div>

              <div className="flex items-start mt-[40px] ">              
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Dribbble's Latest Features: Designers to Close Deals </h2>
   
                  </div>
                <img 
                  src={image1} 
                  alt="Story 1" 
                  className="w-[100px] h-[100px] rounded-lg object-cover ml-6" />

              </div>



        </div>
        </div>
       
        </div>

      </div>
       
      </div>
      
  );
};

export default App;
