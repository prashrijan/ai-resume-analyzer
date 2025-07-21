import React from "react";

interface ATSProps {
    score: number;
    suggestions: { type: "good" | "improve"; tip: string }[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
    return <div>ATS</div>;
};

export default ATS;
