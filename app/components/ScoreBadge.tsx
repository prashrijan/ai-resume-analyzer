import React from "react";

const ScoreBadge = ({ score }: { score: number }) => {
    let badgeColor = "";
    let badgeText = "";

    if (score > 70) {
        badgeColor = "bg-badge-green text-green-600";
        badgeText = "Strong";
    } else if (score > 49) {
        badgeColor = "bg-badge-yellow text-yellow-600";
        badgeText = "Good Start";
    } else {
        badgeColor = "bg-badge-red text-red-600";
        badgeText = "Needs Work";
    }

    return (
        <div
            className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
        >
            <p>{badgeText}</p>
        </div>
    );
};

export default ScoreBadge;
