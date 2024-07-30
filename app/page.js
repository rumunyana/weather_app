import Image from "next/image";
import Navbar1 from "@/components/Nav2";
export default function Home() {
  const links = [
    { name: 'About Data', href: '/about' },
    { name: 'Re-train Model', href: '/train' },
    { name: 'Make Predictions', href: '/predict' },
    { name: 'Source Code', href: 'https://github.com/rumunyana/extreme_weather_prediction' },
  ]


  return (
    <main >
      {/* have a nav bar at the tops */}
      <Navbar1 />


      {/* rest of the pages  */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <Image
          src="/public/images/weather.jpg"
          alt=""
          width={200}
          height={200}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Extreme Weather Prediction</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Stay ahead with our real-time weather updates, ensuring you’re always prepared for what’s coming. Whether you need current temperatures, precipitation forecasts, or wind speeds, we’ve got you covered.
              <br /> <br />
              This project implements a Machine Learning Operations (MLOps) pipeline for predicting extreme weather events. Using historical weather data and a Multi-layer Perceptron (MLP) model, we forecast the probability of severe weather occurrences such as heatwaves, heavy rainfall, or storms.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2">
              <div>
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                  About <br />
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Comprehensive Weather Data
                  </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    We provide a wide range of weather data including:
                    <ui className="mt-3 text-gray-500 dark:text-gray-300">
                      <li>Temperature: Get up-to-the-minute temperature readings to plan your day.</li>
                      <li>Precipitation: Stay informed about rain, snow, and other precipitation.</li>
                      <li>Humidity: Understand moisture levels in the air for comfort and health.</li>
                      <li>Wind Speed and Direction: Critical information for aviation and outdoor activities.</li>
                      <li>Atmospheric Pressure: Key data for weather predictions and aviation.</li>
                      <li>Cloud Cover: Know how much of the sky is covered by clouds.</li>
                      <li>UV Index: Protect your skin with accurate UV radiation measurements.</li>
                    </ui>
                  </p>
                </div>
              </div>

              {/* Add more sections for other features */}
            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <Image
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1696671648700-07cf7f5a0d87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww"
                alt=""
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>


      {/* add a section to tell a user why to choose us  */}
      <section className="bg-gray-900 dark:bg-gray-900">

        <div className="container px-6 py-10 mx-auto">

          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2">
              <div>
                <h1 className="text-2xl font-semibold text-white capitalize lg:text-3xl dark:text-white">
                  Why Choose Us <br />
                </h1>

                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>


              <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold text-white capitalize dark:text-white">
                    Weather Forecasting
                  </h1>

                  <p className="mt-2 text-gray-300">
                    <ui>
                      <li>Accurate Data: We source our data from reputable meteorological agencies, weather stations, satellites, and more.</li>
                      <li>User-Friendly Interface: Easy to navigate, whether you’re a farmer, traveler, or just someone who wants to know the weather</li>
                      <li>Real-Time Updates: Never be caught off guard with our up-to-date weather information.</li>
                    </ui>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
