import '../../../css/button.css';
import jointhefray from '@assets/images/PlayNow/register_now_JTF_btn.png';
// import upperGradient from '../../../../public/assets/images/PlayNow/upper-gradient.png';
import '../../../css/body.css';

export function PlayNow() {
  return (
    <>
      {/* <div className="playNow-bg playNow-bg-mobile flex h-[750px] items-center"> */}
      <div className="flex h-[550px] items-center">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex justify-center py-4">
            <p className="deadjim-shadow text-center text-[32px] tracking-wide lg:text-[64px]">JOIN THE FRAY!</p>
          </div>
          <div>
            <a href="https://play.eion.gg/register">
              <button className="w-44">
                <img src={jointhefray} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
