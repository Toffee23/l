<div className="  px-[4%] md:px-[20%] lg:px-[4%]  2xl:px-[6%]  py-[50px] ">
  <div className="h-full ">
    <div className="md:mb-[50px] mb-[20px]">
      <Image
        className="md:w-[86px] w-[196px] mx-auto md:mx-[0px]"
        width={63}
        height={80}
        src={Logo}
        alt="logo"
      />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[25px] min-h-[704px] ">
      <div className="lg:pr-[80px]">
        <div className="pb-[20px] md:pb-[40px] mb-[24px] md:mb-[30px] border-b-[1px] border-white">
          <h4 className="text-[32px] md:text-[64px] md:lading-[81px] font-[500] text-white">
            Terms of service
          </h4>
          <h4 className="text-[15px] font-[400] leaing-[22.5px] text-white mt-[16px] md:mt-[32px] md:text-[18px]">
            At Honey Bunny Bun, we highly value your privacy and trust. It's
            crucial for us to be transparent about our practices regarding the
            collection, usage, and disclosure of your information.
          </h4>
        </div>
        <div className="border-b-[1px] lg:border-b-[0px] border-white pb-[10px] ">
          {terms.map((heading, index) => (
            <div key={index}>
              <ul
                className={`tex-[16px] font-[700] ml-[20px] w-fit mb-[16px] md:mb-[32px] ${
                  activeHeadingIndex === index
                    ? "text-tertiary border-b-[1px] border-tertiary"
                    : "text-white"
                } cursor-pointer list-disc`}
                onClick={() => handleHeadingClick(index)}
              >
                <li>{heading.title}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-rgba-6ab5d2-16 px-[24px] py-[36px] rounded-[24px] h-full flex flex-col">
        {terms.map((terms, index) => (
          <div key={index}>
            <div>
              <div
                className={
                  activeHeadingIndex === index
                    ? `border-b-[1px] border-line pb-[17px] mb-[17px]`
                    : "hidden"
                }
              >
                <h4 className="text-white text-[22px] md:text-[24px] font-[700] leading-[28px] md:leading-[30.6px]">
                  {terms.title}
                </h4>
                <h4 className="text-white text-[16px] md:text-[18px] md:leading-[27px] font-[400] mt-[16px]">
                  {terms.description}
                </h4>
              </div>
              {activeHeadingIndex === index &&
                terms.slides.map((slide, slideIndex) => (
                  <div key={slideIndex}>
                    {activeSlideIndex === slideIndex &&
                      slide.sections.map((section, sectionIndex) => (
                        <div className="pb-[12px]" key={sectionIndex}>
                          <div className="flex">
                            <div className="w-[15px] flex justify-end mr-[10px]">
                              <h4 className=" text-[14px] font-[400] text-white leading-[21px]">
                                {section.number}.
                              </h4>
                            </div>
                            <div className="w-full">
                              <h3 className="text-[14px] font-[400] text-white leading-[21px]">
                                {section.title}
                              </h3>
                              {section.texts.map((text, textIndex) => (
                                <ul
                                  className="list-disc mt-[10px] text-white font-[400] text-[14px] leading-[21px] -ml-[10px] md:ml-[20px]"
                                  key={textIndex}
                                >
                                  <li>{text}</li>
                                </ul>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
        <div className="mt-auto md:flex flex-row items-center  justify-between pt-[17px] border-t-[1px] border-line">
          <div className="order-2 flex justify-center items-center gap-[24px]">
            <Button
              size="sm"
              onClick={handlePrevSlide}
              className="backdrop-blur-sm p-2 rounded"
            >
              <Image
                src={arrowLeft}
                width={13.21}
                height={21}
                alt="arrow left"
              />
            </Button>
            <Button
              size="sm"
              onClick={handleNextSlide}
              className="backdrop-blur-sm p-2 rounded"
            >
              <Image
                src={arrowRight}
                width={13.21}
                height={21}
                alt="arrow Right"
              />
            </Button>
          </div>
          <div className="order-1 mt-[20px] md:mt-[0px]">
            <h4 className="text-white font-[400] text-[12px] text-center">
              Last updated: November 2021
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
