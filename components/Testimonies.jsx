import React from "react";
import Image from "next/image";
import { back, forward } from 'ionicons/icons';

const Testimonies = () => {
  return (
    <div className=" my-24 pb-16">
      <div className=" members_testimonies text-blue quotes">
            {/* Left side of section */}
            <div className="left_side">
                <div className="members_testimonies_header w-44">
                    <h1 className="text-4xl font-bold ">Members testimonies</h1>
                    <div className="mt_buttons">
                    <button type="button" className="previous button">
                        <ion-icon className="" icon={back} name="chevron-back-outline"></ion-icon>
                    </button>
                    <button type="button" className="next button">
                        <ion-icon icon={forward} name="chevron-forward-outline"></ion-icon>
                    </button>
                    </div>
                </div>
            </div>

            {/* Right side of section */}
            <div className="right_side flex gap-10">
                {/* card 1 */}
                <div class="mt_card max-w-xs shadow-lg rounded-2xl p-4">
                    {/* Card top */}
                    <div className="card_top flex space-x-1 mb-1">
                        <div className="alias rounded-full">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias mb-4 ">
                            <div className="name font-extrabold">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession text-sm font-bold">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card bottom */}
                    <div className="card_bottom">
                        <p>&quot;I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...&quot;</p>
                    </div>
                </div>


                {/* Card 2 */}
                <div class="mt_card max-w-xs shadow-lg rounded-2xl p-4">
                    {/* Card top */}
                    <div className="card_top flex space-x-1 mb-1">
                        <div className="alias rounded-full">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias mb-4 ">
                            <div className="name font-extrabold">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession text-sm font-bold">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card bottom */}
                    <div className="card_bottom">
                        <p>&quot;I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...&quot;</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div class="mt_card max-w-xs shadow-lg rounded-2xl p-4">
                    {/* Card top */}
                    <div className="card_top flex space-x-1 mb-1">
                        <div className="alias rounded-full">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias mb-4 ">
                            <div className="name font-extrabold">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession text-sm font-bold">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card bottom */}
                    <div className="card_bottom">
                        <p>&quot;I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...&quot;</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Testimonies;
