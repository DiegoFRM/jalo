function Form(dataMission: any) {
  let convertData: any = Object.values(dataMission);
  let typeContent: any;

  switch (convertData[0].type) {
    case "trivia":
      typeContent = convertData[0].content.questions.map((item: any) => (
        <div>
          <p className="font-bold text-1xl">{item.question}</p>
          <ul>
            {item.options.map((op: any,index:string ) => (
              <li className="mb-1">
                 <input  type="radio" value={index+1} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{index+1}. {op}</label>
                </li>
            ))}
          </ul>
        </div>
      ));
      break;
  }


  return (
    <>
      <div>
        {typeContent}
        
        </div>
        
    </>
  );
}

export default Form;
