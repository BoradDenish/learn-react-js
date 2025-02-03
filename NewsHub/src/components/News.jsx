import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  artical = [
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Allison Johnson",
      "title": "The Samsung Galaxy S25 Ultra isn’t so ‘ultra’ anymore - The Verge",
      "description": "The Samsung Galaxy S25 Ultra is a great phone, but it doesn’t feel as special as it once did — and Galaxy AI is still a work in progress.",
      "url": "https://www.theverge.com/reviews/604154/samsung-galaxy-s25-ultra-review-ai-screen-battery",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/01/DSC09399_processed.jpg?quality=90&strip=all&crop=0%2C10.723165084465%2C100%2C78.55366983107&w=1200",
      "publishedAt": "2025-02-01T14:00:00Z",
      "content": "Still big. Still great. But Samsung is losing the plot on what makes the Ultra so extra.\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nWhen you … [+12400 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Isaac Avilucea, Kristen Hinman",
      "title": "Six people dead after plane crashes into Northeast Philly neighborhood - Axios",
      "description": "The Learjet was carrying a pediatric patient from Shriners Children's Hospital who was flying home to Mexico.",
      "url": "https://www.axios.com/local/philadelphia/2025/02/01/plane-crash-northeast-philly",
      "urlToImage": "https://images.axios.com/9Y2ltJeJRLCVOgkf7VglPA0_0VY=/0x47:3000x1735/1366x768/2025/02/01/1738416170139.jpg",
      "publishedAt": "2025-02-01T13:18:45Z",
      "content": "A small jet crashed Friday evening after taking off from Northeast Philadelphia Airport and all six people onboard are dead, city officials said Saturday morning.\r\nThe big picture: The plane crash fo… [+3162 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Mick Krever",
      "title": "‘It’s over, Dad’: Jubilant reunions as latest round of Israeli hostage releases passes smoothly - CNN",
      "description": "Hamas on Saturday released three Israeli hostages from captivity in two orderly handover ceremonies that stood in marked contrast to chaotic scenes earlier this week.",
      "url": "https://www.cnn.com/2025/02/01/middleeast/gaza-israel-hostages-palestinian-prisoners-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/kalderon-4.JPG?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-02-01T12:53:00Z",
      "content": "Hamas on Saturday released three Israeli hostages from captivity in two orderly handover ceremonies that stood in marked contrast to chaotic scenes earlier this week.\r\nAfter 484 days in Gaza, Keith S… [+4451 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "Nicholas Barber",
      "title": "Will Emilia Pérez star Karla Sofía Gascón's offensive X posts derail the Oscar favourite's chances? - BBC.com",
      "description": "The unearthing of inflammatory social media remarks by Emilia Pérez star Karla Sofía Gascón has caused a storm – and may threaten the film's hopes at this year's Academy Awards.",
      "url": "https://www.bbc.com/culture/article/20250131-will-offensive-x-posts-derail-an-oscars-favourite-emilia-perez",
      "urlToImage": "https://ychef.files.bbci.co.uk/624x351/p0kng81j.jpg",
      "publishedAt": "2025-02-01T10:20:00Z",
      "content": "The unearthing of inflammatory social media remarks by the actress about subjects including George Floyd, Islam and the Oscars itself has caused a storm and may threaten the film's overall chances at… [+8388 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Jennifer Hansler, Priscilla Alvarez",
      "title": "Rubio heads to Central America as Trump admin attempts crack down on migration to US - CNN",
      "description": "US Secretary of State Marco Rubio arrives in Panama Saturday for his first trip as the United States’ top diplomat that that will test if his diplomacy can build on President Donald Trump’s bellicose and transactional approach to “American First” foreign poli…",
      "url": "https://www.cnn.com/2025/02/01/politics/rubio-central-america-trip-migration/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-gettyimages-2195101235.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2025-02-01T10:00:00Z",
      "content": "US Secretary of State Marco Rubio arrives in Panama Saturday for his first trip as the United States top diplomat that that will test if his diplomacy can build on President Donald Trumps bellicose a… [+7534 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motley Fool"
      },
      "author": "Dan Victor",
      "title": "What Does Chinese AI Start-Up DeepSeek Mean for Nvidia Stock? - The Motley Fool",
      "description": "",
      "url": "https://www.fool.com/investing/2025/02/01/what-does-chinese-ai-startup-deepseek-mean-for-nvi/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/805386/nvidia-stock-deepseek-threat-or-opportunity-2025.jpg",
      "publishedAt": "2025-02-01T09:12:00Z",
      "content": "DeepSeek, a Chinese artificial intelligence (AI) start-up, is sending shock waves through the U.S. tech sector by demonstrating its latest AI assistant, which achieves performance comparable to or ev… [+5437 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Kyiv Post"
      },
      "author": "Kyiv Post",
      "title": "Russia Launches Massive Deadly Missile, Drone Barrage on Ukraine - Kyiv Post",
      "description": "Among the targets of the Russian missile attack was a five-story building in Poltava, which killed 7 people.",
      "url": "https://www.kyivpost.com/post/46401",
      "urlToImage": "https://static.kyivpost.com/storage/2025/02/01/c3499e600fed7a2eeae1ec68020fcb42.jpeg?w=1200&q=90&f=jpg",
      "publishedAt": "2025-02-01T08:52:22Z",
      "content": "[Updated at 15:34]: The National Police have reported that the death toll in Poltava has risen to seven, with 14 others injured.\r\nEmergency and rescue operations are ongoing, involving more than 460 … [+4917 chars]"
    },
    {
      "source": {
        "id": "associated-press",
        "name": "Associated Press"
      },
      "author": "SHEIKH SAALIQ",
      "title": "Takeaways from India's budget that slashes income tax on the salaried middle class to spur growth - The Associated Press",
      "description": "Indian Prime Minister Narendra Modi’s government has presented an annual budget that focuses on wooing the salaried middle class with tax cuts and spurring economic growth by boosting agriculture and manufacturing. In her budget speech Saturday, Finance Minis…",
      "url": "https://apnews.com/article/india-budget-economy-02d8af3bc495ea3e6d8ff25764772fd1",
      "urlToImage": "https://dims.apnews.com/dims4/default/e597d92/2147483647/strip/true/crop/5515x3102+0+287/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F2c%2F57%2F58abc554e48f54825ade379319aa%2F7603c8526ced4e7aa0dc48892bcbb899",
      "publishedAt": "2025-02-01T08:25:00Z",
      "content": "NEW DELHI (AP) Indian Prime Minister Narendra Modis government presented an annual budget to Parliament on Saturday that focused on wooing the salaried middle class with tax cuts and spurring economi… [+3496 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Jaclyn Peiser",
      "title": "Costco raises nonunion pay to over $30 an hour as union deadline looms - The Washington Post",
      "description": "Starting in March, workers at the top of the pay scale will receive a $1 per hour raise to $30.20, followed by additional $1 raises each year for two years.",
      "url": "https://www.washingtonpost.com/business/2025/01/31/costco-wage-hike-teamsters/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6AKO54LYWR2A6WHP7LKQELVYI4.jpg&w=1440",
      "publishedAt": "2025-02-01T07:11:35Z",
      "content": "Costco is boosting hourly wages to more than $30 an hour for most nonunion U.S. store employees, the company said in a memo to staff this week.\r\nStarting in March, workers at the top of the pay scale… [+2842 chars]"
    },
    {
      "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
      },
      "author": "Lena H. Sun, Dan Keating, Fenit Nirappil",
      "title": "CDC removes gender, equity references in public health material - The Washington Post",
      "description": "Large sets of data are being scrubbed of references to transgender and LGBTQ+ people, among others, which could compromise their use in research.",
      "url": "https://www.washingtonpost.com/health/2025/01/31/cdc-website-gender-lgbtq-data/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PYPGJVWGNYI6ZDH7GOYFT5GBW4.jpg&w=1440",
      "publishedAt": "2025-02-01T06:41:35Z",
      "content": "The Centers for Disease Control and Prevention removed or edited references to transgender people, gender identity and equity from its website Friday, racing to meet a late-afternoon deadline imposed… [+7900 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wrestling Inc."
      },
      "author": "Daisy Ruth",
      "title": "Damian Priest, Jacob Fatu & Others Announce Entry Into 2025 WWE Royal Rumble Matches - Wrestling Inc.",
      "description": "New blue brand roster member Damian Priest, Jacob Fatu, and more declared for the 2025 Royal Rumble match on Friday's \"WWE SmackDown.\"",
      "url": "https://www.wrestlinginc.com/1777657/damian-priest-jacob-fatu-others-announce-entry-2025-wwe-royal-rumble-matches/",
      "urlToImage": "https://www.wrestlinginc.com/img/gallery/damian-priest-jacob-fatu-others-announce-entry-into-2025-wwe-royal-rumble-matches/l-intro-1738386995.jpg",
      "publishedAt": "2025-02-01T05:16:32Z",
      "content": "The fields for the men's and women's Royal Rumble matches continued to fill out on \"WWE SmackDown\" on Friday, the day before the big event, with multiple names added to both matches. New \"SmackDown\" … [+935 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "hoopsrumors.com"
      },
      "author": null,
      "title": "Dejounte Murray Suffers Torn Achilles Tendon - hoopsrumors.com",
      "description": "Murray's first season as a Pelican has come to a premature end. Full story at Hoops Rumors.",
      "url": "https://www.hoopsrumors.com/2025/01/dejounte-murray-suffers-torn-achilles-tendon.html",
      "urlToImage": "https://cdn.hoopsrumors.com/files/2024/11/USATSI_24865300-900x643.jpg",
      "publishedAt": "2025-02-01T03:51:00Z",
      "content": "Pelicans guard Dejounte Murray has torn his right Achilles tendon, ending his 2024/25 season, according to NBA insider Chris Haynes (Twitter link).\r\nMurray suffered the injury in the first quarter of… [+2052 chars]"
    },
    {
      "source": {
        "id": "mashable",
        "name": "Mashable"
      },
      "author": "Mashable Team",
      "title": "Wordle today: The answer and hints for February 1, 2025 - Mashable",
      "description": "Here are some tips and tricks to help you find the answer to \"Wordle\" #1322.",
      "url": "https://mashable.com/article/wordle-today-answer-february-1-2025",
      "urlToImage": "https://helios-i.mashable.com/imagery/articles/07h02sjDepG3b0Fwyln4OnZ/hero-image.fill.size_1200x675.v1738094446.jpg",
      "publishedAt": "2025-02-01T03:04:45Z",
      "content": null
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Jacob Rosen",
      "title": "Former senior adviser for Federal Reserve indicted on economic espionage charges - CBS News",
      "description": "Prosecutors say John Harold Rogers worked with co-conspirators in China to steal trade secrets from the Fed's Board of Governors and Open Market Committee.",
      "url": "https://www.cbsnews.com/news/former-senior-adviser-for-federal-reserve-indicted-on-economic-espionage-charges/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2025/02/01/1448dbe7-9a5f-4605-90e3-ac2d58dec7b0/thumbnail/1200x630g6/64f1930b22ead451534101597d2653f2/gettyimages-1258691266.jpg?v=a599723035d2f104d7a2d01edbe96ef8",
      "publishedAt": "2025-02-01T02:23:54Z",
      "content": "A former senior adviser for the Federal Reserve Board of Governors was arrested on charges of conspiring with Chinese officials to steal Federal Reserve trade secrets, federal court filings unsealed … [+1793 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "2025 Senior Bowl pop or drop: NFL Draft prospects who impressed, underperformed during practices in Mobile - CBS Sports",
      "description": "Prospects like Ole Miss QB Jaxson Dart and Miami TE Elijah Arroyo have turned heads",
      "url": "https://www.cbssports.com/nfl/draft/news/2025-senior-bowl-pop-or-drop-nfl-draft-prospects-who-impressed-underperformed-during-practices-in-mobile/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/01/31/6a7d807d-092e-4646-b4a4-393ebdfc69b7/thumbnail/1200x675/1cd4a80e1b69785e2f28c49155f6f5c8/dart-g.jpg",
      "publishedAt": "2025-02-01T01:34:00Z",
      "content": "The 2025 Senior Bowl practices are in the books, and there was a lot to love from a class that, admittedly, doesn't have the group of quarterbacks we saw in 2024, but has legit depth and plenty of ot… [+11827 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Christine Idzelis",
      "title": "Tech stocks have worst week in months after ‘nobody saw DeepSeek coming’ - MarketWatch",
      "description": "‘Disrupters get disrupted shockingly fast,’ warns Rob Arnott, founder of Research Affiliates",
      "url": "https://www.marketwatch.com/story/tech-stocks-see-worst-week-in-months-after-nobody-saw-deepseek-coming-amid-ai-mania-4de0101c",
      "urlToImage": "https://images.mktw.net/im-48393816/social",
      "publishedAt": "2025-02-01T01:12:00Z",
      "content": "The S&amp;P 500s technology sector just ended its worst week since early September, after Chinese artificial-intelligence company DeepSeek seemed to startle investors perception of winners and losers… [+388 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      articals: this.artical,
      loading: false
    }
  }
  
  render() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Latest News</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {this.state.articals.map((elements) =>{
              return (
                <div key={elements.url} className="h-full">
                <NewsItem
                className="transition duration-300 ease-in-out transform hover:bg-blue-100" 
                title={elements.title}
                description={elements.description} imageUrl={elements.urlToImage} newsUrl={elements.url} />
                </div>
              )
            } 
          )}
        </div>
      </div>
    );
  }
}
