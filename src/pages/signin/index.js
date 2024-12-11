import ButtonOne from "../../components/Button/ButtonOne";
import ButtonTwo from "../../components/Button/ButtonTwo";
import Input from "../../components/Input";
import Apple from "../../styles/img/apple.png";
import Google from "../../styles/img/google.png";
import Adobe from "../../styles/img/Adobe.png";
import Slack from "../../styles/img/slack.png";
import Spotify from "../../styles/img/spotify.png";

function PageSignin() {
  return (
    <div className="container mx-auto font-poppins ">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-semibold text-[45px] text-white">Sign In </h1>
        <form className="bg-white w-[350px] md:w-[460px] h-[410px] rounded-[24px] mt-[50px] p-[40px]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <div>
                <p className="text-[16px] text-navy font-medium mb-[8px]">
                  Email Address
                </p>
                <Input type="email" placeholder="Email" />
              </div>
              <div>
                <p className="text-[16px] text-navy font-medium mb-[8px]">
                  Password
                </p>
                <Input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[20px] mt-[20px]">
              <ButtonOne>Sign In</ButtonOne>
              <ButtonTwo>Create New Account</ButtonTwo>
            </div>
          </div>
        </form>
        <div className="mt-[100px] flex flex-col justify-center items-center">
          <p className="text-[16] text-gray font-medium">
            Events held by top & biggest global companies
          </p>
          <div className="flex justify-center items-center mt-[30px] gap-[70px]">
            <img src={Apple} alt="object" />
            <img src={Adobe} alt="object" />
            <img src={Slack} alt="object" />
            <img src={Spotify} alt="object" />
            <img src={Google} alt="object" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSignin;
