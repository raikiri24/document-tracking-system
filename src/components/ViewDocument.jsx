import React from 'react';
import { get } from '../functions';

const ViewDocument = () => {
  get(`${import.meta.env.VITE_API_DOCUMENTS}/1`);
  return <div className="bg-white px-16">{}</div>;
};

export default ViewDocument;
