import React from "react";

const Projects = () => {
    return (
        <div className="h-screen w-full flex justify-center relative">
            <div className="md:w-3/4 w-5/6 px-5">
                <h3 className="md:text-8xl text-5xl mb-10 text-center">
                    Projects
                </h3>
                <div className="w-full flex flex-wrap">
                    <div className="md:w-1/2 w-full md:h-80 h-40 relative group px-8 mb-28">
                        <img alt="" className="rounded-lg h-full w-5/6 absolute" src={'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
                        <div className="w-full md:h-80 border-4 md:bg-transparent border-purple-600 rounded-lg mt-10 -ml-5 transition-all duration-300 md:group-hover:h-96 md:group-hover:bg-purple-600 bg-purple-600 h-48 flex flex-col justify-end pl-3">
                            <h3 className="md:group-hover:visible md:invisible  text-white text-lg">Lorem Ipsum</h3>
                            <h3 className="md:group-hover:visible md:invisible  text-white mb-2 text-lg font-light">Lorem Ipsum</h3>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full md:h-80 h-40 relative group px-8 mb-28">
                        <img alt="" className="rounded-lg h-full w-5/6 absolute" src={'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
                        <div className="w-full md:h-80 border-4 md:bg-transparent border-purple-600 rounded-lg mt-10 -ml-5 transition-all duration-300 md:group-hover:h-96 md:group-hover:bg-purple-600 bg-purple-600 h-48 flex flex-col justify-end pl-3">
                            <h3 className="md:group-hover:visible md:invisible text-white text-lg">Lorem Ipsum</h3>
                            <h3 className="md:group-hover:visible md:invisible text-white mb-2 text-lg font-light">Lorem Ipsum</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;