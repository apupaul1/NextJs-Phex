"use client"

import React from 'react'
import { useState } from "react";
import { toast } from 'react-toastify';

export default function ProductForm() {
    const [formData, setFormData] = useState({
        price: "",
        model: "",
        brand: "",
        color: "",
        ram_size: "",
        screensize: "",
        CPU: "",
        number_of_cores: "",
        main_camera: "",
        front_camera: "",
        battery: "",
        description: "",
        guarantee: "",
        image: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);

        const res = await fetch("https://nextjs-phone-mirror.vercel.app", {
            method: "POST",
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            toast.success("Phone added successfully!");
            setFormData({
                price: "",
                model: "",
                brand: "",
                color: "",
                ram_size: "",
                screensize: "",
                CPU: "",
                number_of_cores: "",
                main_camera: "",
                front_camera: "",
                battery: "",
                description: "",
                guarantee: "",
                image: "",
            });

            setLoading(false);
        }
        else {
            toast.error("Failed to add phone.");
        }

    };
    return (
        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border shadow-lg rounded-2xl p-8"
        >
            {/* Left Column */}
            <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                    <span className="font-medium">Price</span>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. $999"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Model</span>
                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. iPhone 15 Pro"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Brand</span>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. Apple"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Color</span>
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. Black"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">RAM Size</span>
                    <input
                        type="text"
                        name="ram_size"
                        value={formData.ram_size}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 8 GB"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Screen Size</span>
                    <input
                        type="text"
                        name="screensize"
                        value={formData.screensize}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 6.7 inches"
                        required
                    />
                </label>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
                <label className="flex flex-col">
                    <span className="font-medium">CPU</span>
                    <input
                        type="text"
                        name="CPU"
                        value={formData.CPU}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. A17 Bionic"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Number of Cores</span>
                    <input
                        type="text"
                        name="number_of_cores"
                        value={formData.number_of_cores}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 8"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Main Camera</span>
                    <input
                        type="text"
                        name="main_camera"
                        value={formData.main_camera}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 48MP + 12MP + 12MP"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Front Camera</span>
                    <input
                        type="text"
                        name="front_camera"
                        value={formData.front_camera}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 12MP"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Battery</span>
                    <input
                        type="text"
                        name="battery"
                        value={formData.battery}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 5000 mAh"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Guarantee</span>
                    <input
                        type="text"
                        name="guarantee"
                        value={formData.guarantee}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="e.g. 1 Year Warranty"
                        required
                    />
                </label>
            </div>

            {/* Full Width */}
            <div className="md:col-span-2 flex flex-col gap-4">
                <label className="flex flex-col">
                    <span className="font-medium">Description</span>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input w-full h-20"
                        placeholder="Write a short description (2-3 lines)"
                        rows="3"
                        required
                    />
                </label>

                <label className="flex flex-col">
                    <span className="font-medium">Image URL</span>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="input w-full"
                        placeholder="Paste image link here"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className={`bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2`}
                    disabled={loading}
                >
                    {loading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                            ></path>
                        </svg>
                    )}
                    {loading ? "Adding..." : "Add Phone"}
                </button>
            </div>
        </form>
    )
}
