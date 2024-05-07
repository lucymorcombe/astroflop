# astroflop
Web Design 2 Project 

My original plan for my website, was for a site called StreamEase. This was intended to be a platform for browsing and searching films that are available to stream online for free with the option to filter by the streaming services that you already have access to.

I did my presentation on this project and had created the project bar the fetching and displaying of the API data. When I got to this stage, I ran into some big problems. I was initially using the WatchMode API, but during coding I realised that what I was trying to do was above my skillset. I attempted to implement this many times and spent a lot of time re-learning the basics of Java and React to make more sense of the documentation, but to no avail. I then decided to use a simpler API to be able to search films – MoviesDatabase API. I wanted to ensure my page would have some functionality and that I was fetching and displaying data from an API but, still, this wasn’t working for me. I could fetch the data and show it in the console, but I couldn’t get this to show on my site. I spoke with Koundinya and posted my question on StackOverflow, but even with this advice the data still wasn’t displaying on the page.

This was very frustrating and after spending 10+ hours looking at the same code and trying different methods to make it work, I decided to start a new project. I wanted to hand in something that I was happy with and that was functional. As my project now doesn’t align with anything said in my presentation, I will cover those topics below to give you an idea of the process that went into this site.

Introducing…

Astro-FLOP!

Astro-FLOP is an astrology site built for people who hate astrology but feel like they’re missing out. With more and more people taking an interest in and identifying with astrology, it’s hard to avoid this conversation and it can get frustrating not being able to get involved. With a laid-back feel and informal copy, Astro-FLOP aims to relate to its user and provide a space for complete beginners to try to understand what the fuss is about. 

The home page welcomes the reluctant user with bright colours (in both light and dark mode), minimal text, and a relatable tone of voice. It features a ‘Contact Us’ section, powered by HeroTofu (HeroTofu, 2023), encouraging users to get in touch if there’s anything they’d like to learn about that hasn’t been included, or with any comments they have.

The second and third pages are more text heavy, but this is paired with white (or pink/purple) space and images to minimise the intensity of the text. The amount of text is needed for the site to fulfil its purpose, but to keep the target audience (already disinterested astrology-haters) interested, I had to use the aforementioned methods so not to overwhelm them. The third page, specifically, has more text than the second, and less blank space around it. I aimed to offset this by making the top of the page and the start of the content, as segmented as possible. I split the main points into their own boxes and used a large, bright banner to highlight the information before it becomes more text heavy, so the users first look at the page isn’t too overwhelming. 

The final page is where the user can read their horoscope for yesterday, today, or tomorrow. For this, I used the SandipBgt API, and the user is able to search this data by first selecting their sun sign, and then selecting whether they would like to read todays, yesterdays, or tomorrows horoscope. The API I fetched this data from includes information about the owner, which I would’ve liked to have been able to target. Making this smaller and on a separate line to the rest of the text would’ve looked neater. I researched this and I don’t think it’s possible to change the content of API data, but for design purposes that would’ve been great.

Other than the horoscope section on my site, all of the information is hard coded. It would’ve been great to be able to access this data from an API but in the timeframe I was working with after changing my project, I felt this was the best way forward. 

I definitely faced a lot of technical difficulties during this project, but feel like I managed to overcome most of them, bar the issues I had with the first two APIs I tried to implement. Even though this wasn’t successful, in trying to make it work I learned a lot more about React and heightened my understanding – which made not being able to complete that aspect even more frustrating, as I felt I understood what was happening, but I didn’t know how to fix it.

Overall, I’m really happy with how my project turned out and I’m glad I started fresh. Completing the final site in a short time frame made me more confident in the skills I’ve learned this term.

**Research Process**

The research process for this site wasn’t as lengthy as I would’ve liked due to the time limitations,I found myself dealing with, but I visited other astrology websites and thought what works well and what I could do better:

cafeastrology.com - Text heavy throughout, almost has too much information. As I wanted my site to be beginner friendly, I fine-tuned the topics to include only the need-to-know i.e. sun, moon and rising signs.

astrology.com – Again, helped me decide to fine-tune the information. This site covers Chinese signs as well as Zodiac signs and I chose to only cover Zodiac signs in my site, to not overwhelm a complete beginner.

**Technical Implementation**

My goal was to code as much of my site as I could by myself to really get to grips with React. I didn’t use any libraries, but I did use HeroTofu for the contact us form and followed their guide to implement this.

I used SandipBgt API for my data and followed a YouTube tutorial to implement this (Web Dev Cody, 2020).

**Analytics**

If I were to use analytics on my site, I would do this using Google Analytics to work out which pages are most popular with users – where they are spending the most and least time. I would use this information to create ads for the pages that are the most popular, and ensure more work is put into pages that aren’t receiving as much traction. 

I would take the necessary steps to make Google Analytics GDPR compliant. Including, gaining user consent for any cookies and implementing a detailed privacy policy for Astro-FLOP. Within Google Analytics, website owners have control over the data that is collected. I would ensure that only the data I need is recorded e.g. broad location data would be helpful, but latitude and longitude coordinates are not necessary.

**Ethical Responsibilities**

As I will use cookies for analytics, all users will be able to learn what is being tracked and consent to or decline these before any tracking begins. 

Making my site accessible to users with disabilities, free, and easy to use means that it is readily available to users from all backgrounds.

All images used on my site are SVGs, which have very small file sizes. This not only helps with loading times but makes my site greener. 

**Accessibility**

I chose my colour scheme using randoma11y to select the two primary colours, the purple and the pink. I then found each of their complementary colours to act as the accent colours. 

Ensuring that the text is easily readable is important to ensure that all users, no matter their vision, can access the content. I also included a toggle day/night mode button so that the user can experience the site in whichever way they prefer. Whilst most user’s prefer dark mode, this isn’t true for everyone so allowing a choice is important.

Astro-Flop is fully responsive to ensure the content is available on any device. This was implemented using media queries, flexbox and css grid. 

Detailed image alt text, appropriate headings, and descriptive urls all ensure that the content of my site can be accessed by users with vision impairments and can be read easily by screen readers.

**References**

Web Dev Cody (2020) Live coding a horoscope app using react, YouTube. Available at: https://www.youtube.com/watch?v=8r9ZExFBi6U (Accessed: 30 April 2024). 

Free vector: Zodiac signs, Doodle Art Black & white illustration graphic set vector (no date) Freepik. Available at: https://www.freepik.com/free-vector/zodiac-signs-doodle-art-black-white-illustration-graphic-set-vector_20776469.htm#query=zodiac%20svg&position=2&from_view=keyword&track=ais&uuid=721dd501-6e5e-4b95-aaa3-a3fb5a6ae0fc (Accessed: 01 May 2024). 

HeroTofu (2023) React contact form with frontend code only. send emails or save to google spreasheet, HeroTofu. Available at: https://herotofu.com/solutions/guides/react-contact-form (Accessed: 06 May 2024). 

