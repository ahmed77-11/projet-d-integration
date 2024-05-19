import { Route, Routes } from "react-router-dom";
import Footer from "../components/dashbord/Footer";
import Header from "../components/dashbord/Header";
import Sidebar from "../components/dashbord/Sidebar";
import AddEstate from "../components/dashbord/AddEstate";
import AddFlat from "../components/dashbord/AddFlat";
import AddHouse from "../components/dashbord/AddHouse";
import EstatesList from "../components/dashbord/EstatesList";
import EstateDash from "../components/dashbord/EstateDash";

const Dashbord = () => {
  return (
    // <div>
    //   <Header />
    //   <div style={{ display: "flex" }}>
    //     <Sidebar />
    //     {/* <div style={{ flex: 1 }}></div> */}
    //     <div
    //       style={{ flex: 6 }}
    //       className="w-full overflow-x-hidden border-t flex flex-col"
    //     >
    //       <Routes>
    //         <Route path="/addEstate" element={<AddEstate />} />
    //         <Route path="/addFlat" element={<AddFlat />} />
    //         <Route path="/addHouse" element={<AddHouse />} />
    //         <Route path="/EstateList" element={<EstatesList />} />
    //         <Route path="/estateProfile/:estateId" element={<EstateDash />} />
    //       </Routes>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <div className="flex flex-col h-[2131px] items-start relative bg-[#1c120d]">
      <div className="flex flex-col w-[1280px] h-[1679.75px] items-start relative bg-[#1c110c]">
        <div className="flex flex-col w-[1280px] h-[1679.75px] items-start relative">
          <div className="flex w-[1270px] h-[65px] items-center justify-between px-[40px] py-[12px] relative border-b [border-bottom-style:solid] border-[#e5e8ea]">
            <div className="w-[611.11px] h-[22.5px] items-center flex gap-[32px] relative">
              <div className="w-[150.97px] h-[22.5px] items-center gap-[16px] flex relative">
                <div className="w-[16px] h-[16px] flex flex-col items-start relative">
                  <div className="relative w-[16px] h-[16px] overflow-hidden">
                    <img
                      className="absolute w-[16px] h-[16px] top-[1042px] left-[601px]"
                      alt="Vector"
                      src="vector-0.svg"
                    />
                  </div>
                </div>
                <div className="w-[118.97px] h-[22.5px] flex flex-col items-start relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-0.50px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[18px] tracking-[-0.27px] leading-[22.5px] whitespace-nowrap">
                      LOGO
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[428.14px] h-[21px] items-center gap-[36px] flex relative">
                <div className="flex flex-col w-[80.11px] h-[21px] items-start relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                      Home
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[59.58px] h-[21px] items-start relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                      About
                    </div>
                  </div>
                </div>
                <div className="w-[53.8px] h-[21px] flex flex-col items-start relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] leading-[21px] whitespace-nowrap relative mt-[-1.00px] tracking-[0]">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[99px] h-[39px] items-center justify-center px-[16px] py-0 relative mt-[-8.25px] mb-[-8.25px] mr-[-131.00px] bg-[#a1a1a1] rounded-[20px] overflow-hidden">
                <div className="flex flex-col w-[80px] h-[21px] items-start relative ml-[-12.50px] mr-[-0.50px] bg-[#a1a1a1]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#000000] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                    Place an ad
                  </div>
                </div>
                <img
                  className="relative w-[12px] h-[12px] mr-[-12.50px] object-cover"
                  alt="Pen"
                  src="pen-1.png"
                />
              </div>
            </div>
            <div className="w-[612px] h-[40px] items-start justify-end mr-[-33.11px] flex gap-[32px] relative">
              <div className="w-[260px] h-[40px] items-center justify-between px-[16px] py-[8px] bg-[#2d2d2d] rounded-[12px] flex relative">
                <div className="flex flex-col w-[24px] h-[24px] items-start relative">
                  <div className="relative w-[24px] h-[24px]">
                    <img
                      className="absolute w-[20px] h-[20px] top-[2px] left-[2px]"
                      alt="Vector"
                      src="vector-0-5.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[192px] h-[24px] items-start relative">
                  <div className="flex flex-col w-[192px] h-[24px] items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] tracking-[0] leading-[24px]">
                      Search
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex h-[40px] items-start gap-[8px] relative flex-[0_0_auto]">
                <div className="flex w-[84px] h-[40px] items-center justify-center px-[16px] py-0 relative bg-[#2d2d2d] rounded-[12px] overflow-hidden">
                  <div className="w-[47.23px] h-[21px] relative bg-[#2d2d2d] flex flex-col items-start">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[14px] tracking-[0.21px] leading-[21px] whitespace-nowrap">
                        Sign in
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[84px] h-[40px] items-center justify-center px-[16px] py-0 relative bg-[#2d2d2d] rounded-[12px] overflow-hidden">
                  <div className="w-[47.23px] h-[21px] relative bg-[#2d2d2d] flex flex-col items-start">
                    <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[14px] tracking-[0.21px] leading-[21px] whitespace-nowrap">
                        Sign in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1280px] h-[1471px] items-start justify-center px-[160px] py-[20px] relative">
            <div className="w-[960px] h-[1374.75px] flex flex-col items-start relative">
              <div className="flex-col w-[960px] h-[512px] items-start flex relative">
                <div className="flex flex-col w-[960px] h-[512px] items-start p-[16px] relative">
                  <div className="relative w-[928px] h-[480px] rounded-[12px] overflow-hidden [background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)] bg-[url(/depth-6-frame-0.png)] bg-cover bg-[50%_50%]">
                    <div className="flex flex-col w-[855px] h-[480px] items-start justify-center gap-[34px] p-[16px] relative left-[44px]">
                      <div className="flex flex-col w-[707.75px] h-[92px] items-start relative">
                        <div className="flex-col w-[707.75px] h-[92px] items-start gap-[8px] flex relative">
                          <div className="w-[707.75px] h-[60px] flex flex-col items-start relative">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                              <p className="relative w-fit mt-[-1.00px] mr-[-141.25px] [font-family:'Public_Sans-Black',Helvetica] font-black text-[#ffffff] text-[48px] text-center tracking-[-1.58px] leading-[60px] whitespace-nowrap">
                                Find the House of your dreams with ......
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col w-[707.75px] h-[24px] items-start relative">
                            <div className="relative self-stretch w-full flex-[0_0_auto]" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-[762px] h-[111px] items-start justify-center pl-[20px] pr-[168px] py-[20px] relative bg-[#ffffff33] rounded-[12px]">
                        <div className="flex w-[720px] h-[84px] items-center justify-center gap-[12px] p-[12px] relative mt-[-6.50px] mb-[-6.50px] mr-[-146.00px] bg-[#c5c5c533] rounded-[0px_12px_12px_12px]">
                          <img
                            className="relative w-px h-[51px] ml-[-22.50px]"
                            alt="Vector"
                            src="vector-3.svg"
                          />
                          <div className="inline-flex h-[70px] items-start gap-[7px] p-[16px] relative flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px] ml-[-10.00px] bg-white rounded-[6px]">
                            <div className="flex flex-col w-[135px] items-start justify-center gap-[6px] relative mb-[-22.00px]">
                              <div className="relative w-[108px] mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                                Categories
                              </div>
                              <div className="flex w-[113px] items-center justify-around gap-[12px] relative flex-[0_0_auto] opacity-40">
                                <div className="relative w-[140px] h-[27px] mt-[-1.00px] ml-[-13.50px] mr-[-13.50px] opacity-50 [font-family:'Poppins-Light',Helvetica] font-light text-[#000000] text-[16px] text-center tracking-[0] leading-[normal]">
                                  choose category
                                </div>
                                <img
                                  className="absolute w-[11px] h-[17px] top-[6px] left-[126px] object-cover"
                                  alt="Right arrow"
                                  src="right-arrow-1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="relative w-px h-[51px]"
                            alt="Vector"
                            src="vector-4.svg"
                          />
                          <div className="flex w-[169px] h-[70px] items-start gap-[7px] p-[16px] relative mt-[-5.00px] mb-[-5.00px] bg-white rounded-[6px]">
                            <div className="inline-flex h-[48px] flex-[0_0_auto] mb-[-10.00px] mr-[-17.00px] flex-col items-start justify-center gap-[6px] relative">
                              <div className="relative w-[95px] mt-[-7.50px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                                Regions
                              </div>
                              <div className="w-[154px] h-[28px] mb-[-6.50px] flex items-center relative opacity-40">
                                <div className="relative w-[145px] opacity-50 [font-family:'Poppins-Light',Helvetica] font-light text-[#000000] text-[16px] text-center tracking-[0] leading-[normal]">
                                  choose regions
                                </div>
                                <img
                                  className="top-[6px] left-[134px] absolute w-[11px] h-[17px] object-cover"
                                  alt="Right arrow"
                                  src="right-arrow-1-2.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="relative w-px h-[51px]"
                            alt="Vector"
                            src="vector-3-2.svg"
                          />
                          <div className="inline-flex h-[70px] items-start gap-[7px] p-[16px] relative flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px] bg-white rounded-[6px]">
                            <div className="inline-flex flex-[0_0_auto] mb-[-22.00px] flex-col items-start justify-center gap-[6px] relative">
                              <div className="w-[95px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[18px] text-center leading-[normal] relative mt-[-1.00px] tracking-[0]">
                                Ville
                              </div>
                              <div className="flex w-[113px] items-center justify-around gap-[12px] relative flex-[0_0_auto] opacity-40">
                                <div className="relative w-[140px] h-[27px] mt-[-1.00px] ml-[-13.50px] mr-[-13.50px] opacity-50 [font-family:'Poppins-Light',Helvetica] font-light text-[#000000] text-[16px] text-center tracking-[0] leading-[normal]">
                                  choose ville
                                </div>
                                <img
                                  className="top-[4px] left-[106px] absolute w-[11px] h-[17px] object-cover"
                                  alt="Right arrow"
                                  src="right-arrow-1-3.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="relative w-px h-[51px]"
                            alt="Vector"
                            src="vector-3-3.svg"
                          />
                          <div className="inline-flex h-[70px] items-start gap-[7px] p-[16px] relative flex-[0_0_auto] mt-[-5.00px] mb-[-5.00px] mr-[-10.00px] bg-white rounded-[6px]">
                            <div className="flex w-[131px] h-[59px] mb-[-21.00px] flex-col items-start justify-center gap-[6px] relative">
                              <div className="relative w-[95px] mt-[-1.50px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                                Budget
                              </div>
                              <div className="w-[142px] justify-around gap-[12px] flex-[0_0_auto] mb-[-0.50px] mr-[-11.00px] flex items-center relative opacity-40">
                                <img
                                  className="relative w-[119.81px] h-[16.13px]"
                                  alt="Choose budget"
                                  src="choose-budget.svg"
                                />
                                <img
                                  className="top-[4px] left-[131px] absolute w-[11px] h-[17px] object-cover"
                                  alt="Right arrow"
                                  src="right-arrow-1-4.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="relative w-px h-[51px] mr-[-22.50px]"
                            alt="Vector"
                            src="vector-3-4.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[792px] h-[47px] items-start flex justify-center relative">
                        <div className="w-[118.95px] h-[48px] items-center justify-center px-[20px] py-0 mb-[-1.00px] bg-[#009963] rounded-[12px] overflow-hidden flex relative">
                          <div className="w-[78.95px] h-[24px] bg-[#009963] flex flex-col items-start relative">
                            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                              <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[16px] text-center tracking-[0.24px] leading-[24px] whitespace-nowrap">
                                &nbsp;&nbsp; Searsh
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[960px] h-[59.5px] items-start pt-[20px] pb-[12px] px-[16px] flex relative">
                <div className="flex flex-col w-[212.14px] h-[27.5px] items-start relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mb-[-27.50px]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Bold',Helvetica] font-bold text-[#ffffff] text-[22px] tracking-[-0.33px] leading-[27.5px]">
                      All real estate
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col w-[960px] h-[288.41px] items-start flex relative">
                <div className="flex w-[960px] h-[288.41px] items-start gap-[8px] p-[16px] relative bg-[#191919]">
                  <div className="flex w-[928px] h-[256.41px] items-start relative rounded-[12px]">
                    <div className="w-[455.86px] h-[256.41px] flex items-start relative">
                      <div className="relative w-[455.86px] h-[256.41px] rounded-[12px] bg-[url(/depth-8-frame-0.png)] bg-cover bg-[50%_50%]" />
                    </div>
                    <div className="flex-col w-[472.14px] h-[106.5px] justify-center gap-[4px] p-[16px] flex items-start relative">
                      <div className="flex-col w-[269px] h-[23px] items-start mt-[-0.25px] flex relative">
                        <div className="relative w-[74px] h-[2px]" />
                        <img
                          className="relative self-stretch w-full flex-[0_0_auto]"
                          alt="Depth frame"
                          src="depth-9-frame-0.svg"
                        />
                      </div>
                      <div className="w-[440.14px] h-[48px] items-end justify-center gap-[12px] mb-[-0.25px] flex relative">
                        <div className="flex-col w-[276px] h-[51px] items-start gap-[4px] mt-[-3.00px] flex relative">
                          <div className="relative w-[276.06px] h-[48px] mr-[-0.06px]">
                            <div className="flex flex-col w-[263px] items-start relative left-[-80px]">
                              <p className="relative w-[117px] h-[44px] mt-[-1.00px] [font-family:'Public_Sans-Thin',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[-0.27px] leading-[22.5px]">
                                <span className="font-thin tracking-[-0.04px]">
                                  Rental in Sousse
                                  <br />
                                </span>
                                <span className="[font-family:'Public_Sans-Bold',Helvetica] font-bold text-[18px] tracking-[-0.05px]">
                                  <br />
                                </span>
                              </p>
                              <p className="relative w-[437px] h-[120px] mr-[-174.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] tracking-[0] leading-[24px]">
                                #Rental 📣📣Discover with international <br />
                                real estate this sumptuous American style villa
                                <br /> of type s+2 which offers a luxurious and
                                comfortable <br />
                                living environment, with a panoramic view 100
                                meters from <br />
                                the sea🏄‍♂️🌊 in 📍 Soviva…
                              </p>
                              <div className="w-[152.08px] h-[32px] items-center justify-center px-[16px] py-0 bg-[#009963] rounded-[12px] overflow-hidden flex relative">
                                <div className="w-[120.08px] h-[21px] bg-[#009963] flex flex-col items-start relative">
                                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                                      Read more .....
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[960px] h-[288.41px] items-start gap-[8px] pt-[8px] pb-[16px] px-[16px] relative bg-[#191919]">
                <div className="flex w-[928px] h-[256.41px] items-start relative rounded-[12px]">
                  <div className="w-[455.86px] h-[256.41px] flex items-start relative">
                    <div className="w-[445px] h-[246px] items-start flex relative">
                      <div className="relative w-[445px] h-[246px] rounded-[12px] bg-[url(/depth-5-frame-0.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                  <div className="flex-col w-[472.14px] h-[106.5px] justify-center gap-[4px] p-[16px] flex items-start relative">
                    <div className="flex flex-col w-[269px] h-[23px] items-start relative mt-[-1.75px]">
                      <div className="relative w-[74px] h-[2px]" />
                      <img
                        className="relative self-stretch w-full flex-[0_0_auto]"
                        alt="Depth frame"
                        src="image.svg"
                      />
                    </div>
                    <div className="w-[440px] h-[51px] items-end gap-[12px] mb-[-1.75px] flex justify-center relative">
                      <div className="flex-col w-[276px] h-[51px] items-start gap-[4px] flex relative">
                        <div className="relative w-[276.06px] h-[48px] mr-[-0.06px]">
                          <div className="flex flex-col w-[263px] items-start relative left-[-80px]">
                            <p className="relative w-[117px] h-[44px] mt-[-1.00px] [font-family:'Public_Sans-Thin',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[-0.27px] leading-[22.5px]">
                              <span className="font-thin tracking-[-0.04px]">
                                Rental in Sousse
                                <br />
                              </span>
                              <span className="[font-family:'Public_Sans-Bold',Helvetica] font-bold text-[18px] tracking-[-0.05px]">
                                <br />
                              </span>
                            </p>
                            <p className="relative w-[437px] h-[120px] mr-[-174.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] tracking-[0] leading-[24px]">
                              #Rental 📣📣Discover with international <br />
                              real estate this sumptuous American style villa
                              <br /> of type s+2 which offers a luxurious and
                              comfortable <br />
                              living environment, with a panoramic view 100
                              meters from <br />
                              the sea🏄‍♂️🌊 in 📍 Soviva…
                            </p>
                            <div className="w-[152.08px] h-[32px] items-center justify-center px-[16px] py-0 bg-[#009963] rounded-[12px] overflow-hidden flex relative">
                              <div className="w-[120.08px] h-[21px] bg-[#009963] flex flex-col items-start relative">
                                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                  <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                                    Read more .....
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-[960px] h-[288.41px] items-start gap-[8px] p-[16px] relative mb-[-61.97px] bg-[#191919]">
                <div className="flex w-[928px] h-[256.41px] items-start relative rounded-[12px]">
                  <div className="w-[455.86px] h-[256.41px] flex items-start relative">
                    <div className="w-[456px] h-[257px] items-start mb-[-0.59px] mr-[-0.14px] flex relative">
                      <div className="relative w-[456px] h-[257px] rounded-[12px] bg-[url(/image.png)] bg-cover bg-[50%_50%]" />
                    </div>
                  </div>
                  <div className="flex-col w-[472.14px] h-[106.5px] justify-center gap-[4px] p-[16px] flex items-start relative">
                    <div className="flex-col w-[269px] h-[23px] items-start mt-[-0.25px] flex relative">
                      <div className="relative w-[74px] h-[2px]" />
                      <img
                        className="relative self-stretch w-full flex-[0_0_auto]"
                        alt="Depth frame"
                        src="depth-9-frame-0-2.svg"
                      />
                    </div>
                    <div className="w-[440.14px] h-[48px] items-end justify-center gap-[12px] mb-[-0.25px] flex relative">
                      <div className="flex-col w-[276px] h-[51px] items-start gap-[4px] mt-[-3.00px] flex relative">
                        <div className="relative w-[276.06px] h-[48px] mr-[-0.06px]">
                          <div className="flex flex-col w-[263px] items-start relative left-[-80px]">
                            <p className="relative w-[117px] h-[44px] mt-[-1.00px] [font-family:'Public_Sans-Thin',Helvetica] font-normal text-[#ffffff] text-[16px] tracking-[-0.27px] leading-[22.5px]">
                              <span className="font-thin tracking-[-0.04px]">
                                Rental in Sousse
                                <br />
                              </span>
                              <span className="[font-family:'Public_Sans-Bold',Helvetica] font-bold text-[18px] tracking-[-0.05px]">
                                <br />
                              </span>
                            </p>
                            <p className="relative w-[437px] h-[120px] mr-[-174.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] tracking-[0] leading-[24px]">
                              #Rental 📣📣Discover with international <br />
                              real estate this sumptuous American style villa
                              <br /> of type s+2 which offers a luxurious and
                              comfortable <br />
                              living environment, with a panoramic view 100
                              meters from <br />
                              the sea🏄‍♂️🌊 in 📍 Soviva…
                            </p>
                            <div className="w-[152.08px] h-[32px] items-center justify-center px-[16px] py-0 bg-[#009963] rounded-[12px] overflow-hidden flex relative">
                              <div className="w-[120.08px] h-[21px] bg-[#009963] flex flex-col items-start relative">
                                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                                  <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Medium',Helvetica] font-medium text-[#ffffff] text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
                                    Read more .....
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[838px] h-[282px] top-[1592px] left-[176px] rounded-[12px] bg-[url(/depth-2-frame-0.png)] bg-cover bg-[50%_50%]" />
        </div>
      </div>
      <div className="relative w-[1280px] h-[200px]" />
      <div className="w-[1215px] h-[177px] flex flex-col items-start relative">
        <div className="flex-col w-[1319px] h-[200px] items-start gap-[24px] px-[20px] py-[40px] mb-[-23.00px] mr-[-104.00px] flex relative">
          <div className="relative w-[920px] h-[24px]">
            <div className="flex flex-col w-[24px] h-[24px] items-start absolute top-0 left-[408px]">
              <div className="relative w-[24px] h-[24px]">
                <img
                  className="absolute w-[20px] h-[20px] top-[2px] left-[2px]"
                  alt="Vector"
                  src="vector-0-2.svg"
                />
              </div>
            </div>
            <div className="w-[24px] h-[24px] absolute top-0 left-[448px] flex flex-col items-start">
              <div className="relative w-[24px] h-[24px]">
                <img
                  className="absolute w-[20px] h-[20px] top-[2px] left-[2px]"
                  alt="Vector"
                  src="vector-0-3.svg"
                />
              </div>
            </div>
            <div className="w-[24px] h-[24px] absolute top-0 left-[488px] flex flex-col items-start">
              <div className="relative w-[24px] h-[24px]">
                <img
                  className="absolute w-[17px] h-[19px] top-[2px] left-[4px]"
                  alt="Vector"
                  src="vector-0-4.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[920px] h-[24px] flex flex-col items-start relative">
            <div className="relative self-stretch w-full flex-[0_0_auto]" />
          </div>
          <div className="absolute w-[1010px] h-[24px] top-[40px] left-[150px]">
            <div className="flex flex-col w-[160px] h-[24px] items-start absolute top-0 left-[65px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  About Us
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[160px] h-[24px] items-start absolute top-0 left-[380px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  Contact Us
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[160px] h-[24px] items-start absolute top-0 left-[695px]">
              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Public_Sans-Regular',Helvetica] font-normal text-[#999999] text-[16px] text-center tracking-[0] leading-[24px] whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
// <div className="bg-gray-100 font-family-karla flex">
//   <Header />
//   <div className="w-full flex flex-col h-screen overflow-y-hidden">
//     <Sidebar />
//     <div className="w-full overflow-x-hidden border-t flex flex-col">
//       <Routes>
//         <Route path="/" element={<MainContent />} />
//         <Route path="/main" element={<EstateProfile />} />
//       </Routes>
//     </div>
//     <Footer />
//   </div>
// </div>


/////////////////////////////
// import { Route, Routes } from "react-router-dom";
// import Footer from "../components/dashbord/Footer";
// import Header from "../components/dashbord/Header";
// import Sidebar from "../components/dashbord/Sidebar";
// import AddEstate from "../components/dashbord/AddEstate";
// import AddFlat from "../components/dashbord/AddFlat";
// import AddHouse from "../components/dashbord/AddHouse";
// import EstatesList from "../components/dashbord/EstatesList";
// import EstateDash from "../components/dashbord/EstateDash";

// const Dashbord = () => {
//   return (
//     <div>
//       <Header />
//       <div style={{ display: "flex" }}>
//         <Sidebar />
//         {/* <div style={{ flex: 1 }}></div> */}
//         <div
//           style={{ flex: 6 }}
//           className="w-full overflow-x-hidden border-t flex flex-col"
//         >
//           <Routes>
//             <Route path="/addEstate" element={<AddEstate />} />
//             <Route path="/addFlat" element={<AddFlat />} />
//             <Route path="/addHouse" element={<AddHouse />} />
//             <Route path="/EstateList" element={<EstatesList />} />
//             <Route path="/estateProfile/:estateId" element={<EstateDash />} />
//           </Routes>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Dashbord;
// // <div className="bg-gray-100 font-family-karla flex">
// //   <Header />
// //   <div className="w-full flex flex-col h-screen overflow-y-hidden">
// //     <Sidebar />
// //     <div className="w-full overflow-x-hidden border-t flex flex-col">
// //       <Routes>
// //         <Route path="/" element={<MainContent />} />
// //         <Route path="/main" element={<EstateProfile />} />
// //       </Routes>
// //     </div>
// //     <Footer />
// //   </div>
// // </div>
import { FunctionComponent } from "react";

const Dashbord = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[2131px] flex flex-col items-start justify-start text-left text-sm text-white font-public-sans">
      <div className="w-[1280px] bg-gray-200 h-[1679.8px] flex flex-col items-start justify-start">
        <div className="w-[1280px] h-[1679.8px] flex flex-col items-start justify-start relative">
          {/* navbar */}
          {/* <div className="w-[1270px] box-border h-[65px] flex flex-row items-center justify-between py-3 px-10 z-[0] border-b-[1px] border-solid border-gainsboro">
            <div className="w-[611.1px] h-[22.5px] flex flex-row items-center justify-start gap-[32px]">
              <div className="w-[151px] h-[22.5px] flex flex-row items-center justify-start gap-[16px] text-lg">
                <div className="w-4 h-4 flex flex-col items-start justify-start">
                  <div className="w-4 relative h-4 overflow-hidden shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] w-4 h-4"
                      alt=""
                      src="/Ark.png"
                      // src="Vector - 0.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] w-[13.3px] h-[13.3px]" />
                  </div>
                </div>
                <div className="w-[119px] h-[22.5px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative tracking-[-0.27px] leading-[22.5px]">
                      LOGO
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[428.1px] h-[21px] flex flex-row items-center justify-start gap-[36px]">
                <div className="w-[80.1px] h-[21px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[21px] font-medium">
                      Home
                    </div>
                  </div>
                </div>
                <div className="w-[59.6px] h-[21px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[21px] font-medium">
                      About
                    </div>
                  </div>
                </div>
                <div className="w-[53.8px] h-[21px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[21px] font-medium">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[99px] rounded-[20px] bg-darkgray-100 h-[39px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border text-black1">
                <div className="w-20 bg-darkgray-100 h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                  <div className="relative leading-[21px] font-medium">
                    Place an ad
                  </div>
                </div>
                <img
                  className="w-3 relative h-3 object-cover"
                  alt=""
                  src="/Ark.png"
                  // src="pen 1.png"
                />
              </div>
            </div>
            <div className="w-[612px] h-10 flex flex-row items-start justify-end gap-[32px] text-base text-darkgray-200">
              <div className="w-[260px] rounded-xl bg-darkslategray h-10 flex flex-row items-center justify-between py-2 px-4 box-border">
                <div className="w-6 h-6 flex flex-col items-start justify-start">
                  <div className="w-6 relative h-6 overflow-hidden shrink-0">
                    <img
                      className="absolute top-[0px] left-[0px] w-6 h-6"
                      alt=""
                      src="/Ark.png"
                      // src="Vector - 0.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] w-[19.5px] h-[19.5px]" />
                  </div>
                </div>
                <div className="w-48 h-6 flex flex-col items-start justify-start">
                  <div className="w-48 h-6 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[24px]">
                      Search
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-10 flex flex-row items-start justify-start gap-[8px] text-sm text-white">
                <div className="w-[84px] rounded-xl bg-darkslategray h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border">
                  <div className="w-[47.2px] bg-darkslategray h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="relative tracking-[0.21px] leading-[21px]">
                        Sign in
                      </b>
                    </div>
                  </div>
                </div>
                <div className="w-[84px] rounded-xl bg-darkslategray h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border">
                  <div className="w-[47.2px] bg-darkslategray h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="relative tracking-[0.21px] leading-[21px]">
                        Sign in
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-[1280px] h-[1471px] flex flex-row items-start justify-center py-5 px-40 box-border z-[1] text-base">
            <div className="w-[960px] h-[1374.8px] flex flex-col items-start justify-start">
              <div className="w-[960px] h-[512px] flex flex-col items-start justify-start text-center text-[48px]">
                <div className="w-[960px] h-[512px] flex flex-col items-start justify-start p-4 box-border">
                  <div className="w-[928px] relative rounded-xl h-[480px] overflow-hidden shrink-0 bg-[url('Depth_6,_Frame_0.png')] bg-cover bg-no-repeat bg-[top]">
                    <div className="absolute top-[0px] left-[44px] w-[855px] h-[480px] flex flex-col items-start justify-center p-4 box-border gap-[34px]">
                      <div className="w-[707.8px] h-[92px] flex flex-col items-start justify-start">
                        <div className="w-[707.8px] h-[92px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="w-[707.8px] h-[60px] flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <div className="relative tracking-[-1.58px] leading-[60px] font-black">{`Find the House of your dreams with ...... `}</div>
                            </div>
                          </div>
                          <div className="w-[707.8px] h-6 flex flex-col items-start justify-start">
                            <div className="self-stretch h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="w-[762px] rounded-xl bg-gray-300 h-[111px] flex flex-col items-start justify-center py-5 pr-[168px] pl-5 box-border text-lg text-black font-poppins">
                        <div className="w-[720px] rounded-tl-none rounded-tr-xl rounded-b-xl bg-silver h-[84px] flex flex-row items-center justify-center p-3 box-border gap-[12px]">
                          <img
                            className="w-px relative max-w-full overflow-hidden h-[50px] opacity-[0.1]"
                            alt=""
                            src="/Ark.png"
                            // src="Vector 3.svg"
                          />
                          <div className="rounded-md bg-white h-[70px] flex flex-row items-start justify-start p-4 box-border">
                            <div className="w-[135px] flex flex-col items-start justify-center gap-[6px]">
                              <div className="w-[108px] relative font-semibold inline-block">
                                Categories
                              </div>
                              <div className="w-[113px] flex flex-row items-center justify-between relative opacity-[0.4] text-base text-black1">
                                <div className="w-[140px] relative font-light inline-block h-[27px] shrink-0 opacity-[0.5] z-[0]">
                                  choose category
                                </div>
                                <img
                                  className="w-[10.7px] absolute !m-[0] top-[5.5px] left-[126px] h-[16.5px] object-contain z-[1]"
                                  alt=""
                                  src="/Ark.png"
                                  // src="right-arrow 1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-px relative max-w-full overflow-hidden h-[50px] opacity-[0.1]"
                            alt=""
                            src="/Ark.png"
                            // src="Vector 4.svg"
                          />
                          <div className="w-[169px] rounded-md bg-white h-[70px] flex flex-row items-start justify-start p-4 box-border">
                            <div className="h-12 flex flex-col items-start justify-center gap-[6px]">
                              <div className="w-[95px] relative font-semibold inline-block">
                                Regions
                              </div>
                              <div className="w-[154px] h-7 flex flex-row items-center justify-start relative opacity-[0.4] text-base text-black1">
                                <div className="w-[145px] relative font-light inline-block shrink-0 opacity-[0.5] z-[0]">
                                  choose regions
                                </div>
                                <img
                                  className="w-[10.7px] absolute !m-[0] top-[6.24px] left-[134.27px] h-[16.5px] object-contain z-[1]"
                                  alt=""
                                  src="/Ark.png"
                                  // src="right-arrow 1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-px relative max-w-full overflow-hidden h-[50px] opacity-[0.1]"
                            alt=""
                            src="/Ark.png"
                            // src="Vector 3.svg"
                          />
                          <div className="rounded-md bg-white h-[70px] flex flex-row items-start justify-start p-4 box-border">
                            <div className="flex flex-col items-start justify-center gap-[6px]">
                              <div className="w-[95px] relative font-semibold inline-block">
                                Ville
                              </div>
                              <div className="w-[113px] flex flex-row items-center justify-between relative opacity-[0.4] text-base text-black1">
                                <div className="w-[140px] relative font-light inline-block h-[27px] shrink-0 opacity-[0.5] z-[0]">
                                  choose ville
                                </div>
                                <img
                                  className="w-[10.7px] absolute !m-[0] top-[3.5px] left-[106px] h-[16.5px] object-contain z-[1]"
                                  alt=""
                                  src="/Ark.png"
                                  // src="right-arrow 1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-px relative max-w-full overflow-hidden h-[50px] opacity-[0.1]"
                            alt=""
                            src="/Ark.png"
                            // src="Vector 3.svg"
                          />
                          <div className="rounded-md bg-white h-[70px] flex flex-row items-start justify-start p-4 box-border">
                            <div className="w-[131px] h-[59px] flex flex-col items-start justify-center gap-[6px]">
                              <div className="w-[95px] relative font-semibold inline-block">
                                Budget
                              </div>
                              <div className="w-[142px] flex flex-row items-center justify-between relative opacity-[0.4] text-base text-black1">
                                <div className="w-[140px] relative font-light inline-block h-[27px] shrink-0 opacity-[0.5] z-[0]">
                                  choose budget
                                </div>
                                <img
                                  className="w-[10.7px] absolute !m-[0] top-[4.5px] left-[131px] h-[16.5px] object-contain z-[1]"
                                  alt=""
                                  src="/Ark.png"
                                  // src="right-arrow 1.png"
                                />
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-px relative max-w-full overflow-hidden h-[50px] opacity-[0.1]"
                            alt=""
                            src="/Ark.png"
                            // src="Vector 3.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[792px] h-[47px] flex flex-row items-start justify-center text-base">
                        <div className="w-[119px] rounded-xl bg-seagreen h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-5 box-border">
                          <div className="w-[79px] bg-seagreen h-6 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-col items-start justify-start">
                              <b className="relative tracking-[0.24px] leading-[24px] whitespace-pre-wrap">
                                {" "}
                                Searsh
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[960px] h-[59.5px] flex flex-row items-start justify-start pt-5 px-4 pb-3 box-border text-[22px]">
                <div className="w-[212.1px] h-[27.5px] flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative tracking-[-0.33px] leading-[27.5px]">
                      <p className="m-0">All real estate</p>
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[960px] h-[288.4px] flex flex-col items-start justify-start">
                <div className="w-[960px] bg-gray-100 h-[288.4px] flex flex-row items-start justify-start p-4 box-border">
                  <div className="w-[928px] rounded-xl h-[256.4px] flex flex-row items-start justify-start">
                    <div className="w-[455.9px] h-[256.4px] flex flex-row items-start justify-start">
                      <img
                        className="w-[455.9px] relative rounded-xl h-[256.4px] overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/Ark.png"
                        // src="Depth 8, Frame 0.png"
                      />
                    </div>
                    <div className="w-[472.1px] h-[106.5px] flex flex-col items-start justify-center p-4 box-border gap-[4px]">
                      <div className="w-[269px] h-[23px] flex flex-col items-start justify-start">
                        <div className="w-[74px] relative h-0.5 overflow-hidden shrink-0" />
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <img
                            className="w-[109.7px] relative h-[18.6px]"
                            alt=""
                            src="/Ark.png"
                            // src="Villa in Soviva.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[440.1px] h-12 flex flex-row items-end justify-center">
                        <div className="w-[276px] h-[51px] flex flex-col items-start justify-start">
                          <div className="w-[276.1px] h-12 flex flex-col items-start justify-start relative">
                            <div className="w-[263px] !m-[0] absolute top-[0px] left-[-80px] flex flex-col items-start justify-start z-[0]">
                              <div className="w-[117px] relative tracking-[-0.27px] leading-[22.5px] inline-block h-11 shrink-0">
                                <p className="m-0 font-thin">
                                  Rental in Sousse
                                </p>
                                <p className="m-0 text-lg">
                                  <b>&nbsp;</b>
                                </p>
                              </div>
                              <div className="w-[437px] relative leading-[24px] text-darkgray-200 inline-block h-[120px] shrink-0">
                                <p className="m-0">{`#Rental 📣📣Discover with international `}</p>
                                <p className="m-0">
                                  real estate this sumptuous American style
                                  villa
                                </p>
                                <p className="m-0">{` of type s+2 which offers a luxurious and comfortable `}</p>
                                <p className="m-0">{`living environment, with a panoramic view 100 meters from `}</p>
                                <p className="m-0">the sea🏄‍♂️🌊 in 📍 Soviva…</p>
                              </div>
                              <div className="w-[152.1px] rounded-xl bg-seagreen h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border text-sm">
                                <div className="w-[120.1px] bg-seagreen h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                                  <div className="self-stretch flex flex-col items-start justify-start">
                                    <div className="relative leading-[21px] font-medium">
                                      Read more .....
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[960px] bg-gray-100 h-[288.4px] flex flex-row items-start justify-start pt-2 px-4 pb-4 box-border">
                <div className="w-[928px] rounded-xl h-[256.4px] flex flex-row items-start justify-start">
                  <div className="w-[455.9px] h-[256.4px] flex flex-row items-start justify-start">
                    <div className="w-[445px] h-[246px] flex flex-row items-start justify-start">
                      <img
                        className="w-[445px] relative rounded-xl h-[246px] overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/Ark.png"
                        // src="Depth 5, Frame 0.png"
                      />
                    </div>
                  </div>
                  <div className="w-[472.1px] h-[106.5px] flex flex-col items-start justify-center p-4 box-border gap-[4px]">
                    <div className="w-[269px] h-[23px] flex flex-col items-start justify-start">
                      <div className="w-[74px] relative h-0.5 overflow-hidden shrink-0" />
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <img
                          className="w-[109.7px] relative h-[18.6px]"
                          alt=""
                          src="/Ark.png"
                          // src="Villa in Soviva.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[440px] h-[51px] flex flex-row items-end justify-center">
                      <div className="w-[276px] h-[51px] flex flex-col items-start justify-start">
                        <div className="w-[276.1px] h-12 flex flex-col items-start justify-start relative">
                          <div className="w-[263px] !m-[0] absolute top-[0px] left-[-80px] flex flex-col items-start justify-start z-[0]">
                            <div className="w-[117px] relative tracking-[-0.27px] leading-[22.5px] inline-block h-11 shrink-0">
                              <p className="m-0 font-thin">Rental in Sousse</p>
                              <p className="m-0 text-lg">
                                <b>&nbsp;</b>
                              </p>
                            </div>
                            <div className="w-[437px] relative leading-[24px] text-darkgray-200 inline-block h-[120px] shrink-0">
                              <p className="m-0">{`#Rental 📣📣Discover with international `}</p>
                              <p className="m-0">
                                real estate this sumptuous American style villa
                              </p>
                              <p className="m-0">{` of type s+2 which offers a luxurious and comfortable `}</p>
                              <p className="m-0">{`living environment, with a panoramic view 100 meters from `}</p>
                              <p className="m-0">the sea🏄‍♂️🌊 in 📍 Soviva…</p>
                            </div>
                            <div className="w-[152.1px] rounded-xl bg-seagreen h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border text-sm">
                              <div className="w-[120.1px] bg-seagreen h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                  <div className="relative leading-[21px] font-medium">
                                    Read more .....
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[960px] bg-gray-100 h-[288.4px] flex flex-row items-start justify-start p-4 box-border">
                <div className="w-[928px] rounded-xl h-[256.4px] flex flex-row items-start justify-start">
                  <div className="w-[455.9px] h-[256.4px] flex flex-row items-start justify-start">
                    <div className="w-[456px] h-[257px] flex flex-row items-start justify-start">
                      <img
                        className="w-[456px] relative rounded-xl h-[257px] overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/Ark.png"
                        // src="Depth 5, Frame 0.png"
                      />
                    </div>
                  </div>
                  <div className="w-[472.1px] h-[106.5px] flex flex-col items-start justify-center p-4 box-border gap-[4px]">
                    <div className="w-[269px] h-[23px] flex flex-col items-start justify-start">
                      <div className="w-[74px] relative h-0.5 overflow-hidden shrink-0" />
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <img
                          className="w-[109.7px] relative h-[18.6px]"
                          alt=""
                          src="/Ark.png"
                          // src="Villa in Soviva.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[440.1px] h-12 flex flex-row items-end justify-center">
                      <div className="w-[276px] h-[51px] flex flex-col items-start justify-start">
                        <div className="w-[276.1px] h-12 flex flex-col items-start justify-start relative">
                          <div className="w-[263px] !m-[0] absolute top-[0px] left-[-80px] flex flex-col items-start justify-start z-[0]">
                            <div className="w-[117px] relative tracking-[-0.27px] leading-[22.5px] inline-block h-11 shrink-0">
                              <p className="m-0 font-thin">Rental in Sousse</p>
                              <p className="m-0 text-lg">
                                <b>&nbsp;</b>
                              </p>
                            </div>
                            <div className="w-[437px] relative leading-[24px] text-darkgray-200 inline-block h-[120px] shrink-0">
                              <p className="m-0">{`#Rental 📣📣Discover with international `}</p>
                              <p className="m-0">
                                real estate this sumptuous American style villa
                              </p>
                              <p className="m-0">{` of type s+2 which offers a luxurious and comfortable `}</p>
                              <p className="m-0">{`living environment, with a panoramic view 100 meters from `}</p>
                              <p className="m-0">the sea🏄‍♂️🌊 in 📍 Soviva…</p>
                            </div>
                            <div className="w-[152.1px] rounded-xl bg-seagreen h-8 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-4 box-border text-sm">
                              <div className="w-[120.1px] bg-seagreen h-[21px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                  <div className="relative leading-[21px] font-medium">
                                    Read more .....
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[838px] absolute !m-[0] top-[1592px] left-[176px] rounded-xl h-[282px] overflow-hidden shrink-0 object-cover z-[2]"
            alt=""
            src="/Ark.png"
            // src="Depth 2, Frame 0.png"
          />
        </div>
      </div>
      {/* <div className="w-[1215px] h-[177px] flex flex-col items-start justify-start text-center text-base text-darkgray-200">
        <div className="w-[1319px] h-[200px] flex flex-col items-start justify-start py-10 px-5 box-border relative gap-[24px]">
          <div className="w-[920px] relative h-6 z-[0]">
            <div className="absolute top-[0px] left-[408px] w-6 h-6 flex flex-col items-start justify-start">
              <div className="w-6 relative h-6 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-6 h-6"
                  alt=""
                  src="/Ark.png"
                  // src="Vector - 0.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[19.5px] h-[19.5px]" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[448px] w-6 h-6 flex flex-col items-start justify-start">
              <div className="w-6 relative h-6 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-6 h-6"
                  alt=""
                  src="/Ark.png"
                  // src="Vector - 0.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[19.5px] h-[19.5px]" />
              </div>
            </div>
            <div className="absolute top-[0px] left-[488px] w-6 h-6 flex flex-col items-start justify-start">
              <div className="w-6 relative h-6 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[0px] w-6 h-6"
                  alt=""
                  src="/Ark.png"
                  // src="Vector - 0.svg"
                />
                <div className="absolute top-[0px] left-[0px] w-[16.5px] h-[19.5px]" />
              </div>
            </div>
          </div>
          <div className="w-[920px] h-6 flex flex-col items-start justify-start z-[1]">
            <div className="self-stretch h-6" />
          </div>
          <div className="w-[1010px] absolute !m-[0] top-[40px] left-[150px] h-6 z-[2]">
            <div className="absolute top-[0px] left-[65px] w-40 h-6 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">About Us</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[380px] w-40 h-6 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Contact Us</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[695px] w-40 h-6 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative leading-[24px]">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashbord;
