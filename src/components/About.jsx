import React from 'react';
import styles from '../style';
import { temple } from '../assets';

const About = () => {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <div className="text-center">
        <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px]">
          About <span className="text-gradient">Mahey Jathere</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[800px] mt-5`}>
          Welcome to Mahey Jathere, a sacred place of peace, spirituality, and community. Nestled in the heart of Hiatpur Jattan near Hyatpur, our temple offers a serene environment for devotees and visitors to connect with the divine and find inner peace.
        </p>
      </div>

      <div className="mt-10">
        <img src={temple} alt="temple" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="mt-10 max-w-[800px]">
        <h2 className="font-poppins font-semibold text-[32px] text-white leading-[45px]">
          Our History
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Established in [Year], [Temple Name] has been a beacon of spiritual guidance and cultural heritage for the community. Our temple is dedicated to [Deity Name], and we follow the rich traditions and rituals that have been passed down through generations.
        </p>
        
        <h2 className="font-poppins font-semibold text-[32px] text-white leading-[45px] mt-10">
          Our Mission
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Our mission is to provide a tranquil space for worship, reflection, and community gatherings. We aim to promote spiritual growth, cultural understanding, and a sense of belonging among all who visit our temple.
        </p>
        
        <h2 className="font-poppins font-semibold text-[32px] text-white leading-[45px] mt-10">
          Our Values
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          At Mahey Jathere, we uphold the values of compassion, devotion, and community service. We believe in fostering a spirit of inclusivity and respect, welcoming individuals from all walks of life to experience the beauty of our traditions and the serenity of our sacred space.
        </p>
      </div>
    </div>
  );
};

export default About;
