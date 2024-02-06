export function GameRule() {

  return (
    <>
      <div className="bg-white p-10  text-center text-black ">
        <div className=" flex flex-col items-start lg:mx-20">
          <p className="roboto-bold py-2 text-[20px] font-extrabold lg:px-10">EION GAME RULES</p>
          <p className="py-2 text-xs font-bold lg:px-10">Last Updated: August 22th, 2023</p>
        </div>

        <div className="flex flex-col items-center lg:mx-20 lg:px-10">
          <div className="text-justify">
            <p className="py-2 text-xs">
              Eion: Welcome to Eion, the platform for Locker, Invoke and more esports products developed by Aghs Labs. We are the connecting terminal that aims to bring in all the different esports teams, clubs and fans together into one thriving community. (“Game”) and in the Collection Game (“Collection Game”) is governed by the Terms and Conditions, these Eion Game Rules (“Game Rules” or “Rules”), the Privacy Policy and any applicable Additional Terms. Capitalized terms not defined here will have the meaning given to them in the Terms and Conditions.
            </p>
            <ol className=" list-decimal py-2 ">
                <li className="mx-4 text-xs font-bold roboto-bold">The Game</li>
                    <p className="py-2 text-xs">
                    {
                        'Eion consists of different competitions that track the real performance of esports players during games abd matches(“Competition(s)”). The Competitions are accessible from a dedicated area ("Lobby") on the Website. The Game and all Competitions are free to enter.'
                    }
                    </p>
                    <p className="py-2 text-xs">
                    {
                        'Eion’s platform centers around the collectibility and utility of Eion Cards. You can use these cards to player "Locker" , a prediction based collectible card game that is designed for esports viewers and fans. The goal of the game is to attain the highest score possible through drafting the outcomes of Esports games and matches. Select players, respective skills and support cards to earn points based on your predictions.'
                    }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                    {
                        'Your objective in the Game is to use your esports knowledge and esports manager strategies to create the best lineup of five (5) Collectibles and/or Common Cards (“Cards”) representing professional esports players, (1) Leader, (5)Skills, (3) Supports enter the lineup into Competitions to compete with other Users, and progress through the different levels of the league or campaign in which you are competing. You are required to draft a minimum of 3 players with no restriction on roles.(collectively a “Team”).'
                    }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                    {
                        'Competitions are announced in the Lobby at least three (3) days before it is scheduled to begin. Please note that Aghs Labs reserves the right, in its sole discretion, to determine the number and frequency of Competitions. Each Team is awarded points based on the performance of each of the players and utility cards featured in the relevant Cards. Each player’s points are awarded based on that player’s actual performance in real games and scenarios during the Competition and/or Competition Leaderboard (defined below). '
                    }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                    {
                        'Where specified, you may also have the opportunity to participate in cumulative Competitions (“Leaderboard Competition(s)”), where your Teams’ scores are tracked over numerous game weeks. The winner of a Competition or Leaderboard Competition is the User who finishes the Game Week or Leaderboard Competition period with the most points. The winning User and other participants may win a reward, as specified in the Lobby and outlined below.'
                    }
                    </p>

                <li className="mx-4 text-xs font-bold roboto-bold">Participation in the Game</li>
                    <p className="mx-1 text-xs font-bold roboto-bold">2.1. League Specific Gameplay</p>


                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.1. Starting Draft (Example)</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'To initiate your participation in a Season-Specific Game, you will be required to select a minimum of three (3) Player Cards from the real-life league associated with the current season. These three (3) Cards can comprise a mixture of player cards from any role (e.g., experience, gold, mid, roam, jungle) belonging to the two teams participating in the game.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Every player’s card will be equipped with the respective player’s statistics, which are based on their performance from the preceding season’s actual matches. If a player lacks performance data from the previous season, this will be denoted by a "-" symbol.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.2. Draft Entry Period</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'The timeframe for participating in a Match in a game and/or Leaderboard Competition will be conveyed to you within the Lobby. The specific registration period for a given game and/or Leaderboard Competition will always be clearly defined beforehand on the website and highlighted by a countdown. The Game is designed as a free-to-play experience, meaning no entrance fee is necessary to play in a match.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'During the designated registration period, you have the ability to access the Lobby, create your Draft, and lock that Team in the applicable game and/or Leaderboard Competition. Once the registration period concludes, no further adjustments can be made to the composition of the Team for the entirety of the game.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Within the League Specific Competitions, there are different levels of gameplay depending on the combinations of the Cards composed in your line up, teams in specific games, and the prizes available. '
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.3. Prediction Field</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Within every match, you possess the opportunity to forecast the victorious team, irrespective of whether the team is affiliated with Eion or not. This prognostication is instrumental in securing points that hold significance within each match. You will earn 400 Bonus points for predicting the right winner at the end of the game, while failing to predict accurately will reward you 200 Points. '
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.4. Drafting of Leader Cards</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Your elected leader card acts as the cornerstone of your team’s composition and tactical approach, offering points in alignment with the strategic setup elucidated in the leader card’s description.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.5. Drafting of Player Cards</p>
                    <p className="py-2 text-xs">
                        {
                        'Opt for up to five player cards from either team, irrespective of their designated roles. Player cards amass points rooted in their Kill-Death-Assist (KDA) statistics for the game.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Each kill contributes 1 point, assists procure 0.5 points, and deaths incur a deduction of -1 point. A minimum of three player cards, of any array, is obligatory for game participation.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.6. Drafting of Skill Cards</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Elevate your lineup through skill cards, intrinsically tied to individual player cards. These cards confer points contingent on the accomplishments and records of the associated players throughout the match.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.1.7. Drafting of Support Cards</p>
                    <p className="py-2 text-xs">
                        {
                        'Strategically incorporate support cards to secure points by accomplishing the specific scenarios detailed in the card’s text'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'Bear in mind that each support card can only be chosen once, with no allowance for duplicates.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'It’s crucial to bear in mind that, regardless of the outcome, the cards you include in a Draft remain exclusively yours! There’s no relinquishment of your Cards when you enlist them in a game and/or Leaderboard Competition, unless they are Trial cards, Indicated with a “1 use” indicator on the top left of each card.'
                        }
                    </p>



                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.1. Game Progression</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'There are different games within the League Specific Competitions, with different regions and rewards. Your goal is to compose competitive lineups using the Cards in your collection and advance through the levels as you hone your strategy and sharpen your prediction skills.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.2. Season Reset</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        ' Following the end of the last real life season of the relevant league, the leaderboard will be closed and rewards will be distributed based on placing on the leaderboard competition.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.3. Scoring and Winning</p>
                    <p className="py-2 text-xs">
                        {
                        ' Scoring system. Points are awarded for each player’s Card on the Team, and each Eion card played, on the basis of data provided by a Third-Party Service regarding the featured player’s real life performance in a match during the game or Leaderboard Competition period.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'The winner(s) of a Competition and/or Leaderboard Competition are the User(s) who are awarded the most points at the end of the Competition and/or Leaderboard Competition period.There are also prizes awarded for finishing in other positions. In the event two Users’ scores are tied, the platform will have the rights to make the final decision.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.4 Rewards</p>
                    <p className="py-2 text-xs">
                        {
                        'Available rewards for winners are communicated during the Entry Period of the Competition and/or Leaderboard Competition in the Lobby. The prize(s) available depend on the Competition and/or Leaderboard Competition, and the final place of your Team. '
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'The prize(s) awarded for a given Competition or Leaderboard Competition are cash prizes, In-game currencies, booster packs, merchandise, or real-life experiences.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Following verification of each winner’s eligibility and compliance with these Rules, the Terms and Conditions and any other applicable Additional Terms, the prize(s) will be transmitted pursuant to these Game Rules. By participating in the Game, you give your express permission to be contacted by Eion by telephone and/or email to administer rewards'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.5.  Declining a Prize</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'In the event you do not want a merchandise or real world experience prize you have validly won, you may decline your prize by responding to the prize reward email. If you decline a prize, you will under no circumstances be entitled to an alternative prize or compensation. By declining a prize you renounce any claim to the prize.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">2.2.6.   Exclusion and Fraud</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Eion reserves the right to exclude any Users who do not comply or are reasonably suspected of not complying with these Rules, the Terms and Conditions, and any applicable Additional Terms. Any violation of these Rules, the Terms and Conditions, and/or any applicable Additional Terms will result in the User’s immediate disqualification from the Competition or Leaderboard Competition and other Service limits, as provided for in the Terms and Conditions.'
                        }
                    </p>

                <li className="mx-4 text-xs font-bold roboto-bold">Rewards</li>
                    <p className="mx-1 text-xs font-bold roboto-bold">3.1.1 Cash Rewards</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Cash rewards are available to eligible participants as determined by Eion in its sole discretion.The amount of cash rewards will be determined by Eion and will be communicated to participants in advance. Cash rewards will be provided to participants upon achieving top scorer in our Weekly & Seasonal Leaderboards. '
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">3.1.2 Intangible Experience Rewards</p>
                    <p className="py-2 text-xs">
                        {
                        'Intangible experience rewards are available to eligible participants as determined by the Eion Platform in its sole discretion.  Intangible experience rewards may include, but are not limited to, access to exclusive events, personalized consultations, or other experiences as specified by Eion and the partnered Esport Teams.'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'Any real life experience invitations or game/event/exhibition tickets awarded as a reward must be claimed within the time period specified by Eion. Except where clearly specified, TRAVEL NOT INCLUDED'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'Where specified, you may be able to request your geographic preference for the invitation or tickets being awarded as rewards. All game/event/exhibition tickets and invitations are subject to availability.'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'Tickets or invitations may not be exchanged, resold, offered for resale, or used for any commercial or promotional purpose whatsoever. Any such resale or commercial or promotional use may result in disqualification and reward forfeiture, and may invalidate the tickets or invitations. Not redeemable for cash or credit. Rewards are nominative and personal, they are not transferable and may not be auctioned, traded, copied, transferred, modified or sold. Use of any game/event/exhibition ticket or invitation is subject to the standard terms, conditions, and health and safety policies applicable to the ticket or invitation. Tickets and seat locations at the relevant game are subject to availability. Guest(s) must be of legal age of majority in their relevant jurisdiction(s) of residence unless accompanied by a parent or legal guardian. Game dates and times may be subject to change. Failure to claim the invitation or ticket(s) awarded in the time period specified by Eion will result in the automatic forfeiture of the relevant invitation or ticket(s), which Eion may award to an alternative Competition participant, in its sole discretion.'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'The terms and conditions of the tickets awarded as part of any Competition will govern in the event a game/event/exhibition is not played or held due to weather conditions, an act of God, an act of terrorism, civil disturbance, or any other reason. Each recipient and, where applicable, his/her guest(s) agree to comply with all applicable venue regulations in connection with the tickets. Eion and its partners reserve the right to remove or to deny entry to any recipient and/or his/her guest(s) who engage in an unsportsmanlike or disruptive manner or with intent to annoy, abuse, threaten, or harass any other person at the game/event/exhibition. Released Parties (as defined below) will not be responsible for weather conditions; acts of God; acts of terrorism; civil disturbances; local, state, or federal regulation, order, or policy; work stoppage; epidemic, pandemic, or any other issue concerning public health or safety; or any other event outside of their control that may cause the cancellation or postponement of any game/event/exhibition.'
                        }
                    </p>
                    <p className="py-2 text-xs">
                        {
                        'You additionally agree, to the extent permitted by applicable law, to release, discharge and hold harmless, and waive any and all claims against Eion, all Partner Entities, and each of their respective parents, affiliated companies, subsidiaries, officers, directors, employees, general and limited partners, shareholders, members (including, all players (“Players”)), agents, licensees, distributors, dealers, retailers, printers, representatives, advertising and promotion agencies, and any other company associated with the reward, and all of their respective officers, directors, employees, agents, and representatives (collectively, “Released Parties”) for any injury, damage, liability or loss of any kind that may occur, directly or indirectly, in whole or in part, from participation in the Game and/or a Competition, possession, receipt or use of the rewards (or any portion thereof), or any travel or activity related thereto. “Partner Entities” means Eion’s licensing partners.'
                        }
                    </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'The Game is in no way sponsored by any of the Partner Entities. Officially Licensed Product. All rights reserved.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">3.1.3 In-game item Rewards.</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'In-game currency rewards are available to eligible participants as determined by the Eion Platform in its sole discretion.In-game currency rewards consist of virtual currency or items that can be used within Eion’s designated games or platforms.Participants may earn in-game currency rewards by achieving specific in-game goals, reaching milestones, or other conditions specified by Eion.'
                        }
                    </p>

                <li className="mx-4 text-xs font-bold roboto-bold">Invoke Fantasy League</li>
                    <p className="mx-1 text-xs font-bold roboto-bold">4.1.1 Invoke </p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Invoke is a thrilling new feature on Eion where you can assemble a dream team of 5 players from different regions, each fulfilling a different in-game role. Points are awarded based on their daily in-game performance.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">4.1.2 Scoring & Tabulation</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'After every match, Player Cards will earn Seasonal Points based on their K/D/A (Kills/Deaths/Assists), following the same scoring system as Locker (+100 points for the player appearing in a game, +10 points for kills, -10 points for deaths, and +5 points for assists). K/D/A will be updated incrementally, scores will be updated at the end of the day. The objective is to identify the top Player Cards in the gold, roam, mid, jungle, and experience roles for the season.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">4.1.3 Transfer Window</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'When Invoke is active, the draft you’ve submitted before the first game of the day determines the score you get. Any changes made during Invoke while it’s live will only apply to the games of the next day.'
                        }
                    </p>

                    <p className="mx-1 text-xs font-bold roboto-bold">4.1.4 Leaderboard</p>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'Your position on the Leaderboard determines your priority in selecting team rewards and the amount of the prize pool you’ll receive.'
                        }
                    </p>
                <li className="mx-4 text-xs font-bold roboto-bold">Your Content</li>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'By entering this Game, you grant Eion and Eion’s affiliates, representatives, licensees, partners, successors, and assigns the transferable, sub-licensable, irrevocable, free of charge, global right to use, copy, distribute, adapt, creative derivative works, reproduce, distribute, modify, translate, publish, broadcast, distribute, and otherwise exploit, including to in any media or support (including but not limited to digital formats, social media, media, television, streaming platforms, Eion newsletters, e-banners or other promotional materials, etc.) a Team you have composed and information relating to your Team, including, but not limited to, your username, any statements you have made about the Game, and biographical information, for advertising, marketing, public relations and promotional purposes without any further compensation to you.'
                        }
                    </p>

                <li className="mx-4 text-xs font-bold roboto-bold">Amendment</li>
                    <p className="mb-3 py-2 text-xs">
                        {
                        'We reserve the right to modify, at any time, all or part of the Rules. By participating in the Game, you accept the then-current version of the Rules. The applicable version of the Rules is the latest version published on the Website.'
                        }
                    </p>

            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
