"use client";
import { useRouter } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer"

function calcDays(date1: Date, date2: Date) {
  let purchaseDate: any = new Date(date1);

  let endDate: any = new Date(date2);

  let diffMs = endDate - purchaseDate; // milliseconds
  let diffDays = Math.floor(diffMs / 86400000); // days

  return diffDays;
}



function checkStatus(status:string){
    switch(status){
    case "active" :
        return  'bg-blue-500'
    case "completed" :
        return 'bg-green-500'
    case "upcoming" :
        return 'bg-yellow-500'
    default :
    return "bg-gray-200"

}
}

function Card({ experiencesCards }: any) {
  const router = useRouter();
     



  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-md drop-shadow-xl">
      {experiencesCards.map((expCard: any) => (
        <li
          key={expCard.id}
          className="bg-white mb-2 rounded-lg text-black m-2 transition delay-150 duration-300 ease-in-out hover:scale-102"
        >
          <p
                className={`uppercase mt-2 absolute top-0 text-white rounded w-40 p-1 text-center md:text-[10px] ${checkStatus(expCard.status)} flex justify-center items-center`}
              >
                {expCard.status}
              </p>
          
          <img
            src={expCard.coverImage}
            className="object-contain max-w-full rounded-t-lg"
          />

          <div className="p-10">
             <div className="flex flex-row gap-4 w-full mb-4 ">
              
              <p className="mt-3 bg-purple-700 text-white rounded w-40 p-1 text-center md:text-[10px] flex justify-center items-center">
                {expCard.missionCount} Missions
              </p>
              <p className="mt-3 text-slate-500 border-3 border-slate-300 rounded w-40 p-1 text-center md:text-[10px]  flex justify-center items-center">
                {expCard.rewardType}
              </p>
            </div>
            
            <h1 className="font-bold mb-3">{expCard.title}</h1>
            <p className="text-zinc-700 mb-10">{expCard.description}</p>
           
            <button
              onClick={() => router.push(`/${expCard.id}`)}
              type="button"
              className="mt-3 cursor-pointer
 mx-auto text-slate-600 font-bold rounded w-70 p-1 text-center flex justify-center items-center bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-700 dark:focus:ring-lime-800"
            >
              More info
            </button>
            {
            expCard.status == "active" ?
           <div className="mt-3 mx-auto text-slate-500  border-slate-300 rounded-4xl w-40 p-1 text-center md:text-[10px]  flex justify-center items-center">
            < CountdownTimer targetDate={expCard.endDate} />
          </div>
          :
          <div></div>
          }
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Card;
