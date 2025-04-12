import Countdown from 'react-countdown';

const CountdownComponentV2 = () => {
    // Set your target date (for example: New Year's Eve 2025)
    const targetDate = new Date('2025-05-05T06:59:59');

    return (

        <div className="p-8 bg-red-600 text-white rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Countdown to May 05th, 2025</h2>
            <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) {
                        return <span className="text-xl font-bold">Happy New Year!</span>;
                    } else {
                        return (
                            <div className="text-3xl font-semibold">
                                <span>{days}d </span>
                                <span>{hours}h </span>
                                <span>{minutes}m </span>
                                <span>{seconds}s</span>
                            </div>
                        );
                    }
                }}
            />
        </div>

    );
};

export default CountdownComponentV2;
