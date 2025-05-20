// src/components/TextWithAnimation.tsx
import { useEffect, useState } from 'react';

interface TextWithAnimationProps {
    text: string;
    animationTime: number;
}

const TextWithAnimation: React.FC<TextWithAnimationProps> = ({ text, animationTime }) => {
    const [letters, setLetters] = useState<string[]>([]);

    useEffect(() => {
        const letterArray = text.split('');
        setLetters(letterArray);
    }, [text]);

    return (
        <section className="text-start">
            <span >
                {letters.map((letter, index) => (
                    <span

                        key={index}
                        style={{
                            animation: `appear 0.5s ease forwards`,
                            animationDelay: `${index * animationTime}s`,
                            // letterSpacing: '0',
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
