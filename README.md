# astroflop
Web Design 2 Project 

Live url at bottom of file

Introducing…

Astro-FLOP!

Astro-FLOP is an astrology site built for people who hate astrology but feel like they’re missing out. With more and more people taking an interest in and identifying with astrology, it’s hard to avoid this conversation and it can get frustrating not being able to get involved. With a laid-back feel and informal copy, Astro-FLOP aims to relate to its user and provide a space for complete beginners to try to understand what the fuss is about. 

The home page welcomes the reluctant user with bright colours (in both light and dark mode), minimal text, and a relatable tone of voice. It features a ‘Contact Us’ section, powered by HeroTofu (HeroTofu, 2023), encouraging users to get in touch if there’s anything they’d like to learn about that hasn’t been included, or with any comments they have.

The second and third pages are more text heavy, but this is paired with white (or pink/purple) space and images to minimise the intensity of the text. The amount of text is needed for the site to fulfil its purpose, but to keep the target audience (already disinterested astrology-haters) interested, I had to use the aforementioned methods so not to overwhelm them. The third page, specifically, has more text than the second, and less blank space around it. I aimed to offset this by making the top of the page and the start of the content, as segmented as possible. I split the main points into their own boxes and used a large, bright banner to highlight the information before it becomes more text heavy, so the users first look at the page isn’t too overwhelming. 

The final page is where the user can read their horoscope for yesterday, today, or tomorrow. For this, I used the SandipBgt API, and the user is able to search this data by first selecting their sun sign, and then selecting whether they would like to read todays, yesterdays, or tomorrows horoscope. The API I fetched this data from includes information about the owner, which I would’ve liked to have been able to target. Making this smaller and on a separate line to the rest of the text would’ve looked neater. I researched this and I don’t think it’s possible to change the content of API data, but for design purposes that would’ve been great.

Other than the horoscope section on my site, all of the information is hard coded. It would’ve been great to be able to access this data from an API but in the timeframe I was working with after changing my project, I felt this was the best way forward. 

**Research Process**

The research process for this site wasn’t as lengthy as I would’ve liked due to the time limitations I found myself dealing with, but I visited other astrology websites and thought what works well and what I could do better:

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


----------------------------------------------------------------------------


**Live url** - https://astroflop.netlify.app/

When deploying my site I realised there was an issue with my API. The API I used was of a non-secure HTTP site, and when deploying this on a HTTPS site the entire data fetching section of my site does not display as browsers automatically block mixed content for security. For you to be able to see that I have done this, you can temporarily disable this feature.

On Firefox:
1. Click the padlock icon. in the address bar.
2. Click the arrow in the Site Information panel:
3. Click Disable protection for now.
4. You might need to refresh or return to the homepage if you get any errors.

On Chrome:
1. Click the 'view site information' button to the left of the url.
2. Click site settings.
3. Navigate to 'insecure content' and select allow.
4. Go back to the page and refresh.

It's good to know this now so that in future I can ensure all my APIs are https but frustrating that it causes an error for my site.

Also to note, there's an animation on my homepage that doesn't run in Firefox, this is something that needs looking into as I'd like users to get the same experience of the site no matter which browser they're using.

