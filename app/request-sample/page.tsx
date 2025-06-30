"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";

export default function RequestSamplePage() {
  const [formData, setFormData] = useState({
    state: "",
    firstName: "",
    lastName: "",
    email: "",
    projectAddress: "",
    sameAddress: false,
    postalAddress: "",
    phone: "",
    homeOwnerOrTrade: "",
    workingWithDesigner: "",
    selectedSamples: [] as string[],
    hearAbout: "",
    newsletter: false,
    privacyAgree: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      
      if (name === 'selectedSamples') {
        const newSelectedSamples = [...formData.selectedSamples];
        if (checked) {
          if (newSelectedSamples.length < 4) {
            newSelectedSamples.push(value);
          }
        } else {
          const index = newSelectedSamples.indexOf(value);
          if (index > -1) {
            newSelectedSamples.splice(index, 1);
          }
        }
        setFormData({ ...formData, selectedSamples: newSelectedSamples });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.state) errors.state = "State is required";
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.projectAddress) errors.projectAddress = "Project address is required";
    if (!formData.sameAddress && !formData.postalAddress) errors.postalAddress = "Postal address is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.homeOwnerOrTrade) errors.homeOwnerOrTrade = "Please select an option";
    if (!formData.workingWithDesigner) errors.workingWithDesigner = "Please select an option";
    if (formData.selectedSamples.length === 0) errors.selectedSamples = "Please select at least one sample";
    if (!formData.hearAbout) errors.hearAbout = "Please select an option";
    if (!formData.privacyAgree) errors.privacyAgree = "You must agree to the terms";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      // Here you would normally send the data to a server
    }
  };

  const states = ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "NT", "ACT"];
  
  const premiumCollection = [
    "Antique Smoked & Limed", "Carbonised Oak", "Cloud", "Coal", "Colchester Smooth",
    "Deep Carbonised Oak", "Hazel", "Moss", "Pale Oak", "Pearl White", "Roman Grey",
    "Sandwashed", "Sea Salt", "Smoked Oak", "Smokey Coal", "Smokey Grey", "Thistle",
    "Voss", "White Oiled", "White Smoked"
  ];
  
  const grandeVilleCollection = [
    "Copenhagen White", "London Grey", "Osaka Brown", "Ostuni White", 
    "Palermo Tan", "Santorini White"
  ];
  
  const frenchCollection = [
    "Black", "Buff", "Calluna", "Chocolate", "Fawn", "Flint", "Graphite"
  ];

  if (formSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
        <p className="text-lg mb-6">Your sample request has been submitted successfully. We&apos;ll be in touch with you shortly.</p>
        <Button onClick={() => window.location.href = '/'}>Return to Homepage</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Request a Sample</h1>
                  <p className="mb-8">Fill out the form below to request timber flooring samples from FORMA FLOORING. You can select up to 4 samples.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Select Your State*</label>
          <select 
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.state ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Please Select</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name*</label>
            <input 
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${formErrors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name*</label>
            <input 
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${formErrors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email*</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Address*</label>
          <input 
            type="text"
            name="projectAddress"
            value={formData.projectAddress}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.projectAddress ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formErrors.projectAddress && <p className="text-red-500 text-sm mt-1">{formErrors.projectAddress}</p>}
        </div>

        <div>
          <label className="flex items-center">
            <input 
              type="checkbox"
              name="sameAddress"
              checked={formData.sameAddress}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Postal Address same as Project Address*</span>
          </label>
        </div>

        {!formData.sameAddress && (
          <div>
            <label className="block text-sm font-medium mb-1">Postal Address*</label>
            <input 
              type="text"
              name="postalAddress"
              value={formData.postalAddress}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md ${formErrors.postalAddress ? 'border-red-500' : 'border-gray-300'}`}
            />
            {formErrors.postalAddress && <p className="text-red-500 text-sm mt-1">{formErrors.postalAddress}</p>}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number*</label>
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Home Owner or Builder/Trade?*</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input 
                type="radio"
                name="homeOwnerOrTrade"
                value="Home Owner"
                checked={formData.homeOwnerOrTrade === 'Home Owner'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Home Owner</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio"
                name="homeOwnerOrTrade"
                value="Builder or Trade"
                checked={formData.homeOwnerOrTrade === 'Builder or Trade'}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Builder or Trade</span>
            </label>
          </div>
          {formErrors.homeOwnerOrTrade && <p className="text-red-500 text-sm mt-1">{formErrors.homeOwnerOrTrade}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Are you working with an Architect or Designer on this project?*</label>
          <select 
            name="workingWithDesigner"
            value={formData.workingWithDesigner}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.workingWithDesigner ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Please Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {formErrors.workingWithDesigner && <p className="text-red-500 text-sm mt-1">{formErrors.workingWithDesigner}</p>}
        </div>

        <div>
          <p className="text-sm font-medium mb-3">Please select a maximum of 4 samples</p>
          {formErrors.selectedSamples && <p className="text-red-500 text-sm mt-1">{formErrors.selectedSamples}</p>}
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Premium Collection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {premiumCollection.map(sample => (
                  <label key={sample} className="flex items-center">
                    <input 
                      type="checkbox"
                      name="selectedSamples"
                      value={sample}
                      checked={formData.selectedSamples.includes(sample)}
                      onChange={handleChange}
                      disabled={!formData.selectedSamples.includes(sample) && formData.selectedSamples.length >= 4}
                      className="mr-2"
                    />
                    <span>{sample}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Grande Ville Collection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {grandeVilleCollection.map(sample => (
                  <label key={sample} className="flex items-center">
                    <input 
                      type="checkbox"
                      name="selectedSamples"
                      value={sample}
                      checked={formData.selectedSamples.includes(sample)}
                      onChange={handleChange}
                      disabled={!formData.selectedSamples.includes(sample) && formData.selectedSamples.length >= 4}
                      className="mr-2"
                    />
                    <span>{sample}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">French Collection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {frenchCollection.map(sample => (
                  <label key={sample} className="flex items-center">
                    <input 
                      type="checkbox"
                      name="selectedSamples"
                      value={sample}
                      checked={formData.selectedSamples.includes(sample)}
                      onChange={handleChange}
                      disabled={!formData.selectedSamples.includes(sample) && formData.selectedSamples.length >= 4}
                      className="mr-2"
                    />
                    <span>{sample}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
                          <label className="block text-sm font-medium mb-1">How did you hear about FORMA FLOORING?*</label>
          <select 
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.hearAbout ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Please Select</option>
            <option value="Social Media">Social Media</option>
            <option value="Friend/Colleague">Friend/Colleague</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Trade Show">Trade Show</option>
            <option value="Magazine/Publication">Magazine/Publication</option>
            <option value="Other">Other</option>
          </select>
          {formErrors.hearAbout && <p className="text-red-500 text-sm mt-1">{formErrors.hearAbout}</p>}
        </div>

        <div>
          <label className="flex items-center">
            <input 
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mr-2"
            />
                            <span>Yes, I would like to receive information about products and services, updates or news from FORMA FLOORING.</span>
          </label>
        </div>

        <div>
          <label className="flex items-start">
            <input 
              type="checkbox"
              name="privacyAgree"
              checked={formData.privacyAgree}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <span className={`text-sm ${formErrors.privacyAgree ? 'text-red-500' : ''}`}>
              I agree to the Privacy Collection Notice, Terms and Conditions and Privacy Policy*
            </span>
          </label>
          {formErrors.privacyAgree && <p className="text-red-500 text-sm mt-1">{formErrors.privacyAgree}</p>}
        </div>

        <div>
          <Button type="submit" className="w-full md:w-auto">Submit Request</Button>
        </div>
      </form>
    </div>
  );
} 