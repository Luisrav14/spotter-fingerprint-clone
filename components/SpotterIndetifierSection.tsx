"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";

import StyleChart from "./Chart";
import AnimatedCard from "./AnimatedCard";

const data = [
  { day: 0, orange: 98, purple: 97 },
  { day: 30, orange: 97, purple: 95 },
  { day: 60, orange: 97, purple: 80 },
  { day: 90, orange: 96, purple: 70 },
  { day: 120, orange: 95, purple: 60 },
];

export function SpotterIdentifierSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2 max-w-7xl mx-auto px-4 lg:px-0 pt-10 mt-18">
      <div className="md:col-span-3 border-1 rounded-xl flex-col items-end bg-background">
        <div className="p-8">
          <h4 className="text-muted-foreground text-xs font-light mb-2 inline-block border-1 rounded-sm py-1 px-2">Why Spotter.ai</h4>

          <h2 className="text-4xl font-medium">
            The internet’s most
            <br />
            <span className="text-teal-600 font-semibold">accurate</span> visitor identifier
          </h2>
          <p className="text-md mt-4 text-muted-foreground">
            <span className="font-bold">Industry-leading accuracy </span>
            that lasts for
            <br /> months or years, even when cookies are cleared.
          </p>
          <Button className="mt-4 text-xs bg-neutral-100 text-foreground border-1 hover:bg-neutral-200">Learn More</Button>
        </div>

        <div className="mt-8 h-50 pr-8">
          <StyleChart data={data} />
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col gap-2">
        <div className="py-8 px-2 border-1 rounded-xl bg-background">
          <CardContent className="flex items-start justify-start gap-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
                <g filter="url(#filter0_d_1537_115788)">
                  <rect width="28" height="28" x="3" y="2" fill="#fff" rx="6"></rect>
                  <rect width="28" height="28" x="3" y="2" fill="none" rx="6"></rect>
                  <rect width="28" height="28" x="3" y="2" stroke="#F0F0ED" stroke-linecap="round" rx="6"></rect>
                  <path
                    stroke="#134e4a"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m23 22-2.9-2.9m1.6-3.8a5.3 5.3 0 1 1-10.7 0 5.3 5.3 0 0 1 10.7 0Z"
                  ></path>
                  <g filter="url(#filter1_i_1537_115788)">
                    <path stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" d="M16.3 12c1.9 0 3.4 1.5 3.4 3.3"></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1537_115788"
                    width="33"
                    height="33"
                    x="0.5"
                    y="0.5"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.0941176 0 0 0 0 0.0980392 0 0 0 0 0.0862745 0 0 0 0.06 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1537_115788"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1537_115788" result="shape"></feBlend>
                  </filter>
                  <filter
                    id="filter1_i_1537_115788"
                    width="5.3"
                    height="5.3"
                    x="15.8"
                    y="11.5"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.466667 0 0 0 0 0.211765 0 0 0 0 0.109804 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_1537_115788"></feBlend>
                  </filter>
                  <linearGradient id="paint0_linear_1537_115788" x1="25.6" x2="6.6" y1="31.9" y2="20.4" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#484946"></stop>
                    <stop offset="1" stop-color="#6E6F6C"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Any browser, any device.</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy.
              </p>
            </div>
          </CardContent>
        </div>

        <div className="border-1 rounded-xl bg-background">
          <div>
            <div className="h-[200px] w-full">
              <AnimatedCard />
            </div>
          </div>
          <CardContent className="flex items-start justify-start gap-3 pt-7 pb-8 px-7">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 34 34">
                <g filter="url(#filter0_d_1537_115765)">
                  <rect width="28" height="28" x="3" y="2" fill="#fff" rx="6"></rect>
                  <rect width="28" height="28" x="3" y="2" fill="none" rx="6"></rect>
                  <rect width="28" height="28" x="3" y="2" stroke="#F0F0ED" stroke-linecap="round" rx="6"></rect>
                  <g clip-path="url(#clip0_1537_115765)">
                    <g filter="url(#filter1_i_1537_115765)">
                      <path
                        stroke="#134e4a"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.4 20c1.6-1 2.6-2.8 2.6-4.8a6 6 0 0 0-6-5.9 6 6 0 0 0-6 5.9c0 2 1 3.7 2.6 4.8m1-2.7a3 3 0 0 1-1-2.1c0-1.8 1.6-3.2 3.4-3.2 1.8 0 3.3 1.4 3.3 3.2a3 3 0 0 1-.9 2.1M17 22.7c-.7 0-1.3-.6-1.3-1.4V20a1.3 1.3 0 0 1 2.6 0v1.3c0 .8-.6 1.4-1.3 1.4Zm.7-7.4a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z"
                      ></path>
                    </g>
                    <g stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" filter="url(#filter2_i_1537_115765)">
                      <path d="M15.7 20a1.3 1.3 0 0 1 2.6 0v1.3a1.3 1.3 0 0 1-2.6 0V20ZM17 16a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"></path>
                    </g>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1537_115765"
                    width="33"
                    height="33"
                    x="0.5"
                    y="0.5"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.0941176 0 0 0 0 0.0980392 0 0 0 0 0.0862745 0 0 0 0.06 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1537_115765"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1537_115765" result="shape"></feBlend>
                  </filter>
                  <filter
                    id="filter1_i_1537_115765"
                    width="14"
                    height="15.3"
                    x="10.5"
                    y="8.8"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.466667 0 0 0 0 0.211765 0 0 0 0 0.109804 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_1537_115765"></feBlend>
                  </filter>
                  <filter
                    id="filter2_i_1537_115765"
                    width="4.7"
                    height="10"
                    x="15.2"
                    y="14.1"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.466667 0 0 0 0 0.211765 0 0 0 0 0.109804 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_1537_115765"></feBlend>
                  </filter>
                  <linearGradient id="paint0_linear_1537_115765" x1="25.6" x2="6.6" y1="31.9" y2="20.4" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#484946"></stop>
                    <stop offset="1" stop-color="#6E6F6C"></stop>
                  </linearGradient>
                  <clipPath id="clip0_1537_115765">
                    <rect width="16" height="16" x="9" y="8" fill="#fff" rx="6.6"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Identify all anonymous visitors.</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used.
              </p>
            </div>
          </CardContent>
        </div>

        <div className="py-8 px-2 border-1 rounded-xl bg-background">
          <CardContent className="flex items-start justify-start gap-3">
            <div>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1537_115120)">
                  <rect x="3" y="2" width="28" height="28" rx="6" fill="white"></rect>
                  <rect x="3" y="2" width="28" height="28" rx="6" fill="url(#paint0_linear_1537_115120)" fill-opacity="0.02"></rect>
                  <rect x="3" y="2" width="28" height="28" rx="6" stroke="#F0F0ED" stroke-linecap="round"></rect>
                  <path
                    d="M14.6001 13.6001H14.6081M19.3998 18.3998H19.4078M20.1998 12.8001L13.8001 19.1998M14.7616 22.8803C15.0238 22.8456 15.2886 22.9167 15.4975 23.0776L16.46 23.8162C16.7782 24.0606 17.2208 24.0606 17.5381 23.8162L18.5371 23.0492C18.7237 22.9061 18.9592 22.843 19.1921 22.8741L20.4417 23.0385C20.839 23.0909 21.222 22.8696 21.3758 22.499L21.8566 21.3364C21.9464 21.1187 22.1188 20.9462 22.3366 20.8565L23.4991 20.3756C23.8697 20.2227 24.091 19.8388 24.0386 19.4415L23.8804 18.2371C23.8457 17.9749 23.9168 17.71 24.0777 17.5012L24.8162 16.5386C25.0606 16.2204 25.0606 15.7777 24.8162 15.4604L24.0492 14.4614C23.9061 14.2748 23.843 14.0392 23.8741 13.8063L24.0386 12.5567C24.091 12.1594 23.8697 11.7763 23.4991 11.6225L22.3366 11.1417C22.1188 11.0519 21.9464 10.8795 21.8566 10.6617L21.3758 9.49914C21.2229 9.1285 20.839 8.90718 20.4417 8.95962L19.1921 9.12405C18.9592 9.15605 18.7237 9.09295 18.538 8.95073L17.539 8.18368C17.2208 7.93926 16.7782 7.93926 16.4609 8.18368L15.4619 8.95073C15.2753 9.09295 15.0398 9.15605 14.8069 9.12583L13.5573 8.9614C13.16 8.90896 12.777 9.13028 12.6232 9.50091L12.1433 10.6635C12.0526 10.8804 11.8802 11.0528 11.6633 11.1434L10.5008 11.6234C10.1302 11.7772 9.90891 12.1603 9.96135 12.5576L10.1258 13.8072C10.156 14.0401 10.0929 14.2756 9.95068 14.4614L9.18367 15.4604C8.93926 15.7786 8.93926 16.2213 9.18367 16.5386L9.95068 17.5376C10.0938 17.7243 10.1569 17.9598 10.1258 18.1927L9.96135 19.4423C9.90891 19.8396 10.1302 20.2227 10.5008 20.3765L11.6633 20.8573C11.8811 20.9471 12.0535 21.1195 12.1433 21.3373L12.6241 22.4999C12.777 22.8705 13.1609 23.0918 13.5582 23.0394L14.7616 22.8803ZM15.0001 13.6001C15.0001 13.821 14.821 14.0001 14.6001 14.0001C14.3792 14.0001 14.2001 13.821 14.2001 13.6001C14.2001 13.3792 14.3792 13.2001 14.6001 13.2001C14.821 13.2001 15.0001 13.3792 15.0001 13.6001ZM19.7998 18.3998C19.7998 18.6207 19.6207 18.7998 19.3998 18.7998C19.1789 18.7998 18.9998 18.6207 18.9998 18.3998C18.9998 18.1789 19.1789 17.9998 19.3998 17.9998C19.6207 17.9998 19.7998 18.1789 19.7998 18.3998Z"
                    stroke="#134e4a"
                    stroke-width="0.999949"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <g filter="url(#filter1_i_1537_115120)">
                    <path
                      d="M14.6449 13.6436H14.6529M19.4447 18.4433H19.4527M20.2446 12.8436L13.845 19.2433M15.0449 13.6436C15.0449 13.8645 14.8658 14.0436 14.6449 14.0436C14.424 14.0436 14.245 13.8645 14.245 13.6436C14.245 13.4227 14.424 13.2436 14.6449 13.2436C14.8658 13.2436 15.0449 13.4227 15.0449 13.6436ZM19.8447 18.4433C19.8447 18.6642 19.6656 18.8433 19.4447 18.8433C19.2238 18.8433 19.0447 18.6642 19.0447 18.4433C19.0447 18.2224 19.2238 18.0434 19.4447 18.0434C19.6656 18.0434 19.8447 18.2224 19.8447 18.4433Z"
                      stroke="#0d9488"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1537_115120"
                    x="0.5"
                    y="0.5"
                    width="33"
                    height="33"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.0980392 0 0 0 0 0.0862745 0 0 0 0.06 0"></feColorMatrix>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1537_115120"></feBlend>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1537_115120" result="shape"></feBlend>
                  </filter>
                  <filter
                    id="filter1_i_1537_115120"
                    x="13.345"
                    y="12.3436"
                    width="8.39966"
                    height="8.39966"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 0.211765 0 0 0 0 0.109804 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1537_115120"></feBlend>
                  </filter>
                  <linearGradient id="paint0_linear_1537_115120" x1="25.5678" y1="31.882" x2="6.5776" y2="20.3847" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#484946"></stop>
                    <stop offset="1" stop-color="#6E6F6C"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Delight your trusted users.</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users.
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
