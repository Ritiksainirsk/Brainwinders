// src/components/GuidingSteps.js
import React, { useEffect } from "react";
import "./css/CareerCounselling.css";
import AnimatedSection from "../AnimatedSection";

const GuidingSteps = () => {
  return (
    <AnimatedSection>
    <div className="relative py-10">
      <div className="text-center mb-10">
        <h3
          className=" text-2xl lg:text-3xl font-semibold heading-font text-[#022F46]"
          style={{ fontWeight: "600" }}
        >
          Guiding you at every step!
        </h3>
      </div>
      {/* medial line */}
      <div className="w-full h-1 bg-gray-500 absolute top-[54%] guiding-line"></div>
      {/* medial line */}

      <div className="relative px-5">
        <div className="flex justify-center items-center lg:justify-around lg:items-start GuidingStepsContainer">
          {/* first */}
          <div className="text-center p-5 lg:w-[30%]">
            <div
              className="bg-white p-6 rounded-lg firstCard-bottom-shadow lg:h-72"
              style={{
                boxShadow: "0 4px 6px -1px #2469BC",
                borderBottom: "5px solid #2469BC",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 heading-font">
                Explore Careers
              </h3>
              <ul className="text-left text-black list-disc list-inside">
                <li>Largest collection of career pathways</li>
                <li>Repository of many job roles</li>
                <li>Awareness on traditional and new-age academic pathways</li>
                <li>Information on Entrance Exams and Scholarships</li>
              </ul>
            </div>
            {/*  */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-[#2469BC]"></div>
            </div>
            {/*  */}

            {/*  */}
            <div className="flex justify-center">
              <div class="bg-[#2469BC] p-4 w-32 rounded-full flex flex-col justify-center items-center gap-1">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43.695"
                    height="49.677"
                    viewBox="0 0 43.695 49.677"
                  >
                    <g
                      id="Group_7949"
                      data-name="Group 7949"
                      transform="translate(0)"
                    >
                      <g id="Group_7950" data-name="Group 7950">
                        <path
                          id="Path_8729"
                          data-name="Path 8729"
                          d="M28.764,49.677h-1.8V41.335L37.63,30.627a1.908,1.908,0,0,0-.49-2.069,1.347,1.347,0,0,0-1.84,0l-8.045,8H16.071l-7.61-7.587a2.525,2.525,0,0,0-1.524-.8,1.38,1.38,0,0,0-.986.467,1.476,1.476,0,0,0-.51,1.052,2.227,2.227,0,0,0,.636,1.354L16.236,41.337v8.081h-1.8V42.075L4.808,32.323a3.991,3.991,0,0,1-1.167-2.605,3.262,3.262,0,0,1,1.036-2.352,3.09,3.09,0,0,1,2.3-.992A4.269,4.269,0,0,1,9.76,27.723l7.055,7.032h9.7l7.536-7.494a3.154,3.154,0,0,1,4.319-.019,3.7,3.7,0,0,1,.839,4.274l-.066.144L28.764,42.079Z"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_8730"
                          data-name="Path 8730"
                          d="M21.756,32.205a5.369,5.369,0,1,1,5.368-5.369,5.375,5.375,0,0,1-5.368,5.369m0-8.936a3.568,3.568,0,1,0,3.567,3.567,3.571,3.571,0,0,0-3.567-3.567"
                          fill="#fff"
                        ></path>
                        <g id="Group_7956" data-name="Group 7956">
                          <path
                            id="Path_8731"
                            data-name="Path 8731"
                            d="M26.545,19a.8.8,0,0,1-.459-.145l-4.3-3.008L17.3,18.86a.8.8,0,0,1-1.209-.907l1.634-5.124L13.259,9.294a.8.8,0,0,1,.5-1.427h5.49l1.8-4.747A.774.774,0,0,1,21.8,2.6a.8.8,0,0,1,.746.527c.927,2.545,1.388,3.936,1.587,4.736h5.239a.8.8,0,0,1,.511,1.416l-4.014,3.328,1.445,5.377A.8.8,0,0,1,26.545,19M21.8,14.072a.8.8,0,0,1,.459.145L25.2,16.279l-1.008-3.748a.8.8,0,0,1,.262-.824l2.7-2.24H23.426a.806.806,0,0,1-.774-.938c-.083-.406-.444-1.532-.881-2.8L20.545,8.951a.8.8,0,0,1-.748.516H16.055l3.1,2.451a.8.8,0,0,1,.267.87l-1.1,3.462,3.034-2.042a.8.8,0,0,1,.446-.136"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8732"
                            data-name="Path 8732"
                            d="M10.146,12.523a.8.8,0,0,1-.462-.147L6.667,10.242,3.518,12.384a.8.8,0,0,1-1.214-.9L3.451,7.832.3,5.311A.8.8,0,0,1,.8,3.886H4.66L5.927.519A.8.8,0,0,1,6.672,0h0a.8.8,0,0,1,.746.511A29.751,29.751,0,0,1,8.505,3.887h3.708A.8.8,0,0,1,12.727,5.3L9.9,7.673l1.022,3.844a.8.8,0,0,1-.773,1.006M6.676,8.469a.806.806,0,0,1,.462.146L8.805,9.8l-.586-2.2a.8.8,0,0,1,.26-.819l1.535-1.287H7.878A.8.8,0,0,1,7.1,4.869q-.2-.859-.456-1.708l-.68,1.806a.8.8,0,0,1-.749.519H3.08l1.8,1.439a.8.8,0,0,1,.264.865L4.521,9.767l1.7-1.159a.8.8,0,0,1,.45-.139"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8733"
                            data-name="Path 8733"
                            d="M33.75,12.523a.8.8,0,0,1-.764-1.04l1.147-3.651-3.15-2.521a.8.8,0,0,1,.5-1.425h3.859L36.61.519A.8.8,0,0,1,37.354,0h.005A.8.8,0,0,1,38.1.511a30.265,30.265,0,0,1,1.084,3.376H42.9A.8.8,0,0,1,43.409,5.3L40.578,7.673,41.6,11.517a.8.8,0,0,1-1.234.859l-3.017-2.134L34.2,12.384a.8.8,0,0,1-.45.139m3.609-4.054a.8.8,0,0,1,.461.146l1.666,1.179-.585-2.2a.8.8,0,0,1,.259-.819l1.535-1.287H38.559a.8.8,0,0,1-.779-.619q-.2-.855-.455-1.707l-.679,1.806a.8.8,0,0,1-.75.519H33.763l1.8,1.439a.8.8,0,0,1,.263.865L35.2,9.767l1.706-1.159a.791.791,0,0,1,.45-.139"
                            fill="#fff"
                          ></path>
                        </g>
                        <path
                          id="Path_8734"
                          data-name="Path 8734"
                          d="M12.14,18.186a.9.9,0,0,1-.789-.467L9.732,14.778a.9.9,0,1,1,1.576-.867l1.619,2.941a.9.9,0,0,1-.787,1.334"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_8735"
                          data-name="Path 8735"
                          d="M7.624,24.4a.9.9,0,0,1-.421-.1L4,22.6a.9.9,0,0,1,.844-1.59l3.2,1.7A.9.9,0,0,1,7.624,24.4"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_8736"
                          data-name="Path 8736"
                          d="M35.493,23.854a.9.9,0,0,1-.243-1.767l3.494-.98a.9.9,0,1,1,.486,1.732l-3.494.981a.891.891,0,0,1-.243.034"
                          fill="#fff"
                        ></path>
                        <path
                          id="Path_8737"
                          data-name="Path 8737"
                          d="M30.592,17.673a.9.9,0,0,1-.647-1.525l2.385-2.472a.9.9,0,1,1,1.295,1.25L31.239,17.4a.9.9,0,0,1-.647.275"
                          fill="#fff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="step_name text-white">Explore Careers</div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* first */}

          {/* second */}

          {/* second card ka first card */}
          <div className="text-center p-5 w-[30%] mt-[20rem] secondCard">
            {/*  */}
            <div className="flex justify-center">
              <div class="bg-[#143966] p-3 w-32 rounded-full flex flex-col justify-center items-center gap-1">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.001"
                    height="47.718"
                    viewBox="0 0 50.001 47.718"
                  >
                    <g
                      id="Group_7947"
                      data-name="Group 7947"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_7881"
                        data-name="Group 7881"
                        transform="translate(0 0)"
                      >
                        <g id="Group_7895" data-name="Group 7895">
                          <g id="Group_7896" data-name="Group 7896">
                            <path
                              id="Path_8569"
                              data-name="Path 8569"
                              d="M8.478,10.478a.9.9,0,0,1-.891-.824L7.125,3.806a.9.9,0,0,1,.259-.7.884.884,0,0,1,.7-.26l5.846.463a.9.9,0,0,1-.141,1.785l-4.8-.381.379,4.8a.9.9,0,0,1-.821.964l-.072,0"
                              transform="translate(-0.04 -0.015)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8571"
                              data-name="Path 8571"
                              d="M13.92,10.6a.89.89,0,0,1-.624-.254L7.957,5.154A.895.895,0,1,1,9.2,3.871l5.339,5.188A.9.9,0,0,1,13.92,10.6"
                              transform="translate(-0.043 -0.02)"
                              fill="#fff"
                            ></path>
                          </g>
                          <g id="Group_7894" data-name="Group 7894">
                            <path
                              id="Path_8570"
                              data-name="Path 8570"
                              d="M42.217,38.912l-.071,0L36.3,38.446a.9.9,0,0,1-.821-.963.883.883,0,0,1,.963-.822l4.8.381-.38-4.8a.9.9,0,0,1,.821-.964.882.882,0,0,1,.964.821l.461,5.846a.895.895,0,0,1-.892.967"
                              transform="translate(-0.197 -0.173)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8572"
                              data-name="Path 8572"
                              d="M41.658,38.334a.89.89,0,0,1-.624-.254L35.7,32.892a.895.895,0,1,1,1.247-1.284L42.282,36.8a.9.9,0,0,1-.624,1.537"
                              transform="translate(-0.197 -0.173)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_7883"
                        data-name="Group 7883"
                        transform="translate(0.138 0.142)"
                      >
                        <g id="Group_7889" data-name="Group 7889">
                          <path
                            id="Path_8573"
                            data-name="Path 8573"
                            d="M5.442,25.685a.891.891,0,0,1-.58-.214L.316,21.6a.894.894,0,0,1,0-1.363L4.861,16.36a.895.895,0,1,1,1.162,1.361l-3.747,3.2,3.746,3.19a.9.9,0,0,1-.58,1.577"
                            transform="translate(-0.138 -0.231)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8574"
                            data-name="Path 8574"
                            d="M44.8,25.692a.9.9,0,0,1-.581-1.576l3.749-3.2-3.749-3.2a.895.895,0,1,1,1.162-1.361l4.547,3.878a.893.893,0,0,1,0,1.361l-4.547,3.878a.889.889,0,0,1-.581.215"
                            transform="translate(-0.382 -0.231)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8575"
                            data-name="Path 8575"
                            d="M10.318,21.836H.9a.9.9,0,0,1,0-1.791h9.423a.9.9,0,0,1,0,1.791"
                            transform="translate(-0.138 -0.253)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8576"
                            data-name="Path 8576"
                            d="M48.793,21.836H39.37a.9.9,0,0,1,0-1.791h9.423a.9.9,0,0,1,0,1.791"
                            transform="translate(-0.352 -0.253)"
                            fill="#fff"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="Group_7885"
                        data-name="Group 7885"
                        transform="translate(0 0)"
                      >
                        <g id="Group_7892" data-name="Group 7892">
                          <path
                            id="Path_8577"
                            data-name="Path 8577"
                            d="M8.018,38.911a.895.895,0,0,1-.893-.967L7.586,32.1a.881.881,0,0,1,.964-.821.9.9,0,0,1,.821.964l-.38,4.8,4.8-.38a.9.9,0,1,1,.141,1.785l-5.846.462-.07,0"
                            transform="translate(-0.04 -0.173)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8579"
                            data-name="Path 8579"
                            d="M8.742,38.254a.9.9,0,0,1-.625-1.537l5.25-5.107a.9.9,0,1,1,1.249,1.284L9.367,38a.893.893,0,0,1-.625.254"
                            transform="translate(-0.044 -0.174)"
                            fill="#fff"
                          ></path>
                          <g id="Group_7893" data-name="Group 7893">
                            <path
                              id="Path_8578"
                              data-name="Path 8578"
                              d="M41.756,10.478l-.072,0a.9.9,0,0,1-.821-.964l.38-4.8-4.8.381A.9.9,0,1,1,36.3,3.305l5.846-.463a.88.88,0,0,1,.7.26.9.9,0,0,1,.259.7l-.463,5.848a.9.9,0,0,1-.891.824"
                              transform="translate(-0.197 -0.015)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8580"
                              data-name="Path 8580"
                              d="M36.481,9.623a.9.9,0,0,1-.568-1.588l5.622-4.6a.9.9,0,0,1,1.135,1.385l-5.623,4.6a.89.89,0,0,1-.566.2"
                              transform="translate(-0.198 -0.018)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_7887"
                        data-name="Group 7887"
                        transform="translate(0.138 0.142)"
                      >
                        <g id="Group_7890" data-name="Group 7890">
                          <g id="Group_7891" data-name="Group 7891">
                            <path
                              id="Path_8581"
                              data-name="Path 8581"
                              d="M22.2,47.777a2.091,2.091,0,0,1-2.049-1.933L19.066,31.06c-1.783-.451-3.6-1.862-3.737-3.511l-.843-11.687a5.06,5.06,0,0,1,4.852-5.112H30.793a5.08,5.08,0,0,1,4.9,5.12.889.889,0,0,1-.022.186L34.83,27.53c-.15,1.786-2.124,3.1-3.738,3.525l-1.1,14.787a2.072,2.072,0,0,1-2.027,1.933Zm8.55-35.239H19.378a3.269,3.269,0,0,0-3.1,3.315v.207l.837,11.347c.067.789,1.442,1.795,2.727,1.984a.884.884,0,0,1,.1.023.857.857,0,0,1,.856.824l1.139,15.473a.3.3,0,0,0,.289.276h5.718a.29.29,0,0,0,.263-.271l1.149-15.477a.893.893,0,0,1,.771-.82l.2-.028c1.274-.192,2.651-1.2,2.719-2l.849-11.6c0-.018,0-.035,0-.052a3.284,3.284,0,0,0-3.147-3.2"
                              transform="translate(-0.219 -0.202)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8582"
                              data-name="Path 8582"
                              d="M25.134,47.376a.9.9,0,0,1-.9-.9V29.307a.9.9,0,1,1,1.79,0V46.481a.9.9,0,0,1-.9.9"
                              transform="translate(-0.273 -0.3)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8583"
                              data-name="Path 8583"
                              d="M19.93,31.222a.9.9,0,0,1-.892-.829l-.952-12.9a.895.895,0,0,1,1.785-.131l.951,12.9a.894.894,0,0,1-.825.959l-.067,0"
                              transform="translate(-0.239 -0.234)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8584"
                              data-name="Path 8584"
                              d="M30.334,31.222c-.022,0-.045,0-.067,0a.894.894,0,0,1-.826-.959l.952-12.9a.895.895,0,0,1,1.785.131l-.953,12.9a.9.9,0,0,1-.891.829"
                              transform="translate(-0.302 -0.234)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8585"
                              data-name="Path 8585"
                              d="M25.107,9.35A4.675,4.675,0,0,1,25.1,0h.007a4.675,4.675,0,0,1,.011,9.35h-.01m.006-.9h0Zm-.007-6.663h0a2.884,2.884,0,0,0,.006,5.768h0a2.884,2.884,0,0,0,0-5.768"
                              transform="translate(-0.251 -0.142)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="step_name text-white heading-font">
                  Discover Yourself
                </div>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-black"></div>
            </div>
            {/*  */}
            <div
              className="bg-white p-6 rounded-lg shadow-md h-72"
              style={{
                boxShadow: "0 -4px 6px -1px #143966",
                borderTop: "5px solid #143966",
              }}
            >
              <h3 className="text-xl font-semibold mb-4">Discover Yourself</h3>
              <ul className="text-left text-black list-disc list-inside">
                <li>Comprehensive game-based psychometric assessments</li>
                <li>Insights on attitude, aptitude, and values</li>
                <li>Understanding parental expectations</li>
                <li>Suggestions on relevant academic and career options</li>
              </ul>
            </div>
          </div>
          {/* second card ka first card */}

          {/* second card ka second card */}
          <div className="text-center p-5 lg:w-[30%] lg:hidden block">
            <div
              className="bg-white p-6 rounded-lg shadow-md lg:h-72"
              style={{
                boxShadow: "0 4px 6px -1px #143966",
                borderBottom: "5px solid #143966",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 heading-font">
                Discover Yourself
              </h3>
              <ul className="text-left text-black list-disc list-inside">
                <li>Comprehensive game-based psychometric assessments</li>
                <li>Insights on attitude, aptitude, and values</li>
                <li>Understanding parental expectations</li>
                <li>Suggestions on relevant academic and career options</li>
              </ul>
            </div>
            {/*  */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-black"></div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex justify-center">
              <div class="bg-[#143966] p-3 w-32 rounded-full flex flex-col justify-center items-center gap-1">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50.001"
                    height="47.718"
                    viewBox="0 0 50.001 47.718"
                  >
                    <g
                      id="Group_7947"
                      data-name="Group 7947"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_7881"
                        data-name="Group 7881"
                        transform="translate(0 0)"
                      >
                        <g id="Group_7895" data-name="Group 7895">
                          <g id="Group_7896" data-name="Group 7896">
                            <path
                              id="Path_8569"
                              data-name="Path 8569"
                              d="M8.478,10.478a.9.9,0,0,1-.891-.824L7.125,3.806a.9.9,0,0,1,.259-.7.884.884,0,0,1,.7-.26l5.846.463a.9.9,0,0,1-.141,1.785l-4.8-.381.379,4.8a.9.9,0,0,1-.821.964l-.072,0"
                              transform="translate(-0.04 -0.015)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8571"
                              data-name="Path 8571"
                              d="M13.92,10.6a.89.89,0,0,1-.624-.254L7.957,5.154A.895.895,0,1,1,9.2,3.871l5.339,5.188A.9.9,0,0,1,13.92,10.6"
                              transform="translate(-0.043 -0.02)"
                              fill="#fff"
                            ></path>
                          </g>
                          <g id="Group_7894" data-name="Group 7894">
                            <path
                              id="Path_8570"
                              data-name="Path 8570"
                              d="M42.217,38.912l-.071,0L36.3,38.446a.9.9,0,0,1-.821-.963.883.883,0,0,1,.963-.822l4.8.381-.38-4.8a.9.9,0,0,1,.821-.964.882.882,0,0,1,.964.821l.461,5.846a.895.895,0,0,1-.892.967"
                              transform="translate(-0.197 -0.173)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8572"
                              data-name="Path 8572"
                              d="M41.658,38.334a.89.89,0,0,1-.624-.254L35.7,32.892a.895.895,0,1,1,1.247-1.284L42.282,36.8a.9.9,0,0,1-.624,1.537"
                              transform="translate(-0.197 -0.173)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_7883"
                        data-name="Group 7883"
                        transform="translate(0.138 0.142)"
                      >
                        <g id="Group_7889" data-name="Group 7889">
                          <path
                            id="Path_8573"
                            data-name="Path 8573"
                            d="M5.442,25.685a.891.891,0,0,1-.58-.214L.316,21.6a.894.894,0,0,1,0-1.363L4.861,16.36a.895.895,0,1,1,1.162,1.361l-3.747,3.2,3.746,3.19a.9.9,0,0,1-.58,1.577"
                            transform="translate(-0.138 -0.231)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8574"
                            data-name="Path 8574"
                            d="M44.8,25.692a.9.9,0,0,1-.581-1.576l3.749-3.2-3.749-3.2a.895.895,0,1,1,1.162-1.361l4.547,3.878a.893.893,0,0,1,0,1.361l-4.547,3.878a.889.889,0,0,1-.581.215"
                            transform="translate(-0.382 -0.231)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8575"
                            data-name="Path 8575"
                            d="M10.318,21.836H.9a.9.9,0,0,1,0-1.791h9.423a.9.9,0,0,1,0,1.791"
                            transform="translate(-0.138 -0.253)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8576"
                            data-name="Path 8576"
                            d="M48.793,21.836H39.37a.9.9,0,0,1,0-1.791h9.423a.9.9,0,0,1,0,1.791"
                            transform="translate(-0.352 -0.253)"
                            fill="#fff"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="Group_7885"
                        data-name="Group 7885"
                        transform="translate(0 0)"
                      >
                        <g id="Group_7892" data-name="Group 7892">
                          <path
                            id="Path_8577"
                            data-name="Path 8577"
                            d="M8.018,38.911a.895.895,0,0,1-.893-.967L7.586,32.1a.881.881,0,0,1,.964-.821.9.9,0,0,1,.821.964l-.38,4.8,4.8-.38a.9.9,0,1,1,.141,1.785l-5.846.462-.07,0"
                            transform="translate(-0.04 -0.173)"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8579"
                            data-name="Path 8579"
                            d="M8.742,38.254a.9.9,0,0,1-.625-1.537l5.25-5.107a.9.9,0,1,1,1.249,1.284L9.367,38a.893.893,0,0,1-.625.254"
                            transform="translate(-0.044 -0.174)"
                            fill="#fff"
                          ></path>
                          <g id="Group_7893" data-name="Group 7893">
                            <path
                              id="Path_8578"
                              data-name="Path 8578"
                              d="M41.756,10.478l-.072,0a.9.9,0,0,1-.821-.964l.38-4.8-4.8.381A.9.9,0,1,1,36.3,3.305l5.846-.463a.88.88,0,0,1,.7.26.9.9,0,0,1,.259.7l-.463,5.848a.9.9,0,0,1-.891.824"
                              transform="translate(-0.197 -0.015)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8580"
                              data-name="Path 8580"
                              d="M36.481,9.623a.9.9,0,0,1-.568-1.588l5.622-4.6a.9.9,0,0,1,1.135,1.385l-5.623,4.6a.89.89,0,0,1-.566.2"
                              transform="translate(-0.198 -0.018)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="Group_7887"
                        data-name="Group 7887"
                        transform="translate(0.138 0.142)"
                      >
                        <g id="Group_7890" data-name="Group 7890">
                          <g id="Group_7891" data-name="Group 7891">
                            <path
                              id="Path_8581"
                              data-name="Path 8581"
                              d="M22.2,47.777a2.091,2.091,0,0,1-2.049-1.933L19.066,31.06c-1.783-.451-3.6-1.862-3.737-3.511l-.843-11.687a5.06,5.06,0,0,1,4.852-5.112H30.793a5.08,5.08,0,0,1,4.9,5.12.889.889,0,0,1-.022.186L34.83,27.53c-.15,1.786-2.124,3.1-3.738,3.525l-1.1,14.787a2.072,2.072,0,0,1-2.027,1.933Zm8.55-35.239H19.378a3.269,3.269,0,0,0-3.1,3.315v.207l.837,11.347c.067.789,1.442,1.795,2.727,1.984a.884.884,0,0,1,.1.023.857.857,0,0,1,.856.824l1.139,15.473a.3.3,0,0,0,.289.276h5.718a.29.29,0,0,0,.263-.271l1.149-15.477a.893.893,0,0,1,.771-.82l.2-.028c1.274-.192,2.651-1.2,2.719-2l.849-11.6c0-.018,0-.035,0-.052a3.284,3.284,0,0,0-3.147-3.2"
                              transform="translate(-0.219 -0.202)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8582"
                              data-name="Path 8582"
                              d="M25.134,47.376a.9.9,0,0,1-.9-.9V29.307a.9.9,0,1,1,1.79,0V46.481a.9.9,0,0,1-.9.9"
                              transform="translate(-0.273 -0.3)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8583"
                              data-name="Path 8583"
                              d="M19.93,31.222a.9.9,0,0,1-.892-.829l-.952-12.9a.895.895,0,0,1,1.785-.131l.951,12.9a.894.894,0,0,1-.825.959l-.067,0"
                              transform="translate(-0.239 -0.234)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8584"
                              data-name="Path 8584"
                              d="M30.334,31.222c-.022,0-.045,0-.067,0a.894.894,0,0,1-.826-.959l.952-12.9a.895.895,0,0,1,1.785.131l-.953,12.9a.9.9,0,0,1-.891.829"
                              transform="translate(-0.302 -0.234)"
                              fill="#fff"
                            ></path>
                            <path
                              id="Path_8585"
                              data-name="Path 8585"
                              d="M25.107,9.35A4.675,4.675,0,0,1,25.1,0h.007a4.675,4.675,0,0,1,.011,9.35h-.01m.006-.9h0Zm-.007-6.663h0a2.884,2.884,0,0,0,.006,5.768h0a2.884,2.884,0,0,0,0-5.768"
                              transform="translate(-0.251 -0.142)"
                              fill="#fff"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="step_name text-white">Discover Yourself</div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* second card ka second card */}

          {/* second */}

          {/* third */}
          <div className="text-center p-5 lg:w-[30%]">
            <div
              className="bg-white p-6 rounded-lg shadow-md lg:h-72"
              style={{
                boxShadow: "0 4px 6px -1px #DC2C1B",
                borderBottom: "5px solid #DC2C1B",
              }}
            >
              <h3 className="text-xl font-semibold mb-4 heading-font">
                Get Guided
              </h3>
              <ul className="text-left text-black list-disc list-inside">
                <li>Large network of certified career counsellors</li>
                <li>Evidence based, one-on-one counselling sessions</li>
                <li>Choice of multiple time slots for counselling</li>
                <li>Counsellor-parent interaction (optional)</li>
              </ul>
            </div>
            {/*  */}
            <div className="flex justify-center">
              <div className="w-1 h-8 bg-[#DC2C1B]"></div>
            </div>
            {/*  */}

            {/*  */}
            <div className="flex justify-center">
              <div class="bg-[#DC2C1B] p-3 w-32 rounded-full flex flex-col justify-center items-center gap-1">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48.784"
                    height="48.179"
                    viewBox="0 0 48.784 48.179"
                  >
                    <g
                      id="Group_7952"
                      data-name="Group 7952"
                      transform="translate(-0.735 -1.596)"
                    >
                      <g id="Group_7953" data-name="Group 7953">
                        <g id="Group_7954" data-name="Group 7954">
                          <path
                            id="Path_8739"
                            data-name="Path 8739"
                            d="M20.167,10.4a4.4,4.4,0,1,1,4.4-4.4,4.406,4.406,0,0,1-4.4,4.4m0-7a2.6,2.6,0,1,0,2.6,2.6,2.6,2.6,0,0,0-2.6-2.6"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8740"
                            data-name="Path 8740"
                            d="M9.031,45.965a2.9,2.9,0,0,1-2.717-3.928l7.1-24.634H11.059l-3.2,5.668a2.9,2.9,0,0,1-5.063-2.848L6.84,13.066a2.927,2.927,0,0,1,2.524-1.477h9.06a5.475,5.475,0,0,1,4.324,2.147l3.668,4.826L31.2,17.534a2.908,2.908,0,0,1,3.446,2.222l0,.019a2.845,2.845,0,0,1,.055.461,2.973,2.973,0,0,1-2.423,2.994l-6.45,1.394a2.9,2.9,0,0,1-2.919-1.081L20.63,20.526l-2.045,5.9,5.557.341a.913.913,0,0,1,.254.053,2.133,2.133,0,0,1,1.356,1.594l2.415,8.247a2.9,2.9,0,0,1-1.805,3.652,2.9,2.9,0,0,1-3.694-1.791L20.462,32.8,15.945,32.7l-4.2,11.378a2.91,2.91,0,0,1-2.717,1.884m1.5-30.363h4.079a.9.9,0,0,1,.865,1.149L8.021,42.6a1.157,1.157,0,0,0,0,.911,1.1,1.1,0,0,0,2.036-.064l4.383-11.879a.888.888,0,0,1,.165-.338.914.914,0,0,1,.834-.342l5.659.117a.9.9,0,0,1,.822.576L24.358,37.9a1.114,1.114,0,0,0,.572.658,1.1,1.1,0,0,0,1.522-1.354L24,28.836a.459.459,0,0,0-.149-.283l-6.563-.4a.9.9,0,0,1-.8-1.194l2.984-8.613a.9.9,0,0,1,1.569-.248l3.3,4.361a1.1,1.1,0,0,0,1.1.408l6.474-1.4a1.179,1.179,0,0,0,.981-1.179,1.017,1.017,0,0,0-.019-.145v-.01a1.1,1.1,0,0,0-1.307-.838l-5.345,1.149a.9.9,0,0,1-.906-.335l-4.014-5.281a3.656,3.656,0,0,0-2.892-1.436H9.368a1.116,1.116,0,0,0-.963.565L4.365,21.1A1.105,1.105,0,0,0,6.3,22.174L9.751,16.06a.9.9,0,0,1,.783-.458"
                            fill="#fff"
                          ></path>
                        </g>
                        <g id="Group_7955" data-name="Group 7955">
                          <path
                            id="Path_8738"
                            data-name="Path 8738"
                            d="M17.477,49.775H1.635a.9.9,0,0,1,0-1.8H16.577V43.3a.9.9,0,0,1,.9-.9H32.418V37.726a.9.9,0,0,1,.9-.9h14.4V3.352a.9.9,0,0,1,1.8,0V37.726a.9.9,0,0,1-.9.9h-14.4V43.3a.9.9,0,0,1-.9.9H18.377v4.672a.9.9,0,0,1-.9.9"
                            fill="#fff"
                          ></path>
                          <path
                            id="Path_8741"
                            data-name="Path 8741"
                            d="M48.619,12.913a.882.882,0,0,1-.258-.039L33.879,8.549a.9.9,0,0,1,0-1.724L48.361,2.49a.9.9,0,0,1,1.158.862v8.66a.9.9,0,0,1-.9.9M37.278,7.686,47.718,10.8V4.561Z"
                            fill="#fff"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div class="step_name text-white pb-5 pt-2">Get Guided</div>
              </div>
            </div>
            {/*  */}
          </div>
          {/* third */}

          {/* image */}
          <div className="w-[25rem] h-full mt-64 hidden 2xl:block">
            <img
              src="https://www.tcsion.com/per/g01/pub/1016/iDH/instance/1/product/microsite_data/IONCAREERINSIGHT/microsite_1722424800648/image/guide_banner.png?version=142946389"
              alt=""
              className="w-full"
              width={120}
              height={120}
            />
          </div>
          {/* image */}
        </div>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default GuidingSteps;
