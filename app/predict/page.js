'use client'
import { useState } from 'react'
import Navbar1 from '@/components/Nav2'
import Image from 'next/image'
import { api_url } from '../api'



export default function Predict() {
    const [formData, setFormData] = useState({
        temp: 0,
        dewPoint: 0,
        humidity: 0,
        windSpeed: 0,
        visibility: 0,
        pressure: 0,
    })
    const [showPopup, setShowPopup] = useState(false);
    const [isPotable, setIsPotable] = useState("");


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Convert formData to a list
        const formDataList = Object.values(formData);



        // send the data to the url
        const response = await fetch(`${api_url}/predict/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "data": [
                    formDataList
                ]
            }
            )
        })

        // Display the prediction result
        const data = await response.json()
        if (data) {
            setIsPotable(data.predictions)
            setShowPopup(true)
            // clear the formdata
            setFormData({
                temp: 0,
                dewPoint: 0,
                humidity: 0,
                windSpeed: 0,
                visibility: 0,
                pressure: 0,
            })
        }

    }


    const PredictionPopup = ({ isOpen, onClose }) => (
        <div
            className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'
                }`}
        >
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl text-black text-center font-semibold">Prediction Result</h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-black  hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-700">
                        {/* Display prediction result here */}
                        Based on the provided water quality parameters, the model
                        predicts that the water is <b>{isPotable}</b>.
                    </p>
                </div>
            </div>
        </div>
    );


    return (

        <main className="bg">
            <div className="bg-white">
                <Navbar1 />
            </div>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                </div>
                <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Weather Predictions</h1>
                        <p className="mt-6 text-lg leading-8 text-white">Enter the following fields to get predictions:</p>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                </div>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Enter the Required Data</h2>
                        <div className="mt-4">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>

                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Introduction</h1>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    This tool helps you predict weather conditions based on various parameters. By entering specific attributes, you can get accurate weather predictions.
                                </p>

                                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Temperature (°C)</span>
                                    </div>

                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Dew Point Temperature (°C)</span>
                                    </div>

                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Relative Humidity (%)</span>
                                    </div>

                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Wind Speed (km/h)</span>
                                    </div>

                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Visibility (km)</span>
                                    </div>

                                    <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                        <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span className="mx-3">Pressure (hPa)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <Image
                                className="object-cover w-full h-full max-w-2xl rounded-md"
                                src="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="weather photo"
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 mb-5">
                <div className="container mx-auto px-6 py-10">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Enter the Required Data</h2>
                        <div className="mt-4">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <div className="container mb-4 flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Introduction</h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">
                                This web app predicts the weather based on the user input. Enter the required data and click on predict button to get the prediction.
                                The prediction will show the current weather conditions, such as temperature, humidity, wind speed, and visibility.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <form onSubmit={handleSubmit} className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="temp">
                                        Temperature (°C)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="temp"
                                        type="number"
                                        name="temp"
                                        step="0.1"
                                        value={formData.temp}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dewPoint">
                                        Dew Point Temperature (°C)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="dewPoint"
                                        type="number"
                                        name="dewPoint"
                                        step="0.1"
                                        value={formData.dewPoint}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="humidity">
                                        Humidity (%)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="humidity"
                                        type="number"
                                        name="humidity"
                                        step="0.1"
                                        value={formData.humidity}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="windSpeed">
                                        Wind Speed (km/h)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="windSpeed"
                                        type="number"
                                        name="windSpeed"
                                        step="0.1"
                                        value={formData.windSpeed}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="visibility">
                                        Visibility (km)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="visibility"
                                        type="number"
                                        name="visibility"
                                        step="0.1"
                                        value={formData.visibility}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pressure">
                                        Pressure (hPa)
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="pressure"
                                        type="number"
                                        name="pressure"
                                        step="0.1"
                                        value={formData.pressure}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mt-6">
                                    <button
                                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Predict
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            {/* the popup */}
            <PredictionPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </main>
    )
}
