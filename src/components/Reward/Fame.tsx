import lock from '@assets/images/Reward Page/lock.png';

export function Fame() {
  return (
    <div className="lg:py-[6rem] py-[3rem] flex flex-col justify-center items-center">
        <h1 className="text-seasonal roboto-bold text-[24px] lg:text-[48px] pb-4">FAME LEADERBOARD</h1>
        <img src={lock} alt='LOCK'  className='py-16'/>
        <h1 className="roboto-bold lg:text-4xl text-xl pb-4">COMING SOON</h1>
    </div>
  );
}