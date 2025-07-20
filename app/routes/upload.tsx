import React, { useState } from "react";
import Navbar from "~/components/Navbar";

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [status, setStatus] = useState<string | null>("");
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">
            <Navbar />
            <section className="main-section">
                <div className="page-heading">
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{status}</h2>
                            <img
                                src="/images/resume-scan.gif"
                                alt="scan-resume"
                                className="w-full"
                            />
                        </>
                    ) : (
                        <>
                            <h2>
                                Drop your resume for an ATS Score and
                                improvement tips
                            </h2>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Upload;
