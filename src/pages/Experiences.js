import React from "react";
import CardExperience from "../components/CardExperience";

const Experiences = () => {
    return (
        <div className="min-h-screen w-full flex justify-center relative mb-10">
            <div className="md:w-1/2 w-5/6 flex flex-wrap">

                <h3 className="md:text-6xl text-5xl w-full md:h-0.5 px-4 mb-10">
                    My <br />Experience
                </h3>
                <div className="w-full flex flex-wrap">
                    <CardExperience/>
                    <CardExperience/>
                </div>
            </div>
        </div>
    )
}

export default Experiences;