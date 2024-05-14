/* eslint react/prop-types: 0 */
const CardData = ({ data }) => {
  return (
    <>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pt-4 md:space-y-0 space-y-6 bg-white rounded-lg">
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
            <img
              src={data?.current?.condition?.icon}
              alt={data?.current?.condition?.text}
              title={data?.current?.condition?.text}
            />
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {data?.location?.name}
            </h2>
            <h3 className="text-gray-900 text-3xl title-font font-medium mb-2">
              {data?.location?.region}, {data?.location?.country}
            </h3>
            <span>{data?.location?.localtime}</span>
            <p className="leading-relaxed text-base">
              temperatura celcius: {data?.current?.temp_c}°C <br />
              temperatura farenheit: {data?.current?.temp_f}°F <br />
              sensacion termica: {data?.current?.feelslike_c}°C
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardData;
