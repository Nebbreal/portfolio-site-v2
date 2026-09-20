import {useEffect} from "react";
import {Link, useNavigate} from "react-router";

function ErrorPage() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate("/")
    }, []);

    return (
        <div className={"flex flex-col h-screen justify-center items-center"}>
            <p>Page not found redirecting to home page...</p>
            <Link to="/">
                <p className={"underline text-secondary"}>Click here if you are not being redirected</p>
            </Link>
        </div>
    )
}

export default ErrorPage;