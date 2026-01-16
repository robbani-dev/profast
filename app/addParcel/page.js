"use client"
import React, { useState } from 'react'

const addParcel = () => {

  const [value, setValue] = useState("Document");

  return (
    <div className='st-container bg-base-200 rounded-2xl'>
      <div>
        <h1 className='title-section'>Add Parcel</h1>
      </div>
      <div className='h-bar'></div>
      <form className='flex flex-col gap-7'>
        <h4 className='title-card'>Enter your parcel details</h4>
        {/* Checkbox */}
        <div className="flex gap-10">
          <label className="label">
            <input
              type="radio"
              name="docType"
              value="Document"
              checked={value === "Document"}
              onChange={() => setValue("Document")}
              className="checkbox"
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              name="docType"
              value="Not-Document"
              checked={value === "Not-Document"}
              onChange={() => setValue("Not-Document")}
              className="checkbox"
            />
            Not-Document
          </label>
        </div>
        {/* Percel name and weight */}
        <div className='grid md:grid-cols-2 gap-7'>
          <div>
            <label className="label">Parcel Name?</label>
            <input type="text" className="input" placeholder="Parcel Name" />
          </div>
          <div>
            <label className="label">Parcel Weight? (kg)</label>
            <input type="number" className="input" placeholder="Parcel Weight (kg)" />
          </div>
        </div>
        {/* bar */}
        <div className='w-full border-t border-primary my-4'></div>
        <div className='grid md:grid-cols-2 gap-10'>
          {/* Sender Details */}
          <div className='flex flex-col gap-4'>
            <label className="label text-xl font-semibold">Sender Details</label>
            <div className='grid grid-cols-2 gap-7'>
              <div>
                <label className="label">Sender Name</label>
                <input type="text" className="input" placeholder="Sender Name" />
              </div>
              <div>
                <label className="label">Sender Pickup Wire House</label>
                <select className="input select" >
                  <option value="" disabled>Select your region</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Bogura">Bogura</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-7'>
              <div>
                <label className="label">Address</label>
                <input type="text" className="input" placeholder="Address" />
              </div>
              <div>
                <label className="label">Sender Contact No</label>
                <input type="number" className="input" placeholder="Sender Contact No" />
              </div>
            </div>
            <div>
              <label className="label">Your Region</label>
              <select className="input select" >
                <option value="" disabled>Select your region</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Pabna">Pabna</option>
                <option value="Bogura">Bogura</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div>
              <label className="label">Pickup Instruction</label>
              <textarea className="input textarea" placeholder="Pickup Instruction"></textarea>
            </div>
          </div>
          {/* Receiver Details */}
          <div className='flex flex-col gap-4'>
            <label className="label text-xl font-semibold">Receiver Details</label>
            <div className='grid grid-cols-2 gap-7'>
              <div>
                <label className="label">Receiver Name</label>
                <input type="text" className="input" placeholder="Receiver Name" />
              </div>
              <div>
                <label className="label">Receiver Delivery Wire House</label>
                <select className="input select" >
                  <option value="" disabled>Select your region</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Pabna">Pabna</option>
                  <option value="Bogura">Bogura</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-7'>
              <div>
                <label className="label">Receiver Address</label>
                <input type="text" className="input" placeholder="Receiver Address" />
              </div>
              <div>
                <label className="label">Receiver Contact No</label>
                <input type="number" className="input" placeholder="Receiver Contact No" />
              </div>
            </div>
            <div>
              <label className="label">Receiver Region</label>
              <select className="input select" >
                <option value="" disabled>Select your region</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Pabna">Pabna</option>
                <option value="Bogura">Bogura</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <div>
              <label className="label">Delivery Instruction</label>
              <textarea className="input textarea" placeholder="Delivery Instruction"></textarea>
            </div>
          </div>
        </div>
        <label className="label">* PickUp Time 4pm-7pm Approx.</label>
        <div><button type='submit' className="btn btn-primary text-neutral">Add Parcel</button></div>
      </form>
    </div>
  )
}

export default addParcel

