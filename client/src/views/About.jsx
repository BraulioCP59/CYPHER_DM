import React from "react";

export default function componentName() {
  return (
    <>
      <div className="flex w-full bg-slate-800">
        <div className="w-full place-items-end">
          <img
            src="https://i.ibb.co/4RJcxsz/Braulio.jpg"
            alt="Braulio"
            className="float-right h-8/10"
          />
          <div className="float-right text-center w-1/5 text-slate-500 text-lg">
            <br />
            <h1 className="text-xl font-bold">Braulio Mora</h1>
            <div className=" inline-flex">
              <a
                className="hover:bg-slate-400"
                href="https://www.linkedin.com/in/braulio-mora-66a033160/"
              >
                <img
                  src="https://img.icons8.com/ios-filled/42/000000/linkedin.png"
                  alt=""
                />
              </a>
              <a
                className="hover:bg-slate-400"
                href="https://github.com/BraulioCP59"
              >
                <img
                  src="https://img.icons8.com/fluency/42/000000/github.png"
                  alt=""
                />
              </a>
            </div>
            <br />
            <p className="font-bold">
              10+ years of experience working in the dental technology
              field as a dental tech, CAD/CAM product owner, business systems analyst
              and operations manager. I am ready to shift into what I am most passionate about,
              fullstack web development. I enjoy spending time in nature with my wife and son.
              I do it all for them.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full bg-slate-500">
        <img
          src="https://i.ibb.co/B4dqd9z/Naji-link.png"
          alt="Naji-link"
          className="float-left fit"
        />
        <br />
        <div className="text-center w-1/5 text-slate-800 text-lg">
          <br />
          <h1 className="text-xl font-bold">Naji Dia</h1>

          <div className=" inline-flex">
            <a
              className="hover:bg-slate-400"
              href="https://www.linkedin.com/in/najidia/"
            >
              <img
                src="https://img.icons8.com/ios-filled/42/000000/linkedin.png"
                alt=""
              />
            </a>
            <a className="hover:bg-slate-400" href="https://github.com/nodgyd">
              <img
                src="https://img.icons8.com/fluency/42/000000/github.png"
                alt=""
              />
            </a>
          </div>
          <br />
          <p className="font-bold">
           Corporate Business Analyst from OC who is passionate about anything and everything tech related.
           Currently working towards possibly entering a career as a software engineer pushing technology forward.
           Love basketball, video games, and technology!
          </p>
        </div>
      </div>
      <div className="flex w-full bg-slate-800">
        <div className="w-full">
          <img
            src="https://i.ibb.co/kBpRkt3/Ludie-pic.jpg"
            alt="Ludie-pic"
            className="float-right"
          />
          <div className="float-right text-center w-1/5 h-auto text-slate-500 text-lg">
            <br />
            <h1 className=" text-xl font-bold">Ludie Lambright</h1>
            <div className=" inline-flex">
              <a
                className="hover:bg-slate-400"
                href="https://linkedin.com/in/ludielambright"
              >
                <img
                  src="https://img.icons8.com/ios-filled/42/000000/linkedin.png"
                  alt=""
                />
              </a>
              <a
                className="hover:bg-slate-400"
                href="https://github.com/veidul"
              >
                <img
                  src="https://img.icons8.com/fluency/42/000000/github.png"
                  alt=""
                />
              </a>
            </div>
            <br />
            <p className="font-bold">
              30 year old Full Stack Web Developer from Huntington Beach, Ca.
              Enjoys spending time with his son, skateboarding, surfing,
              softball, and coding.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
