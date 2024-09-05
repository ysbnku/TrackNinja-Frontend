import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button} from "primereact/button";
import { Divider } from 'primereact/divider';

const Home: React.FC = () => {
    const params = useParams();

    return (
      <>
      <div className="grid grid-nogutter surface-0 text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
              <section>
                  <span className="block text-6xl font-bold mb-1">Create the screens</span>
                  <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                  <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Button label="Sign In" className="mr-3 p-button-raised" link onClick={() =>  window.open('/login', '_self')} />
                  <Button label="Register" className="p-button-raised" link onClick={() =>  window.open('/register', '_self')} />
              </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
              <img src="/images/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
          </div>
      </div>
<Divider></Divider>

<div className="surface-0 text-center">
    <div className="mb-3 font-bold text-3xl">
        <span className="text-900">One Product, </span>
        <span className="text-blue-600">Many Solutions</span>
    </div>
    <div className="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-desktop text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Built for Developers</div>
            <span className="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
            <span className="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Easy to Use</div>
            <span className="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-globe text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
            <span className="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-github text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Open Source</div>
            <span className="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. </span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-shield text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Trusted Securitty</div>
            <span className="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.</span>
        </div>
    </div>
</div>

<Divider></Divider>

<div className="surface-0">
    <div className="text-900 font-bold text-6xl mb-4 text-center">Pricing Plans</div>
    <div className="text-700 text-xl mb-6 text-center line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>

    <div className="grid">
        <div className="col-12 lg:col-4">
            <div className="p-3 h-full">
                <div className="shadow-2 p-3 h-full flex flex-column" style={{ borderRadius: '6px' }}>
                    <div className="text-900 font-medium text-xl mb-2">Basic</div>
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$9</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
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
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$29</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
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
                    <div className="text-600">Plan description</div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <div className="flex align-items-center">
                        <span className="font-bold text-2xl text-900">$49</span>
                        <span className="ml-2 font-medium text-600">per month</span>
                    </div>
                    <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
                    <ul className="list-none p-0 m-0 flex-grow-1">
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Arcu vitae elementum</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Dui faucibus in ornare</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Morbi tincidunt augue</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Duis ultricies lacus sed</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Imperdiet proin</span>
                        </li>
                        <li className="flex align-items-center mb-3">
                            <i className="pi pi-check-circle text-green-500 mr-2"></i>
                            <span>Nisi scelerisque</span>
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
    <div className="font-bold mr-8">🔥 Hot Deals!</div>
    <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
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
  