import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.8;

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

function AntiFiltersArticle() {
  return (
    <ArticleContainer>
      <Title>Anti Filters</Title>
      <Content>
        <p>
          There's a quiet, underrated moment in life that happens when someone, something, or some place says: “You're not what we're looking for.” It stings at first. Rejection always does. But what if we started to see these moments not as losses—but as signals? What if rejection is exactly the thing we need to listen to most?
        </p>

        <p>I call this idea anti filters.</p>

        <p>We all know what filters are: tools we use to sift through people, opportunities, or options based on our preferences. But anti filters are the reverse. They're when others filter you out—and, surprisingly, that can be a good thing. </p>

        <h2>Rejection as Signal</h2>
        <p>
          Here's the heart of it: when someone or something rejects you, not because of a lack of skill or preparation, but because of a misalignment of values, they're doing you a favor. They're saving you time, energy, and the mental gymnastics of pretending to be someone you're not.
        </p>

        <p>
          This only works if you've done the internal work first. You need to know your values. Not in some vague, bumper-sticker sense. I mean a clear, confident sense of who you are, what you want, and what kind of environments let you thrive. That's your compass.
        </p>

        <p>
          Once you have that compass, you can approach every opportunity, every conversation, job interview, relationship, community, with honesty. And here's the magic: when you're honest about your values, you give others the chance to show you whether or not they're truly aligned. And if they're not? That's your anti filter in action.
        </p>

        <h2>Interviewing</h2>
        <p>
          Take job interviews, for example. We're trained to polish, posture, and perform. Prep for common questions. Show just enough vulnerability to seem humble, but not too much. Present the resume highlight reel. Basically, sell.
        </p>

        <p>
          But what if we didn't?
        </p>

        <p>
          What if we showed up to interviews not trying to impress, but trying to align? What if we used that time not just to show we're qualified, but to deeply assess: Is this a place I can be myself? Are these the kind of people I want to spend my days with? Do they value what I value?
        </p>

        <p>
          You'd ask questions that matter. You'd speak with clarity about your own principles. You'd stop puffing and start listening. And if that company says no? Wonderful. They've just saved you from investing months or years into a job that would have chipped away at who you truly are.
        </p>

        <h2>Let Others Work for You</h2>
        <p>
          The beauty of anti filters is they're self-cleaning. You don't have to spend endless effort dodging bad fits or trying to make everything work. Just be honest about who you are, what you stand for, and what you're looking for and let others opt out. When they do, thank them.
        </p>

        <p>
          When people or organizations filter you out based on your authentic self, they're doing you the massive favor of revealing that they're not your people. That's valuable information.
        </p>

        <h2>Long Term</h2>
        <p>
          This mindset might mean it takes longer to land the job, find the right friends, or build the right business partnerships. But long-term? It's a stress reducer. It removes the exhausting pressure to mold yourself to every room you enter. And it speeds up the process of finding real alignment.
        </p>

        <p>
          With time, anti filters help you build a life surrounded by people and places that actually fit. And that's not just more efficient, it's more fulfilling.
        </p>

        <p>
          So next time you're rejected, take a breath. Smile, even. And think: Thank you for being my anti filter. One less mismatch to worry about. One step closer to the right fit.
        </p>

        <h2>-----------------------------------------------------</h2>
        <p>
        Don't mold yourself to what the world wants. Mold the world around what you know to be true.
 Be honest. Be thoughtful. Be curious.
 Let the anti filters do their work.
        </p>

      </Content>
    </ArticleContainer>
  )
}

export default AntiFiltersArticle