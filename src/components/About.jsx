import React from 'react';
import profile_img from "../assets/images/profile.jpg";

const BioSection = () => {
  return (
    <section id="blog" className="flex items-center justify-center h-screen p-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-4">
          <h2 className="text-primary text-4xl font-bold mb-4">John Doe</h2>
          <p className='text-2xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam nisi dolorum debitis animi ex enim blanditiis, consequuntur, facilis error pariatur nam earum nesciunt sunt alias aperiam. Quae, sapiente dolorum?
          </p>
        </div>
        <div className=":w-1/3 flex justify-center items-center mt-6 md:mt-0">
          <img 
            src= {profile_img} 
            alt="Profil Resmi" 
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BioSection;
