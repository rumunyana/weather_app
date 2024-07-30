/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react'
import Navbar1 from '@/components/Nav2'
import Image from 'next/image'
import { api_url } from '../api'

export default function About() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [preprocessSuccess, setPreprocessSuccess] = useState(false);
    const [retrain, setRetain] = useState(false);
    const [retrainSuccess, setRetainSuccess] = useState(false);
    const [retianData, setRetainData] = useState(null);

    const PreprocessData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${api_url}/preprocess/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    test_size: 0,
                    random_state: 0
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result.message);
            setPreprocessSuccess(true);  // Set success to true
            alert(result.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // retrain model
    const RetainModel = async () => {
        setRetain(true);
        setError(null);

        try {
            const response = await fetch(`${api_url}/rebuild-model/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setRetainData(result.accuracy);
            setRetainSuccess(true);  // Set success to true
            alert(" New Model Accurancy is " + result.accuracy);
        } catch (err) {
            setError(err.message);
        } finally {
            setRetain(false);
        }
    };

    return (
        <div >
            <Navbar1 />

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">

                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Model Retraining
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Machine learning models, like our Weather Default Predictor, are powerful
                            tools for making predictions based on historical data. However, the world
                            is constantly changing, and so are weather patterns. To ensure that our
                            predictions remain accurate and relevant,
                            we need to periodically retrain our model with new data. Here's why:
                        </p>

                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>



            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-6">
                        <Image
                            className="object-cover rounded-lg"
                            src="/images/data.png"
                            alt="Weather"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="lg:w-1/2 lg:pl-6 mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Why Retrain Your Model?
                        </h1>
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Keeping Your Weather Predictions Fresh and Accurate
                        </p>
                        <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc ml-5">
                            <li>Changing Patterns: Weather patterns can shift over time due to various factors, including climate change and urban development.</li>
                            <li>Seasonal Variations: Different seasons may introduce new patterns that weren't present in the original training data</li>
                            <li>Improved Data Quality: As our data collection methods improve, we can feed higher quality information into our model.</li>
                            <li>Performance Boost: Retraining can help the model learn from its previous mistakes and improve its overall accuracy.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center">

                    <div className="lg:w-1/2 lg:pr-6 mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Our Retraining Process
                        </h1>
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            We've made retraining our Weather Default Predictor Model simple and efficient:
                        </p>
                        <ul className="mt-4 text-gray-600 dark:text-gray-300 list-disc ml-5">
                            <li>Data Collection: We continuously gather new weather data and outcomes.</li>
                            <li>Data Preprocessing: New data is cleaned and formatted to match our model's input requirements.</li>
                            <li>Model Update: Our KNeighborsClassifier is retrained on the updated dataset.</li>
                            <li>Evaluation: We assess the new model's performance using accuracy scores and confusion matrices.</li>
                            <li>Deployment: If the new model outperforms the old one, we deploy it for live predictions.</li>
                        </ul>
                        <div className="mt-6 pl-1" >
                            {
                                loading ? (
                                    <button
                                        disabled={true}
                                        className="mt-6 py-2 px-4 bg-gray-500 text-black rounded-lg"

                                    >
                                        Loading ....
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => PreprocessData()}
                                        className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg"
                                    >
                                        Preprocess Data
                                    </button>
                                )
                            }


                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-6">
                        {preprocessSuccess ? (
                            <Image
                                className="object-cover rounded-lg"
                                src="/images/train.png"
                                alt="Weather Preprocessed"
                                width={500}
                                height={500}
                            />
                        ) : (
                            <Image
                                className="object-cover rounded-lg"
                                src="/images/corr.png"
                                alt="Weather Preprocessed"
                                width={500}
                                height={500}
                            />
                        )}
                    </div>
                </div>
            </section>


            {/* rebuild the model  */}
            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pl-6">
                        {retrainSuccess ? (
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                New Model Accuracy : {retianData}
                            </h1>
                        ) : (
                            <Image
                                className="object-cover rounded-lg"
                                src="/images/corr.png"
                                alt="Weather Preprocessed"
                                width={500}
                                height={500}
                            />
                        )}
                    </div>
                    <div className="lg:w-1/2 lg:pr-6 mt-8 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Retain Model
                        </h1>
                        <div className="mt-2">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Retrain our model with new data:
                            we update our KNeighborsClassifier model with new data.
                            The model learns from the new data and improves its performance.
                            This process is called retraining.
                        </p>

                        <div className="mt-6 pl-1" >
                            {
                                retrain ? (
                                    <button
                                        disabled={true}
                                        className="mt-6 py-2 px-4 bg-gray-500 text-black rounded-lg"

                                    >
                                        Loading ....
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => RetainModel()}
                                        className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg"
                                    >
                                        Preprocess Data
                                    </button>
                                )
                            }


                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
