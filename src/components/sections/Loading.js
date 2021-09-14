import { Spinner } from "grommet";


const Loading=() =>
<div className="fixed top-0 left-0 bg-black bg-opacity-5 w-screen h-screen flex items-center justify-center">
   <Spinner color="red" size="large" message={{start:'iniciado',end:"terminad" }}/>
</div>

export default Loading;