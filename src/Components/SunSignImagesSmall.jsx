import SmallSignCard from "./SmallSignCard";
import ariesRam from "../assets/ariesRam.svg";
import taurusBull from "../assets/taurusBull.svg";
import geminiTwins from "../assets/geminiTwins.svg";
import cancerCrab from "../assets/cancerCrab.svg";
import leoLion from "../assets/leoLion.svg";
import virgoVirgin from "../assets/virgoVirgin.svg";
import libraScales from "../assets/libraScales.svg";
import scorpioScorpion from "../assets/scorpioScorpion.svg";
import sagittariusArcher from "../assets/sagittariusArcher.svg";
import capricornGoat from "../assets/capricornGoat.svg";
import aquariusWaterBearer from "../assets/aquariusWaterBearer.svg";
import piscesFish from "../assets/piscesFish.svg";

function SunSignImagesSmall() {
  return (
    <>
      <SmallSignCard
        title="Aries"
        image={ariesRam}
        alt="Illustration of a ram, the Aries symbol."
        date="21st March - 20th April"
      />
      <SmallSignCard
        title="Taurus"
        image={taurusBull}
        alt="Illustration of a bull, the Taurus symbol."
        date="21st April - 21st May"
      />
      <SmallSignCard
        title="Gemini"
        image={geminiTwins}
        alt="Illustration of twinst, the Gemini symbol."
        date="22nd May - 21st June"
      />
      <SmallSignCard
        title="Cancer"
        image={cancerCrab}
        alt="Illustration of a crab, the Cancer symbol."
        date="22nd June - 23rd July"
      />
      <SmallSignCard
        title="Leo"
        image={leoLion}
        alt="Illustration of a Lion, the Leo symbol."
        date="24th July - 23rd August"
      />
      <SmallSignCard
        title="Virgo"
        image={virgoVirgin}
        alt="Illustration of a woman, representing the Virgo symbol of the virgin."
        date="24th Aug - 23rd Sept"
      />
      <SmallSignCard
        title="Libra"
        image={libraScales}
        alt="Illustration of scales, the Libra symbol."
        date="24th Sept - 23rd Oct"
      />
      <SmallSignCard
        title="Scorpio"
        image={scorpioScorpion}
        alt="Illustration of a scorpion, the Scorpio symbol."
        date="24th Oct - 22nd Nov"
      />
      <SmallSignCard
        title="Sagittarius"
        image={sagittariusArcher}
        alt="Illustration of a bow and arrow, representing the Sagittarius symbol of the archer."
        date="23rd Nov - 21st Dec"
      />
      <SmallSignCard
        title="Capricorn"
        image={capricornGoat}
        alt="Illustration of a goat, the Capricorn symbol."
        date="22nd Dec - 20th Jan"
      />
      <SmallSignCard
        title="Aquarius"
        image={aquariusWaterBearer}
        alt="Illustration of water being poured, representing the Aquarius symbol of the water bearer."
        date="21st Jan - 19th Feb"
      />
      <SmallSignCard
        title="Pisces"
        image={piscesFish}
        alt="Illustration of fish, the Pisces symbol."
        date="20th Feb - 20th March"
      />
    </>
  );
}

export default SunSignImagesSmall;
