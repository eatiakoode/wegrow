'use client';

import React from 'react';

const propertiesData = [
  {
    locality: 'Sector 84',
    avgPrice: '₹10,579',
    priceRange: '₹5,714 - ₹22,037',
    properties: 195,
  },
  {
    locality: 'Sector 83',
    avgPrice: '₹11,003',
    priceRange: '₹6,891 - ₹15,789',
    properties: 168,
  },
  {
    locality: 'Sector 108',
    avgPrice: '₹16,115',
    priceRange: '₹4,566 - ₹23,166',
    properties: 157,
  },
  {
    locality: 'Sector 33, Sohna',
    avgPrice: '₹11,175',
    priceRange: '₹5,161 - ₹17,290',
    properties: 120,
  },
  {
    locality: 'Sector 111',
    avgPrice: '₹15,769',
    priceRange: '₹7,333 - ₹25,272',
    properties: 109,
  },
  {
    locality: 'Sector 113',
    avgPrice: '₹16,655',
    priceRange: '₹9,009 - ₹25,000',
    properties: 100,
  },
  {
    locality: 'Sector 59',
    avgPrice: '₹21,890',
    priceRange: '₹12,643 - ₹32,672',
    properties: 90,
  },
  {
    locality: 'Sector 36 Sohna',
    avgPrice: '₹9,602',
    priceRange: '₹5,384 - ₹17,600',
    properties: 75,
  },
  {
    locality: 'Sector 35, Sohna',
    avgPrice: '₹9,027',
    priceRange: '₹4,066 - ₹14,379',
    properties: 68,
  },
  {
    locality: 'Sector 66',
    avgPrice: '₹18,174',
    priceRange: '₹13,173 - ₹25,000',
    properties: 68,
  },
  {
    locality: 'Sector 71',
    avgPrice: '₹14,549',
    priceRange: '₹8,833 - ₹23,045',
    properties: 66,
  },
];

const PropertyTable = () => {
  return (
    <div className="overflow-x-auto px-0 py-6">
      <table className="min-w-full bg-white border table-striped rounded-lg shadow-md text-sm">
        <thead className="bg-purple-100 text-left">
          <tr>
            <th className="px-4 py-4">Area</th>
            <th className="px-4 py-4">Typical Cost / Sqft</th>
            <th className="px-4 py-4">Price Band / Sqft</th>
            <th className="px-4 py-4">Explore Listings</th>
          </tr>
        </thead>
        <tbody>
          {propertiesData.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-3">{item.locality}</td>
              <td className="px-4 py-3">{item.avgPrice}</td>
              <td className="px-4 py-3">{item.priceRange}</td>
              <td className="px-4 py-3">
                <button className="properties-btn">
                  See {item.properties} Properties
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
