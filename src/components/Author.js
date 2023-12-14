import React, { useState } from "react";
import "./Author.css";
import { useLocation, useParams } from "react-router-dom";

const Author = () => {
  const location = useLocation();
  let seeMore;

  return (
    <>
      {(seeMore = location.pathname === "/author-illustrator" ? true : false)}
      {console.log("from author", location.pathname)}
      <div className="author-overall">
        <div>
          <span>
            <img
              className="author"
              src="./images/Sparkle (2).svg"
              alt="My Image"
            />
          </span>

          <h1 className="one">Creators </h1>
        </div>
        <p className="two">
          Meet the magic-makers behind our children's stories
          <br /> and vibrant illustrations!
        </p>

        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="vai"> Ida Bernice</h1>
              <p>Illustrator</p>
              <div className="card2">
                <div className="card-content">
                  <p className="authorcontent">
                    A talented comic illustrator – she is the weaver of visual
                    tales that come alive on the pages. When she is not giving
                    life to characters and stories, you'll find her immersed in
                    the world of handcrafted wonders. Her love for socializing
                    and partying is infectious, a reminder that life is meant to
                    be celebrated. Friends flock to her for a guaranteed good
                    time, as her vibrant energy lights up any room she enters.
                    <p className="font">
                      In a world where each passion fuels another, she brings a
                      unique blend of creativity, sociability, and zest for
                      life. So, here's to the illustrator, handcraft
                      extraordinaire, social butterfly, cat whisperer, and
                      globetrotter – a true embodiment of a life lived
                      colourfully and passionately.
                    </p>
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="col-sm">
              <img
                className="mushroom"
                src="./images/mushroom.svg"
                alt="My Image"
              />
            </div>
            <div className="col-sm">
              <h1 className="vai">Steffi Stanley</h1>
              <p>Illustrator</p>
              <div className="card1">
                <div className="card-content">
                  <p className="authorcontent">
                    Beyond her role as a dedicated software developer in
                    Chennai, Steffi is a true artisan at heart. Her affair with
                    art began in her childhood, and it has since bloomed into a
                    captivating journey. For the past half-decade, she's been
                    painting vibrant tales through her digital illustrations,
                    all while keeping her regular job afloat. The ink of her
                    inspiration flows from the wellspring of her family and
                    life's myriad events, infusing her creations with a personal
                    touch that resonates with hearts.
                    <p className="font">
                      With an affinity for the sea, she's the epitome of a
                      sea-lover, delighting in the splendour of both ocean waves
                      and delectable seafood feasts. But her creativity extends
                      beyond the digital realm. When she's not painting, she's
                      stitching and crafting, carving a world where imagination
                      knows no bounds.
                    </p>
                    <p className="font">
                      Her artwork isn't just lines and colours – it's a conduit
                      for emotions. Her creations hold the remarkable power to
                      connect with the pulse of people's feelings. Beneath the
                      brushstrokes and codes, it's her empathy that stands out,
                      making her as approachable and relatable as the girl next
                      door.
                    </p>
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <img
                className="flower1"
                src="./images/flower1.svg"
                alt="My Image"
              />
            </div>
            <div className="col-sm">
              <h1 className="vai">Bhavya Desai</h1>
              <p>Illustrator</p>
              <div className="cardauthor">
                <div className="card-content">
                  <p className="authorcontent">
                    Bhavya Desai is a Chennai-based Illustrator. He brings
                    illustrations to life with dynamics that breathe humor into
                    each stroke. His greatest muse is the world itself – every
                    nook and cranny holds inspiration. People of all kinds come
                    alive through his art, as he observes and documents them
                    with the keen eye of a true artist, with a mischievous touch
                    that ignites instant smiles. His creations are a burst of
                    humor that lingers long after the first chuckle.
                    <p className="font">
                      But that's not where the magic ends. Each visit to his
                      work is a treasure hunt, a journey that unveils new
                      details with every glance. A man of action, he lives his
                      art with a contagious passion. His creativity knows no
                      limits, and his energy is boundless.
                    </p>
                    <p className="font">
                      When he's not crafting masterpieces, you might find him on
                      sketch crawls, where his imagination takes flight with a
                      bunch of people. A true artist, he imparts his wisdom
                      through workshops, sharing his knowledge of digital
                      illustration with budding talents. Also, you can see his
                      work colors the walls of significant places, infusing them
                      with his trademark style.
                    </p>
                    <p className="font">
                      From drawing everyday sketches of people to brewing a
                      perfect cup of coffee, his skills are as diverse as they
                      are impressive. His heart is large enough to embrace the
                      world, as evident in his love for both cats and dogs.
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <img
                className="flower2"
                src="./images/Flower2.svg"
                alt="My Image"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <h1 className="vai">Ramya</h1>
              <p>Author</p>
              <div className="card3">
                <div className="card-content">
                  <p className="authorcontent">
                    Ramya is the chief believer and co-founder of Agan Adhigaram
                    publications. She is a children’s book author and a blogger
                    whose creative spirit and artistic flair have given life to
                    the vibrant pages of our children's picture book
                    publication. When she is not crafting interactive tales that
                    whisk young minds away on adventures, as an automobile
                    designer she is found shaping the future of automobiles,
                    infusing her creativity into the vehicles that will carry us
                    into tomorrow.
                    <p className="font">
                      {" "}
                      As a mother, she understands the importance of instilling
                      cultural values and bonds that stand the test of time. Her
                      stories reflect these values, celebrating diversity and
                      inclusion. During her moment of leisure, she seeks refuge
                      in the great outdoors, finding inspiration in the rustling
                      leaves and the melodies of birdsong.
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <img
                className="flower3"
                src="./images/flower3.svg"
                alt="My Image"
              />
            </div>
            <div className="col-sm">
              <h1 className="vai">Sethu Ram</h1>
              <p>Illustrator</p>
              <div className="card4">
                <div className="card-content">
                  <p className="authorcontent">
                    Sethu Ram is a first employee and co-founder of Agan
                    Adhigaram publications. He is not only penned stories but
                    has rewritten the narrative of his own life. He is a
                    children's book publisher and author who dared to leave
                    behind the corporate world to follow his life calling – the
                    melody of art through illustrations and photography.
                    <p className="font">
                      With an audacious leap, he transitioned from boardrooms to
                      studios, exchanging suits for brushes and ties for lenses.
                      Through his illustrations and photographs, he crafts
                      visual tales that resonate with the young and
                      young-at-heart, igniting imagination and sparking joy.
                    </p>
                    <p className="font">
                      But his connection with creativity doesn't stop at the
                      edge of the canvas. In his free moments, you'll often find
                      him venturing into the embrace of nature, traversing
                      trails and climbing peaks as a dedicated trekker. Nature
                      is his muse, and trekking is his communion with the wild.
                    </p>
                    <p className="font">
                      Having traded the rat race for a life of capturing beauty,
                      both in stories and in the world around him, he reminds us
                      that the path less taken can lead to the most vibrant
                      destinations.
                    </p>
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>

          {/* remaining authors - it will show only in authors page, not in main page*/}
          {seeMore && (
            <>
              <div className="row">
                <div className="col-sm">
                  <img
                    className="flower1"
                    src="./images/flower1.svg"
                    alt="My Image"
                  />
                </div>
                <div className="col-sm">
                  <h1 className="vai">Madurai Ramakrishnan</h1>
                  <p>Author</p>
                  <div className="card2 rama">
                    <div className="card-content">
                      <p className="authorcontent">
                        Madurai Rama krishanan is a motivational speaker, who
                        possesses the rare gift of igniting flames of
                        inspiration within hearts by his Tamil proficiency. His
                        words are not just spoken; they're life-affirming sparks
                        that set minds on fire with determination and purpose.
                        <p className="font">
                          A writer and lyricist, he crafts verses that transcend
                          language, touching souls with their depth and
                          resonance. His pen dances across pages, weaving
                          stories that capture the essence of life's myriad
                          emotions.
                        </p>
                        <p className="font">
                          In the realm of guidance, he steps in as a life
                          counselor, extending a compassionate hand to those in
                          need. His wisdom becomes a guiding light for those
                          navigating through the challenges of life.
                        </p>
                        <p className="font">
                          A Tamil researcher, he dives deep into the richness of
                          the language, unearthing treasures that connect past,
                          present, and future. His dedication to preserving and
                          understanding Tamil culture is commendable.
                        </p>
                        <p className="font">
                          Venturing into the world of entertainment, he's also a
                          VJ – a charismatic host who infuses shows with his
                          energy and charm, connecting with audiences and
                          leaving a lasting impression.
                        </p>
                        <p className="font">
                          His collection of one-minute stories has taken the
                          social media sphere by storm, capturing hearts with
                          their brevity and power.
                        </p>
                        <p className="font">
                          In essence, he is a constellation of talents, a
                          guiding star that inspires, entertains, educates, and
                          connects.
                        </p>
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className="col-sm">
                  <img
                    className="flower2"
                    src="./images/Flower2.svg"
                    alt="My Image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <h1 className="Niranjan">Niranjan</h1>
                  <p>Ilustrator</p>
                  <div className="card8 niranjan">
                    <div className="card-content">
                      <p className="authorcontent">
                        Niranjan is a master of fine arts hailing from the
                        picturesque town of Mayiladuthurai, Tamil Nadu. With a
                        profound passion for the arts, he has crafted a colorful
                        portfolio that reflects his creative brilliance and a
                        deep connection to his roots.
                        <p className="font">
                          Specializing in illustrative works, he has beautifully
                          adorned Tamil rhymes on YouTube by Poo Pattu, bringing
                          joy to young audiences with his native touch. His
                          ability to bring stories to life with vibrant visuals
                          adds joy to the world of children's entertainment.
                        </p>
                        <p className="font">
                          Beyond his artistic endeavors, Niranjan is
                          characterized by his humility, kindness and unwavering
                          dedication to the work he takes on. Passionately
                          engaged in every project, he strives to create not
                          just art but experiences that leave a lasting
                          impression. In his leisure time, he loves to read
                          books and play games with his squad.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm">
                  <img
                    className="flower3"
                    src="./images/flower3.svg"
                    alt="My Image"
                  />
                </div>
                <div className="col-sm">
                  <h1 className="vai">Vaishali</h1>
                  <p>Author</p>
                  <div className="card6 vaishali">
                    <div className="card-content">
                      <p className="authorcontent">
                        Vaishali BK is a children’s book author and teacher,
                        crafting stories that ignite young imaginations and sow
                        seeds of inspiration. She is also a beacon of positive
                        discipline, guiding parents with wisdom and strategies
                        that build strong, loving connections within families.
                        <p className="font">
                          Her passion for fostering a love of reading shines
                          through her workshops, where she empowers parents with
                          insights on raising avid readers and fostering a world
                          of imagination and knowledge. Adding to her arsenal of
                          skills, she's an Assistant in the Montessori
                          community, instilling the principles of self-directed
                          learning and holistic development in the young hearts
                          she guides
                        </p>
                        <p className="font">
                          A lover of plants, she understands the beauty of
                          nurturing growth, whether it's in the minds of
                          children or the foliage in her care. She shares her
                          insights, inspiring change and empowerment through her
                          words on the social media platforms.
                        </p>
                        <p className="font">
                          With every role she takes on, she paints a picture of
                          dedication, compassion, and empowerment, leaving a
                          lasting impact on the lives she touches.
                        </p>
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <img
                    className="flower1"
                    src="./images/flower1.svg"
                    alt="My Image"
                  />
                </div>
                <div className="col-sm">
                  <h1 className="vai">Gowthami Maruthupandian</h1>
                  <p>Illustrator</p>
                  <div className="card9 Gowthami">
                    <div className="card-content">
                      <p className="authorcontent">
                        Gowthami is a talented multi-style illustrator and
                        Graphic Designer lives in Australia. From a young age,
                        her curiosity and keen artistic eye paved the way for a
                        journey filled with creativity and innovation.
                        <p className="font">
                          Having honed her skills as a freelancer for several
                          years, she has now taken her passion to new heights.
                          As the proud owner of "Vivids and Pastels," a design
                          studio that specializes in children's book
                          illustrations, branding, and graphic design, she has
                          carved a niche for herself in the world of visual
                          artistry.
                        </p>
                        <p className="font">
                          Her dedication to thinking outside the box and
                          presenting ideas in a vividly creative manner is
                          nothing short of inspiring.
                        </p>
                        <p className="font">
                          Whether you're seeking fresh ideas to bring your dream
                          brand to life, looking to rebrand with a creative
                          touch, or yearning to infuse your stories with
                          captivating illustrations, Gowthami is the creative
                          wizard you've been searching for. She will transform
                          your ideas into vibrant realities and make vision
                          breathe life with her magic touch.
                        </p>
                        <p className="font">
                          Her dreams are like the colors on her palette, each
                          one adding depth and vibrancy to her life. With eyes
                          that see beyond the horizon, she envisions worlds yet
                          to be discovered.
                        </p>
                      </p>
                    </div>
                  </div>{" "}
                </div>
                <div className="col-sm">
                  <img
                    className="flower2"
                    src="./images/Flower2.svg"
                    alt="My Image"
                  />
                </div>
              </div>
            </>
          )}
          {/* end of remaining authors */}
        </div>
      </div>
      { !seeMore &&
        <div className="Addmore">
          <a href="author-illustrator" className="Author">
            See More
          </a>
        </div>
      }
    </>
  );
};

export default Author;
