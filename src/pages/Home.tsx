import Carousel from '../components/Carousel'
import CarouselCard from '../components/CarouselCard'
import ContentBanner from '../components/ContentBanner'
import DiscordLink from '../components/DiscordLink'
import { ModalButton, ModalContent } from '../components/Modal'
import SocialLinks from '../components/SocialLinks'

const Home = () => (
  <>
    <div className="banner">
      <div className="banner__hero--image"></div>

      <video className="banner__hero--video" autoPlay muted loop>
        <source src="/vid/hero.mp4" type="video/mp4" />
      </video>

      <div className="banner__overlay">
        <div className="banner__inner">
          <img src="/img/header-default.png" />
        </div>

        <div className="banner__overlay--button-container">
          <ModalButton modalId="trailer-modal">Watch Trailer</ModalButton>
          <ModalContent modalId="trailer-modal">
            <div className="video-modal__container">
              <iframe
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/NcArkfwYI8M?autoplay=0&autohide=1&controls=1&modestbranding=1&showinfo=1&version=3&enablejsapi=1&wmode=transparent&rel=0"
              ></iframe>
            </div>
          </ModalContent>
        </div>
      </div>
    </div>

    <div className="banner__full-width banner--video-footer">
      <img src="/img/banner-video.png" />
      <h2 className="text-center text-upper">Remember your power</h2>
    </div>

    <div className="banner__full-width banner__full-width--alt" style={{ paddingTop: '128px' }}>
      <div id="intro" className="content__container" style={{ maxWidth: '1000px' }}>
        <div className="flex-row">
          <div className="col-md-3" style={{ height: 'auto', width: '100%' }}>
            <img className="content__brand marg-bottom-2" src="/img/branding-eidetus.jpg" alt="Eidetus" />
          </div>
          <div className="col-md-9">
            <p className="text-center">
              Eidetus is a third-person shooter meets collectible card game set in a dystopian sci-fi landscape. Play
              as a Psypher channeling memories through psychic power while drawing from the deck of abilities you’ve
              assembled to defeat your opponents.
            </p>

            <div className="text-center">
              <h3 className="marg-bottom-2 text-center text-upper">Coming soon to</h3>

              <a className="button button--image" href="https://store.steampowered.com/app/681710/Eidetus/" target="_blank">
                <img src="/img/branding-steam-dark.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="banner__full-width">
      <div id="masteries" className="content__container">
        <h2 className="text-center text-upper">
          <small className="marg-bottom-0 text-upper">- To Win -</small>
          <strong>You Must Master</strong>
        </h2>

        <ContentBanner
          name="B.Y.O.H."
          description="Design a Psypher that suits your play style, psychic visions, and team's needs. You do you."
          image="byoh"
          subname="(Build Your Own Hero)"
        />

        <ContentBanner
          name="Team-Based Objectives"
          description={
            'Okay, so there is a "I" in Eidetus, but there\'s also a "U." In order to win, you gotta work together with your Psypher pals. You\'ll need to cooperate and strategize with each other so you can claim your territory.'
          }
          flip
          image="team"
        />

        <ContentBanner
          name="Deck Building"
          description={
            'Rock out with your deck out. Devise inventive combinations of skills that dovetail effectively in combat. Since Eidetus is esoteric as hell and this game\'s all about memory, decks are called "reveries" here.'
          }
          image="deck"
        />

        <ContentBanner
          name="Resource Management"
          description="Embrace your inner capitalist and suck up all the resources! All is fair in laissez faire. Understand and utilize the game map and enemy movements to gain control of the assets you need to win."
          flip
          image="resource"
        />

        <ContentBanner
          name="Twitch Shooting"
          description="Flickshot your way to victory. Quick reaction speeds and precision aim will put you ahead of your Psypher peers."
          image="twitch"
        />
      </div>
    </div>

    <div className="banner__full-width banner__full-width--alt">
      <div id="how-to-play" className="content__container">
        <h2 className="text-center text-upper">
          <strong>How to Play</strong>
        </h2>

        <Carousel>
          <CarouselCard>
            <div className="flex-row">
              <div className="col-md-6">
                <h3>Equip Skills</h3>

                <p>
                  Before joining a match, you'll select one of your reveries (decks). Choose wisely, since the reverie
                  you pick will determine which skills are available to you for the entire match (no take-backsies).
                  Upon entering the game, you will randomly be given four skills from your reverie which you may then
                  reshuffle for a potentially better starting set.
                </p>

                <p>
                  As you play, you'll unlock additional skills (upgrade!). These can be used to overwrite a currently
                  equipped skill so you can adapt your play style to synergize with your allies or better combat the
                  opposing team.
                </p>
              </div>

              <div className="col-md-6">
                <div className="content__image">
                  <img src="/img/how-to-play_skills.png" />
                </div>
              </div>
            </div>
          </CarouselCard>

          <CarouselCard>
            <div className="flex-row">
              <div className="col-md-6">
                <h3>Harvest Resources</h3>

                <p>
                  Find and collect the strange crystals strewn about the world, increasing your maximum power as a
                  Psypher. As you kick your enemies' butts with mind-lasers and vaporize them with psychic blasts, you
                  can collect their residual energies for your own nefarious purposes.
                </p>

                <p>
                  Health shrines can be found far from the action (you gotta work for ‘em) and only give their
                  blessing after performing the intricate ritual of… standing next to them for 10 seconds. But beware,
                  these relics draw the attention of the local creatures and more simple-minded denizens. These
                  heathens must be removed from the area before you can claim the shrine's valuable restorative
                  effects.
                </p>
              </div>

              <div className="col-md-6">
                <div className="content__image">
                  <img src="/img/how-to-play_resources.png" />
                </div>
              </div>
            </div>
          </CarouselCard>

          <CarouselCard>
            <div className="flex-row">
              <div className="col-md-6">
                <h3>Claim Victory</h3>

                <p>
                  The main objective of Eidetus is to capture the massive sources of energy called WOMPs (named by the
                  locals for the, er, pleasant sound they make upon contact with the ground) before the opposing
                  Psypher team does. Every captured WOMP leading up to the final one improves your chance to win the
                  battle with huge gains in mana and lower capture time.
                </p>

                <p>
                  There are 6 randomized WOMP spawn locations around the battlefield, with the last WOMP landing
                  dead-center in the middle of it all for the no-holds-barred finale, where the winning team takes
                  all!
                </p>
              </div>

              <div className="col-md-6">
                <div className="content__image">
                  <img src="/img/how-to-play_victory.png" />
                </div>
              </div>
            </div>
          </CarouselCard>
        </Carousel>
      </div>
    </div>

    <div className="banner__full-width">
      <div id="story" className="content__container pad-bottom-0">
        <h2 className="text-center text-upper">
          <strong>A Truly Forgettable Narrative</strong>
        </h2>

        <div className="flex-row marg-bottom-0">
          <div className="col-md-12">
            <p>No one remembers how this all started, and that's the problem.</p>

            <p>
              The mind-altering virus known as "Eidetus" stripped the memories of all who were left on the surface
              while the elites escaped aboveground to their floating fortress. Thus, crazy powerful (but also crazy
              absent-minded) Psyphers roam the surface.
            </p>
          </div>

          <div className="col-md-12">
            <p>
              They can't retain memories, but they can whoop some butt. They have no idea where their keys are, but
              best believe they will blow you up with a fireball.
            </p>
          </div>

          <div className="col-md-12">
            <p>
              To stay alive and find the truth (but probably not those keys), you'll need to defeat the other Psyphers
              encroaching on your territory by channeling the memories you do have into psychic power.
            </p>

            <p>You're on the hunt for your own memories, and no one better get in your way.</p>
          </div>

          <div className="col-md-12">
            <div className="content__image">
              <img style={{ verticalAlign: 'bottom' }} src="/img/story.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="banner__full-width banner__full-width--alt">
      <div id="join" className="content__container">
        <h2 className="text-upper text-center">
          <strong>Get Connected</strong>
        </h2>

        <div className="text-center">
          <ModalButton modalId="newsletter-modal">Lose your mind to Eidetus!</ModalButton>
        </div>

        <ModalContent modalId="newsletter-modal">
          <h3 className="text-center text-upper marg-bottom-4">Sign up for our newsletter</h3>

          <div id="mc_embed_signup">
            <form
              action="//expletivestudios.us15.list-manage.com/subscribe/post?u=2e07229fedd317f43de1a7336&id=9132aaa9b3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                  size={35}
                />
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input type="text" name="b_2e07229fedd317f43de1a7336_9132aaa9b3" tabIndex={-1} defaultValue="" />
                </div>
                &nbsp;&nbsp;&nbsp;
                <input
                  type="submit"
                  defaultValue="Sign-up"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button button--attention button--full-width"
                />
              </div>
            </form>
          </div>
        </ModalContent>

        <p className="text-center">
          Use the below link to join our growing community on Discord. We'll also be occasionally pulling from the
          audience for exclusive playtests.
        </p>

        <DiscordLink />

        <p className="text-center">
          Don't forget to follow <strong>@Eidetus</strong> on all social media for the latest updates on our upcoming
          game.
        </p>

        <SocialLinks />
      </div>
    </div>
  </>
)

export default Home
