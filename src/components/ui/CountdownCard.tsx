import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { FC } from "react";

interface CountdownCardProps {
    targetDate: Date;
}

const CountdownCard: FC<CountdownCardProps> = ({ targetDate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative p-6 sm:p-8 bg-black backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] border-4 border-pink-300 text-white text-center w-full max-w-sm"
        >

            <h2 className="text-2xl font-bold mb-4 tracking-wide text-pink-300 text-shadow-soft">
                Faltan para el gran día!
            </h2>

            <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds, completed }) =>
                    completed ? (
                        <span className="text-lg font-bold text-black drop-shadow">
                            ¡El evento ha comenzado!
                        </span>
                    ) : (
                        <div className="flex justify-center text-black font-bold tracking-wide">
                            <TimeBox label="días" value={days} />
                            <TimeBox label="horas" value={hours} />
                            <TimeBox label="min" value={minutes} />
                            <TimeBox label="seg" value={seconds} />
                        </div>
                    )
                }
            />
        </motion.div>
    );
};

type TimeBoxProps = {
    label: string;
    value: number;
};

const TimeBox = ({ label, value }: TimeBoxProps) => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center bg-black rounded-md px-2 py-1 shadow-inner border border-white/20 min-w-[50px]"
    >
        <span className="text-white text-xl sm:text-2xl font-extrabold">{value}</span>
        <span className="text-white text-[10px] uppercase tracking-wide">{label}</span>
    </motion.div>
);


export default CountdownCard;


//     <div className="relative z-10 p-8 bg-transparent text-white rounded-lg shadow-xl text-center">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 50 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative p-6 sm:p-8 bg-black/5 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] border-4 border-pink-300 text-white text-center w-full max-w-sm"
//       >
//         {/* Esquinas decorativas */}
//         <div className="absolute -top-3 -left-3 w-6 h-6 bg-pink-300 rounded-full shadow-lg"></div>
//         <div className="absolute -top-3 -right-3 w-6 h-6 bg-pink-300 rounded-full shadow-lg"></div>
//         <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-pink-300 rounded-full shadow-lg"></div>
//         <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-pink-300 rounded-full shadow-lg"></div>

//         <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide text-pink-300 text-shadow-soft">
//           Faltan para el gran día
//         </h2>

//         <Countdown
//           date={targetDate}
//           renderer={({ days, hours, minutes, seconds, completed }) => {
//             if (completed) {
//               return (
//                 <span className="text-lg font-bold text-black drop-shadow">
//                   ¡El evento ha comenzado!
//                 </span>
//               );
//             } else {
//               return (
//                 <div className="flex justify-center flex-wrap gap-2 sm:gap-4 text-black text-sm sm:text-base font-bold tracking-wide">
//                   <TimeBox label="días" value={days} />
//                   <TimeBox label="horas" value={hours} />
//                   <TimeBox label="min" value={minutes} />
//                   <TimeBox label="seg" value={seconds} />
//                 </div>
//               );
//             }
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// type TimeBoxProps = {
//   label: string;
//   value: number;
// };

// const TimeBox = ({ label, value }: TimeBoxProps) => (
//   <motion.div
//     initial={{ scale: 0.8, opacity: 0 }}
//     animate={{ scale: 1, opacity: 1 }}
//     transition={{ duration: 0.4 }}
//     className="flex flex-col items-center bg-black rounded-md px-2 py-1 shadow-inner border border-white/20 min-w-[50px]"
//   >
//     <span className="text-white text-xl sm:text-2xl font-extrabold">{value}</span>
//     <span className="text-white text-[10px] uppercase tracking-wide">{label}</span>
//   </motion.div>
// );
