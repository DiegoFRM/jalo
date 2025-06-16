import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/experiences");
  const data = await res.json();

  return data;
}

async function getDataMissions() {
  const res = await fetch("http://localhost:3000/api/missions");
  const data = await res.json();

  return data;
}

async function findExperience(params: any) {
  const experiencesCards = await getData();
  let findElement: Object = [];
  experiencesCards.map((exp: any, index: Number) => {
    if (exp.id == params) {
      console.log(exp);
      findElement = exp;
    }
  });

  return findElement;
}


async function findMissions(params: any) {
  const missionCards = await getDataMissions();
  let findMission:any = [];
  missionCards.map((mission: any, index: Number) => {
    if (mission.experienceId == params) {
      findMission.push(mission);
    }
  });

  return findMission;
}

async function Page({ params }: any) {
  const showElement: any = await findExperience(params.id);
  const missionElement: any = await findMissions(params.id);
  let condition: string = "";

  console.log(missionElement)

  switch (showElement.status) {
    case "active":
      condition = "bg-blue-500";
      break;
    case "completed":
      condition = "bg-green-500";
      break;
    case "upcoming":
      condition = "bg-yellow-500";
      break;
    default:
      condition = "bg-gray-200";
      break;
  }

  return (
    <div className="w-full md:w-2/3 mx-auto">
      <div className="rounded-md bg-white p-4 flex flex-col lg:flex-row gap-4 w-full mx-auto">
        <div>
          <img
            className="lg:max-w-70 rounded rounded-tr-none rounded-br-none"
            src={showElement.coverImage}
          />
        </div>
        <div className="w-full">
          <div className="w-full flex flex-row gap-2 items-center">
            <div className="w-full flex flex-row gap-2 items-center mb-3">
              <img src={showElement.brandLogo} />
              <span>Present:</span>
            </div>
            <div className="w-fit bg-white text-slate-600 dark:bg-black dark:text-slate-200 border border-slate-500 text-[10px] uppercase px-2.5 py-0.5 rounded">
              {showElement.rewardType}
            </div>
          </div>
          <h3 className="font-bold text-3xl mb-3">{showElement.title}</h3>
          <p>{showElement.description}</p>
          <div className="flex flex-col lg:flex-row gap-4 w-full ">
            <p className="mt-3 bg-purple-700 text-white rounded-3xl w-40 p-1 text-center">
              {showElement.missionCount} Missions
            </p>
            <p
              className={`mt-3 text-white rounded-3xl w-40 p-1 text-center ${condition}`}
            >
              {showElement.status}
            </p>
          </div>
        </div>
      </div>
      {
       missionElement.length != 0 ?
      <div className="rounded-md bg-white p-4 flex flex-col lg:flex-row gap-4 w-full mx-auto mt-10">
        <div className="h-100 w-full m-2 p-4 rounded-md bg-blue-100 text-center">
          <h3 className="font-bold text-2xl text-gray-600">Missions</h3>
          <div className="mt-3 text-gray-500 text-left">
            <ul>
              
            {
              missionElement.map((mission:any) => (
                <li className="mb-4">
                  {mission.description}
                  <p>
                  <Link href={"/"} className="mt-1">
                  
                  <button 
                  disabled={mission.status == "locked" ? true : false }
                  className={`font-bold uppercase text-[12px] p-2 rounded mt-1  drop-shadow-lg ${mission.status == "locked" ? "bg-gray-200 " : "bg-green-200 "} `}>
                    {mission.status == "locked" ? "Not available" : "Mission start"}
                    </button>
                  </Link>
                  </p>
                  </li>
              ))

            }
            </ul>
            </div>
        </div>
        <div className="h-100 w-full m-2 p-4 rounded-md bg-blue-100 text-center">
          <h3 className="font-bold text-2xl text-gray-600">Rewards</h3>
          <p className="mt-10 text-gray-500">{showElement.rewardDescription}</p>
        </div>
      </div>
      :
      <div></div>
      }
    </div>
  );
}

export default Page;
