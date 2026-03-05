export interface BlogSection {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  readingTime: string;
  excerpt: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-do-first-30-days-after-loss",
    title: "What to Do in the First 30 Days After Losing a Loved One",
    category: "Practical Guide",
    categoryColor: "#8A8EE5",
    date: "February 28, 2026",
    readingTime: "7 min read",
    excerpt:
      "The weeks after losing someone you love can feel impossible to navigate. Here\u2019s a gentle, practical roadmap for the tasks that need attention \u2014 and permission to take them one at a time.",
    sections: [
      {
        heading: "First, breathe",
        paragraphs: [
          "Before anything else, know this: there is no perfect way to do this. The to-do list can feel endless, but very few things truly need to happen today. Give yourself permission to move slowly.",
          "If you can, ask one person \u2014 a sibling, a friend, a neighbor \u2014 to be your \u201Cpractical partner.\u201D Someone who can make calls, take notes, and sit beside you when the paperwork feels like too much.",
        ],
      },
      {
        heading: "Week 1: The essentials",
        paragraphs: [
          "The first week is about safety, support, and the bare minimum logistics. Don\u2019t try to do everything. Focus on what\u2019s urgent.",
        ],
        listItems: [
          "Notify immediate family and close friends",
          "Contact the funeral home or cremation service",
          "Secure the home and any valuables of the deceased",
          "Locate the will, if one exists, and identify the executor",
          "Request 10\u201315 certified copies of the death certificate \u2014 you\u2019ll need more than you think",
          "Notify the employer (yours and theirs) about the loss",
        ],
      },
      {
        heading: "Weeks 2\u20133: Notifications and paperwork",
        paragraphs: [
          "Once the immediate arrangements are made, the administrative reality sets in. This is where many people feel blindsided \u2014 the sheer volume of calls, forms, and deadlines.",
        ],
        listItems: [
          "Contact the Social Security Administration to report the death",
          "Notify the bank, credit card companies, and mortgage lender",
          "File the life insurance claim \u2014 most policies have no deadline, but earlier is better",
          "Forward mail and cancel or transfer utility accounts",
          "Begin gathering financial documents: tax returns, account statements, deeds",
          "Notify the DMV, voter registration, and any subscription services",
        ],
      },
      {
        heading: "Week 4: Looking ahead",
        paragraphs: [
          "By the end of the first month, the urgency starts to fade but the weight doesn\u2019t. This is a good time to begin organizing what\u2019s been done and what still lies ahead.",
        ],
        listItems: [
          "Create a master list of all accounts, contacts, and open tasks",
          "Meet with an estate attorney if probate is required",
          "Review your own financial situation \u2014 income, insurance, benefits",
          "Begin thinking about long-term changes (housing, work, childcare)",
          "Check in with yourself: are you eating, sleeping, asking for help?",
        ],
      },
      {
        heading: "You don\u2019t have to do this alone",
        paragraphs: [
          "The modern experience of loss is overwhelming not because people are weak, but because the systems around us weren\u2019t built for this moment. There\u2019s no central place to go, no single checklist that covers everything, and no one person who can walk you through it all.",
          "That\u2019s exactly what LightPath was built to change. A structured, AI-powered care plan that adapts to your situation \u2014 your state, your role, your timeline \u2014 so you never have to wonder what comes next.",
        ],
      },
    ],
  },
  {
    slug: "hidden-financial-cost-of-grief",
    title: "The Hidden Financial Cost of Grief: Why Missed Deadlines Matter",
    category: "Financial",
    categoryColor: "#E59524",
    date: "February 20, 2026",
    readingTime: "6 min read",
    excerpt:
      "Grief doesn\u2019t just take an emotional toll \u2014 it quietly drains bank accounts, forfeits benefits, and creates financial chaos that can last years. Here\u2019s what the numbers reveal.",
    sections: [
      {
        heading: "The cost no one talks about",
        paragraphs: [
          "When someone dies, the conversation centers on the funeral, the family, the emotional aftermath. What rarely gets discussed is the financial devastation that follows \u2014 not from the death itself, but from the administrative chaos that comes after.",
          "The numbers are staggering. Over $15.5 billion in survivor benefits go unclaimed every year in the United States, simply because grieving families miss deadlines, don\u2019t know what they\u2019re entitled to, or can\u2019t navigate the process.",
        ],
      },
      {
        heading: "Why deadlines get missed",
        paragraphs: [
          "It\u2019s not negligence. It\u2019s grief. Research shows that cognitive function is significantly impaired during bereavement \u2014 memory, decision-making, and executive function all take a hit. At the exact moment when the most complex administrative tasks pile up, your brain is least equipped to handle them.",
        ],
        listItems: [
          "Life insurance claims typically need supporting documents within 30\u201360 days",
          "Social Security survivor benefits require timely filing to avoid losing months of payments",
          "Employer benefits (401k, pension, stock options) often have strict notification windows",
          "Tax obligations don\u2019t pause \u2014 the estate may owe quarterly payments",
          "Statute of limitations on certain claims can expire within months",
        ],
      },
      {
        heading: "The ripple effect",
        paragraphs: [
          "A single missed deadline can cascade. Miss the life insurance filing window, and you may need to go through an extended claims process. Fail to notify Social Security promptly, and you could lose months of benefits. Let a mortgage payment lapse because you didn\u2019t know about the automatic debit, and you\u2019re suddenly dealing with late fees and credit damage.",
          "The average estate takes 570 hours of administrative work spread over 16 months. That\u2019s the equivalent of a part-time job, performed by someone in the worst emotional state of their life.",
        ],
      },
      {
        heading: "Prevention is possible",
        paragraphs: [
          "The financial toll of grief isn\u2019t inevitable. It\u2019s a systems problem \u2014 and systems problems have systems solutions. Knowing what deadlines exist, which benefits you\u2019re eligible for, and what steps to take (in what order) can save families tens of thousands of dollars.",
          "This is why LightPath builds a personalized care plan with built-in deadlines and reminders. The AI identifies which benefits apply to your situation, drafts the necessary letters, and ensures nothing falls through the cracks \u2014 so grief doesn\u2019t come with a financial penalty.",
        ],
      },
    ],
  },
  {
    slug: "supporting-grieving-employee-guide",
    title: "How to Support a Grieving Employee: A Guide for Managers",
    category: "Workplace",
    categoryColor: "#63D583",
    date: "February 12, 2026",
    readingTime: "6 min read",
    excerpt:
      "When a team member experiences a loss, most managers want to help but don\u2019t know how. Here\u2019s a framework for showing up with compassion while keeping the team supported.",
    sections: [
      {
        heading: "The moment that changes everything",
        paragraphs: [
          "You get the message: someone on your team has lost a parent, a spouse, a child. Your instinct is to help. But what do you actually do? Most managers receive zero training on supporting grieving employees, and the result is a patchwork of awkward silences, well-meaning clich\u00E9s, and policies that feel more bureaucratic than human.",
          "Grief in the workplace is extraordinarily common. Over 2.8 million people die in the United States each year, and every one of those losses ripples outward to family members, friends, and coworkers. Studies show that 57% of bereaved employees feel unsupported by their employer during their time of need.",
        ],
      },
      {
        heading: "What not to do",
        paragraphs: [
          "Before we cover best practices, let\u2019s address the most common mistakes \u2014 usually made with the best of intentions.",
        ],
        listItems: [
          "Don\u2019t say \u201CLet me know if you need anything\u201D \u2014 grieving people rarely ask; offer specifics instead",
          "Don\u2019t set a timeline for \u201Cgetting back to normal\u201D \u2014 grief doesn\u2019t follow a schedule",
          "Don\u2019t avoid the person \u2014 awkward acknowledgment is better than silence",
          "Don\u2019t make assumptions about what they need \u2014 ask, then listen",
          "Don\u2019t treat bereavement leave as the end of support \u2014 it\u2019s the beginning",
        ],
      },
      {
        heading: "A practical framework for managers",
        paragraphs: [
          "Supporting a grieving employee doesn\u2019t require a counseling degree. It requires intention, flexibility, and follow-through.",
        ],
        listItems: [
          "Day 1: Send a brief, genuine message. Keep it simple. \u201CI\u2019m so sorry. We\u2019re here for you.\u201D",
          "Week 1: Handle logistics on their behalf \u2014 reassign projects, notify the team, clear their calendar",
          "Return to work: Offer a gradual ramp-up. Reduced hours, flexible schedule, lighter workload",
          "Month 1\u20133: Check in regularly. Not \u201CHow are you?\u201D but \u201CWhat would help this week?\u201D",
          "Ongoing: Recognize grief anniversaries. The first birthday, the first holiday \u2014 these are hard days",
        ],
      },
      {
        heading: "The business case for compassion",
        paragraphs: [
          "Beyond the human imperative, there\u2019s a clear business case. Employees who feel supported during bereavement are 3x more likely to stay with their employer long-term. Those who don\u2019t feel supported report higher rates of burnout, disengagement, and turnover.",
          "Companies that partner with LightPath provide their employees with immediate access to a structured care plan, document management, and emotional support \u2014 so managers don\u2019t have to be grief counselors, and employees don\u2019t have to navigate the hardest time of their lives alone.",
        ],
      },
    ],
  },
  {
    slug: "estate-administration-beginners-guide",
    title: "Understanding Estate Administration: A Beginner\u2019s Guide",
    category: "Legal & Admin",
    categoryColor: "#8F82CD",
    date: "February 5, 2026",
    readingTime: "8 min read",
    excerpt:
      "If you\u2019ve been named executor or are simply trying to close a loved one\u2019s affairs, estate administration can feel like learning a new language. Here\u2019s what you need to know.",
    sections: [
      {
        heading: "What is estate administration?",
        paragraphs: [
          "Estate administration is the process of settling a deceased person\u2019s financial and legal affairs. It includes everything from paying outstanding debts and filing final tax returns to distributing assets to beneficiaries. If there\u2019s a will, the named executor leads this process. If there\u2019s no will, the court appoints an administrator.",
          "For most families, this is entirely new territory. There\u2019s no class for it, no manual, and the rules vary by state. The result: a process that should be straightforward becomes months of confusion, expensive legal fees, and emotional exhaustion.",
        ],
      },
      {
        heading: "Probate: what it is and when it\u2019s required",
        paragraphs: [
          "Probate is the court-supervised process of validating a will and overseeing the distribution of assets. Not every estate requires probate \u2014 small estates, jointly-held property, and assets with named beneficiaries (like life insurance or retirement accounts) often bypass it entirely.",
          "When probate is required, the timeline varies dramatically by state. Some states have simplified procedures for smaller estates, while others require full court proceedings that can take 6\u201318 months.",
        ],
        listItems: [
          "File the will with the local probate court",
          "Petition for appointment as executor/administrator",
          "Provide notice to creditors (required in most states)",
          "Inventory all assets and debts",
          "Pay valid claims, taxes, and administrative expenses",
          "Distribute remaining assets to beneficiaries",
          "File a final accounting with the court",
        ],
      },
      {
        heading: "Common mistakes to avoid",
        paragraphs: [
          "Estate administration has real legal consequences. Mistakes can result in personal liability for the executor, delayed distributions, or family disputes.",
        ],
        listItems: [
          "Distributing assets before all debts and taxes are paid",
          "Missing the deadline for filing the estate tax return (9 months from date of death)",
          "Failing to notify all creditors within the required window",
          "Commingling estate funds with personal accounts",
          "Not keeping detailed records of every transaction and decision",
        ],
      },
      {
        heading: "When to get professional help",
        paragraphs: [
          "Not every estate needs an attorney, but many do. If the estate involves real property in multiple states, business interests, significant debt, or family disagreements, professional guidance isn\u2019t optional \u2014 it\u2019s essential.",
          "Even for simpler estates, having a structured system makes the difference between months of chaos and a clear path forward. LightPath\u2019s AI-powered care plan walks you through each step of estate administration based on your state\u2019s specific requirements, tracks your deadlines, and auto-generates the letters and forms you need along the way.",
        ],
      },
    ],
  },
  {
    slug: "self-care-during-grief",
    title: "Self-Care During Grief: Small Tools That Make a Big Difference",
    category: "Wellness",
    categoryColor: "#E59524",
    date: "January 28, 2026",
    readingTime: "5 min read",
    excerpt:
      "In the middle of estate paperwork and phone calls, it\u2019s easy to forget about yourself. Here are gentle, evidence-based tools to help you stay grounded when everything feels unsteady.",
    sections: [
      {
        heading: "Why self-care matters more than you think",
        paragraphs: [
          "When you\u2019re grieving, self-care can feel selfish. There\u2019s so much to do, so many people to notify, so many decisions to make. Taking a walk or writing in a journal feels trivial compared to the mountain of tasks in front of you.",
          "But here\u2019s what the research shows: grief is not just emotional \u2014 it\u2019s physical. It disrupts sleep, weakens the immune system, impairs memory, and increases the risk of heart disease. Taking care of your body isn\u2019t a luxury; it\u2019s what allows you to keep going.",
        ],
      },
      {
        heading: "Micro-practices that actually help",
        paragraphs: [
          "You don\u2019t need an hour of meditation or a spa day. The most effective grief-support tools are small, repeatable, and accessible in the moments when you need them most.",
        ],
        listItems: [
          "Box breathing (4\u20134\u20134\u20134): Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat 3\u20134 times. This activates your parasympathetic nervous system and can reduce anxiety in under two minutes",
          "The 5-4-3-2-1 grounding technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. This pulls you out of spiraling thoughts and into the present moment",
          "Three-sentence journaling: Write just three sentences each day. What happened, how you feel, what you need. Over time, patterns emerge that help you understand your grief",
          "The 10-minute walk: Not for exercise. For transition. A short walk between tasks resets your nervous system and creates a boundary between the administrative and the emotional",
        ],
      },
      {
        heading: "Building a grief toolkit",
        paragraphs: [
          "Think of self-care during grief not as a single activity but as a toolkit \u2014 a collection of small practices you can reach for depending on what you need in the moment. Some days you need movement. Some days you need stillness. Some days you need to write it out, and some days you need to stare at the ceiling.",
          "The key is having the tools available before you need them. When you\u2019re in the depths of a grief wave, you won\u2019t have the energy to research breathing techniques or find a journaling prompt. You need them ready and waiting.",
        ],
      },
      {
        heading: "Let the system carry the weight",
        paragraphs: [
          "The hardest part of grief isn\u2019t the sadness. It\u2019s the sadness plus the logistics. When you\u2019re spending 4 hours a day on hold with insurance companies, there\u2019s no energy left for healing.",
          "LightPath\u2019s Inner Light feature provides an adaptive wellness toolkit built directly into your care plan \u2014 guided breathing, journaling prompts, reflections, and memory tools that evolve with your journey. And because LightPath\u2019s AI handles the administrative burden, you actually have the bandwidth to use them.",
        ],
      },
    ],
  },
  {
    slug: "what-to-say-to-grieving-person",
    title: "What to Say (and Not Say) to Someone Who Is Grieving",
    category: "Relationships",
    categoryColor: "#D97A8B",
    date: "January 20, 2026",
    readingTime: "7 min read",
    excerpt:
      "When someone you care about is grieving, finding the right words feels impossible. That\u2019s because it is \u2014 no words can fix this. But the right ones can make someone feel less alone.",
    sections: [
      {
        heading: "Why words matter so much",
        paragraphs: [
          "When someone is grieving, the people around them often feel paralyzed. You want to say something meaningful, but you\u2019re terrified of saying the wrong thing. So you say nothing. Or you fall back on a well-worn phrase that sounds comforting but actually lands like a dismissal.",
          "Bereavement researchers have studied this dynamic extensively. Studies on social support during grief consistently show that the most harmful responses are those that minimize, redirect, or try to explain the loss \u2014 even when they\u2019re well-intentioned. The most helpful responses, by contrast, are those that simply acknowledge the pain and show up without trying to fix it.",
        ],
      },
      {
        heading: "What not to say",
        paragraphs: [
          "Most of these phrases come from a genuine desire to comfort. But research on grief communication shows that they tend to shut people down rather than open them up. Understanding why they hurt can help you find better alternatives.",
        ],
        listItems: [
          "\u201CThey\u2019re in a better place\u201D \u2014 This reframes the loss as something positive, which can feel dismissive of the griever\u2019s pain. It prioritizes theology over empathy.",
          "\u201CAt least they lived a long life\u201D \u2014 Any sentence beginning with \u201Cat least\u201D minimizes grief. Research by Lehman, Ellard, and Wortman found that \u201Cforced optimism\u201D is one of the least helpful responses to bereavement.",
          "\u201CI know how you feel\u201D \u2014 No two losses are the same, and no two grief experiences are identical. This phrase can feel like you\u2019re claiming space in their pain rather than honoring it.",
          "\u201CEverything happens for a reason\u201D \u2014 Attempting to assign meaning to someone else\u2019s loss is one of the most common sources of hurt. The bereaved person may eventually find their own meaning, but it must come from them.",
          "\u201CYou need to be strong\u201D \u2014 This implies that grieving openly is weakness. Psychologists have long established that emotional expression during bereavement is healthy and necessary for processing loss.",
          "\u201CIt\u2019s been a while \u2014 are you doing better?\u201D \u2014 Grief doesn\u2019t have a timeline. This question implies they should be \u201Cover it\u201D by now, which can create shame around continued mourning.",
        ],
      },
      {
        heading: "What to say instead",
        paragraphs: [
          "The best things you can say to a grieving person share a common thread: they acknowledge the reality of the loss, they don\u2019t try to fix or explain it, and they communicate presence.",
        ],
        listItems: [
          "\u201CI\u2019m so sorry. I don\u2019t have the right words, but I\u2019m here.\u201D \u2014 Honesty about your own limitations is powerful. It says: your pain is real, and I\u2019m not going to pretend I can take it away.",
          "\u201CDo you want to tell me about them?\u201D \u2014 Using the deceased person\u2019s name and inviting memories validates their continued importance. Grief therapists call this \u201Ccontinuing bonds\u201D \u2014 the healthy ongoing relationship with someone who has died.",
          "\u201CThis must be incredibly hard. I\u2019m thinking of you.\u201D \u2014 Simple acknowledgment without advice or interpretation. This is what researchers call \u201Cemotional validation\u201D \u2014 one of the most helpful forms of social support.",
          "\u201CI\u2019m bringing dinner Tuesday. Does 6 work?\u201D \u2014 Specific, concrete offers are far more useful than open-ended \u201CLet me know if you need anything.\u201D Grieving people rarely have the energy to delegate tasks.",
          "\u201CThere\u2019s no right way to do this. Take all the time you need.\u201D \u2014 This gives permission to grieve in whatever way feels natural, without a timeline or expectation.",
          "\u201CI haven\u2019t forgotten. I\u2019m still here.\u201D \u2014 Saying this weeks or months later can be the most meaningful of all. Most support disappears after the first two weeks; ongoing presence is what matters most.",
        ],
      },
      {
        heading: "Beyond words: how to show up",
        paragraphs: [
          "What you do often matters more than what you say. Research on bereavement support consistently finds that practical, sustained action is valued most highly by grieving individuals.",
        ],
        listItems: [
          "Be specific with help: instead of asking what they need, just do something \u2014 mow their lawn, pick up groceries, handle a phone call",
          "Follow up weeks and months later, not just in the first few days. Grief intensifies after the initial support network fades",
          "Don\u2019t avoid them. Awkward, imperfect presence is infinitely better than absence. Research shows that social withdrawal from bereaved individuals increases their risk of complicated grief",
          "Mention the person who died by name. Many grieving people fear their loved one will be forgotten. Hearing the name spoken aloud can be deeply comforting",
          "Recognize that grief has no endpoint. Anniversaries, birthdays, holidays, and ordinary Tuesdays can all be hard. Check in during these times",
        ],
      },
      {
        heading: "The courage to be present",
        paragraphs: [
          "Supporting a grieving person doesn\u2019t require perfect words. It requires the willingness to sit with someone in pain without trying to make it better. That takes real courage \u2014 the courage to be uncomfortable, to not have answers, and to show up again and again when the rest of the world has moved on.",
          "If someone you care about is navigating loss, LightPath can help you understand what they\u2019re going through. Our care plan helps families manage the overwhelming logistics of loss, giving supporters a clear picture of what\u2019s happening and how to help \u2014 so your presence can be focused where it matters most.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
