import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';

const Home: React.FC = () => {
    const params = useParams();

    return (
        <>
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Track User Activity</span>
                        <div className="text-6xl text-primary font-bold mb-3">Optimize and Analyze Mac Usage</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Track Ninja helps you monitor and analyze user activity on Mac, providing detailed reports on system and application usage.</p>
                        <Button label="Sign In" className="mr-3 p-button-raised" link onClick={() => window.open('/login', '_self')} />
                        <Button label="Register" className="p-button-raised" link onClick={() => window.open('/register', '_self')} />
                        < a href='/TrackNinja.zip'>
                        <Button label="Get Download App" className="p-button-raised"/>
                        </a>
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src="/images/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
            <Divider />

            <div className="surface-0 text-center">
                <div className="mb-3 font-bold text-3xl">
                    <span className="text-900">Comprehensive Tracking, </span>
                    <span className="text-blue-600">Detailed Insights</span>
                </div>
                <div className="text-700 mb-6">Track Ninja provides all the tools you need to analyze user activity and optimize performance.</div>
                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-desktop text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Real-Time Monitoring</div>
                        <span className="text-700 line-height-3">Track and analyze user activity in real-time, with comprehensive reports on every action taken.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-lock text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Privacy Focused</div>
                        <span className="text-700 line-height-3">Data is securely encrypted, ensuring all user information is protected while being tracked.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-chart-line text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Actionable Insights</div>
                        <span className="text-700 line-height-3">Understand system performance and user behavior to improve productivity and system health.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-globe text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Cross-App Tracking</div>
                        <span className="text-700 line-height-3">Monitor activity across multiple apps and services, allowing for in-depth user behavior analysis.</span>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-cloud text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Cloud Reporting</div>
                        <span className="text-700 line-height-3">Access your data anytime, anywhere with cloud-based reporting and insights.</span>
                    </div>
                    <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Secure Analysis</div>
                        <span className="text-700 line-height-3">Your data is analyzed securely, ensuring full compliance with privacy regulations.</span>
                    </div>
                </div>
            </div>

            <Divider />
            <div className="surface-0">
                <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
                <div className="text-700 text-xl mb-6 text-center line-height-3">Choose a plan that fits your monitoring needs.</div>

                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Basic</div>
                                <div className="text-600">Essential Monitoring</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$9</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Real-time Tracking</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Basic Reports</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Mac Activity Logs</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300 mt-auto" />
                                <Button label="Buy Now" className="p-3 w-full mt-auto" />
                            </div>
                        </div>
                    </div>


                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Premium</div>
                                <div className="text-600">Advanced Monitoring</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$29</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Real-time Tracking</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Advanced Reports</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cloud Reporting</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cross-App Tracking</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <Button label="Buy Now" className="p-3 w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 lg:col-4">
                        <div className="p-3 h-full">
                            <div className="shadow-2 p-3 flex flex-column" style={{ borderRadius: '6px' }}>
                                <div className="text-900 font-medium text-xl mb-2">Enterprise</div>
                                <div className="text-600">Complete Monitoring Suite</div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <div className="flex align-items-center">
                                    <span className="font-bold text-2xl text-900">$49</span>
                                    <span className="ml-2 font-medium text-600">per month</span>
                                </div>
                                <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <ul className="list-none p-0 m-0 flex-grow-1">
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Real-time Tracking</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Advanced Reports</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cloud Reporting</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Cross-App Tracking</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <i className="pi pi-check-circle text-green-500 mr-2"></i>
                                        <span>Team Collaboration</span>
                                    </li>
                                </ul>
                                <hr className="mb-3 mx-0 border-top-1 border-bottom-none border-300" />
                                <Button label="Buy Now" className="p-3 w-full p-button-outlined" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider></Divider>

            <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
                <div className="font-bold mr-8">🔥  Special Offer!</div>
                <div className="align-items-center hidden lg:flex">
                    <span className="line-height-3">Unlock premium features with our special offer!</span>
                </div>
                <a className="flex align-items-center ml-2 mr-8">
                    <span className="underline font-bold">Learn More</span>
                </a>
                <a className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150" style={{ width: '2rem', height: '2rem' }}>
                    <i className="pi pi-times"></i>
                </a>
            </div>

        </>
    );
};

export default Home;
