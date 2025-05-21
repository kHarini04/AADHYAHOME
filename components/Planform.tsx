'use client';

import Link from 'next/link';
import Image from 'next/image';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

type DestinationOption = {
  value: string;
  label: string;
};

export default function Planform() {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [fromDestination, setFromDestination] = useState<DestinationOption | null>(null);
  const [toDestination, setToDestination] = useState<DestinationOption | null>(null);

  const southIndiaDestinations: DestinationOption[] = [
    { value: 'mysore', label: 'Mysore' },
    { value: 'coorg', label: 'Coorg' },
    { value: 'ooty', label: 'Ooty' },
    { value: 'kodaikanal', label: 'Kodaikanal' },
    { value: 'goa', label: 'Goa' },
    { value: 'alleppey', label: 'Alleppey' },
    { value: 'munnar', label: 'Munnar' },
    { value: 'wayanad', label: 'Wayanad' },
    { value: 'pondicherry', label: 'Pondicherry' },
    { value: 'hampi', label: 'Hampi' },
    { value: 'madurai', label: 'Madurai' },
    { value: 'rameswaram', label: 'Rameswaram' },
    { value: 'varkala', label: 'Varkala' },
    { value: 'gokarna', label: 'Gokarna' },
    { value: 'tirupati', label: 'Tirupati' },
  ];

  return (
    <section className="absolute left-1/2 transform -translate-x-1/2 -translate-y-32 bg-white rounded-3xl shadow-xl px-4 sm:px-6 md:px-8 py-8 sm:py-10 w-[95%] sm:w-[90%] max-w-5xl z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-950 font-semibold text-center mb-6">
        Plan With Ease
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* From Destination */}
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From - To</label>
          <div className="flex flex-col sm:flex-row sm:items-center border border-gray-300 rounded-2xl px-3 py-2 space-y-2 sm:space-y-0 sm:space-x-2">
            <Select
              options={southIndiaDestinations}
              value={fromDestination}
              onChange={(selectedOption) => setFromDestination(selectedOption)}
              placeholder="From"
              className="w-full sm:w-1/2 text-sm outline-none text-black"
              classNamePrefix="react-select"
            />
            <span className="hidden sm:inline text-gray-400">→</span>
            <Select
              options={southIndiaDestinations}
              value={toDestination}
              onChange={(selectedOption) => setToDestination(selectedOption)}
              placeholder="To"
              className="w-full sm:w-1/2 text-sm outline-none text-black"
              classNamePrefix="react-select"
            />
          </div>
        </div>

        {/* Depart & Return Dates */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Depart - Return</label>
          <div className="flex flex-col sm:flex-row sm:items-center border border-gray-300 rounded-2xl px-3 py-2 space-y-2 sm:space-y-0 sm:space-x-2">
            <DatePicker
              selected={startDate}
              onChange={(date: Date | null) => setStartDate(date ?? undefined)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Depart"
              className="w-full text-sm text-black outline-none font-thin"
            />
            <span className="hidden sm:inline text-gray-400">-</span>
            <DatePicker
              selected={endDate}
              onChange={(date: Date | null) => setEndDate(date ?? undefined)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Return"
              className="w-full text-sm text-black outline-none font-thin"
            />
          </div>
        </div>

        {/* Passenger input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
          <input
            type="number"
            min={1}
            placeholder="Passengers"
            className="w-full border border-gray-300 px-4 py-3 rounded-2xl text-sm font-thin text-black"
          />
        </div>
      </form>

      <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/departure_board (6).svg" alt="Travel Icon" width={20} height={20} />
          <span className="text-sm font-medium text-gray-800">Travel Mode</span>
        </Link>

        <button className="flex items-center justify-center space-x-2 bg-[#FF7F00] hover:bg-orange-300 text-white px-6 py-3 rounded-xl transition">
          <Image src="/near_me.svg" alt="Book Icon" width={20} height={20} />
          <span className="font-thin text-sm">Book</span>
        </button>
      </div>
    </section>
  );
}
