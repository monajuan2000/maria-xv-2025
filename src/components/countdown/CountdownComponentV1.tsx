import CastleFrame from '../locations/CastleMap';
import CountdownCard from '../ui/CountdownCard';

const CountdownComponentV1 = () => {

  return (
    <section className="">
      {/* <section className="flex justify-center -mb-[70px]">
        <h1 className="text-outline-gold inline-block font-decorative text-2xl font-semibold text-gray-200 italic text-italic-custom relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0c0c0] via-[#e0e0e0] to-[#c0c0c0] bg-[length:200%_auto] animate-shimmer absolute inset-0">
            Countdown to Aleja15's birthday!
          </span>
          <span className="text-outline text-glow relative">
            Countdown to Aleja15's birthday!
          </span>
        </h1>
      </section> */}
      <CastleFrame >
        <CountdownCard targetDate={new Date('2025-06-21T18:59:59')} />
      </CastleFrame>

    </section>
  );
};




export default CountdownComponentV1;
