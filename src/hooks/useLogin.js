import { useState } from "react";

const useLogin = () => {
    const [login, setLogin] = useState(false);


    return [login, setLogin]
}

export default useLogin;