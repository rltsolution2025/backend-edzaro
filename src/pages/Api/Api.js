import axios from 'axios';
// import React, { useState } from 'react';

// const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your backend URL
const API_BASE_URL = 'https://rlt-edzaro.onrender.com/api'; // Replace with your backend URL

export const submitHiringPartner = async (data) => {
    try {
        console.log('sending data to backend:', data);
        const response = await axios.post(`${API_BASE_URL}/hire`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Error submitting form.");
    }
};

export const submitReference = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/refer`, data);
        return response.data;
        console.log('submitted to backend  successfully');
    } catch (error) {
        throw new Error(error.response.data.message || "Error submitting form.");
    }   
};

export const submitEnquiry = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/enquiry`, data); 
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Error submitting form.");
    }   
};

export const SubmitEnquiryForm = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/enquire`, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error || "Error submitting form.");
    }
};