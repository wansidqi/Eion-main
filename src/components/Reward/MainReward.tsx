export function MainReward() {
  const style: React.CSSProperties = {
    // fontSize: '32px',
    lineHeight: '38px',
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    color: 'transparent', // Text color is transparent
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    // background: 'linear-gradient(180deg, #0185FF 0%, #6BB8FF 100%)',
    textShadow: '0px 15px 15px #000000',
  };

  return (
    <div className="bg-mainreward flex flex-col items-center justify-center lg:py-[10rem] py-[5rem]">
      <p className="text-prize roboto-bold text-[24px] lg:text-[48px]">PRIZE POOL</p>
      <b className="text-dollar roboto-bold my-6 text-center text-4xl lg:text-8xl">US$ 10,000</b>
      <p style={style} className="text-conquer roboto-bold my-2 text-center text-[20px] lg:text-[32px]">
        Conquer The Leaderboards
      </p>
      <p className="roboto-condensed mx-8 lg:mt-8 mt-4 text-center text-base lg:mx-[20rem] lg:text-xl 2xl:mx-[28rem]">
        Prepare yourselves, gamers, because Eion is taking esports to the next level! We're thrilled to unveil our
        astounding prize pool of US$ 10,000, and it's your chance to claim a slice of the action!
      </p>
    </div>
  );
}
