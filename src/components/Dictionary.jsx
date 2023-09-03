import { BiPlay } from "react-icons/bi";

const Dictionary = ({ search }) => {
  return (
    <div className="w-[327px] h-auto mt-2 mb-4 md:w-[689px] md:h-auto ">
      <div className="w-[327px] h-auto mt-2 mb-4 md:w-[689px] md:h-auto ">
        <div className=" flex items-center justify-between">
          <div>
            <div className=" w-[128px] h-[64px]">
              <h1 className=" text-[22px] font-bold font-inconsolata md:text-[24px]">
                {search && search[0].word}
              </h1>
              <h1 className=" text-[14px] text-purple-400">
                {search && search[0].phonetic}
              </h1>
            </div>
          </div>

          <div className=" flex items-center cursor-pointer justify-center w-[48px] h-[48px] rounded-full bg-purple-300">
            <BiPlay className=" text-purple-700 text-[30px]" />
          </div>
        </div>
      </div>

      {search &&
        search[0].meanings &&
        search[0]?.meanings.map((meaning, index) => (
          <div key={index} className=" mt-3">
            <div className=" flex items-center justify-between mt-3">
              <p className=" font-bold md:text-[24px]">
                {meaning.partOfSpeech}
              </p>
              <hr className="border border-gray-300 w-[270px] md:w-[608px]" />
            </div>
            <div className=" mt-2">
              <p className=" md:text-[20px]">meaning</p>
            </div>

            {meaning?.definitions &&
              meaning?.definitions.map((definition, index) => (
                <div key={index}>
                  <div className=" flex mb-4">
                    <div className="w-[8px] ml-2 h-[5px] rounded-full bg-purple-400 mr-10"></div>
                    <p className=" md:text-[20px]">{definition.definition}</p>
                    {definition.example && (
                      <p className=" md:text-[20px]">{definition.example}</p>
                    )}
                  </div>
                </div>
              ))}

            <div className=" flex items-center mt-5">
              <p className=" md:text-[20px]">Synonyms</p>
              {meaning?.synonyms &&
                meaning?.synonyms.map((synonym, index) => (
                  <p
                    key={index}
                    className=" ml-[40px] text-purple-500 hover:underline md:text-[20px] md:flex md:flex-wrap md:gap-3"
                  >
                    {synonym}
                  </p>
                ))}
            </div>
          </div>
        ))}
      {search &&
        search[0].sourceUrls &&
        search[0]?.sourceUrls.map((sourceUrls, index) => (
          <div>
            <hr className="border border-gray-300 w-[335px] mt-10 mb-10 md:w-[689px]" />
            <div key={index} className=" md:w-[689] md:flex ">
              <p className=" underline mb-2 md:text-[20px]">Source</p>
              <p className=" md:text-[20px] md:pl-[60px]">
                {search && search[0].sourceUrls}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dictionary;
