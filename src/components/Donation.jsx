// src/pages/Donate.jsx

import React from 'react';
import styles from '../style';

const Donate = () => {
  return (
    <section id="donate" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
      <h2 className={`${styles.heading2} text-center`}>Make a Donation</h2>
      <p className={`${styles.paragraph} text-center`}>
        Your generous donation helps us to maintain the temple and support our activities.
      </p>
      <div className="w-full max-w-md mt-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Donation Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              placeholder="Enter amount"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Donate;
