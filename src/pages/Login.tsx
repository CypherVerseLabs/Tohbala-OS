import {
  useState
} from "react";


import {
  useNavigate
} from "react-router-dom";


import {
  useAuth
} from "@/contexts/AuthContext";





const Login = () => {


  const {
    signIn
  } = useAuth();



  const navigate =
    useNavigate();




  const [email,setEmail] =
    useState("");



  const [password,setPassword] =
    useState("");



  const [error,setError] =
    useState("");



  const [loading,setLoading] =
    useState(false);







  const handleLogin = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();


    setError("");



    if(!email || !password){

      setError(
        "Email and password are required"
      );

      return;

    }





    try {


      setLoading(true);



      await signIn(
        email.trim(),
        password
      );



      console.log(
        "Logged in"
      );



      navigate("/", {
        replace:true
      });



    } catch(error: unknown) {


      console.error(error);



      if(error instanceof Error){

        setError(
          error.message
        );

      }
      else {

        setError(
          "Login failed"
        );

      }



    } finally {


      setLoading(false);


    }


  };







  return (

    <div className="min-h-screen flex items-center justify-center">


      <form

        onSubmit={handleLogin}

        className="space-y-4 w-full max-w-sm"

      >



        <h1 className="text-2xl font-bold">

          Tohbala OS Login

        </h1>





        {
          error && (

            <div className="bg-red-100 text-red-700 p-3 rounded">

              {error}

            </div>

          )
        }







        <input

          className="border p-2 w-full rounded"

          placeholder="Email"

          type="email"

          value={email}

          autoComplete="email"

          onChange={(e)=>
            setEmail(e.target.value)
          }

        />







        <input

          className="border p-2 w-full rounded"

          type="password"

          placeholder="Password"

          value={password}

          autoComplete="current-password"

          onChange={(e)=>
            setPassword(e.target.value)
          }

        />







        <button

          type="submit"

          disabled={loading}

          className="bg-black text-white px-4 py-2 rounded w-full disabled:opacity-50"

        >

          {
            loading
            ? "Logging in..."
            : "Login"
          }


        </button>





      </form>


    </div>

  );


};



export default Login;