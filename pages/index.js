import Image from "next/image";
import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import Welcome from "@/components/Welcome";
import CoreValues from "@/components/CoreValues";
import MissionVission from "@/components/MissionVission";
import Testimonies from "@/components/Testimonies";
import Events from "@/components/Events";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="image_holder">
        <div class="image_text_container">
          <div class="image_text">
            <h1>Living Impact Christian Church</h1>
            <p>
              In the virtual realm, a sincere welcome awaits you at{" "}
              <span class="yellow">LICC</span>. Feel the warmth of our
              fellowship as you explore the essence of our vibrant church.
            </p>
          </div>
        </div>
      </div>

      <QuickLinks />

      <Welcome />

      <CoreValues />

      <MissionVission />

      <Testimonies />

      <Events />

      <Footer />
    </>
  );
}
