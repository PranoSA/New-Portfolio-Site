type CorsPanelProps = {
  endpoint: string;
  method: string;
  headers: string;
  origin: string;
  credentials: string;
  close: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
  handleSubmit: () => void;

  open: boolean;
  Allowed_Headers?: string;
  Allowed_Methods?: string;
  Allowed_Origisn?: string;
  Allowed_Credentials?: string;
  Simple?: boolean;
  Allowed?: boolean;
};

/*type RequestBody = {
    endpoint : string;
    method : string;
    headers : string
    origin : string;
    credentials : string;
}

type ResponseBody = {
    Allowed_Headers : string;
    Allowed_Methods : string;
    Allowed_Origisn : string;
    Allowed_Credentials : string;
    Simple : boolean;
    Allowed : boolean;
}
*/

const CorsPanel = (props: CorsPanelProps) => {
  //Destructure the Props
  const {
    endpoint,
    method,
    headers,
    origin,
    credentials,
    handleChange,
    open,
    Allowed_Headers,
    Allowed_Methods,
    Allowed_Origisn,
    Allowed_Credentials,
    Simple,
    Allowed,
    handleSubmit,
    close,
  } = props;

  if (!open) return null;

  return (
    <div className="pt-6 p-1 max-w-sm w-full mx-auto bg-white rounded-xl shadow-md flex flex-wrap items-center justify-center space-x-4">
      <div className="flex items-center justify-between w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2"
          type="button"
          onClick={close}
        >
          Cancel
        </button>
      </div>
      <div className="w-full flex flex-wrap justify-center pt-20">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="endpoint"
            >
              Endpoint
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endpoint"
              type="text"
              value={endpoint}
              onChange={(e) => handleChange(e, 'endpoint')}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="method"
            >
              Method
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="method"
              type="text"
              value={method}
              onChange={(e) => handleChange(e, 'method')}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="headers"
            >
              Headers
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="headers"
              type="text"
              value={headers}
              onChange={(e) => handleChange(e, 'headers')}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="credentials"
            >
              Credentials
            </label>
            <input
              className="mt-1 block h-6 w-6 rounded-full border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              id="credentials"
              type="checkbox"
              checked={credentials == 'true' ? true : false}
              onChange={(e) => handleChange(e, 'credentials')}
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="origins"
            >
              Origins
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="origins"
              type="text"
              value={origin}
              onChange={(e) => handleChange(e, 'origin')}
            />
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">CORS Panel</h2>
        <p>
          <strong>Open:</strong> {open ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Allowed Headers:</strong> {Allowed_Headers}
        </p>
        <p>
          <strong>Allowed Methods:</strong> {Allowed_Methods}
        </p>
        <p>
          <strong>Allowed Origins:</strong> {Allowed_Origisn}
        </p>
        <p>
          <strong>Allowed Credentials:</strong>{' '}
          {Allowed_Credentials ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Simple:</strong> {Simple ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Allowed:</strong> {Allowed ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

export default CorsPanel;
