
document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     1. RESTORE SCROLL POSITION
  ========================================= */
  const pendingScroll = sessionStorage.getItem("bublinks-pending-scroll");

  if (pendingScroll) {
    try {
      const position = JSON.parse(pendingScroll);
      sessionStorage.removeItem("bublinks-pending-scroll");

      requestAnimationFrame(() => {
        window.scrollTo({
          left: position.x || 0,
          top: position.y || 0,
          behavior: "auto"
        });
      });
    } catch {
      sessionStorage.removeItem("bublinks-pending-scroll");
    }
  }

  /* =========================================
     2. MOBILE NAVIGATION
  ========================================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================================
     3. COPYRIGHT YEAR
  ========================================= */
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* =========================================
     4. ACTIVE NAVIGATION LINK
  ========================================= */
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });

  /* =========================================
     5. CARD CONTENT

     Descriptions are specific to each topic.
     Activities are examples, not promises that
     every activity is offered at the school.
  ========================================= */
  const cardDetails = {
    "Learning Through Play": {
      description:
        "Children learn by playing, exploring and participating in enjoyable activities. Play can encourage curiosity, creativity, communication and early problem-solving while making learning engaging and enjoyable.",
      icon: "🧩",
      activities: [
        "Age-appropriate games and playful challenges",
        "Sorting, matching and simple puzzles",
        "Pretend play and imaginative activities",
        "Opportunities to share ideas and take turns"
      ],
      benefits: [
        "Curiosity and exploration",
        "Early problem-solving",
        "Communication and cooperation",
        "Confidence through trying new things"
      ]
    },

    "Explore & Discover": {
      description:
        "Children are encouraged to observe, ask questions and discover the world around them. Everyday experiences can help develop curiosity, observation skills and confidence as children explore new ideas at their own pace.",
      icon: "🔍",
      activities: [
        "Observing familiar objects and their features",
        "Talking about colours, shapes and textures",
        "Asking questions about everyday discoveries",
        "Noticing similarities and differences"
      ],
      benefits: [
        "Curiosity and observation",
        "Early reasoning skills",
        "Questioning and communication",
        "Confidence in exploring new ideas"
      ]
    },

    "Hands-on Experiences": {
      description:
        "Hands-on experiences give children opportunities to learn by doing. Creative and practical activities can encourage imagination, coordination, exploration and an interest in discovering how things work.",
      icon: "🎨",
      activities: [
        "Drawing, colouring and simple craft ideas",
        "Sorting and matching objects",
        "Exploring safe, age-appropriate materials",
        "Completing simple practical tasks"
      ],
      benefits: [
        "Creativity and self-expression",
        "Coordination and careful handling",
        "Exploration and observation",
        "Learning through experience"
      ]
    },

    "Art & Craft": {
      description:
        "Art and craft activities let children experiment with colours, shapes and different materials while expressing their ideas and developing creativity. Drawing, colouring, painting and simple craft experiences can encourage imagination, decision-making and hands-on exploration. Children can explore their own ideas and enjoy the process of creating something.",
      icon: "🎨",
      activities: [
        "Drawing and colouring pictures",
        "Exploring colours, shapes and patterns",
        "Making simple crafts with suitable materials",
        "Talking about and sharing creative ideas"
      ],
      benefits: [
        "Creativity and imagination",
        "Self-expression and decision-making",
        "Colour and shape awareness",
        "Fine-motor practice through age-appropriate tasks"
      ]
    },

    "Creative Little Hands": {
      description:
        "Art and craft activities give children opportunities to experiment with colours, shapes and materials. Through creative exploration, children can express their ideas, use their imagination and develop confidence in trying new things.",
      icon: "🖍️",
      activities: [
        "Drawing, colouring and creating pictures",
        "Exploring different colours and shapes",
        "Trying simple craft ideas",
        "Describing a picture or creation"
      ],
      benefits: [
        "Creativity and imagination",
        "Self-expression",
        "Decision-making",
        "Coordination and careful handling"
      ]
    },

    "Stories & Rhymes": {
      description:
        "Stories, songs and rhymes encourage children to listen, imagine and express themselves. These enjoyable experiences can support vocabulary development, listening skills, memory and an early interest in books and language.",
      icon: "📚",
      activities: [
        "Looking at and talking about picture books",
        "Listening to age-appropriate stories",
        "Singing familiar songs and rhymes with actions",
        "Talking about characters and story events"
      ],
      benefits: [
        "Vocabulary and language awareness",
        "Listening and attention",
        "Memory and sequencing",
        "Imagination and expression"
      ]
    },

    "Learning Beyond Class": {
      description:
        "Everyday surroundings can offer opportunities to learn through observation and discovery. Looking closely at nature, colours and familiar objects can help children connect new ideas with the world around them.",
      icon: "🌿",
      activities: [
        "Noticing colours and shapes in the surroundings",
        "Observing plants or other familiar natural objects",
        "Describing things children notice",
        "Comparing familiar objects and their features"
      ],
      benefits: [
        "Observation and curiosity",
        "Vocabulary development",
        "Connecting ideas with everyday life",
        "Asking questions and sharing discoveries"
      ]
    },

    "Growing Together": {
      description:
        "Shared activities give children opportunities to practise taking turns, listening, sharing and cooperating. These experiences can encourage kindness, communication, respect for others and growing independence.",
      icon: "🤝",
      activities: [
        "Taking turns during simple games",
        "Sharing materials during an activity",
        "Working together on a shared task",
        "Practising polite communication"
      ],
      benefits: [
        "Cooperation and teamwork",
        "Communication and listening",
        "Kindness and consideration",
        "Growing independence"
      ]
    },

    "Our Philosophy": {
      description:
        "Every child learns and develops at their own pace. A caring and engaging early-learning environment gives children opportunities to explore, express themselves, build relationships and grow in confidence through meaningful experiences.",
      icon: "💛",
      activities: [
        "Offering age-appropriate opportunities to explore",
        "Encouraging children to ask questions",
        "Making space for creative expression",
        "Recognising that children develop at different rates"
      ],
      benefits: [
        "Confidence and independence",
        "Curiosity and participation",
        "Respect for individual differences",
        "A positive attitude towards learning"
      ]
    },

    "Our Mission": {
      description:
        "Our mission is to provide a safe, joyful and nurturing environment where children can learn through play, exploration and meaningful experiences. We aim to encourage curiosity, creativity and confidence as children take their first steps in learning.",
      icon: "🌼",
      activities: [
        "Encouraging playful exploration",
        "Offering opportunities for creative expression",
        "Supporting communication and participation",
        "Making learning engaging and age-appropriate"
      ],
      benefits: [
        "Curiosity and creativity",
        "Confidence in participation",
        "Communication and cooperation",
        "Enjoyment of early learning"
      ]
    },

    "Our Vision": {
      description:
        "Our vision is to nurture confident, curious and compassionate children who develop a love of learning and exploring. We value opportunities for children to express themselves, discover their interests and grow at their own pace.",
      icon: "🌈",
      activities: [
        "Exploring interests through age-appropriate activities",
        "Sharing ideas and asking questions",
        "Practising cooperation and kindness",
        "Building independence through everyday tasks"
      ],
      benefits: [
        "Confidence and curiosity",
        "Compassion and cooperation",
        "Independent thinking",
        "A positive approach to discovery"
      ]
    },

    "A Place to Bloom": {
      description:
        "Bublinks Preschool & Daycare aims to make early learning a joyful journey. Children can be encouraged to discover their interests, explore new ideas, express themselves and develop at their own pace in a caring environment.",
      icon: "🌱",
      activities: [
        "Exploring ideas through play",
        "Expressing thoughts through words and creativity",
        "Discovering interests through age-appropriate experiences",
        "Practising everyday independence"
      ],
      benefits: [
        "Confidence and self-expression",
        "Curiosity and creativity",
        "Growing independence",
        "Enjoyment of learning"
      ]
    },

    "Playgroup": {
      description:
        "For children aged 2–3 years. Playgroup introduces young children to group experiences through play, movement, songs, stories and simple hands-on activities. These experiences can encourage communication, curiosity and early social interaction.",
      icon: "🧸",
      activities: [
        "Simple play and movement activities",
        "Songs, rhymes and picture books",
        "Exploring colours, shapes and familiar objects",
        "Short activities that encourage taking turns"
      ],
      benefits: [
        "Early communication",
        "Familiarity with group experiences",
        "Curiosity and exploration",
        "Early social interaction"
      ]
    },

    "Nursery": {
      description:
        "For children aged 3–4 years. Nursery learning can include stories, art, games, early number activities and guided exploration. These age-appropriate experiences can encourage language development, creativity, social interaction and early awareness of numbers and the world around them.",
      icon: "🎨",
      activities: [
        "Picture books, stories and conversations",
        "Colour, shape and sorting activities",
        "Creative drawing and craft ideas",
        "Simple counting and matching games"
      ],
      benefits: [
        "Language and communication",
        "Early number awareness",
        "Creativity and coordination",
        "Cooperation and confidence"
      ]
    },

    "Junior KG": {
      description:
        "For children aged 4–5 years. Junior KG can support early literacy, number awareness, communication, creative expression and foundational learning through age-appropriate activities. Children can be encouraged to ask questions, participate and gradually build confidence and independence.",
      icon: "📚",
      activities: [
        "Age-appropriate letter and sound activities",
        "Counting and number-recognition games",
        "Stories, conversation and vocabulary practice",
        "Creative activities and simple problem-solving"
      ],
      benefits: [
        "Early literacy awareness",
        "Foundational numeracy",
        "Communication and expression",
        "Confidence and participation"
      ]
    },

    "Junior K.G.": {
      description:
        "For children aged 4–5 years. Junior KG can support early literacy, number awareness, communication, creative expression and foundational learning through age-appropriate activities. Children can be encouraged to ask questions, participate and gradually build confidence and independence.",
      icon: "📚",
      activities: [
        "Age-appropriate letter and sound activities",
        "Counting and number-recognition games",
        "Stories, conversation and vocabulary practice",
        "Creative activities and simple problem-solving"
      ],
      benefits: [
        "Early literacy awareness",
        "Foundational numeracy",
        "Communication and expression",
        "Confidence and participation"
      ]
    },

    "Senior KG": {
      description:
        "For children aged 5–6 years. Senior KG can build on foundational learning and encourage early reading, writing readiness, numeracy, communication and independent thinking. Age-appropriate experiences can help children strengthen their skills and prepare for the next stage of schooling.",
      icon: "⭐",
      activities: [
        "Age-appropriate reading and writing-readiness practice",
        "Number activities and simple problem-solving",
        "Listening, speaking and story discussions",
        "Tasks that encourage organisation and independence"
      ],
      benefits: [
        "Foundational literacy and numeracy",
        "Communication and comprehension",
        "Independent thinking",
        "Readiness for the next stage of schooling"
      ]
    },

    "Senior K.G.": {
      description:
        "For children aged 5–6 years. Senior KG can build on foundational learning and encourage early reading, writing readiness, numeracy, communication and independent thinking. Age-appropriate experiences can help children strengthen their skills and prepare for the next stage of schooling.",
      icon: "⭐",
      activities: [
        "Age-appropriate reading and writing-readiness practice",
        "Number activities and simple problem-solving",
        "Listening, speaking and story discussions",
        "Tasks that encourage organisation and independence"
      ],
      benefits: [
        "Foundational literacy and numeracy",
        "Communication and comprehension",
        "Independent thinking",
        "Readiness for the next stage of schooling"
      ]
    },

    "Daycare": {
      description:
        "For children aged 1.5–7 years. Daycare is an option for families who need care beyond preschool hours. Contact Bublinks to discuss your child's age, suitable timings, current availability and the care options that may be appropriate for your family's needs.",
      icon: "🧸",
      activities: [
        "Discussing suitable routines for your child's age",
        "Exploring age-appropriate play options",
        "Discussing rest, care and family timing needs",
        "Confirming current arrangements directly with the school"
      ],
      benefits: [
        "A care option for working families",
        "Opportunity for age-appropriate play",
        "Discussion of individual care needs",
        "Clear communication with the school"
      ]
    },

    "A World of Imagination": {
      description:
        "Stories, rhymes and pretend play invite children to imagine new worlds and express their thoughts. These experiences can encourage language development, listening, creative thinking and confidence in sharing ideas.",
      icon: "📖",
      activities: [
        "Talking about picture-book illustrations",
        "Imagining alternative story endings",
        "Pretend play based on familiar experiences",
        "Describing characters and events"
      ],
      benefits: [
        "Imagination and creative thinking",
        "Vocabulary and expression",
        "Listening and attention",
        "Confidence in sharing ideas"
      ]
    },

    "Curious Little Explorers": {
      description:
        "Exploring nature and everyday objects encourages children to observe carefully, ask questions and discover new things. Simple opportunities to investigate their surroundings can support curiosity, attention and early problem-solving.",
      icon: "🔍",
      activities: [
        "Observing familiar objects and their features",
        "Comparing shapes, sizes and textures",
        "Asking questions about everyday discoveries",
        "Describing what children notice"
      ],
      benefits: [
        "Observation and attention",
        "Curiosity and questioning",
        "Vocabulary development",
        "Early reasoning skills"
      ]
    },

    "Play-Based Learning": {
      description:
        "Play gives children enjoyable opportunities to practise thinking, communication, cooperation and problem-solving. Through age-appropriate games and activities, children can explore ideas, try different approaches and learn through experience.",
      icon: "🧩",
      activities: [
        "Simple matching and sorting games",
        "Age-appropriate puzzles and playful challenges",
        "Pretend play and storytelling",
        "Games that encourage turn-taking"
      ],
      benefits: [
        "Problem-solving",
        "Communication and cooperation",
        "Curiosity and imagination",
        "Learning through experience"
      ]
    },

    "Little Discoveries": {
      description:
        "Sorting games, simple experiments and hands-on exploration can help children observe details, notice patterns and ask questions. These experiences encourage curiosity and offer opportunities to learn by investigating the world around them.",
      icon: "🌱",
      activities: [
        "Sorting familiar objects by colour or shape",
        "Comparing size, texture or other visible features",
        "Observing simple changes in everyday materials",
        "Talking about what was noticed"
      ],
      benefits: [
        "Observation and reasoning",
        "Pattern recognition",
        "Questioning and communication",
        "Curiosity and exploration"
      ]
    },

    "Contact Us": {
      description:
        "Get in touch with Bublinks Preschool & Daycare to discuss your child's age, your family's needs and the preschool or daycare options you are interested in. The school can help answer your questions about timings and next steps.",
      icon: "📞",
      activities: [
        "Ask about preschool and daycare options",
        "Discuss your child's age group",
        "Ask about timings and current availability",
        "Find out how to proceed with an enquiry"
      ],
      benefits: [
        "Clear information about options",
        "Answers to your questions",
        "A chance to discuss your family's needs",
        "Guidance on the next steps"
      ]
    },

    "Discuss Your Needs": {
      description:
        "Speak with Bublinks about your child's age group, preferred timings and any questions you would like answered before proceeding. Contact the school to discuss suitable options and confirm current availability.",
      icon: "💬",
      activities: [
        "Discussing your child's age",
        "Explaining your timing requirements",
        "Asking about suitable program options",
        "Confirming availability and next steps"
      ],
      benefits: [
        "A clearer understanding of options",
        "Information relevant to your family",
        "An opportunity to ask questions",
        "Better preparation for the admission process"
      ]
    },

    "Prepare Documents": {
      description:
        "For admission enquiries, prepare the child's Aadhaar, birth certificate, parents' Aadhaar cards and passport-size photographs. Contact Bublinks to confirm current document requirements and whether any additional information is needed.",
      icon: "📄",
      activities: [
        "Prepare the child's Aadhaar",
        "Prepare the child's birth certificate",
        "Prepare parents' Aadhaar cards",
        "Keep passport-size photographs ready"
      ],
      benefits: [
        "Better preparation for admission",
        "Easier document checking",
        "Fewer last-minute omissions",
        "A chance to confirm any additional requirements"
      ]
    },

    "Confirm the Details": {
      description:
        "Before proceeding, contact Bublinks to confirm the next steps, current availability, applicable fees, timings and any additional requirements. This helps families understand the process before completing admission formalities.",
      icon: "✅",
      activities: [
        "Confirm the relevant age group",
        "Ask about timings and availability",
        "Confirm applicable fees directly with the school",
        "Check the required documents and next steps"
      ],
      benefits: [
        "Clear expectations",
        "Up-to-date information",
        "Better preparation",
        "A more informed admission decision"
      ]
    },

    "Visit Us": {
      description:
        "Bublinks Preschool & Daycare is located near Abhaya Anjaneya Temple, Abhaya Layout, Sathnur Village, Bengaluru, Karnataka – 562149. Use the school's Google Maps link for directions or contact the school if you need help finding the location.",
      icon: "📍",
      activities: [
        "Check the location before travelling",
        "Use the Google Maps directions link",
        "Contact the school if you need help",
        "Confirm a visit in advance if required"
      ],
      benefits: [
        "Easier route planning",
        "Access to the correct address",
        "An opportunity to ask questions",
        "Help planning a visit"
      ]
    },

    "Call Us": {
      description:
        "Call 072040 24222 or 099022 80866 to ask about preschool programs, daycare options, timings and admissions. Contact the school directly to confirm current availability and discuss your questions.",
      icon: "📞",
      activities: [
        "Ask about program options",
        "Discuss timings and age groups",
        "Ask about admission requirements",
        "Confirm current availability"
      ],
      benefits: [
        "Direct communication",
        "Answers to specific questions",
        "Current information from the school",
        "Guidance on next steps"
      ]
    },

    "Email Us": {
      description:
        "Email info.bublinks@gmail.com with questions about Bublinks Preschool & Daycare, programs, timings or admissions. Include your question and your child's age if relevant so the school can better understand your enquiry.",
      icon: "✉️",
      activities: [
        "Ask questions about the programs",
        "Enquire about timings and age groups",
        "Ask which documents are required",
        "Request clarification about next steps"
      ],
      benefits: [
        "A convenient way to make an enquiry",
        "Space to explain your questions",
        "An easy way to share relevant details",
        "A written record of your enquiry"
      ]
    },

    "Preschool Hours": {
      description:
        "Preschool hours are Monday to Friday, 9:00 AM–1:00 PM. Contact Bublinks directly if you need to confirm timings or ask about the preschool program.",
      icon: "☀️",
      activities: [
        "Plan around the stated preschool hours",
        "Ask about program timings",
        "Confirm any timing questions with the school"
      ],
      benefits: [
        "Clearer daily planning",
        "Information for family schedules",
        "A chance to confirm current arrangements"
      ]
    },

    "Daycare Hours": {
      description:
        "Daycare hours are Monday to Friday, 8:30 AM–5:00 PM, and Saturday, 9:00 AM–3:00 PM. Contact Bublinks to confirm current arrangements and discuss your family's timing requirements.",
      icon: "🌻",
      activities: [
        "Plan around the stated daycare hours",
        "Discuss your preferred schedule",
        "Confirm current arrangements with the school"
      ],
      benefits: [
        "Clearer family scheduling",
        "Information for planning care",
        "An opportunity to discuss timing needs"
      ]
    }
  };

  /* =========================================
     6. CARD INFORMATION HELPER
  ========================================= */
  function getCardInfo(card) {
    const heading = card.querySelector("h1, h2, h3, h4");

    const title = (
      card.dataset.detailTitle ||
      heading?.textContent ||
      "Learn More"
    ).trim();

    const matched = cardDetails[title];

    const originalDescription = (
      card.querySelector("p")?.textContent ||
      "Contact Bublinks Preschool & Daycare to learn more."
    ).trim();

    const originalIcon = card.querySelector(
      ".program-icon, .learning-icon, .highlight-icon, .purpose-icon"
    );

    return {
      title,
      description:
        matched?.description ||
        card.dataset.detailDescription ||
        originalDescription,
      icon:
        matched?.icon ||
        card.dataset.detailIcon ||
        originalIcon?.textContent.trim() ||
        "🌼",
      activities:
        matched?.activities || [
          "Explore the topic through age-appropriate examples",
          "Ask questions and share ideas",
          "Contact Bublinks for further information"
        ],
      benefits:
        matched?.benefits || [
          "Curiosity and exploration",
          "Communication and expression",
          "Confidence through learning"
        ]
    };
  }

  /* =========================================
     7. CREATE THE POPUP
  ========================================= */
  const overlay = document.createElement("div");

  overlay.className = "bublinks-detail-overlay";
  overlay.hidden = true;

  overlay.innerHTML = `
    <section class="bublinks-detail-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bublinks-detail-title"
      tabindex="-1">

      <button class="bublinks-detail-close"
        type="button"
        aria-label="Close details">&times;</button>

      <div class="bublinks-detail-icon" aria-hidden="true"></div>
      <h2 id="bublinks-detail-title"></h2>
      <p class="bublinks-detail-description"></p>

      <a class="bublinks-view-full" href="details.html">
        View Full Details →
      </a>
    </section>
  `;

  const styles = document.createElement("style");

  styles.textContent = `
    .bublinks-detail-overlay[hidden] {
      display: none !important;
    }

    .bublinks-detail-overlay {
      position: fixed;
      inset: 0;
      z-index: 1000000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      background: rgba(20, 39, 56, 0.58);
      backdrop-filter: blur(4px);
      box-sizing: border-box;
    }

    .bublinks-detail-modal {
      position: relative;
      width: min(100%, 560px);
      max-height: 85vh;
      overflow-y: auto;
      padding: 36px;
      border-radius: 24px;
      background: #fff;
      color: #193b56;
      box-shadow: 0 20px 70px rgba(0, 0, 0, 0.22);
      line-height: 1.7;
      box-sizing: border-box;
    }

    .bublinks-detail-modal h2 {
      margin: 10px 0 14px;
      color: #193b56;
      line-height: 1.3;
    }

    .bublinks-detail-description {
      margin: 0 0 24px;
      color: #53677a;
      white-space: pre-line;
    }

    .bublinks-detail-icon {
      font-size: 42px;
      line-height: 1.2;
    }

    .bublinks-detail-close {
      position: absolute;
      top: 12px;
      right: 16px;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;
      background: #fff0f4;
      color: #193b56;
      font-size: 28px;
      cursor: pointer;
    }

    .bublinks-view-full {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 30px;
      background: #287db3;
      color: #fff;
      font-weight: 700;
      text-decoration: none;
    }

    .bublinks-view-full:hover {
      background: #1b628f;
    }

    [data-bublinks-interactive="true"] {
      cursor: pointer;
    }

    [data-bublinks-interactive="true"]:focus-visible {
      outline: 3px solid #f29ab7;
      outline-offset: 4px;
    }

    @media (max-width: 600px) {
      .bublinks-detail-modal {
        padding: 30px 22px;
      }
    }
  `;

  document.head.appendChild(styles);
  document.body.appendChild(overlay);

  const closeButton = overlay.querySelector(".bublinks-detail-close");
  const titleNode = overlay.querySelector("#bublinks-detail-title");
  const descriptionNode = overlay.querySelector(".bublinks-detail-description");
  const iconNode = overlay.querySelector(".bublinks-detail-icon");
  const fullDetailsLink = overlay.querySelector(".bublinks-view-full");

  let previouslyFocusedElement = null;

  function openPopup(card) {
    const info = getCardInfo(card);

    sessionStorage.setItem(
      "bublinks-return-scroll",
      JSON.stringify({
        page: currentPage,
        x: window.scrollX,
        y: window.scrollY
      })
    );

    previouslyFocusedElement = document.activeElement;

    titleNode.textContent = info.title;
    descriptionNode.textContent = info.description;
    iconNode.textContent = info.icon;

    const params = new URLSearchParams({
      title: info.title,
      description: info.description,
      icon: info.icon,
      activities: JSON.stringify(info.activities),
      benefits: JSON.stringify(info.benefits),
      from: currentPage
    });

    fullDetailsLink.href = `details.html?${params.toString()}`;

    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closePopup() {
    overlay.hidden = true;
    document.body.style.overflow = "";

    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }

  closeButton.addEventListener("click", closePopup);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closePopup();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closePopup();
    }
  });

  /* =========================================
     8. MAKE CARDS INTERACTIVE
  ========================================= */
  const cardSelectors = [
    ".program-card",
    ".learning-card",
    ".activity-card",
    ".purpose-card",
    ".contact-card",
    ".gallery-card",
    ".gallery-item",
    ".admission-card",
    ".admission-step",
    ".highlight-card",
    ".welcome-highlight",
    ".program-grid article",
    ".learning-grid article",
    ".activity-grid article",
    ".contact-grid article",
    ".hours-panel > div",
    "main article"
  ].join(",");

  const cards = [...new Set(document.querySelectorAll(cardSelectors))];

  cards.forEach((card) => {
    if (card.dataset.bublinksInitialized === "true") return;

    const heading = card.querySelector("h1, h2, h3, h4");

    if (!heading && !card.dataset.detailTitle) return;

    card.dataset.bublinksInitialized = "true";
    card.dataset.bublinksInteractive = "true";

    if (!card.hasAttribute("tabindex")) {
      card.setAttribute("tabindex", "0");
    }

    if (!card.hasAttribute("role")) {
      card.setAttribute("role", "button");
    }

    const info = getCardInfo(card);
    card.setAttribute("aria-label", `View details: ${info.title}`);

    card.addEventListener("click", (event) => {
      if (
        event.target.closest(
          "a, button, input, select, textarea, label, form"
        )
      ) {
        return;
      }

      openPopup(card);
    });

    card.addEventListener("keydown", (event) => {
      if (event.target !== card) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPopup(card);
      }
    });
  });

  /* =========================================
     9. FULL DETAILS PAGE
  ========================================= */
  if (currentPage === "details.html") {
    const params = new URLSearchParams(window.location.search);

    const title = params.get("title") || "Explore Bublinks";
    const description =
      params.get("description") ||
      "Discover more about Bublinks Preschool & Daycare.";
    const icon = params.get("icon") || "🌼";
    const from = params.get("from") || "index.html";

    function readArrayParam(name, fallback) {
      try {
        const value = JSON.parse(params.get(name) || "null");

        if (
          Array.isArray(value) &&
          value.every((item) => typeof item === "string")
        ) {
          return value;
        }
      } catch {
        // Use the fallback if the URL contains invalid JSON.
      }

      return fallback;
    }

    const activities = readArrayParam("activities", [
      "Explore the topic through age-appropriate examples",
      "Ask questions and share ideas",
      "Contact Bublinks for further information"
    ]);

    const benefits = readArrayParam("benefits", [
      "Curiosity and exploration",
      "Communication and expression",
      "Confidence through learning"
    ]);

    const allowedPages = [
      "index.html",
      "about.html",
      "program.html",
      "gallary.html",
      "admission.html",
      "contact.html"
    ];

    const pageNames = {
      "index.html": "Home",
      "about.html": "About Us",
      "program.html": "Programs",
      "gallary.html": "Gallery",
      "admission.html": "Admissions",
      "contact.html": "Contact"
    };

    const returnPage = allowedPages.includes(from) ? from : "index.html";

    const detailTitle = document.getElementById("detail-page-title");
    const detailDescription = document.getElementById("detail-page-description");
    const detailIcon = document.getElementById("detail-page-icon");
    const activitiesList = document.getElementById("detail-page-activities");
    const benefitsList = document.getElementById("detail-page-benefits");
    const backLink = document.getElementById("back-to-page");

    if (detailTitle) detailTitle.textContent = title;
    if (detailDescription) detailDescription.textContent = description;
    if (detailIcon) detailIcon.textContent = icon;

    function addListItems(listElement, items) {
      if (!listElement) return;

      listElement.replaceChildren();

      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
      });
    }

    addListItems(activitiesList, activities);
    addListItems(benefitsList, benefits);

    if (backLink) {
      backLink.href = returnPage;
      backLink.textContent = `← Back to ${pageNames[returnPage]}`;

      backLink.addEventListener("click", (event) => {
        let savedPosition = null;

        try {
          savedPosition = JSON.parse(
            sessionStorage.getItem("bublinks-return-scroll") || "null"
          );
        } catch {
          savedPosition = null;
        }

        if (!savedPosition || savedPosition.page !== returnPage) return;

        event.preventDefault();

        sessionStorage.removeItem("bublinks-return-scroll");

        sessionStorage.setItem(
          "bublinks-pending-scroll",
          JSON.stringify({
            x: savedPosition.x || 0,
            y: savedPosition.y || 0
          })
        );

        window.location.href = returnPage;
      });
    }

    document.title = `${title} | Bublinks Preschool & Daycare`;
  }
});
