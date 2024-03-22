// import React from 'react';

// const VolunteerRegister = () => {
//   return (
//     <div className="volunteer-register">
//       <h1>Register as a Volunteer</h1>
//       {/* Form fields for volunteer registration go here */}
//     </div>
//   );
// }

// export default VolunteerRegister;





import React from 'react';

const VolunteerRegister = () => {
  return (
    <div className="volunteer-register max-w-4xl mx-auto p-4">
      <h1 className="text-lg font-bold mb-4">Register as a Volunteer</h1>
      <form className="grid grid-cols-1 gap-4">
        {/* Personal Information */}
        <div>
          <label htmlFor="firstName" className="block">First name <span className="text-red-500">*</span></label>
          <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last name <span className="text-red-500">*</span></label>
          <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="dob" className="block">Date of Birth <span className="text-red-500">*</span></label>
          <input type="date" id="dob" name="dob" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="contact" className="block">Contact Information (Phone Number, Email Address) <span className="text-red-500">*</span></label>
          <input type="text" id="contact" name="contact" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="idProof" className="block">Government ID Proof <span className="text-red-500">*</span></label>
          <select id="idProof" name="idProof" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Select an ID Proof</option>
            <option value="ssn">SSN</option>
            <option value="passport">Passport Number</option>
            <option value="stateId">State ID</option>
            <option value="drivingLicense">Driving License</option>
          </select>
        </div>
        <div>
          <label htmlFor="address" className="block">Address <span className="text-red-500">*</span></label>
          <input type="text" id="address" name="address" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="hoursPerWeek" className="block">How many hours per week are you available to volunteer?</label>
          <input type="number" id="hoursPerWeek" name="hoursPerWeek" className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
        </div>
        <div>
          <label htmlFor="availableTimes" className="block">What days and times are you typically available?</label>
          <textarea id="availableTimes" name="availableTimes" className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>



        {/* Experience and Background */}
        <div>
          <label htmlFor="volunteerExperience" className="block">Do you have any previous volunteer experience? If so, please describe. <span className="text-red-500">*</span></label>
          <textarea id="volunteerExperience" name="volunteerExperience" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="seniorCitizenExperience" className="block">Have you ever worked with senior citizens before? Please provide details. <span className="text-red-500">*</span></label>
          <textarea id="seniorCitizenExperience" name="seniorCitizenExperience" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="skillsQualifications" className="block">What skills or qualifications do you have that make you a good fit for this role? <span className="text-red-500">*</span></label>
          <textarea id="skillsQualifications" name="skillsQualifications" required className="mt-1 block w-full max-w-lg px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
 {/* Motivation and Interest */}
        <div>
          <label htmlFor="motivation" className="block">Why are you interested in volunteering with the Goodfellows? <span className="text-red-500">*</span></label>
          <textarea id="motivation" name="motivation" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="gainExperience" className="block">What do you hope to gain from your experience as a volunteer? <span className="text-red-500">*</span></label>
          <textarea id="gainExperience" name="gainExperience" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
{/* Character and Competence */}
        <div>
          <label htmlFor="workWithDiversePeople" className="block">How would you describe your ability to work with people who have different backgrounds and experiences from your own?</label>
          <textarea id="workWithDiversePeople" name="workWithDiversePeople" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="empathyExample" className="block">Can you provide an example of a time when you demonstrated empathy and understanding?</label>
          <textarea id="empathyExample" name="empathyExample" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
{/* Training and Development */}
        <div>
          <label htmlFor="undergoTraining" className="block">Are you willing to undergo training to improve your skills and understanding of the needs of senior citizens? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="undergoTraining" name="undergoTraining" required className="mt-1 block"/>
        </div>
        <div>
          <label htmlFor="areasOfInterest" className="block">Do you have any specific areas of interest or expertise that you would like to develop further?</label>
          <textarea id="areasOfInterest" name="areasOfInterest" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        {/* Health and Safety */}
        <div>
          <label htmlFor="healthConcerns" className="block">Do you have any health-related concerns or conditions that we should be aware of?</label>
          <textarea id="healthConcerns" name="healthConcerns" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="followHealthSafety" className="block">Are you comfortable following health and safety guidelines to protect yourself and others from COVID-19 and other infectious diseases? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="followHealthSafety" name="followHealthSafety" required className="mt-1 block"/>
        </div>

        {/* References */}
        <div>
          <label htmlFor="references" className="block">Please provide the names and contact information of two references who can speak to your character and qualifications. <span className="text-red-500">*</span></label>
          <textarea id="references" name="references" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>

        {/* Consent and Commitment */}
        <div>
          <label htmlFor="commitment" className="block">Do you understand the responsibilities involved in being a Goodfellows volunteer and agree to commit to them? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="commitment" name="commitment" required className="mt-1 block"/>
        </div>
        <div>
          <label htmlFor="backgroundCheck" className="block">Do you consent to a background check as part of the volunteer screening process? <span className="text-red-500">*</span></label>
          <input type="checkbox" id="backgroundCheck" name="backgroundCheck" required className="mt-1 block"/>
        </div>

        <div className="mt-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default VolunteerRegister;
