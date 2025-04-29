// src/components/TextWithAnimation.tsx
import { useEffect, useState } from 'react';

interface TextWithAnimationProps {
    text: string;
}

const TextWithAnimation: React.FC<TextWithAnimationProps> = ({ text }) => {
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        const letterArray = text.split('');
        setLetters(letterArray);
    }, [text]);

    return (
        <section className="">
            <span className="font-bold text-pink-300 text-shadow-soft">
                {letters.map((letter, index) => (
                    <span
                        key={index}
                        style={{
                            animation: `appear 0.5s ease forwards`,
                            animationDelay: `${index * 0.05}s`,
                            letterSpacing: '0',
                        }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                ))}
            </span>

        </section>

    );
};

export default TextWithAnimation;
