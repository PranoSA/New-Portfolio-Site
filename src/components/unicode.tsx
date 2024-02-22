/*

What Shall I demonstrate in The Unicode Characters

*/

type UnicodePanelProps = {
  open: boolean;
  unicode_value?: string;
  unicode_info?: UnicodeCharacterInformation;
  setCancel: () => void;
  submitUnicode: (unicode: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unicodeLink?: string;
  encodeUnicode?: (unicode: string) => string;
};

type UnicodeCharacterInformation = {
  na: string;
  blk: string;
  cp: string;
  na1: string;
  dm: string;
  gc: string;
  sc: string;
};

export type { UnicodePanelProps, UnicodeCharacterInformation };

const UnicodePanel = (props: UnicodePanelProps) => {
  console.log(props);

  const open = props.open;

  return (
    <div className=" flex flex-around flex-wrap w-full p-15">
      <div className="w-full p-4 justify-center text-center">
        <div className="w-2/3 md:w-4/5"></div>
        <div className="w-1/3 md:w-1/5"></div>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <p className="w-full text-3xl font-bold">
          The Project Consist of 3 parts
        </p>
        {
          //List
          /*
                    1. Frontend Appliation (Built In Typescript, React, and TailwindCSS) \n
                    2. Backend Application (Built with AWS Lambda, DynamoDB, and AWS SAM)\n
                    3. Terraform Plugin Provider Written in GoLang\n
                */
        }
        <ol>
          <li>
            {' '}
            1. Frontend Appliation (Built In Typescript, React, and TailwindCSS){' '}
          </li>
          <li>
            {' '}
            2. Backend Application (Built with AWS Lambda, DynamoDB, and AWS
            SAM)
          </li>
          <li> 3. Terraform Plugin Provider Written in GoLang </li>
        </ol>
      </div>

      <div
        className="w-full p-4 justify-center text-center"
        onClick={() => props.setCancel()}
      >
        <h1 className="w-full text-3xl font-bold">
          {' '}
          Mini Demonstration {open ? '▲' : '▼'}{' '}
        </h1>
      </div>

      {open && (
        <div className="w-full p-4 justify-center text-center">
          <div className="w-full p-4 justify-center text-center">
            <label className="pr-5">U+</label>
            <input
              type="text"
              value={props.unicode_value}
              onChange={(e) => props.handleChange(e)}
              className="pr-5 border border-gray-400"
            />
          </div>
          <button
            className="bg-blue-400 p-3 rounded text-center border-5"
            onClick={() => props.submitUnicode(props.unicode_value || '')}
          >
            {' '}
            Submit{' '}
          </button>
        </div>
      )}

      {open && (
        <div className="w-full p-4 justify-center text-center">
          <h1 className="w-full text-3xl font-bold "> Information : </h1>
          <div className="w-full pt-10 justify-center text-center">
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Name:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.na}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Block:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.blk}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Codepoint:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.cp}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Name Alias:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.na1}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Decomposition:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.dm}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    General Category:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.gc}
                  </td>
                </tr>
                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Script:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.sc}
                  </td>
                </tr>

                <tr>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    Examination Link:
                  </td>
                  <td className="border-3 border-gray-300 px-4 py-2 w-1/2">
                    {props.unicode_info?.cp && props.unicode_info.cp !== '' ? (
                      <a href={props.unicodeLink}>
                        <h2 className={`mb-3 text-md font-semibold`}>
                          Visit <span className="">-&gt;</span>
                        </h2>
                      </a>
                    ) : (
                      <h2
                        className={`mb-3 text-sm font-semibold font-gray`}
                      ></h2>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export { UnicodePanel };
