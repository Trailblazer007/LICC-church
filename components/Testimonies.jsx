import React from "react";
import Image from "next/image";

const Testimonies = () => {
  return (
    <div className=" mb-10 border-2">
      <div className=" members_testimonies py-10">
            {/* Left side of section */}
            <div className="left_side  border-red-300 border-4 quotes">
                <div className="members_testimonies_header">
                    <h1>Members testimonies</h1>
                    <div className="mt_buttons">
                    <button type="button" className="previous button">
                        &lt;
                    </button>
                    <button type="button" className="next button">
                        &gt;
                    </button>
                    </div>
                </div>
            </div>

            {/* Right side of section */}
            <div className="right_side flex space-x-5">
                {/* card 1 */}
                <div class="mt_card max-w-md shadow-lg rounded-2xl border-4 p-3">
                    {/* Card top */}
                    <div className="card_top flex space-x-1 mb-1">
                        <div className="alias ">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias">
                            <div className="name">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    {/* Card bottom */}
                    <div className="card_bottom">
                        <p>"I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...</p>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="mt_card max-w-md shadow-sm border-4">
                    <div className="card_top ">
                        <div className="alias">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias">
                            <div className="name">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    <div className="card_bottom">
                        <p>"I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...</p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="mt_card max-w-md shadow-sm border-4">
                    <div className="card_top">
                        <div className="alias ">
                            <Image
                                className="rounded-full"
                                width={50}
                                height={50}
                                class="alias_picture" 
                                src="/images/baby.png" 
                                alt="image of the card owner"
                            />
                        </div>

                        <div className="alias">
                            <div className="name">
                                <h4>John Doe</h4>
                            </div>
                            <div className="profession">
                                <h5>Quality Assurance Analyst</h5>
                            </div>
                        </div>
                    </div>

                    <div className="card_bottom">
                        <p>"I am incredibly grateful to have purchased a Range Rover 2023, and I want to express my heartfelt thanks to God...</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Testimonies;
