import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import MissionCards from "@/components/MissionCards"
import {experiences,missions} from '@/app/api/mockData'

const apiUrl = process.env.LOCAL_PATH;


async function getData() {
  const res = await fetch(apiUrl + "/api/experiences");
  //const data = await res.json();

  return experiences;
}

async function getDataMissions() {
  const res = await fetch(apiUrl + "/api/missions");
  //const data = await res.json();

  return missions;
}

async function findExperience(params: any) {
  const experiencesCards = await getData();
  let findElement: Object = [];
  experiencesCards.map((exp: any, index: Number) => {
    if (exp.id == params) {
      findElement = exp;
    }
  });

  return findElement;
}

async function findMissions(params: any) {
  const missionCards = await getDataMissions();
  let findMission: any = [];
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

  let saveData: any;

  return (
    <div className="w-full xl:w-2/3 mx-auto ">
      <div className="rounded-md bg-white p-4 flex flex-col lg:flex-row gap-4 w-full mx-auto mt-6">
        <div>
          <img
            className="lg:max-w-70 rounded rounded-tr-none rounded-br-none"
            src={showElement.coverImage}
          />
        </div>
        <div className="w-full">
          <div className="w-full flex flex-row gap-2 items-center ">
            <div className="w-full flex flex-row gap-2 items-center mb-3">
              <img src={showElement.brandLogo} />
              <div className="hidden md:block ml-2 w-40 mt-2">Present:</div>
            </div>
            <div className=" w-fit bg-white text-slate-600 dark:bg-black dark:text-slate-200 border border-slate-500 text-[10px] uppercase px-2.5 py-0.5 rounded">
              {showElement.rewardType}
            </div>

          </div>
                      <span className="block md:hidden ml-2 w-100 md:w-40">Present:</span>

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
            {showElement.status == "active" ? (
              <div className="mt-3 mx-auto text-slate-500  border-slate-300 rounded-4xl w-40 p-1 text-center md:text-[10px]  flex justify-center items-center">
                <CountdownTimer targetDate={showElement.endDate} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
<MissionCards 
missionElement={missionElement} />
      
    </div>
  );
}

export default Page;
