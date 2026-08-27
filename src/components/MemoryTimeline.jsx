import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import './MemoryTimeline.css';

const MemoryTimeline = ({ onBack }) => {
  const memories = [
    { id: 1, title: "The Day It All Began", desc: "", img: "/journey-photos/1.jpeg" },
    { id: 2, title: "Let's Never Get Attached", desc: "The only promise we would every break to each other, and I am really glad we broke it", img: "/journey-photos/2.jpeg" },
    { id: 3, title: "The Day We Finally Confessed Our Feelings", desc: "I was so scared that day, but I am really loving the next chapter", img: "/journey-photos/3.jpeg" },
    { id: 4, title: "Your First Letter To Me", desc: "You have no idea how many times I read it and how much I loved it", img: "/journey-photos/4.jpeg" },
    { id: 5, title: "The First Time I Saw You", desc: "I fell for you again that Day", img: "/journey-photos/5.jpeg" },
    { id: 6, title: "The Day You Wrote Again", desc: "I'm glad that it was about us that you started writing again with", img: "/journey-photos/6.jpeg" },
    { id: 7, title: "Ahh I Love This Baby", desc: "My Babyyyyyyyyyy", img: "/journey-photos/7.jpeg" },
    { id: 8, title: "There's Never Been A Day That You Didn't Make Me Feel Special Or Loved", desc: "", img: "/journey-photos/8.jpeg" },
    { id: 9, title: "The Way You Understand Me", desc: "", img: "/journey-photos/9.jpeg" },
    { id: 10, title: "We Had Our Struggles Together", desc: "But there was a different feel to it even when we were way, I craved for some one for the first time", img: "/journey-photos/10.jpeg" },
    { id: 11, title: "Our First Anniversary", desc: "My first letter to you", img: "/journey-photos/11.jpeg" },
    { id: 12, title: "We Had Our Fun And Cheers To Way More", desc: "Touchwood, Teri Nazar Utaru a Billion Times", img: "/journey-photos/12.jpeg" },
    { id: 13, title: "There Is So Much Love Between Us", desc: "Touchwood Again", img: "/journey-photos/13.jpeg" },
    { id: 14, title: "You Made A Man Very Happy And Relaxed", desc: "and I appreciate you so much for it", img: "/journey-photos/14.jpeg" },
    { id: 15, title: "Your Diary Titles", desc: "Well even though I don't the context but I love that they are about Me", img: "/journey-photos/15.jpeg" },
    { id: 16, title: "We Had Our Misunderstandings, Days That I Messed Up", desc: "And I'm still sorry about it, but I promise to be better", img: "/journey-photos/16.jpeg" },
    { id: 17, title: "But Then Our Day Ended Like This So Its Fine", desc: "", img: "/journey-photos/17.jpeg" },
    { id: 18, title: "And Back To Being Us The Next Day", desc: "", img: "/journey-photos/18.jpeg" },
    { id: 19, title: "Again So Much Love", desc: "Ahhhhhhh Touchwoooooddddd", img: "/journey-photos/19.jpeg" },
    { id: 20, title: "One Day We'll Definitely Recreate This", desc: "No distance, no AI, no other people, JUST US", img: "/journey-photos/20.jpeg" },
    { id: 21, title: "Ahh I Had To Specially Mention These Eyes", desc: "After all I live for them and I would die for them", img: "/journey-photos/21.jpeg" }
  ];

  return (
    <div className="timeline-page">
      <button className="back-btn glass-panel" onClick={onBack}>
        <ArrowLeft size={24} />
        <span>Back to Hub</span>
      </button>

      <div className="timeline-header">
        <h1 className="cursive">Our Journey, My Love 🌸</h1>
        <p>Some of my favorite moments with you...</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <h2>{memory.title}</h2>
              {memory.desc && <p>{memory.desc}</p>}

              {/* Image Placeholder */}
              <div className="timeline-image-placeholder">
                {memory.img ? (
                  <img src={memory.img} alt={memory.title} />
                ) : (
                  <div className="placeholder-box">
                    <ImageIcon size={40} color="#b76e79" />
                    <span>Your Photo Here</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="timeline-footer">
        <p className="cursive">One day we will replace these screenshots with actual pictures of us. ❤️</p>
      </div>
    </div>
  );
};

export default MemoryTimeline;
